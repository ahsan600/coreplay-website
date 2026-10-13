import React from "react";
import Link from "next/link";
import { Gamepad2, ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
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
                <Gamepad2 className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-theme-primary">
                  CorePlay <span className="gradient-text">Games</span>
                </span>
                <span className="text-[11px] font-medium text-theme-muted uppercase tracking-wider">
                  Mobile Gaming Studio
                </span>
              </div>
            </Link>

            <p className="text-sm text-theme-secondary max-w-sm leading-relaxed">
              Crafting fun, exciting, and immersive mobile games for players worldwide. Explore new adventures, simulation challenges, and endless gameplay on Google Play.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-theme-muted">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Developer ID: 6807992577867877190</span>
            </div>
          </div>

          {/* Studio Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
              Navigation
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
                  Player Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
              Legal & Privacy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={STUDIO_INFO.privacyPolicyNetlifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Privacy Policy (Official)
                  <ArrowUpRight className="w-3.5 h-3.5 text-theme-muted" />
                </a>
              </li>
              <li>
                <a
                  href={`${STUDIO_INFO.privacyPolicyNetlifyUrl}#third-party`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Third-Party Services
                  <ArrowUpRight className="w-3.5 h-3.5 text-theme-muted" />
                </a>
              </li>
              <li>
                <a
                  href={`${STUDIO_INFO.privacyPolicyNetlifyUrl}#children`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-secondary hover:text-accent-primary inline-flex items-center gap-1 transition-colors"
                >
                  Children&apos;s Policy
                  <ArrowUpRight className="w-3.5 h-3.5 text-theme-muted" />
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Resources & Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-theme-primary tracking-wider uppercase">
              Connect & Support
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
                  Help & Troubleshooting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-muted">
          <p>© <CurrentYear /> CorePlay Games. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={STUDIO_INFO.privacyPolicyNetlifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-primary transition-colors inline-flex items-center gap-1"
            >
              Privacy Policy
              <ArrowUpRight className="w-3 h-3 text-theme-muted" />
            </a>
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
