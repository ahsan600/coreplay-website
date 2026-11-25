import projectsData from "./projects.json";
import { SITE } from "./policy/site";
import {
  buildAppSections,
  buildUniversalSections,
  type PolicySection,
  type ProjectEntry,
} from "./policy/template";

/**
 * Privacy policies for every app.
 *
 *   src/data/projects.json      ← per-app data (the ONLY thing to edit when an app is added or changes)
 *   src/data/policy/template.ts ← the policy text shared by all apps (written once)
 *   src/data/policy/site.ts     ← developer name, contact email, "last updated" date
 *
 * This file only wires them together for the pages.
 */

export type { PolicySection, ProjectEntry };

export interface AppPrivacyPolicy {
  slug: string;
  aliases: string[];
  appName: string;
  shortName: string;
  packageId: string;
  category: string;
  tagline: string;
  heroDescription: string;
  badgeText: string;
  lastUpdated: string;
  metaDescription: string;
  playStoreUrl: string;
  sections: PolicySection[];
}

export const PROJECTS: ProjectEntry[] = projectsData as ProjectEntry[];

export function buildPolicyFromProject(project: ProjectEntry): AppPrivacyPolicy {
  const isGame = (project.type ?? "game") === "game";
  const firebase = project.crashlytics ? "Firebase Analytics & Crashlytics" : "Firebase Analytics";

  return {
    slug: project.url,
    aliases: project.aliases ?? [],
    appName: project.name,
    shortName: project.name.split(":")[0].trim(),
    packageId: project.packageName,
    category: project.category ?? (isGame ? "Game" : "App"),
    tagline: `Official privacy policy for ${project.name} published by ${SITE.developer}.`,
    heroDescription: `Privacy Policy for ${project.name} (${project.packageName}) by ${SITE.developer}: what stays on your device, which permissions are used and why, Google AdMob ads, Google Play Data safety, and how to delete your data.`,
    badgeText: "General Audience (13+) • No Account • On-Device Data",
    lastUpdated: SITE.lastUpdated,
    metaDescription: `Privacy Policy for ${project.name} (${project.packageName}) by ${SITE.developer}. On-device data, app permissions, Google AdMob ads, UMP consent, ${firebase}, and your privacy rights.`,
    playStoreUrl: `https://play.google.com/store/apps/details?id=${project.packageName}`,
    sections: buildAppSections(project),
  };
}

/** The universal (all apps) policy shown at /privacy-policy. */
export const UNIVERSAL_POLICY = {
  companyName: SITE.developer,
  contactEmail: SITE.contactEmail,
  lastUpdated: SITE.lastUpdated,
  sections: buildUniversalSections(PROJECTS),
};

const POLICIES: AppPrivacyPolicy[] = PROJECTS.map(buildPolicyFromProject);

/** Converts a URL slug or package ID into a display title, e.g. "count-master" -> "Count Master". */
export function slugToTitle(slug: string): string {
  let cleaned = slug.trim();
  if (cleaned.startsWith("com.")) {
    const parts = cleaned.split(".");
    cleaned = parts.slice(2).join(" ") || parts[parts.length - 1];
  }
  if (cleaned.length <= 4 && !cleaned.includes("-") && !cleaned.includes("_")) {
    return cleaned.toUpperCase();
  }
  return cleaned
    .replace(/[-_.]+/g, " ")
    .replace(/\b[a-z]/g, (char) => char.toUpperCase())
    .trim();
}

/** Turns a slug into a package ID if it is not one already, e.g. "count-master" -> "com.coreplay.count.master". */
export function slugToPackageId(slug: string): string {
  const trimmed = slug.trim().toLowerCase();
  if (trimmed.startsWith("com.")) return trimmed;
  const clean = trimmed
    .replace(/[^a-z0-9]/g, ".")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");
  return `com.coreplay.${clean || "app"}`;
}

/**
 * Finds the policy for a URL slug, package name or alias from projects.json.
 * An unknown slug still gets the standard game policy, so a new game's policy URL works
 * before its entry is added to projects.json.
 */
export function getAppPrivacyPolicy(slug: string): AppPrivacyPolicy | undefined {
  if (!slug || typeof slug !== "string") return undefined;
  const normalized = slug.trim().toLowerCase();

  const known = POLICIES.find(
    (p) =>
      p.slug.toLowerCase() === normalized ||
      p.packageId.toLowerCase() === normalized ||
      p.aliases.some((a) => a.toLowerCase() === normalized),
  );
  if (known) return known;

  if (!/^[a-z0-9_.-]+$/.test(normalized)) return undefined;
  return buildPolicyFromProject({
    name: slugToTitle(slug),
    url: normalized,
    packageName: slugToPackageId(slug),
  });
}

/** Every policy in projects.json, for the cards on /privacy-policy. */
export function getAllAppPrivacyPolicies(): AppPrivacyPolicy[] {
  return POLICIES;
}

/** Canonical slugs, for the sitemap. */
export function getAllAppSlugs(): string[] {
  return PROJECTS.map((p) => p.url);
}

/** Slugs and aliases, for pre-rendering static routes. */
export function getAllRouteSlugs(): string[] {
  return Array.from(new Set(PROJECTS.flatMap((p) => [p.url, ...(p.aliases ?? [])])));
}
