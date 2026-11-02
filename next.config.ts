import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/arrow-maze",
        destination: "/arrow-escape",
        permanent: false,
      },
      {
        source: "/arrowly",
        destination: "/arrow-escape",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
