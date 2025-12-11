"use client";

import { Section } from "@/components/ui/Section";
import { Play, Volume2, VolumeX, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/utils/cn";

export function FeaturedReel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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
        {/* <div className="hidden md:block text-right">
          <div className="font-mono text-sm">PROJECT COUNT: 142</div>
          <div className="font-mono text-sm">INDUSTRIES: 12</div>
        </div> */}
      </div>

      <div className="relative border-thick aspect-video bg-black group overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/10 backdrop-blur-sm pointer-events-none">
            <Loader2 className="w-12 h-12 text-accent-1 animate-spin" />
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://placehold.co/1920x1080/1a1a1a/ffffff/png?text=FEATURED+REEL"
          loop
          muted={isMuted}
          playsInline
          preload="none"
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onPlaying={() => setIsLoading(false)}
          onLoadStart={() => setIsLoading(true)}
        >
          <source src="/videos/new.mp4" type="video/mp4" />
        </video>

        {/* Play/Pause Control - Industry Standard Center Button */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center z-10 transition-all duration-300",
            isPlaying ? "opacity-0 hover:opacity-100 bg-black/20 backdrop-blur-none hover:backdrop-blur-sm" : "opacity-100 bg-black/40 backdrop-blur-sm"
          )}
        >
          <button
            onClick={togglePlay}
            className="w-20 h-20 md:w-24 md:h-24 bg-accent-1 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 border-2 border-black hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] group-hover:scale-100"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black flex gap-2 justify-center items-center">
                <div className="w-2 md:w-3 h-full bg-black border border-black"></div>
                <div className="w-2 md:w-3 h-full bg-black border border-black"></div>
                {/* CSS Mockup for pause, actually simpler to use icon or just two divs */}
                <span className="sr-only">Pause</span>
                {/* Re-using icons would be cleaner, let's swap to Lucide Play/Pause if available or stick to the requested design */}
                <div className="flex gap-1">
                  <div className="w-3 h-10 bg-black"></div>
                  <div className="w-3 h-10 bg-black"></div>
                </div>
              </div>
            ) : (
              <Play size={48} fill="black" className="ml-2 text-black" />
            )}
          </button>
        </div>

        {/* Mute Toggle - High Visibility */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-accent-1 hover:border-black hover:text-black transition-all duration-300 z-20 text-white"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>

        {/* Status Label */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 pointer-events-none z-20">
          <div className={cn(
            "px-3 py-1 border border-white/20 font-mono text-xs md:text-sm font-bold transition-colors duration-300 backdrop-blur-md",
            isPlaying ? "bg-accent-2 text-black border-black animate-pulse" : "bg-black/50 text-white/70"
          )}>
            {isPlaying ? "NOW PLAYING" : "PAUSED"}
          </div>
        </div>
      </div>
    </Section>
  );
}
