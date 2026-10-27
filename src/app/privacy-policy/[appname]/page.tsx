import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAppPrivacyPolicy,
  getAllRouteSlugs,
} from "@/data/app-privacy-policies";
import { PrivacyPolicyContent } from "../PrivacyPolicyContent";

type PageProps = {
  params: Promise<{ appname: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllRouteSlugs();
  return slugs.map((slug) => ({
    appname: slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { appname } = await params;
  const policy = getAppPrivacyPolicy(appname);

  if (!policy) {
    return {
      title: "Privacy Policy Not Found",
      description: "The requested application privacy policy could not be found.",
      icons: {
        icon: [{ url: "/lock-icon.svg", type: "image/svg+xml" }],
        shortcut: "/lock-icon.svg",
        apple: "/lock-icon.svg",
      },
    };
  }

  const canonicalUrl = `https://coreplay-site.netlify.app/privacy-policy/${policy.slug}`;

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

export default async function AppPrivacyPolicyPage({ params }: PageProps) {
  const { appname } = await params;
  const policy = getAppPrivacyPolicy(appname);

  if (!policy) {
    notFound();
  }

  return <PrivacyPolicyContent data={policy} />;
}
