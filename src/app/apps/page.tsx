import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Smartphone,
  CheckCircle2,
  Zap,
  FileSpreadsheet,
  Lock,
} from "lucide-react";
import { APPS } from "@/data/games";
import { AppCard } from "@/components/apps/AppCard";
import { GooglePlayCta } from "@/components/sections/GooglePlayCta";

export const metadata: Metadata = {
  title: "Our Apps",
  description:
    "Explore mobile utility and productivity apps from Coreplay Technologies. Download ScanPro – QR & Barcode Scanner for Android with instant on-device speed and privacy.",
};

const FORMATS = [
  "QR Code",
  "UPC-A & UPC-E",
  "EAN-13 & EAN-8",
  "Code 128 & 39",
  "Data Matrix",
  "Aztec",
  "PDF417",
  "Codabar",
];

export default function AppsPage() {
  const primaryApp = APPS[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-theme-main transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 mb-4 border border-cyan-500/20">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Studio App Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-primary tracking-tight leading-tight">
            Smart Mobile Applications
          </h1>
          <p className="mt-4 text-base sm:text-lg text-theme-secondary leading-relaxed">
            Everyday utility tools engineered for fast on-device performance,
            clean user experiences, and uncompromising privacy. Explore our
            applications published on Google Play.
          </p>
        </div>

        {/* Featured Deep Dive Spotlight: ScanPro */}
        <div className="rounded-3xl border border-theme bg-theme-card p-6 sm:p-8 lg:p-10 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Graphic & Screenshot previews */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-theme shadow-md flex items-center justify-center p-4">
                <Image
                  src={primaryApp.featureGraphicUrl || primaryApp.bannerUrl}
                  alt={`${primaryApp.title} Feature Graphic`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                  className="object-contain p-2"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Featured Utility Release</span>
                </div>
              </div>

              {/* Screenshots preview strip */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {primaryApp.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-lg overflow-hidden border border-theme bg-slate-900/60 shadow-sm flex items-center justify-center p-1"
                  >
                    <Image
                      src={shot}
                      alt={`${primaryApp.title} screenshot ${idx + 1}`}
                      fill
                      sizes="150px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info & Features */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-theme shadow-md bg-theme-elevated p-1 flex items-center justify-center">
                  <Image
                    src={primaryApp.iconUrl}
                    alt={primaryApp.title}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-primary leading-tight">
                    {primaryApp.title}
                  </h2>
                  <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                    {primaryApp.category}
                  </p>
                </div>
              </div>

              <p className="text-sm text-theme-secondary leading-relaxed">
                {primaryApp.description}
              </p>

              {/* Verified Features List */}
              <div className="space-y-2 pt-2 border-t border-theme/60">
                <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
                  Key App Capabilities:
                </h3>
                {primaryApp.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-theme-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Supported Barcode Formats Pills */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-theme-muted uppercase tracking-wider block mb-2">
                  Supported Code Types:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {FORMATS.map((fmt) => (
                    <span
                      key={fmt}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-theme-elevated border border-theme text-theme-secondary"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions & Store Meta */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={primaryApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 shadow-md shadow-cyan-500/20 text-center flex items-center justify-center gap-2"
                >
                  <span>Download on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-theme-muted text-center sm:text-left">
                  Package:{" "}
                  <code className="text-theme-secondary font-mono">
                    {primaryApp.packageId}
                  </code>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Coreplay Apps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-theme bg-theme-card flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-theme-primary mb-2">
              Sub-Second On-Device Speed
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
              Equipped with Google ML Kit machine vision that identifies codes instantly in memory with hardware acceleration.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-theme bg-theme-card flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-theme-primary mb-2">
              Zero Cloud Video Uploads
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
              Camera feeds are processed strictly locally. No pictures, videos, or scan history are ever transferred to remote servers.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-theme bg-theme-card flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-theme-primary mb-2">
              Export &amp; Offline Utility
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
              Export your scanned records to CSV, copy to clipboard, or generate custom QR codes even when completely offline.
            </p>
          </div>
        </div>

        {/* Catalog Grid Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-theme">
            <div>
              <h2 className="text-2xl font-bold text-theme-primary tracking-tight">
                All Published Apps
              </h2>
              <p className="text-xs sm:text-sm text-theme-secondary mt-1">
                Verified applications by Coreplay Technologies
              </p>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-theme-elevated border border-theme text-theme-secondary">
              {APPS.length} Active App
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPS.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>

      <GooglePlayCta />
    </div>
  );
}
