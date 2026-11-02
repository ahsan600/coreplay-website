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
        source: "/arrow-escape",
        destination: "/privacy-policy/arrow-escape",
        permanent: true,
      },
      {
        source: "/arrow-maze",
        destination: "/privacy-policy/arrow-escape",
        permanent: false,
      },
      {
        source: "/arrowly",
        destination: "/privacy-policy/arrow-escape",
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
