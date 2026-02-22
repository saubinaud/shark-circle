/**
 * ForWho Section — Startup / YC Style in Spanish
 * Updated copy for unity.
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const tags = [
    'Genios construyendo en las sombras',
    'Fundadores visionarios',
    'Desarrolladores armando side-projects',
    'Inconformistas con visión de cambio',
    'Cualquiera dispuesto a dar y recibir feedback',
];

export default function ForWho() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} id="para-quien" className="px-6 py-24 md:py-32 bg-surface text-ink border-b border-border">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Title col */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-24">
                        <h2 className="fade-up text-5xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.0] mb-6">
                            ¿Para quién?
                        </h2>
                        <p className="fade-up font-serif text-2xl md:text-[1.75rem] text-ink-muted italic leading-snug">
                            "Para los locos, los inconformistas, los que ven el mundo diferente. Mentes inquietas conectando."
                        </p>
                    </div>
                </div>

                {/* Content col */}
                <div className="lg:col-span-7">
                    <p className="fade-up text-xl md:text-[1.35rem] text-ink font-semibold leading-relaxed mb-10">
                        No es una conferencia. No hay paneles de expertos dándote cátedra. Es un espacio íntimo donde la inteligencia colectiva supera al individuo. Aquí todos somos estudiantes y todos somos maestros.
                    </p>

                    <ul className="fade-up flex flex-col gap-0 border-t-2 border-ink">
                        {tags.map((tag, idx) => (
                            <li key={idx} className="flex items-start md:items-center gap-4 py-5 md:py-6 border-b border-border group transition-all">
                                <span className="w-8 h-8 shrink-0 rounded-full bg-surface-dark flex items-center justify-center text-xs font-bold text-ink-muted group-hover:bg-yc-orange group-hover:text-white transition-colors duration-200 mt-1 md:mt-0">
                                    +
                                </span>
                                <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-yc-orange transition-colors duration-200">{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
