import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for parallax scroll effects.
 * Moves elements with data-parallax-speed attribute based on scroll position.
 * Speed values: positive = moves slower (background), negative = moves faster (foreground).
 */
export function useParallax() {
    const containerRef = useRef<HTMLElement>(null);
    const rafRef = useRef<number>(0);

    const handleScroll = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            const container = containerRef.current;
            if (!container) return;

            const elements = container.querySelectorAll<HTMLElement>('[data-parallax-speed]');
            const scrollY = window.scrollY;
            const containerTop = container.offsetTop;
            const relativeScroll = scrollY - containerTop;

            elements.forEach((el) => {
                const speed = parseFloat(el.dataset.parallaxSpeed || '0');
                const translateY = relativeScroll * speed;
                el.style.transform = `translateY(${translateY}px)`;
            });
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    return containerRef;
}
