"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kinetic text animation
      const chars = headingRef.current?.querySelectorAll(".char");
      if (chars) {
        gsap.fromTo(
          chars,
          {
            y: 100,
            opacity: 0,
            rotateX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ minWidth: char === " " ? "0.3em" : "0" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <Section
      className="min-h-screen flex items-start pt-32 pb-20 overflow-hidden"
      ref={containerRef}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
        {/* Left Content */}
        <div className="flex flex-col gap-8 z-10">
          <div className="border-thick p-8 bg-background relative box-shadow-hard">
            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl font-display font-bold leading-[0.9] overflow-hidden"
            >
              {splitText("TURN BRANDS INTO CULTURE IN SECONDS.")}
            </h1>
          </div>

          <div className="max-w-xl">
            <h2 className="text-xl md:text-3xl font-bold mb-8 leading-tight">
              Rizz and Slayy is a production first content studio and marketing
              partner. We script, shoot and scale campaigns that live where your
              audience{" "}
              <span className="bg-accent-1 px-1 text-black">
                actually scrolls.
              </span>
            </h2>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">Book a Project Call</Button>
              <Button variant="outline" size="lg">
                Watch Our Reel
              </Button>
            </div>
          </div>

          {/* Brutalist Labels */}
          <div className="flex gap-4 mt-8">
            <span className="bg-accent-1 px-3 py-1 font-bold text-sm border-2 border-black text-black">
              SHORT FORM
            </span>
            <span className="bg-accent-2 px-3 py-1 font-bold text-sm border-2 border-black text-black">
              PAID DISTRIBUTION
            </span>
          </div>
        </div>

        {/* Right Content - 3D Scene */}
        <div className="h-[50vh] lg:h-[80vh] w-full relative border-thick bg-soft-grey self-center lg:self-start mt-12 lg:mt-0">
          <Scene />

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-mono text-xs">
            FIG. 01
          </div>
          <div className="absolute bottom-4 left-4 bg-black text-white px-2 py-1 font-mono text-xs">
            INTERACTIVE
          </div>
        </div>
      </div>
    </Section>
  );
}
