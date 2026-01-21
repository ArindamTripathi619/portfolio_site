"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const PROJECTS = [
    {
        name: "Orion",
        domain: "AI / Android",
        description: "A private, hybrid voice assistant for Android using on-device Gemma LLM.",
        video: "/assets/videos/Style_cinematic_restrained_202601202245_r5.mp4",
        repo: "https://github.com/ArindamTripathi619/Orion",
    },
    {
        name: "Smart Safety System",
        domain: "Full-Stack / SIH 2025",
        description: "Real-time tourist safety monitoring and incident response ecosystem.",
        video: "/assets/videos/Style_cinematic_restrained_202601202246_g9.mp4",
        repo: "https://github.com/ArindamTripathi619/smart-tourist-safety-system",
    },
    {
        name: "MediaForge",
        domain: "Rust / Desktop",
        description: "Production-grade media manipulation tool built with Rust and Tauri.",
        video: "/assets/videos/Style_cinematic_restrained_202601202247_c4.mp4",
        repo: "https://github.com/ArindamTripathi619/MediaForge",
    },
];

export const Projects = () => {
    return (
        <section className="bg-ink-black px-6 md:px-20 py-40">
            <RevealOnScroll>
                <div className="mb-20">
                    <h2 className="text-small uppercase tracking-[0.4em] text-accent mb-2">02 — Signature Projects</h2>
                    <p className="text-h2 font-light text-text-primary">Deep work over broad range.</p>
                </div>
            </RevealOnScroll>

            <div className="space-y-40 md:space-y-0">
                {PROJECTS.map((project, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-20 items-stretch min-h-[50vh] md:min-h-screen`}>
                        <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-warm-charcoal md:sticky md:top-0 md:h-screen">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-full w-full object-cover opacity-60"
                            >
                                <source src={project.video} type="video/mp4" />
                            </video>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center py-20">
                            <StaggerGroup>
                                <StaggerItem>
                                    <span className="text-small uppercase tracking-[0.2em] text-text-tertiary mb-2 block">{project.domain}</span>
                                </StaggerItem>
                                <StaggerItem>
                                    <h3 className="text-h2 font-light mb-6 tracking-[0.02em]">{project.name}</h3>
                                </StaggerItem>
                                <StaggerItem>
                                    <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
                                        {project.description}
                                    </p>
                                </StaggerItem>
                                <StaggerItem>
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group text-xs uppercase tracking-[0.4em] border-b border-accent pb-1 hover:text-accent transition-colors inline-flex items-center gap-2"
                                    >
                                        Explore Depth
                                        <span className="block max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden opacity-0 group-hover:opacity-100 ease-soft">
                                            -&gt;
                                        </span>
                                    </a>
                                </StaggerItem>
                            </StaggerGroup>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
