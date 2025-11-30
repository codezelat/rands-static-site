"use client";

import { Section } from "@/components/ui/Section";
import { cn } from "@/utils/cn";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "CONTENT STUDIO",
    description: "We shoot content.",
    items: [
      "Short form video production",
      "Campaign storyboarding",
      "UGC style content",
      "Studio and location shoots",
    ],
    color: "bg-accent-1 text-black",
    accent: "bg-accent-2",
    tag: "TIKTOK FIRST",
  },
  {
    title: "MARKETING ENGINE",
    description: "We move numbers.",
    items: [
      "Social strategy & calendars",
      "Paid ads & distribution",
      "Performance creatives",
      "Funnel building",
    ],
    color: "bg-black text-white",
    accent: "bg-accent-3",
    tag: "ROI OR NOTHING",
  },
];

export function WhatWeDo() {
  return (
    <Section id="services" className="bg-background">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-4">
          WE SHOOT CONTENT AND <br />
          <span className="text-accent-3">WE MOVE NUMBERS.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={cn(
              "group relative border-thick p-8 min-h-[500px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 box-shadow-hard hover:shadow-none",
              service.color
            )}
          >
            {/* Floating Tag */}
            <div
              className={cn(
                "absolute -top-4 -right-4 px-4 py-2 border-2 border-black font-bold text-sm transform rotate-3 group-hover:rotate-0 transition-transform",
                service.accent
              )}
            >
              {service.tag}
            </div>

            <div>
              <h3 className="text-4xl font-display font-bold mb-2">
                {service.title}
              </h3>
              <p
                className={cn(
                  "text-xl font-bold mb-8",
                  service.color.includes("bg-black")
                    ? "text-white/80"
                    : "text-carbon-black/80"
                )}
              >
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg font-medium border-b border-current/10 pb-2"
                  >
                    <span
                      className={cn(
                        "w-2 h-2 rounded-full",
                        service.color.includes("bg-black")
                          ? "bg-white"
                          : "bg-black"
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-black text-white p-4 rounded-full group-hover:bg-accent-1 group-hover:text-black transition-colors">
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
