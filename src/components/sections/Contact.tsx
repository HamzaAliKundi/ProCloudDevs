"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Contact() {
    return (
        <section id="contact" className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">Contact Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have a project in mind or just want to chat? Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Our Studio</div>
                                    <div className="text-muted-foreground">Manchester, United Kingdom</div>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Email Us</div>
                                    <div className="text-muted-foreground">hello@proclouddevs.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 rounded-3xl overflow-hidden glass h-64 border border-border relative grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                                    <p className="text-sm font-bold">Manchester, UK Studio</p>
                                </div>
                            </div>
                            <div className="w-full h-full bg-muted/50" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-3xl border border-border shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold ml-1">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold ml-1">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-semibold ml-1">Company</label>
                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Acme Inc."
                                    className="w-full px-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold ml-1">Project Details</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project goals..."
                                    className="w-full px-4 py-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>
                            <Button size="md" className="w-full gap-2">
                                Send Message
                                <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
