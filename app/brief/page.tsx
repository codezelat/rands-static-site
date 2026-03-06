import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { BriefForm } from "@/components/brief/BriefForm";
import { SITE_URL } from "@/utils/site";

export const metadata: Metadata = {
  title: "Submit a Brief | Work With Sri Lanka's Top Content Studio",
  description:
    "Ready to make your brand go viral? Submit a brief to Rizz & Slay (RANDS), Sri Lanka's #1 TikTok marketing agency and content studio. Short-form video, UGC, influencer campaigns & more.",
  alternates: {
    canonical: "/brief",
  },
  openGraph: {
    title: "Submit a Brief | Rizz & Slay - Content Studio Sri Lanka",
    description:
      "Tell us what you're planning. We'll script, shoot, and scale campaigns that actually move. Sri Lanka's leading content studio and TikTok marketing agency.",
    url: `${SITE_URL}/brief`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit a Brief | Rizz & Slay",
    description:
      "Ready to make your brand go viral? Submit a brief to Rizz & Slay, Sri Lanka's top content studio and TikTok marketing agency.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Submit a Brief",
      item: `${SITE_URL}/brief`,
    },
  ],
};

export default function BriefPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
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
