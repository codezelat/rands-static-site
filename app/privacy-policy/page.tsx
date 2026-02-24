import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { CONTACT_ADDRESS, CONTACT_EMAIL, SITE_URL } from "@/utils/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how RANDS collects, uses, and protects information submitted through our website and forms.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | RANDS",
    description:
      "Read how RANDS collects, uses, and protects information submitted through our website and forms.",
    url: `${SITE_URL}/privacy-policy`,
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <Section className="pt-32 pb-10">
        <div className="max-w-4xl">
          <p className="font-mono text-sm text-black/70 mb-4">
            Last updated: February 24, 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-none">
            PRIVACY POLICY
          </h1>
        </div>
      </Section>

      <Section className="pt-0 pb-20" noBorder>
        <article className="max-w-4xl bg-white border-thick box-shadow-hard p-6 md:p-10 text-black space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">What We Collect</h2>
            <p className="font-medium">
              We collect the details you submit through our contact and brief
              forms, including name, email, company, phone number, project
              details, and budget range. We also collect basic technical and
              analytics data to secure and improve the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">How We Use Data</h2>
            <p className="font-medium">
              We use your information to respond to enquiries, evaluate project
              fit, send project-related communication, and operate our services.
              We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Third-Party Tools</h2>
            <p className="font-medium">
              Form submissions are processed through Brevo for transactional
              email delivery. Spam prevention is handled by Cloudflare Turnstile.
              We may also use analytics providers to understand site usage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">
              Retention and Security
            </h2>
            <p className="font-medium">
              We keep personal information only as long as needed for enquiry
              handling, project communication, legal requirements, or internal
              recordkeeping. We apply reasonable operational and technical
              safeguards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Your Choices</h2>
            <p className="font-medium">
              You can request access, correction, or deletion of personal data
              you submitted to us. Contact us anytime and we will handle the
              request within a reasonable timeframe.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Contact</h2>
            <p className="font-medium">
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline underline-offset-2 hover:text-accent-3 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              . Our office address is {CONTACT_ADDRESS}.
            </p>
            <p className="font-medium">
              For service terms, read our{" "}
              <Link
                href="/terms-of-service"
                className="underline underline-offset-2 hover:text-accent-3 transition-colors"
              >
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </article>
      </Section>

      <Footer />
    </main>
  );
}
