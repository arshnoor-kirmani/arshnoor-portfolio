import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const defaultTitle =
  "Arshnoor Kirmani | Full Stack Developer | React & Next.js";
const defaultDescription =
  "Full Stack Developer from India building scalable, high-performance web applications with React, Next.js, and TypeScript.";
const defaultUrl = siteConfig.url; // Centralized in site.ts

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | Arshnoor Kirmani`,
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    "Arshnoor Kirmani",
    "Full Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Software Engineer",
  ],
  metadataBase: new URL(defaultUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: defaultUrl,
    siteName: "Arshnoor Kirmani Portfolio",
    images: [
      {
        url: `${defaultUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Arshnoor Kirmani | Front-End Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${defaultUrl}/opengraph-image.png`],
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
