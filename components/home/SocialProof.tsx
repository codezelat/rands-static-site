"use client";

import { Section } from "@/components/ui/Section";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const clients = [
  "GLOWIX",
  "VIBRA",
  "FLEXA",
  "GREEN LIGHT",
  "TIKTOK",
  "INSTAGRAM",
  "YOUTUBE",
  "SPOTIFY",
  "GLOWIX",
  "VIBRA",
  "FLEXA",
  "GREEN LIGHT",
  "TIKTOK",
  "INSTAGRAM",
  "YOUTUBE",
  "SPOTIFY",
];

export function SocialProof() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-accent-1 overflow-hidden py-12" noBorder>
      <div className="relative w-full">
        <div className="absolute -top-8 left-4 bg-black text-white px-2 py-1 font-bold text-sm z-10">
          BRANDS WE HAVE RIZZED UP
        </div>

        <div className="flex whitespace-nowrap" ref={marqueeRef}>
          {clients.map((client, i) => (
            <div
              key={i}
              className="text-6xl md:text-8xl font-display font-bold px-12 text-black opacity-80 hover:opacity-100 transition-opacity cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
