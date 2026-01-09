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
        <div className="relative h-64 w-full flex items-center justify-center perspective-[1000px]">
            {codeLines.map((line, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        rotateY: [10, -10, 10],
                        rotateX: [5, -5, 5],
                        opacity: [0.4, 0.8, 0.4],
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
