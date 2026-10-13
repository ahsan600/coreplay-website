import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gamepad2, Sparkles, Layers } from "lucide-react";
import { STUDIO_INFO, STUDIO_VALUES, GAMES } from "@/data/games";
import { GooglePlayCta } from "@/components/sections/GooglePlayCta";

export const metadata: Metadata = {
  title: "About Studio",
  description:
    "Learn about CorePlay Games, an independent mobile game publisher focused on engaging 3D simulations and immersive gaming experiences.",
};

export default function AboutPage() {
  const showcaseGame = GAMES[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-theme-main transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary mb-4">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>About CorePlay Games</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-primary tracking-tight leading-tight">
            Built for Players. <br />
            <span className="gradient-text">Driven by Imagination.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-theme-secondary leading-relaxed">
            {STUDIO_INFO.aboutText}
          </p>
        </div>

        {/* Studio Story & Mobile Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-theme-elevated text-accent-secondary border border-theme">
              <Layers className="w-3.5 h-3.5" />
              <span>Independent Studio Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary tracking-tight">
              Crafting Mobile Adventures for Global Players
            </h2>

            <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
              At CorePlay Games, we believe mobile gaming should be immediately fun, easy to pick up, and rewarding to master. Our development focuses on intuitive vehicle handling, realistic physics, rich 3D soundscapes, and detailed mobile environments that bring transport and simulation challenges to life.
            </p>

            <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
              We publish our games on the Google Play Store, ensuring easy access, automatic updates, and smooth performance across a wide spectrum of Android devices.
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
                className="py-3 px-6 rounded-xl text-sm font-semibold text-theme-primary bg-theme-elevated hover:bg-theme-card border border-theme inline-flex items-center gap-2"
              >
                <span>Explore Catalog</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-theme bg-theme-card p-4 shadow-xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-theme-elevated border border-theme">
                <Image
                  src={showcaseGame.screenshots[0] || showcaseGame.bannerUrl}
                  alt="CorePlay Games gameplay design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 p-2 text-center text-xs text-theme-muted">
                Official gameplay footage from {showcaseGame.title}
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
              What Defines Every CorePlay Release
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
