import React from "react";
import { ArrowUpRight, Sparkles, PlusCircle } from "lucide-react";
import { GAMES, STUDIO_INFO } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";

export function FeaturedGames() {
  return (
    <section
      id="games"
      className="py-20 lg:py-28 bg-theme-main transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-primary tracking-tight">
              Published &amp; Featured Games
            </h2>
            <p className="mt-3 text-base sm:text-lg text-theme-secondary leading-relaxed">
              Explore our mobile titles available for free download on Google
              Play, engineered for high-energy gameplay and realistic
              simulations.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={STUDIO_INFO.developerProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
            >
              <span>View all on Google Play</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Published Games */}
          {GAMES.map((game, idx) => (
            <GameCard key={game.id} game={game} priority={idx === 0} />
          ))}

          {/* In-Development / Upcoming Studio Pipeline Card */}
          <div className="relative rounded-2xl border border-dashed border-theme bg-theme-secondary/40 p-6 flex flex-col justify-between items-center text-center group hover:border-accent-primary/50 transition-colors">
            <div className="my-auto py-8 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-theme-elevated border border-theme flex items-center justify-center text-theme-muted group-hover:text-accent-primary group-hover:border-accent-primary/40 transition-all mb-4 shadow-inner">
                <PlusCircle className="w-8 h-8 stroke-[1.5]" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-theme-elevated text-accent-secondary border border-theme mb-3">
                In Active Production
              </span>
              <h3 className="text-xl font-bold text-theme-primary mb-2">
                Next Studio Title
              </h3>
              <p className="text-xs sm:text-sm text-theme-secondary max-w-xs leading-relaxed">
                Coreplay Technologies is continuously developing new mobile
                adventures, driving challenges, and immersive gameplay
                experiences.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-theme/60 text-xs text-theme-muted">
              Stay tuned on our Google Play developer profile for upcoming
              releases.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
