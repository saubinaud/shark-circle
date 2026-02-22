/**
 * HowItWorks Section — Stacking Cards Interface
 * Implements a modern sticky-scroll overlapping deck of cards.
 * Native mobile friendly and high visual impact.
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useParallax } from '../hooks/useParallax';

const steps = [
    {
        number: '01',
        title: 'Asegura tu silla',
        description: 'Aprobamos exactamente a 30 asistentes por sesión. Aplica para asegurar tu lugar en la audiencia, escuchar los pitches en vivo y sumar al debate.',
        details: 'Queremos mentes activas, no oyentes pasivos. Al ser aceptado, confirmamos tu acceso a Café Don Guto.',
    },
    {
        number: '02',
        title: 'Selección Justa',
        description: 'De los 30 aceptados, sorteamos esa misma noche a 4 fundadores para que presenten.',
        details: 'Hacerlo al azar garantiza igualdad. Dar mayor prioridad a quien lleva 3 ediciones asistiendo asegura equidad. Si no pitcheas hoy, tu turno llegará pronto.',
    },
    {
        number: '03',
        title: 'Tu Momento',
        description: 'Tienes el escenario y toda la atención. Comparte tu producto, tus métricas o la idea que te quita el sueño.',
        details: 'No necesitas un deck corporativo perfecto. Puedes mostrar código, un Figma o hacer una demo en vivo. Demuestra que estás ejecutando.',
    },
    {
        number: '04',
        title: 'Inteligencia Colectiva',
        description: 'Crecemos atacando el problema. El feedback proviene del programador al fondo y del marquetero a tu derecha.',
        details: 'Nadie es juez absoluto. Evaluamos vulnerabilidades en tu modelo y destrozamos o aplaudimos constructivamente tus hipótesis.',
    }
];

export default function HowItWorks() {
    const sectionRef = useScrollAnimation();
    const parallaxRef = useParallax();

    return (
        <section
            ref={(node) => {
                (sectionRef as any).current = node;
                (parallaxRef as any).current = node;
            }}
            id="como-funciona"
            className="px-6 py-24 md:py-32 bg-ink text-white"
        >
            <div className="max-w-4xl mx-auto">

                {/* Header (Inverse Colors for stark contrast with sections above/below) */}
                <div className="mb-16 md:mb-24 text-center">
                    <h2 className="fade-up text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-4 md:mb-6">
                        La mecánica.
                    </h2>
                    <p className="fade-up text-white/60 text-lg md:text-2xl font-medium max-w-2xl mx-auto">
                        Cuatro momentos rápidos. Sin burocracia. Creado para constructores.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative pb-[10vh]">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            // The sticky top calc ensures a satisfying "deck stacking" effect where previous cards' top edges remain visible
                            style={{ top: `calc(10vh + ${idx * 24}px)` }}
                            // Each card has a large negative bottom margin to allow scrolling down to "pull" the next card over it
                            className="sticky mb-[30vh] md:mb-[40vh] fade-up last:mb-0"
                        >
                            <div
                                className="w-full bg-surface text-ink border border-border/50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] rounded-3xl p-8 md:p-14 overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative z-10">

                                    {/* Big Number / Badge with internal Parallax for a micro-interaction */}
                                    <div
                                        className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-surface-dark flex items-center justify-center font-extrabold text-2xl md:text-4xl tracking-tighter text-ink"
                                        data-parallax-speed="0.05"
                                    >
                                        {step.number}
                                    </div>

                                    {/* Context Block */}
                                    <div className="flex-1">
                                        <h3 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] mb-4 md:mb-6 leading-none">
                                            {step.title}
                                        </h3>
                                        <p className="text-xl md:text-2xl text-ink font-bold leading-snug mb-4">
                                            {step.description}
                                        </p>
                                        <p className="text-base md:text-lg text-ink-muted font-medium leading-relaxed">
                                            {step.details}
                                        </p>
                                    </div>
                                </div>

                                {/* Subtle Decorative Background Element per card */}
                                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                                    <span className="text-[15rem] font-bold leading-none tracking-tighter">
                                        {step.number}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
