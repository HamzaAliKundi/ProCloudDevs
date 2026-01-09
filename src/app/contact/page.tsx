"use client";

import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Get in Touch"
                subtitle="Let's discuss how we can help you scale your digital infrastructure."
            />
            <Contact />
        </>
    );
}
