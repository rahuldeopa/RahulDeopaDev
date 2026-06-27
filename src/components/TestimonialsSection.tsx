"use client";

import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Coming Soon",
    role: "Colleague / Manager",
    text: "Testimonial placeholder — this section will be updated with real feedback from colleagues, managers, and clients.",
    avatar: null,
  },
  {
    name: "Coming Soon",
    role: "Client / Collaborator",
    text: "Testimonial placeholder — reach out to share your experience working together, and it will be featured here.",
    avatar: null,
  },
  {
    name: "Coming Soon",
    role: "Mentor / Peer",
    text: "Testimonial placeholder — endorsements and recommendations will be added as they come in.",
    avatar: null,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Testimonials"
          title="What People Say"
          description="Feedback from colleagues and collaborators."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-6 bg-bg-card border border-border rounded-xl h-full flex flex-col">
                <Quote size={20} className="text-primary/40 mb-4" />
                <p className="text-sm text-text-muted leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-xs font-medium text-text-muted">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">{testimonial.name}</p>
                      <p className="text-xs text-text-muted">{testimonial.role}</p>
                    </div>
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
