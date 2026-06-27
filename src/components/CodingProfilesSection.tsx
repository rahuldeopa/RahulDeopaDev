"use client";

import { CODING_PROFILES } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { Code2, Terminal, Trophy, ExternalLink, Cloud, Brain } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon size={24} />,
  Linkedin: <LinkedinIcon size={24} />,
  Code2: <Code2 size={24} />,
  Terminal: <Terminal size={24} />,
  Trophy: <Trophy size={24} />,
  Cloud: <Cloud size={24} />,
  Brain: <Brain size={24} />,
};

export default function CodingProfilesSection() {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Profiles"
          title="Coding Profiles"
          description="Find me on various coding platforms."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CODING_PROFILES.map((profile, index) => (
            <AnimatedSection key={profile.platform} delay={index * 0.05}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-center"
              >
                <span className="inline-block mb-3 text-text-muted group-hover:text-primary transition-colors">
                  {iconMap[profile.icon] || <Code2 size={24} />}
                </span>
                <p className="text-sm font-medium text-text mb-0.5">{profile.platform}</p>
                <p className="text-xs text-text-muted">@{profile.username}</p>
                <ExternalLink
                  size={12}
                  className="mx-auto mt-2 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
