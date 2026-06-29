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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(TECH_STACK).map(([category, techs], catIdx) => {
            const meta = categoryMeta[category];
            return (
              <AnimatedSection key={category} delay={catIdx * 0.1}>
                <div className="group h-full flex flex-col p-6 bg-bg-card border border-border rounded-xl hover:border-primary/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(37,99,235,0.1)] relative overflow-hidden">
                  {/* Subtle background glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex flex-col items-center text-center mb-6 relative z-10">
                    <div className="p-3 bg-white/5 border border-border text-primary rounded-xl mb-4 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                      {meta?.icon}
                    </div>
                    <h3 className="text-lg font-bold text-text tracking-wide">
                      {meta?.label || category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2.5 mt-auto relative z-10">
                    {techs.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1.5 text-xs font-medium bg-bg border border-border text-text-muted rounded-full group-hover:border-primary/30 group-hover:text-text transition-colors duration-300 shadow-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
