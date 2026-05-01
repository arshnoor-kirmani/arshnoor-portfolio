import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Transition from "@/components/ui/transition";
import IntroLoader from "@/components/IntroLoader";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} font-sans scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Arshnoor Kirmani",
                  url: "https://arshnoorkirmani.vercel.app",
                  jobTitle: "Full Stack Developer",
                  worksFor: {
                    "@type": "Organization",
                    name: "Self-employed",
                  },
                  sameAs: [
                    "https://github.com/arshnoorkirmani",
                    "https://linkedin.com/in/arshnoorkirmani",
                    "https://arshnoorkirmani.vercel.app",
                  ],
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "Tailwind CSS",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Arshnoor Kirmani Portfolio",
                  url: "https://arshnoorkirmani.vercel.app",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Who is Arshnoor Kirmani?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Arshnoor Kirmani is a Full Stack Developer and Software Engineer from India who builds web applications with React, Next.js, and TypeScript.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What technologies does Arshnoor Kirmani use?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Arshnoor Kirmani primarily uses React.js, Next.js, Node.js, TypeScript, and MongoDB for full-stack and frontend development.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Where is Arshnoor Kirmani located?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Arshnoor Kirmani is located in India, working as a web developer and frontend instructor.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary min-h-screen grain">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative grid min-h-screen w-full flex-col overflow-x-hidden">
            <Transition
              introDuration={2}
              transitionDuration={1.2}
              type="curved"
              direction="bottom"
              autoExit
              className="bg-background"
              intro={<IntroLoader />}
            >
              {children}
            </Transition>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
