"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Process', href: '/process' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-5',
                isScrolled ? 'bg-background/70 backdrop-blur-2xl border-b border-border shadow-2xl py-4' : 'bg-transparent'
            )}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="cursor-pointer">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-bold tracking-tight text-muted-foreground hover:text-primary transition-all duration-300 relative group/link cursor-pointer"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="/contact" className="cursor-pointer">
                        <Button size="sm" className="ml-4">Start Project</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-3 rounded-2xl glass text-foreground active:scale-90 transition-all"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="md:hidden absolute top-full left-6 right-6 mt-4 p-8 glass rounded-[2.5rem] border border-border shadow-2xl z-50 overflow-hidden"
                    >
                        <ul className="flex flex-col gap-6 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-black tracking-tight hover:text-primary transition-colors block cursor-pointer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-8 border-t border-border"
                            >
                                <Link href="/contact" className="block cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full">Get Consultation</Button>
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
