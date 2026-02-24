import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { CONTACT_EMAIL, SITE_URL } from "@/utils/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms governing enquiries, project discussions, and services provided by RANDS.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | RANDS",
    description:
      "Read the terms governing enquiries, project discussions, and services provided by RANDS.",
    url: `${SITE_URL}/terms-of-service`,
    type: "article",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <Section className="pt-32 pb-10">
        <div className="max-w-4xl">
          <p className="font-mono text-sm text-black/70 mb-4">
            Last updated: February 24, 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-none">
            TERMS OF SERVICE
          </h1>
        </div>
      </Section>

      <Section className="pt-0 pb-20" noBorder>
        <article className="max-w-4xl bg-white border-thick box-shadow-hard p-6 md:p-10 text-black space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Scope</h2>
            <p className="font-medium">
              These terms apply to use of our website, contact forms, brief
              forms, and project communication. Submitting a form does not
              create a binding client engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">
              Proposals and Engagements
            </h2>
            <p className="font-medium">
              Project fees, timelines, deliverables, and revision terms are
              defined in separate written agreements or statements of work.
              Those specific agreements take precedence for active projects.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">
              Client Responsibilities
            </h2>
            <p className="font-medium">
              You confirm that information submitted to us is accurate and that
              you have rights to any material you provide for review or
              production.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Intellectual Property</h2>
            <p className="font-medium">
              Unless otherwise agreed in writing, all concepts, drafts, and
              materials remain the property of their respective owners until
              rights are transferred under a signed agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Liability</h2>
            <p className="font-medium">
              To the maximum extent allowed by law, our website and preliminary
              communications are provided on an as-is basis, without guarantees
              of specific business outcomes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Updates</h2>
            <p className="font-medium">
              We may revise these terms over time. Continued use of this website
              after updates indicates acceptance of the revised terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-bold">Contact</h2>
            <p className="font-medium">
              Questions about these terms can be sent to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline underline-offset-2 hover:text-accent-3 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p className="font-medium">
              For data handling details, read our{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-accent-3 transition-colors"
              >
                Privacy Policy
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
