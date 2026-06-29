"use client";

import { EXPERIENCE } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import {
  Layers,
  GitBranch,
  Shield,
  LayoutDashboard,
  Globe,
  Database,
  Container,
  GitCommitHorizontal,
  Briefcase,
} from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={14} />,
  GitBranch: <GitBranch size={14} />,
  Shield: <Shield size={14} />,
  LayoutDashboard: <LayoutDashboard size={14} />,
  Globe: <Globe size={14} />,
  Database: <Database size={14} />,
  Container: <Container size={14} />,
  GitCommitHorizontal: <GitCommitHorizontal size={14} />,
};

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Experience"
          title="Work Experience"
          description="Building enterprise-grade software at scale."
        />

        <div className="relative space-y-12" ref={containerRef}>
          {/* Background line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border" />
          
          {/* Animated line */}
          <motion.div 
            className="absolute left-0 top-0 w-[2px] bg-primary origin-top z-0"
            style={{ height }}
          />

          {EXPERIENCE.map((exp, index) => (
            <AnimatedSection key={index} delay={0.1}>
              <div className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-[-7px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-bg z-10" />

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-primary" />
                    <h3 className="text-xl font-semibold text-text">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-text-muted">{exp.company}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-md">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-text-muted mb-6 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {exp.achievements.map((achievement, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-3 p-3 bg-bg-card border border-border rounded-lg"
                    >
                      <span className="mt-0.5 text-primary">
                        {iconMap[achievement.icon] || <Layers size={14} />}
                      </span>
                      <span className="text-sm text-text-muted">{achievement.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-text-muted bg-white/5 border border-border rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
