"use client";

import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapItems = [
  { text: "Core workflow engine", status: "done" as const },
  { text: "Drag-and-drop node builder", status: "done" as const },
  { text: "LLM integration (OpenAI, Anthropic)", status: "in-progress" as const },
  { text: "Execution monitoring & logs", status: "in-progress" as const },
  { text: "Subscription billing (Razorpay)", status: "in-progress" as const },
  { text: "Template marketplace", status: "planned" as const },
  { text: "Team collaboration", status: "planned" as const },
  { text: "Public API & webhooks", status: "planned" as const },
];

const statusConfig = {
  done: { icon: <CheckCircle2 size={14} />, color: "#22C55E", label: "Completed" },
  "in-progress": { icon: <Clock size={14} />, color: "#F59E0B", label: "In Progress" },
  planned: { icon: <Circle size={14} />, color: "#A1A1AA", label: "Planned" },
};

export default function NowBuildingSection() {
  const doneCount = roadmapItems.filter((i) => i.status === "done").length;
  const progress = Math.round((doneCount / roadmapItems.length) * 100);

  return (
    <section className="section-padding relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Now Building"
          title="AI Workflow Automation Platform"
          description="A production-grade platform for creating AI-powered workflows with drag-and-drop nodes, LLM integrations, and subscription billing."
        />

        <AnimatedSection>
          <div className="bg-bg-card border border-border rounded-xl p-6">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-muted">Overall Progress</span>
                <span className="text-sm font-medium text-text">{progress}%</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Status legend */}
            <div className="flex flex-wrap gap-4 mb-6">
              {Object.entries(statusConfig).map(([key, config]) => (
                <div key={key} className="flex items-center gap-1.5 text-xs text-text-muted">
                  <span style={{ color: config.color }}>{config.icon}</span>
                  {config.label}
                </div>
              ))}
            </div>

            {/* Roadmap items */}
            <div className="space-y-3">
              {roadmapItems.map((item, index) => {
                const config = statusConfig[item.status];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span style={{ color: config.color }}>{config.icon}</span>
                    <span
                      className={`text-sm ${
                        item.status === "done"
                          ? "text-text-muted line-through"
                          : "text-text"
                      }`}
                    >
                      {item.text}
                    </span>
                    {item.status === "in-progress" && (
                      <Sparkles size={12} className="text-yellow-500 ml-auto" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
