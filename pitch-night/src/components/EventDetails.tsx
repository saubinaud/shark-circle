/**
 * EventDetails Section — Brutalist / YC Style in Spanish
 * Polished layout and micro-interactions while preserving structure.
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

const details = [
    { label: 'Frecuencia', value: 'Cada 2 semanas', extra: 'Jueves 7:30 PM' },
    { label: 'En el escenario', value: '4 fundadores', extra: 'Seleccionados al azar' },
    { label: 'Tiempo al micrófono', value: '15 min máx', extra: 'Con 10 min de Q&A' },
    { label: 'Capacidad total', value: '30 mentes', extra: 'Aforo estrictamente limitado' },
    { label: 'Costo de entrada', value: '100% Gratis', extra: 'No cobramos fees' },
    { label: 'El único trato', value: 'Consumo libre', extra: 'Apoya a la cafetería local' },
    { label: 'Punto de encuentro', value: 'Café Don Guto', extra: 'Miraflores, Lima' },
];

export default function EventDetails() {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} id="detalles" className="px-6 py-20 md:py-32 bg-surface text-ink border-b border-border">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-16">
                    <h2 className="fade-up text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-none">
                        Logística.
                    </h2>
                    <p className="fade-up text-ink-muted text-lg font-medium max-w-sm">
                        Los datos duros y las reglas del juego.
                    </p>
                </div>

                <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl md:rounded-3xl overflow-hidden shadow-sm">
                    {details.map((detail, idx) => (
                        <div
                            key={idx}
                            className="bg-surface p-8 md:p-10 flex flex-col justify-between hover:bg-surface-muted transition-colors duration-300 min-h-[200px] group"
                        >
                            <span className="text-ink-muted text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                                {detail.label}
                            </span>
                            <div>
                                <span className="block text-2xl md:text-3xl font-extrabold tracking-tight leading-none mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                                    {detail.value}
                                </span>
                                <span className="block text-sm text-ink-muted font-normal opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {detail.extra}
                                </span>
                            </div>
                        </div>
                    ))}
                    {/* Empty spacer block to complete the grid visually */}
                    <div className="bg-surface p-8 hidden lg:flex items-center justify-center hover:bg-yc-orange hover:text-white transition-colors duration-500 cursor-crosshair group">
                        <span className="font-extrabold text-3xl opacity-10 group-hover:opacity-100 transition-opacity">///</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
