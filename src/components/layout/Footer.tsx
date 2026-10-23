import React from "react";
import Link from "next/link";
import { Gamepad2, Smartphone, ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { STUDIO_INFO } from "@/data/games";
import { CurrentYear } from "@/components/ui/CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-theme bg-theme-secondary/80 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white shadow-md shadow-violet-500/20">
                <div className="flex items-center justify-center relative">
                  <Gamepad2 className="w-5 h-5 stroke-[2.2]" />
                  <Smartphone className="w-3 h-3 stroke-[2.2] absolute -bottom-1 -right-1 text-cyan-300 drop-shadow" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-theme-primary">
                  Coreplay <span className="gradient-text">Technologies</span>
                </span>
                <span className="text-[11px] font-medium text-theme-muted uppercase tracking-wider">
                  Mobile Games &amp; Apps Studio
                </span>
              </div>
            </Link>

            <p className="text-sm text-theme-secondary max-w-sm leading-relaxed">
              Crafting fun, exciting, and immersive 3D simulation games alongside smart, privacy-first mobile utility tools on Google Play.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-theme-muted">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Developer: Coreplay Technologies (ID: 6807992577867877190)</span>
            </div>
          </div>

          {/* Studio Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
              Portfolio
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-theme-secondary hover:text-accent-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-theme-secondary hover:text-accent-primary transition-colors"
                >
                  Our Games
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  className="text-theme-secondary hover:text-cyan-400 transition-colors"
                >
                  Our Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-theme-secondary hover:text-accent-primary transition-colors"
                >
                  About Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-theme-secondary hover:text-accent-primary transition-colors"
                >
                  Player &amp; App Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
              Legal &amp; Privacy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Privacy Policy (Official)
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#section-1"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Permissions &amp; Camera Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#section-2"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Third-Party Services &amp; AdMob
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy#section-5"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Data Deletion Rights
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Resources & Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
              Connect &amp; Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={STUDIO_INFO.developerProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Google Play Profile
                  <ArrowUpRight className="w-3.5 h-3.5 text-theme-muted" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_INFO.contactEmail}`}
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-theme-muted" />
                  <span className="truncate max-w-[180px]">{STUDIO_INFO.contactEmail}</span>
                </a>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-xs px-2.5 py-1 rounded bg-theme-elevated text-accent-secondary border border-theme inline-block hover:border-accent-primary transition-colors"
                >
                  Help &amp; Troubleshooting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-muted">
          <p>&copy; <CurrentYear /> Coreplay Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-theme-primary transition-colors inline-flex items-center gap-1"
            >
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:text-theme-primary transition-colors">
              Support
            </Link>
            <a
              href={STUDIO_INFO.developerProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-primary transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
