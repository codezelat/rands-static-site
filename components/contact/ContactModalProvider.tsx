"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { createPortal } from "react-dom";

function shouldHandleAsContactTrigger(href: string) {
  return href === "#contact" || href === "/#contact";
}

export function ContactModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      if (!target) return;

      const explicitTrigger = target.closest("[data-contact-trigger='true']");
      if (explicitTrigger) {
        event.preventDefault();
        setIsOpen(true);
        return;
      }

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href || !shouldHandleAsContactTrigger(href)) return;

      event.preventDefault();
      setIsOpen(true);
    };

    // Use capture so we can intercept Next.js Link navigation before it handles the click.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      {children}

      {portalTarget &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div
                className="fixed inset-0 z-[200] overflow-y-auto overscroll-none p-4 md:p-8"
                style={{
                  paddingTop: "max(1rem, env(safe-area-inset-top))",
                  paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
                }}
              >
                <motion.button
                  type="button"
                  aria-label="Close contact form"
                  className="fixed inset-0 bg-black/65 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                />

                <div className="relative min-h-full flex items-start sm:items-center justify-center py-1 md:py-0">
                  <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Contact form"
                    className="w-full max-w-2xl max-h-[calc(100dvh-2rem)] md:max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-background border-thick box-shadow-hard p-3 sm:p-4 md:p-8"
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onClick={(event) => event.stopPropagation()}
                    style={{ WebkitOverflowScrolling: "touch" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
                      <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold leading-none">
                          LET&apos;S TALK.
                        </h2>
                        <p className="mt-2 text-sm md:text-base font-bold text-black/70">
                          Share a few details and we&apos;ll get back fast.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="p-2 border-thick bg-white hover:bg-accent-1 transition-colors text-black"
                        aria-label="Close"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <ContactForm />
                  </motion.div>
                </div>
              </div>
            )}
          </AnimatePresence>,
          portalTarget
        )}
    </>
  );
}
