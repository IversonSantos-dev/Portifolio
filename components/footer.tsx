"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-background text-foreground border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-surface-border">
          <div>
            <div className="font-editorial text-2xl font-normal text-white">
              Iverson Santos
            </div>
            <p className="mt-1 text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Desenvolvedor de Software · Next.js · React · TypeScript
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {/* Live Clock */}
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>São Paulo, BR:</span>
              <span suppressHydrationWarning className="text-foreground">{time || "12:00:00"} BRT</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Iverson Santos. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Desenvolvido com Next.js 15, React 19, Lenis &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
