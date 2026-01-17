"use client";

import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="pt-48 pb-24 bg-muted relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8 px-4"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}
