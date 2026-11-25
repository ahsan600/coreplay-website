import { SITE } from "./site";

/**
 * THE privacy policy template. Every sentence that is the same for all Coreplay apps (AdMob, UMP consent,
 * Firebase, Data safety, permissions added by Google libraries, deletion, rights, contact) is written ONCE here.
 *
 * An app's policy = this template + the app's own entry in src/data/projects.json.
 * To add a new app/game, add an entry to projects.json — nothing in this file needs to change.
 *
 * Markdown supported by the renderer: "- " bullets, **bold** and [label](url). (No backticks.)
 */

export interface PolicySection {
  title: string;
  content: string[];
}

export type AppType = "game" | "app";

/** Sensitive permission groups. Anything an app does not declare is listed as "not requested". */
export type SensitiveAccess =
  | "camera"
  | "microphone"
  | "location"
  | "contacts"
  | "photos"
  | "calendar"
  | "sms"
  | "callLogs";

const SENSITIVE_LABELS: Record<SensitiveAccess, string> = {
  camera: "camera",
  microphone: "microphone",
  location: "location",
  contacts: "contacts",
  photos: "photo library",
  calendar: "calendar",
  sms: "SMS messages",
  callLogs: "call logs",
};

export interface AppPermission {
  /** Shown name, e.g. "Camera". */
  name: string;
  /** Android permission(s), e.g. "android.permission.CAMERA". */
  id: string;
  /** Why the app needs it. */
  use: string;
  /** Set when the permission gives access to one of the sensitive groups above. */
  sensitive?: SensitiveAccess;
}

export interface AppService {
  name: string;
  use: string;
  url: string;
}

/** One entry of src/data/projects.json. Only name/url/packageName are required. */
export interface ProjectEntry {
  name: string;
  url: string;
  packageName: string;
  aliases?: string[];
  /** Default "game". */
  type?: AppType;
  /** Short label shown on the policy cards, e.g. "Puzzle Game". */
  category?: string;
  /** Finishes the sentence "<App> (package …), ____, developed by …". E.g. "a 3D crowd runner game". */
  summary?: string;
  /** Feature bullets (without the leading "- "). Omit on a game to use the standard game bullets. */
  features?: string[];
  /** Permissions beyond the standard set that every app has. */
  permissions?: AppPermission[];
  /** What is stored on the device and how to delete it (bullets without "- "). Omit on a game to use the default. */
  storage?: string[];
  /** Third-party services beyond Google Play, AdMob, UMP and Firebase. */
  services?: AppService[];
  /** true when Firebase Crashlytics is integrated. */
  crashlytics?: boolean;
  /** Extra "not collected" notes for the Data safety section (without "- "). */
  dataSafety?: string[];
}

// ---------------------------------------------------------------------------------------------------------
// Shared text blocks
// ---------------------------------------------------------------------------------------------------------

const GOOGLE_PRIVACY = "[Google Privacy Policy](https://policies.google.com/privacy)";
const GOOGLE_PARTNER_DATA = "[How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites)";

/** Permissions that every Coreplay app gets from Capacitor, AdMob, UMP and Firebase (checked in merged manifests). */
const STANDARD_PERMISSIONS = [
  "**Internet & Network State (android.permission.INTERNET, android.permission.ACCESS_NETWORK_STATE):** Used to load ads, show the privacy consent form, send anonymous analytics and open links you tap.",
  "**Vibration (android.permission.VIBRATE):** Short haptic feedback on taps. You can switch it off in the app's Settings where offered.",
  "**Advertising ID (com.google.android.gms.permission.AD_ID):** Lets Google AdMob read your device's advertising ID to show and measure ads. You can reset or delete it in Android settings (**Settings > Google > Ads**).",
  "**Android Privacy Sandbox (ACCESS_ADSERVICES_AD_ID, ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS):** Privacy-preserving ad measurement APIs used by the Google Mobile Ads SDK.",
  "**Install Referrer, Wake Lock & Foreground Service (BIND_GET_INSTALL_REFERRER_SERVICE, WAKE_LOCK, FOREGROUND_SERVICE):** Added by the Google Play services, AdMob and Firebase libraries for install attribution and reliable delivery of analytics data. The app does not run a visible background service.",
];

/**
 * Mirrors the Google Play Data safety form, which is the same for every Coreplay app:
 * 5 data types, each collected AND shared, required (not optional), not ephemeral, encrypted in transit,
 * no account creation, deletion requests supported.
 */
const DATA_SAFETY_TYPES = [
  "**Location — Approximate location:** Derived by Google from your IP address. Collected and shared for analytics and advertising.",
  "**App info and performance — Crash logs:** Collected and shared for analytics.",
  "**App info and performance — Diagnostics:** Device model, OS version and similar technical data. Collected and shared for analytics and advertising.",
  "**App activity — App interactions:** For example screens opened, levels played and ads viewed. Collected and shared for analytics and advertising.",
  "**Device or other IDs:** The advertising ID and the Firebase app instance ID. Collected and shared for analytics and advertising.",
];

const DATA_SAFETY_FOOTER = [
  "**Shared with:** Google LLC (AdMob and Firebase), which processes this data for us and for ad delivery.",
  "**Required:** This data is collected automatically while you use the app. You can limit ad personalisation through the consent form, **Settings > Privacy options** and Android's ad settings.",
  "**Encrypted in transit:** Yes, all data is sent over HTTPS/TLS.",
  "**Accounts:** You cannot create an account, so no account data exists.",
  "**Deletion:** You can request deletion of your data (see **How to Delete Your Data** below).",
  "**Not collected:** Name, email, phone number, precise location, contacts, messages, photos, videos, audio, files, calendar, payment details, or what you create in the app.",
];

const GAME_FEATURES = [
  "**Plays offline:** Levels work without an internet connection. A connection is only used for ads, the consent form and anonymous analytics.",
  "**Screen stays on while you play,** so your device does not go to sleep in the middle of a level.",
];

const GAME_STORAGE = [
  "**Game progress & settings:** Your level, any coins or unlocked items, and your settings (sound, music, vibration) are saved on your device with on-device preferences. Use **Settings > Reset progress** in the game, or clear the app's storage in Android settings, to delete them.",
];

function list(items: string[]): string[] {
  return items.map((item) => `- ${item}`);
}

function joinWithOr(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} or ${items[items.length - 1]}`;
}

function playStoreLink(name: string, packageName: string): string {
  return `[${name} on Google Play](https://play.google.com/store/apps/details?id=${packageName})`;
}

function firebaseServices(crashlytics: boolean | "some"): string {
  if (crashlytics === true) {
    return "**Google Firebase Analytics & Crashlytics (Google LLC):** Anonymous usage statistics and crash reports. [Firebase Privacy](https://firebase.google.com/support/privacy)";
  }
  if (crashlytics === "some") {
    return "**Google Firebase Analytics (Google LLC)** and, in some apps, **Firebase Crashlytics**: Anonymous usage statistics and crash reports. [Firebase Privacy](https://firebase.google.com/support/privacy)";
  }
  return "**Google Firebase Analytics (Google LLC):** Anonymous usage statistics. [Firebase Privacy](https://firebase.google.com/support/privacy)";
}

function collectSection(contentLine: string, crashlytics: boolean | "some"): PolicySection {
  return {
    title: "Information We Collect",
    content: [
      "We collect as little as possible:",
      ...list([
        "**No personal information:** We do not ask for or collect your name, email address, phone number or any login.",
        contentLine,
        "**Advertising data (Google AdMob):** The advertising ID, IP address (from which an approximate location is derived), ad interactions and crash/diagnostic data are processed by Google to show and measure ads, according to your consent choices.",
        "**Anonymous usage statistics (Firebase Analytics):** Events such as app opens, screens viewed, levels played and feature use, together with device model and Android version.",
        ...(crashlytics === true
          ? ["**Crash reports (Firebase Crashlytics):** Technical details of a crash (stack trace, device model, OS version) so we can fix problems."]
          : crashlytics === "some"
            ? ["**Crash reports (Firebase Crashlytics, some apps):** Technical details of a crash so we can fix problems."]
            : []),
      ]),
    ],
  };
}

function thirdPartySection(crashlytics: boolean | "some", extra: AppService[] = []): PolicySection {
  return {
    title: "Third-Party Services",
    content: [
      "We use the following services. Each one processes data under its own privacy policy:",
      ...list([
        `**Google Play Services (Google LLC):** App distribution and platform services. ${GOOGLE_PRIVACY}`,
        `**Google AdMob (Google LLC):** Shows the ads that keep our apps free. ${GOOGLE_PARTNER_DATA}`,
        "**Google User Messaging Platform (Google LLC):** Shows the consent message where the law requires it (IAB TCF v2.2 in the EEA, UK and Switzerland, and US state privacy laws). [UMP Overview](https://developers.google.com/admob/android/privacy)",
        firebaseServices(crashlytics),
        ...extra.map((s) => `**${s.name}:** ${s.use} [Privacy policy](${s.url})`),
      ]),
    ],
  };
}

/** The disclosure AdMob and the EU User Consent Policy require. Same for every app; ad formats/placements are not required. */
function advertisingSection(subject: string, plural: boolean): PolicySection {
  return {
    title: "Advertising",
    content: [
      `${subject} ${plural ? "are" : "is"} free and ${plural ? "show" : "shows"} ads from Google AdMob. Google and its advertising partners use the advertising ID, IP address, and app interaction and diagnostic data to show ads, measure them and limit how often you see the same ad.`,
      ...list([
        "**Your consent:** Where required by law (EEA, UK, Switzerland and certain US states) you are asked before personalised ads are shown. You can change your choice at any time from **Settings > Privacy options** in the app (shown where applicable). If you decline, you may still see non-personalised ads.",
        "**Advertising ID controls:** Reset or delete your advertising ID, or opt out of ad personalisation, in Android settings (**Settings > Google > Ads**).",
        `**More information:** ${GOOGLE_PARTNER_DATA}.`,
      ]),
    ],
  };
}

function dataSafetySection(extra: string[] = []): PolicySection {
  return {
    title: "Google Play Data Safety",
    content: [
      "This matches the Data safety section of our Google Play listing. These data types are collected and shared:",
      ...list(DATA_SAFETY_TYPES),
      ...list([...DATA_SAFETY_FOOTER, ...extra]),
    ],
  };
}

function deletionSection(subject: string, appName = "[app name]"): PolicySection {
  return {
    title: "How to Delete Your Data",
    content: [
      `You can delete your data from ${subject} at any time:`,
      ...list([
        `**Data on your device:** Use the reset or clear options in the app's Settings, or go to **Android Settings > Apps > ${appName} > Storage > Clear data**. Uninstalling the app also deletes it. This is immediate and permanent.`,
        "**Analytics and crash data held by Google for us:** Email **{{contactEmail}}** with the subject \"Delete my data\" and the name of the app. We will delete the analytics data linked to your device that we can identify and reply within 30 days.",
        "**Retention:** Analytics data that is not deleted on request is removed automatically when Firebase's retention period ends (14 months at most).",
        `**Advertising data:** Google holds this under its own policy. Reset or delete your advertising ID in **Settings > Google > Ads** to unlink past ad activity. ${GOOGLE_PRIVACY}`,
      ]),
    ],
  };
}

function closingSections(subject: string, plural: boolean, contactLines: string[]): PolicySection[] {
  const has = plural ? "have" : "has";
  const is = plural ? "are" : "is";
  return [
    {
      title: "In-App Purchases",
      content: [`${subject} ${has} no in-app purchases or subscriptions. We never collect payment or card details.`],
    },
    {
      title: "Children's Privacy",
      content: [
        `${subject} ${is} intended for a general audience (13+) and not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided information to us, contact **{{contactEmail}}** and we will delete it.`,
      ],
    },
    {
      title: "Your Privacy Rights (GDPR, UK GDPR, CCPA/CPRA)",
      content: [
        "Depending on where you live, you may have the right to access, correct or delete your personal data, to restrict or object to its processing, and to withdraw consent at any time.",
        ...list([
          "**Withdraw or change consent:** Use **Settings > Privacy options** in the app (where shown).",
          "**Sale/sharing:** We do not sell personal information. Advertising data is processed by Google as described above; you can limit it through your consent choices and Android ad settings.",
          "**Requests:** Email **{{contactEmail}}**. We respond within 30 days.",
        ]),
      ],
    },
    {
      title: "Security",
      content: [
        "Data saved by the app stays on your device, protected by Android's app sandbox. Communication with Google services is encrypted in transit (HTTPS/TLS).",
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        'We may update this policy when our apps or the law change. The "Last updated" date at the top shows the current version. Continued use after an update means you accept the revised policy.',
      ],
    },
    {
      title: "Contact Us",
      content: [
        "Questions or requests about privacy? Contact us:",
        ...list([
          `**Developer:** ${SITE.developer}`,
          "**Email:** {{contactEmail}}",
          ...contactLines,
          `**All our apps:** [${SITE.developer} on Google Play](${SITE.devProfileUrl})`,
        ]),
      ],
    },
  ];
}

// ---------------------------------------------------------------------------------------------------------
// Per-app policy
// ---------------------------------------------------------------------------------------------------------

export function buildAppSections(app: ProjectEntry): PolicySection[] {
  const isGame = (app.type ?? "game") === "game";
  const noun = isGame ? "game" : "app";
  const N = `**${app.name}**`;
  const crashlytics = app.crashlytics === true;
  const permissions = app.permissions ?? [];

  const granted = new Set(permissions.map((p) => p.sensitive).filter(Boolean));
  const notRequested = (Object.keys(SENSITIVE_LABELS) as SensitiveAccess[])
    .filter((k) => !granted.has(k))
    .map((k) => SENSITIVE_LABELS[k]);

  const features = [
    ...(app.features ?? (isGame ? GAME_FEATURES : [])),
    "**No account:** No sign-up, login or personal profile is ever required.",
  ];

  return [
    {
      title: "Scope & Overview",
      content: [
        `This Privacy Policy applies to ${N} (package name: ${app.packageName})${app.summary ? `, ${app.summary},` : ""} developed and published by **${SITE.developer}** ("we", "our", or "us") on Google Play.`,
        `It explains what information the ${noun} handles, which device permissions it uses and why, which third-party services it relies on, and the choices you have.`,
      ],
    },
    {
      title: isGame ? "How the Game Works" : "Features & On-Device Processing",
      content: [`${N} keeps your ${isGame ? "progress" : "content"} on your device:`, ...list(features)],
    },
    collectSection(
      isGame
        ? "**Your progress stays on your device:** We do not receive your saves, scores or settings."
        : "**Your content stays on your device:** We do not receive the content you create or type in the app.",
      crashlytics,
    ),
    {
      title: "Device Permissions",
      content: [
        `${N} uses these Android permissions:`,
        ...list([
          ...permissions.map((p) => `**${p.name} (${p.id}):** ${p.use}`),
          ...STANDARD_PERMISSIONS,
          `**Not requested:** The ${noun} does not request access to your ${joinWithOr(notRequested)}.`,
        ]),
      ],
    },
    {
      title: "Data Stored on Your Device",
      content: [
        "What the app saves stays on your device and under your control:",
        ...list([
          ...(app.storage ?? (isGame ? GAME_STORAGE : [])),
          "**No cloud copy:** We run no servers or accounts that hold your data.",
          `**Uninstalling** the ${noun} deletes all of its local data.`,
        ]),
      ],
    },
    thirdPartySection(crashlytics, app.services),
    advertisingSection(N, false),
    dataSafetySection(app.dataSafety),
    deletionSection(N, app.name.split(":")[0].trim()),
    ...closingSections(N, false, [`**Google Play:** ${playStoreLink(app.name, app.packageName)}`]),
  ];
}

// ---------------------------------------------------------------------------------------------------------
// Universal (portfolio) policy — generated from the same blocks + every app in projects.json
// ---------------------------------------------------------------------------------------------------------

export function buildUniversalSections(apps: ProjectEntry[]): PolicySection[] {
  const crashlytics = apps.some((a) => a.crashlytics) ? (apps.every((a) => a.crashlytics) ? true : "some") : false;

  const extraPermissions = apps.flatMap((app) =>
    (app.permissions ?? []).map((p) => `**${p.name} (${p.id}) — ${app.name.split(":")[0].trim()} only:** ${p.use}`),
  );
  const extraServices = apps.flatMap((a) => a.services ?? []).filter((s, i, arr) => arr.findIndex((x) => x.name === s.name) === i);

  return [
    {
      title: "Scope",
      content: [
        `This Universal Privacy Policy applies to every game and app published by **${SITE.developer}** ("we", "our", or "us") on Google Play. Each app also has its own policy, listed below on this page, with its exact features and permissions.`,
        "All our apps share the same privacy approach: no accounts, your data stays on your device, and the third-party services are Google's (Play, AdMob, the consent platform and Firebase), plus any optional service named in an app's own policy.",
      ],
    },
    collectSection("**Your content and progress stay on your device:** We do not receive your game saves, tasks, scans or text.", crashlytics),
    {
      title: "Device Permissions",
      content: [
        "Every app uses this standard set of Android permissions:",
        ...list(STANDARD_PERMISSIONS),
        ...(extraPermissions.length
          ? ["Some apps need one more permission for a feature. They are requested only in that app:", ...list(extraPermissions)]
          : []),
        "No app requests your microphone, contacts, call logs, SMS or calendar.",
      ],
    },
    {
      title: "Data Stored on Your Device",
      content: list([
        "**On-device only:** Game progress, settings, history, favourites and tasks are saved in the app's private storage on your device.",
        "**No cloud copy:** We run no servers or accounts that hold your data.",
        "**Deleting it:** Use the reset/clear options inside each app, clear the app's storage in Android settings, or uninstall the app.",
      ]),
    },
    thirdPartySection(crashlytics, extraServices),
    advertisingSection("Our apps and games", true),
    dataSafetySection(),
    deletionSection("our apps and games"),
    ...closingSections("Our apps and games", true, []),
  ];
}
