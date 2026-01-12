"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { CTA } from "@/components/sections/CTA";

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Services"
                subtitle="Complete digital solutions designed to help your business grow online through speed, security, and scalability."
            />
            <Services />
            <TechStack />
            <CTA />
        </>
    );
}
