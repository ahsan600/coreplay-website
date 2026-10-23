import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gamepad2, Smartphone, Sparkles, Layers } from "lucide-react";
import { STUDIO_INFO, STUDIO_VALUES, GAMES, APPS } from "@/data/games";
import { GooglePlayCta } from "@/components/sections/GooglePlayCta";

export const metadata: Metadata = {
  title: "About Studio",
  description:
    "Learn about Coreplay Technologies, an independent mobile game and application publisher focused on engaging 3D simulations and privacy-first utility tools.",
};

export default function AboutPage() {
  const showcaseGame = GAMES[0];
  const showcaseApp = APPS[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-theme-main transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary mb-4">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>About Coreplay Technologies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-primary tracking-tight leading-tight">
            Built for Players &amp; Everyday Users. <br />
            <span className="gradient-text">Driven by Imagination &amp; Utility.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-theme-secondary leading-relaxed">
            {STUDIO_INFO.aboutText}
          </p>
        </div>

        {/* Studio Dual Focus: Games & Utility Apps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-theme-elevated text-accent-secondary border border-theme">
              <Layers className="w-3.5 h-3.5" />
              <span>Independent Mobile Publisher</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
              Bridging Thrilling Entertainment with Smart Everyday Utilities
            </h2>

            <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
              At Coreplay Technologies, our mission spans two complementary pillars: delivering rich, immersive 3D simulation games that transport players into captivating environments, and developing fast, reliable utility applications that solve practical everyday tasks.
            </p>

            <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
              Whether building detailed transit simulations like <em>Dubai Modern Bus Simulator</em> with accurate driving physics or engineering lightning-fast computer vision tools like <em>ScanPro</em> with 100% on-device privacy, we adhere to strict quality benchmarks, clean UI architecture, and respect for user data.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={STUDIO_INFO.developerProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 inline-flex items-center gap-2"
              >
                <span>Visit Google Play Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/games"
                className="py-3 px-5 rounded-xl text-sm font-semibold text-theme-primary bg-theme-elevated hover:bg-theme-card border border-theme inline-flex items-center gap-2"
              >
                <Gamepad2 className="w-4 h-4 text-accent-primary" />
                <span>Our Games</span>
              </Link>

              <Link
                href="/apps"
                className="py-3 px-5 rounded-xl text-sm font-semibold text-theme-primary bg-theme-elevated hover:bg-theme-card border border-theme inline-flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>Our Apps</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl border border-theme bg-theme-card p-4 shadow-xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-theme-elevated border border-theme">
                <Image
                  src={showcaseGame.screenshots[0] || showcaseGame.bannerUrl}
                  alt="Coreplay Technologies gameplay design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 p-2 text-center text-xs text-theme-muted flex items-center justify-between">
                <span>3D Simulation: {showcaseGame.title}</span>
                <span className="text-cyan-400">Utility: {showcaseApp.title}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-accent-primary uppercase tracking-wider mb-2">
              Our Principles
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-theme-primary tracking-tight">
              What Defines Every Coreplay Release
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-theme bg-theme-card p-7 card-hover-effect flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-white mb-5 shadow-md shadow-violet-500/20 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-theme-primary mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-theme-secondary leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GooglePlayCta />
    </div>
  );
}
