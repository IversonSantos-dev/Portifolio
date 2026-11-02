"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { MagneticLink } from "@/components/magnetic-button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Eyebrow Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6"
          >
            <span className="text-foreground">[00]</span>
            <span>Desenvolvedor de Software & Produtos Digitais</span>
            <span className="h-px w-8 bg-surface-border inline-block" />
            <span className="hidden sm:inline text-muted-foreground/60">
              Edição 2025/2026
            </span>
          </motion.div>

          {/* Main Headline — High Editorial Serif */}
          <motion.h1
            variants={itemVariants}
            className="font-editorial text-fluid-hero font-normal tracking-editorial text-white leading-editorial"
          >
            Construindo sistemas escaláveis com precisão editorial.
          </motion.h1>

          {/* Subtitle / Bio Paragraph */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-sans leading-relaxed">
                Desenvolvedor conectando arquitetura robusta de backend a interfaces interativas ricas e refinadas. Especialista em Next.js 15, TypeScript, ecossistema React e produtos digitais orientados a valor real.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <MagneticLink
                  href="#cases"
                  variant="primary"
                  className="px-6 py-3.5 text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  <span>Explorar Cases</span>
                  <ArrowDownRight size={16} />
                </MagneticLink>

                <MagneticLink
                  href="#stack"
                  variant="secondary"
                  className="px-6 py-3.5 text-xs font-mono uppercase tracking-wider"
                >
                  <span>Arsenal Técnico</span>
                </MagneticLink>

                <MagneticLink
                  href="#contact"
                  variant="underline"
                  className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-white"
                >
                  Iniciar Contato
                </MagneticLink>
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="md:col-span-4 bg-surface border border-surface-border rounded-2xl p-5 text-xs font-mono space-y-3">
              <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-surface-border">
                <span className="uppercase tracking-widest">Papel</span>
                <span className="text-foreground">Desenvolvedor</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Localização</span>
                <span className="text-foreground">Brasil / Remoto</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Stack Principal</span>
                <span className="text-foreground">Next 15 · TS · React · Tailwind</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Foco</span>
                <span className="text-foreground">Web Moderna & Produtos</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Stats Ticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-surface-border"
        >
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-medium text-white">
              07+
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
              Cases Desenvolvidos
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-medium text-white">
              100%
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
              Foco em Experiência
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-medium text-white">
              &lt; 50ms
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
              Latência Otimizada
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-medium text-white">
              100%
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
              Alvo de Qualidade & SEO
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
