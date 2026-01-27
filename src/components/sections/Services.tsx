"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import {
    Code2,
    Smartphone,
    Globe,
    ShoppingCart,
    Search,
    Headset,
    Palette,
    ChevronDown
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
        title: "Graphic Design",
        desc: "Need graphic design work? Whether it's a poster for your website, social media, or advertising, we've got you covered. Prices start from just £12 per poster. Need only one poster or multiple designs? No problem, we're here to help. Contact us today!",
        icon: <Palette />,
        color: "bg-pink-500/10 text-pink-500",
    },
    {
        title: "Live Customer Support Team",
        desc: "Are you looking to build or expand your live customer support team? If you need real human agents — not AI bots, we provide high-quality live support staff at guaranteed lower rates than your current provider, without compromising on performance or reliability.",
        features: [
            "Trained human support agents",
            "24/7 coverage available",
            "Fast onboarding",
            "Scalable teams",
            "Guaranteed cost savings",
            "Proven performance & quality control"
        ],
        icon: <Headset />,
        color: "bg-secondary/10 text-secondary",
    },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasLongContent = service.features || service.desc.length > 120;
    const truncatedDesc = service.desc.length > 120 ? service.desc.substring(0, 120) + '...' : service.desc;
    const showSeeMore = hasLongContent && !isExpanded;

    return (
        <Card delay={index * 0.1} className="h-full flex flex-col group py-12">
            <div className={cn(
                "w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl",
                service.color
            )}>
                {React.cloneElement(service.icon as React.ReactElement, { size: 32 } as any)}
            </div>
            
            {/* Fixed height for title */}
            <div className="h-[4rem] mb-4">
                <h3 className="text-2xl font-black group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                </h3>
            </div>

            {/* Fixed height for description section */}
            <div className={cn("mb-6 flex flex-col", !isExpanded && "h-[8rem]")}>
                <p className="text-muted-foreground text-base leading-relaxed">
                    {showSeeMore ? (
                        <>
                            {truncatedDesc}
                            {hasLongContent && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-sm font-bold text-primary inline-flex items-center gap-1 hover:opacity-80 transition-opacity duration-300 cursor-pointer ml-1"
                                >
                                    See more
                                    <ChevronDown 
                                        size={14} 
                                        className="transition-transform duration-300" 
                                    />
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            {service.desc}
                            {hasLongContent && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-sm font-bold text-primary inline-flex items-center gap-1 hover:opacity-80 transition-opacity duration-300 cursor-pointer ml-2"
                                >
                                    See less
                                    <ChevronDown 
                                        size={14} 
                                        className={cn(
                                            "transition-transform duration-300 rotate-180"
                                        )} 
                                    />
                                </button>
                            )}
                        </>
                    )}
                </p>
            </div>

            {/* Features list - outside fixed height to prevent overlap */}
            <AnimatePresence>
                {isExpanded && service.features && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-6 overflow-hidden"
                    >
                        <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-primary font-black mt-1 text-sm">✓</span>
                                    <span className="text-sm leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fixed height for spacing when no See more button */}
            {!hasLongContent && <div className="h-[2.5rem] mb-6"></div>}

            {/* Fixed height for footer */}
            <div className="h-[4rem] pt-8 border-t border-border flex items-center justify-between mt-auto">
                <button className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-3 group/btn">
                    Explore Service
                    <div className="w-8 h-[2px] bg-primary group-hover/btn:w-12 transition-all duration-300" />
                </button>
            </div>
        </Card>
    );
}

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
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
