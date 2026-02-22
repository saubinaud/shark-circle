/**
 * Hero Section — Think Different / Apple x YC Style
 * Intense, bold "Pitch" focus. De todos para todos.
 */

import { useParallax } from '../hooks/useParallax';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
    const parallaxRef = useParallax();
    const sectionRef = useScrollAnimation();

    const scrollToForm = () => {
        const el = document.getElementById('registro');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={(node) => {
                (parallaxRef as any).current = node;
                (sectionRef as any).current = node;
            }}
            id="hero"
            className="relative w-full min-h-[100dvh] flex items-center md:items-end justify-start px-6 py-20 md:p-16 lg:p-24 overflow-hidden bg-ink"
        >
            {/* ===== Parallax Background Image ===== */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/hero-bg.png"
                    alt="Startup pitch event"
                    className="absolute inset-x-0 bottom-0 w-full h-[120%] object-cover mix-blend-luminosity opacity-40 scale-105"
                    data-parallax-speed="0.2"
                />
                {/* Deep cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
                <div className="photo-grain" />
            </div>

            {/* ===== Content ===== */}
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">

                    <div className="max-w-4xl">
                        {/* Tagline */}
                        <div className="fade-up mb-6 inline-flex border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5">
                            <span className="text-white/90 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                                Winners Circle presenta
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="fade-up text-[4rem] sm:text-7xl md:text-[6.5rem] lg:text-[8rem] font-extrabold text-white leading-[0.9] tracking-[-0.04em] mb-8">
                            Haz tu pitch.
                        </h1>

                        {/* Subtitle - "Think Different" & Peer-to-peer vibe */}
                        <p className="fade-up text-lg sm:text-[1.35rem] text-white/80 font-medium max-w-2xl leading-snug mb-0">
                            Para los locos, los inconformistas, los visionarios. Un espacio de feedback crudo y honesto donde no hay gurús ni expertos absolutos. Es de todos, para todos.
                        </p>
                    </div>

                    <div className="fade-up flex flex-col items-start md:items-end gap-6 shrink-0 mt-8 md:mt-0">
                        <div className="flex flex-col gap-2 text-left md:text-right">
                            <p className="text-white/50 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em]">Próxima Edición</p>
                            <p className="text-white text-sm sm:text-lg font-bold">Cada 2 semanas &middot; Lima, PE</p>
                            <p className="text-yc-orange font-bold text-sm sm:text-lg">Solo 30 plazas</p>
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="btn-primary w-full md:w-auto px-8 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Postular ahora
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
