/**
 * HowItWorks Section — Apple-style Sticky Scroll Engine
 * Highly immersive desktop and mobile experience.
 */

import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
    {
        number: '01',
        title: 'Asegura tu silla',
        description: 'Abrimos exactamente 30 plazas por sesión. Te registras para asegurar tu lugar en la audiencia, escuchar, y ser parte de la conversación.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    },
    {
        number: '02',
        title: 'El Sorteo',
        description: 'De los 30 asistentes, sorteamos solo a 4 personas esa misma noche para que hagan su pitch. Si no te toca, tendrás más prioridad en la siguiente.',
        image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1200',
    },
    {
        number: '03',
        title: 'Tu Momento',
        description: 'Tienes el escenario. Comparte en qué estás trabajando, tu visión, y recibe feedback brutalmente honesto y constructivo del grupo.',
        image: 'https://images.unsplash.com/photo-1556761175-5973eafcd413?auto=format&fit=crop&q=80&w=1200',
    },
    {
        number: '04',
        title: 'De todos, para todos',
        description: 'Aquí nadie es más que nadie. Todo el feedback vale, debatimos ideas y empujamos a los fundadores a pensar más en grande.',
        image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200',
    }
];

export default function HowItWorks() {
    const sectionRef = useScrollAnimation();
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Intersection Observer to track which text step is in the center of the screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-step-index'));
                        setActiveStep(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-40% 0px -40% 0px', // Trigger when element hits the vertical center 20% band
                threshold: 0,
            }
        );

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="como-funciona" className="relative bg-surface text-ink border-b border-border">

            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
                <h2 className="fade-up text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.9] max-w-xl">
                    La mecánica del evento.
                </h2>
                <p className="fade-up text-ink-muted text-lg mt-4 font-semibold max-w-md">
                    Un formato diseñado para el intercambio real y sin filtros.
                </p>
            </div>

            {/* 
        APPLE-STYLE STICKY SCROLL 
        Desktop: Left side sticky image, Right side scrolling text.
        Mobile: Top sticky image (short), Bottom scrolling text.
      */}
            <div className="relative flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 gap-8 md:gap-16">

                {/* IMAGE SIDE (Sticky) */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] sticky top-20 md:top-24 rounded-2xl overflow-hidden bg-surface-dark shadow-2xl image-reveal">
                    {steps.map((step, idx) => (
                        <img
                            key={idx}
                            src={step.image}
                            alt={step.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${activeStep === idx
                                    ? 'opacity-100 scale-100 mix-blend-normal blur-none'
                                    : 'opacity-0 scale-110 mix-blend-luminosity blur-sm pointer-events-none'
                                }`}
                        />
                    ))}
                    {/* Subtle gradient overlay to ensure the image frame looks premium */}
                    <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 pointer-events-none" />
                </div>

                {/* TEXT SIDE (Scrolling) */}
                <div className="w-full md:w-1/2 flex flex-col pt-[10vh] md:pt-[20vh] pb-[40vh]">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            ref={(el) => { stepRefs.current[idx] = el; }}
                            data-step-index={idx}
                            className={`min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center transition-all duration-700 ease-out
                ${activeStep === idx ? 'opacity-100 translate-x-0' : 'opacity-20 md:-translate-x-4'}
              `}
                        >
                            <span className="w-12 h-12 rounded-full bg-yc-orange text-white flex items-center justify-center font-extrabold text-lg tracking-widest mb-6">
                                {step.number}
                            </span>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
                                {step.title}
                            </h3>
                            <p className="text-ink-light text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
