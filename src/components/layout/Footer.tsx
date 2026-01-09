import Link from 'next/link';
import { Cloud, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted pt-20 pb-10 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                            <Cloud size={24} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            ProCloudDevs
                        </span>
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                        UK-based software development agency specializing in scalable cloud architecture and premium web solutions for modern businesses.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-background rounded-lg hover:text-primary transition-colors border border-border">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-2 bg-background rounded-lg hover:text-primary transition-colors border border-border">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-2 bg-background rounded-lg hover:text-primary transition-colors border border-border">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground">Services</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Cloud Architecture</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">API Integrations</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">SaaS Solutions</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground">Company</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Our Process</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-foreground">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-primary shrink-0" />
                            <span>London, United Kingdom</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-primary shrink-0" />
                            <span>+44 (0) 20 1234 5678</span>
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
                    <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    <Link href="#" className="hover:text-foreground">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
