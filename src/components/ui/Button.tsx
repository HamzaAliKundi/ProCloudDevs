import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    isAnimated?: boolean;
    withShimmer?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isAnimated = true, withShimmer = true, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_8px_30px_rgb(37,99,235,0.3)]',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_8px_30px_rgb(6,182,212,0.3)]',
            outline: 'border-2 border-primary text-primary hover:bg-primary/5',
            ghost: 'text-foreground hover:bg-muted',
            glass: 'glass text-foreground hover:bg-muted/50',
        };

        const sizes = {
            sm: 'px-5 py-2.5 text-sm',
            md: 'px-8 py-4 text-base',
            lg: 'px-10 py-5 text-lg',
        };

        const commonClasses = cn(
            'inline-flex items-center justify-center rounded-2xl font-bold tracking-tight transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer',
            withShimmer && 'shimmer',
            variants[variant],
            sizes[size],
            className
        );

        if (!isAnimated) {
            return (
                <button ref={ref} className={commonClasses} {...props as any}>
                    {children}
                </button>
            );
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={commonClasses}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
