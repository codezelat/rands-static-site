import { cn } from "@/utils/cn";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  noBorder?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { children, className, container = true, noBorder = false, ...props },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-20 relative",
          !noBorder && "border-thick-bottom",
          className
        )}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";
