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
  name: "CorePlay Games",
  tagline: "Play fun, exciting, and immersive games from CorePlay Games.",
  heroHeadline: "Play Beyond the Ordinary.",
  heroSupportingText: "Discover fun, immersive mobile games built for adventure, excitement, and unforgettable challenges.",
  aboutHeadline: "Built for Players. Driven by Imagination.",
  aboutText: "CorePlay Games publishes mobile games focused on fun, exciting, and immersive player experiences. From realistic transit simulations to engaging virtual adventures, our titles are crafted with care to bring memorable gameplay to mobile devices worldwide.",
  developerProfileUrl: "https://play.google.com/store/apps/dev?id=6807992577867877190",
  privacyPolicyNetlifyUrl: "https://coreplay-privacy-site.netlify.app/",
  contactEmail: "muhammadameen188d@gmail.com",
};

export const GAMES: Game[] = [
  {
    id: "dubai-modern-bus-simulator",
    title: "Dubai Modern Bus Simulator",
    packageId: "com.coreplay.dubai.bus",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coreplay.dubai.bus",
    tagline: "Realistic city coach driving and off-road passenger transport in modern Dubai.",
    description: "CorePlay Games provides Dubai Bus Games, a modern bus driving simulator. Step behind the wheel to transport passengers across modern city highways, winding mountain passes, and scenic desert roads with realistic vehicle physics and multiple driving control options.",
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

export const STUDIO_VALUES = [
  {
    title: "Immersive Experiences",
    description: "Rich visual worlds, dynamic environments, and responsive controls designed to pull players right into the driver's seat.",
    icon: "Compass",
  },
  {
    title: "Fun and Engaging Gameplay",
    description: "Intuitive mechanics and rewarding mission progressions built for instant enjoyment and long-term replayability.",
    icon: "Gamepad2",
  },
  {
    title: "Adventures for Every Session",
    description: "Quick-play missions and deep driving challenges that deliver excitement whether you have two minutes or two hours.",
    icon: "Sparkles",
  },
];
