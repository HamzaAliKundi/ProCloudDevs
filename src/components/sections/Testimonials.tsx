"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const testimonials = [
    {
        name: "Alex Thompson",
        role: "CTO",
        company: "SaaS Solutions UK",
        text: "ProCloudDevs transformed our legacy architecture into a scalable cloud powerhouse. Their team's attention to detail and technical depth is unmatched.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Founder",
        company: "GrowthLabs",
        text: "The web application they built for us is lightning fast and our conversion rates have increased by 40% since launch. Highly professional!",
        rating: 5,
    },
    {
        name: "Mark O'Brien",
        role: "Product Manager",
        company: "FinTech Hub",
        text: "From mobile apps to complex API integrations, they handled everything with ease. A true partner for any tech-driven company.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="section-padding bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Trusted by Visionaries</h2>
                    <p className="text-muted-foreground text-lg">Don't just take our word for it—hear from our amazing clients.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} delay={i * 0.1} className="flex flex-col relative group">
                            <Quote className="absolute top-6 right-6 text-primary/10 w-16 h-16 group-hover:text-primary/20 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-foreground text-lg mb-8 relative z-10 italic">
                                "{t.text}"
                            </p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold">{t.name}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
