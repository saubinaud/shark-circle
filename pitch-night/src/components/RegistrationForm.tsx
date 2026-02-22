/**
 * RegistrationForm Section — Brutalist Form Restoration
 * Restoring the 2-column split design with enhanced super-fuchsia/Y-Comb focus states.
 */

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WEBHOOK_URL = 'https://pallium-n8n.s6hx3x.easypanel.host/webhook/pitch-night';
const MAX_DESCRIPTION_CHARS = 300;

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function RegistrationForm() {
    const sectionRef = useScrollAnimation();

    const [formState, setFormState] = useState<FormState>('idle');
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        whatsapp: '',
        proyecto: '',
        participacion: '',
    });

    const charCount = formData.proyecto.length;

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        if (name === 'proyecto' && value.length > MAX_DESCRIPTION_CHARS) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Network error');
            setFormState('success');
        } catch {
            setFormState('error');
        }
    };

    if (formState === 'success') {
        return (
            <section ref={sectionRef} id="registro" className="px-6 py-20 md:py-32 bg-ink text-white">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="fade-up visible border-4 border-yc-orange p-10 md:p-16 rounded-2xl bg-surface-dark">
                        <h2 className="text-4xl sm:text-6xl font-extrabold mb-5 tracking-tight text-ink">
                            Solicitud recibida.
                        </h2>
                        <p className="text-ink-muted text-lg sm:text-xl font-medium">
                            Pronto nos pondremos en contacto contigo con los detalles de la próxima edición en Don Guto.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    // Brutalist Input Classes
    const inputBaseStyle = "w-full px-5 py-4 bg-surface-muted border-2 border-border text-ink text-lg font-bold tracking-tight transition-all duration-200 outline-none";
    const inputFocusStyle = "focus:bg-white focus:border-black focus:shadow-[4px_4px_0_0_#000] focus:-translate-y-1 focus:-translate-x-1";

    return (
        <section ref={sectionRef} id="registro" className="px-6 py-16 md:py-24 bg-ink text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Copy side (Left) */}
                <div className="flex flex-col justify-center">
                    <h2 className="fade-up text-6xl md:text-[6rem] font-extrabold tracking-[-0.05em] leading-[0.9] mb-6 drop-shadow-lg">
                        Toma el<br />micrófono.
                    </h2>
                    <p className="fade-up text-white/70 text-lg md:text-2xl font-medium leading-relaxed max-w-md">
                        Si quieres presentar tu proyecto al mundo, o simplemente sentarte, escuchar y conocer a tu próxima tribu. Los cupos son muy reducidos.
                    </p>
                </div>

                {/* Form aside (Right) */}
                <div className="fade-up bg-surface p-8 md:p-14 text-ink rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-border/50">
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">

                        <div className="space-y-2">
                            <label htmlFor="nombre" className="block text-xs font-extra-bold text-ink-muted uppercase tracking-[0.2em]">Nombre Completo</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Steve Jobs"
                                className={`${inputBaseStyle} ${inputFocusStyle} rounded-lg`}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-xs font-extra-bold text-ink-muted uppercase tracking-[0.2em]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="steve@apple.com"
                                    className={`${inputBaseStyle} ${inputFocusStyle} rounded-lg`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="whatsapp" className="block text-xs font-extra-bold text-ink-muted uppercase tracking-[0.2em]">WhatsApp</label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="+51 999 999 999"
                                    className={`${inputBaseStyle} ${inputFocusStyle} rounded-lg`}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="proyecto" className="flex justify-between items-center text-xs font-extra-bold text-ink-muted uppercase tracking-[0.2em]">
                                <span>¿Qué estás construyendo?</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${charCount > MAX_DESCRIPTION_CHARS * 0.9 ? 'bg-red-100 text-red-600' : 'bg-surface-dark text-ink'}`}>
                                    {charCount}/{MAX_DESCRIPTION_CHARS}
                                </span>
                            </label>
                            <textarea
                                id="proyecto"
                                name="proyecto"
                                required
                                value={formData.proyecto}
                                onChange={handleChange}
                                placeholder="Una breve descripción directa al grano."
                                className={`${inputBaseStyle} ${inputFocusStyle} rounded-lg min-h-[120px] resize-none`}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="participacion" className="block text-xs font-extra-bold text-ink-muted uppercase tracking-[0.2em]">Rol en el evento</label>
                            <div className="relative">
                                <select
                                    id="participacion"
                                    name="participacion"
                                    required
                                    value={formData.participacion}
                                    onChange={handleChange}
                                    className={`${inputBaseStyle} ${inputFocusStyle} rounded-lg appearance-none cursor-pointer pr-12`}
                                >
                                    <option value="" disabled>Selecciona una opción</option>
                                    <option value="presentar">Quiero entrar al sorteo para hacer un Pitch</option>
                                    <option value="asistir">Solo quiero escuchar y ser parte de la audiencia</option>
                                    <option value="ambas">Abierto a ambas cosas</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-ink">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        {formState === 'error' && (
                            <div className="bg-red-50 text-red-700 px-6 py-4 text-sm font-bold border-l-4 border-red-500 rounded-r-lg shadow-sm">
                                Hubo un error de conexión. Por favor, intenta de nuevo.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={formState === 'submitting'}
                            className="w-full bg-yc-orange text-white py-6 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] rounded-xl hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#FFF] hover:bg-yc-orange-hover border-2 border-transparent hover:border-white transition-all duration-300 flex items-center justify-center gap-3 mt-4 disabled:opacity-50 cursor-pointer active:translate-y-0 active:shadow-none"
                        >
                            {formState === 'submitting' ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Enviando...
                                </>
                            ) : 'Postular ahora'}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
