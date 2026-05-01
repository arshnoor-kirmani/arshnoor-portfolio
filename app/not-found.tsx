import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Nav />

      <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-background">
        {/* Ambient glow */}
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px]" />
        </div>

        <div className="text-center space-y-8 max-w-xl">
          {/* Error code */}
          <p className="text-xs font-bold tracking-[0.5em] text-primary uppercase">
            Error 404
          </p>

          {/* Headline */}
          <h1 className="text-[clamp(5rem,15vw,10rem)] font-bold tracking-tighter leading-none text-foreground">
            Lost.
          </h1>

          {/* Sub-copy */}
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            This page doesn&apos;t exist — or it may have moved. Head back to
            the portfolio.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
