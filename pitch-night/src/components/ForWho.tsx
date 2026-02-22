/**
 * ForWho Section — Startup / YC Style Accordion
 * Includes state management to expand descriptions.
 */

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const personas = [
    {
        title: 'Genios construyendo en las sombras',
        description: 'Escribes código hasta las 3 AM. Tienes algo funcional pero no sabes cómo contarlo al mundo. Aquí te ayudaremos a pulir tu mensaje y entender el valor real de tu producto.'
    },
    {
        title: 'Fundadores visionarios',
        description: 'Ya tienes un MVP, tal vez un co-founder y tus primeros usuarios, pero te enfrentas a problemas de crecimiento y retención. Necesitas críticas directas para no estrellarte contra la pared.'
    },
    {
        title: 'Desarrolladores armando side-projects',
        description: 'Trabajas en corporativo de 9 a 6, pero los fines de semana construyes tus propios SaaS. Ven e inspírate para dar el salto, o encuentra a ese socio comercial que lleve tus ventas a otro nivel.'
    },
    {
        title: 'Inconformistas con visión de cambio',
        description: 'Ves industrias estancadas y sabes exactamente cómo romperlas. Presenta esa tesis disruptiva ante una audiencia de builders lista para desafiar tus suposiciones.'
    },
    {
        title: 'Dispuestos a dar y recibir feedback',
        description: 'No importa si no tienes una startup hoy. Si entiendes de producto, diseño o ventas, tu voz es vital. Ven a escuchar ideas, hacer preguntas incómodas y aportar valor a quien expone.'
    },
];

export default function ForWho() {
    const sectionRef = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section ref={sectionRef} id="para-quien" className="px-6 py-20 md:py-28 bg-surface text-ink border-b border-border">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* Title col (Sticky) */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-28">
                        <h2 className="fade-up text-5xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.0] mb-5">
                            ¿Para quién?
                        </h2>
                        <p className="fade-up font-serif text-xl md:text-2xl text-ink-muted italic leading-snug mb-6">
                            "Para los locos, los inconformistas, los que ven el mundo diferente. Mentes inquietas conectando."
                        </p>
                        <p className="fade-up text-base text-ink font-medium leading-relaxed max-w-sm hidden lg:block">
                            No es un panel de expertos. Es un espacio íntimo donde la inteligencia colectiva supera al individuo.
                        </p>
                    </div>
                </div>

                {/* Accordion col */}
                <div className="lg:col-span-8">
                    <p className="fade-up text-lg text-ink font-medium leading-relaxed mb-8 block lg:hidden">
                        No es un panel de expertos. Es un espacio íntimo donde la inteligencia colectiva supera al individuo.
                    </p>

                    <div className="fade-up flex flex-col gap-0 border-t-2 border-ink">
                        {personas.map((persona, idx) => {
                            const isOpen = openIndex === idx;

                            return (
                                <div key={idx} className="border-b border-border flex flex-col overflow-hidden">
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="flex items-center gap-4 py-6 md:py-8 w-full text-left group transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-yc-orange"
                                    >
                                        <span
                                            className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                         ${isOpen
                                                    ? 'bg-yc-orange text-white rotate-45'
                                                    : 'bg-surface-dark text-ink-muted group-hover:bg-ink group-hover:text-white'}`}
                                        >
                                            +
                                        </span>
                                        <span className={`text-xl md:text-3xl font-extrabold tracking-[-0.02em] transition-colors duration-300 ${isOpen ? 'text-yc-orange' : 'group-hover:text-ink-light'}`}>
                                            {persona.title}
                                        </span>
                                    </button>

                                    {/* Expanded Content */}
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pl-12 pb-8 pr-4 text-ink-muted font-medium text-base md:text-lg leading-relaxed max-w-2xl">
                                                {persona.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
