"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';

export function CTA() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background with ultra-modern gradient and mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#020617]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f633,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#8b5cf633,transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="glass rounded-[3rem] p-12 md:p-24 border border-white/10 overflow-hidden relative group">
                    {/* Animated glow that follows mouse or just stays animated */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-sm mb-8"
                            >
                                <Zap size={16} fill="currentColor" />
                                Ready to scale?
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
                            >
                                Let’s Build Something <br />
                                <span className="gradient-text italic font-black">Truly Scalable</span> Together
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed"
                            >
                                Transform your digital infrastructure with the UK's leading experts in cloud native software engineering.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-6"
                            >
                                <Button size="lg" className="px-12 py-6 text-xl shadow-[0_20px_40px_rgba(37,99,235,0.4)] group">
                                    Start Your Project
                                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </Button>
                                <Button variant="glass" size="lg" className="px-12 py-6 text-xl border-white/10 hover:bg-white/5">
                                    Our Process
                                </Button>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {[
                                { icon: <Globe className="text-primary" />, title: "Global Reach", desc: "UK based, global impact" },
                                { icon: <Shield className="text-secondary" />, title: "Secure Code", desc: "Enterprise standards" },
                                { icon: <Zap className="text-accent" />, title: "Rapid Launch", desc: "Optimized delivery" },
                                { icon: <Zap className="text-primary" />, title: "Scalable", desc: "Built for growth" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                                >
                                    <div className="mb-4">{item.icon}</div>
                                    <div className="text-white font-bold mb-1">{item.title}</div>
                                    <div className="text-slate-500 text-sm">{item.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
