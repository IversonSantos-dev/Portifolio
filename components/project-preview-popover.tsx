"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectImage } from "@/components/project-image";

interface PreviewPopoverProps {
  activeProject: Project | null;
  cursorPos: { x: number; y: number };
}

export function ProjectPreviewPopover({
  activeProject,
  cursorPos,
}: PreviewPopoverProps) {
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const popoverWidth = 290;
  const popoverHeight = 350;

  // Viewport edge collision handling
  let targetX = cursorPos.x + 24;
  if (targetX + popoverWidth > viewport.width - 24) {
    targetX = cursorPos.x - popoverWidth - 24;
  }
  targetX = Math.max(16, targetX);

  let targetY = cursorPos.y - 140;
  if (targetY < 20) {
    targetY = cursorPos.y + 24;
  } else if (targetY + popoverHeight > viewport.height - 20) {
    targetY = Math.max(20, viewport.height - popoverHeight - 20);
  }

  return (
    <AnimatePresence>
      {activeProject && (
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: targetX,
            y: targetY,
          }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
          transition={{
            type: "spring",
            damping: 26,
            stiffness: 280,
            mass: 0.15,
          }}
          className="pointer-events-none fixed z-50 hidden md:block w-72 rounded-xl overflow-hidden border border-surface-border bg-surface/95 backdrop-blur-md shadow-2xl shadow-black/80"
          style={{
            top: 0,
            left: 0,
          }}
        >
          {/* Pop-over Media */}
          <div className="relative h-44 w-full overflow-hidden bg-surface-secondary">
            <ProjectImage
              src={activeProject.previewPopImage || activeProject.thumbnail}
              alt={activeProject.title}
              fill
              sizes="288px"
              className="object-cover transition-transform duration-500 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase text-white">
              {activeProject.category}
            </div>
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-muted-foreground">
              {activeProject.year}
            </div>
          </div>

          {/* Pop-over Content */}
          <div className="p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted-foreground">
                [{activeProject.number}]
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {activeProject.role.split("&")[0].trim()}
              </span>
            </div>
            <h4 className="font-editorial text-lg font-normal text-white mt-1 leading-snug">
              {activeProject.title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
              {activeProject.tagline}
            </p>

            {/* Quick Metrics */}
            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div className="mt-3 pt-2.5 border-t border-surface-border grid grid-cols-2 gap-2 text-center">
                <div>
                  <div className="text-xs font-mono font-medium text-white">
                    {activeProject.metrics[0].value}
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">
                    {activeProject.metrics[0].label}
                  </div>
                </div>
                {activeProject.metrics[1] && (
                  <div>
                    <div className="text-xs font-mono font-medium text-white">
                      {activeProject.metrics[1].value}
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">
                      {activeProject.metrics[1].label}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
