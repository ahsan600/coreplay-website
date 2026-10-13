import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.URL ||
      "https://coreplay-games.netlify.app"
  ),
  title: {
    default: "CorePlay Games — Official Mobile Gaming Studio",
    template: "%s | CorePlay Games",
  },
  description:
    "CorePlay Games is an independent mobile gaming studio publishing immersive, exciting 3D simulation and adventure games on Google Play.",
  keywords: [
    "CorePlay Games",
    "mobile games",
    "Dubai Modern Bus Simulator",
    "bus simulation games",
    "Android games",
    "Google Play game developer",
    "indie game studio",
  ],
  authors: [{ name: "CorePlay Games" }],
  creator: "CorePlay Games",
  publisher: "CorePlay Games",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CorePlay Games",
    title: "CorePlay Games — Official Mobile Gaming Studio",
    description:
      "Play fun, exciting, and immersive mobile games from CorePlay Games. Discover our latest releases on Google Play.",
    images: [
      {
        url: "/images/games/feature-graphic.jpg",
        width: 1024,
        height: 500,
        alt: "CorePlay Games Studio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CorePlay Games — Official Mobile Gaming Studio",
    description:
      "Play fun, exciting, and immersive mobile games from CorePlay Games.",
    images: ["/images/games/feature-graphic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <head>
        {/* Anti-FOUC theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('coreplay-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-theme-main text-theme-primary selection:bg-accent-primary/30 selection:text-white"
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
