"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";

export default function CookiePolicyPage() {
    return (
        <>
            <PageHero
                title="Cookie Policy"
                subtitle="Learn how we use cookies to enhance your browsing experience."
            />
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <Card className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-black mb-4">What Are Cookies?</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                                They are widely used to make websites work more efficiently and provide information to the website owners.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">How We Use Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use cookies for the following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>To enable certain functions of the website</li>
                                <li>To provide analytics and improve user experience</li>
                                <li>To store your preferences and settings</li>
                                <li>To enhance security and prevent fraud</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">Types of Cookies We Use</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Essential Cookies</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These cookies are necessary for the website to function properly. They enable core functionality 
                                        such as security, network management, and accessibility.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Analytics Cookies</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These cookies help us understand how visitors interact with our website by collecting and 
                                        reporting information anonymously.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Functional Cookies</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These cookies allow the website to remember choices you make and provide enhanced, personalized 
                                        features.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">Managing Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies, 
                                and to delete cookies that have already been set. Please note that blocking or deleting cookies may 
                                impact your experience on our website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">Third-Party Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Some cookies are placed by third-party services that appear on our pages. We do not control the setting 
                                of these cookies, so please check the third-party websites for more information about their cookies 
                                and how to manage them.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black mb-4">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about our use of cookies, please contact us at hello@proclouddevs.com.
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
