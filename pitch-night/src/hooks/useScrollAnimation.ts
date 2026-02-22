import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add a 'visible' class
 * to elements with the 'fade-up' class when they enter the viewport.
 */
export function useScrollAnimation() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        const section = sectionRef.current;
        if (section) {
            const elements = section.querySelectorAll('.fade-up');
            elements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return sectionRef;
}
