import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${inter.variable} font-sans antialiased bg-black text-[#E6E9EE]`}>
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] grain-overlay" />
            <ScrollProgress />
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </div>
    );
}
