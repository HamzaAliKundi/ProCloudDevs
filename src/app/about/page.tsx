"use client";

import { PageHero } from "@/components/layout/PageHero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTA } from "@/components/sections/CTA";

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="About ProCloudDevs"
                subtitle="We build digital foundations that help brands stand out, scale, and succeed online."
            />
            <About />
            <WhyChooseUs />
            <CTA />
        </>
    );
}
