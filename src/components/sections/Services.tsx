"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import {
    Code2,
    Database,
    Smartphone,
    Globe,
    Layers,
    ShoppingCart,
    Settings,
    Server
} from 'lucide-react';

const services = [
    {
        title: "MERN Stack Development",
        desc: "Robust full-stack web applications built with React, Node.js, Express, and MongoDB.",
        icon: <Code2 />,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "PostgreSQL & SQL Design",
        desc: "Optimized relational database systems designed for complex data and high security.",
        icon: <Database />,
        color: "bg-cyan-500/10 text-cyan-500",
    },
    {
        title: "React Native Apps",
        desc: "High-performance cross-platform mobile apps for iOS and Android with a single codebase.",
        icon: <Smartphone />,
        color: "bg-indigo-500/10 text-indigo-500",
    },
    {
        title: "Flutter Development",
        desc: "Beautifully native-compiled mobile and web applications with seamless UX.",
        icon: <Layers />,
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        title: ".NET Core / APIs",
        desc: "Scalable enterprise-grade backends and high-performance Web APIs.",
        icon: <Server />,
        color: "bg-violet-500/10 text-violet-500",
    },
    {
        title: "WordPress Development",
        desc: "Custom-designed, highly functional, and easy-to-manage WordPress solutions.",
        icon: <Globe />,
        color: "bg-blue-600/10 text-blue-600",
    },
    {
        title: "Shopify E-commerce",
        desc: "Bespoke e-commerce storefronts optimized for conversions and growth.",
        icon: <ShoppingCart />,
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "Cloud & API Integrations",
        desc: "Seamlessly connecting your platforms with AWS, Azure, and third-party services.",
        icon: <Settings />,
        color: "bg-teal-500/10 text-teal-500",
    },
];

export function Services() {
    return (
        <section id="services" className="section-padding bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                    >
                        High-Performance <br /> <span className="text-primary italic">Digital Engineering</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                    >
                        We don't just build websites; we engineer scalable ecosystems that drive business growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <Card key={service.title} delay={index * 0.1} className="h-full flex flex-col group py-12">
                            <div className={cn(
                                "w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl",
                                service.color
                            )}>
                                {React.cloneElement(service.icon as React.ReactElement, { size: 32 } as any)}
                            </div>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                                {service.desc}
                            </p>
                            <div className="mt-10 pt-8 border-t border-border flex items-center justify-between">
                                <button className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-3 group/btn">
                                    Explore Service
                                    <div className="w-8 h-[2px] bg-primary group-hover/btn:w-12 transition-all duration-300" />
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
