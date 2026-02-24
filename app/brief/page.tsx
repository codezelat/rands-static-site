import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { BriefForm } from "@/components/brief/BriefForm";
import { SITE_URL } from "@/utils/site";

export const metadata: Metadata = {
  title: "Submit a Brief",
  description:
    "Submit your project brief to Rizz & Slay. Share your goals, budget, and timeline, and our team will get back to you fast.",
  alternates: {
    canonical: "/brief",
  },
  openGraph: {
    title: "Submit a Brief | Rizz & Slay",
    description:
      "Tell us what you are planning. We will help you script, shoot, and scale campaigns that actually move.",
    url: `${SITE_URL}/brief`,
    type: "website",
  },
};

export default function BriefPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <Section className="pt-32 pb-20">
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
            LET&apos;S MAKE <br />
            <span className="text-accent-1 stroke-text-black">
              INTERNET HISTORY.
            </span>
          </h1>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Tell us what you&apos;re plotting. We&apos;ll help you execute it.
            <br />
            No boring forms, just the essentials.
          </p>
        </div>

        <BriefForm />
      </Section>

      <Footer />
    </main>
  );
}
