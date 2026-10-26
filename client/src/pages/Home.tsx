/**
 * Direção de design: Operações em Movimento — editorial técnico em grafite,
 * lavanda e azul-glacial. A narrativa prioriza problema, sistema e impacto.
 */
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  Github,
  Mail,
  Menu,
  Network,
  PackageSearch,
  ServerCog,
  Sparkles,
  X,
} from "lucide-react";
import { CaseArtifact } from "@/components/CaseArtifact";
import { SystemMark } from "@/components/SystemMark";

type Project = {
  title: string;
  index: string;
  category: string;
  group: "Produto" | "Operações" | "Finanças" | "Experiência";
  tagline: string;
  description: string;
  problem: string;
  system: string;
  outcome: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  accent: string;
  accentSoft: string;
  status: "Live" | "Preview" | "Em evolução";
  featured?: boolean;
  proof?: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "Casamento em Ordem",
    category: "Planejamento de eventos",
    group: "Experiência",
    tagline: "Planejamento de casamento, organizado de ponta a ponta.",
    description:
      "Uma plataforma construída para ocupar um espaço pouco atendido no mercado: reunir criação livre de convites, lista de convidados e presentes em um único fluxo. Os noivos recebem organização, agilidade e controle visual sem perder a narrativa emocional do evento.",
    problem: "Convites, convidados e presentes dispersos em ferramentas distintas",
    system: "Hub integrado para criar, convidar, confirmar e presentear",
    outcome: "Mais autonomia para os noivos e menos etapas para os convidados",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    repoUrl: "https://github.com/IversonSantos-dev/CasamentoemOrdem-README",
    demoUrl: "https://casamentoemordem.com.br/",
    demoLabel: "Acessar site",
    accent: "#A78BFA",
    accentSoft: "rgba(167, 139, 250, .18)",
    status: "Live",
    featured: true,
    proof: [
      { label: "Convites", value: "criação livre" },
      { label: "Convidados", value: "lista centralizada" },
      { label: "Presentes", value: "PIX imediato" },
    ],
  },
  {
    index: "02",
    title: "Mimos Ateliê",
    category: "Joalheria sacra e artesanato",
    group: "Produto",
    tagline: "Catálogo premium com pedidos mais rápidos e organização do estoque.",
    description:
      "Uma vitrine digital para expor peças exclusivas, centralizar o catálogo e simplificar a rotina de pedidos. O projeto foi pensado para dar mais visibilidade aos produtos e reduzir a dependência de processos manuais.",
    problem: "Pedidos e controle de mercadorias dispersos, com baixa visibilidade do catálogo e atendimento manual.",
    system: "Catálogo digital centralizado, gestão de produtos e fluxo de pedido direto para WhatsApp.",
    outcome: "Clientes têm uma melhor visão das peças e os vendedores conseguem receber e organizar pedidos com mais rapidez.",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Supabase", "Framer Motion"],
    repoUrl: "https://github.com/IversonSantos-dev/mimos_atelie",
    demoUrl: "https://github.com/IversonSantos-dev/mimos_atelie",
    demoLabel: "Repositório",
    accent: "#A78BFA",
    accentSoft: "rgba(167, 139, 250, .18)",
    status: "Live",
    featured: true,
    proof: [
      { label: "Catálogo", value: "produtos centralizados" },
      { label: "Pedidos", value: "WhatsApp direto" },
      { label: "Operação", value: "estoque mais organizado" },
    ],
  },
  {
    index: "03",
    title: "Sistema de Separação de Produtos",
    category: "Logística e estoque",
    group: "Operações",
    tagline: "Dados de produto disponíveis para acelerar cada separação.",
    description:
      "Um sistema que transforma uma consulta antes lenta e manual em uma operação orientada por dados. Com o banco de produtos disponível em um único lugar, a equipe localiza as informações necessárias para separar e conferir pedidos com mais rapidez, reduzindo tempo de trabalho e retrabalho operacional.",
    problem: "Dados de produto dependentes de busca e conferência manual",
    system: "Base centralizada e pesquisável para a rotina de separação",
    outcome: "Menos tempo operacional e uma etapa mais automática",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    repoUrl: "https://github.com/IversonSantos-dev/separacaoprodu",
    demoUrl: "https://separacaoprodu.lovable.app/",
    demoLabel: "Acessar Site",
    accent: "#A78BFA",
    accentSoft: "rgba(167, 139, 250, .16)",
    status: "Em evolução",
    featured: true,
    proof: [
      { label: "Dados", value: "base centralizada" },
      { label: "Consulta", value: "na palma da mão" },
      { label: "Operação", value: "menos manual" },
    ],
  },
  {
    index: "04",
    title: "Velas Aromáticas",
    category: "E-commerce artesanal",
    group: "Produto",
    tagline: "Catálogo sensorial para produtos feitos à mão.",
    description:
      "Uma vitrine digital pensada para tornar a descoberta de produtos artesanais mais envolvente, combinando apresentação visual, navegação fluida e uma base pronta para comércio.",
    problem: "Produto artesanal sem narrativa digital",
    system: "Catálogo visual e descoberta",
    outcome: "Valor de marca mais evidente",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    repoUrl: "https://github.com/IversonSantos-dev/VelasAromaticas",
    demoUrl: "https://stackblitz.com/~/github.com/Nosrevi-tech/VelasAromaticas",
    demoLabel: "Abrir preview",
    accent: "#A78BFA",
    accentSoft: "rgba(167, 139, 250, .15)",
    status: "Preview",
  },
  {
    index: "05",
    title: "Sistema de Orçamento",
    category: "Operações comerciais",
    group: "Operações",
    tagline: "Propostas claras, cálculos rápidos, decisões melhores.",
    description:
      "Uma aplicação para estruturar a emissão e o gerenciamento de propostas comerciais, levando mais consistência ao cálculo de valores e à apresentação de cada orçamento.",
    problem: "Cálculos e propostas dispersos",
    system: "Fluxo comercial centralizado",
    outcome: "Negociação mais consistente",
    stack: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    repoUrl: "https://github.com/IversonSantos-dev/sistemaorcamento",
    accent: "#A78BFA",
    accentSoft: "rgba(167, 139, 250, .15)",
    status: "Em evolução",
  },
  {
    index: "06",
    title: "Fintrack",
    category: "Finanças pessoais",
    group: "Finanças",
    tagline: "Um dashboard para enxergar melhor cada decisão financeira.",
    description:
      "Uma base de gestão financeira pessoal e residencial que organiza receitas, despesas e tendências visuais para tornar o acompanhamento do dinheiro mais simples e acionável.",
    problem: "Dados financeiros pouco visíveis",
    system: "Dashboard de receitas e despesas",
    outcome: "Decisões diárias mais claras",
    stack: ["React", "TypeScript", "Supabase", "PL/pgSQL"],
    repoUrl: "https://github.com/IversonSantos-dev/fintrack-digital-home",
    demoUrl: "https://fintrackfinancas.lovable.app/",
    demoLabel: "Acessar Site",
    accent: "#A78BFA",
    accentSoft: "rgba(167, 139, 250, .15)",
    status: "Preview",
  },
  {
    index: "07",
    title: "Compartilhando Memórias",
    category: "Galeria colaborativa",
    group: "Experiência",
    tagline: "Fotos compartilhadas, do QR Code à memória coletiva.",
    description:
      "Uma galeria privada e colaborativa para registrar momentos importantes com upload por QR Code ou link único, atualização em tempo real e navegação cuidadosamente organizada.",
    problem: "Fotos espalhadas entre convidados",
    system: "Galeria com upload por QR Code",
    outcome: "Memória coletiva sem atrito",
    stack: ["TanStack", "TypeScript", "Supabase", "Cloudflare"],
    repoUrl: "https://github.com/IversonSantos-dev/compartilhandomemorias",
    demoUrl: "https://compartilhandomemorias.lovable.app",
    demoLabel: "Acessar demo",
    accent: "#A78BFA",
    accentSoft: "rgba(167, 139, 250, .15)",
    status: "Live",
  },
];

const filters = ["Todos", "Produto", "Operações", "Finanças", "Experiência"] as const;

const skills = [
  {
    icon: Code2,
    title: "Front-end",
    text: "Interfaces responsivas e fluxos claros, construídos com componentização e cuidado de experiência.",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS", "UX"],
  },
  {
    icon: ServerCog,
    title: "Back-end",
    text: "Regras de negócio, integrações e serviços que sustentam produtos prontos para evoluir.",
    items: ["Node.js", "REST APIs", "Auth", "Validação", "Upload"],
  },
  {
    icon: Database,
    title: "Dados",
    text: "Estruturas que preservam contexto, segurança e visibilidade para os fluxos essenciais.",
    items: ["Supabase", "PostgreSQL", "SQL", "PL/pgSQL", "RLS"],
  },
  {
    icon: Braces,
    title: "Entrega",
    text: "Ferramentas e práticas para transformar desenvolvimento em entrega consistente.",
    items: ["Git / GitHub", "Bun", "Cloudflare", "ESLint", "Deploy"],
  },
];

const process = [
  ["01", "Descoberta", "Entendo o problema, as pessoas envolvidas e o resultado esperado antes de escrever a primeira linha."],
  ["02", "Arquitetura", "Organizo dados, fluxos e interfaces para que o produto comece com uma base coerente."],
  ["03", "Construção", "Transformo estratégia em uma experiência concreta, conectando frontend, regras e integração."],
  ["04", "Evolução", "Valido caminhos importantes e deixo a solução preparada para receber novos contextos."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SignalRule({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`system-divider ${className}`} aria-hidden="true">
      <span className="system-divider-label">{label}</span>
      <i />
      <b />
    </div>
  );
}

function FeaturedProject({ project, position }: { project: Project; position: number }) {
  const isWedding = project.index === "01";
  const Icon = isWedding ? CalendarDays : PackageSearch;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: position * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`featured-case system-frame group relative overflow-hidden border border-white/10 bg-[#10151e] p-6 sm:p-8 ${isWedding ? "lg:col-span-7" : "lg:col-span-5"}`}
      style={{ ["--accent" as string]: project.accent, ["--accent-soft" as string]: project.accentSoft }}
    >
      <div className="featured-case-glow absolute -right-24 -top-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="featured-icon grid h-11 w-11 place-items-center border border-[var(--accent)]/30 bg-[var(--accent-soft)] text-[var(--accent)]"><Icon className="h-5 w-5" /></span>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Destaque {project.index}</p>
              <p className="mt-1 text-xs text-[#9ca7b7]">{project.category}</p>
            </div>
          </div>
          <span className="rounded-full border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--accent)]">{project.status}</span>
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#778499]">necessidade de mercado → solução única</p>
          <h3 className="mt-4 font-display text-[clamp(2.2rem,4.2vw,4rem)] font-bold leading-[0.94] tracking-[-0.065em] text-white">{project.title}</h3>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-[#e0e6ed]">{project.tagline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9eabba] sm:text-[0.95rem]">{project.description}</p>
          <CaseArtifact caseIndex={project.index} />
        </div>

        <div className="mt-9 grid gap-3 border-y border-white/8 py-5 sm:grid-cols-3">
          {project.proof?.map((item) => (
            <div key={item.label} className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--accent)]">{item.label}</p>
              <p className="mt-2 text-sm font-medium leading-5 text-[#dce3eb]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => <span key={tech} className="rounded-md bg-white/[0.045] px-2 py-1 font-mono text-[10px] text-[#c0c9d5]">{tech}</span>)}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/8 pt-5">
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--accent)]"><Github className="h-4 w-4" /> Repositório</a>
          {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-transform hover:translate-x-0.5">Ver demo <ArrowUpRight className="h-4 w-4" /></a> : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleProjects = useMemo(
    () => (activeFilter === "Todos" ? additionalProjects : additionalProjects.filter((project) => project.group === activeFilter)),
    [activeFilter, additionalProjects],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#090b10] text-[#f2f5f8] selection:bg-[#a78bfa]/40 selection:text-white">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/8 bg-[#090b10]/88 py-3 backdrop-blur-xl" : "py-5"}`}>
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="Voltar ao início" className="group flex items-center gap-3">
            <SystemMark />
            <span className="font-display text-sm font-bold tracking-[0.16em] text-white">IversonSantos.dev</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {[ ["Projetos", "#projetos"], ["Processo", "#processo"], ["Habilidades", "#habilidades"], ["Sobre", "#sobre"] ].map(([label, href]) => <a key={label} href={href} className="nav-link text-sm font-medium text-[#dfe7f3] transition-colors hover:text-white">{label}</a>)}
          </nav>

          <a href="#contato" className="hidden items-center gap-2 rounded-full border border-[#a78bfa]/35 bg-[#a78bfa]/10 px-4 py-2 text-sm font-semibold text-[#dacdff] transition-all hover:-translate-y-0.5 hover:border-[#a78bfa]/45 hover:bg-[#a78bfa]/15 lg:inline-flex">Contato <ArrowRight className="h-4 w-4" /></a>
          <button type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-white transition-colors hover:border-white/20 lg:hidden">
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-5 mt-4 rounded-2xl border border-white/10 bg-[#121620]/96 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
            {[ ["Projetos", "#projetos"], ["Processo", "#processo"], ["Habilidades", "#habilidades"], ["Sobre", "#sobre"], ["Contato", "#contato"] ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="block rounded-xl px-3 py-2 text-sm font-medium text-[#e6ebf3] transition-colors hover:bg-white/[0.04]">{label}</a>
            ))}
          </div>
        )}
      </header>

      <main className="relative">
        <div className="systems-spine" aria-hidden="true"><i /><b /><i /><b /><i /></div>

        <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden pt-36 sm:pt-40">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(167,139,250,0.16),transparent_27%),radial-gradient(circle_at_82%_20%,rgba(68,205,255,0.13),transparent_32%)]" />
          <div className="grid-noise absolute inset-0 -z-10 opacity-60" />
          <div className="hero-orb absolute left-[11%] top-36 h-52 w-52 rounded-full bg-[#a78bfa]/15 blur-[100px]" />
          <div className="relative mx-auto grid max-w-[1320px] gap-14 px-5 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
            <motion.div initial={shouldReduceMotion ? false : "hidden"} animate="visible" variants={fadeUp} transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }} className="flex max-w-3xl flex-col justify-center">
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 font-mono text-[10px] tracking-[0.18em] text-[#b9c3d2]"><Sparkles className="h-3.5 w-3.5 text-[#d9ccff]" /> produto + operação + UX</div>
              <h1 className="font-display max-w-3xl text-[clamp(3rem,7vw,6.6rem)] font-bold leading-[0.93] tracking-[-0.065em] text-white">Transformo <span className="text-gradient">processo</span> em produto.</h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-[#a7b0bd] sm:text-lg">Sou <strong className="font-semibold text-[#eef2f7]">Iverson Santos</strong>, desenvolvedor Full Stack focado em transformar ideias confusas em experiências claras, consistentes e úteis para quem vive o negócio.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#projetos" className="button-primary group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white">Ver projetos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-[#e0e6ed] transition-all hover:border-white/20 hover:bg-white/[0.04]">Falar comigo <Mail className="h-4 w-4" /></a>
              </div>
              <div className="mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[ ["Produto", "Problema antes da tecnologia"], ["Interface", "Fluxos com menos atrito"], ["Entrega", "Impacto mensurável"] ].map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7f8ca0]">{label}</p>
                    <p className="mt-2 text-sm font-medium text-[#dfe8f3]">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }} className="flex flex-col items-center gap-5 lg:items-end">
              <div className="system-frame relative h-[360px] w-full overflow-hidden border border-white/10 bg-[#11151f] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:h-[440px] sm:w-[95%] lg:h-[500px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(68,205,255,0.12),transparent_40%)]" />
                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b9bb0]">Operação</p>
                      <p className="mt-2 text-xl font-semibold text-white">Sistema em movimento</p>
                    </div>
                    <span className="rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d9ccff]">Ativo</span>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a98ab]">Fluxo</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">estável</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {["Descoberta", "Arquitetura", "Implementação", "Avaliação"].map((step, index) => (
                          <div key={step} className="flex items-center gap-3">
                            <span className="grid h-6 w-6 place-items-center rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 font-mono text-[10px] text-[#d9ccff]">{index + 1}</span>
                            <div className="h-2 flex-1 rounded-full bg-white/5">
                              <div className="h-2 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#77d8ff]" style={{ width: `${65 + index * 10}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[ ["+12", "produtos mapeados"], ["4x", "menos retrabalho"], ["1x", "visão do negócio"] ].map(([value, label]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-3">
                          <p className="font-display text-2xl font-bold text-white">{value}</p>
                          <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#8e9bb0]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="system-frame self-start w-full max-w-[320px] border border-white/12 bg-[#141925]/88 p-4 shadow-xl backdrop-blur-xl sm:ml-8 sm:w-56">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8594a7]">Arena</p>
                    <p className="mt-2 text-lg font-semibold text-white">Soluções</p>
                  </div>
                  <span className="rounded-full border border-[#77d8ff]/30 bg-[#77d8ff]/10 px-2 py-1 font-mono text-[10px] text-[#acebff]">UX + dados</span>
                </div>
                <div className="mt-4 space-y-3 text-sm text-[#dfe7f2]">
                  <div className="flex items-center justify-between gap-3"><span>Produto</span><Check className="h-4 w-4 text-[#8de4c3]" /></div>
                  <div className="flex items-center justify-between gap-3"><span>Operações</span><Check className="h-4 w-4 text-[#8de4c3]" /></div>
                  <div className="flex items-center justify-between gap-3"><span>Experiência</span><Check className="h-4 w-4 text-[#8de4c3]" /></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="signal-line mx-auto max-w-[1320px] px-5 lg:px-8"><span /></div>
        </section>

        <section id="projetos" className="relative mx-auto max-w-[1320px] px-5 py-28 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}>
              <p className="section-index">PROJETOS</p>
              <h2 className="mt-4 max-w-md font-display text-[clamp(2.6rem,4vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.065em] text-white">Casos que resolvem o real.</h2>
            </motion.div>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.08 }} className="max-w-2xl text-base leading-8 text-[#bac5d3]">Seleciono projetos que mostram como perspicácia, arquitetura e execução real conseguem transformar risco, fricção e excesso de processo em algo mais simples de operar.</motion.p>
          </div>

          <SignalRule label="três cases em destaque" className="mt-14" />
          <div className="mt-7 grid gap-4 lg:grid-cols-12">{featuredProjects.map((project, index) => <FeaturedProject key={project.title} project={project} position={index} />)}</div>

          <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-index">OUTROS PROJETOS</p>
              <h3 className="mt-4 max-w-xl font-display text-[clamp(2rem,3vw,3rem)] font-bold tracking-[-0.06em] text-white">Projetos complementares em operação.</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${activeFilter === filter ? "border-[#a78bfa]/40 bg-[#a78bfa]/10 text-[#e4d9ff]" : "border-white/10 bg-white/[0.02] text-[#dfe7f3] hover:border-white/20"}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <SignalRule label="cases complementares" className="mt-7" />
          <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {visibleProjects.map((project, index) => (
              <motion.article layout key={project.title} initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }} className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-[#121922] p-5 shadow-[0_18px_40px_rgba(3,7,18,0.32)]">
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/80 to-transparent" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8594a7]">{project.category}</p>
                    <h4 className="mt-3 text-xl font-semibold text-white">{project.title}</h4>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#dfe7f3]">{project.status}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#a8b4c2]">{project.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => <span key={tech} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[9px] text-[#cdd8e6]">{tech}</span>)}
                </div>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#d7ccff]"><Github className="h-4 w-4" /> Repo</a>
                  {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[#d9ccff]">Ver <ArrowRight className="h-4 w-4" /></a> : null}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="processo" className="relative border-y border-white/8 bg-[#0d1017] py-28 lg:py-36">
          <div className="grid-noise absolute inset-0 opacity-35" />
          <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="section-index">PROCESSO</p>
                <h3 className="mt-4 max-w-xl font-display text-[clamp(2.1rem,3vw,3.7rem)] font-bold tracking-[-0.06em] text-white">Como o trabalho ganha forma.</h3>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#a9b5c5]">O processo não é improviso: é diagnóstico, arquitetura, validação e evolução. Cada interface nasce para reduzir atrito, trazer clareza e aumentar a capacidade de decisão do negócio.</p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {process.map(([index, title, description]) => (
                <motion.div key={index} initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.52, ease: [0.23, 1, 0.32, 1] }} className="rounded-[26px] border border-white/8 bg-[#111822] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8ea0b6]">{index}</p>
                  <h4 className="mt-4 text-xl font-semibold text-white">{title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#aab7c9]">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="mx-auto max-w-[1320px] px-5 py-28 lg:px-8 lg:py-36">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="section-index">HABILIDADES</p>
              <h3 className="mt-4 max-w-xl font-display text-[clamp(2.1rem,3vw,3.7rem)] font-bold tracking-[-0.06em] text-white">Tecnologias e capacidades que sustentam a entrega.</h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#a9b5c5]">A boa solução não vem só da interface. Ela precisa funcionar em produto, operação e dados — e evoluir sem se quebrar quando o contexto muda.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skills.map(({ icon: Icon, title, text, items }) => (
              <motion.article key={title} initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.52, ease: [0.23, 1, 0.32, 1] }} className="rounded-[26px] border border-white/8 bg-[#101722] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#a78bfa]/25 bg-[#a78bfa]/10 text-[#d9ccff]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-xl font-semibold text-white">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-[#aab7c9]">{text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => <span key={item} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#dfe7f3]">{item}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="sobre" className="relative overflow-hidden bg-[#111620] py-28 lg:py-36">
          <div className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#77d8ff]/10 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-[#a78bfa]/12 blur-[120px]" />
          <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="section-index">SOBRE</p>
                <h3 className="mt-4 max-w-md font-display text-[clamp(2.2rem,3vw,3.6rem)] font-bold tracking-[-0.06em] text-white">Um olhar técnico para resolver o que atrapalha.</h3>
              </div>
              <div className="max-w-3xl space-y-5 text-base leading-8 text-[#b1bdca] sm:text-lg">
                <p>Tenho me dedicado a construir soluções digitais com foco em clareza, automação e experiência real de uso. Meu trabalho combina frontend, infraestrutura, regras de negócio e atenção ao impacto de cada decisão.</p>
                <p>Minha preferência é transformar processo caótico em mecanismo eficiente: menos improviso, mais consistência, melhor decisão e melhor entrega para quem usa o sistema.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="relative mx-auto max-w-[1320px] px-5 py-28 lg:px-8 lg:py-36">
          <div className="system-frame relative overflow-hidden border border-white/10 bg-[#10151e] px-6 py-7 sm:px-8 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(68,205,255,0.11),transparent_35%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-index">CONTATO</p>
                <h3 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,3vw,4rem)] font-bold leading-[0.95] tracking-[-0.065em] text-white">Vamos transformar a sua operação em um sistema mais inteligente.</h3>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="mailto:iversonsantos.dev@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-5 py-3 text-sm font-semibold text-[#f2eaff] transition-colors hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/15">Email <Mail className="h-4 w-4" /></a>
                <a href="https://github.com/IversonSantos-dev" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-[#edf3fb] transition-colors hover:border-white/20 hover:bg-white/[0.05]">GitHub <Github className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-[#080a0e]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <SystemMark />
            <span className="font-display text-sm font-bold tracking-[0.16em] text-white">IversonSantos.dev</span>
          </div>
          <p className="text-sm text-[#909db0]">© 2026 Iverson Santos — Soluções digitais com foco em operação, clareza e impacto.</p>
        </div>
      </footer>
    </div>
  );
}
