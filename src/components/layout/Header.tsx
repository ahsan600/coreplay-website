"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { STUDIO_INFO } from "@/data/games";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Our Games" },
  { href: "/about", label: "About" },
  { href: STUDIO_INFO.privacyPolicyNetlifyUrl, label: "Privacy Policy", isExternal: true },
  { href: "/support", label: "Support" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-theme-main/90 backdrop-blur-md border-b border-theme shadow-sm"
          : "bg-transparent border-b border-theme/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg p-1"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-200">
              <Gamepad2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-theme-primary flex items-center gap-1.5">
                CorePlay <span className="gradient-text">Games</span>
              </span>
              <span className="text-[11px] font-medium text-theme-muted tracking-wider uppercase">
                Mobile Game Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                !link.isExternal &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));

              const linkClasses = `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "text-accent-primary bg-accent-primary/10 font-semibold"
                  : "text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated/70"
              }`;

              if (link.isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClasses} inline-flex items-center gap-1`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-theme-muted" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            
            <Link
              href="/games"
              id="header-explore-btn"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-95 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-200 flex items-center gap-1.5"
            >
              Explore Our Games
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg border border-theme bg-theme-elevated text-theme-secondary hover:text-theme-primary focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-theme bg-theme-card/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                !link.isExternal &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));

              const linkClasses = `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive
                  ? "bg-accent-primary/15 text-accent-primary font-semibold"
                  : "text-theme-secondary hover:text-theme-primary hover:bg-theme-elevated"
              }`;

              if (link.isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClasses} flex items-center justify-between`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-theme-muted" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-theme flex flex-col gap-2">
              <Link
                href="/games"
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white gradient-brand shadow-md shadow-violet-500/20"
              >
                Explore Our Games
              </Link>
              <a
                href={STUDIO_INFO.developerProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-medium text-theme-secondary hover:text-theme-primary border border-theme flex items-center justify-center gap-1.5"
              >
                Google Play Profile
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
