"use client";

import { Section } from "@/components/ui/Section";
import { useRef } from "react";

const testimonials = [
  {
    quote: "They understood the assignment.",
    author: "CMO, TechBrand",
    role: "Client",
  },
  {
    quote: "Finally an agency that isn't cringe.",
    author: "@TopCreator",
    role: "Partner",
  },
  {
    quote: "Numbers went up. Simple.",
    author: "Founder, E-com",
    role: "Client",
  },
  {
    quote: "Absolute chaos but it works.",
    author: "Marketing Lead",
    role: "Client",
  },
];

import { ArrowLeft, ArrowRight } from "lucide-react";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Section className="bg-accent-3 py-20" noBorder>
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <h2 className="text-4xl md:text-6xl font-display font-bold leading-none">
          WHAT THE GROWN UPS <br /> SAID AFTERWARDS.
        </h2>

        {/* Custom Navigation */}
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-4 border-thick bg-black text-white hover:bg-white hover:text-black transition-colors box-shadow-hard active:translate-y-1 active:shadow-none border-white"
            aria-label="Scroll left"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 border-thick bg-black text-white hover:bg-white hover:text-black transition-colors box-shadow-hard active:translate-y-1 active:shadow-none border-white"
            aria-label="Scroll right"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-4 pb-8 snap-x snap-mandatory hide-scrollbar"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] md:min-w-[400px] bg-black text-white border-thick border-white p-8 snap-center flex flex-col justify-between box-shadow-hard transform hover:-rotate-1 transition-transform"
          >
            <p className="text-2xl font-bold mb-6">&quot;{t.quote}&quot;</p>
            <div>
              <div className="font-display font-bold text-lg">{t.author}</div>
              <div className="font-mono text-sm text-gray-400">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
