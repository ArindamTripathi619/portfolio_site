"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

const DOMAIN_CARD_DATA = [
    {
        title: "AI Systems",
        description: "I turn abstract intelligence into usable systems.",
        tint: "group-hover:sepia-[0.3] group-hover:hue-rotate-[190deg] group-hover:saturate-150",
        position: "object-left-top",
        zoom: "scale-[2.2]",
        speed: 0.7,
    },
    {
        title: "Mobile Experiences",
        description: "Building emotionally engaging products with Flutter and Native Android.",
        tint: "group-hover:sepia-[0.2] group-hover:hue-rotate-[120deg] group-hover:saturate-150",
        position: "object-right-bottom",
        zoom: "scale-[3.5]",
        speed: 1.5,
    },
    {
        title: "Systems Engineering",
        description: "High-performance desktop applications built with Rust and Tauri.",
        tint: "group-hover:sepia-[0.4] group-hover:hue-rotate-[10deg] group-hover:saturate-150",
        position: "object-center",
        zoom: "scale-[5.0]",
        speed: 0.9,
    },
    {
        title: "Research & Experiments",
        description: "Deep dives into LLMs, prompt injection, and narrative consistency.",
        tint: "group-hover:sepia-[0.3] group-hover:hue-rotate-[290deg] group-hover:saturate-150",
        position: "object-bottom-left",
        zoom: "scale-[1.8]",
        speed: 0.5,
    },
];

const DomainVideo = ({ speed, position, tint, zoom }: { speed: number; position: string; tint: string; zoom: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    }, [speed]);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700 ${position} ${tint} ${zoom}`}
        >
            <source src="/assets/videos/Style_cinematic_restrained_202601202245_4c.mp4" type="video/mp4" />
        </video>
    );
};

export const Domains = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-ink-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-20 left-20 z-10">
                    <RevealOnScroll>
                        <h2 className="text-small uppercase tracking-[0.4em] text-accent mb-2">01 — What I Build</h2>
                        <p className="text-h2 font-light text-text-primary">Bridging the gap between logic and design.</p>
                    </RevealOnScroll>
                </div>

                <motion.div style={{ x }} className="flex gap-20 px-20">
                    {DOMAIN_CARD_DATA.map((domain, i) => (
                        <div
                            key={i}
                            className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-end p-12 border border-warm-charcoal bg-warm-charcoal/30 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <DomainVideo
                                    speed={domain.speed}
                                    position={domain.position}
                                    tint={domain.tint}
                                    zoom={domain.zoom}
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-h2 font-light mb-4 tracking-[0.02em]">{domain.title}</h3>
                                <p className="text-small text-text-secondary max-w-xs">{domain.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
