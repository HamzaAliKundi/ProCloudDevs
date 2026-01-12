"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function ProcessPage() {
    return (
        <>
            <PageHero
                title="Our Process"
                subtitle="A proven, transparent methodology that guarantees high quality results at scale."
            />
            <Process />
            <CTA />
        </>
    );
}
