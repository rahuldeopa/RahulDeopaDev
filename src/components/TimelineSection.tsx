"use client";

import { TIMELINE } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const typeIcons: Record<string, React.ReactNode> = {
  education: <GraduationCap size={16} />,
  experience: <Briefcase size={16} />,
  achievement: <Award size={16} />,
  certification: <BookOpen size={16} />,
};

const typeColors: Record<string, string> = {
  education: "#2563EB",
  experience: "#22C55E",
  achievement: "#F59E0B",
  certification: "#A855F7",
};

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="section-padding relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Timeline"
          title="My Journey"
          description="Education, experience, and milestones along the way."
        />

        <div className="relative" ref={containerRef}>
          {/* Vertical line background */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />
          
          {/* Vertical animated line */}
          <motion.div 
            className="absolute left-4 sm:left-1/2 top-0 w-px bg-primary sm:-translate-x-px origin-top z-0"
            style={{ height }}
          />

          <div className="space-y-10">
            {TIMELINE.map((item, index) => {
              const color = typeColors[item.type] || "#2563EB";
              const isLeft = index % 2 === 0;

              return (
                <AnimatedSection
                  key={index}
                  delay={index * 0.08}
                  direction="up"
                >
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full border-4 border-bg z-10 sm:-translate-x-1.5"
                      style={{ backgroundColor: color }}
                    />

                    {/* Spacer for mobile */}
                    <div className="w-10 sm:hidden shrink-0" />

                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                      }`}
                    >
                      <div
                        className={`p-4 bg-bg-card border border-border rounded-xl ${
                          isLeft ? "sm:ml-auto sm:mr-4" : "sm:mr-auto sm:ml-4"
                        } max-w-sm`}
                      >
                        <div
                          className={`flex items-center gap-2 mb-2 ${
                            isLeft ? "sm:justify-end" : ""
                          }`}
                        >
                          <span style={{ color }}>{typeIcons[item.type]}</span>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded"
                            style={{
                              color,
                              backgroundColor: `${color}15`,
                            }}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-text mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-text-muted mb-1">{item.subtitle}</p>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Hidden spacer for alternating */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
