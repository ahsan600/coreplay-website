import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAppPrivacyPolicy } from "@/data/app-privacy-policies";
import { PrivacyPolicyContent } from "../privacy-policy/PrivacyPolicyContent";

export async function generateMetadata(): Promise<Metadata> {
  const policy = getAppPrivacyPolicy("arrow-escape");

  if (!policy) {
    return {
      title: "Arrowly Privacy Policy Not Found",
      description: "The requested privacy policy could not be found.",
    };
  }

  const canonicalUrl = "https://coreplay-site.netlify.app/arrow-escape";

  return {
    title: `${policy.appName} Privacy Policy`,
    description: policy.metaDescription,
    icons: {
      icon: [{ url: "/lock-icon.svg", type: "image/svg+xml" }],
      shortcut: "/lock-icon.svg",
      apple: "/lock-icon.svg",
    },
    openGraph: {
      title: `${policy.appName} Privacy Policy | Coreplay Technologies`,
      description: policy.metaDescription,
      url: canonicalUrl,
      type: "website",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ArrowEscapePage() {
  const policy = getAppPrivacyPolicy("arrow-escape");

  if (!policy) {
    notFound();
  }

  return <PrivacyPolicyContent data={policy} />;
}

