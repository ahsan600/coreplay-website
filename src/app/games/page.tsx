import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gamepad2, CheckCircle2, Smartphone } from "lucide-react";
import { GAMES } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { GooglePlayCta } from "@/components/sections/GooglePlayCta";

export const metadata: Metadata = {
  title: "Our Games",
  description:
    "Explore mobile titles from Coreplay Technologies. Download Dubai Modern Bus Simulator and discover exciting 3D mobile games on Google Play.",
};

export default function GamesPage() {
  const primaryGame = GAMES[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-theme-main transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary mb-4">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Studio Game Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-primary tracking-tight leading-tight">
            Our Mobile Games
          </h1>
          <p className="mt-4 text-base sm:text-lg text-theme-secondary leading-relaxed">
            Discover 3D mobile simulations published by Coreplay Technologies on
            the Google Play Store. We build engaging, responsive experiences
            that bring excitement to every gaming session.
          </p>
        </div>

        {/* Featured Deep Dive Spotlight: Dubai Modern Bus Simulator */}
        <div className="rounded-3xl border border-theme bg-theme-card p-6 sm:p-8 lg:p-10 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Graphic & Screenshot previews */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-theme-elevated border border-theme shadow-md">
                <Image
                  src={primaryGame.featureGraphicUrl || primaryGame.bannerUrl}
                  alt={`${primaryGame.title} Feature Graphic`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-white border border-white/10">
                  Featured Release
                </div>
              </div>

              {/* Screenshots preview strip */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {primaryGame.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-lg overflow-hidden border border-theme bg-theme-elevated shadow-sm"
                  >
                    <Image
                      src={shot}
                      alt={`${primaryGame.title} screenshot ${idx + 1}`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info & Features */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-theme shadow-md">
                  <Image
                    src={primaryGame.iconUrl}
                    alt={primaryGame.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-primary leading-tight">
                    {primaryGame.title}
                  </h2>
                  <p className="text-xs font-semibold text-accent-secondary mt-0.5">
                    {primaryGame.genre}
                  </p>
                </div>
              </div>

              <p className="text-sm text-theme-secondary leading-relaxed">
                {primaryGame.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 pt-2 border-t border-theme/60">
                <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
                  Verified In-Game Features:
                </h3>
                {primaryGame.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-theme-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Actions & Store Meta */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={primaryGame.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 text-center flex items-center justify-center gap-2"
                >
                  <span>Download on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-theme-muted text-center sm:text-left">
                  Package:{" "}
                  <code className="text-theme-secondary font-mono">
                    {primaryGame.packageId}
                  </code>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Link Callout to Apps */}
        <div className="mb-16 p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 to-blue-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-theme-primary">
                Looking for our utility &amp; productivity applications?
              </h3>
              <p className="text-xs text-theme-secondary mt-0.5">
                Explore ScanPro – QR &amp; Barcode Scanner with local offline privacy and sub-second vision.
              </p>
            </div>
          </div>
          <Link
            href="/apps"
            className="py-2 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shrink-0 flex items-center gap-1.5"
          >
            <span>Explore Apps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Catalog Grid Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-theme">
            <div>
              <h2 className="text-2xl font-bold text-theme-primary tracking-tight">
                All Published Games
              </h2>
              <p className="text-xs sm:text-sm text-theme-secondary mt-1">
                Verified releases by Coreplay Technologies
              </p>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-theme-elevated border border-theme text-theme-secondary">
              {GAMES.length} Active Game
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>

      <GooglePlayCta />
    </div>
  );
}
