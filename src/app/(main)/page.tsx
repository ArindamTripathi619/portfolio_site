"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

const Domains = dynamic(() => import("@/components/sections/Domains").then(mod => mod.Domains), {
  ssr: false,
  loading: () => <div className="h-[200vh] bg-ink-black" />
});

const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => mod.Projects), {
  ssr: false,
  loading: () => <div className="h-screen bg-ink-black" />
});

const Thinking = dynamic(() => import("@/components/sections/ThinkingAndEnding").then(mod => mod.Thinking), {
  ssr: false
});

const Playground = dynamic(() => import("@/components/sections/ThinkingAndEnding").then(mod => mod.Playground), {
  ssr: false
});

const Stack = dynamic(() => import("@/components/sections/ThinkingAndEnding").then(mod => mod.Stack), {
  ssr: false
});

const HumanEnding = dynamic(() => import("@/components/sections/ThinkingAndEnding").then(mod => mod.HumanEnding), {
  ssr: false
});

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <RevealOnScroll threshold={0.1}>
        <Domains />
      </RevealOnScroll>
      <RevealOnScroll threshold={0.1}>
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll threshold={0.1}>
        <Thinking />
      </RevealOnScroll>
      <RevealOnScroll threshold={0.1}>
        <Playground />
      </RevealOnScroll>
      <RevealOnScroll threshold={0.1}>
        <Stack />
      </RevealOnScroll>
      <RevealOnScroll threshold={0.1}>
        <HumanEnding />
      </RevealOnScroll>

      {/* Footer (Subtle) */}
      <footer className="relative z-20 bg-ink-black py-20 px-6 md:px-20 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-text-tertiary border-t border-warm-charcoal/30">
        <span>Arindam Tripathi — 2026</span>
        <div className="flex gap-8">
          <a href="https://github.com/ArindamTripathi619" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/arindam-tripathi-962551349/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">X</a>
        </div>
      </footer>
    </main>
  );
}
