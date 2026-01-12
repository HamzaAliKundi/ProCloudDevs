"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import {
    Home,
    Rotate3d,
    LineChart,
    HeartHandshake
} from 'lucide-react';

const reasons = [
    {
        title: "One Roof Solution",
        desc: "All website styles and technologies under one roof. From WordPress to custom apps.",
        icon: <Home size={32} />,
        color: "text-blue-500",
    },
    {
        title: "Bespoke Customization",
        desc: "Custom solutions, never one size fits all. We tailor every project to your unique vision.",
        icon: <Rotate3d size={32} />,
        color: "text-cyan-500",
    },
    {
        title: "Results Driven",
        desc: "Results driven design and development built with your specific business goals in mind.",
        icon: <LineChart size={32} />,
        color: "text-purple-500",
    },
    {
        title: "Reliable Support",
        desc: "Dedicated support before and after launch to ensure your digital foundation remains strong.",
        icon: <HeartHandshake size={32} />,
        color: "text-indigo-500",
    },
];

export function WhyChooseUs() {
    return (
        <section className="section-padding bg-muted/30 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
                        >
                            The ProCloud Edge
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
                        >
                            Why Businesses <br /> <span className="text-secondary italic">Choose Us</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-xl max-w-md pb-4"
                    >
                        We don’t just build websites, we build digital foundations that help brands stand out, scale, and succeed online.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <Card key={reason.title} delay={index * 0.1} withGlow={false} className="bg-background/50 backdrop-blur-md border-border/50 group h-full">
                            <div className={`mb-6 ${reason.color} group-hover:scale-110 transition-transform duration-500`}>
                                {reason.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {reason.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
