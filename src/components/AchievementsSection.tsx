"use client";

import { ACHIEVEMENTS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import {
  Trophy,
  Layers,
  Building2,
  Server,
  Globe,
  KeyRound,
  Brain,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={18} />,
  Layers: <Layers size={18} />,
  Building2: <Building2 size={18} />,
  Server: <Server size={18} />,
  Globe: <Globe size={18} />,
  KeyRound: <KeyRound size={18} />,
  Brain: <Brain size={18} />,
};

export default function AchievementsSection() {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Achievements"
          title="Milestones & Accomplishments"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="group p-5 bg-bg-card border border-border rounded-xl hover:border-accent/30 transition-all text-center">
                <span className="inline-block mb-3 text-accent/70 group-hover:text-accent transition-colors">
                  {iconMap[achievement.icon] || <Trophy size={18} />}
                </span>
                <p className="text-sm font-medium text-text">{achievement.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
