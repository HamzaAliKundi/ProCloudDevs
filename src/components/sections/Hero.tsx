"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Cloud, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { TechCanvas } from '@/components/ui/TechCanvas';

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[5%] h-[60%] w-[60%] rounded-full bg-primary/10 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-accent/10 blur-[100px]"
                />
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-bold tracking-wide text-primary mb-10 shadow-xl"
                >
                    <Sparkles size={18} className="animate-pulse" />
                    <span className="uppercase tracking-[0.2em]">UK's Premier Tech Agency</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-6xl md:text-9xl font-black tracking-tight mb-8 leading-[0.95] max-w-5xl"
                >
                    Engineering the <br />
                    <span className="gradient-text italic">Digital Frontier</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-xl md:text-3xl text-muted-foreground max-w-3xl mb-12 leading-relaxed font-medium"
                >
                    We Won’t Be Beaten on Price or Quality. From startups to global companies, we guarantee to deliver premium websites and apps while saving you money.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto mb-24"
                >
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full group text-xl px-12">
                            Start Your Project
                            <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>
                    </Link>
                    <Link href="/services" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full text-xl px-12 glass">
                            Our Services
                        </Button>
                    </Link>
                </motion.div>

                {/* 3D Tech Animation Container */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                    className="w-full max-w-6xl rounded-[3rem] overflow-hidden glass aspect-video relative group border border-border shadow-[0_50px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 pointer-events-none z-10" />
                    <TechCanvas />
                    <div className="absolute bottom-12 left-12 z-20 hidden md:flex items-center gap-4 glass p-6 rounded-3xl border-white/10 group-hover:translate-y--2 transition-all duration-500 shadow-2xl">
                        <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                            <ShieldCheck className="text-primary animate-pulse" size={28} />
                        </div>
                        <div className="text-left">
                            <span className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-1">Guaranteed</span>
                            <span className="text-lg font-bold">Best Price & Quality</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
                    <div className="w-1.5 h-3 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
