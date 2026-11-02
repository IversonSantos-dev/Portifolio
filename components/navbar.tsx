"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MagneticLink } from "@/components/magnetic-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Cases", number: "01", href: "/#cases" },
    { label: "Arsenal", number: "02", href: "/#stack" },
    { label: "Filosofia", number: "03", href: "/#philosophy" },
    { label: "Contato", number: "04", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-surface-border py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            {/* Logo / Monogram */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Iverson Santos — Full Stack & Product Engineer Homepage"
            >
              <span className="font-editorial text-xl font-normal tracking-editorial text-foreground group-hover:text-white transition-colors">
                Iverson Santos
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-muted-foreground uppercase tracking-widest pl-3 border-l border-surface-border">
                Desenvolvedor
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <MagneticLink
                  key={item.href}
                  href={item.href}
                  variant="underline"
                  className="text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground"
                >
                  <span className="text-foreground/60 text-[10px]">
                    [{item.number}]
                  </span>
                  <span>{item.label}</span>
                </MagneticLink>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <MagneticLink
                href="/#contact"
                variant="primary"
                className="text-xs px-4 py-2 font-mono uppercase tracking-wider"
              >
                Vamos conversar
              </MagneticLink>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden bg-surface border-b border-surface-border p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-surface-border text-foreground font-mono text-sm tracking-wider uppercase"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-muted-foreground">[{item.number}]</span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-muted-foreground" />
                </Link>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold"
                >
                  Iniciar Conversa
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
