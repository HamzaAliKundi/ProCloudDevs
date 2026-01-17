import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted pt-20 pb-10 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Link href="/">
                        <Logo iconSize={24} className="scale-90 origin-left" />
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                        UK based software development agency specializing in scalable cloud architecture and premium web solutions for modern businesses.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-lg hover:text-primary transition-colors border border-border">
                            <Github size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-lg hover:text-primary transition-colors border border-border">
                            <Twitter size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-lg hover:text-primary transition-colors border border-border">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground">Services</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Architecture</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">API Integrations</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">SaaS Solutions</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground">Company</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-primary shrink-0" />
                            <span>Manchester, United Kingdom</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-primary shrink-0" />
                            <span>hello@proclouddevs.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <div>
                    © {currentYear} ProCloudDevs. All rights reserved. Registered in England & Wales.
                </div>
                <div className="flex gap-8">
                    <Link href="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
                    <Link href="/cookie-policy" className="hover:text-foreground">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
