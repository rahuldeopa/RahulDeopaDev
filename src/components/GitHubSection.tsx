"use client";

import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";
import { Star, GitFork, Users, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

interface GitHubUser {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const languageColors: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Java: "#B07219",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
};

export default function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/rahuldeopa"),
          fetch("https://api.github.com/users/rahuldeopa/repos?sort=updated&per_page=20"),
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData);
        }
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          
          // Filter out profile repository and forks, get top 6
          const filteredRepos = reposData
            .filter((repo: GitHubRepo & { fork?: boolean }) => 
              repo.name.toLowerCase() !== "rahuldeopa" && !repo.fork
            )
            .slice(0, 6);
            
          setRepos(filteredRepos);
        }
      } catch {
        // Silently fail - GitHub section will show fallback
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Open Source"
          title="GitHub Activity"
          description="Contributing to open source and building in public."
        />

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-24 bg-bg-card border border-border rounded-xl shimmer"
              />
            ))}
          </div>
        ) : user ? (
          <>
            {/* Stats */}
            <AnimatedSection>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <StatCard
                  icon={<GithubIcon size={18} />}
                  label="Repositories"
                  value={user.public_repos || "-"}
                />
                <StatCard
                  icon={<Users size={18} />}
                  label="Followers"
                  value={user.followers || "-"}
                />
                <StatCard
                  icon={<Users size={18} />}
                  label="Following"
                  value={user.following || "-"}
                />
              </div>
            </AnimatedSection>

            {/* Repos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, index) => (
                <AnimatedSection key={repo.name} delay={index * 0.05}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-all h-full"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-text group-hover:text-primary transition-colors truncate pr-2">
                        {repo.name}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="text-text-muted shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {repo.description && (
                      <p className="text-xs text-text-muted mb-3 line-clamp-2 leading-relaxed">
                        {repo.description}
                      </p>
                    )}

                    <div className="flex items-center gap-3 mt-auto">
                      {repo.language && (
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                languageColors[repo.language] || "#A1A1AA",
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count >= 10 && (
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <Star size={12} />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-text-muted">
                          <GitFork size={12} />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </>
        ) : (
          <AnimatedSection>
            <div className="text-center py-12 bg-bg-card border border-border rounded-xl">
              <GithubIcon size={32} className="mx-auto mb-3 text-text-muted" />
              <p className="text-sm text-text-muted">
                Unable to load GitHub data. Visit my profile directly.
              </p>
              <a
                href="https://github.com/rahuldeopa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline"
              >
                View GitHub Profile <ExternalLink size={14} />
              </a>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}) {
  return (
    <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
      <span className="inline-block mb-2 text-text-muted">{icon}</span>
      <p className="text-2xl font-bold text-text">{value}</p>
      <p className="text-xs text-text-muted mt-0.5">{label}</p>
    </div>
  );
}
