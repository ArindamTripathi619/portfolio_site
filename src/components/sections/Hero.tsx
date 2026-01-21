"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-ink-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover opacity-30"
                >
                    <source src="/assets/videos/Style_cinematic_restrained_202601202244_bb.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <FadeIn delay={0.6}>
                    <h1 className="text-hero md:text-hero font-light mb-4 tracking-[0.02em]">
                        I build intelligent systems
                    </h1>
                </FadeIn>
                <FadeIn delay={0.9}>
                    <h1 className="text-hero md:text-hero font-light mb-8 tracking-[0.02em]">
                        that feel human.
                    </h1>
                </FadeIn>

                <div className="mt-8 flex items-center justify-center gap-4 text-text-tertiary text-small tracking-[0.2em] uppercase">
                    <FadeIn delay={1.4}><span>AI</span></FadeIn>
                    <FadeIn delay={1.5}><span className="w-1 h-1 rounded-full bg-accent opacity-50" /></FadeIn>
                    <FadeIn delay={1.6}><span>Flutter</span></FadeIn>
                    <FadeIn delay={1.7}><span className="w-1 h-1 rounded-full bg-accent opacity-50" /></FadeIn>
                    <FadeIn delay={1.8}><span>Systems</span></FadeIn>
                    <FadeIn delay={1.9}><span className="w-1 h-1 rounded-full bg-accent opacity-50" /></FadeIn>
                    <FadeIn delay={2.0}><span>Research</span></FadeIn>
                </div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-text-tertiary">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
        </section>
    );
};
