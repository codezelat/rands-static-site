import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ServicesCheatsheet } from "@/components/home/ServicesCheatsheet";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { Testimonials } from "@/components/home/Testimonials";
import dynamic from "next/dynamic";

const FeaturedReel = dynamic(() =>
  import("@/components/home/FeaturedReel").then((mod) => mod.FeaturedReel)
);
const WorkGrid = dynamic(() =>
  import("@/components/home/WorkGrid").then((mod) => mod.WorkGrid)
);

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
