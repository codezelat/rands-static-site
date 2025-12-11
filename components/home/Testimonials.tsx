"use client";

import { Section } from "@/components/ui/Section";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "We manufacture light bulbs, not hype. They somehow managed to make our smart energy solutions look as exciting as a fashion drop. The rebrand completely shifted our market perception.",
    author: "Sarah Chen, CEO",
    role: "Green Light",
  },
  {
    quote:
      "Most agencies don't get Gen Z skin culture. This team didn't just 'get it', they defined it. Our 'Glow-Up' campaign ROI was 300% higher than anything we've done before.",
    author: "Jessica Miller, Brand Director",
    role: "Glow Cosmetics",
  },
  {
    quote:
      "We needed edge, not corporate polish. They delivered a campaign that felt raw, authentic, and completely aligned with our street culture. 10M shares speaks for itself.",
    author: "Marcus Thorne, Creative Lead",
    role: "Vibe Streetwear",
  },
  {
    quote:
      "Membership applications crashed our server on launch day. They captured the 'Fit Flex Frenzy' energy perfectly. It wasn't just a gym ad; it was a movement.",
    author: "David Kovac, Ops Head",
    role: "Flex Gym",
  },
  {
    quote:
      "I see a lot of pitch decks. The brands these guys touch don't just grow; they dominate cultural conversation. It's rare to see this level of creative chaos convert so consistently.",
    author: "Elena Ross, VC Partner",
    role: "Horizon Ventures",
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
