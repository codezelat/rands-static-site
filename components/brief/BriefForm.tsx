"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINES,
  briefSchema,
  type BriefFormData,
} from "@/utils/brief";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

const steps = [
  { id: 1, title: "Who are you?", fields: ["name", "email", "company"] },
  {
    id: 2,
    title: "What's the plan?",
    fields: ["projectType", "budget", "description"],
  },
  {
    id: 3,
    title: "The nitty gritty",
    fields: ["timeline", "source", "turnstileToken"],
  },
];

export function BriefForm() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<BriefFormData>({
    resolver: zodResolver(briefSchema),
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

  const processForm = async (data: BriefFormData) => {
    if (!turnstileSiteKey) {
      setSubmitError("Verification is not configured. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/brief", {
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
        setSubmitError(
          result?.message ?? "Failed to submit your brief. Please try again."
        );
        setTurnstileResetKey((prev) => prev + 1);
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      setTurnstileResetKey((prev) => prev + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  const next = async () => {
    setSubmitError(null);
    const fields = steps[currentStep].fields;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = await trigger(fields as any);

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      await handleSubmit(processForm)();
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-accent-1 border-thick box-shadow-hard text-black">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-8 text-white">
          <Check size={48} />
        </div>
        <h2 className="text-5xl font-display font-bold mb-4 text-black">
          RECEIVED.
        </h2>
        <p className="text-xl font-bold max-w-md text-black">
          We&apos;ve got your brief. Our team is already fighting over who gets
          to reply. Expect to hear from us within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-4 font-mono text-sm font-bold">
          <span>
            STEP {currentStep + 1} OF {steps.length}
          </span>
          <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="h-4 w-full bg-white border-thick">
          <div
            className="h-full bg-accent-2 transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(processForm)}
        className="bg-white border-thick p-8 md:p-12 box-shadow-hard relative overflow-hidden"
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black">
              {steps[currentStep].title}
            </h2>

            {/* Step 1: Contact */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">Name</label>
                  <input
                    {...register("name")}
                    className="w-full bg-white border-thick p-4 text-xl font-bold text-black focus:outline-none focus:bg-accent-1 transition-colors placeholder:text-gray-400"
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 font-mono text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">Email</label>
                  <input
                    {...register("email")}
                    className="w-full bg-white border-thick p-4 text-xl font-bold text-black focus:outline-none focus:bg-accent-1 transition-colors placeholder:text-gray-400"
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 font-mono text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">
                    Company (Optional)
                  </label>
                  <input
                    {...register("company")}
                    className="w-full bg-white border-thick p-4 text-xl font-bold text-black focus:outline-none focus:bg-accent-1 transition-colors placeholder:text-gray-400"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Project */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {PROJECT_TYPES.map((type) => (
                      <label key={type} className="cursor-pointer">
                        <input
                          type="radio"
                          value={type}
                          {...register("projectType")}
                          className="peer sr-only"
                        />
                        <div className="border-thick p-4 text-center font-bold text-black bg-white hover:bg-black hover:text-white peer-checked:bg-black peer-checked:text-white transition-all">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.projectType && (
                    <p className="text-red-500 font-mono text-sm">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full bg-white border-thick p-4 text-xl font-bold text-black focus:outline-none focus:bg-accent-1 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-red-500 font-mono text-sm">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">
                    Tell us about it
                  </label>
                  <textarea
                    {...register("description")}
                    rows={4}
                    className="w-full bg-white border-thick p-4 text-xl font-bold text-black focus:outline-none focus:bg-accent-1 transition-colors resize-none placeholder:text-gray-400"
                    placeholder="Goals, vibes, competitors..."
                  />
                  {errors.description && (
                    <p className="text-red-500 font-mono text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">
                    Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {TIMELINES.map(
                      (time) => (
                        <label key={time} className="cursor-pointer">
                          <input
                            type="radio"
                            value={time}
                            {...register("timeline")}
                            className="peer sr-only"
                          />
                          <div className="border-thick p-4 text-center font-bold text-black bg-white hover:bg-black hover:text-white peer-checked:bg-black peer-checked:text-white transition-all">
                            {time}
                          </div>
                        </label>
                      )
                    )}
                  </div>
                  {errors.timeline && (
                    <p className="text-red-500 font-mono text-sm">
                      {errors.timeline.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-lg text-black">
                    How did you hear about us?
                  </label>
                  <input
                    {...register("source")}
                    className="w-full bg-white border-thick p-4 text-xl font-bold text-black focus:outline-none focus:bg-accent-1 transition-colors placeholder:text-gray-400"
                    placeholder="TikTok, Instagram, Friend..."
                  />
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
                    <p className="text-red-500 font-mono text-sm">
                      {errors.turnstileToken.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {submitError && (
          <p className="mt-8 border-2 border-red-600 bg-red-50 text-red-700 p-4 font-mono text-sm">
            {submitError}
          </p>
        )}
        {currentStep === steps.length - 1 && (
          <p className="mt-8 text-sm font-mono text-black/75 leading-relaxed">
            By submitting this brief, you agree to our{" "}
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
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-12 pt-8 border-t-thick">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className={cn(
              "flex items-center gap-2 font-bold text-lg hover:text-gray-600 transition-colors",
              currentStep === 0 && "opacity-0 pointer-events-none"
            )}
          >
            <ArrowLeft /> BACK
          </button>

          <button
            type="button"
            onClick={next}
            disabled={isSubmitting || !turnstileSiteKey}
            className="bg-black text-white px-8 py-4 font-bold text-xl hover:bg-accent-3 hover:text-black transition-colors flex items-center gap-2"
          >
            {isSubmitting ? (
              "SENDING..."
            ) : currentStep === steps.length - 1 ? (
              "SUBMIT BRIEF"
            ) : (
              <>
                NEXT <ArrowRight />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
