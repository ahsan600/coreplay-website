import React from "react";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  HelpCircle,
  Smartphone,
  RefreshCw,
  Camera,
  HardDrive,
} from "lucide-react";
import { STUDIO_INFO } from "@/data/games";
import { SupportEmailHelper } from "@/components/support/SupportEmailHelper";

export const metadata: Metadata = {
  title: "Player & App Support",
  description:
    "Player and application support for Coreplay Technologies. Get assistance with Dubai Modern Bus Simulator, ScanPro – QR & Barcode Scanner, and contact our team.",
};

const TROUBLESHOOTING_STEPS = [
  {
    icon: <RefreshCw className="w-5 h-5 text-accent-primary" />,
    title: "1. Check for Game & App Updates",
    description:
      "Ensure you are running the latest version from Google Play. Updates frequently resolve known device issues, camera performance bottlenecks, and crash bugs.",
  },
  {
    icon: <Camera className="w-5 h-5 text-cyan-400" />,
    title: "2. Grant Camera & Storage Permissions",
    description:
      "For scanner applications (such as ScanPro), verify that Camera permission is enabled under Android Settings > Apps > ScanPro > Permissions to allow live scanning.",
  },
  {
    icon: <HardDrive className="w-5 h-5 text-emerald-400" />,
    title: "3. Clear App Cache",
    description:
      "Navigate to Android Settings > Apps > [Game/App Name] > Storage > tap 'Clear Cache'. This clears corrupted temporary cache without erasing saved records or settings.",
  },
  {
    icon: <Smartphone className="w-5 h-5 text-violet-400" />,
    title: "4. Restart the App & Device",
    description:
      "Fully close the application from your recent apps switcher and restart your Android device to refresh RAM, GPU allocations, and camera hardware bindings.",
  },
];

export default function SupportPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-theme-main transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Developer Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-primary tracking-tight leading-tight">
            How Can We Help?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-theme-secondary leading-relaxed">
            Having an issue with one of our mobile games, need assistance with ScanPro, or want to report a bug? We are here to help. Review the quick steps below or email us directly.
          </p>
        </div>

        {/* Quick Links Card Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a
            href={STUDIO_INFO.developerProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border border-theme bg-theme-card hover:border-accent-primary/50 transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">
                Google Play Store
              </span>
              <h2 className="text-base font-bold text-theme-primary mt-1">
                Developer Profile &amp; Releases
              </h2>
            </div>
            <ArrowUpRight className="w-5 h-5 text-theme-muted group-hover:text-accent-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/privacy-policy"
            className="p-5 rounded-2xl border border-theme bg-theme-card hover:border-accent-primary/50 transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Data &amp; Privacy
              </span>
              <h2 className="text-base font-bold text-theme-primary mt-1">
                Official Privacy Policy &amp; Permissions
              </h2>
            </div>
            <ArrowUpRight className="w-5 h-5 text-theme-muted group-hover:text-accent-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Troubleshooting Steps */}
        <div className="mb-14">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-theme-primary tracking-tight">
              Common Troubleshooting Steps
            </h2>
            <p className="text-xs sm:text-sm text-theme-secondary mt-1">
              Follow these simple steps if you experience slowdowns, scanner issues, or crashes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TROUBLESHOOTING_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-theme bg-theme-card card-hover-effect"
              >
                <div className="w-10 h-10 rounded-xl bg-theme-elevated border border-theme flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-theme-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Support Email Helper & Contact Form */}
        <div className="mb-12">
          <SupportEmailHelper />
        </div>
      </div>
    </div>
  );
}
