/**
 * Footer — YC Style in Spanish
 */

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="px-6 py-10 bg-ink text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                <div>
                    <p className="text-xl md:text-2xl font-extrabold tracking-[-0.03em] mb-1">PITCH NIGHT</p>
                    <p className="text-xs md:text-sm font-medium text-white/50">
                        Una iniciativa de <span className="text-yc-orange font-bold">Winners Circle</span> &copy; {year}
                    </p>
                </div>

                <div className="flex gap-6 md:gap-8 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    <a href="#hero" className="text-white/50 hover:text-white transition-colors">Volver arriba</a>
                    <a href="#como-funciona" className="text-white/50 hover:text-white transition-colors">El Formato</a>
                </div>

            </div>
        </footer>
    );
}
