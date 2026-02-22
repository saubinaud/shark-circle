/**
 * EventDetails Section — Brutalist / YC Style in Spanish
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const details = [
    { label: 'Frecuencia', value: 'Cada 2 semanas' },
    { label: 'En el escenario', value: '4 presentadores' },
    { label: 'Tiempo al micrófono', value: 'Hasta 40 min' },
    { label: 'Capacidad', value: '30 mentes' },
    { label: 'Costo de entrada', value: '100% Gratis' },
    { label: 'El único trato', value: 'Consumo en cafetería' },
    { label: 'Punto de encuentro', value: 'Café Don Guto' },
];

export default function EventDetails() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} id="detalles" className="px-6 py-16 md:py-24 bg-surface text-ink border-b border-border">
            <div className="max-w-6xl mx-auto">

                <h2 className="fade-up text-5xl md:text-6xl font-extrabold tracking-[-0.04em] mb-12">
                    La logística.
                </h2>

                <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                    {details.map((detail, idx) => (
                        <div key={idx} className="bg-surface p-6 md:p-8 flex flex-col justify-between hover:bg-surface-muted transition-colors min-h-[160px]">
                            <span className="text-ink-muted text-[11px] font-bold tracking-widest uppercase mb-4 block">
                                {detail.label}
                            </span>
                            <span className="text-2xl md:text-[1.75rem] font-extrabold tracking-tight leading-none">
                                {detail.value}
                            </span>
                        </div>
                    ))}
                    {/* Empty spacer block to complete the grid visually */}
                    <div className="bg-surface p-8 hidden lg:flex items-center justify-center hover:bg-yc-orange hover:text-white transition-colors cursor-crosshair">
                        <span className="font-extrabold text-3xl opacity-10">///</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
