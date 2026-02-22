/**
 * Gallery Section — Apple-style Sticky Horizontal Scroll
 * Uses framer-motion approach or native scroll mapping.
 * We'll use a pure React hook approach to map vertical scroll to horizontal translation.
 */

import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const images = [
    'https://winnerscircle369.com/cdn/shop/files/ewwwe.png',
    'https://images.unsplash.com/photo-1556761175-5973eafcd413?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
];

export default function Gallery() {
    const sectionRef = useScrollAnimation();
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !trackRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far we've scrolled through the sticky container
            // The container is e.g. 300vh tall. We start tracking when top <= 0
            // We finish when top reaches -(height - windowHeight)

            const scrollableDistance = height - windowHeight;
            let progress = 0;

            if (top <= 0) {
                progress = Math.min(1, Math.max(0, -top / scrollableDistance));
            }

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Init
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // The outer section sets the scrolling height (e.g. 300vh)
        <section
            ref={(node) => {
                (sectionRef as any).current = node;
                (containerRef as any).current = node;
            }}
            className="relative bg-ink text-white"
            style={{ height: '300vh' }}
        >
            {/* The sticky container locks to the viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

                <div className="max-w-6xl mx-auto px-6 w-full mb-8 lg:mb-12 shrink-0">
                    <h2 className="fade-up text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-none mb-4">
                        La energía.
                    </h2>
                    <p className="fade-up text-white/60 text-lg md:text-2xl font-medium max-w-2xl">
                        Instantes de mentes brillantes conectando y construyendo el futuro.
                    </p>
                </div>

                {/* The sliding track */}
                <div className="w-full overflow-hidden shrink-0">
                    <div
                        ref={trackRef}
                        className="flex gap-6 md:gap-12 px-6 md:px-[10vw] w-max will-change-transform"
                        style={{
                            transform: `translate3d(-${scrollProgress * 50}%, 0, 0)`,
                            transition: 'transform 0.1s linear'
                        }}
                    >
                        {images.map((src, idx) => {
                            // Create a slight parallax / scale effect based on progress
                            const itemCenter = (idx * 0.25); // Approximate center for 4 items
                            const dist = Math.abs(scrollProgress - itemCenter);
                            const scale = Math.max(0.85, 1 - (dist * 0.5));
                            const blur = Math.min(4, dist * 10);
                            const opacity = Math.max(0.4, 1 - (dist * 1.5));

                            return (
                                <div
                                    key={idx}
                                    className="relative w-[80vw] md:w-[60vw] max-w-[800px] h-[50vh] md:h-[60vh] shrink-0 rounded-3xl overflow-hidden group transition-all duration-300"
                                    style={{
                                        transform: `scale(${scale})`,
                                        filter: `blur(${blur}px)`,
                                        opacity: opacity
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt={`Pitch Night Gallery ${idx + 1}`}
                                        className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                                    />
                                    <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none transition-colors duration-500 group-hover:border-yc-orange/30" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="absolute bottom-8 left-0 w-full text-center">
                    <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4">
                        <span className="w-8 h-[1px] bg-white/20"></span>
                        Continúa bajando
                        <span className="w-8 h-[1px] bg-white/20"></span>
                    </p>
                </div>

            </div>
        </section>
    );
}
