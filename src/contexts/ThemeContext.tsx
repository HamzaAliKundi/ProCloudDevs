"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        // Initialize from localStorage if available, default to 'light'
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme') as Theme | null;
            return saved === 'dark' ? 'dark' : 'light';
        }
        return 'light';
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        // Check localStorage for saved preference
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        
        if (savedTheme === 'dark') {
            // Only apply dark if explicitly saved in localStorage
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            // Default to light mode always - ensure dark is removed
            setTheme('light');
            document.documentElement.classList.remove('dark');
            // Save light mode as default if nothing was saved
            if (!savedTheme) {
                localStorage.setItem('theme', 'light');
            }
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        // Update localStorage and DOM when theme changes
        localStorage.setItem('theme', theme);
        const root = document.documentElement;
        
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === 'light' ? 'dark' : 'light';
            // Immediately update DOM
            const root = document.documentElement;
            if (newTheme === 'dark') {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    // Always provide context, even before mounted
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
