"use client";

import { Section } from "@/components/ui/Section";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

export function FeaturedReel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Section className="bg-background py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-4">
            PROOF WE DO NOT <br /> JUST TALK.
          </h2>
          <p className="text-xl font-bold text-soft-grey bg-black inline-block px-2">
            SIXTY SECONDS OF CHAOS, CRAFT AND CONVERSION.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <div className="font-mono text-sm">PROJECT COUNT: 142</div>
          <div className="font-mono text-sm">INDUSTRIES: 12</div>
        </div>
      </div>

      <div className="relative border-thick aspect-video bg-black group overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://placehold.co/1920x1080/1a1a1a/ffffff/png?text=FEATURED+REEL"
          loop
          muted={isMuted}
          playsInline
        >
          <source src="/reel.mp4" type="video/mp4" />
        </video>

        {/* Overlay Controls */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={togglePlay}
            className="w-24 h-24 bg-accent-1 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-2 border-black"
          >
            <Play size={48} fill="black" className="ml-2" />
          </button>
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 bg-white p-3 rounded-full border-2 border-black hover:bg-accent-2 transition-colors z-10"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>

        {/* Now Playing Label */}
        <div className="absolute top-8 left-8 bg-accent-2 px-4 py-2 border-2 border-black font-bold animate-pulse">
          NOW PLAYING
        </div>
      </div>
    </Section>
  );
}
