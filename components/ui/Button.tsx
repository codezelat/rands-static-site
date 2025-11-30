import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-accent-1 text-black hover:bg-accent-2 transition-colors duration-200",
      secondary:
        "bg-foreground text-background hover:bg-accent-3 hover:text-black transition-colors duration-200",
      outline:
        "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200",
      ghost:
        "text-foreground hover:bg-soft-grey transition-colors duration-200",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-display uppercase tracking-wider font-bold border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-accent-1 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
