"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutGrid, List, ArrowUpRight } from "lucide-react";
import { Project, ProjectCategory, PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { ProjectPreviewPopover } from "@/components/project-preview-popover";
import { ProjectModal } from "@/components/project-modal";
import { ProjectImage } from "@/components/project-image";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Planejamento de eventos",
  "Joalheria sacra e artesanato",
  "Logística e estoque",
  "Automação comercial e POS",
  "NFT & Web3 Marketplace",
  "E-commerce artesanal",
  "Finanças pessoais",
  "Galeria colaborativa",
];

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleHoverStart = (project: Project, e: React.MouseEvent) => {
    setActiveProject(project);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleHoverMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleHoverEnd = () => {
    setActiveProject(null);
  };

  return (
    <section id="cases" className="relative py-24 border-b border-surface-border">
      {/* Pop-over Hover Preview */}
      <ProjectPreviewPopover
        activeProject={activeProject}
        cursorPos={cursorPos}
      />

      {/* Case Study Deep Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Numbered editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              <span className="text-foreground">[01]</span>
              <span>Trabalhos Selecionados & Casos de Produção</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-editorial text-foreground">
              Engenharia com propósito.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl font-sans">
              Aplicações do mundo real unindo rigor técnico, performance e acabamento editorial.
            </p>
          </div>

          {/* View mode toggle (List vs Grid) with WAI-ARIA states */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs font-mono text-muted-foreground mr-1 hidden sm:inline">
              Visualização:
            </span>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg border transition-colors ${
                viewMode === "list"
                  ? "bg-surface text-foreground border-neutral-500"
                  : "bg-surface-secondary text-muted-foreground border-surface-border hover:text-foreground"
              }`}
              aria-label="Mudar para visualização em lista"
              aria-pressed={viewMode === "list"}
            >
              <List size={16} />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg border transition-colors ${
                viewMode === "grid"
                  ? "bg-surface text-foreground border-neutral-500"
                  : "bg-surface-secondary text-muted-foreground border-surface-border hover:text-foreground"
              }`}
              aria-label="Mudar para visualização em grade"
              aria-pressed={viewMode === "grid"}
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div
          role="region"
          aria-label="Filtrar cases por categoria"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap focus:outline-none ${
                selectedCategory === cat
                  ? "bg-foreground text-background font-medium"
                  : "bg-surface border border-surface-border text-muted-foreground hover:text-foreground hover:border-neutral-500"
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat === "All" ? "Todos" : cat}
            </button>
          ))}
        </div>

        {/* Project Renders */}
        {viewMode === "list" ? (
          <div className="divide-y-0">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(p) => setModalProject(p)}
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-surface-border bg-surface p-5 flex flex-col justify-between hover:border-neutral-500 transition-all duration-300"
              >
                <div>
                  {/* Image container wrapped in crawlable Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block focus:outline-none"
                    aria-label={`View case study: ${project.title}`}
                  >
                    <div className="relative h-48 w-full rounded-xl overflow-hidden border border-surface-border mb-4 bg-surface-secondary">
                      <ProjectImage
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-muted-foreground">
                        [{project.number}] {project.category}
                      </div>
                    </div>

                    <h3 className="font-editorial text-xl font-normal text-white flex items-center justify-between group-hover:text-white transition-colors">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground group-hover:text-white transition-colors"
                      />
                    </h3>
                  </Link>
                  <p className="mt-1 text-xs text-muted-foreground font-sans line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {project.techStack.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-surface-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setModalProject(project)}
                      className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-white transition-colors"
                      aria-label={`Visualização rápida de ${project.title}`}
                    >
                      Detalhes
                    </button>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 magnetic-underline"
                      aria-label={`Ver case completo: ${project.title}`}
                    >
                      Case Completo
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
