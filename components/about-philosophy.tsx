"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, Workflow, Target } from "lucide-react";

const PRINCIPLES = [
  {
    number: "01",
    title: "Fluidez Absoluta (Zero-Jank)",
    tagline: "Performance é elemento fundamental de design.",
    description:
      "Telas que engasgam ou sofrem deslocamentos inesperados prejudicam a confiança. Desenvolvo interfaces orientadas a 60 FPS, com carregamento instantâneo e otimização real para dispositivos móveis.",
    icon: Target,
  },
  {
    number: "02",
    title: "Estado Seguro & Tipagem Estrita",
    tagline: "Tornar estados inválidos impossíveis por design.",
    description:
      "Aproveito todo o potencial do TypeScript e validação de esquemas para eliminar comportamentos imprevisíveis, tornando as aplicações estáveis, fáceis de manter e auditar.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Engenharia de Produto como Arte",
    tagline: "Código é o meio; a experiência do usuário é o fim.",
    description:
      "Um bom software precisa parecer fluido e natural. Combino disciplina técnica com apuro estético, criando ritmo tipográfico e micro-interações que elevam a usabilidade.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Arquitetura Pragmática",
    tagline: "Simplicidade e estabilidade em primeiro lugar.",
    description:
      "Evito complexidade desnecessária. Priorizo código limpo, modular, com banco de dados bem indexado e soluções comprovadas que resolvem os desafios de negócio.",
    icon: Lightbulb,
  },
];

const CAREER_TIMELINE = [
  {
    period: "2024 — Presente",
    role: "Desenvolvedor de Software",
    company: "Projetos Independentes & Consultoria",
    highlight:
      "Desenvolvimento de plataformas completas em produção: Casamento em Ordem, Mimos Ateliê, Separador de Produtos, Kurio NFT Marketplace e ferramentas colaborativas.",
  },
  {
    period: "2022 — 2024",
    role: "Desenvolvedor Web & Frontend",
    company: "Aplicações Web & E-commerce",
    highlight:
      "Criação de catálogos interativos, dashboards financeiros e integrações com banco de dados em tempo real.",
  },
  {
    period: "2020 — 2022",
    role: "Desenvolvedor de Software",
    company: "Soluções Digitais & Automações",
    highlight:
      "Construção de interfaces reativas, rotas de integração, automações de fluxo de trabalho e versionamento contínuo.",
  },
];

export function AboutPhilosophy() {
  return (
    <section id="philosophy" className="py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground">[03]</span>
            <span>Filosofia & Trajetória</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-editorial text-foreground">
            Como abordo a engenharia de software.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl font-sans">
            Construindo aplicações na interseção entre engenharia sólida, estratégia de produto e atenção aos detalhes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-surface-border bg-surface p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-500 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      [{principle.number}]
                    </span>
                    <Icon size={18} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-white">
                    {principle.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-300 mt-1 mb-3">
                    {principle.tagline}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline / Trajectory */}
        <div className="rounded-2xl border border-surface-border bg-surface p-8 sm:p-10">
          <div className="border-b border-surface-border pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="font-editorial text-2xl font-normal text-white">
              Trajetória Profissional
            </h3>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Evolução Contínua
            </span>
          </div>

          <div className="divide-y divide-surface-border">
            {CAREER_TIMELINE.map((item, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <div className="md:col-span-3 font-mono text-xs text-muted-foreground">
                  {item.period}
                </div>
                <div className="md:col-span-4">
                  <div className="text-base font-medium text-white">
                    {item.role}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-0.5">
                    {item.company}
                  </div>
                </div>
                <div className="md:col-span-5 text-sm text-muted-foreground font-sans leading-relaxed">
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
