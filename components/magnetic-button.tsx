"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  pullFactor?: number;
}

export function MagneticWrapper({
  children,
  className,
  pullFactor = 0.25,
}: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (shouldReduceMotion) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * pullFactor;
    const y = (clientY - centerY) * pullFactor;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 15, mass: 0.2 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "underline" | "ghost";
  pullStrength?: number;
}

export function MagneticButton({
  children,
  variant = "underline",
  className,
  pullStrength = 0.2,
  ...props
}: MagneticButtonProps) {
  const baseStyles =
    "transition-colors duration-300 font-mono text-sm tracking-wider uppercase inline-flex items-center gap-2 focus:outline-none";

  const variants = {
    primary:
      "bg-foreground text-background px-6 py-3 rounded-full hover:bg-neutral-200 font-sans normal-case font-medium tracking-normal",
    secondary:
      "border border-surface-border bg-surface px-6 py-3 rounded-full hover:border-neutral-400 font-sans normal-case font-medium tracking-normal text-foreground",
    underline: "magnetic-underline text-foreground hover:text-white pb-0.5",
    ghost: "text-muted-foreground hover:text-foreground",
  };

  return (
    <MagneticWrapper pullFactor={pullStrength}>
      <button
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    </MagneticWrapper>
  );
}

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "underline" | "ghost";
  className?: string;
  external?: boolean;
  pullStrength?: number;
  ariaLabel?: string;
}

export function MagneticLink({
  href,
  children,
  variant = "underline",
  className,
  external = false,
  pullStrength = 0.2,
  ariaLabel,
}: MagneticLinkProps) {
  const baseStyles =
    "transition-colors duration-300 font-mono text-sm tracking-wider uppercase inline-flex items-center gap-2 focus:outline-none";

  const variants = {
    primary:
      "bg-foreground text-background px-6 py-3 rounded-full hover:bg-neutral-200 font-sans normal-case font-medium tracking-normal",
    secondary:
      "border border-surface-border bg-surface px-6 py-3 rounded-full hover:border-neutral-400 font-sans normal-case font-medium tracking-normal text-foreground",
    underline: "magnetic-underline text-foreground hover:text-white pb-0.5",
    ghost: "text-muted-foreground hover:text-foreground",
  };

  const linkContent = (
    <MagneticWrapper pullFactor={pullStrength}>
      <span className={cn(baseStyles, variants[variant], className)}>
        {children}
      </span>
    </MagneticWrapper>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-block"
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className="inline-block">
      {linkContent}
    </Link>
  );
}
