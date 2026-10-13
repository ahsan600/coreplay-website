"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Game } from "@/data/games";

interface ScreenshotGalleryProps {
  game: Game;
  onClose: () => void;
}

export function ScreenshotGallery({ game, onClose }: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = game.screenshots || [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, screenshots.length]);

  if (screenshots.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${game.title} screenshots gallery`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close screenshot gallery"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Image Area */}
      <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
        {/* Header Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base">{game.title}</span>
            <span className="text-white/60 text-xs">
              ({currentIndex + 1} of {screenshots.length})
            </span>
          </div>

          {game.playStoreUrl && (
            <a
              href={game.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white flex items-center gap-1 transition-colors"
            >
              Get on Google Play
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Big Preview Frame */}
        <div className="relative w-full max-h-[70vh] aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/15 flex items-center justify-center shadow-2xl">
          <Image
            src={screenshots[currentIndex]}
            alt={`${game.title} screenshot ${currentIndex + 1}`}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />

          {/* Navigation Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % screenshots.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Row */}
        {screenshots.length > 1 && (
          <div className="flex items-center gap-3 mt-4 overflow-x-auto max-w-full pb-2">
            {screenshots.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "border-accent-primary ring-2 ring-accent-primary/50 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={s}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
