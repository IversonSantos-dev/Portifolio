import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, ExternalLink } from "lucide-react";
import { getAllProjects, getProjectBySlug, PROJECTS } from "@/data/projects";
import { ProjectImage } from "@/components/project-image";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Não Encontrado — Iverson Santos",
      description: "O estudo de caso solicitado não pôde ser localizado.",
    };
  }

  return {
    title: `${project.title} — Estudo de Caso | Iverson Santos`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Estudo de Caso Técnico`,
      description: project.tagline,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for sequential navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#cases"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Voltar ao Portfólio</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-b border-surface-border pb-10">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            <span className="text-white">[{project.number}]</span>
            <span className="px-2.5 py-0.5 rounded bg-surface border border-surface-border text-neutral-300">
              {project.category}
            </span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-editorial text-white leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-neutral-300 font-sans max-w-3xl leading-relaxed">
            {project.subtitle} — {project.tagline}
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-surface-border font-mono text-xs">
            <div>
              <span className="text-muted-foreground uppercase tracking-wider block">Papel</span>
              <span className="text-white mt-1 block font-sans font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-muted-foreground uppercase tracking-wider block">Projeto / Cliente</span>
              <span className="text-white mt-1 block">{project.client}</span>
            </div>
            <div>
              <span className="text-muted-foreground uppercase tracking-wider block">Prazo</span>
              <span className="text-white mt-1 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-muted-foreground uppercase tracking-wider block">Arquitetura</span>
              <span className="text-white mt-1 block">{project.techStack[0]} · {project.techStack[1]}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative my-10 h-72 sm:h-96 lg:h-[460px] w-full rounded-2xl overflow-hidden border border-surface-border bg-surface-secondary">
          <ProjectImage
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8 mb-16">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="border-b sm:border-b-0 sm:border-r last:border-none border-surface-border pb-4 sm:pb-0 sm:pr-4">
              <div className="font-mono text-3xl sm:text-4xl font-medium text-white">
                {metric.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {metric.label}
              </div>
              {metric.change && (
                <div className="font-mono text-xs text-emerald-400 mt-1">
                  {metric.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Deep Dive Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                // 01. Contexto & Desafio
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                // 02. Solução Técnica & Arquitetura
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                // 03. Impacto & Resultados de Negócio
              </h2>
              <ul className="space-y-3">
                {project.impact.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 size={18} className="text-white shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl border border-surface-border bg-surface p-6 space-y-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Pilares de Arquitetura
                </h3>
                <ul className="space-y-2">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="text-xs font-mono text-neutral-300 flex items-start gap-2">
                      <span className="text-muted-foreground">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Tecnologias Utilizadas
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-surface-secondary border border-surface-border text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    <span>Acessar Projeto Ao Vivo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-surface-border bg-surface-secondary text-neutral-300 font-mono text-xs uppercase tracking-wider hover:border-neutral-400 hover:text-white transition-colors"
                  >
                    <span>Ver Repositório no GitHub</span>
                    <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Next Project Footer Navigator */}
        <div className="pt-12 border-t border-surface-border flex items-center justify-between">
          <Link
            href="/#cases"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-white"
          >
            ← Todos os Cases
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-3 text-right"
          >
            <div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                Próximo Case [{nextProject.number}]
              </div>
              <div className="font-editorial text-xl text-white group-hover:underline">
                {nextProject.title}
              </div>
            </div>
            <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
