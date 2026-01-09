"use client";

import { motion } from 'framer-motion';

const techStack = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'Express', color: 'text-gray-400' },
    { name: 'MongoDB', color: 'text-green-600' },
    { name: 'PostgreSQL', color: 'text-blue-600' },
    { name: 'React Native', color: 'text-blue-500' },
    { name: 'Flutter', color: 'text-blue-400' },
    { name: '.NET', color: 'text-purple-600' },
    { name: 'WordPress', color: 'text-blue-700' },
    { name: 'Shopify', color: 'text-green-500' },
    { name: 'AWS', color: 'text-yellow-500' },
    { name: 'Docker', color: 'text-blue-400' },
];

export function TechStack() {
    return (
        <section id="technologies" className="py-24 border-y border-border bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">Our Tech Stack</span>
                    <h2 className="text-3xl md:text-4xl font-bold">The Technologies Powering Our Solutions</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center gap-3 p-6 glass rounded-2xl min-w-[120px] md:min-w-[160px] cursor-default"
                        >
                            <div className={`text-xl md:text-2xl font-bold ${tech.color}`}>
                                {tech.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
