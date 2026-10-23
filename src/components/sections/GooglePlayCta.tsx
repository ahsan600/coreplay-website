import React from "react";
import { ArrowUpRight, Gamepad2, Smartphone, ShieldCheck } from "lucide-react";
import { STUDIO_INFO } from "@/data/games";

export function GooglePlayCta() {
  return (
    <section className="py-20 lg:py-28 bg-theme-main transition-colors relative overflow-hidden">
      {/* Background glow lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-3xl border border-theme bg-theme-card p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl glow-accent">
          {/* Decorative Corner Gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/15 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Small emblem / icon badge */}
            <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center text-white mb-6 shadow-xl shadow-violet-500/25">
              <div className="flex items-center justify-center relative">
                <Gamepad2 className="w-7 h-7 stroke-[2.2]" />
                <Smartphone className="w-4 h-4 stroke-[2.2] absolute -bottom-1 -right-1 text-cyan-300 drop-shadow" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-theme-elevated border border-theme text-theme-primary mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Android Developer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-primary tracking-tight leading-tight mb-5">
              Ready to Explore Our Mobile Games &amp; Apps?
            </h2>

            <p className="text-base sm:text-lg text-theme-secondary leading-relaxed mb-8 max-w-xl">
              Download our 3D simulation games and smart utility tools directly from the official Google Play Store and start exploring right away.
            </p>

            {/* Google Play CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={STUDIO_INFO.developerProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-google-play-btn"
                className="w-full sm:w-auto py-4 px-8 rounded-xl text-base font-bold text-white gradient-brand hover:opacity-95 shadow-xl shadow-violet-500/30 hover:shadow-violet-500/40 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Coreplay Technologies on Google Play</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Sub-note */}
            <p className="mt-6 text-xs text-theme-muted">
              Compatible with modern Android devices • Verified Google Play distribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
