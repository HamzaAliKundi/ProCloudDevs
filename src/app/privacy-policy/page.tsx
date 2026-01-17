"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
            />
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <Card className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-black mb-4">1. Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We collect information that you provide directly to us, such as when you fill out a contact form, 
                                subscribe to our newsletter, or communicate with us. This may include your name, email address, 
                                phone number, company name, and any other information you choose to provide.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services, respond to your 
                                inquiries, send you technical notices and support messages, and communicate with you about products, 
                                services, and promotional offers.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">3. Information Sharing</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                                your consent, except as described in this policy. We may share your information with trusted 
                                service providers who assist us in operating our website and conducting our business.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">4. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate security measures to protect your personal information against unauthorized 
                                access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                                is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">5. Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You have the right to access, update, or delete your personal information at any time. You may also 
                                opt out of receiving marketing communications from us by following the unsubscribe instructions in 
                                those emails.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">6. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at hello@proclouddevs.com.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <p className="text-sm text-muted-foreground">
                                Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    );
}
