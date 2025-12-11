"use client";

import { Section } from "@/components/ui/Section";
import { cn } from "@/utils/cn";
import Image from "next/image";

const works = [
  {
    client: "GLOW COSMETICS",
    title: "GLOW-UP GLOW",
    tagline: "SLAY YOUR SKIN",
    metric: "5M VIEWS",
    color: "bg-accent-1",
    size: "large", // spans 2 cols
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    client: "VIBE STREETWEAR",
    title: "VIBE CHECK VIBES",
    tagline: "CHECK YOUR VIBE",
    metric: "10M SHARES",
    color: "bg-accent-2",
    size: "tall", // spans 2 rows
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
  },
  {
    client: "FLEX GYM",
    title: "FIT FLEX FRENZY",
    tagline: "FLEX YOUR WAY",
    metric: "6M VIEWS",
    color: "bg-accent-3",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    client: "GREEN LIGHT",
    title: "SMART ENERGY",
    tagline: "INNOVATION THAT MATTERS",
    metric: "12M VIEWS",
    color: "bg-accent-1",
    size: "normal",
    image:
      "https://images.unsplash.com/photo-1741730066843-855876ec8bbf?w=800&q=80",
  },
];

export function WorkGrid() {
  return (
    <Section id="work" className="bg-background">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-4">
          CAMPAIGNS THAT <br />
          <span className="text-accent-3 hover:text-accent-1 transition-colors duration-300 cursor-default">
            ACTUALLY DID NUMBERS.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
        {works.map((work, index) => (
          <div
            key={index}
            className={cn(
              "group relative border-thick p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 box-shadow-hard hover:shadow-none overflow-hidden",
              work.size === "large" && "md:col-span-2",
              work.size === "tall" && "md:row-span-2"
            )}
          >
            <Image
              src={work.image}
              alt={`${work.client} - ${work.title}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-0" />

            {/* Hover Reveal Content (Glitch Effect) */}
            <div
              className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-8 z-10 backdrop-blur-sm",
                work.color
              )}
            >
              <h3 className="text-5xl font-display font-bold mb-2 tracking-tighter transform group-hover:scale-110 transition-transform duration-300">
                {work.client}
              </h3>
              <p className="text-xl font-bold mb-6 font-mono">{work.title}</p>
              <div className="bg-black text-white px-6 py-3 font-mono text-xl border-2 border-white box-shadow-hard transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                {work.metric}
              </div>
            </div>

            {/* Default Content */}
            <div className="relative z-0 h-full flex flex-col justify-between text-white">
              <div className="text-2xl font-bold mix-blend-difference">
                {work.client}
              </div>
              <div>
                <h3 className="text-5xl font-display font-bold leading-none mb-2 mix-blend-difference">
                  {work.title}
                </h3>
                <p className="font-mono text-sm bg-black/80 inline-block px-2 py-1 backdrop-blur-md border border-white/20">
                  {work.tagline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
