"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export const Thinking = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Three parallax layers at different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    // ASCII/Engineering symbols for each layer
    const symbols = {
        layer1: [
            { char: "┌─┐", x: "10%", y: "15%" },
            { char: "├─┤", x: "85%", y: "70%" },
            { char: "└─┘", x: "50%", y: "45%" },
            { char: "┼", x: "25%", y: "60%" },
            { char: "∫", x: "75%", y: "30%" },
            { char: "∆", x: "5%", y: "85%" },
            { char: "∇", x: "90%", y: "20%" },
            { char: "∅", x: "40%", y: "10%" },
            { char: "∏", x: "65%", y: "90%" },
            { char: "⊆", x: "20%", y: "35%" },
        ],
        layer2: [
            { char: "→", x: "15%", y: "25%" },
            { char: "λ", x: "60%", y: "55%" },
            { char: "∞", x: "80%", y: "80%" },
            { char: "fn", x: "40%", y: "35%" },
            { char: "::", x: "90%", y: "90%" },
            { char: "∂", x: "20%", y: "15%" },
            { char: "Σ", x: "70%", y: "48%" },
            { char: "≠", x: "30%", y: "68%" },
            { char: "←", x: "85%", y: "10%" },
            { char: "∀", x: "10%", y: "95%" },
            { char: "∃", x: "50%", y: "5%" },
            { char: "∈", x: "25%", y: "85%" },
            { char: "∉", x: "75%", y: "65%" },
            { char: "∝", x: "35%", y: "45%" },
            { char: "∠", x: "95%", y: "30%" },
            { char: "√", x: "5%", y: "40%" },
        ],
        layer3: [
            { char: "//", x: "5%", y: "20%" },
            { char: "=>", x: "95%", y: "50%" },
            { char: "{}", x: "35%", y: "65%" },
            { char: "[]", x: "65%", y: "10%" },
            { char: "~", x: "85%", y: "40%" },
            { char: "|>", x: "45%", y: "75%" },
            { char: "≈", x: "15%", y: "85%" },
            { char: "<>", x: "55%", y: "28%" },
            { char: "&&", x: "25%", y: "58%" },
            { char: "||", x: "80%", y: "95%" },
            { char: "!=", x: "92%", y: "8%" },
            { char: "?", x: "5%", y: "72%" },
            { char: "++", x: "12%", y: "5%" },
            { char: "--", x: "88%", y: "25%" },
            { char: "**", x: "42%", y: "92%" },
            { char: "%%", x: "78%", y: "15%" },
            { char: "$$", x: "8%", y: "55%" },
            { char: "##", x: "60%", y: "82%" },
            { char: "@@", x: "30%", y: "32%" },
            { char: ">>", x: "95%", y: "68%" },
            { char: "<<", x: "18%", y: "90%" },
        ],
    };

    return (
        <section ref={containerRef} className="relative min-h-screen bg-ink-black py-40 px-6 md:px-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/assets/videos/Style_cinematic_restrained_202601202249_b3.mp4" type="video/mp4" />
                </video>
            </div>

            {/* ASCII Parallax Layer */}
            <div className="absolute inset-0 pointer-events-none select-none hidden md:block z-0">
                {/* Layer 1: Slowest, largest */}
                <motion.div style={{ y: y1 }} className="absolute inset-0">
                    {symbols.layer1.map((symbol, i) => (
                        <motion.div
                            key={`l1-${i}`}
                            className="absolute text-accent/15 text-4xl font-mono"
                            style={{ left: symbol.x, top: symbol.y }}
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.5,
                            }}
                        >
                            {symbol.char}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Layer 2: Medium speed */}
                <motion.div style={{ y: y2 }} className="absolute inset-0">
                    {symbols.layer2.map((symbol, i) => (
                        <motion.div
                            key={`l2-${i}`}
                            className="absolute text-accent/25 text-2xl font-mono"
                            style={{ left: symbol.x, top: symbol.y }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 6 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.8,
                            }}
                        >
                            {symbol.char}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Layer 3: Fastest, smallest */}
                <motion.div style={{ y: y3 }} className="absolute inset-0">
                    {symbols.layer3.map((symbol, i) => (
                        <motion.div
                            key={`l3-${i}`}
                            className="absolute text-accent/20 text-base font-mono"
                            style={{ left: symbol.x, top: symbol.y }}
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 5 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5,
                            }}
                        >
                            {symbol.char}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="relative z-10 max-w-4xl">
                <RevealOnScroll>
                    <h2 className="text-small uppercase tracking-[0.4em] text-accent mb-8">03 — How I Think</h2>
                    <p className="text-h1 font-light text-text-primary mb-12">
                        Systems thinking is the language of complexity.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                    <div className="w-20 h-[1px] bg-gradient-to-r from-accent to-transparent mb-12" />
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-text-secondary relative">
                    {/* Diagram Metaphor Lines */}
                    <div className="absolute -left-10 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden md:block" />

                    <RevealOnScroll delay={0.2}>
                        <div className="space-y-6">
                            <h4 className="text-accent/80 uppercase tracking-widest text-xs">Research Depth</h4>
                            <p>I prioritize understanding the &ldquo;why&rdquo; before the &ldquo;how&rdquo;. Every project starts with a deep dive into the underlying systems and constraints.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.4}>
                        <div className="space-y-6">
                            <h4 className="text-accent/80 uppercase tracking-widest text-xs">Iterative Refinement</h4>
                            <p>Engineering maturity isn&apos;t about code quantity; it&apos;s about the restraint to simplify and the patience to refine until every transition feels inevitable.</p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export const Playground = () => {
    return (
        <section className="bg-ink-black py-40 px-6 md:px-20 border-y border-warm-charcoal/30">
            <div className="flex flex-col md:flex-row gap-20 items-center justify-between">
                <div className="max-w-xl">
                    <h2 className="text-small uppercase tracking-[0.4em] text-accent mb-8">04 — Playground</h2>
                    <p className="text-h2 font-light text-text-secondary leading-relaxed">
                        I believe in building small to understand big. My playground is filled with experiments in Rust, Gemini Nano, and narrative consistency.
                    </p>
                </div>
                <div className="w-full md:w-80 aspect-square relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover rounded-full"
                    >
                        <source src="/assets/videos/Style_cinematic_restrained_202601202249_hq.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
};

const ICONS = [
    { name: "Next.js", path: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" },
    { name: "React", path: "M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" },
    { name: "Rust", path: "M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z", fillRule: "evenodd" as const },
    { name: "Python", path: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" },
    { name: "TypeScript", path: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" },
    { name: "Flutter", path: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46z" },
    { name: "Tauri", path: "M13.912 0a8.72 8.72 0 0 0-8.308 6.139c1.05-.515 2.18-.845 3.342-.976 2.415-3.363 7.4-3.412 9.88-.097 2.48 3.315 1.025 8.084-2.883 9.45a6.131 6.131 0 0 1-.3 2.762 8.72 8.72 0 0 0 3.01-1.225A8.72 8.72 0 0 0 13.913 0zm.082 6.451a2.284 2.284 0 1 0-.15 4.566 2.284 2.284 0 0 0 .15-4.566zm-5.629.27a8.72 8.72 0 0 0-3.031 1.235 8.72 8.72 0 1 0 13.06 9.9131 10.173 10.174 0 0 1-3.343.965 6.125 6.125 0 1 1-7.028-9.343 6.114 6.115 0 0 1 .342-2.772zm1.713 6.27a2.284 2.284 0 0 0-2.284 2.283 2.284 2.284 0 0 0 2.284 2.284 2.284 2.284 0 0 0 2.284-2.284 2.284 2.284 0 0 0-2.284-2.284z" },
    { name: "PyTorch", path: "M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z" },
];

const IconItem = ({ tool }: { tool: { name: string; path: string; fillRule?: "nonzero" | "evenodd" } }) => {
    return (
        <motion.div
            initial={{ opacity: 0.3, filter: "grayscale(100%)" }}
            whileInView={{
                opacity: 1,
                filter: "grayscale(0%)",
                transition: { duration: 0.5, ease: "easeOut" }
            }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            className="flex flex-col items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path d={tool.path} fillRule={tool.fillRule || "nonzero"} />
            </svg>
            <span className="text-[8px] uppercase tracking-widest">{tool.name}</span>
        </motion.div>
    );
};

export const Stack = () => {
    return (
        <section className="bg-ink-black py-40 px-6 md:px-20 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                    <source src="/assets/videos/Style_cinematic_restrained_202601202249_gd.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="relative z-10">
                <RevealOnScroll>
                    <h2 className="text-small uppercase tracking-[0.4em] text-accent mb-12">05 — Icons & Stack</h2>
                </RevealOnScroll>

                <div className="flex flex-wrap gap-12 mb-24">
                    <RevealOnScroll delay={0.2}>
                        <div className="flex flex-wrap gap-8 md:gap-16 items-center">
                            {ICONS.map((tool, i) => (
                                <IconItem key={i} tool={tool} />
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Micro-motion Divider (Rule 8) */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="h-[1px] w-full bg-gradient-to-r from-warm-charcoal via-accent/30 to-warm-charcoal mb-12 origin-left"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {[
                        { name: "Frameworks", tools: ["Next.js", "Flutter", "Tauri"] },
                        { name: "Languages", tools: ["Rust", "TypeScript", "Dart", "Python"] },
                        { name: "Intelligence", tools: ["Gemini Nano", "PyTorch", "HuggingFace"] },
                        { name: "Design", tools: ["Framer Motion", "GSAP", "Figma"] },
                    ].map((group, i) => (
                        <div key={i} className="space-y-4">
                            <h4 className="text-text-tertiary text-[10px] uppercase tracking-widest">{group.name}</h4>
                            <ul className="space-y-2">
                                {group.tools.map((tool, j) => (
                                    <li key={j} className="text-text-primary font-light text-small">{tool}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const HumanEnding = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-ink-black relative px-6 md:px-20 gap-12 md:gap-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10 grayscale">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/assets/videos/Style_cinematic_restrained_202601202249_y7.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 w-full md:w-1/3 aspect-[3/4] max-w-sm rounded-lg overflow-hidden border border-warm-charcoal shadow-2xl">
                <RevealOnScroll threshold={0.3}>
                    <img
                        src="/assets/images/my_image.webp"
                        alt="Arindam Tripathi"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </RevealOnScroll>
            </div>

            <div className="relative z-10 md:text-left text-center flex-1 max-w-2xl">
                <RevealOnScroll>
                    <p className="text-h2 font-light text-text-secondary mb-12 leading-relaxed">
                        I enjoy building things that sit quietly until they matter. When I’m not coding, I think about systems, philosophy, and how technology shapes emotion.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                    <div className="w-20 h-[1px] bg-gradient-to-r from-accent to-transparent mb-12 md:mx-0 mx-auto" />
                </RevealOnScroll>

                <RevealOnScroll delay={0.6}>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <h3 className="text-small uppercase tracking-[0.5em] text-accent font-light">
                            Stay Curious
                        </h3>
                        <a
                            href="https://github.com/ArindamTripathi619"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-[0.4em] text-text-tertiary hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
                        >
                            View GitHub
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
