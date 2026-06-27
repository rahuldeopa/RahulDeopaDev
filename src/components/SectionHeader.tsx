"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <AnimatedSection className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-xs font-medium text-primary border border-primary/20 rounded-full bg-primary/5 mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">{title}</h2>
      {description && (
        <p className="text-text-muted max-w-2xl mx-auto text-sm leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
