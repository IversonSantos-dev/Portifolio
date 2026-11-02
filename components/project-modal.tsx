"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectImage } from "@/components/project-image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-surface-border shadow-2xl p-6 sm:p-8 lg:p-10 text-foreground"
          >
            {/* Header / Close button */}
            <div className="flex items-center justify-between border-b border-surface-border pb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                  [{project.number}]
                </span>
                <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-surface-secondary text-muted-foreground border border-surface-border">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar detalhes do case"
                className="rounded-full p-2 text-muted-foreground hover:text-white hover:bg-surface-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Title & Tagline */}
            <div className="mt-6">
              <h2
                id="modal-project-title"
                className="font-editorial text-3xl sm:text-4xl font-normal tracking-editorial text-white"
              >
                {project.title}
              </h2>
              <p className="mt-2 text-base text-muted-foreground font-sans">
                {project.subtitle} —{" "}
                <span className="text-foreground/90">{project.tagline}</span>
              </p>
            </div>

            {/* Media Image */}
            <div className="relative mt-6 h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-surface-border">
              <ProjectImage
                src={project.heroImage || project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>

            {/* Key Metrics Banner */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border border-surface-border rounded-xl p-4 bg-surface-secondary/60">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center sm:text-left sm:px-2">
                  <div className="text-2xl sm:text-3xl font-mono font-medium text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                    {metric.label}
                  </div>
                  {metric.change && (
                    <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                      {metric.change}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Case Study Body: Challenge, Solution, Architecture, Impact */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <span>// 01. Contexto & Desafio</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <span>// 02. Solução Técnica</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <span>// 03. Impacto & Resultados</span>
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {project.impact.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-foreground/85 flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-white shrink-0 mt-0.5"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar: Role, Architecture Points, Tech Stack, Links */}
              <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-surface-border lg:pl-8">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Papel & Prazo
                  </div>
                  <div className="text-sm font-medium text-white mt-1">
                    {project.role}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-0.5">
                    {project.timeline} · Projeto: {project.client}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Pilares de Arquitetura
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {project.architecture.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-mono text-foreground/70 flex items-start gap-1.5"
                      >
                        <span className="text-muted-foreground">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Stack Tecnológica
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-surface-secondary border border-surface-border text-foreground"
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
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-foreground text-background font-sans text-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                      <span>Acessar Projeto Ao Vivo</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-surface-border bg-surface-secondary text-foreground font-sans text-sm font-medium hover:border-neutral-400 transition-colors"
                    >
                      <span>Ver Repositório no GitHub</span>
                      <Github size={16} />
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={onClose}
                    className="text-center text-xs font-mono text-muted-foreground hover:text-white uppercase tracking-wider py-1 magnetic-underline mx-auto"
                  >
                    Ver Página Dedicada
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
