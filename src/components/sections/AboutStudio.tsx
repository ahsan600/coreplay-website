import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Gamepad2, Sparkles } from "lucide-react";
import { STUDIO_INFO, STUDIO_VALUES, GAMES } from "@/data/games";

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6" />,
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

export function AboutStudio() {
  const showcaseGame = GAMES[0];

  return (
    <section id="about" className="py-20 lg:py-28 bg-theme-secondary/50 border-y border-theme transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Studio Philosophy & Visual Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Independent Mobile Publisher</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-primary tracking-tight leading-tight">
              {STUDIO_INFO.aboutHeadline}
            </h2>

            <p className="text-base sm:text-lg text-theme-secondary leading-relaxed">
              {STUDIO_INFO.aboutText}
            </p>

            <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
              Whether navigating intricate urban transit routes in our realistic driving titles or tackling dynamic off-road environments, we believe great mobile games should combine approachable controls with rewarding depth.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/about"
                className="py-3 px-6 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 transition-all inline-flex items-center gap-2"
              >
                <span>Read Studio Philosophy</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={STUDIO_INFO.developerProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl text-sm font-semibold text-theme-primary bg-theme-elevated hover:bg-theme-card border border-theme transition-all inline-flex items-center gap-2"
              >
                <span>Google Play Developer Profile</span>
                <ArrowUpRight className="w-4 h-4 text-theme-muted" />
              </a>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-theme bg-theme-card p-3 shadow-xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-theme-elevated border border-theme">
                <Image
                  src={showcaseGame.bannerUrl || showcaseGame.featureGraphicUrl || "/images/games/hero-banner.jpg"}
                  alt="CorePlay Games mobile simulation environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold tracking-wider text-cyan-300 uppercase">
                    In-Game Environment
                  </span>
                  <p className="text-sm font-semibold mt-0.5 drop-shadow-md">
                    Realistic 3D Simulation &amp; Challenging Routes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Values Section: 3 Feature Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-bold tracking-wider text-accent-primary uppercase mb-2">
              Why Play Our Games
            </h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-theme-primary tracking-tight">
              Crafted Around Three Core Player Values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {STUDIO_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-theme bg-theme-card p-6 sm:p-7 card-hover-effect flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-white mb-5 shadow-md shadow-violet-500/20 shrink-0">
                  {ICON_MAP[val.icon] || <Sparkles className="w-6 h-6" />}
                </div>

                <h4 className="text-lg font-bold text-theme-primary mb-2 tracking-tight">
                  {val.title}
                </h4>

                <p className="text-sm text-theme-secondary leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
