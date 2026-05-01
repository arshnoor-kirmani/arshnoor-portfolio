import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-background border-t border-surface-border">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">

          {/* Brand + copyright */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="group relative flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-full"
            >
              <Image
                src="https://github.com/arshnoorkirmani.png"
                alt="Arshnoor Kirmani"
                width={30}
                height={30}
                className="rounded-full ring-1 ring-border transition-all duration-200 group-hover:ring-2 group-hover:ring-primary"
              />
              {/* Amber dot — brand mark */}
              <div className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full bg-primary border-2 border-background" />
            </Link>
            <p className="text-[9px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
              &copy; {currentYear} Arshnoor Kirmani
            </p>
          </div>

          {/* Secondary links */}
          <nav aria-label="Footer navigation" className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "GitHub",   href: siteConfig.links.github   },
              { label: "LinkedIn", href: siteConfig.links.linkedin  },
              { label: "Resume",   href: siteConfig.links.resume    },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Build info */}
          <p className="text-[9px] font-bold tracking-[0.2em] text-muted-foreground/30 uppercase hidden sm:block">
            Next.js 16
          </p>
        </div>
      </div>
    </footer>
  );
}
