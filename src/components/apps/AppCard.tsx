"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, CheckCircle2, QrCode, Sparkles } from "lucide-react";
import { AppItem } from "@/data/games";
import { ScreenshotGallery } from "@/components/games/ScreenshotGallery";

interface AppCardProps {
  app: AppItem;
  priority?: boolean;
}

export function AppCard({ app, priority = false }: AppCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <div
        className="group relative rounded-2xl border border-theme bg-theme-card p-5 sm:p-6 card-hover-effect flex flex-col justify-between overflow-hidden"
        id={`app-card-${app.id}`}
      >
        {/* Subtle Top Glow / Ambient Backlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none rounded-t-2xl" />

        <div>
          {/* Card Media Preview Area */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-theme-elevated border border-theme flex items-center justify-center">
            {app.featureGraphicUrl || app.bannerUrl ? (
              <Image
                src={app.featureGraphicUrl || app.bannerUrl}
                alt={`${app.title} artwork`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 bg-slate-900/40"
                priority={priority}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-theme-muted">
                Official App Preview
              </div>
            )}

            {/* Floating Category Badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md text-white border border-white/10 shadow-sm flex items-center gap-1.5">
              <QrCode className="w-3.5 h-3.5 text-cyan-400" />
              <span>{app.category}</span>
            </div>

            {/* Screenshots trigger button overlay */}
            {app.screenshots && app.screenshots.length > 0 && (
              <button
                type="button"
                onClick={() => setGalleryOpen(true)}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-black/80 backdrop-blur-md text-white hover:bg-black border border-white/15 flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-all cursor-pointer shadow-md"
                aria-label={`View screenshots for ${app.title}`}
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>{app.screenshots.length} Screenshots</span>
              </button>
            )}
          </div>

          {/* Icon + Title Header */}
          <div className="flex items-start gap-4 mb-3">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-theme shadow-md bg-theme-elevated flex items-center justify-center p-1">
              <Image
                src={app.iconUrl}
                alt={`${app.title} Icon`}
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-theme-primary tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                {app.title}
              </h3>
              <p className="text-xs font-medium text-accent-secondary mt-0.5 flex items-center gap-1">
                <span>Google ML Kit</span>
                <span>•</span>
                <span>Offline Privacy</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-theme-secondary leading-relaxed mb-4 line-clamp-3">
            {app.tagline || app.description}
          </p>

          {/* Key verified highlights */}
          {app.features && app.features.length > 0 && (
            <div className="space-y-1.5 mb-6 pt-3 border-t border-theme/60">
              {app.features.slice(0, 3).map((feat, idx) => (
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
          {app.playStoreUrl ? (
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group/btn"
              id={`play-store-btn-${app.id}`}
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
            href="/apps"
            className="p-2.5 rounded-xl border border-theme bg-theme-elevated text-theme-secondary hover:text-theme-primary hover:border-cyan-400/40 transition-colors"
            title="View App Details"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </div>

      {/* Lightbox / Screenshot Gallery */}
      {galleryOpen && (
        <ScreenshotGallery
          item={app}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}
