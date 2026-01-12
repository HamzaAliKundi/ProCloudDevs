"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Users, Heart, Target, Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';
import { FloatingCode } from '@/components/ui/FloatingCode';

const stats = [
    { label: 'High Quality Craftsmanship', value: '100%', icon: <Trophy className="text-secondary" /> },
    { label: 'Client Success Mindset', value: 'Vision', icon: <Target className="text-primary" /> },
    { label: 'Reliable Support', value: '24/7', icon: <HeartHandshake className="text-accent" /> },
];

export function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                            <FloatingCode />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6"
                        >
                            Who We Are
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                            About <span className="text-primary italic">ProCloudDevs</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            We’re a modern website and digital solutions company built to help businesses grow online no matter their size, industry, or technical needs.
                        </p>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            From sleek WordPress websites to fully custom built platforms, mobile apps, and high converting Shopify stores, we design and develop digital experiences that don’t just look good they work.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {[
                                'WordPress Websites',
                                'Custom Web Development',
                                'E-commerce Solutions',
                                'Web & Mobile Apps',
                                'UI/UX Design',
                                'SEO Optimization'
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-black mb-6">Our Approach</h3>
                        <p className="text-lg text-muted-foreground mb-8">
                            We believe great websites are built at the intersection of design, technology, and purpose. That’s why we take time to understand your business, your audience, and your long term goals before we write a single line of code.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: 'Clear communication', icon: <MessageSquare className="text-primary" size={20} /> },
                                { title: 'High quality craftsmanship', icon: <Trophy className="text-secondary" size={20} /> },
                                { title: 'Future proof solutions', icon: <Lightbulb className="text-accent" size={20} /> },
                                { title: 'Honest pricing and timelines', icon: <ShieldCheck className="text-primary" size={20} /> },
                            ].map((point) => (
                                <div key={point.title} className="flex items-center gap-4 glass p-4 rounded-2xl border-white/5">
                                    {point.icon}
                                    <span className="font-bold">{point.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-[2rem] flex items-center gap-8 group hover:bg-primary/5 transition-colors"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-muted-foreground font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { MessageSquare } from 'lucide-react';
