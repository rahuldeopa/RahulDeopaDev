"use client";

import { PROJECTS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Projects"
          title="Featured Projects"
          description="A selection of projects showcasing full-stack development, API design, and AI integration."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group h-full bg-bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                {/* Project visual */}
                <div
                  className="relative h-48 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  }}
                >
                  {project.isComingSoon ? (
                    <div className="flex flex-col items-center justify-center h-full gap-3">
                      <Sparkles size={32} style={{ color: project.color }} />
                      <span
                        className="px-3 py-1 text-xs font-semibold rounded-full"
                        style={{
                          color: project.color,
                          backgroundColor: `${project.color}20`,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        Currently Building
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold"
                        style={{
                          color: project.color,
                          backgroundColor: `${project.color}15`,
                          border: `1px solid ${project.color}25`,
                        }}
                      >
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-bg-card border border-border rounded-lg hover:bg-white/10 transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-0.5 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-muted">{project.subtitle}</p>
                    </div>
                    {!project.isComingSoon && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-text-muted mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2 py-0.5 text-[11px] font-medium text-text-muted bg-white/5 rounded"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium border border-border rounded text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
