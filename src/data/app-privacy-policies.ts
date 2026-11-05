import projectsData from "./projects.json";

export interface PolicySection {
  title: string;
  content: string[];
}

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

export interface ProjectEntry {
  name: string;
  url: string;
  packageName: string;
  aliases?: string[];
}

export const COMMON_CONTACT_EMAIL = "muhammadameen188d@gmail.com";
export const COMMON_DEVELOPER_NAME = "Coreplay Technologies";
export const COMMON_DEV_PROFILE =
  "https://play.google.com/store/apps/dev?id=6807992577867877190";
export const COMMON_LAST_UPDATED = "November 2026";

export const PROJECTS: ProjectEntry[] = projectsData as ProjectEntry[];

/**
 * Converts a URL slug or package ID into a clean display title.
 * E.g. "count-master" -> "Count Master", "rgm" -> "RGM"
 */
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

/**
 * Formats a slug into an Android package identifier if not already provided.
 * E.g. "count-master" -> "com.coreplay.count.master"
 */
export function slugToPackageId(slug: string): string {
  const trimmed = slug.trim().toLowerCase();
  if (trimmed.startsWith("com.")) {
    return trimmed;
  }
  const clean = trimmed
    .replace(/[^a-z0-9]/g, ".")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");
  return `com.coreplay.${clean || "app"}`;
}

/**
 * Master Privacy Policy Generator modelled directly after the Count-Master (Count Rush) standard.
 * Used uniformly across all Coreplay applications and games.
 */
export function generateCountMasterSections(
  name: string,
  packageName: string
): PolicySection[] {
  const playStoreLink = `[${name} on Google Play](https://play.google.com/store/apps/details?id=${packageName})`;

  return [
    {
      title: "Scope & Overview",
      content: [
        `This Privacy Policy applies specifically to **${name}** (package name: \`${packageName}\`), developed, published, and maintained by **Coreplay Technologies** ("we", "our", or "us") on Google Play and authorized Android marketplaces.`,
        `Inside the application interface and on your device home screen, the application is presented and displayed as **${name}**. We are dedicated to delivering entertaining, responsive, and secure mobile gaming experiences while upholding absolute transparency regarding player privacy, device permissions, and advertising technologies.`,
      ],
    },
    {
      title: "Application Features & Intended Use",
      content: [
        `**${name}** delivers responsive interactive experiences engineered with client-side performance and privacy-first architecture:`,
        "- **100% Offline Capable:** Core gameplay, mechanics, procedural generation, sound effects, and user interactions are fully playable without an active internet connection.",
        "- **Zero Account Registration:** We do not mandate registration, account creation, email sign-ups, or social media logins. You use the application completely anonymously.",
        "- **Optimized Mobile Performance:** Engineered for low battery consumption, rapid startup, and stable frame rates across both entry-level and flagship devices.",
      ],
    },
    {
      title: "Information Collection & Processing",
      content: [
        `**${name}** is engineered around strict data minimization principles:`,
        "- **Zero Personal Identity Harvesting:** We do not collect names, email addresses, physical addresses, telephone numbers, or biometric information. No account registration, password creation, or social media login is ever required to play.",
        "- **Non-PII Gameplay Metrics (App Interactions):** Aggregated, anonymous gameplay events (such as levels completed, levels failed, session durations, and virtual in-game currency earned) are processed via Firebase Analytics to evaluate track balancing, difficulty curves, and progression.",
        "- **Device & Performance Telemetry (Diagnostics):** Technical parameters including Android OS version, device model, screen resolution, GPU tier, and frame rate metrics may be sampled to ensure smooth performance and graphics stability across diverse hardware profiles.",
        "- **Zero Keystroke or Sensor Snooping:** We do not track user keystrokes, personal communications, ambient microphone audio, or camera streams.",
      ],
    },
    {
      title: "Device Permissions & Hardware Access",
      content: [
        `**${name}** requests only standard Android permissions necessary for responsive gameplay, ad delivery, and device ergonomics:`,
        "- **Network & Internet State (android.permission.INTERNET, android.permission.ACCESS_NETWORK_STATE):** Enables the application to verify network connectivity, request advertisements from Google AdMob when connected, retrieve privacy consent forms, and open external links (such as support or this Privacy Policy) when tapped. The game functions seamlessly offline when no connection is present.",
        "- **Keep Awake / Screen Wake Lock (android.permission.WAKE_LOCK):** Prevents your device screen from dimming or going to sleep during active gameplay stages, ensuring an uninterrupted player experience.",
        "- **Haptic Feedback & Vibration (android.permission.VIBRATE):** Delivers tactile rumble effects during in-game interactions, milestones, and feedback. Vibration can be toggled on or off at any time in the in-game Settings menu.",
        "- **Google Advertising ID (com.google.android.gms.permission.AD_ID):** Required on Android 13+ for Google AdMob to access your device's Google Advertising ID (GAID) for advertising attribution, frequency capping, and ad fraud prevention. You can reset or delete this identifier at any time via Android system settings.",
        "- **Android Privacy Sandbox (ACCESS_ADSERVICES_AD_ID, ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS):** Supports modern Android Privacy Sandbox APIs, enabling privacy-preserving ad measurement and attribution without cross-app tracking identifiers.",
        "- **Google Play Install Referrer (com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE):** Standard Google Play service permission used to measure app installation sources and distribution metrics.",
        "- **Zero Sensitive Permissions:** The game does NOT request or access your device camera, microphone, GPS location, contact directory, calendar, stored files, photo gallery, or phone call logs.",
      ],
    },
    {
      title: "Local Storage & Data Persistence",
      content: [
        "All player progression and customization data is stored 100% locally on your physical device:",
        "- **On-Device Profile Storage:** Your level index, total collected in-game currency, unlocked items, cosmetics, and user preferences (audio volume, music, vibration, graphics preset) are saved locally using device application storage (such as `@capacitor/preferences` under `profile.v1`).",
        "- **Zero Remote Account Synchronization:** We do not maintain remote cloud user accounts, databases, or central player profile servers. Your save file lives solely inside your device's application sandbox.",
        '- **Complete Player Control:** You retain full ownership of your game data. You can erase all progress at any time via in-game Settings ("Reset progress"), through Android system settings, or by uninstalling the application.',
      ],
    },
    {
      title: "Third-Party Services & SDK Integrations",
      content: [
        `To deliver graphics rendering, gameplay analytics, and free-to-play ad monetization, **${name}** integrates trusted industry SDKs:`,
        "- **Google Play Services (Google LLC):** Essential for secure application distribution, licensing, and platform updates. [Google Privacy Policy](https://policies.google.com/privacy)",
        "- **Google AdMob (Google LLC):** Serves interstitial, rewarded video, and app open ads to keep the game free to play for all players without intrusive banner ads. [Google AdMob Privacy Policy](https://support.google.com/admob/answer/6128543)",
        "- **Google User Messaging Platform / UMP (Google LLC):** Manages user consent for personalized advertising, fully compliant with IAB Europe Transparency and Consent Framework (TCF v2). [Google UMP Overview](https://developers.google.com/admob/android/privacy)",
        "- **Google Firebase Analytics (Google LLC):** Collects aggregated, non-personally identifiable telemetry to measure level drop-off rates and gameplay performance bottlenecks. [Firebase Privacy and Security](https://firebase.google.com/support/privacy)",
      ],
    },
    {
      title: "Advertising & Monetization Policy",
      content: [
        `**${name}** is a **100% free-to-play** game supported by digital advertising. The game contains **no banner ads**, and utilizes interstitial, rewarded video, and app open ads:`,
        "- **App Open Ads:** Full-screen advertisements displayed occasionally when the game is launched or resumed from the background, governed by frequency capping and session cooldowns.",
        "- **Interstitial Ads:** Full-screen advertisements displayed periodically between levels, governed by strict frequency throttling and cooldown timers to prevent gameplay disruption.",
        "- **Rewarded Video Ads:** Optional, user-initiated video ads that reward players with in-game perks, such as bonus multipliers at the finish line or extra unlock keys. Rewarded ads are never forced and only play when you explicitly choose to watch them.",
        "- **Consent-Gated Personalization:** We respect your privacy preferences. In regions governed by GDPR, UK GDPR, or CCPA, ads are served in accordance with the consent you grant via the Google UMP consent dialogue.",
        "- **Advertising ID Management:** You have complete control over your advertising identifier via Android operating system settings:",
        "  - **Reset Advertising ID:** Navigate to **Settings > Google > Ads** and tap **Reset advertising ID** to sever historical activity links.",
        "  - **Delete Advertising ID:** On Android 12+, navigate to **Settings > Google > Ads** and tap **Delete advertising ID** to prevent all apps from accessing your GAID.",
        "  - **Opt Out of Personalized Ads:** Toggle **Opt out of Ads Personalization** in your Google settings to receive contextual ads instead of interest-based ads.",
      ],
    },
    {
      title: "Google Play Console Data Safety Alignment",
      content: [
        "To ensure complete transparency matching our Google Play Console Data Safety declarations, the following data types may be collected and shared with Google services (AdMob and Firebase) strictly for advertising, analytics, and fraud prevention:",
        "- **Device or other IDs (Google Advertising ID):** Collected and shared with Google AdMob for ad delivery, attribution, and frequency capping.",
        "- **App Interactions (Gameplay Events):** Aggregated metrics on levels started, completed, or failed, and in-game currency earned, collected and shared with Google Firebase for product analytics.",
        "- **Diagnostics (Performance Data):** OS version, device model, and frame rate metrics collected and shared with Google for performance evaluation.",
        "- **Security Practices:** All collected data is encrypted in transit using industry-standard HTTPS/TLS protocols.",
        '- **Data Deletion:** Players can reset or erase all local game data at any time via in-game Settings ("Reset progress") or Android system settings.',
      ],
    },
    {
      title: "In-App Purchases & Financial Data (Zero IAP)",
      content: [
        `**${name}** contains **NO In-App Purchases (IAP)** and NO real-money digital storefront:`,
        "- **Completely Free to Play:** All levels, upgrades, cosmetics, and skins are unlockable purely through earned in-game currency and gameplay progression.",
        "- **Zero Financial Data Collection:** We do not collect, request, process, or store credit card numbers, banking information, billing addresses, or payment credentials under any circumstances.",
        "- **No Pay-to-Win Mechanics:** There are no subscription fees, paid loot boxes, or microtransactions.",
      ],
    },
    {
      title: "Analytics, Telemetry & User Choices",
      content: [
        `**${name}** collects anonymous, non-personally identifiable telemetry through Google Firebase Analytics to evaluate game stability, difficulty balancing, and level progression:`,
        "- **Anonymous Gameplay Events:** Telemetry is strictly limited to aggregate game progression events (such as levels started, completed, or failed, and virtual currency earned or spent). No personal identifiers, names, emails, or device-specific sensitive data are collected.",
        "- **Ad Consent & Privacy Options:** In jurisdictions requiring privacy consent (such as the EEA and UK under GDPR), advertising signals and personalization are managed through Google's User Messaging Platform (UMP). Players can review, modify, or revoke their consent choices at any time by tapping **Privacy options** directly in the in-game **Settings** menu.",
        "- **System-Level Ad Tracking Controls:** Players who wish to restrict advertising measurement or personalized ads can reset or delete their Google Advertising ID (GAID) at any time through Android system settings (**Settings > Google > Ads**).",
      ],
    },
    {
      title: "Data Sharing & Disclosure Policy",
      content: [
        "Coreplay Technologies **does NOT sell, rent, trade, or lease** your personal data or gameplay records to third-party data brokers or marketing firms.",
        "We disclose information solely to the trusted infrastructure providers enumerated in this policy (Google LLC) strictly for delivering ads, measuring aggregated app performance, and complying with legal obligations.",
      ],
    },
    {
      title: "Data Retention & User Deletion Rights",
      content: [
        "Because your game progress is stored locally on your device, you possess total autonomy over data deletion:",
        "- **In-App Progress Reset:** You can reset your currency, unlocked cosmetics, and level progress to factory state by opening the in-game **Settings** and tapping **Reset progress**.",
        `- **Device System Storage Wipe:** You can clear all local app data through your Android system settings (**Settings > Apps > ${name} > Storage > Clear Data**).`,
        "- **Application Uninstall:** Removing or uninstalling the game from your Android device permanently eradicates the local sandbox and all associated game save files.",
      ],
    },
    {
      title: "Data Security Safeguards",
      content: [
        "We employ robust technical safeguards to ensure player security:",
        "- **Local-First Architecture:** By executing all game physics, collision detection, and save operations locally, your game state is never exposed to external cloud data breaches.",
        "- **Encrypted Network Transit:** Any network communications with Google Play, AdMob, and Firebase are encrypted end-to-end using industry-standard Transport Layer Security (TLS/HTTPS).",
        "- **OS Sandbox Protection:** Android's security architecture isolates the application's local storage from unauthorized access by third-party applications.",
      ],
    },
    {
      title: "Children's Privacy & Age Policy (General Audience 13+)",
      content: [
        "This game is intended for a general audience and is not directed at children under 13. We do not knowingly collect personal information from children.",
        `In accordance with our general audience classification, advertisements served within the game may be personalized (subject to user consent) and are not designated as child-directed. In the Google Play Console, the target audience for **${name}** is set to ages 13 and above.`,
        "If you believe a child has provided data to us, please contact us at **{{contactEmail}}**, and we will delete it promptly.",
      ],
    },
    {
      title: "Global Privacy Rights (GDPR & CCPA/CPRA)",
      content: [
        "Depending on your country or state of residence, you enjoy fundamental privacy rights under data protection legislation including the European Union / United Kingdom General Data Protection Regulation (GDPR / UK GDPR) and California Consumer Privacy Act / California Privacy Rights Act (CCPA / CPRA):",
        "- **Right to Access & Information:** You have the right to know what data is collected and how it is processed.",
        '- **Right to Erasure ("Right to be Forgotten"):** You can erase all game data instantly via the in-game Settings or Android system settings.',
        "- **Right to Opt-Out of Data Sale & Sharing:** Coreplay Technologies does not sell or share personal data as defined by the CCPA/CPRA.",
        "- **Right to Restrict Processing:** Players can manage or revoke advertising personalization choices at any time via the in-game **Privacy options** dialog, or delete their Advertising ID via Android system settings.",
        "To submit a formal privacy inquiry or exercise statutory rights, contact our Data Protection Officer at **{{contactEmail}}**.",
      ],
    },
    {
      title: "Changes to this Privacy Policy",
      content: [
        'We may periodically revise this Privacy Policy to accommodate new game features, updated SDK guidelines, or evolving regulatory mandates. Any modifications will be posted here with an updated "Last Updated" timestamp at the top of this document.',
        "We encourage players to review this page periodically. Your continued gameplay following posted changes constitutes acceptance of the revised terms.",
      ],
    },
    {
      title: "Contact Us & Privacy Officer",
      content: [
        `If you have questions, feedback, or privacy-related inquiries regarding **${name}**, please contact our dedicated team:`,
        "- **Developer & Publisher:** Coreplay Technologies",
        "- **Privacy Officer Email:** {{contactEmail}}",
        `- **Google Play Game Listing:** ${playStoreLink}`,
        `- **Developer Profile:** [Coreplay Technologies on Google Play](${COMMON_DEV_PROFILE})`,
        "- **Response Timeframe:** All inquiries are acknowledged and addressed within 48 to 72 business hours.",
      ],
    },
  ];
}

/**
 * Creates an AppPrivacyPolicy object from a project entry using the count-master policy.
 */
export function buildPolicyFromProject(project: ProjectEntry): AppPrivacyPolicy {
  const shortName = project.name.split(":")[0].trim();
  const playStoreUrl = `https://play.google.com/store/apps/details?id=${project.packageName}`;

  return {
    slug: project.url,
    aliases: project.aliases || [],
    appName: project.name,
    shortName,
    packageId: project.packageName,
    category: "Mobile Game / Application",
    tagline: `Official privacy policy for ${project.name} published by Coreplay Technologies.`,
    heroDescription: `Official Privacy Policy for ${project.name} (${project.packageName}) published by Coreplay Technologies. Understand our privacy safeguards, general audience classification (13+), local-first on-device data persistence, Google AdMob monetization, Google UMP consent framework, and Firebase Analytics telemetry.`,
    badgeText: "General Audience (13+) • Local-First • Privacy-First",
    lastUpdated: COMMON_LAST_UPDATED,
    metaDescription: `Official Privacy Policy for ${project.name} (${project.packageName}) by Coreplay Technologies. Details game mechanics, general audience age policy, Google AdMob monetization, Firebase Analytics telemetry, Google UMP consent management, and local data storage.`,
    playStoreUrl,
    sections: generateCountMasterSections(project.name, project.packageName),
  };
}

/**
 * Registry built directly from projects.json
 */
export const APP_PRIVACY_POLICIES: Record<string, AppPrivacyPolicy> = {};

// Populate from projects.json
for (const project of PROJECTS) {
  APP_PRIVACY_POLICIES[project.url.toLowerCase()] = buildPolicyFromProject(project);
}

/**
 * Resolves an AppPrivacyPolicy for any given slug.
 * 1. Checks matching project in projects.json (by url, packageName, or alias)
 * 2. If not found in JSON, creates a dynamic project entry on the fly
 * All policies use the unified count-master privacy policy structure!
 */
export function getAppPrivacyPolicy(slug: string): AppPrivacyPolicy | undefined {
  if (!slug || typeof slug !== "string") {
    return undefined;
  }

  const normalized = slug.trim().toLowerCase();

  // 1. Direct URL match from projects.json
  if (APP_PRIVACY_POLICIES[normalized]) {
    return APP_PRIVACY_POLICIES[normalized];
  }

  // 2. Alias or PackageName match from projects.json
  for (const project of PROJECTS) {
    if (
      project.url.toLowerCase() === normalized ||
      project.packageName.toLowerCase() === normalized ||
      project.aliases?.some((a) => a.toLowerCase() === normalized)
    ) {
      return buildPolicyFromProject(project);
    }
  }

  // 3. Fallback: Dynamically generate for ANY new project on the fly
  if (!/^[a-zA-Z0-9_.-]+$/.test(normalized)) {
    return undefined;
  }

  const dynamicProject: ProjectEntry = {
    name: slugToTitle(slug),
    url: normalized,
    packageName: slugToPackageId(slug),
  };

  return buildPolicyFromProject(dynamicProject);
}

/**
 * Returns all configured app policies from projects.json for the directory cards.
 */
export function getAllAppPrivacyPolicies(): AppPrivacyPolicy[] {
  return PROJECTS.map(buildPolicyFromProject);
}

/**
 * Returns all canonical slugs from projects.json for static generation & sitemap.
 */
export function getAllAppSlugs(): string[] {
  return PROJECTS.map((p) => p.url);
}

/**
 * Returns all slugs and recognized aliases for pre-rendering static routes.
 */
export function getAllRouteSlugs(): string[] {
  const slugs: string[] = [];
  for (const project of PROJECTS) {
    slugs.push(project.url);
    if (project.aliases) {
      slugs.push(...project.aliases);
    }
  }
  return Array.from(new Set(slugs));
}
