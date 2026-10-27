export interface PolicySubsection {
  subtitle?: string;
  items?: string[];
  paragraphs?: string[];
}

export interface PolicySection {
  id: string;
  title: string;
  content: string[];
  subsections?: PolicySubsection[];
}

export const PRIVACY_POLICY_METADATA = {
  developerName: "Coreplay Technologies",
  contactEmail: "muhammadameen188d@gmail.com",
  liveReferenceUrl: "https://coreplay-site.netlify.app/privacy-policy",
  lastUpdated: "October 2026",
  title: "Official Privacy Policy",
};

export const PRIVACY_POLICY_SECTIONS: PolicySection[] = [
  {
    id: "scope-overview",
    title: "Scope & Overview",
    content: [
      "This Privacy Policy applies to all mobile games, mobile utility applications (including Dubai Modern Bus Simulator, ScanPro – QR & Barcode Scanner, TacTix – Tactical Board Games, RepeatIt – Text Repeater, and upcoming releases), digital products, and services published by Coreplay Technologies on Google Play.",
      "We believe in transparency and privacy-by-design: we minimize data collection, process sensitive operations (such as camera scanning, text styling, and tactical game logic) strictly on-device, and never harvest, sell, or monetize your personal files, gameplay history, or scan logs.",
    ],
  },
  {
    id: "permissions-hardware",
    title: "Device Permissions & Hardware Access",
    content: [
      "To deliver core utility and gaming capabilities, our applications may request access to specific Android device hardware and system features:",
      "- Camera Access (android.permission.CAMERA): Used exclusively in scanner utilities (such as ScanPro) to provide a real-time viewfinder for scanning QR codes and 1D/2D barcodes using Google ML Kit. Zero Cloud Transmission: Video frames and images are analyzed strictly in real-time in device RAM and never uploaded to remote servers.",
      "- Flashlight (android.permission.FLASHLIGHT): Used optionally to illuminate barcodes in low-light environments.",
      "- Photos & File Storage (READ_MEDIA_IMAGES / Filesystem): Used only when you choose to scan an existing QR code or barcode from your photo gallery, or when you explicitly export your scan history logs (CSV/TXT) or save generated QR codes locally.",
      "- System Clipboard Access: Enables you to copy decoded barcode data to your clipboard or paste text to generate custom QR codes or repeated text. Clipboard data is processed locally.",
      "- Haptic Feedback & Vibration (VIBRATE): Used in tactical board games (such as TacTix) to provide tactile vibration confirmation on marker placement and win lines, and in utility tools (such as ScanPro and RepeatIt) upon button actions or barcode detection.",
      "- Network & Internet State (INTERNET, ACCESS_NETWORK_STATE): Used in online or ad-supported releases to deliver advertisements via verified ad networks, check license verification via Google Play, and open external web links in your preferred browser when you tap on a scanned URL. Standalone offline titles like TacTix do not make external network requests.",
      "- Zero Invasive Permissions in Standalone Titles: Standalone games such as TacTix request zero sensitive device permissions (no camera, microphone, contacts, precise location, or external media library access).",
    ],
  },
  {
    id: "information-collection-and-use",
    title: "Information Collection and Use",
    content: [
      "When you download, install, and interact with our applications and games, certain technical and diagnostic data may be automatically collected:",
      "- Device Technical Identifiers: Device model, manufacturer, Android OS version, system language, and memory statistics.",
      "- Diagnostic & Performance Data: Session timestamps, duration, crash logs, and stability metrics.",
      "- Advertising Identifiers: Non-permanent device identifiers such as the Google Advertising ID (GAID).",
      "- Approximate Geographic Location: Coarse location derived from IP address (country or metropolitan area) for regional ad compliance. We do not collect precise GPS coordinates.",
      "- Local User Content & History: In our utility tools and board games (such as ScanPro, TacTix, and RepeatIt), user content, scan histories, custom player preferences, win streaks, match replays, and text repeats are stored strictly locally on your device (via local app preferences). They are never synced to our servers without your explicit action, never transmitted externally, and never accessible to third parties.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services & SDK Integrations",
    content: [
      "Our applications and games integrate trusted third-party Software Development Kits (SDKs) to provide OS connectivity, on-device machine learning, ad monetization, and stability:",
      "- Google Play Services (Google LLC): Essential for Android distribution, security, and OS integration.",
      "- Google AdMob & Mobile Ads SDK (Google LLC): Delivers banner, interstitial, and rewarded advertisements.",
      "- Google ML Kit (Google LLC): Powers on-device computer vision for barcode and QR code recognition locally.",
      "- Unity Technologies (Unity Ads & Engine): Provides 3D graphics rendering, realistic physics, and in-game ads.",
      "- Firebase & Crashlytics (Google LLC): Aggregated crash analytics and performance monitoring.",
      "- Standalone Offline Titles (TacTix): Certain applications published by Coreplay Technologies, including TacTix, operate as 100% standalone, offline games. They do not integrate third-party advertising SDKs, analytics tracking libraries, or remote cloud databases.",
    ],
  },
  {
    id: "advertising-choices",
    title: "Managing Advertising Choices & Advertising ID",
    content: [
      "Our free mobile games and utility apps may display advertisements powered by Google AdMob. You have complete control over personalized advertising through Android settings:",
      "- Reset Advertising ID: Open Settings > Google > Ads > Reset advertising ID.",
      "- Delete Advertising ID: On modern Android versions, open Settings > Google > Ads > Delete advertising ID.",
      "- Opt-Out of Personalized Ads: Toggle Opt out of Ads Personalization in your Google settings.",
      "- Ad-Free Standalone Titles: In our 100% ad-free titles (such as TacTix), advertising identifiers (GAID) are neither accessed nor processed.",
    ],
  },
  {
    id: "in-app-purchases",
    title: "In-App Purchases & Financial Data",
    content: [
      "All payment transactions are handled exclusively through Google Play In-App Billing.",
      "Coreplay Technologies does not collect, receive, or store your credit card numbers, bank account information, or billing address.",
    ],
  },
  {
    id: "data-retention-deletion",
    title: "Data Retention & User Data Deletion Rights",
    content: [
      "In compliance with Google Play Store Developer Policies, we provide clear procedures for managing and deleting your data:",
      "- Local Data Erasure: You can permanently delete your history, saved statistics, and cached preferences instantly at any time from within the app (such as Settings > Clear History in ScanPro, or Settings > Reset All Statistics & Match History in TacTix) or through Android system settings.",
      "- Account & Server Data Deletion Request: Send an email to muhammadameen188d@gmail.com with the subject line [Data Deletion Request]. We complete all deletion requests within 30 days.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy & Families Policy",
    content: [
      "Coreplay Technologies complies with COPPA, GDPR-K, and Google Play Families Policies. Our apps and games are designed for general audiences and do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    id: "global-privacy-rights",
    title: "Your Global Privacy Rights (GDPR & CCPA/CPRA)",
    content: [
      "EEA & UK Users (GDPR): Rights to access, rectification, erasure, restriction, and portability.",
      "California Residents (CCPA / CPRA): Right to know, right to delete, and right to non-discrimination. We do not sell personal information.",
    ],
  },
  {
    id: "offline-functionality",
    title: "Offline Functionality & Privacy by Design",
    content: [
      "Our utility applications (such as ScanPro and RepeatIt) and standalone board games (such as TacTix) are designed to operate independently of an active internet connection whenever possible.",
      "All tactical board game engines (including TacTix minimax AI decision-making, move replay review, and streak calculations), barcode decoding, and text formatting execute entirely locally on your device hardware without requiring an internet connection. Your data remains your private property on your physical device.",
    ],
  },
  {
    id: "security",
    title: "Data Security",
    content: [
      "We implement industry-standard safeguards. All communication with third-party service providers is encrypted in transit using TLS/HTTPS.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this Privacy Policy",
    content: [
      "We may update our Privacy Policy periodically. We will notify you by updating the Last Updated date on this page.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: [
      "Contact our Privacy Team via email at muhammadameen188d@gmail.com.",
    ],
  },
];
