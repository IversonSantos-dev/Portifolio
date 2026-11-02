"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, CloudCog } from "lucide-react";

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

const SKILL_DOMAINS: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend & Micro-Interações",
    subtitle: "Interfaces fluidas, acessíveis e com acabamento editorial",
    icon: Code2,
    skills: [
      {
        name: "Next.js 15 & React 19",
        level: "Especialista / Diário",
        description: "App Router, Renderização Estática (SSG/ISR), Server Components, streaming SSR e Server Actions.",
      },
      {
        name: "TypeScript (Estrito)",
        level: "Especialista / Diário",
        description: "Tipagem estrita, tipagem genérica avançada e validação robusta de esquemas sem overhead de runtime.",
      },
      {
        name: "Tailwind CSS & Design Tokens",
        level: "Especialista / Diário",
        description: "Tipografia fluida com clamp, variáveis customizadas, design systems e interfaces responsivas modernas.",
      },
      {
        name: "Framer Motion & Microfísica",
        level: "Avançado",
        description: "Orquestrações sequenciais, transições de layout, animações ativadas por scroll e física suave de molas.",
      },
      {
        name: "Lenis & Smooth Scrolling",
        level: "Avançado",
        description: "Rolagem suave desacoplada com inércia cinemática, sincronização de frames e suporte a acessibilidade.",
      },
      {
        name: "Design Responsivo & Mobile First",
        level: "Especialista",
        description: "Construção de layouts adaptáveis que proporcionam excelente experiência em qualquer dispositivo.",
      },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend & Integrações",
    subtitle: "Serviços escaláveis, rotas de API e integrações em tempo real",
    icon: Server,
    skills: [
      {
        name: "Node.js & TypeScript Backend",
        level: "Avançado",
        description: "Criação de rotas, microsserviços, manipulação assíncrona e APIs REST de alta performance.",
      },
      {
        name: "Supabase & Autenticação",
        level: "Especialista",
        description: "Row Level Security (RLS), autenticação segura, bancos relacionais e feeds em tempo real.",
      },
      {
        name: "APIs RESTful & Webhooks",
        level: "Avançado",
        description: "Integração com gateways de pagamento (ex: PIX), automações comerciais e webhooks.",
      },
      {
        name: "TanStack Query & State",
        level: "Avançado",
        description: "Gerenciamento de cache no cliente, mutações otimistas e sincronização de dados de servidor.",
      },
      {
        name: "Edge Functions & Serverless",
        level: "Intermediário",
        description: "Execução de funções sem servidor na borda da rede para menor latência global.",
      },
    ],
  },
  {
    id: "data",
    number: "03",
    title: "Camada de Dados & Armazenamento",
    subtitle: "Modelagem relacional e persistência estruturada",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL & Modelagem Relacional",
        level: "Avançado",
        description: "Planejamento de tabelas, índices eficientes, integridade relacional e consultas estruturadas.",
      },
      {
        name: "PL/pgSQL & Stored Procedures",
        level: "Intermediário",
        description: "Funções customizadas no banco de dados para cálculos transacionais e regras de negócio.",
      },
      {
        name: "Cloud Storage & CDN (Cloudflare)",
        level: "Avançado",
        description: "Distribuição e armazenamento de mídia em alta escala com entrega otimizada na borda.",
      },
      {
        name: "Prisma & ORMs Modernos",
        level: "Avançado",
        description: "Migrações type-safe, consultas tipadas e integração com bancos relacionais.",
      },
    ],
  },
  {
    id: "product-ops",
    number: "04",
    title: "Engenharia de Produto & Qualidade",
    subtitle: "Lighthouse 100, acessibilidade e entrega contínua",
    icon: CloudCog,
    skills: [
      {
        name: "Core Web Vitals & Lighthouse",
        level: "Foco Total",
        description: "Otimização criteriosa de imagens, carregamento sob demanda, zero CLS e pontuação máxima.",
      },
      {
        name: "Acessibilidade (WCAG / WAI-ARIA)",
        level: "Avançado",
        description: "Navegação completa por teclado, papéis semânticos, leitores de tela e contraste correto.",
      },
      {
        name: "Git & Versionamento Colaborativo",
        level: "Diário",
        description: "Fluxos de trabalho com branches, code review, convenções semânticas de commit e CI/CD.",
      },
      {
        name: "Figma to Code & Design Systems",
        level: "Especialista",
        description: "Fidelidade rigorosa de design, componentização modular e consistência tipográfica.",
      },
    ],
  },
];

export function SkillsStack() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const currentDomain =
    SKILL_DOMAINS.find((d) => d.id === activeTab) || SKILL_DOMAINS[0];

  return (
    <section id="stack" className="py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground">[02]</span>
            <span>Arsenal Técnico & Arquitetura</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-editorial text-foreground">
            Ferramentas escolhidas por eficiência e robustez.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl font-sans">
            Cada tecnologia desta stack foi testada em cenários reais, selecionada por estabilidade comprovada e velocidade de entrega para o usuário final.
          </p>
        </div>

        {/* Domain Tabs */}
        <div
          role="tablist"
          aria-label="Domínios de habilidades técnicas"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {SKILL_DOMAINS.map((domain) => {
            const Icon = domain.icon;
            const isSelected = domain.id === activeTab;
            return (
              <button
                key={domain.id}
                role="tab"
                id={`tab-${domain.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${domain.id}`}
                onClick={() => setActiveTab(domain.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-surface border-white/40 shadow-lg shadow-black/40"
                    : "bg-surface-secondary/50 border-surface-border hover:border-neutral-500 text-muted-foreground"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    [{domain.number}]
                  </span>
                  <Icon
                    size={18}
                    className={isSelected ? "text-white" : "text-muted-foreground"}
                  />
                </div>
                <div>
                  <div
                    className={`text-sm font-sans font-medium leading-tight ${
                      isSelected ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {domain.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards */}
        <motion.div
          key={currentDomain.id}
          role="tabpanel"
          id={`panel-${currentDomain.id}`}
          aria-labelledby={`tab-${currentDomain.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-surface-border bg-surface p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-surface-border pb-6 mb-8 gap-2">
            <div>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Especialidade
              </span>
              <h3 className="font-editorial text-2xl font-normal text-white mt-1">
                {currentDomain.title}
              </h3>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              {currentDomain.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDomain.skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-xl border border-surface-border bg-surface-secondary p-5 hover:border-neutral-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-sans font-medium text-white">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-neutral-300">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
