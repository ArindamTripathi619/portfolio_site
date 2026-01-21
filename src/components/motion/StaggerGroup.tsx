import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerGroupProps {
    children: ReactNode;
    staggerDelay?: number;
    delay?: number;
}

export const StaggerGroup = ({
    children,
    staggerDelay = 0.12,
    delay = 0.12 // Default confidence delay (Rule 3)
}: StaggerGroupProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children }: { children: ReactNode }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: shouldReduceMotion ? 0.4 : 0.8,
                        ease: [0.4, 0, 0.2, 1]
                    }
                },
            }}
        >
            {children}
        </motion.div>
    );
};
