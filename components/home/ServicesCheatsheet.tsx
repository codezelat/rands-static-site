"use client";

import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "FOR BRANDS",
    items: [
      "Full funnel content & ads",
      "Launch campaigns",
      "Ongoing content retainers",
    ],
  },
  {
    title: "FOR CREATORS",
    items: ["Channel branding", "Sponsorship packages", "Performance editing"],
  },
  {
    title: "FOR AGENCIES",
    items: [
      "White label production",
      "Performance creative",
      "Meme & trend lab",
    ],
  },
];

export function ServicesCheatsheet() {
  return (
    <Section className="bg-background">
      <div className="mb-12">
        <h2 className="text-5xl md:text-7xl font-display font-bold leading-none">
          PICK YOUR KIND OF <span className="text-accent-2">SLAY.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-thick">
        {services.map((group, i) => (
          <div
            key={i}
            className="p-8 border-b-thick md:border-b-0 md:border-r-thick last:border-r-0 hover:bg-black hover:text-white transition-colors group"
          >
            <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-accent-2 transition-colors">
              {group.title}
            </h3>
            <ul className="space-y-4">
              {group.items.map((item, j) => (
                <li
                  key={j}
                  className="text-lg font-bold border-b border-black/10 pb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
