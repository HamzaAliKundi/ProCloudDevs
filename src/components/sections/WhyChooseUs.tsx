"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import {
    Users,
    Layers,
    Terminal,
    MessageSquare,
    Clock,
    ShieldCheck
} from 'lucide-react';

const reasons = [
    {
        title: "UK-Based Team",
        desc: "Direct communication with our London-based engineers and architects.",
        icon: <Users size={32} />,
        color: "text-blue-500",
    },
    {
        title: "Scalable Architecture",
        desc: "We build systems that grow from 1,000 to 1,000,000+ users seamlessly.",
        icon: <Layers size={32} />,
        color: "text-cyan-500",
    },
    {
        title: "Clean & Maintainable Code",
        desc: "Future-proof development following industry best practices and SOLID principles.",
        icon: <Terminal size={32} />,
        color: "text-purple-500",
    },
    {
        title: "Transparent Communication",
        desc: "Real-time updates via Slack, Jira, and weekly syncs. No hidden surprises.",
        icon: <MessageSquare size={32} />,
        color: "text-indigo-500",
    },
    {
        title: "On-Time Delivery",
        desc: "Agile workflows designed to meet strict deadlines without compromising quality.",
        icon: <Clock size={32} />,
        color: "text-emerald-500",
    },
    {
        title: "Secure by Design",
        desc: "Leading security practices integrated into every line of code we write.",
        icon: <ShieldCheck size={32} />,
        color: "text-rose-500",
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
                            Why the World’s Best <br /> Startups <span className="text-secondary italic">Choose Us</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-xl max-w-md pb-4"
                    >
                        We combine UK engineering precision with global scalability standards.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
