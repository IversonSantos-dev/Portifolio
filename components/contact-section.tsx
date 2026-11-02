"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, Mail, Github, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Desenvolvimento Frontend / Full Stack",
    message: "",
  });

  const emailAddress = "iverson.paiva11@gmail.com";
  const whatsappNumber = "5532984303090";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    // Monta a mensagem formatada para o WhatsApp
    const textMessage = `*Novo contato pelo Portfólio*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `✉️ *E-mail:* ${formData.email}\n` +
      `🎯 *Assunto / Escopo:* ${formData.scope}\n\n` +
      `💬 *Mensagem:*\n${formData.message}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp com a mensagem pronta
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground">[04]</span>
            <span>Iniciar Parceria</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-editorial text-foreground">
            Vamos construir algo memorável.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl font-sans">
            Seja para desenvolvimento de novas aplicações, estruturação de produtos digitais ou consultoria técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
              <h3 className="font-editorial text-xl font-normal text-white mb-2">
                Canais Diretos
              </h3>
              <p className="text-xs text-muted-foreground mb-6 font-sans">
                Resposta mais rápida por e-mail ou mensagem no LinkedIn.
              </p>

              {/* Email Copy Box */}
              <div className="rounded-xl border border-surface-border bg-surface-secondary p-4 flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail size={18} className="text-muted-foreground shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-foreground truncate">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 ml-3 p-2 rounded-lg bg-surface border border-surface-border hover:border-neutral-400 transition-colors text-muted-foreground hover:text-white"
                  aria-label="Copiar endereço de e-mail"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <Check size={14} /> Copiado
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-mono">
                      <Copy size={14} /> Copiar
                    </span>
                  )}
                </button>
              </div>

              {/* Social Link List */}
              <div className="space-y-3">
                <a
                  href="https://github.com/IversonSantos-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil no GitHub (abre em nova aba)"
                  className="flex items-center justify-between p-3 rounded-lg border border-surface-border hover:border-neutral-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-muted-foreground group-hover:text-white transition-colors" />
                    <span className="text-sm font-mono text-foreground">GitHub</span>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/iverson-santos-a96706193/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil no LinkedIn (abre em nova aba)"
                  className="flex items-center justify-between p-3 rounded-lg border border-surface-border hover:border-neutral-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-muted-foreground group-hover:text-white transition-colors" />
                    <span className="text-sm font-mono text-foreground">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://wa.me/5532984303090"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp direto (abre em nova aba)"
                  className="flex items-center justify-between p-3 rounded-lg border border-surface-border hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle size={18} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <span className="text-sm font-mono text-foreground">WhatsApp</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Conversar</span>
                </a>
              </div>
            </div>

            {/* Availability & Location Pill */}
            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-xs font-mono space-y-2.5">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="uppercase tracking-widest">Fuso Horário</span>
                <span className="text-foreground">UTC-3 (Horário de Brasília)</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="uppercase tracking-widest">Modalidade</span>
                <span className="text-foreground">Remoto / B2B / PJ / CLT</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="uppercase tracking-widest">Tempo de Resposta</span>
                <span className="text-emerald-400">&lt; 12 Horas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Editorial Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-surface-border bg-surface p-6 sm:p-8 lg:p-10">
              <h3 className="font-editorial text-2xl font-normal text-white mb-2">
                Enviar uma Mensagem
              </h3>
              <p className="text-xs text-muted-foreground mb-8 font-sans">
                Descreva os detalhes do projeto ou da oportunidade abaixo.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Check size={28} />
                  </div>
                  <h4 className="font-editorial text-2xl font-normal text-white">
                    Abrindo WhatsApp...
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Sua mensagem foi formatada e a conversa direta no WhatsApp foi iniciada. Caso a janela não tenha aberto automaticamente, você pode usar o botão abaixo.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`*Novo contato pelo Portfólio*\n\n👤 *Nome:* ${formData.name}\n✉️ *E-mail:* ${formData.email}\n🎯 *Assunto:* ${formData.scope}\n\n💬 *Mensagem:*\n${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-emerald-500 text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-emerald-400 transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle size={15} />
                      <span>Abrir WhatsApp Novamente</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          scope: "Desenvolvimento Frontend / Full Stack",
                          message: "",
                        });
                      }}
                      className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-white magnetic-underline py-2"
                    >
                      Enviar Outra Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                      >
                        Seu Nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nome ou empresa"
                        className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-surface-border text-sm text-foreground focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                      >
                        Seu E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="contato@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-surface-border text-sm text-foreground focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="scope"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                    >
                      Tipo de Oportunidade
                    </label>
                    <select
                      id="scope"
                      value={formData.scope}
                      onChange={(e) =>
                        setFormData({ ...formData, scope: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-surface-border text-sm text-foreground focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="Desenvolvimento Full Stack" className="bg-[#141417] text-white">
                        Desenvolvimento Full Stack (Next.js / React / TypeScript)
                      </option>
                      <option value="Desenvolvimento de Novo Produto" className="bg-[#141417] text-white">
                        Criação de Novo Produto ou MVP
                      </option>
                      <option value="E-commerce e Catálogos" className="bg-[#141417] text-white">
                        E-commerce, Catálogo ou Vitrine Digital
                      </option>
                      <option value="Sistemas Internos e Logística" className="bg-[#141417] text-white">
                        Sistemas Internos, Estoque ou Gestão Operacional
                      </option>
                      <option value="Outro" className="bg-[#141417] text-white">
                        Outra proposta / Conversa geral
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                    >
                      Detalhes do Projeto / Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Descreva brevemente seus objetivos, expectativas e prazos..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-secondary border border-surface-border text-sm text-foreground focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-muted-foreground">
                      * Mensagens confidenciais.
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
                    >
                      <span>Enviar Mensagem</span>
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
