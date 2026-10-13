export interface PolicySection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle?: string;
    items?: string[];
    paragraphs?: string[];
  }[];
}

export const PRIVACY_POLICY_METADATA = {
  developerName: "CorePlay Games",
  contactEmail: "muhammadameen188d@gmail.com",
  liveReferenceUrl: "https://coreplay-privacy-site.netlify.app/",
  lastUpdated: "2026",
  title: "Privacy Policy",
};

export const PRIVACY_POLICY_SECTIONS: PolicySection[] = [
  {
    id: "overview",
    title: "Overview & Commitment",
    content: [
      "We are committed to protecting your personal information and your right to privacy.",
      "We believe in transparency and want you to understand how we collect, use, and protect your information.",
    ],
  },
  {
    id: "information-collection-and-use",
    title: "Information Collection and Use",
    content: [
      "The Application collects information when you download and use it. This information may include:",
    ],
    subsections: [
      {
        items: [
          "Your device's Internet Protocol address (e.g. IP address)",
          "The pages of the Application that you visit, the time and date of your visit, the time spent on those pages",
          "The time spent on the Application",
          "The operating system you use on your mobile device",
        ],
      },
      {
        paragraphs: [
          "The Application does not gather precise information about the location of your mobile device.",
          "The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of it in the following ways:",
        ],
        items: [
          "Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.",
          "Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.",
          "Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.",
        ],
      },
      {
        paragraphs: [
          "The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices, and marketing promotions.",
          "For a better experience, while using the Application, the Service Provider may require you to provide certain personally identifiable information. The information requested will be retained and used as described in this privacy policy.",
        ],
      },
    ],
  },
  {
    id: "third-party-access",
    title: "Third Party Access",
    content: [
      "Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties as described below:",
      "Please note that the Application utilizes third-party services that have their own Privacy Policy:",
    ],
    subsections: [
      {
        subtitle: "Third-Party Service Providers",
        items: ["AdMob", "Unity"],
      },
      {
        paragraphs: [
          "The Service Provider may disclose User Provided and Automatically Collected Information:",
        ],
        items: [
          "As required by law, such as to comply with a subpoena, or similar legal process;",
          "When they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;",
          "With trusted service providers who work on their behalf, do not have an independent use of the information, and have agreed to adhere to the privacy rules.",
        ],
      },
    ],
  },
  {
    id: "opt-out-rights",
    title: "Opt-Out Rights",
    content: [
      "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.",
    ],
  },
  {
    id: "data-retention-policy",
    title: "Data Retention Policy",
    content: [
      "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. To request deletion, contact: muhammadameen188d@gmail.com.",
    ],
  },
  {
    id: "children",
    title: "Children",
    content: [
      "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If a child under 13 has provided personal information, it will be immediately deleted. Parents may contact the Service Provider at muhammadameen188d@gmail.com for necessary actions.",
    ],
  },
  {
    id: "security",
    title: "Security",
    content: [
      "The Service Provider safeguards the confidentiality of your information with physical, electronic, and procedural measures.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    content: [
      "This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page. Continued use signifies approval of all changes.",
    ],
  },
  {
    id: "your-consent",
    title: "Your Consent",
    content: [
      "By using the Application, you consent to the processing of your information as set forth in this Privacy Policy now and as amended.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: [
      "If you have any questions regarding privacy while using the Application, contact the Service Provider via email at muhammadameen188d@gmail.com.",
      "We may update this policy from time to time. We encourage you to review this page periodically for any changes.",
    ],
  },
];
