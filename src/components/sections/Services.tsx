"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import {
    Code2,
    Smartphone,
    Globe,
    ShoppingCart,
    Search,
    Headset
} from 'lucide-react';

const services = [
    {
        title: "Custom Full Stack Websites",
        desc: "We build fully custom websites from the ground up using modern technologies. Our full stack solutions are fast, secure, scalable, and tailored exactly to your business needs : no templates, no limitations.",
        icon: <Code2 />,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Custom Web & Mobile Apps",
        desc: "From idea to launch, we design and develop powerful custom applications built for performance, usability, and growth. Whether it’s a web app, mobile app, or internal system, we turn complex ideas into smooth digital experiences.",
        icon: <Smartphone />,
        color: "bg-indigo-500/10 text-indigo-500",
    },
    {
        title: "Shopify Development",
        desc: "We create high converting Shopify stores that are easy to manage and built to sell. From custom themes to advanced integrations, we help you launch and scale your e-commerce business with confidence.",
        icon: <ShoppingCart />,
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "WordPress Websites",
        desc: "Perfect for businesses that want flexibility and control. We design and develop professional WordPress websites that are visually impressive, SEO friendly, and simple to update.",
        icon: <Globe />,
        color: "bg-primary/10 text-primary",
    },
    {
        title: "SEO Optimization",
        desc: "A great website is useless if no one can find it. Our SEO services help improve your search engine rankings, increase organic traffic, and attract the right customers through proven strategies.",
        icon: <Search />,
        color: "bg-accent/10 text-accent",
    },
    {
        title: "Live Support Agents",
        desc: "Our live support agents are available to assist your customers in real time. From handling inquiries to providing technical support, we help improve customer experience and build trust with your audience.",
        icon: <Headset />,
        color: "bg-secondary/10 text-secondary",
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
                        Services We Offer
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        High Performance <br /> <span className="text-primary italic">Digital Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                    >
                        We provide a complete range of web and digital solutions designed to meet businesses at every stage : from startups to established brands.
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
