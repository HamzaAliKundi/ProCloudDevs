"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    isGlass?: boolean;
    hoverEffect?: boolean;
    withGlow?: boolean;
    delay?: number;
}

export function Card({ children, className, isGlass = false, hoverEffect = true, withGlow = true, delay = 0 }: CardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { damping: 20, stiffness: 100 });
    const mouseYSpring = useSpring(y, { damping: 20, stiffness: 100 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            style={{
                rotateX: hoverEffect ? rotateX : 0,
                rotateY: hoverEffect ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                'relative rounded-[2rem] p-10 overflow-hidden transition-all duration-500 bg-card border border-border group',
                isGlass ? 'glass' : 'shadow-sm hover:shadow-2xl',
                withGlow && 'hover:border-primary/30',
                className
            )}
        >
            <div style={{ transform: "translateZ(60px)" }} className="relative z-10 h-full">
                {children}
            </div>

            {withGlow && (
                <div
                    className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(-20px)" }}
                />
            )}

            <div
                className="absolute -inset-[100%] z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(37,99,235,0.1)_0%,transparent_50%)]"
                style={{ transform: "translateZ(10px)" }}
            />
        </motion.div>
    );
}
