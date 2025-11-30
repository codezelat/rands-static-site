import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { FeaturedReel } from "@/components/home/FeaturedReel";
import { WorkGrid } from "@/components/home/WorkGrid";
import { ServicesCheatsheet } from "@/components/home/ServicesCheatsheet";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
