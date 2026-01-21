import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealOnScrollProps {
    children: ReactNode;
    delay?: number;
    threshold?: number;
    enableHover?: boolean;
}

export const RevealOnScroll = ({
    children,
    delay = 0.12, // Default confidence delay (Rule 3)
    threshold = 0.15,
    enableHover = false
}: RevealOnScrollProps) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: threshold }}
            transition={{
                duration: shouldReduceMotion ? 0.45 : 0.9,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={!shouldReduceMotion && enableHover ? { scale: 1.02 } : {}} // Locked to max 1.03 (Rule 6)
        >
            {children}
        </motion.div>
    );
};
