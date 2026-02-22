/**
 * Gallery Section — Horizontal scrolling marquee + Grid
 * Premium Apple-esque visual showcase.
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const images = [
    'https://images.unsplash.com/photo-1556761175-5973eafcd413?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
];

export default function Gallery() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-ink text-white overflow-hidden border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 mb-12 md:mb-20">
                <h2 className="fade-up text-5xl md:text-7xl font-extrabold tracking-[-0.04em]">
                    La energía.
                </h2>
                <p className="fade-up text-white/50 text-xl md:text-2xl mt-4 font-medium max-w-2xl">
                    Instantes de mentes brillantes conectando y debatiendo el futuro.
                </p>
            </div>

            {/* Horizontal Scroll Gallery (CSS Scroll Snap) */}
            <div className="fade-up w-full overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                <div className="flex gap-4 md:gap-8 px-6 md:px-[calc(50vw-36rem)] w-max">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative w-[85vw] md:w-[600px] h-[50vh] md:h-[600px] shrink-0 snap-center rounded-2xl overflow-hidden group"
                        >
                            <img
                                src={src}
                                alt={`Pitch Night Gallery ${idx + 1}`}
                                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                            {/* Overlay minimalista */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-6">
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                    <span>&larr;</span> Desliza para explorar <span>&rarr;</span>
                </p>
            </div>
        </section>
    );
}
