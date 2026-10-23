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
