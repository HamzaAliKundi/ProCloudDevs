"use client";

import React from 'react';
import { Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    iconSize?: number;
    hideText?: boolean;
}

export function Logo({ className, iconSize = 28, hideText = false }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3 group", className)}>
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-[0_8px_30px_rgb(37,99,235,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Cloud size={iconSize} />
            </div>
            {!hideText && (
                <span className="text-2xl font-black tracking-tighter text-foreground">
                    ProCloud<span className="text-primary tracking-normal">Devs</span>
                </span>
            )}
        </div>
    );
}
