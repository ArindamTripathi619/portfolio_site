"use client";

import { Mail, MapPin, Globe, Github, Linkedin, Award, BookOpen, Code2, Briefcase, FileText, Zap, Terminal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Resume = () => {
    const details = {
        name: "Arindam Tripathi",
        age: 20,
        address: "Srikhanda, Narendrapur, South 24 Parganas, West Bengal, India",
        phone: "+91 8250664257",
        email: "arindamtripathi.619@gmail.com",
        portfolio: "devcrewx.tech",
        education: [
            {
                institution: "KIIT University",
                degree: "B.Tech in Computer Science (Undergoing 4th Semester)",
                year: "2024 - 2028 (expected)",
                score: "8.0 CGPA"
            },
            {
                institution: "St. Stephen's School Sonarpur",
                degree: "ISC (Class XII)",
                year: "2024",
                score: "88.25%"
            }
        ],
        skills: {
            languages: ["TypeScript", "JavaScript", "Rust", "Python", "C++", "C", "SQL", "Kotlin"],
            frontend: ["React.js", "Next.js 15", "Tailwind CSS", "Framer Motion", "Vite", "Material UI", "Jetpack Compose"],
            backend: ["Node.js", "Express.js", "FastAPI", "Tauri", "MongoDB", "PostgreSQL", "Prisma ORM", "Hilt DI"],
            devops_cloud: ["GCP (Cloud Run, SQL, Storage)", "Docker", "GitHub Actions (CI/CD)", "Nginx", "PM2", "Linux (Arch/Ubuntu)"],
            research_ai: ["Ollama", "MediaPipe LLM", "Gemma", "Mistral", "RAG Systems", "Vector Indexes", "Prompt Injection Defense"]
        },
        research: [
            {
                title: "Evaluating and Mitigating Prompt Injection in Full-Stack Web Applications: A System-Level Workflow Model",
                role: "Lead Researcher",
                status: "Pre-publication / Experimental Phase",
                highlights: [
                    "Developed a six-layer defense architecture against prompt injection attacks in LLM systems.",
                    "Achieved 68.1% reduction in Attack Success Rate (ASR) via adaptive layer coordination.",
                    "Validated using 11,000+ execution traces on cloud-based RTX 4090 GPUs."
                ]
            },
            {
                title: "Threat Modeling and Mitigation of Prompt Injection Attacks in LLM-Powered Healthcare Web Applications",
                role: "Lead Researcher",
                status: "Development & Data Analysis",
                highlights: [
                    "Simulated direct/indirect prompt injection vectors specifically for healthcare environments.",
                    "Implemented 'Vector Shield' and 'Guardrails' to protect sensitive EHR (Electronic Health Record) data.",
                    "Focused on LLM Orchestrator security and systemic data integrity."
                ]
            }
        ],
        projects: [
            {
                title: "ApexSolar - Employee Management Platform",
                role: "Full-Stack & DevOps Lead",
                description: "A production-grade employee management system with 100% test coverage and automated cloud infrastructure.",
                highlights: [
                    "Architected on Next.js 15, Prisma, and PostgreSQL (Google Cloud SQL).",
                    "Automated CI/CD using GitHub Actions and Docker for zero-downtime deployment to Google Cloud Run.",
                    "Implemented secure document handling via Google Cloud Storage and role-based access control."
                ]
            },
            {
                title: "EpochZero - Narrative Consistency RAG",
                role: "Systems & NLP Developer",
                description: "Winning entry for KDSH 2026 (IIT Kharagpur) - a RAG-based pipeline for story consistency classification.",
                highlights: [
                    "Leveraged Pathway for real-time document indexing and retrieval of long-form character backstories.",
                    "Integrated local Mistral LLM via Ollama for conservative, high-precision consistency reasoning.",
                    "Achieved 62.5% accuracy in classifying character contradictions within complex novel narratives."
                ]
            },
            {
                title: "Orion - Android Voice Assistant MVP",
                role: "AI & Mobile Developer",
                description: "Privacy-first, on-device voice assistant designed for high speed and offline reliability.",
                highlights: [
                    "Integrated Gemma 3n via MediaPipe LLM Inference API for hybrid routing between AI/Rule-based NLU.",
                    "Built using Kotlin, Hilt DI, and Room DB for persistent, secure local data management.",
                    "Designed modular 'Skill' architecture supporting music, messaging, and system controls."
                ]
            },
            {
                title: "RakshaSetu - Smart Tourist Safety System",
                role: "Team Lead & Full-Stack Developer",
                description: "Comprehensive digital ecosystem for real-time safety monitoring (SIH 2025).",
                highlights: [
                    "Integrated Socket.IO for real-time GPS location broadcasting and instant emergency response.",
                    "Built multi-platform: React (Admin Dashboard), React Native (Mobile), and Node.js (Backend)."
                ]
            },
            {
                title: "MediaForge",
                role: "Systems Specialist",
                description: "Desktop media conversion and downloader application built for performance-critical tasks.",
                highlights: [
                    "Powered by Rust (Tauri) and React with end-to-end type safety and async Tokio runtime.",
                    "Integrated FFmpeg and ImageMagick for high-fidelity, high-concurrency media processing."
                ]
            }
        ],
        achievements: [
            "Participated in Smart India Hackathon (SIH) 2025 (KIIT Campus)",
            "Participated in Kharagpur Data Science Hackathon (KDSH) 2026 (IIT Kharagpur)"
        ]
    };

    return (
        <div className="min-h-screen w-full bg-ink-black py-10 px-4 sm:px-6 lg:px-8 font-inter print:bg-white print:py-0 print:px-0 scroll-smooth relative flex flex-col items-center">
            <Link
                href="/"
                className="fixed top-8 right-8 z-50 bg-accent text-ink-black p-3 px-6 rounded-full shadow-2xl hover:scale-105 transition-all active:scale-95 group print:hidden flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Exit Resume</span>
            </Link>

            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none resume-reset">

                {/* Header Section */}
                <header className="bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden print:p-4 print:pb-2">
                    <div className="relative z-10 flex flex-col md:flex-row items-center sm:items-start md:items-center justify-between gap-8 print:gap-2">
                        <div className="text-center sm:text-left">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 uppercase print:text-2xl print:mb-0.5 text-white no-reset">{details.name}</h1>
                            <p className="text-slate-400 text-xl font-medium tracking-wide mb-6 print:text-xs print:mb-2 italic no-reset">Software Engineer & Systems Researcher</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm max-w-2xl print:text-[9px] print:gap-1 print:grid-cols-2">
                                <div className="flex items-center gap-2 justify-center sm:justify-start">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                    <a href={`mailto:${details.email}`} className="hover:text-blue-400 transition-colors">{details.email}</a>
                                </div>
                                <div className="flex items-center gap-2 justify-center sm:justify-start">
                                    <Globe className="w-4 h-4 text-blue-400" />
                                    <a href={`https://${details.portfolio}`} className="hover:text-blue-400 transition-colors uppercase font-bold tracking-wider">{details.portfolio}</a>
                                </div>
                                <div className="flex items-center gap-2 justify-center sm:justify-start">
                                    <MapPin className="w-4 h-4 text-blue-400" />
                                    <span>{details.address}</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center sm:justify-start">
                                    <Terminal className="w-4 h-4 text-blue-400" />
                                    <div className="flex gap-4">
                                        <a href="https://github.com/ArindamTripathi619" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                                            <Github className="w-3.5 h-3.5" /> GitHub
                                        </a>
                                        <a href="https://linkedin.com/in/arindam-tripathi-962551349/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                                            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="flex-shrink-0 relative group">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl relative z-10 print:shadow-none print:border-slate-800 print:w-20 print:h-20">
                                <img
                                    src="/assets/images/my_image.webp"
                                    alt={details.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 print:grayscale-0 transition-all duration-700"
                                    style={{ objectPosition: '50% 20%' }}
                                />
                            </div>
                            <div className="absolute -inset-2 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 print:hidden"></div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 opacity-5 rounded-full -ml-16 -mb-16 blur-2xl"></div>
                </header>

                <div className="flex flex-col md:flex-row">

                    {/* Main Content Section */}
                    <main className="w-full md:w-2/3 p-8 sm:p-12 space-y-12 print:p-4 print:space-y-4 print:w-[65%]">

                        {/* Research Section */}
                        <section className="print:space-y-1">
                            <div className="flex items-center gap-2 mb-6 text-slate-900 border-b-2 border-slate-100 pb-1 print:mb-1">
                                <FileText className="w-6 h-6 text-blue-600 print:w-3.5 print:h-3.5" />
                                <h2 className="text-2xl font-bold tracking-tight uppercase print:text-xs">Research & Publications</h2>
                            </div>
                            <div className="space-y-8 print:space-y-1.5">
                                {details.research.map((paper, idx) => (
                                    <div key={idx} className="group break-inside-avoid">
                                        <div className="flex justify-between items-start mb-2 print:mb-0.5">
                                            <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-tight group-hover:text-blue-600 transition-colors print:text-[10px]">{paper.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3 print:mb-1">
                                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded tracking-wide uppercase print:text-[8px] print:px-1.5 print:py-0.5">{paper.role}</span>
                                            <span className="text-xs font-bold text-slate-500 italic tracking-tight print:text-[8px]">{paper.status}</span>
                                        </div>
                                        <ul className="space-y-1.5 print:space-y-0.5">
                                            {paper.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="text-slate-700 text-sm flex gap-2 print:text-[9px]">
                                                    <span className="text-blue-500 font-bold">•</span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Projects Section */}
                        <section className="print:space-y-1">
                            <div className="flex items-center gap-2 mb-6 text-slate-900 border-b-2 border-slate-100 pb-1 print:mb-1">
                                <Briefcase className="w-6 h-6 text-blue-600 print:w-3.5 print:h-3.5" />
                                <h2 className="text-2xl font-bold tracking-tight uppercase print:text-xs text-slate-950">Featured Technical Projects</h2>
                            </div>
                            <div className="space-y-10 print:space-y-2">
                                {details.projects.map((project, idx) => (
                                    <div key={idx} className="break-inside-avoid text-slate-900">
                                        <div className="flex justify-between items-center mb-1 print:mb-0">
                                            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight print:text-[10px]">{project.title}</h3>
                                            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase print:text-[6px]">{project.role}</span>
                                        </div>
                                        <p className="text-slate-600 text-[13px] mb-3 leading-relaxed print:text-[8px] print:mb-0.5 print:leading-tight">{project.description}</p>
                                        <ul className="space-y-1.5 print:space-y-0 text-slate-700">
                                            {project.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="text-slate-700 text-xs flex gap-2 print:text-[7.5px] print:leading-tight">
                                                    <Zap className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 print:w-2 print:h-2" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>

                    {/* Sidebar Section */}
                    <aside className="w-full md:w-1/3 bg-slate-50 p-8 sm:p-12 border-t md:border-t-0 md:border-l border-slate-100 space-y-10 print:border-l-0 print:p-3 print:space-y-3 print:bg-slate-50 print:w-[35%]">

                        {/* Technical Skills */}
                        <section className="print:space-y-1">
                            <div className="flex items-center gap-2 mb-6 text-slate-900 print:mb-1">
                                <Code2 className="w-6 h-6 text-blue-600 print:w-3.5 print:h-3.5 no-reset" />
                                <h2 className="text-xl font-bold tracking-tight uppercase print:text-xs">Tech Stack</h2>
                            </div>
                            <div className="space-y-6 print:space-y-1 text-slate-900 leading-normal">
                                <div>
                                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 whitespace-nowrap print:mb-0.5 print:text-[7px] no-reset">Cloud & DevOps</h3>
                                    <div className="flex flex-wrap gap-1.5 print:gap-0.5">
                                        {details.skills.devops_cloud.map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-white border border-slate-200 text-[11px] font-bold text-slate-700 rounded shadow-sm print:text-[7.5px] print:px-1 print:py-0 print:leading-tight no-reset">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                {Object.entries(details.skills).filter(([cat]) => cat !== 'devops_cloud').map(([category, skills]) => (
                                    <div key={category} className="break-inside-avoid">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 uppercase print:mb-0.5 print:text-[7px] no-reset">{category.replace('_', ' ')}</h3>
                                        <div className="flex flex-wrap gap-1.5 print:gap-0.5">
                                            {skills.map(skill => (
                                                <span key={skill} className="px-2 py-1 bg-white border border-slate-200 text-[11px] font-bold text-slate-700 rounded shadow-sm print:text-[7.5px] print:px-1 print:py-0 print:leading-tight no-reset">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="print:space-y-1">
                            <div className="flex items-center gap-2 mb-6 text-slate-900 border-t border-slate-100 pt-6 print:pt-2 print:mb-2">
                                <BookOpen className="w-6 h-6 text-blue-600 print:w-4 print:h-4 text-blue-600" />
                                <h2 className="text-xl font-bold tracking-tight uppercase print:text-sm">Education</h2>
                            </div>
                            <div className="space-y-8 print:space-y-1">
                                {details.education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-4 border-l-2 border-blue-100 break-inside-avoid">
                                        <h3 className="text-[13px] font-bold text-slate-800 leading-tight mb-1 print:text-[10px] print:mb-0">{edu.institution}</h3>
                                        <p className="text-[11px] text-blue-600 font-bold uppercase tracking-tight mb-1 print:text-[8px] print:mb-0">{edu.degree}</p>
                                        <div className="flex justify-between text-[10px] font-bold text-slate-400 print:text-[8px]">
                                            <span>{edu.year}</span>
                                            <span className="text-slate-700">{edu.score}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Achievements */}
                        <section className="bg-white p-6 rounded-xl border border-slate-100 print:p-2 print:rounded-lg">
                            <div className="flex items-center gap-2 mb-4 text-slate-900 print:mb-1">
                                <Award className="w-5 h-5 text-blue-600 print:w-3.5 print:h-3.5 text-blue-600" />
                                <h2 className="text-md font-bold uppercase tracking-tight print:text-[10px]">Achievements</h2>
                            </div>
                            <ul className="space-y-4 print:space-y-1">
                                {details.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-[11px] text-slate-600 font-medium leading-normal flex gap-2 print:text-[8px]">
                                        <span className="text-blue-400 font-bold font-mono">/</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </aside>
                </div>

                <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full print:hidden"></div>
            </div>

            <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-blue-100 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
};

export default Resume;
