import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/lock-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/lock-icon.svg",
    apple: "/lock-icon.svg",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

