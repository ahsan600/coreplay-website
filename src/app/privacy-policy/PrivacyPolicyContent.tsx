'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import config from '@/data/privacy-policy.json';
import { useTheme } from '@/components/ui/ThemeProvider';
import { getAllAppPrivacyPolicies } from '@/data/app-privacy-policies';

export interface PrivacyPolicyContentProps {
  data?: {
    appName?: string;
    shortName?: string;
    packageId?: string;
    category?: string;
    tagline?: string;
    heroDescription?: string;
    badgeText?: string;
    companyName?: string;
    contactEmail?: string;
    lastUpdated?: string;
    sections: Array<{
      title: string;
      content: string[];
    }>;
  };
}

export function PrivacyPolicyContent({ data }: PrivacyPolicyContentProps = {}) {
  const isAppSpecific = Boolean(data?.appName || data?.packageId);
  const companyName = data?.companyName || config.companyName;
  const contactEmail = data?.contactEmail || config.contactEmail;
  const sections = data?.sections || config.sections;
  const lastUpdated = data?.lastUpdated || config.lastUpdated;

  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [activeSidebarItem, setActiveSidebarItem] = useState(-1);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const heroTitle = isAppSpecific
    ? `${data?.appName} Privacy Policy`
    : 'Universal Privacy Policy';

  const heroDescription = isAppSpecific
    ? (data?.heroDescription || `Understand how ${data?.appName} (${data?.packageId || ''}) protects your data with on-device processing and zero invasive tracking.`)
    : `The official master Privacy Policy governing all mobile games, utility tools, productivity applications, and digital services published by ${companyName}. Understand how we collect, process, protect, and handle data across our entire ecosystem.`;

  // Support direct hash navigation on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      const match = hash.match(/section-(\d+)/);
      if (match) {
        const secIndex = parseInt(match[1], 10);
        if (secIndex >= 0 && secIndex < sections.length) {
          setExpandedSection(secIndex);
          setActiveSidebarItem(secIndex);
          setTimeout(() => {
            const el = document.getElementById(`section-${secIndex}`);
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }, 350);
        }
      }
    }
  }, [sections.length]);

  // Sync active sidebar item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 260) {
        setActiveSidebarItem(-1);
        return;
      }
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(`section-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSidebarItem(i);
            return;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  // Render markdown text including bold, links, and email
  const renderFormattedText = (text: string) => {
    // Process contact email replacement first
    const withEmail = text.replace(/{{contactEmail}}/g, contactEmail);

    // Regex to match markdown links [label](url), bold **text**, or email
    const tokenRegex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
    const parts = withEmail.split(tokenRegex);

    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={i}
            className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          >
            {part.slice(2, -2)}
          </strong>
        );
      }

      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const [, label, url] = linkMatch;
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium underline transition-all ${
              isDarkMode
                ? 'text-cyan-400 hover:text-cyan-300'
                : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            {label}
          </a>
        );
      }

      if (part.includes(contactEmail)) {
        const subParts = part.split(contactEmail);
        return (
          <React.Fragment key={i}>
            {subParts[0]}
            <a
              href={`mailto:${contactEmail}`}
              className={`font-medium underline transition-all ${
                isDarkMode
                  ? 'text-cyan-400 hover:text-cyan-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              {contactEmail}
            </a>
            {subParts[1]}
          </React.Fragment>
        );
      }

      return <span key={i}>{part}</span>;
    });
  };

  const parseContent = (content: string[]) => {
    const elements: React.ReactNode[] = [];
    let listItems: React.ReactNode[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="mb-4 space-y-2 mt-2">
            {listItems}
          </ul>
        );
        listItems = [];
      }
    };

    content.forEach((paragraph, index) => {
      const trimmed = paragraph.trim();

      if (trimmed.startsWith('- ')) {
        listItems.push(
          <li key={`li-${index}`} className="flex items-start">
            <span className="inline-block mt-1 mr-2.5 text-cyan-400 shrink-0">
              <CheckCircleIcon className="w-4 h-4" />
            </span>
            <span className="leading-relaxed">{renderFormattedText(trimmed.substring(2))}</span>
          </li>
        );
      } else {
        flushList();
        elements.push(
          <p key={`p-${index}`} className="mb-4 leading-relaxed">
            {renderFormattedText(paragraph)}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? 'bg-[#0f1115] text-white' : 'bg-[#f8f9fc] text-slate-900'
      } flex flex-col font-sans transition-colors duration-300`}
    >
      <div className="flex flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8 items-start">
        {/* Left Floating Navigation Dock */}
        <aside
          className={`w-[270px] shrink-0 sticky top-24 rounded-2xl border ${
            isDarkMode
              ? 'border-slate-800 bg-[#13161f]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
              : 'border-slate-200/90 bg-white/95 shadow-lg shadow-slate-200/40'
          } backdrop-blur-md p-2.5 hidden lg:flex flex-col gap-1 select-none transition-colors z-20 max-h-[calc(100vh-8rem)] overflow-y-auto`}
        >
          {/* Back link when viewing an app-specific policy */}
          {isAppSpecific && (
            <Link
              href="/privacy-policy"
              className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-colors mb-1 border ${
                isDarkMode
                  ? 'border-slate-800 bg-white/5 text-slate-300 hover:text-cyan-400 hover:border-slate-700'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-blue-600 hover:border-slate-300'
              }`}
            >
              <ArrowLeftIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">All Privacy Policies</span>
            </Link>
          )}

          {/* Overview button */}
          <button
            type="button"
            onClick={() => {
              setActiveSidebarItem(-1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`relative w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-200 border cursor-pointer shrink-0 ${
              activeSidebarItem === -1
                ? isDarkMode
                  ? 'bg-blue-500/15 border-blue-500/30 text-blue-400 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.15)]'
                  : 'bg-blue-50 border-blue-200 text-blue-600 font-semibold shadow-sm'
                : isDarkMode
                ? 'border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'
                : 'border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <ShieldIcon className="w-4 h-4 shrink-0 text-cyan-400" />
            <span className="truncate">Overview</span>
          </button>

          {/* Section buttons */}
          {sections.map((sec, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveSidebarItem(idx);
                setExpandedSection(idx);
                setTimeout(() => {
                  const el = document.getElementById(`section-${idx}`);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }, 50);
              }}
              className={`relative w-full text-left flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs transition-all duration-200 border cursor-pointer shrink-0 ${
                activeSidebarItem === idx
                  ? isDarkMode
                    ? 'bg-blue-500/15 border-blue-500/30 text-blue-400 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.15)]'
                    : 'bg-blue-50 border-blue-200 text-blue-600 font-semibold shadow-sm'
                  : isDarkMode
                  ? 'border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  : 'border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className={`shrink-0 ${activeSidebarItem === idx ? 'text-cyan-400' : 'text-slate-400 dark:text-slate-500'}`}>
                {getIconForTitle(sec.title, 'w-3.5 h-3.5')}
              </span>
              <span className="truncate">{sec.title}</span>
            </button>
          ))}

          {/* Compact Bottom Info Box */}
          <div className="mt-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80 shrink-0">
            <a
              href={`mailto:${contactEmail}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-medium transition-colors ${
                isDarkMode
                  ? 'bg-blue-950/20 border-blue-900/30 text-blue-300 hover:border-blue-700/50'
                  : 'bg-blue-50/70 border-blue-100 text-blue-700 hover:border-blue-200'
              }`}
            >
              <MailIcon className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
              <div className="truncate flex-1">
                <span className="block font-semibold">Privacy Officer</span>
                <span className="block opacity-75 truncate text-[10px]">{contactEmail}</span>
              </div>
            </a>
          </div>
        </aside>

        {/* Center Main Content */}
        <main className="flex-1 min-w-0 pb-16">
          {/* Breadcrumb Navigation when viewing an app-specific policy */}
          {isAppSpecific && (
            <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
                <span>All Privacy Policies</span>
              </Link>
              <span>/</span>
              <span className="text-slate-700 dark:text-slate-200 font-semibold">
                {data?.shortName || data?.appName}
              </span>
            </nav>
          )}

          {/* Hero Card */}
          <div
            className={`${
              isDarkMode
                ? 'bg-gradient-to-br from-[#1e2330] to-[#151821] border-slate-700'
                : 'bg-gradient-to-br from-[#f2f6ff] to-[#e6f0ff] border-blue-50'
            } rounded-2xl p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between border relative overflow-hidden`}
          >
            <div className="md:w-3/5 z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold border ${
                    isDarkMode
                      ? 'bg-blue-900/30 text-blue-300 border-blue-800/50'
                      : 'bg-blue-100/50 text-blue-700 border-blue-200'
                  }`}
                >
                  <CalendarIcon className="w-4 h-4 text-cyan-400" /> Last Updated: {lastUpdated}
                </div>

                {!isAppSpecific && (
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border ${
                      isDarkMode
                        ? 'bg-blue-900/40 text-cyan-300 border-blue-700/50'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    <ShieldIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Master Policy • All Games &amp; Apps</span>
                  </div>
                )}

                {data?.badgeText && (
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border ${
                      isDarkMode
                        ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    <ShieldIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{data.badgeText}</span>
                  </div>
                )}

                {data?.packageId && (
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono border ${
                      isDarkMode
                        ? 'bg-slate-800/80 text-slate-300 border-slate-700/80'
                        : 'bg-white text-slate-700 border-slate-200 shadow-sm'
                    }`}
                  >
                    <span>{data.packageId}</span>
                  </div>
                )}
              </div>

              <h1
                className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-3.5 flex-wrap ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span className="p-2 sm:p-2.5 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-400 dark:text-yellow-400 shrink-0 inline-flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.25)]">
                  <LockIcon className="w-7 h-7 sm:w-9 sm:h-9 text-amber-400 dark:text-yellow-400" />
                </span>
                <span>{heroTitle}</span>
              </h1>
              <p
                className={`text-base md:text-lg max-w-lg leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {heroDescription}
              </p>
            </div>

            {/* 3D Visual */}
            <div className="md:w-2/5 relative h-48 md:h-64 mt-8 md:mt-0 flex justify-center items-center">
              <div className="relative w-36 h-44 bg-gradient-to-b from-blue-400 via-indigo-500 to-violet-600 rounded-[2rem] rounded-b-[3.5rem] shadow-2xl flex items-center justify-center border-4 border-white/20">
                <div className="w-20 h-28 bg-gradient-to-b from-blue-300 to-indigo-500 rounded-xl rounded-b-2xl shadow-inner flex items-center justify-center">
                  <LockIcon className="w-9 h-9 text-yellow-300 drop-shadow-[0_2px_8px_rgba(234,179,8,0.6)]" />
                </div>
                {/* Floating Badges */}
                <div
                  className={`absolute -left-6 top-4 w-9 h-9 rounded-xl shadow-lg flex items-center justify-center animate-bounce ${
                    isDarkMode ? 'bg-slate-800' : 'bg-white'
                  }`}
                  style={{ animationDuration: '3s' }}
                >
                  <CameraIcon className="w-4 h-4 text-cyan-400" />
                </div>
                <div
                  className={`absolute -right-5 top-12 w-9 h-9 rounded-xl shadow-lg flex items-center justify-center animate-bounce ${
                    isDarkMode ? 'bg-slate-800' : 'bg-white'
                  }`}
                  style={{ animationDuration: '4s', animationDelay: '1s' }}
                >
                  <FileTextIcon className="w-4 h-4 text-violet-400" />
                </div>
                <div
                  className={`absolute -left-3 bottom-3 w-9 h-9 rounded-xl shadow-lg flex items-center justify-center animate-bounce ${
                    isDarkMode ? 'bg-slate-800' : 'bg-white'
                  }`}
                  style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
                >
                  <ShieldIcon className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          {/* App-Specific Policies Quick Switcher on Universal Page */}
          {!isAppSpecific && (
            <div
              className={`mb-8 p-5 sm:p-6 rounded-2xl border transition-colors ${
                isDarkMode
                  ? 'border-slate-800 bg-[#161a23]/90 shadow-md'
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="w-4 h-4 text-cyan-400" />
                  <h2
                    className={`font-bold text-base sm:text-lg ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Dedicated App Privacy Policies
                  </h2>
                </div>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 self-start sm:self-auto">
                  5 App-Specific Policies Available
                </span>
              </div>
              <p
                className={`text-xs sm:text-sm mb-4 leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Need verified details on device permissions, local storage, or third-party integrations for a specific application? Select an app below to view its dedicated policy:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {getAllAppPrivacyPolicies().map((app) => (
                  <Link
                    key={app.slug}
                    href={`/privacy-policy/${app.slug}`}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 group flex flex-col justify-between ${
                      isDarkMode
                        ? 'border-slate-800 bg-[#12151c] hover:border-cyan-500/40 hover:bg-[#1a1f2b]'
                        : 'border-slate-200 bg-slate-50/80 hover:border-blue-400 hover:bg-blue-50/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`font-bold text-xs sm:text-sm group-hover:text-cyan-400 transition-colors ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {app.shortName}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-500/10 text-slate-400">
                          {app.category.split('&')[0].trim()}
                        </span>
                      </div>
                      <p
                        className={`text-[11px] line-clamp-2 leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {app.tagline}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-medium text-cyan-400">
                      <span>View Dedicated Policy</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Accordion list */}
          <div className="space-y-3.5">
            {sections.map((section, idx) => {
              const isExpanded = expandedSection === idx;
              const previewText = (section.content[0] || '')
                .replace(/\*\*/g, '')
                .replace(/\[(.*?)\]\(.*?\)/g, '$1')
                .substring(0, 85);

              return (
                <div
                  key={idx}
                  id={`section-${idx}`}
                  className={`scroll-mt-24 border rounded-xl overflow-hidden transition-all shadow-sm ${
                    isDarkMode
                      ? 'bg-[#1a1d24] border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-blue-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setExpandedSection(isExpanded ? null : idx);
                      setActiveSidebarItem(idx);
                    }}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isExpanded
                            ? 'bg-blue-600 text-white shadow-md'
                            : isDarkMode
                            ? 'bg-blue-900/30 text-cyan-400'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {getIconForTitle(section.title, 'w-5 h-5')}
                      </div>
                      <div className="min-w-0">
                        <h2
                          className={`font-bold text-base sm:text-lg ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {section.title}
                        </h2>
                        <p
                          className={`text-xs sm:text-sm mt-0.5 line-clamp-1 max-w-xl ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {previewText}...
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isExpanded ? (isDarkMode ? 'bg-slate-800' : 'bg-slate-100') : ''
                      }`}
                    >
                      <ChevronDownIcon
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-[3500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div
                      className={`p-5 pt-4 text-sm leading-relaxed max-w-none border-t mx-4 sm:mx-5 mt-1 sm:pl-16 ${
                        isDarkMode
                          ? 'border-slate-800 text-slate-300'
                          : 'border-slate-100 text-slate-600'
                      }`}
                    >
                      {parseContent(section.content)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Notice Card */}
          <div
            className={`mt-8 p-5 border rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isDarkMode ? 'bg-[#1a1d24] border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-500'
                }`}
              >
                <ShieldIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Have questions or need to request data deletion? Our privacy officer is available directly.
              </p>
            </div>

            <a
              href={`mailto:${contactEmail}?subject=%5BPrivacy%20Inquiry%5D%20${encodeURIComponent(data?.appName || companyName)}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shrink-0"
            >
              <MailIcon className="w-3.5 h-3.5" />
              <span>Contact Privacy Officer</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

// SVG Icon Mapping
const getIconForTitle = (title: string, className: string) => {
  const t = title.toLowerCase();
  if (t.includes('permission') || t.includes('camera') || t.includes('hardware')) return <CameraIcon className={className} />;
  if (t.includes('collection') || t.includes('collect')) return <UserIcon className={className} />;
  if (t.includes('scope') || t.includes('overview')) return <ShieldIcon className={className} />;
  if (t.includes('use') || t.includes('purpose') || t.includes('feature')) return <PieChartIcon className={className} />;
  if (t.includes('advertis') || t.includes('admob') || t.includes('gaid') || t.includes('choice')) return <EyeIcon className={className} />;
  if (t.includes('purchase') || t.includes('financ')) return <CreditCardIcon className={className} />;
  if (t.includes('security') || t.includes('safeguard')) return <LockIcon className={className} />;
  if (t.includes('retention') || t.includes('delet') || t.includes('erasure') || t.includes('backup')) return <DatabaseIcon className={className} />;
  if (t.includes('right') || t.includes('gdpr') || t.includes('ccpa') || t.includes('consent')) return <CheckCircleIcon className={className} />;
  if (t.includes('third party') || t.includes('service') || t.includes('sdk')) return <GridIcon className={className} />;
  if (t.includes('offline') || t.includes('storage') || t.includes('transmission')) return <LockIcon className={className} />;
  if (t.includes('child')) return <UserIcon className={className} />;
  if (t.includes('change')) return <CalendarIcon className={className} />;
  if (t.includes('contact')) return <MailIcon className={className} />;
  return <FileTextIcon className={className} />;
};

// Shared SVG Components
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const PieChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const GridIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
