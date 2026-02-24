"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";
import Link from "next/link";
import { contactSchema, type ContactFormData } from "@/utils/contact";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

export function ContactForm() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      website: "",
      turnstileToken: "",
    },
  });

  const handleTurnstileToken = useCallback(
    (token: string | null) => {
      setValue("turnstileToken", token ?? "", { shouldValidate: true });
    },
    [setValue]
  );

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileSiteKey) {
      setSubmitError("Verification is not configured. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        setSubmitError(result?.message ?? "Failed to send message. Please try again.");
        setTurnstileResetKey((prev) => prev + 1);
        return;
      }

      setIsSuccess(true);
      reset();
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      setTurnstileResetKey((prev) => prev + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="border-thick bg-accent-1 text-black p-6 box-shadow-hard">
        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
          <Check size={24} />
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">MESSAGE SENT.</h3>
        <p className="font-bold">
          Thanks. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-thick p-4 md:p-6 bg-white text-black box-shadow-hard space-y-4"
      noValidate
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />
      <input type="hidden" {...register("turnstileToken")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="font-bold text-sm">Name</label>
          <input
            {...register("name")}
            autoComplete="name"
            className="w-full border-thick p-3 font-bold text-base focus:outline-none focus:bg-accent-1 transition-colors"
            placeholder="Jane Doe"
          />
          {errors.name && (
            <p className="text-red-600 text-xs font-mono">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="font-bold text-sm">Email</label>
          <input
            {...register("email")}
            autoComplete="email"
            className="w-full border-thick p-3 font-bold text-base focus:outline-none focus:bg-accent-1 transition-colors"
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-xs font-mono">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="font-bold text-sm">Phone (Optional)</label>
          <input
            {...register("phone")}
            autoComplete="tel"
            className="w-full border-thick p-3 font-bold text-base focus:outline-none focus:bg-accent-1 transition-colors"
            placeholder="+94 11 485 8899"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs font-mono">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="font-bold text-sm">Company (Optional)</label>
          <input
            {...register("company")}
            autoComplete="organization"
            className="w-full border-thick p-3 font-bold text-base focus:outline-none focus:bg-accent-1 transition-colors"
            placeholder="Acme Corp"
          />
          {errors.company && (
            <p className="text-red-600 text-xs font-mono">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <label className="font-bold text-sm">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full border-thick p-3 font-bold text-base focus:outline-none focus:bg-accent-1 transition-colors resize-y min-h-[130px]"
          placeholder="Tell us what you need."
        />
        {errors.message && (
          <p className="text-red-600 text-xs font-mono">{errors.message.message}</p>
        )}
      </div>

      <div className="space-y-2">
        {turnstileSiteKey ? (
          <TurnstileWidget
            siteKey={turnstileSiteKey}
            onTokenChange={handleTurnstileToken}
            resetKey={turnstileResetKey}
            size="compact"
          />
        ) : (
          <p className="border-2 border-red-600 bg-red-50 text-red-700 p-3 text-sm font-mono">
            Verification is not configured.
          </p>
        )}
        {errors.turnstileToken && (
          <p className="text-red-600 text-xs font-mono">
            {errors.turnstileToken.message}
          </p>
        )}
      </div>

      {submitError && (
        <p className="border-2 border-red-600 bg-red-50 text-red-700 p-3 text-sm font-mono">
          {submitError}
        </p>
      )}

      <p className="text-xs md:text-sm font-mono text-black/75 leading-relaxed">
        By submitting this form, you agree to our{" "}
        <Link
          href="/terms-of-service"
          className="underline underline-offset-2 hover:text-accent-3 transition-colors"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-2 hover:text-accent-3 transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={isSubmitting || !turnstileSiteKey}
        className="w-full bg-black text-white px-6 py-3 font-bold text-lg hover:bg-accent-3 hover:text-black transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        {!isSubmitting && <Send size={18} />}
      </button>
    </form>
  );
}
