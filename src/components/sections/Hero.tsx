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
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8 leading-[1.1] max-w-5xl pb-4 px-6 overflow-visible"
                >
                    Engineering the <br />
                    <span className="gradient-text italic inline-block pr-2">Digital Frontier</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed font-medium px-4"
                >
                    We Won't Be Beaten on Price or Quality. From startups to global companies, we guarantee to deliver premium websites and apps while saving you money.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto mb-24"
                >
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button size="md" className="w-full sm:w-auto group px-8">
                            Start Your Project
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>
                    </Link>
                    <Link href="/services" className="w-full sm:w-auto">
                        <Button variant="outline" size="md" className="w-full sm:w-auto px-8 glass">
                            Our Services
                        </Button>
                    </Link>
                </motion.div>

                {/* 3D Tech Animation Container */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                    className="w-full max-w-6xl rounded-[3rem] overflow-visible aspect-video relative group border border-border shadow-[0_50px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                >
                    <div className="absolute inset-0 rounded-[3rem] overflow-hidden glass">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 pointer-events-none z-10" />
                        <TechCanvas />
                    </div>

                    {/* Floating Animated Text Elements */}
                    <div className="absolute inset-0 pointer-events-none z-30 perspective-[1000px]">
                        {[
                            { text: "Scalable", delay: 0, top: "10%", left: "5%", color: "text-primary" },
                            { text: "Fast", delay: 0.4, top: "15%", right: "8%", color: "text-secondary" },
                            { text: "Secure", delay: 0.8, top: "25%", left: "3%", color: "text-accent" },
                            { text: "Modern", delay: 1.2, top: "30%", right: "5%", color: "text-primary" },
                            { text: "Cloud", delay: 1.6, top: "70%", left: "6%", color: "text-secondary" },
                            { text: "API", delay: 2.0, top: "75%", right: "7%", color: "text-accent" },
                            { text: "React", delay: 2.4, top: "85%", left: "4%", color: "text-primary" },
                            { text: "Next.js", delay: 2.8, top: "90%", right: "6%", color: "text-secondary" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    rotateY: [10, -10, 10],
                                    rotateX: [5, -5, 5],
                                    opacity: [0.3, 0.7, 0.3],
                                    scale: [0.9, 1.1, 0.9],
                                }}
                                transition={{
                                    duration: 5 + i * 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: item.delay,
                                }}
                                className={`absolute glass px-3 py-1.5 rounded-lg text-xs font-bold ${item.color} border border-primary/20 whitespace-nowrap shadow-lg backdrop-blur-sm`}
                                style={{
                                    top: item.top,
                                    left: item.left,
                                    right: item.right,
                                }}
                            >
                                {item.text}
                            </motion.div>
                        ))}
                    </div>

                    {/* Guaranteed Card with Enhanced Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-12 left-12 z-40 hidden md:flex items-center gap-4 glass p-6 rounded-3xl border-white/10 group-hover:translate-y-[-8px] transition-all duration-500 shadow-2xl cursor-pointer"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center"
                        >
                            <ShieldCheck className="text-primary animate-pulse" size={28} />
                        </motion.div>
                        <div className="text-left">
                            <motion.span
                                animate={{
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-1"
                            >
                                Guaranteed
                            </motion.span>
                            <span className="text-lg font-bold">Best Price & Quality</span>
                        </div>
                    </motion.div>

                    {/* Additional Text Badge - Top Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 }}
                        className="absolute top-12 right-12 z-40 hidden md:flex items-center gap-2 glass px-4 py-2 rounded-2xl border border-secondary/20 shadow-xl"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="w-2 h-2 rounded-full bg-secondary"
                        />
                        <span className="text-xs font-bold text-secondary">Live Development</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced Floating Scroll Indicator with Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
            >
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2 glass backdrop-blur-sm">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-3 bg-primary rounded-full"
                        />
                    </div>
                    <motion.span
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-xs font-bold text-muted-foreground uppercase tracking-widest"
                    >
                        Scroll
                    </motion.span>
                </motion.div>
            </motion.div>
        </section>
    );
}
