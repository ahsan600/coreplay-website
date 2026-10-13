"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mail, Copy, Check, Send, ChevronDown, Gamepad2, HelpCircle } from "lucide-react";
import { STUDIO_INFO, GAMES } from "@/data/games";

const GAME_OPTIONS = [
  ...GAMES.map((g) => ({ id: g.id, label: g.title, isGame: true })),
  { id: "general-inquiry", label: "General Studio Inquiry", isGame: false },
];

export function SupportEmailHelper() {
  const [copied, setCopied] = useState(false);
  const [selectedGame, setSelectedGame] = useState(GAMES[0].title);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deviceModel, setDeviceModel] = useState("");
  const [issueDetails, setIssueDetails] = useState("");
  const [subject, setSubject] = useState(`[Support Request] ${GAMES[0].title}`);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_INFO.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectOption = (label: string) => {
    setSelectedGame(label);
    setSubject(`[Support Request] ${label}`);
    setDropdownOpen(false);
  };

  const generateMailto = () => {
    const encodedSubject = encodeURIComponent(subject || `Support - ${selectedGame}`);
    const bodyContent = `Game: ${selectedGame}\nDevice Model: ${deviceModel || "Not specified"}\n\nDescription of issue:\n${issueDetails || ""}`;
    const encodedBody = encodeURIComponent(bodyContent);
    return `mailto:${STUDIO_INFO.contactEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <div className="rounded-3xl border border-theme bg-theme-card p-6 sm:p-8 lg:p-10 shadow-xl space-y-8">
      {/* Official Developer Direct Contact Card */}
      <div className="p-6 rounded-2xl bg-theme-elevated border border-theme flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-accent-secondary uppercase tracking-wider">
            Official Developer Support Email
          </div>
          <div className="text-lg sm:text-xl font-mono font-bold text-theme-primary">
            {STUDIO_INFO.contactEmail}
          </div>
          <div className="text-xs text-theme-muted">
            Monitored directly by the CorePlay Games development team
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="py-2.5 px-4 rounded-xl text-xs font-semibold border border-theme bg-theme-main text-theme-primary hover:border-accent-primary/60 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-theme-muted" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${STUDIO_INFO.contactEmail}`}
            className="py-2.5 px-4 rounded-xl text-xs font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 flex items-center gap-1.5 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Open Email Client</span>
          </a>
        </div>
      </div>

      {/* Structured Email Generator */}
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-bold text-theme-primary tracking-tight">
            Compose a Pre-formatted Support Message
          </h3>
          <p className="text-xs sm:text-sm text-theme-secondary mt-1">
            Fill in your device details to open your email client with structured information, ensuring our team can assist you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Custom Styled Game Selector Dropdown */}
          <div className="space-y-1.5 relative" ref={dropdownRef}>
            <label
              id="game-select-label"
              className="text-xs font-semibold text-theme-secondary"
            >
              Game Title
            </label>

            <button
              type="button"
              id="game-select-button"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-labelledby="game-select-label"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full py-2.5 px-3.5 rounded-xl border border-theme bg-theme-main text-theme-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary flex items-center justify-between text-left transition-all cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-2 truncate">
                <Gamepad2 className="w-4 h-4 text-accent-primary shrink-0" />
                <span className="truncate">{selectedGame}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-theme-muted shrink-0 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-accent-primary" : ""
                }`}
              />
            </button>

            {/* Custom Dropdown Menu Panel */}
            {dropdownOpen && (
              <div
                role="listbox"
                aria-labelledby="game-select-label"
                className="absolute left-0 right-0 top-full mt-1.5 z-30 rounded-xl border border-theme bg-theme-card/95 backdrop-blur-xl shadow-2xl p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150"
              >
                {GAME_OPTIONS.map((opt) => {
                  const isSelected = selectedGame === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => selectOption(opt.label)}
                      className={`w-full py-2 px-3 rounded-lg text-sm flex items-center justify-between transition-colors cursor-pointer text-left ${
                        isSelected
                          ? "bg-accent-primary/15 text-accent-primary font-semibold"
                          : "text-theme-primary hover:bg-theme-elevated"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {opt.isGame ? (
                          <Gamepad2 className="w-3.5 h-3.5 text-accent-secondary shrink-0" />
                        ) : (
                          <HelpCircle className="w-3.5 h-3.5 text-theme-muted shrink-0" />
                        )}
                        <span className="truncate">{opt.label}</span>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-accent-primary shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="device-input"
              className="text-xs font-semibold text-theme-secondary"
            >
              Your Device &amp; Android Version (Optional)
            </label>
            <input
              id="device-input"
              type="text"
              placeholder="e.g. Samsung Galaxy S23 / Android 14"
              value={deviceModel}
              onChange={(e) => setDeviceModel(e.target.value)}
              className="w-full py-2.5 px-3.5 rounded-xl border border-theme bg-theme-main text-theme-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="issue-textarea"
            className="text-xs font-semibold text-theme-secondary"
          >
            Issue Details / Feedback
          </label>
          <textarea
            id="issue-textarea"
            rows={4}
            placeholder="Please describe what happened, any error messages shown, or steps to reproduce the issue..."
            value={issueDetails}
            onChange={(e) => setIssueDetails(e.target.value)}
            className="w-full py-2.5 px-3.5 rounded-xl border border-theme bg-theme-main text-theme-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary resize-y transition-all shadow-sm"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={generateMailto()}
            className="py-3 px-6 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Launch Email to {STUDIO_INFO.contactEmail}</span>
          </a>

          <span className="text-xs text-theme-muted text-center sm:text-left">
            Opens your default mail app with the formatted message above.
          </span>
        </div>
      </div>
    </div>
  );
}
