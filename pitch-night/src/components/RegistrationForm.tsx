/**
 * RegistrationForm Section — Dynamic Focus 'Takeover' Experience
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

    // Track which input is focused for the takeover effect
    const [focusedField, setFocusedField] = useState<string | null>(null);

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
            <section ref={sectionRef} id="registro" className="px-6 py-32 md:py-48 bg-yc-orange text-white">
                <div className="max-w-2xl mx-auto text-center fade-up">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-yc-orange mb-8">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-[-0.04em] leading-none">
                        Solicitud recibida.
                    </h2>
                    <p className="text-white/90 text-xl font-medium max-w-lg mx-auto">
                        Revisaremos tu perfil. Muy pronto nos pondremos en contacto contigo con tu confirmación.
                    </p>
                </div>
            </section>
        );
    }

    // The wrapper dims when a field is focused
    const isFormFocused = focusedField !== null;

    return (
        <section ref={sectionRef} id="registro" className={`px-6 py-24 md:py-32 transition-colors duration-700 ${isFormFocused ? 'bg-ink' : 'bg-surface-muted'} text-ink`}>
            <div className="max-w-4xl mx-auto">

                {/* Animated Header */}
                <div className={`transition-all duration-700 text-center mb-16 ${isFormFocused ? 'opacity-20 scale-95 blur-sm' : 'opacity-100 scale-100 blur-none'}`}>
                    <h2 className={`text-6xl md:text-[6rem] font-extrabold tracking-[-0.05em] leading-[0.9] mb-4 ${isFormFocused ? 'text-white' : 'text-ink'}`}>
                        Toma el micrófono.
                    </h2>
                    <p className={`text-lg md:text-2xl font-medium max-w-2xl mx-auto ${isFormFocused ? 'text-white' : 'text-ink-muted'}`}>
                        Prepara tu mejor pitch. Los cupos son muy reducidos.
                    </p>
                </div>

                {/* Form Takeover Container */}
                <div className="relative fade-up">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10">

                        <div className={`transition-all duration-500 ${isFormFocused && focusedField !== 'nombre' ? 'opacity-30' : 'opacity-100'}`}>
                            <label htmlFor="nombre" className={`block text-[11px] font-bold uppercase tracking-[0.2em] mb-2 ${isFormFocused ? 'text-yc-orange' : 'text-ink-muted'}`}>Nombre Completo</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                value={formData.nombre}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('nombre')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Steve Jobs"
                                className={`w-full bg-transparent border-b-2 py-4 text-3xl md:text-5xl font-bold tracking-tight transition-all outline-none placeholder:text-ink/20
                  ${isFormFocused
                                        ? 'border-white/20 text-white focus:border-yc-orange focus:placeholder:text-white/10'
                                        : 'border-ink/20 text-ink focus:border-black'}
                `}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                            <div className={`transition-all duration-500 ${isFormFocused && focusedField !== 'email' ? 'opacity-30' : 'opacity-100'}`}>
                                <label htmlFor="email" className={`block text-[11px] font-bold uppercase tracking-[0.2em] mb-2 ${isFormFocused ? 'text-yc-orange' : 'text-ink-muted'}`}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="steve@apple.com"
                                    className={`w-full bg-transparent border-b-2 py-4 text-2xl md:text-3xl font-bold tracking-tight transition-all outline-none placeholder:text-ink/20
                    ${isFormFocused ? 'border-white/20 text-white focus:border-yc-orange' : 'border-ink/20 text-ink focus:border-black'}
                  `}
                                />
                            </div>
                            <div className={`transition-all duration-500 ${isFormFocused && focusedField !== 'whatsapp' ? 'opacity-30' : 'opacity-100'}`}>
                                <label htmlFor="whatsapp" className={`block text-[11px] font-bold uppercase tracking-[0.2em] mb-2 ${isFormFocused ? 'text-yc-orange' : 'text-ink-muted'}`}>WhatsApp</label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('whatsapp')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="+51 999 999 999"
                                    className={`w-full bg-transparent border-b-2 py-4 text-2xl md:text-3xl font-bold tracking-tight transition-all outline-none placeholder:text-ink/20
                    ${isFormFocused ? 'border-white/20 text-white focus:border-yc-orange' : 'border-ink/20 text-ink focus:border-black'}
                  `}
                                />
                            </div>
                        </div>

                        <div className={`transition-all duration-500 ${isFormFocused && focusedField !== 'proyecto' ? 'opacity-30' : 'opacity-100'}`}>
                            <label htmlFor="proyecto" className={`flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] mb-2 ${isFormFocused ? 'text-yc-orange' : 'text-ink-muted'}`}>
                                <span>¿Qué estás construyendo?</span>
                                <span className={`${charCount > MAX_DESCRIPTION_CHARS * 0.9 ? 'text-red-500' : ''}`}>
                                    {charCount}/{MAX_DESCRIPTION_CHARS}
                                </span>
                            </label>
                            <textarea
                                id="proyecto"
                                name="proyecto"
                                required
                                value={formData.proyecto}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('proyecto')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Estoy construyendo un SaaS para..."
                                className={`w-full bg-transparent border-b-2 py-4 text-2xl md:text-4xl font-bold tracking-tight transition-all outline-none min-h-[120px] resize-none placeholder:text-ink/20
                  ${isFormFocused ? 'border-white/20 text-white focus:border-yc-orange focus:placeholder:text-white/10' : 'border-ink/20 text-ink focus:border-black'}
                `}
                            />
                        </div>

                        <div className={`transition-all duration-500 ${isFormFocused && focusedField !== 'participacion' ? 'opacity-30' : 'opacity-100'}`}>
                            <label htmlFor="participacion" className={`block text-[11px] font-bold uppercase tracking-[0.2em] mb-2 ${isFormFocused ? 'text-yc-orange' : 'text-ink-muted'}`}>Rol en el evento</label>
                            <select
                                id="participacion"
                                name="participacion"
                                required
                                value={formData.participacion}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('participacion')}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full bg-transparent border-b-2 py-4 text-xl md:text-2xl font-bold tracking-tight transition-all outline-none appearance-none cursor-pointer
                  ${isFormFocused ? 'border-white/20 text-white focus:border-yc-orange' : 'border-ink/20 text-ink focus:border-black'}
                `}
                                style={{
                                    // Safari/Chrome standard overriding for unstyled selects in dark mode
                                    color: (isFormFocused && !formData.participacion) ? 'rgba(255,255,255,0.2)' : (isFormFocused ? 'white' : 'inherit')
                                }}
                            >
                                <option value="" disabled className="text-black bg-white">Selecciona una opción</option>
                                <option value="presentar" className="text-black bg-white">Quiero entrar al sorteo para hacer un Pitch</option>
                                <option value="asistir" className="text-black bg-white">Solo quiero escuchar y aportar feedback</option>
                                <option value="ambas" className="text-black bg-white">Me anoto a ambas</option>
                            </select>
                        </div>

                        {formState === 'error' && (
                            <div className="bg-red-50 text-red-700 px-6 py-4 text-sm font-bold border-l-4 border-red-500 rounded-r-lg mt-4 shadow-sm">
                                Hubo un error de conexión. Por favor, intenta enviar nuevamente.
                            </div>
                        )}

                        <div className={`transition-all duration-700 mt-8 ${isFormFocused ? 'opacity-100 translate-y-0' : 'opacity-90'}`}>
                            <button
                                type="submit"
                                disabled={formState === 'submitting'}
                                className="w-full bg-yc-orange text-white py-6 md:py-8 text-sm md:text-base font-extrabold uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] hover:bg-yc-orange-hover transition-all flex items-center justify-center cursor-pointer shadow-xl shadow-yc-orange/20"
                            >
                                {formState === 'submitting' ? (
                                    <span className="flex items-center gap-3">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Enviando solicitud...
                                    </span>
                                ) : 'Enviar Aplicación'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
