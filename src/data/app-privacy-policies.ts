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

export const COMMON_CONTACT_EMAIL = "muhammadameen188d@gmail.com";
export const COMMON_DEVELOPER_NAME = "Coreplay Technologies";
export const COMMON_DEV_PROFILE = "https://play.google.com/store/apps/dev?id=6807992577867877190";
export const COMMON_LAST_UPDATED = "October 2026";

export const APP_PRIVACY_POLICIES: Record<string, AppPrivacyPolicy> = {
  "text-repeater": {
    slug: "text-repeater",
    aliases: ["repeatit", "repeat-it", "textrepeater"],
    appName: "RepeatIt – Text Repeater",
    shortName: "RepeatIt",
    packageId: "com.coreplay.textrepeater",
    category: "Utility & Text Styling",
    tagline: "Multiply text up to 10,000 times with custom separators, stylish Unicode fonts, and 100% on-device privacy.",
    heroDescription:
      "Official Privacy Policy for RepeatIt – Text Repeater (com.coreplay.textrepeater) published by Coreplay Technologies. Understand how RepeatIt operates with 100% on-device processing, zero ad networks, and zero personal data collection.",
    badgeText: "100% Offline • Ad-Free • Local Processing",
    lastUpdated: COMMON_LAST_UPDATED,
    metaDescription:
      "Official Privacy Policy for RepeatIt – Text Repeater by Coreplay Technologies. Details 100% on-device processing, zero personal data collection, clipboard usage, and ad-free architecture.",
    playStoreUrl: COMMON_DEV_PROFILE,
    sections: [
      {
        title: "Scope & Overview",
        content: [
          "This Privacy Policy applies specifically to **RepeatIt – Text Repeater** (package name: `com.coreplay.textrepeater`), developed, published, and maintained by **Coreplay Technologies** (\"we\", \"our\", or \"us\") on Google Play and authorized Android marketplaces.",
          "RepeatIt is engineered around a strict privacy-by-design architecture: all text repetition, Unicode font stylings, and custom separator configurations execute exclusively on your local device. We never harvest, log, transmit, or monetize your generated text, clipboard contents, or device information.",
        ],
      },
      {
        title: "Application Features & Intended Use",
        content: [
          "RepeatIt is a lightweight utility designed for personal messaging, creative text styling, and productivity. Key features include:",
          "- **High-Speed Text Repetition:** Multiply any word, phrase, emoji, or sentence up to 10,000 times in milliseconds.",
          "- **Custom Separators & Formatting:** Configure newlines, spaces, custom characters, line numbering, and prefix/suffix formatting.",
          "- **Unicode Font Stylization:** Transform plain text into stylish fonts including Bold, Italic, Cursive, Monospace, and decorative artistic styles.",
          "- **Emoticon Art & Templates:** Quick-insert pre-designed text faces, ASCII art, and status templates.",
          "- **One-Tap Clipboard Copy & Share:** Seamlessly copy your generated text or share directly to your favorite messaging and social applications.",
        ],
      },
      {
        title: "Information Collection & Processing",
        content: [
          "We believe in absolute data minimization. When you use RepeatIt:",
          "- **Zero Personal Information Collected:** We do not collect names, email addresses, phone numbers, postal addresses, or government identifiers.",
          "- **No Account Registration or Sign-In:** RepeatIt requires no account creation, passwords, social logins, or cloud synchronization. You use the app entirely anonymously.",
          "- **No Content Telemetry:** The text, phrases, emojis, and symbols you type or repeat are processed strictly in your device's volatile memory and local state. We have no access to your text content.",
          "- **No Diagnostic Profiling:** We do not track keystrokes, typing frequency, or behavioral patterns.",
        ],
      },
      {
        title: "Device Permissions & Hardware Access",
        content: [
          "RepeatIt requests minimal permissions strictly necessary for user-initiated utility functions:",
          "- **Network & Internet State (android.permission.INTERNET):** Declared by the standard Android application container to allow opening external web links (such as this official Privacy Policy or support correspondence) when you voluntarily tap an external link in your preferred browser. RepeatIt does not make background network calls, transfer text over the internet, or contact remote tracking servers.",
          "- **Haptic Feedback & Vibration (android.permission.VIBRATE):** Delivers brief tactile feedback upon button clicks, style selections, and text generation confirmations to provide an ergonomic user experience.",
          "- **System Clipboard Access:** Enables you to paste text into RepeatIt for repetition or copy generated text to your device clipboard with a single tap. Clipboard reading and writing are initiated solely by your explicit tap and are handled strictly on-device.",
          "- **Native Android Share Sheet:** Allows you to forward repeated text to external applications (such as WhatsApp, Telegram, or SMS) using Android's native sharing dialog. Data is passed directly to the app you select without passing through any external servers.",
          "- **Zero Invasive Permissions:** RepeatIt requests zero sensitive device permissions. The app does not access your camera, microphone, device storage files, contact list, biometric hardware, or GPS location.",
        ],
      },
      {
        title: "Local Storage & Data Transmission",
        content: [
          "RepeatIt operates on a 100% local-first model:",
          "- **Local Persistence:** Repetition history logs and app preferences (such as dark/light theme and custom separator selections) are stored strictly locally on your device using `@capacitor/preferences` and device storage.",
          "- **Zero Cloud Transmission:** No text records, history logs, or configuration settings are ever synchronized with external cloud databases or transferred across network connections.",
          "- **Complete User Sovereignty:** Your generated text and history logs exist solely within your physical phone's application sandbox.",
        ],
      },
      {
        title: "Third-Party Services & SDK Integrations",
        content: [
          "RepeatIt does not integrate third-party data-gathering SDKs:",
          "- **No Analytics Tracking:** RepeatIt does not integrate Google Analytics, Firebase Analytics, Crashlytics, or behavioral tracking SDKs.",
          "- **No Remote Databases:** The application does not communicate with cloud storage engines, Firebase Firestore, AWS, or external APIs.",
          "- **Google Play Services:** Standard Google Play distribution and licensing verification apply through Google Play Store infrastructure in accordance with the [Google Privacy Policy](https://policies.google.com/privacy).",
        ],
      },
      {
        title: "Advertising, Analytics & Tracking Choices",
        content: [
          "RepeatIt is a **100% ad-free** application:",
          "- **No Ad Networks:** RepeatIt does not integrate Google AdMob, Unity Ads, AppLovin, or any commercial advertising networks.",
          "- **No Advertising Identifiers (GAID):** The app does not request, read, or process your Android Google Advertising ID.",
          "- **No Cross-App Tracking:** RepeatIt does not monitor your activity across other applications or websites.",
        ],
      },
      {
        title: "Data Sharing & Disclosure Policy",
        content: [
          "Coreplay Technologies **does not sell, rent, trade, or share** your personal information or generated content with third parties, advertisers, or data brokers under any circumstances.",
          "Because RepeatIt collects no personal data and transmits no information to external servers, there is no personal data available to disclose, monetize, or transfer.",
        ],
      },
      {
        title: "Data Retention & User Deletion Rights",
        content: [
          "You have direct, immediate control over all data stored on your device:",
          "- **In-App History Erasure:** You can clear your repetition history at any time from within the app by opening the History screen and tapping Clear.",
          "- **Complete Data Wipe:** You can permanently wipe all locally stored preferences and history at any time through your Android system settings (**Settings > Apps > RepeatIt > Storage > Clear Data**).",
          "- **Uninstall Deletion:** Uninstalling RepeatIt permanently deletes the application sandbox and all associated local data from your device.",
        ],
      },
      {
        title: "Data Security Safeguards",
        content: [
          "We prioritize data security by eliminating unnecessary risk surfaces:",
          "- **Local Processing:** By keeping all text operations local to your phone's processor, your content is never exposed to network interception, transit vulnerabilities, or cloud breaches.",
          "- **Sandbox Isolation:** Android's operating system sandbox protects RepeatIt's local storage from unauthorized access by other installed applications.",
          "- **Secure External Connections:** If you tap a link to visit our website or contact support, all communications utilize industry-standard Transport Layer Security (TLS/HTTPS).",
        ],
      },
      {
        title: "Children's Privacy & Families Policy",
        content: [
          "RepeatIt is a safe, general-audience text utility designed for users of all ages. Coreplay Technologies strictly complies with the **Children's Online Privacy Protection Act (COPPA)**, GDPR-K, and Google Play Families Policies.",
          "We do not knowingly collect, request, or retain personal information from children under 13 years of age (or under 16 in the European Economic Area). Because the application collects no personal data from any user, children can safely use RepeatIt without privacy risks.",
        ],
      },
      {
        title: "Global Privacy Rights (GDPR & CCPA/CPRA)",
        content: [
          "Regardless of your geographical location, you hold legal rights regarding your personal information under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA/CPRA):",
          "- **Right to Access & Portability:** You have full access to your local history directly inside the app.",
          "- **Right to Erasure (\"Right to be Forgotten\"):** You can erase all data instantly via the app or Android settings.",
          "- **\"Do Not Sell My Personal Information\":** Coreplay Technologies **does not sell or share** personal information.",
          "If you have inquiries regarding your privacy rights, contact our Privacy Officer directly at **{{contactEmail}}**.",
        ],
      },
      {
        title: "Changes to this Privacy Policy",
        content: [
          "We may periodically revise this Privacy Policy to reflect application updates, platform requirements, or statutory changes. Any modifications will be indicated by updating the \"Last Updated\" date at the top of this document.",
          "We encourage you to review this policy periodically. Continued use of RepeatIt following policy updates signifies your agreement to the updated terms.",
        ],
      },
      {
        title: "Contact Us & Privacy Officer",
        content: [
          "If you have questions, feedback, or privacy inquiries regarding RepeatIt – Text Repeater, please contact our team:",
          "- **Developer & Publisher:** Coreplay Technologies",
          "- **Privacy Officer Email:** {{contactEmail}}",
          "- **Google Play Developer Page:** [Coreplay Technologies on Google Play](https://play.google.com/store/apps/dev?id=6807992577867877190)",
          "- **Response Timeframe:** All inquiries are acknowledged and addressed within 48 to 72 business hours.",
        ],
      },
    ],
  },

  "todo-list": {
    slug: "todo-list",
    aliases: ["taskflow", "schedule-planner", "daily-planner", "task-flow"],
    appName: "TaskFlow: To-Do List & Planner",
    shortName: "TaskFlow",
    packageId: "com.coreplay.todolist",
    category: "Productivity & Schedule Planning",
    tagline: "Smart daily planning, task scheduling, category organization, and local reminders with zero-cloud privacy.",
    heroDescription:
      "Official Privacy Policy for TaskFlow: To-Do List & Planner (com.coreplay.todolist) published by Coreplay Technologies. Learn how your tasks, schedules, and reminders remain 100% on-device with zero ads and zero cloud tracking.",
    badgeText: "100% Offline • Local Reminders • Ad-Free",
    lastUpdated: COMMON_LAST_UPDATED,
    metaDescription:
      "Official Privacy Policy for TaskFlow: To-Do List & Planner by Coreplay Technologies. Explains local notification scheduling, on-device data storage, zero ad tracking, and backup options.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.todolist",
    sections: [
      {
        title: "Scope & Overview",
        content: [
          "This Privacy Policy applies specifically to **TaskFlow: To-Do List & Planner** (package name: `com.coreplay.todolist`), developed, published, and maintained by **Coreplay Technologies** (\"we\", \"our\", or \"us\") on Google Play and authorized Android marketplaces.",
          "TaskFlow is built on the core principle of personal data sovereignty. We believe your schedules, daily to-do lists, private notes, and deadline reminders belong exclusively to you. All task planning, category organization, reminder calculations, and data persistence execute strictly on your device without cloud synchronization.",
        ],
      },
      {
        title: "Application Features & Intended Use",
        content: [
          "TaskFlow is a comprehensive daily productivity and schedule management utility. Key features include:",
          "- **Task & Checklist Management:** Create, edit, prioritize, and check off daily tasks, subtasks, and to-do items.",
          "- **Custom Categories & Color Tagging:** Organize tasks into custom categories (Work, Personal, Fitness, Study, Shopping) with color accents.",
          "- **Local Schedule Reminders:** Schedule time-based reminder notifications and focus alerts for critical deadlines.",
          "- **Interactive Calendar View:** Review daily and monthly task distributions and completion streaks.",
          "- **Trash Bin Recovery:** Safely review, restore, or permanently delete completed and archived tasks.",
          "- **Offline Backup & Restore:** Export your complete task database to a portable JSON file and restore without cloud intervention.",
        ],
      },
      {
        title: "Information Collection & Processing",
        content: [
          "TaskFlow is built with complete privacy and anonymity:",
          "- **Zero Personal Data Collected:** We do not collect names, email addresses, phone numbers, or account credentials.",
          "- **No Account Registration or Sign-In:** TaskFlow requires no signup, user profiles, passwords, or cloud sync. You remain completely anonymous.",
          "- **On-Device Content Processing:** Your task titles, notes, subtask checklists, deadlines, and category tags are stored strictly in your device's local memory. We never access, read, transmit, or monetize your schedule data.",
          "- **No Behavioral Tracking:** We do not track when you complete tasks, what categories you create, or how often you open the application.",
        ],
      },
      {
        title: "Device Permissions & Hardware Access",
        content: [
          "To provide reliable schedule reminders and productivity tools, TaskFlow requests specific Android system permissions:",
          "- **Post Notifications (android.permission.POST_NOTIFICATIONS):** Requested on Android 13+ to deliver user-scheduled task reminder alerts, deadline notices, and focus prompts. Notifications are generated strictly by local on-device alarm managers. Users can configure reminder preferences or toggle notifications off at any time within **Settings > Task Reminders**.",
          "- **Boot Completed (android.permission.RECEIVE_BOOT_COMPLETED):** Enables TaskFlow to restore and reschedule your active user-defined task reminders when your Android device restarts, ensuring your alarms remain preserved without running persistent battery-draining background tracking services.",
          "- **Haptic Feedback & Vibration (android.permission.VIBRATE):** Delivers tactile feedback upon task completion celebrations, button taps, and reminder alert vibrations.",
          "- **Network & Internet State (android.permission.INTERNET):** Standard WebView container permission used to open external web links (such as support or this privacy policy) when you explicitly tap an external URL. TaskFlow never transmits your tasks or schedule data over external networks.",
          "- **Zero Sensitive Permissions:** TaskFlow does not request access to your camera, microphone, photo library, contacts, biometric sensors, or GPS location coordinates.",
        ],
      },
      {
        title: "Local Storage & Data Transmission",
        content: [
          "TaskFlow operates strictly on a client-side architecture:",
          "- **On-Device Preferences Storage:** All tasks, categories, settings, and reminders are stored exclusively within local device storage using `@capacitor/preferences`.",
          "- **Zero Cloud Databases:** TaskFlow does not communicate with cloud databases, Firebase Firestore, AWS, or external servers. Your tasks remain solely on your physical device.",
          "- **Complete Data Portability:** TaskFlow provides built-in backup functionality (**Settings > Export Backup**) allowing you to export your entire database to a standard JSON file for manual backup or device transfer without third-party involvement.",
        ],
      },
      {
        title: "Third-Party Services & SDK Integrations",
        content: [
          "TaskFlow operates as an independent, self-contained productivity tool:",
          "- **Zero Analytics SDKs:** TaskFlow does not integrate Firebase Analytics, Google Analytics, Mixpanel, Crashlytics, or user-tracking SDKs.",
          "- **Zero Third-Party Cloud Integrations:** The app does not integrate third-party login providers, remote sync engines, or data brokers.",
          "- **Google Play Services:** Standard Google Play distribution and operating system integration apply under [Google Privacy Policy](https://policies.google.com/privacy).",
        ],
      },
      {
        title: "Advertising, Analytics & Tracking Choices",
        content: [
          "TaskFlow is a **100% ad-free** application:",
          "- **No Advertising Networks:** TaskFlow contains no banner ads, interstitials, rewarded videos, or popups.",
          "- **No Advertising Identifiers (GAID):** The app does not access, read, or process Google Advertising IDs.",
          "- **No Tracking or Profiling:** TaskFlow does not profile your productivity habits or share diagnostic data with marketing networks.",
        ],
      },
      {
        title: "Data Sharing & Disclosure Policy",
        content: [
          "Coreplay Technologies **does not sell, rent, trade, or share** your schedule data, task entries, or personal information with any third parties or commercial entities.",
          "Because your task database never leaves your physical phone, no external party has access to your private schedules.",
        ],
      },
      {
        title: "Data Retention, Backup & User Deletion Rights",
        content: [
          "You retain complete, unrestricted control over your task data at all times:",
          "- **Trash Bin Management:** Deleted tasks can be reviewed, restored, or permanently wiped from the Trash Bin.",
          "- **Complete App Reset:** You can permanently wipe all tasks, categories, and settings from device memory instantly via **Settings > Reset App Data**.",
          "- **System Storage Clear:** You can erase all application data at the operating system level through Android **Settings > Apps > TaskFlow > Storage > Clear Data**.",
          "- **Uninstall Deletion:** Uninstalling TaskFlow completely deletes the application sandbox and all stored tasks from your phone.",
        ],
      },
      {
        title: "Data Security Safeguards",
        content: [
          "We protect your schedule and task data through defense-in-depth security principles:",
          "- **Local Isolation:** Your data is protected by the Android sandbox environment, preventing unauthorized access by other applications.",
          "- **No Remote Exposure:** Because TaskFlow transmits no data to external servers, your personal schedule is protected against cloud database breaches, credential stuffing, and man-in-the-middle attacks.",
          "- **Device Lock Recommended:** We encourage users to maintain an active device screen lock (PIN, password, or biometrics) to secure their device against physical access.",
        ],
      },
      {
        title: "Children's Privacy & Families Policy",
        content: [
          "TaskFlow is a safe, general-audience productivity utility suitable for all age groups, including students, professionals, and families. We comply fully with the **Children's Online Privacy Protection Act (COPPA)**, GDPR-K, and Google Play Families Policies.",
          "TaskFlow does not collect, solicit, or store personal information from children under 13 years of age. All schedule data stays on the child's device without cloud transmission.",
        ],
      },
      {
        title: "Global Privacy Rights (GDPR & CCPA/CPRA)",
        content: [
          "Under international data protection regulations (including GDPR, UK GDPR, and CCPA/CPRA), users hold specific statutory rights regarding their personal data:",
          "- **Right of Access & Data Portability:** Export your entire task database to a readable JSON backup file at any time (**Settings > Export Backup**).",
          "- **Right to Erasure (\"Right to be Forgotten\"):** Instantly delete all tasks and reset application state with one tap (**Settings > Reset App Data**).",
          "- **\"Do Not Sell My Personal Information\":** Coreplay Technologies **does not sell or share** user data.",
          "For privacy inquiries, contact our Privacy Officer at **{{contactEmail}}**.",
        ],
      },
      {
        title: "Changes to this Privacy Policy",
        content: [
          "We may update this Privacy Policy from time to time to reflect application improvements or regulatory updates. Any changes will be indicated with an updated \"Last Updated\" timestamp at the top of this page.",
          "Continued use of TaskFlow following revisions signifies your acceptance of the updated policy terms.",
        ],
      },
      {
        title: "Contact Us & Privacy Officer",
        content: [
          "If you have questions, suggestions, or data requests regarding TaskFlow: To-Do List & Planner, please contact our team:",
          "- **Developer & Publisher:** Coreplay Technologies",
          "- **Privacy Officer Email:** {{contactEmail}}",
          "- **Google Play Listing:** [TaskFlow on Google Play](https://play.google.com/store/apps/details?id=com.coreplay.todolist)",
          "- **Response Timeframe:** All inquiries are acknowledged and addressed within 48 to 72 business hours.",
        ],
      },
    ],
  },

  "tic-tac-toe": {
    slug: "tic-tac-toe",
    aliases: ["tactix", "tac-tix", "tictactoe", "connect-four"],
    appName: "TacTix – Tactical Board Games",
    shortName: "TacTix",
    packageId: "com.tactix.app",
    category: "Board & Strategy Games",
    tagline: "Tactical board gaming featuring scalable Tic Tac Toe, Drop Four, on-device minimax AI, move replays, and zero tracking.",
    heroDescription:
      "Official Privacy Policy for TacTix – Tactical Board Games (com.tactix.app) published by Coreplay Technologies. Learn how TacTix provides offline strategic board gameplay with on-device minimax AI, zero ads, zero telemetry, and complete local privacy.",
    badgeText: "100% Offline • On-Device AI • Ad-Free",
    lastUpdated: COMMON_LAST_UPDATED,
    metaDescription:
      "Official Privacy Policy for TacTix – Tactical Board Games by Coreplay Technologies. Explains on-device minimax AI calculations, zero ad networks, local replay storage, and complete offline gaming privacy.",
    playStoreUrl: COMMON_DEV_PROFILE,
    sections: [
      {
        title: "Scope & Overview",
        content: [
          "This Privacy Policy applies specifically to **TacTix – Tactical Board Games** (package name: `com.tactix.app`), developed, published, and maintained by **Coreplay Technologies** (\"we\", \"our\", or \"us\") on Google Play and authorized Android marketplaces.",
          "TacTix is built for offline strategic entertainment with complete respect for user privacy. The game operates under a strict privacy-first model: all game calculations, heuristic AI decision-making, and match history replays execute entirely on your device with zero cloud tracking, zero advertising networks, and zero personal data collection.",
        ],
      },
      {
        title: "Application Features & Intended Use",
        content: [
          "TacTix delivers classical and expanded tactical board games engineered for solo practice and two-player competition. Key features include:",
          "- **Scalable Tic Tac Toe:** Play classical 3×3, 4×4, 5×5, 6×6, 7×7, and 8×8 expanded grids with configurable winning line lengths.",
          "- **Drop Four (Connect Four):** Classical 7×6 gravity-fed board game with tactical diagonal and vertical win alignments.",
          "- **On-Device Minimax AI:** Intelligent heuristic AI opponents across multiple difficulty levels (Easy, Medium, Hard, Master) running 100% locally.",
          "- **Pass & Play Multiplayer:** Local two-player mode on a single device with custom player names and symbol selectors.",
          "- **Move-by-Move Match Replays:** Review the last 50 games move-by-move with forward and backward playback controls.",
          "- **Player Statistics & Win Streaks:** Detailed local tracking of matches played, wins, losses, draws, and current win streaks.",
        ],
      },
      {
        title: "Information Collection & Processing",
        content: [
          "TacTix collects zero personal data from players:",
          "- **Zero Personal Identifiers:** We do not collect names, email addresses, phone numbers, IP addresses, or device serial numbers.",
          "- **No User Accounts:** TacTix requires no account creation, social media logins, or cloud gaming profiles. You play completely anonymously.",
          "- **Local Player Names:** Custom player aliases (e.g. \"Player 1\", \"Player 2\") entered for pass-and-play matches are stored strictly in local device memory and are never transmitted to external servers.",
          "- **No Behavioral Profiling:** We do not track player strategies, move speeds, or gameplay habits.",
        ],
      },
      {
        title: "Device Permissions & Hardware Access",
        content: [
          "TacTix is designed to require virtually zero device permissions:",
          "- **Network & Internet State (android.permission.INTERNET):** Declared by the standard Android container runtime for webview display and opening external links (such as support or this privacy policy) when you explicitly tap a link. TacTix does not transmit gameplay or analytics data over the network.",
          "- **Audio Synthesis & Haptic Feedback:** Uses local device sound synthesis and vibration feedback for board taps, turn alerts, and victory fanfares.",
          "- **Zero Invasive Permissions:** TacTix requests no access to your camera, microphone, photo storage, contact list, biometric hardware, phone state, background notifications, or GPS location.",
        ],
      },
      {
        title: "Local Storage & On-Device AI Processing",
        content: [
          "TacTix operates entirely locally on your device hardware:",
          "- **On-Device Minimax AI:** All artificial intelligence calculations, minimax tree searches, alpha-beta pruning, and board evaluations run directly on your phone's processor in real time without sending board positions to cloud servers.",
          "- **Local Persistence:** Match statistics, win streaks, match replay logs (up to 50 games), and player preferences are stored strictly in local storage using `@capacitor/preferences`.",
          "- **100% Offline Capability:** The entire game—including all board modes, AI levels, and match replays—functions completely without an active internet connection.",
        ],
      },
      {
        title: "Third-Party Services & SDK Integrations",
        content: [
          "TacTix is built without third-party surveillance libraries:",
          "- **No Analytics SDKs:** TacTix does not integrate Google Analytics, Firebase, Crashlytics, or telemetry SDKs.",
          "- **No Cloud Matchmaking:** TacTix contains no multiplayer cloud servers or remote matchmaking databases.",
          "- **Google Play Services:** Standard Google Play distribution and security verification apply under [Google Privacy Policy](https://policies.google.com/privacy).",
        ],
      },
      {
        title: "Advertising, Analytics & Tracking Choices",
        content: [
          "TacTix is a **100% ad-free** board game:",
          "- **No Commercial Ads:** TacTix contains no banner ads, full-screen interstitials, rewarded ads, or video promotions.",
          "- **No Advertising Identifiers (GAID):** The game does not access, read, or process your Android Google Advertising ID.",
          "- **No Tracking or Retargeting:** The game does not track your activity across apps or websites.",
        ],
      },
      {
        title: "Data Sharing & Disclosure Policy",
        content: [
          "Coreplay Technologies **does not sell, rent, trade, or share** player data or statistics with third parties, advertisers, or data brokers under any circumstances.",
          "Because all match statistics and replays exist only on your physical device, no external entity has access to your gameplay records.",
        ],
      },
      {
        title: "Data Retention & User Deletion Rights",
        content: [
          "Players retain full control over all stored statistics and match replays:",
          "- **In-App Data Reset:** You can permanently erase all match history, win streaks, and saved replays at any time directly in the app (**Settings > Reset All Statistics & Match History**).",
          "- **Operating System Clear:** You can wipe all game data at the system level via Android **Settings > Apps > TacTix > Storage > Clear Data**.",
          "- **Uninstall Deletion:** Uninstalling TacTix permanently removes the application sandbox and all local match records from your device.",
        ],
      },
      {
        title: "Data Security Safeguards",
        content: [
          "Because TacTix operates locally on your device without cloud transmission, your gameplay records are protected against external network interception, unauthorized server access, and data breaches.",
          "Local data is isolated within Android's protected application sandbox environment.",
        ],
      },
      {
        title: "Children's Privacy & Families Policy",
        content: [
          "TacTix is family-friendly and designed for players of all ages, providing safe, intellectual strategy gameplay without inappropriate content, advertisements, or in-app purchases. Coreplay Technologies complies with **COPPA**, GDPR-K, and Google Play Families Policies.",
          "We do not knowingly collect, solicit, or store personal information from children under 13 years of age. TacTix is completely safe for children and families.",
        ],
      },
      {
        title: "Global Privacy Rights (GDPR & CCPA/CPRA)",
        content: [
          "Under GDPR, UK GDPR, and CCPA/CPRA, players have the right to access, rectify, and erase their data. Because all game data is stored locally on your device, you have immediate, unilateral authority over your records.",
          "For privacy inquiries, contact our Privacy Officer at **{{contactEmail}}**.",
        ],
      },
      {
        title: "Changes to this Privacy Policy",
        content: [
          "We may periodically revise this Privacy Policy to reflect game enhancements or regulatory requirements. Any updates will be indicated with an updated \"Last Updated\" timestamp at the top of this page.",
          "Continued use of TacTix following policy updates signifies your agreement to the updated terms.",
        ],
      },
      {
        title: "Contact Us & Privacy Officer",
        content: [
          "If you have questions, feedback, or privacy inquiries regarding TacTix – Tactical Board Games, please contact our team:",
          "- **Developer & Publisher:** Coreplay Technologies",
          "- **Privacy Officer Email:** {{contactEmail}}",
          "- **Google Play Developer Page:** [Coreplay Technologies on Google Play](https://play.google.com/store/apps/dev?id=6807992577867877190)",
          "- **Response Timeframe:** All inquiries are acknowledged and addressed within 48 to 72 business hours.",
        ],
      },
    ],
  },

  "nickname-app": {
    slug: "nickname-app",
    aliases: ["nickcraft", "nickname-generator", "nick-craft"],
    appName: "NickCraft: Nickname Generator",
    shortName: "NickCraft",
    packageId: "com.coreplay.nickname",
    category: "Utility & Personalization",
    tagline: "Create unique gamer tags, stylish Unicode fonts, fancy nicknames, and custom symbols with 100% on-device privacy.",
    heroDescription:
      "Official Privacy Policy for NickCraft: Nickname Generator (com.coreplay.nickname) published by Coreplay Technologies. Learn how NickCraft provides offline gamer tag generation, stylish Unicode fonts, and symbol decorator tools with zero tracking and zero personal data collection.",
    badgeText: "100% Offline • Ad-Free • Local Favorites",
    lastUpdated: COMMON_LAST_UPDATED,
    metaDescription:
      "Official Privacy Policy for NickCraft: Nickname Generator by Coreplay Technologies. Explains on-device Unicode font styling, zero personal data harvesting, clipboard access, and local favorites storage.",
    playStoreUrl: COMMON_DEV_PROFILE,
    sections: [
      {
        title: "Scope & Overview",
        content: [
          "This Privacy Policy applies specifically to **NickCraft: Nickname Generator** (package name: `com.coreplay.nickname`), developed, published, and maintained by **Coreplay Technologies** (\"we\", \"our\", or \"us\") on Google Play and authorized Android marketplaces.",
          "NickCraft is engineered as a 100% offline-first gamer tag and text styling utility. We respect your creative privacy: all nickname generation algorithms, Unicode glyph conversions, decorator compositions, and saved favorites reside exclusively on your local device. We never harvest, log, transmit, or monetize your generated nicknames, clipboard contents, or device information.",
        ],
      },
      {
        title: "Application Features & Intended Use",
        content: [
          "NickCraft empowers gamers, creators, and social media users to generate distinctive, stylish handles. Key features include:",
          "- **Categorized Nickname Discovery:** Explore thousands of curated nickname ideas across gaming genres (Gamer, Aesthetic, Anime, Dark, Cute, Funny, Rare, Top).",
          "- **Unicode Font Stylization:** Convert plain text into stylish fonts including Small Caps, Bubble, Gothic, Script, Monospace, and decorative variants.",
          "- **Symbol & Glyph Decorator:** Combine special symbols (stars, wings, crowns, swords, brackets, aesthetic glyphs) into custom handle designs.",
          "- **Custom Tag Builder:** Compose custom gamer tags with real-time preview and glyph compatibility testing.",
          "- **Local Favorites Library:** Save your favorite gamer tags and customized designs for instant access.",
          "- **One-Tap Copy & Share:** Instantly copy formatted names to your device clipboard or share to gaming and messaging apps.",
        ],
      },
      {
        title: "Information Collection & Processing",
        content: [
          "NickCraft operates on strict zero-data principles:",
          "- **Zero Personal Information Collected:** We do not collect names, email addresses, phone numbers, or account credentials.",
          "- **No Account Registration or Sign-In:** NickCraft requires no signup, passwords, social logins, or profiles. You use the app entirely anonymously.",
          "- **No Text or Search Query Telemetry:** The gamer tags you browse, search, generate, or save are processed strictly in device memory. We have no access to your custom nicknames.",
          "- **No Behavioral Tracking:** We do not monitor how many tags you copy, what categories you view, or how long you use the app.",
        ],
      },
      {
        title: "Device Permissions & Hardware Access",
        content: [
          "NickCraft requires minimal device permissions strictly needed for core utility features:",
          "- **Network & Internet State (android.permission.INTERNET, ACCESS_NETWORK_STATE):** Declared by the standard Android container runtime to allow opening external web resources (such as support or this privacy policy) when you voluntarily tap an external link in your preferred browser. NickCraft does not transmit your created tags or personal data over the internet.",
          "- **System Clipboard Access:** Allows you to copy generated nicknames, stylish fonts, and symbol combinations to your device clipboard with a single tap. Clipboard reading and writing are initiated strictly by your explicit tap and are handled locally on-device.",
          "- **Native Android Share Sheet:** Allows you to share formatted nicknames directly to external gaming and messaging apps via Android's native share dialog.",
          "- **Haptic Feedback (android.permission.VIBRATE):** Provides subtle tactile vibration confirmation upon button clicks, category switches, and copy actions.",
          "- **Zero Sensitive Permissions:** NickCraft requests zero sensitive device permissions. The app does not access your camera, microphone, photo files, contact list, biometric hardware, background notifications, or GPS location coordinates.",
        ],
      },
      {
        title: "Local Storage & Data Transmission",
        content: [
          "NickCraft operates strictly on a local-first architecture:",
          "- **On-Device Storage:** Saved favorite gamer tags, custom symbol templates, and user theme preferences are stored exclusively on your device using `@capacitor/preferences`.",
          "- **Zero Cloud Databases:** NickCraft does not connect to cloud storage engines, Firebase Firestore, AWS, or external servers. Your favorites remain exclusively on your physical device.",
          "- **Zero External Telemetry:** All Unicode styling rules, symbol definitions, and name databases are bundled locally within the app installation package, requiring zero server downloads.",
        ],
      },
      {
        title: "Third-Party Services & SDK Integrations",
        content: [
          "NickCraft is built without third-party tracking libraries:",
          "- **No Analytics Tracking:** NickCraft does not integrate Google Analytics, Firebase Analytics, Crashlytics, or user-profiling SDKs.",
          "- **No Cloud Services:** The app does not connect to external APIs or remote databases.",
          "- **Google Play Services:** Standard Google Play distribution and security verification apply under [Google Privacy Policy](https://policies.google.com/privacy).",
        ],
      },
      {
        title: "Advertising, Analytics & Tracking Choices",
        content: [
          "NickCraft is a **100% ad-free** application:",
          "- **No Commercial Ads:** NickCraft contains no banner ads, interstitials, rewarded videos, or promotional popups.",
          "- **No Advertising Identifiers (GAID):** The app does not request, read, or process Google Advertising IDs.",
          "- **No Cross-App Tracking:** NickCraft does not track your online activity across other apps or websites.",
        ],
      },
      {
        title: "Data Sharing & Disclosure Policy",
        content: [
          "Coreplay Technologies **does not sell, rent, trade, or share** your personal information or created gamer tags with third parties, advertisers, or data brokers under any circumstances.",
          "Because NickCraft collects no personal data and transmits no information to external servers, there is no personal data available to disclose or monetize.",
        ],
      },
      {
        title: "Data Retention & User Deletion Rights",
        content: [
          "You have direct, immediate control over all data stored on your device:",
          "- **In-App Favorites Removal:** You can remove individual tags or clear all saved favorites at any time from within the Saved screen.",
          "- **System Storage Wipe:** You can permanently erase all stored favorites and preferences at any time through Android system settings (**Settings > Apps > NickCraft > Storage > Clear Data**).",
          "- **Uninstall Deletion:** Uninstalling NickCraft permanently deletes the application sandbox and all saved favorites from your device.",
        ],
      },
      {
        title: "Data Security Safeguards",
        content: [
          "Because all name generation and styling algorithms operate locally on your phone's processor, your creative content is protected from network interception and cloud data breaches.",
          "Local data is isolated within Android's protected application sandbox environment.",
        ],
      },
      {
        title: "Children's Privacy & Families Policy",
        content: [
          "NickCraft is a creative utility suitable for users of all ages, including young gamers and students. Coreplay Technologies complies with the **Children's Online Privacy Protection Act (COPPA)**, GDPR-K, and Google Play Families Policies.",
          "We do not knowingly collect, solicit, or store personal information from children under 13 years of age. Because the application collects no personal data from any user, children can safely use NickCraft without privacy risks.",
        ],
      },
      {
        title: "Global Privacy Rights (GDPR & CCPA/CPRA)",
        content: [
          "Under GDPR, UK GDPR, and CCPA/CPRA, users hold specific statutory rights regarding their personal data:",
          "- **Right of Access & Control:** You have direct access to and control over your saved nicknames inside the app.",
          "- **Right to Erasure (\"Right to be Forgotten\"):** You can erase all data instantly via the app or Android settings.",
          "- **\"Do Not Sell My Personal Information\":** Coreplay Technologies **does not sell or share** user data.",
          "For privacy inquiries, contact our Privacy Officer at **{{contactEmail}}**.",
        ],
      },
      {
        title: "Changes to this Privacy Policy",
        content: [
          "We may periodically update this Privacy Policy to reflect application updates or regulatory requirements. Any updates will be indicated by updating the \"Last Updated\" date at the top of this document.",
          "Continued use of NickCraft following policy updates signifies your agreement to the updated terms.",
        ],
      },
      {
        title: "Contact Us & Privacy Officer",
        content: [
          "If you have questions, feedback, or privacy inquiries regarding NickCraft: Nickname Generator, please contact our team:",
          "- **Developer & Publisher:** Coreplay Technologies",
          "- **Privacy Officer Email:** {{contactEmail}}",
          "- **Google Play Developer Page:** [Coreplay Technologies on Google Play](https://play.google.com/store/apps/dev?id=6807992577867877190)",
          "- **Response Timeframe:** All inquiries are acknowledged and addressed within 48 to 72 business hours.",
        ],
      },
    ],
  },

  "qr-banner-scanner": {
    slug: "qr-banner-scanner",
    aliases: ["scanpro", "qr-scanner", "barcode-scanner", "scan-pro"],
    appName: "QR Scanner & Barcode Scanner",
    shortName: "QR Scanner (ScanPro)",
    packageId: "com.coreplay.qrscanner",
    category: "Productivity & Utilities",
    tagline: "Sub-second on-device QR & barcode scanning powered by Google ML Kit, with local history storage, custom QR generator, and privacy controls.",
    heroDescription:
      "Official Privacy Policy for QR Scanner & Barcode Scanner (com.coreplay.qrscanner, also known as ScanPro) published by Coreplay Technologies. Understand our camera permissions, on-device Google ML Kit computer vision, local scan history storage, optional location QR generator, and advertising privacy options.",
    badgeText: "Google ML Kit • Zero Cloud Video • Local Storage",
    lastUpdated: COMMON_LAST_UPDATED,
    metaDescription:
      "Official Privacy Policy for QR Scanner & Barcode Scanner by Coreplay Technologies. Details on-device camera ML Kit processing, zero cloud video uploads, local history storage, and AdMob privacy controls.",
    playStoreUrl: COMMON_DEV_PROFILE,
    sections: [
      {
        title: "Scope & Overview",
        content: [
          "This Privacy Policy applies specifically to **QR Scanner & Barcode Scanner** (package name: `com.coreplay.qrscanner`, also known as ScanPro), developed, published, and maintained by **Coreplay Technologies** (\"we\", \"our\", or \"us\") on Google Play and authorized Android marketplaces.",
          "QR Scanner & Barcode Scanner is built on a strict privacy-first foundation: optical barcode scanning and machine learning inference are performed 100% locally on your phone's processor using Google ML Kit. We never record, store, or transmit your camera video stream or captured photos to any external cloud server.",
        ],
      },
      {
        title: "Application Features & Intended Use",
        content: [
          "QR Scanner & Barcode Scanner is a high-speed utility engineered for scanning, decoding, and generating optical codes. Key features include:",
          "- **Universal 1D & 2D Format Support:** QR Code, Data Matrix, Aztec, PDF417, UPC-A, UPC-E, EAN-8, EAN-13, Code 39, Code 93, Code 128, Codabar, and ITF.",
          "- **Instant On-Device ML Kit Scanning:** Real-time barcode decoding in under 100 milliseconds directly in device memory.",
          "- **Smart Payload Categorization:** Automatic client-side parsing for URLs, Wi-Fi networks (WPA/WEP), vCard contacts, SMS, phone calls, geo-coordinates, and calendar events.",
          "- **Integrated QR Code Generator:** Create custom QR codes for Wi-Fi networks, text, URLs, contacts, email, phone numbers, and optional geolocation.",
          "- **Local Scan History & CSV Export:** Search, filter, and export scan history logs to CSV or text files.",
          "- **Gallery Image Scanning:** Scan and decode QR codes and barcodes directly from saved images in your device photo gallery.",
          "- **Flashlight Assist & Cooldown:** Low-light flashlight assist and duplicate scan cooldown controls.",
          "- **Optional Product Lookup:** Opt-in retail barcode lookup querying the open-source Open Food Facts database.",
        ],
      },
      {
        title: "Information Collection & On-Device Processing",
        content: [
          "We practice strict data minimization across all scanning and generation workflows:",
          "- **Zero Cloud Camera Uploads:** Camera video frames are analyzed strictly in real time in volatile device memory by Google ML Kit. We do not record, store, photograph, or transmit your camera stream to any external server.",
          "- **Local Scan History Logs:** Decoded barcode payloads, scan timestamps, and custom generated QR codes are stored locally on your device within IndexedDB (`scanpro_history`). They are never uploaded or synced to external cloud databases.",
          "- **Optional Geolocation for QR Generation:** If you voluntarily tap \"Use Current Location\" in the QR Generator, your device's GPS coordinates are acquired solely to populate the latitude and longitude fields of the QR code you are creating. Your location is processed locally and is never transmitted to us or used for tracking.",
          "- **No User Accounts:** You use the application without registering an account, providing an email address, or creating a cloud profile.",
        ],
      },
      {
        title: "Device Permissions & Hardware Access",
        content: [
          "QR Scanner & Barcode Scanner requests specific device hardware permissions to provide core scanning and utility functions. These permissions are requested at runtime only when strictly needed:",
          "- **Camera Access (android.permission.CAMERA):** Used exclusively to provide a real-time optical viewfinder for scanning QR codes and barcodes using Google ML Kit. **Zero Cloud Transmission:** Video frames are analyzed in temporary device memory and immediately discarded. No camera footage or photos are saved or uploaded.",
          "- **Flashlight (android.permission.FLASHLIGHT):** Used optionally to toggle your device flashlight so you can scan barcodes in dark or low-light conditions.",
          "- **Photos, Media & File Storage (File Picker / Filesystem):** Used only when you voluntarily choose to scan an existing QR code or barcode from your saved device photo gallery, or when you explicitly export scan history logs (CSV/text) or save generated QR codes to your local storage.",
          "- **Optional Location Access (ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION):** Requested only if you explicitly choose \"Use Current Location\" inside the Location QR generator to populate coordinates into a custom QR code. Location data is never used for tracking, profiling, or background tracking.",
          "- **System Clipboard Access:** Enables you to copy decoded barcode data, Wi-Fi credentials, or URLs to your clipboard with a single tap, or paste text into the QR generator.",
          "- **Haptic Feedback & Vibration (android.permission.VIBRATE):** Delivers tactile vibration confirmation upon successful barcode detection.",
          "- **Network & Internet State (INTERNET, ACCESS_NETWORK_STATE):** Used to load advertisements via Google AdMob, query optional Open Food Facts product information when enabled, and open external links in your browser.",
          "You can manage, grant, or revoke any of these permissions at any time through your Android device settings (**Settings > Apps > QR Scanner > Permissions**).",
        ],
      },
      {
        title: "Local Storage & Data Transmission",
        content: [
          "QR Scanner & Barcode Scanner operates primarily on a local-first architecture:",
          "- **Local History Storage:** All scanned codes and creation logs are stored locally on your device in IndexedDB (`scanpro_history`).",
          "- **Preferences Storage:** User preferences (such as duplicate cooldowns, flashlight defaults, and theme selections) are stored on-device via `@capacitor/preferences` (`scanpro_settings`).",
          "- **Offline Functionality:** Optical barcode scanning, QR code generation, history browsing, and CSV exports work 100% offline without requiring an active internet connection.",
          "- **Optional Product Lookup:** When enabled by the user, retail barcode numbers (EAN/UPC) query the open-source Open Food Facts database (`openfoodfacts.org`) over HTTPS to fetch product brand names and packaging photos. This lookup does not transmit user identifiers and can be disabled anytime in Settings.",
        ],
      },
      {
        title: "Third-Party Services & SDK Integrations",
        content: [
          "The application integrates trusted third-party SDKs to deliver core capabilities and sustainable operations:",
          "- **Google ML Kit (Google LLC):** Powers high-speed on-device computer vision for optical barcode detection. Machine learning inference occurs 100% locally on your phone's processor without sending image frames to Google servers. [Google ML Kit Terms](https://developers.google.com/ml-kit/terms)",
          "- **Google AdMob & Mobile Ads SDK (Google LLC):** Delivers banner, interstitial, app-open, and optional rewarded video advertisements. AdMob may process non-permanent device advertising IDs (GAID), IP address for coarse regional compliance, and interaction data to serve relevant ads and prevent fraud. [Google AdMob Privacy Policy](https://support.google.com/admob/answer/6128543)",
          "- **Open Food Facts API:** Optional open-source product database queried only for commercial retail barcodes when product lookup is enabled by the user. [Open Food Facts Privacy Policy](https://world.openfoodfacts.org/terms-of-use)",
          "- **Google Play Services (Google LLC):** Essential for app distribution, updates, and platform security verification under [Google Privacy Policy](https://policies.google.com/privacy).",
        ],
      },
      {
        title: "Advertising, Analytics & Tracking Choices",
        content: [
          "Our free-to-download scanner application displays advertisements powered by Google AdMob. You have full control over advertising choices:",
          "- **Reset Advertising ID:** Open Android **Settings > Google > Ads** and tap **Reset advertising ID** to disassociate past activity from your device identifier.",
          "- **Delete Advertising ID:** On Android 12+, navigate to **Settings > Google > Ads** and tap **Delete advertising ID** to prevent apps from accessing your advertising identifier entirely.",
          "- **Opt-Out of Personalized Ads:** Toggle **Opt out of Ads Personalization** in your Google settings to receive contextual ads rather than interest-based ads.",
          "- **24-Hour Ad-Free Rewarded Access:** Users can watch an optional rewarded video ad within the application to enjoy 24 hours of completely ad-free scanning without making financial purchases.",
        ],
      },
      {
        title: "Data Sharing & Disclosure Policy",
        content: [
          "Coreplay Technologies **does not sell, rent, or trade** your personal information, camera feeds, scan logs, or location data with third parties or data brokers.",
          "Advertising data is processed by Google AdMob in accordance with Google's verified developer policies. No scan history, decoded content, or private QR records are ever shared with advertisers.",
        ],
      },
      {
        title: "Data Retention & User Deletion Rights",
        content: [
          "You retain complete, unrestricted control over your scan history at all times:",
          "- **Clear Scan History:** You can delete individual scans or permanently wipe your entire scan history at any time from within the application (**Settings > Clear History**).",
          "- **Export Scan Logs:** You can export your scan history to a CSV or text file before deletion for your personal records (**Settings > Export CSV**).",
          "- **Operating System Storage Wipe:** You can clear all stored history and preferences at the operating system level through Android system settings (**Settings > Apps > QR Scanner > Storage > Clear Data**).",
          "- **Uninstall Deletion:** Uninstalling the application permanently wipes all local scan logs and preferences from device storage.",
        ],
      },
      {
        title: "Data Security Safeguards",
        content: [
          "We implement industry-standard safeguards to protect your information:",
          "- **Volatile Memory Camera Processing:** Camera frames exist only in transient system memory during real-time ML Kit analysis and are discarded immediately.",
          "- **Encrypted Network Communications:** All network interactions (including AdMob requests and Open Food Facts lookups) are strictly encrypted in transit using Transport Layer Security (TLS/HTTPS).",
          "- **Local Sandbox Protection:** Scanned records and preferences are protected by Android's application sandbox security.",
        ],
      },
      {
        title: "Children's Privacy & Families Policy",
        content: [
          "QR Scanner & Barcode Scanner is a utility designed for general audiences and is not directed to children under the age of 13 (or under 16 in the European Economic Area). Coreplay Technologies complies with **COPPA**, GDPR-K, and Google Play Families Policies.",
          "We do not knowingly solicit, collect, or store personal information from children under 13 years of age. If you believe a child has provided personal information, please contact our team at **{{contactEmail}}**.",
        ],
      },
      {
        title: "Global Privacy Rights (GDPR & CCPA/CPRA)",
        content: [
          "Under international privacy regulations (including GDPR, UK GDPR, and CCPA/CPRA), you hold specific rights regarding your personal data:",
          "- **Right to Access & Portability:** Access and export your entire scan history log directly within the app.",
          "- **Right to Erasure (\"Right to be Forgotten\"):** Wipe your scan history instantly via the app or Android settings.",
          "- **\"Do Not Sell My Personal Information\":** Coreplay Technologies **does not sell or share** personal information for monetary or valuable consideration.",
          "To exercise statutory rights, please contact our Privacy Officer at **{{contactEmail}}**.",
        ],
      },
      {
        title: "Changes to this Privacy Policy",
        content: [
          "We may update our Privacy Policy periodically to reflect enhancements in scanner utilities, newly supported barcode formats, or regulatory requirements. Any modifications will be indicated by updating the \"Last Updated\" date at the top of this page.",
          "Continued use of QR Scanner & Barcode Scanner following updates constitutes acceptance of the revised policy.",
        ],
      },
      {
        title: "Contact Us & Privacy Officer",
        content: [
          "If you have questions, feedback, or data requests regarding QR Scanner & Barcode Scanner, please contact our team:",
          "- **Developer & Publisher:** Coreplay Technologies",
          "- **Privacy Officer Email:** {{contactEmail}}",
          "- **Google Play Developer Page:** [Coreplay Technologies on Google Play](https://play.google.com/store/apps/dev?id=6807992577867877190)",
          "- **Response Timeframe:** All inquiries are acknowledged and addressed within 48 to 72 business hours.",
        ],
      },
    ],
  },

  "dubai-modern-bus-simulator": {
    slug: "dubai-modern-bus-simulator",
    aliases: ["dubai-bus", "dubai-bus-simulator", "bus-simulator"],
    appName: "Dubai Modern Bus Simulator",
    shortName: "Dubai Bus Simulator",
    packageId: "com.coreplay.dubai.bus",
    category: "Simulation / Role-Playing",
    tagline: "Realistic 3D city coach driving and mountain passenger transport across modern Dubai.",
    heroDescription:
      "Official Privacy Policy for Dubai Modern Bus Simulator (com.coreplay.dubai.bus) published by Coreplay Technologies. Understand our ad-supported monetization, device diagnostic data, and player privacy protections.",
    badgeText: "3D Simulation • Ad-Supported • COPPA Compliant",
    lastUpdated: COMMON_LAST_UPDATED,
    metaDescription:
      "Official Privacy Policy for Dubai Modern Bus Simulator by Coreplay Technologies. Explains 3D simulation gameplay, Google AdMob integrations, crash diagnostics, and advertising privacy controls.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.dubai.bus",
    sections: [
      {
        title: "Scope & Overview",
        content: [
          "This Privacy Policy applies specifically to **Dubai Modern Bus Simulator** (package name: `com.coreplay.dubai.bus`), developed, published, and maintained by **Coreplay Technologies** (\"we\", \"our\", or \"us\") on Google Play and authorized Android marketplaces.",
          "Dubai Modern Bus Simulator is a 3D mobile driving simulation game. We are dedicated to providing entertaining, realistic gameplay while upholding transparent data standards and protecting player privacy.",
        ],
      },
      {
        title: "Application Features & Intended Use",
        content: [
          "Dubai Modern Bus Simulator delivers realistic coach bus driving simulation. Key features include:",
          "- **Authentic 3D Environments:** Drive through Dubai-inspired city highways, coastal promenades, and winding mountain passes.",
          "- **Passenger Transport Missions:** Pick up and transport passengers across dynamic routes and scheduled transit stops.",
          "- **Realistic Vehicle Physics:** Customizable steering, tilt, and button controls with multiple internal and external camera perspectives.",
          "- **Offline Gameplay:** Core driving missions and passenger routes can be played without an active internet connection.",
        ],
      },
      {
        title: "Information Collection & Processing",
        content: [
          "When you play Dubai Modern Bus Simulator, limited diagnostic and technical data may be processed:",
          "- **Zero Personal Identity Harvesting:** We do not collect names, email addresses, phone numbers, or passwords. No account creation or registration is required.",
          "- **Device Diagnostic Metrics:** Android version, device manufacturer, screen resolution, and GPU profile to optimize 3D graphics rendering and frame rates.",
          "- **Advertising Identifiers:** Non-permanent device identifiers such as the Google Advertising ID (GAID), used by certified advertising partners to deliver ads and prevent fraud.",
          "- **Approximate Geographic Location:** Coarse, non-precise location derived from IP address used for regional ad compliance and localization.",
        ],
      },
      {
        title: "Device Permissions & Hardware Access",
        content: [
          "Dubai Modern Bus Simulator requests standard gaming permissions:",
          "- **Network & Internet State (INTERNET, ACCESS_NETWORK_STATE):** Used to load in-game advertisements, verify Google Play licensing, and check for game updates.",
          "- **Haptic Feedback & Vibration (VIBRATE):** Delivers tactile rumble effects during vehicle acceleration, braking, collisions, and menu taps.",
          "- **Zero Invasive Permissions:** The game does not request access to your camera, microphone, contact list, files, photos, or GPS coordinates.",
        ],
      },
      {
        title: "Local Storage & Data Transmission",
        content: [
          "Your mission completion status, unlocked bus models, vehicle paint customizations, and accumulated coins are stored strictly locally on your device storage.",
          "Game progression is saved within your device's local application sandbox.",
        ],
      },
      {
        title: "Third-Party Services & SDK Integrations",
        content: [
          "The game integrates trusted third-party SDKs to support 3D rendering, performance monitoring, and monetization:",
          "- **Google Play Services (Google LLC):** Essential for game distribution, updates, and licensing verification. [Google Privacy Policy](https://policies.google.com/privacy)",
          "- **Google AdMob (Google LLC):** Serves banner, interstitial, and rewarded video ads to support free-to-play access. [Google AdMob Privacy Policy](https://support.google.com/admob/answer/6128543)",
          "- **Unity Technologies:** Delivers 3D graphics rendering, realistic physics, and runtime game engine capabilities. [Unity Privacy Policy](https://unity.com/legal/privacy-policy)",
          "- **Firebase Crashlytics (Google LLC):** Collects aggregated, non-personally identifiable crash logs to troubleshoot device-specific bugs and performance bottlenecks. [Firebase Privacy Policy](https://firebase.google.com/support/privacy)",
        ],
      },
      {
        title: "Advertising Choices & Managing Advertising ID",
        content: [
          "As a free-to-play game, Dubai Modern Bus Simulator displays advertisements. You have full control over advertising identifiers through your Android operating system settings:",
          "- **Reset Advertising ID:** Open Android **Settings > Google > Ads** and tap **Reset advertising ID** to disassociate past activity from your device identifier.",
          "- **Delete Advertising ID:** On Android 12+, navigate to **Settings > Google > Ads** and tap **Delete advertising ID** to prevent apps from accessing your advertising identifier entirely.",
          "- **Opt-Out of Personalized Ads:** Toggle **Opt out of Ads Personalization** in your Google settings to receive contextual ads rather than interest-based ads.",
        ],
      },
      {
        title: "In-App Purchases & Financial Data",
        content: [
          "If the game offers optional digital items, coin packs, or vehicle unlocks, transactions are handled exclusively through the **Google Play In-App Billing** system.",
          "Coreplay Technologies does not collect, receive, or store your credit card numbers, bank account information, or billing address. All financial details are processed securely by Google under [Google Payments Privacy Notice](https://payments.google.com/legaldocument?family=0.privacynotice).",
        ],
      },
      {
        title: "Data Retention & User Deletion Rights",
        content: [
          "All mission progress and vehicle unlocks reside locally on your device:",
          "- **Local Reset:** You can reset all game progress by clearing app storage via Android system settings (**Settings > Apps > Dubai Modern Bus Simulator > Storage > Clear Data**).",
          "- **Uninstall Deletion:** Uninstalling the game permanently removes all local progress and settings from your device.",
        ],
      },
      {
        title: "Data Security Safeguards",
        content: [
          "We implement industry-standard safeguards to protect diagnostic information. All communications with Google Play and AdMob are encrypted in transit using Transport Layer Security (TLS/HTTPS).",
        ],
      },
      {
        title: "Children's Privacy & Families Policy",
        content: [
          "Dubai Modern Bus Simulator is designed for general audiences and is not directed to children under 13 years of age. In compliance with **COPPA**, GDPR-K, and Google Play Families Policies, we do not knowingly collect personal information from children under 13.",
        ],
      },
      {
        title: "Global Privacy Rights (GDPR & CCPA/CPRA)",
        content: [
          "Players in the EEA, UK, and California hold statutory rights regarding data access and erasure. Coreplay Technologies **does not sell, rent, or trade** personal data to third parties.",
          "To exercise any statutory rights, please contact **{{contactEmail}}**.",
        ],
      },
      {
        title: "Changes to this Privacy Policy",
        content: [
          "We may update this policy periodically to reflect game updates or platform requirements. Revisions will be posted with an updated \"Last Updated\" timestamp at the top of this page.",
        ],
      },
      {
        title: "Contact Us & Privacy Officer",
        content: [
          "If you have questions, feedback, or privacy inquiries regarding Dubai Modern Bus Simulator, please contact our team:",
          "- **Developer & Publisher:** Coreplay Technologies",
          "- **Privacy Officer Email:** {{contactEmail}}",
          "- **Google Play Game Listing:** [Dubai Modern Bus Simulator on Google Play](https://play.google.com/store/apps/details?id=com.coreplay.dubai.bus)",
          "- **Response Timeframe:** All inquiries are acknowledged and addressed within 48 to 72 business hours.",
        ],
      },
    ],
  },
};

/**
 * Resolves an AppPrivacyPolicy by primary slug or recognized alias.
 */
export function getAppPrivacyPolicy(slug: string): AppPrivacyPolicy | undefined {
  const normalized = slug.trim().toLowerCase();
  
  // Direct match
  if (APP_PRIVACY_POLICIES[normalized]) {
    return APP_PRIVACY_POLICIES[normalized];
  }

  // Alias match
  for (const policy of Object.values(APP_PRIVACY_POLICIES)) {
    if (policy.aliases.includes(normalized)) {
      return policy;
    }
  }

  return undefined;
}

/**
 * Returns all configured app policies.
 */
export function getAllAppPrivacyPolicies(): AppPrivacyPolicy[] {
  return Object.values(APP_PRIVACY_POLICIES);
}

/**
 * Returns all canonical slugs for static generation.
 */
export function getAllAppSlugs(): string[] {
  return Object.keys(APP_PRIVACY_POLICIES);
}

/**
 * Returns all slugs and aliases for routing.
 */
export function getAllRouteSlugs(): string[] {
  const slugs: string[] = [];
  for (const policy of Object.values(APP_PRIVACY_POLICIES)) {
    slugs.push(policy.slug);
    slugs.push(...policy.aliases);
  }
  return Array.from(new Set(slugs));
}

