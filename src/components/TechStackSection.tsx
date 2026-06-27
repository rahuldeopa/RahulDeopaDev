"use client";

import { TECH_STACK } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import {
  FileCode2,
  Server,
  Layout,
  Database,
  Layers,
  Cloud,
} from "lucide-react";

const categoryMeta: Record<string, { label: string; icon: React.ReactNode }> = {
  languages: { label: "Languages", icon: <FileCode2 size={16} /> },
  backend: { label: "Backend", icon: <Server size={16} /> },
  frontend: { label: "Frontend", icon: <Layout size={16} /> },
  databases: { label: "Databases", icon: <Database size={16} /> },
  orm: { label: "ORM", icon: <Layers size={16} /> },
  cloud: { label: "Cloud & DevOps", icon: <Cloud size={16} /> },
};

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Tech Stack"
          title="Technologies I Work With"
          description="My toolkit for building scalable, production-ready applications."
        />

        <div className="space-y-10">
          {Object.entries(TECH_STACK).map(([category, techs], catIdx) => {
            const meta = categoryMeta[category];
            return (
              <AnimatedSection key={category} delay={catIdx * 0.05}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-text-muted">{meta?.icon}</span>
                  <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider">
                    {meta?.label || category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-2.5 px-4 py-2.5 bg-bg-card border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                    >
                      <span className="text-sm text-text group-hover:text-primary transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
