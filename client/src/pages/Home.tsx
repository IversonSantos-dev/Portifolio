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
      "Uma plataforma construída para ocupar um espaço pouco atendido no mercado: reunir criação livre de convites, lista de convidados e presentes em um único fluxo. Os noivos recebem os presentes por PIX diretamente na conta pessoal, sem precisar cadastrar dados bancários dentro da plataforma.",
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
    index: "03",
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
    index: "04",
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
    index: "05",
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
    index: "06",
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
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--accent)]"><Github className="h-4 w-4" /> GitHub</a>
          {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-transform hover:translate-x-0.5">{project.demoLabel} <ArrowUpRight className="h-4 w-4" /></a> : <span className="inline-flex items-center gap-1.5 text-sm text-[#697586]"><Clock3 className="h-3.5 w-3.5" /> Em evolução</span>}
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
            {[["Projetos", "#projetos"], ["Processo", "#processo"], ["Habilidades", "#habilidades"], ["Sobre", "#sobre"]].map(([label, href]) => <a key={label} href={href} className="nav-link text-sm text-[#a7b0bd] transition-colors hover:text-white">{label}</a>)}
          </nav>

          <a href="#contato" className="hidden items-center gap-2 rounded-full border border-[#a78bfa]/35 bg-[#a78bfa]/10 px-4 py-2 text-sm font-semibold text-[#dacdff] transition-all hover:-translate-y-0.5 hover:border-[#a78bfa]/70 hover:bg-[#a78bfa]/20 lg:flex">Vamos conversar <ArrowUpRight className="h-4 w-4" /></a>
          <button type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {menuOpen && <div className="mx-5 mt-4 rounded-2xl border border-white/10 bg-[#121620]/96 p-3 shadow-2xl backdrop-blur-xl lg:hidden">{[["Projetos", "#projetos"], ["Processo", "#processo"], ["Habilidades", "#habilidades"], ["Sobre", "#sobre"], ["Contato", "#contato"]].map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[#c7cfda] transition-colors hover:bg-white/5 hover:text-white">{label} <ArrowUpRight className="h-4 w-4" /></a>)}</div>}
      </header>

      <main className="relative">
        <div className="systems-spine" aria-hidden="true"><i /><b /><i /><b /><i /></div>
        <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden pt-36 sm:pt-40">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(167,139,250,0.16),transparent_27%),radial-gradient(circle_at_82%_20%,rgba(68,205,255,0.13),transparent_29%),linear-gradient(120deg,#090b10_0%,#0c1018_54%,#090b10_100%)]" />
          <div className="grid-noise absolute inset-0 -z-10 opacity-60" />
          <div className="hero-orb absolute left-[11%] top-36 h-52 w-52 rounded-full bg-[#a78bfa]/15 blur-[100px]" />
          <div className="relative mx-auto grid max-w-[1320px] gap-14 px-5 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
            <motion.div initial={shouldReduceMotion ? false : "hidden"} animate="visible" variants={fadeUp} transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }} className="flex max-w-3xl flex-col justify-center pt-4 lg:pt-10">
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 font-mono text-[10px] tracking-[0.18em] text-[#b9c3d2]"><CircleDot className="h-3.5 w-3.5 text-[#a78bfa]" /> DESENVOLVIMENTO FULL STACK · PRODUTO DIGITAL</div>
              <h1 className="font-display max-w-3xl text-[clamp(3rem,7vw,6.6rem)] font-bold leading-[0.93] tracking-[-0.065em] text-white">Transformo <span className="text-gradient">processo</span> em produto.</h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-[#a7b0bd] sm:text-lg">Sou <strong className="font-semibold text-[#eef2f7]">Iverson Santos</strong>, desenvolvedor Full Stack focado em criar sistemas digitais claros, consistentes e prontos para evoluir. Eu conecto experiência, lógica de negócio e dados para fazer a tecnologia trabalhar a favor de decisões reais.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#projetos" className="button-primary group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-[#171024]">Explorar projetos <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" /></a><a href="https://github.com/IversonSantos-dev" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"><Github className="h-4 w-4" /> Conhecer GitHub</a></div>
              <div className="mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">{[["Produto", "Problema antes da tecnologia"], ["Interface", "Fluxos com menos atrito"], ["Entrega", "Do dado à publicação"]].map(([title, text]) => <div key={title}><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a78bfa]">{title}</p><p className="mt-2 text-xs leading-5 text-[#8f9aaa] sm:text-sm">{text}</p></div>)}</div>
            </motion.div>
            <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }} className="relative flex flex-col items-end gap-5 lg:pt-2">
              <div className="system-frame relative h-[360px] w-full overflow-hidden border border-white/10 bg-[#11151f] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:h-[440px] sm:w-[95%] lg:h-[500px]"><img src="/manus-storage/iverson-hero-system_1e2a9140.jpg" alt="Sistema visual abstrato de produto e dados" className="h-full w-full object-cover opacity-85" /><div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(9,11,16,.46),transparent_58%),linear-gradient(0deg,rgba(9,11,16,.7),transparent_42%)]" /><div className="absolute left-6 top-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/65"><span className="h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_18px_#a78bfa]" /> sistema em movimento</div><div className="absolute bottom-6 left-6 right-6 grid grid-cols-[1fr_auto] items-end gap-3 rounded-2xl border border-white/10 bg-[#0d1017]/65 p-4 backdrop-blur-md"><div><p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#a78bfa]">Arquitetura de produto</p><p className="mt-1 text-sm font-medium text-white">Ideia → interface → dados → evolução</p></div><Network className="h-5 w-5 text-[#77d8ff]" /></div></div>
              <div className="system-frame self-start w-full max-w-[320px] border border-white/12 bg-[#141925]/88 p-4 shadow-xl backdrop-blur-xl sm:ml-8 sm:w-56"><div className="flex items-start justify-between gap-3"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#a7b0bd]">campo de atuação</p><p className="mt-2 font-display text-xl font-bold tracking-[-0.04em] text-white">06 produtos</p></div><span className="mt-1 h-2 w-2 rounded-full bg-[#77d8ff] shadow-[0_0_14px_#77d8ff]" /></div><p className="mt-2 border-t border-white/8 pt-2 text-xs leading-5 text-[#a7b0bd]">Planejamento, logística, e-commerce, finanças e colaboração.</p></div>
            </motion.div>
          </div>
          <div className="signal-line mx-auto max-w-[1320px] px-5 lg:px-8"><span /></div>
        </section>

        <section id="projetos" className="relative mx-auto max-w-[1320px] px-5 py-28 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-end"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.55 }}><p className="section-index">01 · PROJETOS SELECIONADOS</p><h2 className="section-title mt-4">Soluções criadas para mover decisões.</h2><p className="mt-6 max-w-md text-sm leading-7 text-[#9aa5b4] sm:text-base">Cada projeto nasce de um contexto diferente, mas segue o mesmo princípio: diminuir atrito e tornar a operação mais visível para quem precisa decidir.</p></motion.div><div className="system-frame relative overflow-hidden border border-white/10 bg-[#111620] p-5 sm:p-6"><img src="/manus-storage/iverson-project-flow_8c20b4c7.jpg" alt="Fluxo abstrato de módulos conectados" className="absolute inset-0 h-full w-full object-cover opacity-40" /><div className="absolute inset-0 bg-[linear-gradient(90deg,#111620_0%,rgba(17,22,32,.62)_100%)]" /><div className="relative flex min-h-32 flex-col justify-between gap-6 sm:flex-row sm:items-end"><p className="max-w-sm font-display text-xl font-semibold tracking-[-0.045em] text-white">Produtos digitais com interface cuidada, lógica consistente e espaço para evoluir.</p><span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#cfdaea]">6 cases <ArrowRight className="h-3.5 w-3.5" /></span></div></div></div>

          <SignalRule label="dois cases em destaque" className="mt-14" />
          <div className="mt-7 grid gap-4 lg:grid-cols-12">{featuredProjects.map((project, index) => <FeaturedProject key={project.title} project={project} position={index} />)}</div>

          <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-12 md:flex-row md:items-end md:justify-between"><div><p className="section-index">OUTROS PROJETOS</p><h3 className="mt-3 font-display text-[clamp(2rem,3.3vw,3.2rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white">Mais sistemas em construção.</h3></div><div className="flex flex-wrap gap-2" aria-label="Filtrar outros projetos">{filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${activeFilter === filter ? "bg-[#a78bfa] text-[#170f28] shadow-[0_8px_24px_rgba(167,139,250,.2)]" : "border border-white/10 bg-white/[0.025] text-[#a7b0bd] hover:border-white/25 hover:text-white"}`}>{filter}</button>)}</div></div>
          <SignalRule label="cases complementares" className="mt-7" />
          <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{visibleProjects.map((project, index) => <motion.article layout key={project.title} initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.045 }} className="project-card system-frame group relative flex min-h-[470px] flex-col overflow-hidden border border-white/10 bg-[#10141d] p-6 transition-colors hover:border-white/25" style={{ ["--accent" as string]: project.accent, ["--accent-soft" as string]: project.accentSoft }}><div className="project-accent absolute inset-x-0 top-0 h-1" /><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] tracking-[0.16em] text-[var(--accent)]">{project.index} / {project.category.toUpperCase()}</p><h3 className="mt-4 font-display text-[1.65rem] font-bold tracking-[-0.055em] text-white">{project.title}</h3></div><span className="rounded-md border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--accent)]">{project.status}</span></div><p className="mt-4 text-sm font-medium leading-6 text-[#e1e7ee]">{project.tagline}</p><p className="mt-3 text-sm leading-6 text-[#9ba6b5]">{project.description}</p><div className="case-map mt-5 grid grid-cols-3 gap-2 border-y border-white/8 py-4">{[["Problema", project.problem], ["Sistema", project.system], ["Sinal", project.outcome]].map(([label, value]) => <div key={label}><p className="font-mono text-[8px] uppercase tracking-[0.13em] text-[var(--accent)]">{label}</p><p className="mt-1 text-[10px] leading-4 text-[#bbc5d2]">{value}</p></div>)}</div><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-md bg-white/[0.045] px-2 py-1 font-mono text-[10px] text-[#c0c9d5]">{tech}</span>)}</div><div className="mt-auto flex items-center gap-4 border-t border-white/8 pt-5"><a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--accent)]"><Github className="h-4 w-4" /> GitHub</a>{project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">{project.demoLabel} <ArrowUpRight className="h-4 w-4" /></a> : <span className="inline-flex items-center gap-1.5 text-sm text-[#697586]"><span className="h-1.5 w-1.5 rounded-full bg-[#697586]" /> Demo em breve</span>}</div></motion.article>)}</motion.div>
        </section>

        <section id="processo" className="relative border-y border-white/8 bg-[#0d1017] py-28 lg:py-36"><div className="grid-noise absolute inset-0 opacity-35" /><div className="relative mx-auto max-w-[1320px] px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="section-index">02 · PROCESSO</p><h2 className="section-title mt-4 max-w-md">Código só é útil quando responde ao contexto.</h2><p className="mt-6 max-w-md text-sm leading-7 text-[#9aa5b4] sm:text-base">Minha forma de trabalhar conecta decisões de produto à implementação. Assim, a tecnologia não entra como enfeite: ela sustenta o que a experiência precisa resolver.</p></div><div><SignalRule label="sequência de entrega" className="mb-1" /><div className="divide-y divide-white/10 border-t border-white/10">{process.map(([number, title, description]) => <div key={number} className="group relative grid gap-4 py-6 sm:grid-cols-[72px_0.55fr_1fr] sm:items-center sm:gap-7"><span className="relative font-mono text-xs tracking-[0.15em] text-[#a78bfa]"><i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_10px_#a78bfa]" />{number}</span><h3 className="font-display text-2xl font-semibold tracking-[-0.045em] text-white">{title}</h3><p className="text-sm leading-6 text-[#9aa5b4]">{description}</p></div>)}</div></div></div></div></section>

        <section id="habilidades" className="mx-auto max-w-[1320px] px-5 py-28 lg:px-8 lg:py-36"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="section-index">03 · HABILIDADES</p><h2 className="section-title mt-4 max-w-2xl">Ferramentas para pensar, construir e evoluir.</h2></div><p className="max-w-md text-sm leading-7 text-[#9aa5b4]">Uma visão de tecnologia organizada por responsabilidade, não por uma coleção aleatória de nomes.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{skills.map(({ icon: Icon, title, text, items }, index) => <motion.div key={title} initial={shouldReduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.06 }} className="system-frame relative border border-white/10 bg-[#10141d] p-6"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-none border border-[#a78bfa]/20 bg-[#a78bfa]/10 text-[#bfa6ff]"><Icon className="h-5 w-5" /></span><span className="font-mono text-[10px] text-[#657185]">0{index + 1}</span></div><h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.05em] text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-[#9aa5b4]">{text}</p><div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">{items.map((item) => <span key={item} className="font-mono text-[10px] text-[#c9d2de]">{item}</span>)}</div></motion.div>)}</div></section>

        <section id="sobre" className="relative overflow-hidden bg-[#111620] py-28 lg:py-36"><div className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#77d8ff]/10 blur-[120px]" /><div className="relative mx-auto grid max-w-[1320px] gap-12 px-5 lg:grid-cols-[0.66fr_1.34fr] lg:px-8"><div><p className="section-index">04 · SOBRE MIM</p><div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c8d0dc]"><Sparkles className="h-3.5 w-3.5 text-[#a78bfa]" /> visão de produto + engenharia</div></div><div><h2 className="font-display max-w-4xl text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[0.98] tracking-[-0.065em] text-white">Boa tecnologia é aquela que <span className="text-gradient">tira peso</span> de uma decisão.</h2><div className="mt-9 grid max-w-3xl gap-5 text-base leading-8 text-[#b1bac7] sm:grid-cols-2"><p>Gosto de construir produtos que resolvem situações concretas com clareza. Isso significa entender onde existe retrabalho, qual informação falta e como cada pessoa vai percorrer a experiência.</p><p>Da arquitetura visual à estrutura de dados, trabalho para que cada parte do sistema tenha motivo para existir. O resultado é uma entrega que cuida tanto de quem usa quanto de quem opera.</p></div><SignalRule label="princípios de trabalho" className="mt-11" /><div className="mt-5 grid gap-3 sm:grid-cols-3">{["Clareza antes da complexidade", "Tecnologia a serviço do problema", "Base preparada para evoluir"].map((item) => <div key={item} className="system-frame flex gap-3 border border-white/10 bg-black/15 p-4 text-sm leading-6 text-[#d9e0e8]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#a78bfa]" /> {item}</div>)}</div></div></div></section>

        <section id="contato" className="relative mx-auto max-w-[1320px] px-5 py-28 lg:px-8 lg:py-36"><div className="system-frame relative overflow-hidden border border-white/10 bg-[#10151e] px-6 py-14 sm:px-12 lg:px-16 lg:py-20"><img src="/manus-storage/iverson-contact-orbit_4716e6ba.jpg" alt="Órbita abstrata de conexão" className="absolute inset-0 h-full w-full object-cover opacity-35" /><div className="absolute inset-0 bg-[linear-gradient(90deg,#10151e_10%,rgba(16,21,30,.86)_54%,rgba(16,21,30,.5)_100%)]" /><div className="relative max-w-3xl"><p className="section-index">05 · CONTATO</p><SignalRule label="abrir uma conversa" className="mt-5" /><h2 className="mt-7 font-display text-[clamp(2.7rem,6vw,5.2rem)] font-bold leading-[0.91] tracking-[-0.07em] text-white">Vamos tirar sua próxima ideia do <span className="text-gradient">papel.</span></h2><p className="mt-7 max-w-xl text-base leading-8 text-[#b9c2cf] sm:text-lg">Se existe um fluxo, processo ou serviço que precisa se tornar mais claro no digital, vamos conversar sobre como desenhar e construir a solução certa.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="https://github.com/IversonSantos-dev" target="_blank" rel="noreferrer" className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-[#171024]"><Github className="h-4 w-4" /> GitHub</a><a href="mailto:iverson.paiva11@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"><Mail className="h-4 w-4" /> Enviar e-mail</a><a href="https://www.linkedin.com/in/iverson-santos-a96706193/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/15 px-5 py-3.5 text-sm text-[#d4dbe5] transition-colors hover:border-[#a78bfa]/55 hover:bg-white/[0.08] hover:text-white"><ExternalLink className="h-4 w-4" /> LinkedIn</a></div></div></div></section>
      </main>

      <footer className="border-t border-white/8 bg-[#080a0e]"><div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-3"><SystemMark size="footer" /><div><p className="font-display text-sm font-bold tracking-[0.12em] text-white">IversonSantos.dev</p><p className="mt-1 text-xs text-[#798598]">Desenvolvedor Full Stack</p></div></div><p className="text-xs text-[#6d7888]">© {new Date().getFullYear()} Iverson Santos. Construído com intenção.</p><a href="#inicio" className="inline-flex items-center gap-2 text-xs font-medium text-[#bac4d1] hover:text-white">Voltar ao topo <ChevronRight className="h-3.5 w-3.5 -rotate-90" /></a></div></footer>
    </div>
  );
}
