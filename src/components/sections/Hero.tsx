"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Gamepad2,
  Smartphone,
  ShieldCheck,
  Sparkles,
  QrCode,
} from "lucide-react";
import { STUDIO_INFO, GAMES, APPS } from "@/data/games";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"game" | "app">("game");
  const featuredGame = GAMES[0];
  const featuredApp = APPS[0];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden gradient-brand-subtle">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[300px] h-[250px] bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-theme bg-theme-elevated/80 backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-theme-primary">
                Official Studio Website
              </span>
              <span className="text-theme-muted text-xs">•</span>
              <span className="text-xs font-medium text-accent-secondary">
                Games &amp; Apps Publisher
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-theme-primary tracking-tight leading-[1.08] mb-6">
              Play Beyond <br className="hidden sm:inline" />
              <span className="gradient-text">the Ordinary.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-theme-secondary max-w-2xl leading-relaxed mb-8">
              {STUDIO_INFO.heroSupportingText}
            </p>

            {/* Dual CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <Link
                href="/games"
                id="hero-games-cta"
                className="py-3.5 px-6 rounded-xl text-sm sm:text-base font-semibold text-white gradient-brand hover:opacity-95 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Explore Games</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/apps"
                id="hero-apps-cta"
                className="py-3.5 px-6 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <Smartphone className="w-4 h-4" />
                <span>Discover Apps</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={STUDIO_INFO.developerProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-google-play-cta"
                className="py-3.5 px-5 rounded-xl text-sm font-semibold text-theme-primary bg-theme-elevated hover:bg-theme-card border border-theme hover:border-accent-primary/60 transition-all text-center flex items-center justify-center gap-1.5 group"
              >
                <span>Google Play</span>
                <ArrowUpRight className="w-4 h-4 text-theme-muted group-hover:text-accent-secondary transition-all" />
              </a>
            </div>

            {/* Verified Developer Trust Indicators */}
            <div className="pt-6 border-t border-theme/60 w-full flex flex-wrap items-center gap-6 text-xs text-theme-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Google Play Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-accent-primary" />
                <span>3D Mobile Simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-cyan-400" />
                <span>Offline Utility Tools</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Dual Showcase with Interactive Switcher */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/25 to-accent-secondary/25 rounded-3xl blur-xl opacity-70 pointer-events-none" />

              {/* Showcase Container */}
              <div className="relative rounded-2xl border border-theme bg-theme-card shadow-2xl overflow-hidden">
                {/* Switcher Header Tabs */}
                <div className="p-2 bg-theme-elevated/70 border-b border-theme flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("game")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "game"
                        ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                        : "text-theme-secondary hover:text-theme-primary hover:bg-theme-main/50"
                    }`}
                  >
                    <Gamepad2 className="w-3.5 h-3.5" />
                    <span>Featured Game</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("app")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "app"
                        ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                        : "text-theme-secondary hover:text-theme-primary hover:bg-theme-main/50"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Featured App</span>
                  </button>
                </div>

                {/* Content based on Active Tab */}
                {activeTab === "game" ? (
                  <div>
                    {/* Game Artwork */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-theme-elevated">
                      <Image
                        src={featuredGame.featureGraphicUrl || featuredGame.bannerUrl}
                        alt={`${featuredGame.title} official artwork`}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-black/75 backdrop-blur-md text-white border border-white/15 shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>3D Simulation</span>
                      </div>

                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md text-cyan-300 border border-white/15 shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>Dubai Routes</span>
                      </div>
                    </div>

                    {/* Integrated Info Bar Below Image */}
                    <div className="p-4 sm:p-5 bg-theme-card border-t border-theme flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-theme bg-theme-elevated shadow-sm">
                          <Image
                            src={featuredGame.iconUrl}
                            alt={`${featuredGame.title} icon`}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <h2 className="text-sm sm:text-base font-bold text-theme-primary truncate">
                            {featuredGame.title}
                          </h2>
                          <p className="text-xs text-accent-secondary truncate mt-0.5">
                            Modern Bus Driving Simulator
                          </p>
                          <span className="text-[11px] text-theme-muted mt-0.5">
                            Free on Google Play
                          </span>
                        </div>
                      </div>

                      {featuredGame.playStoreUrl && (
                        <a
                          href={featuredGame.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 flex items-center gap-1.5 transition-all"
                        >
                          <span>Play Free</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* App Preview */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 flex items-center justify-center p-4">
                      <Image
                        src={featuredApp.featureGraphicUrl || featuredApp.bannerUrl}
                        alt={`${featuredApp.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        priority
                        className="object-contain p-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-white border border-white/15 shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span>Google ML Kit</span>
                      </div>

                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-emerald-400 border border-white/15 shadow-sm flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Offline Privacy</span>
                      </div>
                    </div>

                    {/* Integrated Info Bar Below Image */}
                    <div className="p-4 sm:p-5 bg-theme-card border-t border-theme flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-theme bg-theme-elevated shadow-sm p-1 flex items-center justify-center">
                          <Image
                            src={featuredApp.iconUrl}
                            alt={`${featuredApp.title} icon`}
                            fill
                            sizes="56px"
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <h2 className="text-sm sm:text-base font-bold text-theme-primary truncate">
                            {featuredApp.title}
                          </h2>
                          <p className="text-xs text-cyan-400 truncate mt-0.5">
                            QR &amp; Barcode Scanner
                          </p>
                          <span className="text-[11px] text-theme-muted mt-0.5">
                            On-Device Vision • No Cloud Uploads
                          </span>
                        </div>
                      </div>

                      {featuredApp.playStoreUrl && (
                        <a
                          href={featuredApp.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
                        >
                          <span>Get App</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
