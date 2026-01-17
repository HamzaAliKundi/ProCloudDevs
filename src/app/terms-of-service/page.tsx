"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";

export default function TermsOfServicePage() {
    return (
        <>
            <PageHero
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our services."
            />
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <Card className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-black mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using ProCloudDevs services, you accept and agree to be bound by the terms and 
                                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">2. Services Provided</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                ProCloudDevs provides web development, mobile app development, cloud architecture, and related 
                                digital services. All services are provided subject to the terms and conditions outlined in 
                                individual service agreements.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">3. Payment Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Payment terms will be specified in your project agreement. We require a deposit before commencing 
                                work, with the balance due upon project completion or according to the agreed payment schedule.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">4. Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Upon full payment, you will own the intellectual property rights to the custom work we create for you. 
                                However, we retain the right to use the work in our portfolio and for marketing purposes unless 
                                otherwise agreed.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">5. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                ProCloudDevs shall not be liable for any indirect, incidental, special, consequential, or punitive 
                                damages resulting from your use of or inability to use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">6. Changes to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify users of any changes by 
                                posting the new terms on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">7. Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                For questions about these Terms of Service, please contact us at hello@proclouddevs.com.
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
