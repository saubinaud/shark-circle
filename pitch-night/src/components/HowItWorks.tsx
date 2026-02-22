/**
 * HowItWorks Section — Minimalist Typographic Timeline
 * Inspired by Vercel/Stripe clean design. No messy borders or images.
 * Pure focus on clarity, large typography, and flow.
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
        details: 'Hacerlo al azar garantiza igualdad. Dar mayor prioridad a quien lleva 3 ediciones asistiendo asegura justicia. Si no pitcheas hoy, tu turno llegará pronto.',
    },
    {
        number: '03',
        title: 'Tu Momento',
        description: 'Tienes el escenario y toda la atención. Comparte tu producto, tus métricas o la idea que te quita el sueño.',
        details: 'No necesitas un deck corporativo perfecto. Puedes mostrar código, un Figma o hacer una demo en vivo. Demuestra ejecución.',
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

    return (
        <section ref={sectionRef} id="como-funciona" className="px-6 py-24 md:py-32 bg-surface text-ink border-b border-border">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-20 md:mb-28 text-center md:text-left">
                    <h2 className="fade-up text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-6">
                        La mecánica.
                    </h2>
                    <p className="fade-up text-ink-muted text-xl md:text-2xl font-medium max-w-2xl">
                        Un formato diseñado para ir directo al grano. Sin burocracia.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative pl-4 md:pl-0 fade-up">
                    {/* Vertical connecting line (mobile shifted, desktop centered via layout if we wanted, but let's keep it left-aligned for reading flow) */}
                    <div className="absolute left-[39px] md:left-[59px] top-6 bottom-6 w-px bg-border hidden sm:block" />

                    <div className="flex flex-col gap-16 md:gap-24 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group flex flex-col sm:flex-row gap-6 md:gap-12 items-start">

                                {/* Number Circle */}
                                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-dark group-hover:bg-yc-orange group-hover:text-white transition-colors duration-300 flex items-center justify-center border-4 border-surface font-extrabold text-lg md:text-2xl tracking-tighter text-ink relative z-10">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="pt-2">
                                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-4 group-hover:text-yc-orange transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-ink font-semibold leading-snug mb-4">
                                        {step.description}
                                    </p>
                                    <p className="text-base md:text-lg text-ink-muted font-medium leading-relaxed max-w-2xl">
                                        {step.details}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
