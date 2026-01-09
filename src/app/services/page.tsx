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
                subtitle="Bespoke engineering solutions tailored for scale, performance, and security."
            />
            <Services />
            <TechStack />
            <CTA />
        </>
    );
}
