"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';

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
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-bold tracking-tight hover:text-primary transition-all duration-300 relative group/link cursor-pointer",
                                            isActive ? "text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        {link.name}
                                        <span className={cn(
                                            "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                                            isActive ? "w-full" : "w-0 group-hover/link:w-full"
                                        )} />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ThemeToggle />
                    {!isContactPage && (
                        <Link href="/contact" className="cursor-pointer">
                            <Button size="sm" className="ml-2">Start Project</Button>
                        </Link>
                    )}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        className="p-3 rounded-2xl glass text-foreground active:scale-90 transition-all"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
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
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-3xl font-black tracking-tight hover:text-primary transition-colors block cursor-pointer relative",
                                                isActive && "text-primary"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
                                            )}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-4 border-t border-border"
                            >
                                <div className="flex items-center gap-3">
                                    <ThemeToggle />
                                    <span className="text-sm text-muted-foreground">Toggle Theme</span>
                                </div>
                            </motion.li>
                            {!isContactPage && (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-4"
                                >
                                    <Link href="/contact" className="block cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button className="w-full">Get Consultation</Button>
                                    </Link>
                                </motion.li>
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
