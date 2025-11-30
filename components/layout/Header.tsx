"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Studio", href: "#studio" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-thick-bottom transition-transform duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-display font-bold tracking-tighter hover:text-accent-2 transition-colors"
        >
          RANDS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-bold uppercase hover:text-accent-1 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:block" size="sm">
            Book a Project
          </Button>

          <button
            className="md:hidden p-2 hover:bg-soft-grey transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "80px", height: "calc(100vh - 80px)" }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-4xl font-display font-bold uppercase hover:text-accent-1 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Button size="lg" className="mt-8" onClick={() => setIsMenuOpen(false)}>
          Book a Project
        </Button>
      </div>
    </header>
  );
}
