"use client";

import { SKILLS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import {
  Server,
  Globe,
  Database,
  Lock,
  Shield,
  Brain,
  Cloud,
  Workflow,
  Building2,
  Webhook,
  Zap,
  Lightbulb,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server size={20} />,
  Globe: <Globe size={20} />,
  Database: <Database size={20} />,
  Lock: <Lock size={20} />,
  Shield: <Shield size={20} />,
  Brain: <Brain size={20} />,
  Cloud: <Cloud size={20} />,
  Workflow: <Workflow size={20} />,
  Building2: <Building2 size={20} />,
  Webhook: <Webhook size={20} />,
  Zap: <Zap size={20} />,
  Lightbulb: <Lightbulb size={20} />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Skills"
          title="What I Do Best"
          description="Core competencies across backend engineering, cloud infrastructure, and software architecture."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <AnimatedSection key={skill.name} delay={index * 0.04}>
              <div className="group p-5 bg-bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default text-center">
                <span className="inline-block mb-3 text-text-muted group-hover:text-primary transition-colors">
                  {iconMap[skill.icon] || <Server size={20} />}
                </span>
                <p className="text-sm font-medium text-text">{skill.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
