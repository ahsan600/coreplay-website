import React from "react";
import { Hero } from "@/components/sections/Hero";
import { FeaturedGames } from "@/components/sections/FeaturedGames";
import { FeaturedApps } from "@/components/sections/FeaturedApps";
import { AboutStudio } from "@/components/sections/AboutStudio";
import { GooglePlayCta } from "@/components/sections/GooglePlayCta";
import { STUDIO_INFO, GAMES, APPS } from "@/data/games";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: STUDIO_INFO.name,
    description: STUDIO_INFO.tagline,
    url: "https://coreplay-games.netlify.app",
    sameAs: [
      STUDIO_INFO.developerProfileUrl,
      STUDIO_INFO.privacyPolicyNetlifyUrl,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: STUDIO_INFO.contactEmail,
      contactType: "customer support",
    },
  };

  const gameStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: GAMES[0].title,
    description: GAMES[0].description,
    genre: GAMES[0].genre,
    gamePlatform: "Android",
    applicationCategory: "Game",
    operatingSystem: "Android",
    author: {
      "@type": "Organization",
      name: STUDIO_INFO.name,
    },
    url: GAMES[0].playStoreUrl,
    image: GAMES[0].featureGraphicUrl,
  };

  const appStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APPS[0].title,
    description: APPS[0].description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android",
    author: {
      "@type": "Organization",
      name: STUDIO_INFO.name,
    },
    url: APPS[0].playStoreUrl,
    image: APPS[0].featureGraphicUrl,
  };

  return (
    <>
      {/* Structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appStructuredData) }}
      />

      <Hero />
      <FeaturedGames />
      <FeaturedApps />
      <AboutStudio />
      <GooglePlayCta />
    </>
  );
}
