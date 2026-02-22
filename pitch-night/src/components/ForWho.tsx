/**
 * ForWho Section — Bento Box & Expandable Modals
 * Highly visual representation of target audience.
 */

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const personas = [
    {
        title: 'Genios en las sombras',
        short: 'Para los que escriben código hasta las 3 AM y tienen algo funcional.',
        description: 'Tienes un producto increíble pero no sabes cómo contarlo al mundo. Aquí te ayudaremos a pulir tu mensaje, a salir de la cueva y a entender cómo otros perciben el valor real de lo que has construido.',
        colSpan: 'lg:col-span-8',
        bg: 'bg-surface-muted',
        text: 'text-ink'
    },
    {
        title: 'Fundadores visionarios',
        short: 'Para quienes ya tienen un MVP o primeros usuarios.',
        description: 'Quizás ya tengas tu primer prototipo o estés ganando tracción. Aquí te enfrentas a críticas directas de otros founders para evitar que choques contra la pared y encuentres product-market fit más rápido.',
        colSpan: 'lg:col-span-4',
        bg: 'bg-ink',
        text: 'text-white'
    },
    {
        title: 'Builders de fin de semana',
        short: 'Para los que arman side-projects después del corporativo.',
        description: 'Trabajas de 9 a 6, pero tu pasión está en tu side-project. Ven e inspírate para dar el salto definitivo, o encuentra a ese socio comercial que complemente tus habilidades técnicas llevando tus ventas a otro nivel.',
        colSpan: 'lg:col-span-5',
        bg: 'bg-yc-orange',
        text: 'text-white'
    },
    {
        title: 'Mentes críticas',
        short: 'Para quienes no presentan hoy, pero saben dar feedback brutal.',
        description: 'No importa si hoy no estás construyendo una startup. Si entiendes de producto, diseño o tienes visión de negocio, tu voz es vital. Ven a escuchar ideas, hacer preguntas difíciles y aportar valor a quien expone.',
        colSpan: 'lg:col-span-7',
        bg: 'bg-surface-dark',
        text: 'text-ink'
    },
];

export default function ForWho() {
    const sectionRef = useScrollAnimation();
    const [activePersona, setActivePersona] = useState<number | null>(null);

    return (
        <section ref={sectionRef} id="para-quien" className="px-6 py-24 md:py-32 bg-surface text-ink border-b border-border">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-16 md:mb-20 text-center">
                    <h2 className="fade-up text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-6">
                        ¿Para quién?
                    </h2>
                    <p className="fade-up font-serif text-2xl md:text-3xl text-ink-muted italic max-w-3xl mx-auto mb-6">
                        "Para los inconformistas. Para las mentes inquietas conectando."
                    </p>
                    <p className="fade-up text-lg text-ink font-medium max-w-2xl mx-auto">
                        No es un panel de expertos dando cátedra. Es un espacio íntimo donde la inteligencia colectiva supera al individuo. Aquí todos somos estudiantes y maestros.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 fade-up">
                    {personas.map((persona, idx) => {
                        const isActive = activePersona === idx;

                        return (
                            <div
                                key={idx}
                                onClick={() => setActivePersona(isActive ? null : idx)}
                                className={`
                  ${persona.colSpan} ${persona.bg} ${persona.text} 
                  relative rounded-3xl p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:scale-[0.98] active:scale-[0.95] group
                `}
                                style={{
                                    minHeight: isActive ? '360px' : '280px' // Expand height gracefully
                                }}
                            >
                                {/* Plus Icon that rotates on active */}
                                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                                    <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-black/10 backdrop-blur-md transition-transform duration-500 ${isActive ? 'rotate-45' : 'group-hover:rotate-90'}`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </span>
                                </div>

                                <div className="h-full flex flex-col justify-end">
                                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-3 leading-tight pe-12">
                                        {persona.title}
                                    </h3>

                                    {/* Container for content switch */}
                                    <div className="relative">
                                        {/* Short Description (Fades out when active) */}
                                        <p className={`text-lg md:text-xl font-medium opacity-80 transition-all duration-500 absolute top-0 left-0 w-full ${isActive ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                                            {persona.short}
                                        </p>

                                        {/* Detailed Description (Fades in when active) */}
                                        <p className={`text-base md:text-lg font-medium opacity-90 transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 absolute top-0 left-0 pointer-events-none'}`}>
                                            {persona.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Subtle overlay accent */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
