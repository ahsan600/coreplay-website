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
      "https://coreplay-site.netlify.app",
  ),
  title: {
    default: "Coreplay Technologies — Mobile Games & Apps Studio",
    template: "%s | Coreplay Technologies",
  },
  description:
    "Coreplay Technologies publishes high-energy 3D simulation games and smart, privacy-first utility applications (including ScanPro – QR & Barcode Scanner) on Google Play.",
  keywords: [
    "Coreplay Technologies",
    "mobile games",
    "mobile apps",
    "ScanPro",
    "QR code scanner",
    "barcode scanner",
    "Dubai Modern Bus Simulator",
    "bus simulation games",
    "Android apps",
    "Android games",
    "Google Play developer",
  ],
  authors: [{ name: "Coreplay Technologies" }],
  creator: "Coreplay Technologies",
  publisher: "Coreplay Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Coreplay Technologies",
    title: "Coreplay Technologies — Mobile Games & Apps Studio",
    description:
      "Play fun, exciting 3D simulation games and discover smart, privacy-conscious utility apps from Coreplay Technologies on Google Play.",
    images: [
      {
        url: "/images/games/feature-graphic.jpg",
        width: 1024,
        height: 500,
        alt: "Coreplay Technologies Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreplay Technologies — Mobile Games & Apps Studio",
    description:
      "Play fun, exciting 3D simulation games and discover smart utility apps from Coreplay Technologies.",
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
