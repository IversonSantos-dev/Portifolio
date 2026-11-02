import React from "react";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { SkillsStack } from "@/components/skills-stack";
import { AboutPhilosophy } from "@/components/about-philosophy";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <SkillsStack />
      <AboutPhilosophy />
      <ContactSection />
    </>
  );
}
