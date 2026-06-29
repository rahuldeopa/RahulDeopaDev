"use client";

import { GOOGLE_BADGES } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

export default function GoogleBadgesSection() {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Certifications"
          title="Google Cloud Badges"
          description="Skill badges earned through Google Cloud Skills Boost."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_BADGES.map((badge, index) => (
            <AnimatedSection key={badge.name} delay={index * 0.1}>
              <a 
                href="https://www.skills.google/public_profiles/51efa432-82c7-4983-a5c0-bc6ac7cc024e"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center h-full"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-text-muted group-hover:text-text transition-colors line-clamp-2 px-2">
                  {badge.name}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
