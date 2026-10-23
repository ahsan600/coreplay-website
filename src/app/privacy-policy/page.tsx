import type { Metadata } from "next";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy for Coreplay Technologies mobile games and applications on Google Play, detailing camera permissions, data collection, Google ML Kit, AdMob, user rights, and children's privacy.",
  openGraph: {
    title: "Privacy Policy | Coreplay Technologies",
    description:
      "Understand how Coreplay Technologies collects, uses, and safeguards information across all mobile games and applications.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
