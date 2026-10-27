import type { Metadata } from "next";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Universal Privacy Policy",
  description:
    "Official Universal Privacy Policy governing all mobile games, utilities, and productivity applications published by Coreplay Technologies on Google Play and Android marketplaces.",
  openGraph: {
    title: "Universal Privacy Policy | Coreplay Technologies",
    description:
      "Understand how Coreplay Technologies collects, uses, and safeguards information across all mobile games and applications.",
    url: "https://coreplay-site.netlify.app/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://coreplay-site.netlify.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
