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

import { motion } from "framer-motion";

export default function AchievementsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-20 w-72 h-72 bg-primary/10 dark:bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-400/10 dark:bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="Achievements"
          title="Milestones & Accomplishments"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="group p-5 bg-bg-card border border-border rounded-xl hover:border-primary/30 dark:hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(37,99,235,0.05)] dark:hover:shadow-[0_4px_20px_rgba(34,197,94,0.05)] transition-all duration-300 text-center h-full flex flex-col justify-center items-center">
                <span className="inline-block mb-3 text-primary/70 dark:text-accent/70 group-hover:text-primary dark:group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                  {iconMap[achievement.icon] || <Trophy size={18} />}
                </span>
                <p className="text-sm font-medium text-text group-hover:text-text transition-colors">
                  {achievement.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
