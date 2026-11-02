"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectImage } from "@/components/project-image";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  onHoverStart?: (project: Project, e: React.MouseEvent) => void;
  onHoverMove?: (e: React.MouseEvent) => void;
  onHoverEnd?: () => void;
}

export function ProjectCard({
  project,
  onOpenModal,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-surface-border py-8 lg:py-10 transition-colors duration-300 hover:border-foreground/40"
      onMouseEnter={(e) => onHoverStart?.(project, e)}
      onMouseMove={(e) => onHoverMove?.(e)}
      onMouseLeave={() => onHoverEnd?.()}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
        {/* Project Number & Category */}
        <div className="md:col-span-2 flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
            [{project.number}]
          </span>
          <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground/80">
            {project.category}
          </span>
        </div>

        {/* Title, Subtitle & Tagline - Crawlable Next.js Link */}
        <div className="md:col-span-5">
          <Link
            href={`/projects/${project.slug}`}
            className="text-left group/btn focus:outline-none block w-full"
            aria-label={`View dedicated case study: ${project.title}`}
          >
            <h3 className="font-editorial text-2xl lg:text-3xl font-normal tracking-editorial text-foreground group-hover:text-white transition-colors flex items-center gap-3">
              <span>{project.title}</span>
              <ArrowUpRight
                size={20}
                className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-muted-foreground group-hover:text-foreground"
                aria-hidden="true"
              />
            </h3>
            <p className="mt-1 text-sm font-sans text-muted-foreground line-clamp-1">
              {project.subtitle}
            </p>
          </Link>
        </div>

        {/* Tech Stack Pills */}
        <div className="md:col-span-3 flex flex-wrap gap-1.5 items-center">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-surface-secondary border border-surface-border text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[10px] font-mono text-muted-foreground/60">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Year & Actions: Quick View Modal + Dedicated Case Link */}
        <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3 sm:gap-4">
          <span className="font-mono text-xs text-muted-foreground/70 hidden sm:inline">
            {project.year}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenModal(project)}
              className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-white transition-colors"
              aria-label={`Visualização rápida de ${project.title}`}
            >
              Detalhes
            </button>
            <Link
              href={`/projects/${project.slug}`}
              className="text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 magnetic-underline inline-flex items-center gap-1 font-medium"
              aria-label={`Ver case completo de ${project.title}`}
            >
              <span>Case</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Thumbnail preview */}
      <div className="mt-4 md:hidden rounded-lg overflow-hidden border border-surface-border">
        <Link href={`/projects/${project.slug}`} aria-label={`Read case study: ${project.title}`}>
          <ProjectImage
            src={project.thumbnail}
            alt={`${project.title} preview`}
            width={600}
            height={320}
            className="w-full h-44 object-cover"
            loading="lazy"
          />
        </Link>
      </div>
    </motion.article>
  );
}
