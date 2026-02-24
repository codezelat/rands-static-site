"use client";

import { Section } from "@/components/ui/Section";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ear, FileText, Camera, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "LISTEN", icon: Ear, desc: "We hear what you need." },
  { title: "SCRIPT", icon: FileText, desc: "We write the chaos." },
  { title: "SHOOT", icon: Camera, desc: "We capture the vibe." },
  { title: "SCALE", icon: TrendingUp, desc: "We make it viral." },
];

export function ProcessStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".process-card");
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="studio"
      className="bg-carbon-black text-off-white"
      ref={containerRef}
    >
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
          CHAOS IN CONTENT, <br />
          <span className="text-accent-1">DISCIPLINE IN PROCESS.</span>
        </h2>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-soft-grey/20 -translate-y-1/2 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-card bg-carbon-black border-2 border-off-white p-6 flex flex-col items-center text-center hover:border-accent-1 transition-colors group"
            >
              <div className="bg-off-white text-black p-4 rounded-full mb-4 group-hover:bg-accent-1 transition-colors">
                <step.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-soft-grey">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
