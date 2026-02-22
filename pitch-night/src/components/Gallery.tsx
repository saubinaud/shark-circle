/**
 * Gallery Section — Horizontal scrolling marquee + Grid
 * Smaller, more refined images.
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const images = [
    'https://winnerscircle369.com/cdn/shop/files/ewwwe.png', // Winners Circle official asset
    'https://images.unsplash.com/photo-1556761175-5973eafcd413?auto=format&fit=crop&q=80&w=600', // Reemplazar con URL de Instagram
    'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=600', // Reemplazar con URL de Instagram
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600', // Reemplazar con URL de Instagram
];

export default function Gallery() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-ink text-white overflow-hidden border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 mb-10 md:mb-16">
                <h2 className="fade-up text-4xl md:text-6xl font-extrabold tracking-[-0.04em]">
                    La energía.
                </h2>
                <p className="fade-up text-white/60 text-lg md:text-xl mt-3 font-medium max-w-2xl">
                    Instantes de mentes brillantes conectando y debatiendo el futuro.
                </p>
            </div>

            {/* Horizontal Scroll Gallery (CSS Scroll Snap) */}
            <div className="fade-up w-full overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                <div className="flex gap-4 px-6 md:px-[calc(50vw-20rem)] w-max">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative w-[70vw] md:w-[400px] h-[35vh] md:h-[480px] shrink-0 snap-center rounded-2xl overflow-hidden group"
                        >
                            <img
                                src={src}
                                alt={`Pitch Night Gallery ${idx + 1}`}
                                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                            />
                            <div className="absolute inset-0 border border-white/15 rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-yc-orange/50" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-4">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                    <span>&larr;</span> Desliza para explorar <span>&rarr;</span>
                </p>
            </div>
        </section>
    );
}
