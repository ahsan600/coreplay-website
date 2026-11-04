export interface Game {
  id: string;
  title: string;
  packageId?: string;
  playStoreUrl?: string;
  tagline: string;
  description: string;
  genre: string;
  category: string;
  iconUrl: string;
  bannerUrl: string;
  featureGraphicUrl?: string;
  screenshots: string[];
  features: string[];
  status: "available" | "in_development";
  releaseYear?: string;
}

export interface AppItem {
  id: string;
  title: string;
  packageId?: string;
  playStoreUrl?: string;
  tagline: string;
  description: string;
  category: string;
  iconUrl: string;
  bannerUrl: string;
  featureGraphicUrl?: string;
  screenshots: string[];
  features: string[];
  highlights: string[];
  status: "available" | "in_development";
  releaseYear?: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutHeadline: string;
  aboutText: string;
  developerProfileUrl: string;
  privacyPolicyNetlifyUrl: string;
  contactEmail: string;
}

export const STUDIO_INFO: StudioInfo = {
  name: "Coreplay Technologies",
  tagline: "Play thrilling 3D mobile games and discover smart, privacy-first utility apps.",
  heroHeadline: "Play Thrilling Games. Discover Smart Apps.",
  heroSupportingText: "Coreplay Technologies publishes high-energy 3D simulation games alongside fast, intuitive utility applications built to elevate your daily Android experience.",
  aboutHeadline: "Engineered for Excitement. Built for Daily Utility.",
  aboutText: "Coreplay Technologies is an independent mobile publisher delivering high-performance simulation games and seamless utility tools. From realistic transit adventures to fast, privacy-focused scanner utilities, our titles bring quality, responsiveness, and reliability to Android users worldwide.",
  developerProfileUrl: "https://play.google.com/store/apps/dev?id=6807992577867877190",
  privacyPolicyNetlifyUrl: "https://coreplay-site.netlify.app/privacy-policy",
  contactEmail: "muhammadameen188d@gmail.com",
};

export const GAMES: Game[] = [
  {
    id: "dash-race-3d-parkour-run",
    title: "Dash Race 3D: Parkour Run",
    packageId: "com.coreplay.race.parkour",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.race.parkour",
    tagline: "Hold to run, dodge crazy mechanical traps, and beat rivals across 8 unique worlds.",
    description: "Dash Race 3D: Parkour Run is an exciting 3D hyper-casual obstacle-course racing game developed by Coreplay Technologies. Hold to run, let go to stop and dodge crazy traps past spinning sweepers, wrecking ball pendulums, hydraulic stompers, cannons, and windmills. Scale climbing walls, swing across monkey bars, ride ziplines and tube slides, and bounce over wide gaps across 8 vibrant worlds cycling through Day, Sunset, Night, and Dawn.",
    genre: "Casual / Racing / 3D Parkour Obstacle Course",
    category: "Casual",
    iconUrl: "/images/games/dash-run/icon.png",
    bannerUrl: "/images/games/dash-run/hero-banner.jpg",
    featureGraphicUrl: "/images/games/dash-run/feature-graphic.jpg",
    screenshots: [
      "/images/games/dash-run/screenshot-1.jpg",
      "/images/games/dash-run/screenshot-2.jpg",
      "/images/games/dash-run/screenshot-3.jpg",
      "/images/games/dash-run/screenshot-4.jpg",
    ],
    features: [
      "Intuitive one-thumb hold-to-run and release-to-brake racing mechanics",
      "16 dynamic mechanical obstacle modules with mathematical fairness verification",
      "Fluid 3D parkour traversal: climbing walls, monkey bars, ziplines, and bounce pads",
      "Eight unique worlds rotating across 4 times of day (32 environment variations)",
      "Smart sim-aligned AI rivals with human-like reaction times and adaptive difficulty",
      "21 customizable outfits (Ninja, Paladin, Space Ranger, Reaper) and 8 fun hats",
      "100% free-to-play with offline support and zero in-app purchases",
    ],
    status: "available",
    releaseYear: "2026",
  },
  {
    id: "arrowly-arrow-escape-puzzle",
    title: "Arrowly: Arrow Escape Puzzle",
    packageId: "com.coreplay.arrow.escape",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.arrow.escape",
    tagline: "Tap bent arrows out of the maze in the right order across unlimited procedural puzzle stages.",
    description: "Arrowly: Arrow Escape Puzzle is a relaxing, minimalist 2D arrow-maze puzzle game where players tap bent arrows on a dotted grid to slide them head-first along their body and off the board. Features unlimited procedural stages, 25 recognizable picture shapes, 11 unlockable themes, and soothing programmatic music.",
    genre: "Puzzle / Logic / Brain Games",
    category: "Puzzle",
    iconUrl: "/images/games/arrow-escape/icon.png",
    bannerUrl: "/images/games/arrow-escape/hero-banner.jpg",
    featureGraphicUrl: "/images/games/arrow-escape/feature-graphic.jpg",
    screenshots: [
      "/images/games/arrow-escape/screenshot-1.jpg",
      "/images/games/arrow-escape/screenshot-2.jpg",
      "/images/games/arrow-escape/screenshot-3.jpg",
      "/images/games/arrow-escape/screenshot-4.jpg",
    ],
    features: [
      "Satisfying arrow escape mechanics with autofire chain reactions",
      "Unlimited procedural stages with guaranteed cycle-breaking solver",
      "25 picture board shapes (heart, star, cat, lock, crown, and more)",
      "11 unlockable aesthetic themes with dark mode glow effects",
      "Daily arrow puzzles with streak tracking and completion calendar",
      "100% offline capable with real-time procedural Web Audio synthesizer",
    ],
    status: "available",
    releaseYear: "2026",
  },
  {
    id: "bridge-race-3d-stair-builder",
    title: "Bridge Race 3D: Stair Builder",
    packageId: "com.coreplay.bridge.race",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.bridge.race",
    tagline: "Stack bricks, build stair bridges, and beat rivals to the top across 8 unique worlds.",
    description: "Grab bricks, stack them high, and build your own bridge of stairs to the top before your rivals do! Bridge Race 3D: Stair Builder (Brick Isles) is an exhilarating 3D bridge race across eight island worlds, with intuitive one-finger controls, diverse power-ups, collectible cosmetics, and full offline play.",
    genre: "Casual / Racing / 3D Stacking",
    category: "Casual",
    iconUrl: "/images/games/bridge-race/icon.png",
    bannerUrl: "/images/games/bridge-race/hero-banner.jpg",
    featureGraphicUrl: "/images/games/bridge-race/feature-graphic.jpg",
    screenshots: [
      "/images/games/bridge-race/screenshot-1.jpg",
      "/images/games/bridge-race/screenshot-2.jpg",
      "/images/games/bridge-race/screenshot-3.jpg",
      "/images/games/bridge-race/screenshot-4.jpg",
    ],
    features: [
      "Dynamic brick-stacking and staircase construction race mechanics",
      "Eight diverse island worlds with unique procedural scenery and music",
      "Exciting bonus game modes: Treasure Dash and Build Rush",
      "Power-ups including Brick Magnet and Speed Boost",
      "21 collectible racer outfits and 8 whimsical hats",
      "100% free-to-play with offline support and zero in-app purchases",
    ],
    status: "available",
    releaseYear: "2026",
  },
  {
    id: "count-rush-crowd-runner-3d",
    title: "Count Rush: Crowd Runner 3D",
    packageId: "com.coreplay.crowdrun",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.crowdrun",
    tagline: "Multiply your runner crowd, navigate math gates, and smash giant robotic bosses.",
    description: "Count Rush: Crowd Runner 3D is an exhilarating fast-paced 3D runner game developed by Coreplay Technologies. Steer your runner through dynamic obstacle tracks, pass through positive multiplier gates to grow your army into a massive crowd, collect coins and keys, and defeat colossal mechanical bosses in thrilling finish-line showdowns.",
    genre: "Action / Casual Runner",
    category: "Action",
    iconUrl: "/images/games/crowd-runner/icon.png",
    bannerUrl: "/images/games/crowd-runner/hero-banner.jpg",
    featureGraphicUrl: "/images/games/crowd-runner/feature-graphic.jpg",
    screenshots: [
      "/images/games/crowd-runner/screenshot-1.jpg",
      "/images/games/crowd-runner/screenshot-2.jpg",
      "/images/games/crowd-runner/screenshot-3.jpg",
      "/images/games/crowd-runner/screenshot-4.jpg",
    ],
    features: [
      "Dynamic math multiplier gates (+, ×) to grow your runner army",
      "Epic end-level robotic boss battles with destructible armor",
      "Bonus chest room with keys to unlock rare currency and rewards",
      "Customizable runner skins, outfits, hats, and vibrant color schemes",
      "Smooth 60 FPS 3D runner physics with responsive steering controls",
      "100% free-to-play with offline mode support and zero pay-to-win",
    ],
    status: "available",
    releaseYear: "2026",
  },
  {
    id: "dubai-modern-bus-simulator",
    title: "Dubai Modern Bus Simulator",
    packageId: "com.coreplay.dubai.bus",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.dubai.bus",
    tagline: "Realistic city coach driving and off-road passenger transport in modern Dubai.",
    description: "Coreplay Technologies provides Dubai Bus Games, a modern bus driving simulator. Step behind the wheel to transport passengers across modern city highways, winding mountain passes, and scenic desert roads with realistic vehicle physics and multiple driving control options.",
    genre: "Simulation / Role-Playing",
    category: "Simulation",
    iconUrl: "/images/games/icon.png",
    bannerUrl: "/images/games/hero-banner.jpg",
    featureGraphicUrl: "/images/games/feature-graphic.jpg",
    screenshots: [
      "/images/games/screenshot-1.jpg",
      "/images/games/screenshot-2.jpg",
      "/images/games/screenshot-3.jpg",
      "/images/games/screenshot-4.jpg",
    ],
    features: [
      "Authentic Dubai-inspired urban roads & scenic mountain routes",
      "Multiple responsive control schemes (steering, tilt, arrows)",
      "Passenger transport duty across dynamic city & off-road missions",
      "Detailed 3D coach models with immersive driving camera angles",
      "Free-to-play mobile gameplay optimized for performance",
    ],
    status: "available",
    releaseYear: "2026",
  },
];

export const APPS: AppItem[] = [
  {
    id: "taskflow-daily-schedule-planner",
    title: "TaskFlow: To-Do List & Planner",
    packageId: "com.coreplay.todolist",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.todolist",
    tagline: "Plan with clarity. Focus with purpose. Smart schedule planner & to-do list with total privacy.",
    description: "TaskFlow: To-Do List & Planner is a high-speed, lightweight daily schedule planner and checklist manager published by Coreplay Technologies. Built with 100% on-device architecture, TaskFlow lets you organize your daily routine, recurring tasks, custom color-tagged categories, and time slots with local reminders and zero cloud sync or tracking.",
    category: "Productivity & Utilities",
    iconUrl: "/images/apps/scanpro/icon.png",
    bannerUrl: "/images/apps/scanpro/screenshot-1.png",
    featureGraphicUrl: "/images/apps/scanpro/screenshot-1.png",
    screenshots: [
      "/images/apps/scanpro/screenshot-1.png",
      "/images/apps/scanpro/screenshot-2.png",
      "/images/apps/scanpro/screenshot-3.png",
      "/images/apps/scanpro/screenshot-4.png",
    ],
    features: [
      "100% On-Device Privacy: Zero cloud databases, zero accounts, zero analytics or tracking",
      "Smart Daily Planning: Time-slotted tasks, subtask checklists, and priority classification",
      "Recurring Task Engine: Automated instance creation for daily, weekday, weekly, monthly, and yearly tasks",
      "Local Deadline Reminders: Device notifications for scheduled alerts without battery drain",
      "Interactive Calendar & Streak View: Track daily and monthly distributions and celebrate completions",
      "Offline Data Sovereignty: Instant JSON backup export/restore, trash recovery, and full device wipe",
    ],
    highlights: [
      "100% On-Device Privacy",
      "Zero Cloud Sync Required",
      "Offline Backup & Export",
      "Ad-Free Productivity",
    ],
    status: "available",
    releaseYear: "2026",
  },
  {
    id: "scanpro-qr-barcode-scanner",
    title: "ScanPro – QR & Barcode Scanner",
    packageId: "com.example.scanpro",
    playStoreUrl: "https://play.google.com/store/apps/dev?id=6807992577867877190",
    tagline: "Scan. Save. Done. High-speed QR & Barcode Scanner with local offline privacy.",
    description: "ScanPro is a lightning-fast, privacy-first mobile barcode and QR scanner built for daily productivity. Powered by Google ML Kit on-device computer vision, ScanPro reads all standard 1D and 2D formats in milliseconds, supports custom QR code generation, CSV export, flashlight assist, and duplicate filtering without tracking your data.",
    category: "Productivity & Utilities",
    iconUrl: "/images/apps/scanpro/icon.png",
    bannerUrl: "/images/apps/scanpro/screenshot-1.png",
    featureGraphicUrl: "/images/apps/scanpro/screenshot-1.png",
    screenshots: [
      "/images/apps/scanpro/screenshot-1.png",
      "/images/apps/scanpro/screenshot-2.png",
      "/images/apps/scanpro/screenshot-3.png",
      "/images/apps/scanpro/screenshot-4.png",
    ],
    features: [
      "Instant On-Device Scanning: Sub-second barcode & QR detection powered by Google ML Kit",
      "Privacy-First Architecture: 100% local camera processing; zero video feeds or scans stored in the cloud",
      "Universal Format Support: QR Code, UPC-A, EAN-13, Code 128, Data Matrix, Aztec, PDF417",
      "Integrated Code Generator: Create custom QR codes and barcodes for Wi-Fi, URLs, text, and contacts",
      "Flexible History & Export: Search, filter, and export scan history logs to CSV or text files",
      "Smart Scan Controls: Duplicate scan cooldown, haptic feedback, and low-light flashlight toggle",
    ],
    highlights: [
      "Google ML Kit Powered",
      "Offline Local Processing",
      "Scan History & CSV Export",
      "Built-in QR Generator",
    ],
    status: "available",
    releaseYear: "2026",
  },
];

export const STUDIO_VALUES = [
  {
    title: "Immersive Experiences",
    description: "Rich visual 3D simulation worlds and dynamic environments designed to pull players right into the driver's seat.",
    icon: "Compass",
  },
  {
    title: "Smart Daily Utilities",
    description: "Lightweight, rapid-response utility applications designed with privacy-by-design and instant offline utility.",
    icon: "Smartphone",
  },
  {
    title: "Engineered for Performance",
    description: "Optimized resource management, smooth frame rates, and streamlined battery consumption across modern Android devices.",
    icon: "Sparkles",
  },
];
