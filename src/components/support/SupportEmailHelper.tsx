"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ChevronDown,
  Gamepad2,
  Smartphone,
  HelpCircle,
} from "lucide-react";
import { STUDIO_INFO, GAMES, APPS } from "@/data/games";

const PRODUCT_OPTIONS = [
  ...GAMES.map((g) => ({ id: g.id, label: `${g.title} (Game)`, type: "game" as const })),
  ...APPS.map((a) => ({ id: a.id, label: `${a.title} (App)`, type: "app" as const })),
  { id: "general-inquiry", label: "General Studio Inquiry", type: "general" as const },
];

export function SupportEmailHelper() {
  const [copied, setCopied] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_OPTIONS[0].label);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deviceModel, setDeviceModel] = useState("");
  const [issueDetails, setIssueDetails] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_INFO.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const selectOption = (label: string) => {
    setSelectedProduct(label);
    setDropdownOpen(false);
  };

  const generateMailto = () => {
    const encodedSubject = encodeURIComponent(`[Support Request] ${selectedProduct}`);
    const bodyContent = [
      `Product / Title: ${selectedProduct}`,
      `Device Model & Android Version: ${deviceModel || "Not specified"}`,
      `Date: ${new Date().toLocaleDateString()}`,
      "",
      "--- Issue Description / Feedback ---",
      issueDetails || "Please describe the problem you encountered...",
      "",
      "---",
      "Sent via Coreplay Technologies Official Support Portal",
    ].join("\n");

    const encodedBody = encodeURIComponent(bodyContent);
    return `mailto:${STUDIO_INFO.contactEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleLaunchEmail = () => {
    const mailto = generateMailto();
    window.location.href = mailto;
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
            Directly monitored by the Coreplay Technologies engineering team
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
            Select your game or application and enter your details to launch your email client with structured diagnostic information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Custom Styled Product Selector Dropdown */}
          <div className="space-y-1.5 relative" ref={dropdownRef}>
            <label
              id="product-select-label"
              className="text-xs font-semibold text-theme-secondary"
            >
              Select Game or App
            </label>

            <button
              type="button"
              id="product-select-button"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-labelledby="product-select-label"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full py-2.5 px-3.5 rounded-xl border border-theme bg-theme-main text-theme-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary flex items-center justify-between text-left transition-all cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-2 truncate">
                {selectedProduct.includes("(App)") ? (
                  <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : selectedProduct.includes("(Game)") ? (
                  <Gamepad2 className="w-4 h-4 text-accent-primary shrink-0" />
                ) : (
                  <HelpCircle className="w-4 h-4 text-theme-muted shrink-0" />
                )}
                <span className="truncate">{selectedProduct}</span>
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
                aria-labelledby="product-select-label"
                className="absolute left-0 right-0 top-full mt-1.5 z-30 rounded-xl border border-theme bg-theme-card/95 backdrop-blur-xl shadow-2xl p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150"
              >
                {PRODUCT_OPTIONS.map((opt) => {
                  const isSelected = selectedProduct === opt.label;
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
                        {opt.type === "app" ? (
                          <Smartphone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        ) : opt.type === "game" ? (
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
              Device Model &amp; Android Version (Optional)
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
            Issue Details / Feedback / Bug Report
          </label>
          <textarea
            id="issue-textarea"
            rows={4}
            placeholder="Please describe what happened, camera permissions, error messages, or steps to reproduce..."
            value={issueDetails}
            onChange={(e) => setIssueDetails(e.target.value)}
            className="w-full py-2.5 px-3.5 rounded-xl border border-theme bg-theme-main text-theme-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary resize-y transition-all shadow-sm"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="button"
            onClick={handleLaunchEmail}
            className="py-3 px-6 rounded-xl text-sm font-semibold text-white gradient-brand hover:opacity-95 shadow-md shadow-violet-500/20 text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Launch Email to {STUDIO_INFO.contactEmail}</span>
          </button>

          <span className="text-xs text-theme-muted text-center sm:text-left">
            Opens your default mail app with the formatted message above.
          </span>
        </div>
      </div>
    </div>
  );
}
