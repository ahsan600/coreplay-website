import React from "react";
import { ArrowUpRight, PlusCircle, Smartphone, ShieldCheck } from "lucide-react";
import { APPS, STUDIO_INFO } from "@/data/games";
import { AppCard } from "@/components/apps/AppCard";

export function FeaturedApps() {
  return (
    <section
      id="apps"
      className="py-20 lg:py-28 bg-theme-secondary/40 border-t border-theme transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 mb-3 border border-cyan-500/20">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Smart Mobile Applications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-primary tracking-tight">
              Featured Mobile Apps
            </h2>
            <p className="mt-3 text-base sm:text-lg text-theme-secondary leading-relaxed">
              Explore our mobile utility and productivity applications built for daily speed, on-device offline processing, and strict user privacy.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={STUDIO_INFO.developerProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Explore on Google Play</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Published Apps */}
          {APPS.map((app, idx) => (
            <AppCard key={app.id} app={app} priority={idx === 0} />
          ))}

          {/* In-Development / Upcoming App Pipeline Card */}
          <div className="relative rounded-2xl border border-dashed border-theme bg-theme-elevated/40 p-6 flex flex-col justify-between items-center text-center group hover:border-cyan-500/50 transition-colors">
            <div className="my-auto py-8 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-theme-card border border-theme flex items-center justify-center text-theme-muted group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all mb-4 shadow-inner">
                <PlusCircle className="w-8 h-8 stroke-[1.5]" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                In Active Pipeline
              </span>
              <h3 className="text-xl font-bold text-theme-primary mb-2">
                Next Utility App
              </h3>
              <p className="text-xs sm:text-sm text-theme-secondary max-w-xs leading-relaxed">
                We are actively engineering new everyday mobile productivity utilities, file assistants, and offline productivity tools.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-theme/60 text-xs text-theme-muted flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Privacy-first architecture on all upcoming releases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
