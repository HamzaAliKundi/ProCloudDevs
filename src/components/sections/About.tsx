"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Users, Heart } from 'lucide-react';
import { FloatingCode } from '@/components/ui/FloatingCode';

const stats = [
    { label: 'Projects Delivered', value: '150+', icon: <Trophy className="text-secondary" /> },
    { label: 'Technologies Used', value: '25+', icon: <Users className="text-primary" /> },
    { label: 'Client Satisfaction', value: '100%', icon: <Heart className="text-accent" /> },
];

export function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden glass p-4 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                        <FloatingCode />
                    </div>
                    {/* Floating Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl shadow-2xl max-w-xs border border-accent/20"
                    >
                        <p className="text-lg font-bold mb-2 italic">"Reliable & Scalable"</p>
                        <p className="text-sm text-muted-foreground">Our core philosophy in every line of code we write.</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">About ProCloudDevs</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Elevating Businesses Through <span className="text-secondary">Engineering Excellence</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Based in the UK, ProCloudDevs is a group of dedicated software engineers, cloud architects, and designers. We bridge the gap between complex technology and business goals.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Specialists in Modern Web & Mobile Frameworks",
                            "Enterprise-Grade Cloud Infrastructure Architecture",
                            "Dedicated Support & Long-Term Technical Partnerships",
                            "Agile Methodology with Rapid Turnaround Times"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-foreground font-medium">
                                <CheckCircle2 className="text-secondary shrink-0" size={24} />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="flex justify-center mb-3">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
