/**
 * RegistrationForm Section — YC / Minimalist Form in Spanish
 */

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WEBHOOK_URL = 'https://pallium-n8n.s6hx3x.easypanel.host/webhook/pitch-night';
const MAX_DESCRIPTION_CHARS = 300;

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
    nombre: string;
    email: string;
    whatsapp: string;
    proyecto: string;
    participacion: string;
}

export default function RegistrationForm() {
    const sectionRef = useScrollAnimation();

    const [formState, setFormState] = useState<FormState>('idle');
    const [formData, setFormData] = useState<FormData>({
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
            if (!response.ok) throw new Error('Error en la red');
            setFormState('success');
        } catch {
            setFormState('error');
        }
    };

    if (formState === 'success') {
        return (
            <section ref={sectionRef} id="registro" className="px-6 py-20 md:py-32 bg-ink text-white">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="fade-up visible border-2 border-yc-orange p-10 md:p-16">
                        <h2 className="text-4xl sm:text-6xl font-extrabold mb-5 tracking-tight">
                            Solicitud recibida.
                        </h2>
                        <p className="text-white/70 text-lg sm:text-xl font-medium">
                            Pronto nos pondremos en contacto contigo con los detalles de la próxima edición en Don Guto.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} id="registro" className="px-6 py-16 md:py-24 bg-ink text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Copy side */}
                <div className="flex flex-col justify-center">
                    <h2 className="fade-up text-5xl md:text-[5rem] font-extrabold tracking-[-0.04em] leading-[0.9] mb-6">
                        Toma el<br />micrófono.
                    </h2>
                    <p className="fade-up text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                        Si quieres presentar tu proyecto al mundo, o simplemente sentarte, escuchar y conocer a tu próxima tribu. Los cupos son muy reducidos.
                    </p>
                </div>

                {/* Form aside */}
                <div className="fade-up bg-surface p-6 md:p-12 text-ink">
                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="space-y-1">
                            <label htmlFor="nombre" className="block text-[13px] font-bold text-ink uppercase tracking-widest">Nombre Completo</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ej. Steve Jobs"
                                className="w-full px-4 py-3.5 bg-surface-muted border-2 border-transparent focus:border-ink rounded-none text-ink text-base tracking-tight transition-colors"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-[13px] font-bold text-ink uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    className="w-full px-4 py-3.5 bg-surface-muted border-2 border-transparent focus:border-ink rounded-none text-ink text-base tracking-tight transition-colors"
                                />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="whatsapp" className="block text-[13px] font-bold text-ink uppercase tracking-widest">WhatsApp</label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="+51 999 999 999"
                                    className="w-full px-4 py-3.5 bg-surface-muted border-2 border-transparent focus:border-ink rounded-none text-ink text-base tracking-tight transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="proyecto" className="block text-[13px] font-bold text-ink uppercase tracking-widest flex justify-between">
                                <span>¿Qué estás construyendo?</span>
                                <span className={`text-[10px] ${charCount > MAX_DESCRIPTION_CHARS * 0.9 ? 'text-yc-orange' : 'text-ink-muted'}`}>
                                    {charCount}/{MAX_DESCRIPTION_CHARS}
                                </span>
                            </label>
                            <textarea
                                id="proyecto"
                                name="proyecto"
                                required
                                value={formData.proyecto}
                                onChange={handleChange}
                                placeholder="Una breve descripción (1-2 oraciones) de tu idea."
                                className="w-full px-4 py-3.5 bg-surface-muted border-2 border-transparent focus:border-ink rounded-none text-ink text-base tracking-tight transition-colors min-h-[100px]"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="participacion" className="block text-[13px] font-bold text-ink uppercase tracking-widest">Rol en el evento</label>
                            <select
                                id="participacion"
                                name="participacion"
                                required
                                value={formData.participacion}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 bg-surface-muted border-2 border-transparent focus:border-ink rounded-none text-ink text-base tracking-tight transition-colors appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="presentar">Quiero presentar y ser el centro de atención</option>
                                <option value="asistir">Solo quiero escuchar y ser parte de la audiencia</option>
                                <option value="ambas">Ambas cosas</option>
                            </select>
                        </div>

                        {formState === 'error' && (
                            <div className="bg-red-50 text-red-700 px-4 py-3 text-sm font-bold border-l-4 border-red-500">
                                Hubo un error de conexión. Por favor, intenta nuevamente.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={formState === 'submitting'}
                            className="w-full bg-yc-orange text-white py-4.5 text-[13px] font-extrabold uppercase tracking-[0.2em] hover:bg-yc-orange-hover transition-colors flex items-center justify-center gap-3 mt-4 disabled:opacity-50 cursor-pointer"
                        >
                            {formState === 'submitting' ? 'Enviando...' : 'Postular ahora'}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
