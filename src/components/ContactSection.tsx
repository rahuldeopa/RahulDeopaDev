"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Send,
  Mail,
  Phone,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    try {
      const response = await fetch("https://formspree.io/f/xwvdodaz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
      }
      setTimeout(() => setSubmitState("idle"), 3000);
    } catch {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 3000);
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <AnimatedSection className="md:col-span-3" direction="left">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  {...register("name")}
                  className="w-full px-4 py-2.5 text-sm bg-bg-card border border-border rounded-lg text-text placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-2.5 text-sm bg-bg-card border border-border rounded-lg text-text placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  {...register("message")}
                  className="w-full px-4 py-2.5 text-sm bg-bg-card border border-border rounded-lg text-text placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitState === "loading"}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors disabled:opacity-50"
              >
                {submitState === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : submitState === "success" ? (
                  <>
                    <Check size={16} />
                    Sent Successfully!
                  </>
                ) : submitState === "error" ? (
                  "Failed — Try Again"
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection className="md:col-span-2" direction="right">
            <div className="space-y-4">
              <div className="p-4 bg-bg-card border border-border rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-primary" />
                    <span className="text-sm font-medium text-text">Email</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(SITE_CONFIG.email, "email")}
                    className="p-1 text-text-muted hover:text-text transition-colors"
                    aria-label="Copy email"
                  >
                    {copiedField === "email" ? (
                      <Check size={12} className="text-accent" />
                    ) : (
                      <Copy size={12} />
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-xs text-text-muted hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {SITE_CONFIG.phone && (
                <div className="p-4 bg-bg-card border border-border rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-primary" />
                      <span className="text-sm font-medium text-text">Phone</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(SITE_CONFIG.phone, "phone")}
                      className="p-1 text-text-muted hover:text-text transition-colors"
                      aria-label="Copy phone"
                    >
                      {copiedField === "phone" ? (
                        <Check size={12} className="text-accent" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-text-muted">{SITE_CONFIG.phone}</p>
                </div>
              )}

              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-bg-card border border-border rounded-xl text-text-muted hover:text-text hover:border-primary/30 transition-all"
                >
                  <GithubIcon size={16} />
                  <span className="text-xs">GitHub</span>
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-bg-card border border-border rounded-xl text-text-muted hover:text-text hover:border-primary/30 transition-all"
                >
                  <LinkedinIcon size={16} />
                  <span className="text-xs">LinkedIn</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
