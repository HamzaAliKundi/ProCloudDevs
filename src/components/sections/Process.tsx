"use client";

import { motion } from 'framer-motion';
import { Search, PenTool, Terminal, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
    {
        title: "Discovery & Strategy",
        desc: "We dive deep into your requirements and business goals to chart the best path forward.",
        icon: <Search className="w-8 h-8" />,
    },
    {
        title: "UI/UX Design",
        desc: "Crafting intuitive and aesthetically pleasing interfaces tailored to your users.",
        icon: <PenTool className="w-8 h-8" />,
    },
    {
        title: "Agile Development",
        desc: "Sprint-based development with regular updates and high-quality code standards.",
        icon: <Terminal className="w-8 h-8" />,
    },
    {
        title: "Quality Assurance",
        desc: "Rigorous testing across all devices to ensure a bug-free and smooth experience.",
        icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
        title: "Launch & Support",
        desc: "Seamless deployment followed by continuous monitoring and technical support.",
        icon: <Rocket className="w-8 h-8" />,
    },
];

export function Process() {
    return (
        <section id="process" className="section-padding bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Working <span className="text-primary italic">Process</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A transparent and proven methodology for delivering enterprise-grade software.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-24 h-24 mx-auto rounded-3xl bg-card border border-border shadow-md flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 relative">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
