"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Eye, CheckCircle2 } from "lucide-react";
import { Game } from "@/data/games";
import { ScreenshotGallery } from "./ScreenshotGallery";

interface GameCardProps {
  game: Game;
  priority?: boolean;
}

export function GameCard({ game, priority = false }: GameCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <div
        className="group relative rounded-2xl border border-theme bg-theme-card p-5 sm:p-6 card-hover-effect flex flex-col justify-between overflow-hidden"
        id={`game-card-${game.id}`}
      >
        {/* Subtle Top Glow / Ambient Backlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-accent-primary/10 to-transparent pointer-events-none rounded-t-2xl" />

        <div>
          {/* Card Media Preview Area */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-theme-elevated border border-theme">
            {game.featureGraphicUrl || game.bannerUrl ? (
              <Image
                src={game.featureGraphicUrl || game.bannerUrl}
                alt={`${game.title} artwork`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={priority}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-theme-muted">
                Official Artwork
              </div>
            )}

            {/* Floating Genre Badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md text-white border border-white/10 shadow-sm">
              {game.genre}
            </div>

            {/* Screenshots trigger button overlay */}
            {game.screenshots && game.screenshots.length > 0 && (
              <button
                type="button"
                onClick={() => setGalleryOpen(true)}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-black/80 backdrop-blur-md text-white hover:bg-black border border-white/15 flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-all cursor-pointer shadow-md"
                aria-label={`View screenshots for ${game.title}`}
              >
                <Eye className="w-3.5 h-3.5 text-accent-secondary" />
                <span>{game.screenshots.length} Screenshots</span>
              </button>
            )}
          </div>

          {/* Icon + Title Header */}
          <div className="flex items-start gap-4 mb-3">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-theme shadow-md bg-theme-elevated">
              <Image
                src={game.iconUrl}
                alt={`${game.title} Icon`}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-theme-primary tracking-tight leading-snug group-hover:text-accent-primary transition-colors">
                {game.title}
              </h3>
              <p className="text-xs font-medium text-accent-secondary mt-0.5">
                {game.category} • Mobile Game
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-theme-secondary leading-relaxed mb-4 line-clamp-3">
            {game.tagline || game.description}
          </p>

          {/* Key verified highlights */}
          {game.features && game.features.length > 0 && (
            <div className="space-y-1.5 mb-6 pt-3 border-t border-theme/60">
              {game.features.slice(0, 3).map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-theme-secondary"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Button Row */}
        <div className="pt-2 flex items-center gap-3">
          {game.playStoreUrl ? (
            <a
              href={game.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 hover:shadow-violet-500/30 transition-all flex items-center justify-center gap-2 group/btn"
              id={`play-store-btn-${game.id}`}
            >
              <span>View on Google Play</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <button
              disabled
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-medium bg-theme-elevated text-theme-muted border border-theme text-center cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}

          <Link
            href="/games"
            className="p-2.5 rounded-xl border border-theme bg-theme-elevated text-theme-secondary hover:text-theme-primary hover:border-accent-primary/40 transition-colors"
            title="View Details"
          >
            <Play className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox / Screenshot Gallery */}
      {galleryOpen && (
        <ScreenshotGallery
          game={game}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}
