"use client";

import { motion } from 'framer-motion';

export function FloatingCode() {
    const codeLines = [
        "const app = express();",
        "await cloud.scale();",
        "pro.build({ future: true });",
        "export default Engineering;",
    ];

    return (
        <div className="relative h-64 w-full flex items-center justify-center perspective-[1000px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                    <div className="text-4xl font-black text-primary/20 mb-2">{"</>"}</div>
                    <p className="text-sm font-bold text-muted-foreground">Code Excellence</p>
                </div>
            </div>
            {codeLines.map((line, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        rotateY: [10, -10, 10],
                        rotateX: [5, -5, 5],
                        opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                    className="absolute glass px-4 py-2 rounded-lg text-xs font-mono text-primary border border-primary/20 whitespace-nowrap shadow-xl"
                    style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 5}%`,
                        zIndex: 10 - i,
                    }}
                >
                    {line}
                </motion.div>
            ))}
        </div>
    );
}
