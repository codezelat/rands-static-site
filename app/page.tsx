import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ServicesCheatsheet } from "@/components/home/ServicesCheatsheet";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { SITE_URL } from "@/utils/site";
import dynamic from "next/dynamic";

const FeaturedReel = dynamic(() =>
  import("@/components/home/FeaturedReel").then((mod) => mod.FeaturedReel),
);
const WorkGrid = dynamic(() =>
  import("@/components/home/WorkGrid").then((mod) => mod.WorkGrid),
);

export const metadata: Metadata = {
  title:
    "Rizz & Slay (RANDS) | Sri Lanka's #1 Content Studio & Social Media Marketing Agency",
  description:
    "Rizz & Slay (RANDS) is the #1 culture-first content studio in Sri Lanka. TikTok marketing, short-form video production, viral campaigns, influencer marketing, and social media management from Colombo. We script, shoot, and scale content that moves numbers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Rizz & Slay (RANDS) | Sri Lanka's #1 Content Studio & Social Media Marketing Agency",
    description:
      "Sri Lanka's leading content studio & TikTok marketing agency. Short-form video production, viral campaigns, influencer marketing & performance creative from Colombo to the world.",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizz & Slay (RANDS) | Sri Lanka's #1 Content Studio",
    description:
      "Sri Lanka's leading content studio & TikTok marketing agency. Short-form video, viral campaigns & influencer marketing from Colombo.",
  },
};

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  name: "Rizz & Slay (RANDS) - Sri Lanka's #1 Content Studio & TikTok Marketing Agency",
  description:
    "Culture-first content studio and TikTok marketing agency in Colombo, Sri Lanka. Short-form video production, social media marketing, influencer campaigns, UGC content creation, and performance creative.",
  url: SITE_URL,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: [
    {
      "@type": "Service",
      name: "Short-form Video Production",
      description:
        "Professional TikTok-first short-form video production for brands, including campaign storyboarding, UGC-style content, and studio shoots in Sri Lanka.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Sri Lanka" },
        { "@type": "Place", name: "Global" },
      ],
    },
    {
      "@type": "Service",
      name: "TikTok Marketing & Social Media Management",
      description:
        "Full-funnel TikTok marketing agency services including social strategy, content calendars, paid ads, distribution, and performance creatives.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Sri Lanka" },
        { "@type": "Place", name: "Global" },
      ],
    },
    {
      "@type": "Service",
      name: "Influencer Marketing & UGC Content",
      description:
        "Influencer marketing campaigns, UGC content creation, creator channel branding, and sponsorship packages for brands in Sri Lanka and globally.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Sri Lanka" },
        { "@type": "Place", name: "Global" },
      ],
    },
  ],
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Rizz & Slay Featured Showreel",
  description:
    "Featured showreel from Rizz & Slay (RANDS) — Sri Lanka's leading content studio. Showcasing short-form video production, viral campaigns, and creative content.",
  contentUrl: `${SITE_URL}/videos/new.mp4`,
  thumbnailUrl: `${SITE_URL}/images/logo.png`,
  uploadDate: "2025-01-01",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoJsonLd),
        }}
      />
      <Header />
      <Hero />
      <SocialProof />
      <WhatWeDo />
      <FeaturedReel />
      <WorkGrid />
      <ServicesCheatsheet />
      <ProcessStrip />
      <Testimonials />
      <Footer />
    </main>
  );
}
