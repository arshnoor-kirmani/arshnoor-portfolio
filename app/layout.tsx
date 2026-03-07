import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeButton } from "@/components/theme-toggle-btn";
import Transition from "@/components/ui/transition";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";

import "./globals.css";

const inter = Inter({
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
      className={`${inter.variable} font-sans scroll-smooth`}
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
                  jobTitle: "Frontend Developer",
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
                        text: "Arshnoor Kirmani is a Frontend Developer and Software Engineer from India specializing in React, Next.js, and scalable web architectures.",
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
      <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative grid min-h-screen w-full flex-col overflow-x-hidden">
            {/* First Load Transition */}
            <Transition
              introDuration={2}
              transitionDuration={1.5}
              type="curved"
              direction="bottom"
              autoExit
              className="bg-background"
              intro={
                <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-background overflow-hidden px-6">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-medium tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      System Design & Architecture
                    </div>

                    {/* Headline */}
                    <div className="space-y-2">
                      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                        <span className="block text-foreground mb-2">
                          Welcome to
                        </span>
                        <TypingAnimation
                          words={[
                            "My Portfolio",
                            "My Universe",
                            "My Creations",
                            "My Story",
                          ]}
                          className="inline-block bg-clip-text text-transparent bg-linear-to-br from-primary to-primary/50 pb-2 border-none"
                        />
                      </div>
                    </div>

                    {/* Elegant Divider */}
                    <div className="flex items-center justify-center gap-2 animate-in fade-in zoom-in-50 duration-700 delay-500 fill-mode-both">
                      <div className="h-[2px] w-12 bg-linear-to-r from-transparent to-primary/50" />
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <div className="h-[2px] w-12 bg-linear-to-l from-transparent to-primary/50" />
                    </div>

                    {/* Subtitle */}
                    <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-sans font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
                      I build scalable, production-ready web applications with{" "}
                      <span className="font-semibold text-foreground">
                        clean architecture
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-foreground">
                        system-driven design
                      </span>
                      .
                    </p>
                  </div>
                </div>
              }
            >
              {children}
            </Transition>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
