import Image from "next/image";
import '../globals.css';

export default function FrontPage() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-[var(--color-background)] p-4 lg:p-8">

            {/* GRID PRINCIPAL: Limitamos altura máxima para que no se estire demasiado en pantallas grandes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full max-w-[1200px] aspect-[16/9] lg:aspect-[2/1] min-h-[600px] max-h-[800px]">

                {/* ------------------------------------------------------------------------------------ */}
                {/* PANEL IZQUIERDO: Imagen y Redes (Compacto)                                           */}
                {/* ------------------------------------------------------------------------------------ */}
                <section className="relative h-full flex flex-col items-center justify-center gap-6 p-6 lg:p-8 rounded-[2rem] bg-[var(--color-surface)]/30 border border-[var(--color-border)]/50 backdrop-blur-sm overflow-hidden group">

                    {/* Decoración de fondo */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50"></div>
                    <div className="absolute -inset-10 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                    {/* Foto de perfil (Más pequeña: 280px máx en desktop) */}
                    <div className="relative z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
                        <Image
                            className="relative rounded-full w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] object-cover border-[4px] border-[var(--color-background)] shadow-xl z-10 hover:scale-105 transition-transform duration-500"
                            width={280}
                            height={280}
                            src="/xavi.png"
                            alt="Xavi García Burgos"
                            priority
                        />
                        {/* Badge Flotante */}
                        <div className="absolute bottom-2 right-2 z-20 bg-[var(--color-background)] py-1.5 px-3 rounded-full shadow-lg border border-[var(--color-border)] flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-wider text-[var(--color-foreground)]">OPEN TO WORK</span>
                        </div>
                    </div>

                    {/* Redes Sociales (Iconos un pelín más pequeños) */}
                    <div className="flex flex-wrap justify-center gap-2 z-10">
                        <SocialCard href="https://linkedin.com/in/xavier-garcia-burgos-281696304/" icon="/linkedin.svg" label="LinkedIn" />
                        <SocialCard href="https://github.com/Exhodus" icon="/github-mark-white.png" label="GitHub" />
                        <SocialCard href="mailto:garciax207@gmail.com" isIcon label="Email">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </SocialCard>
                        <SocialCard href="/xaviCV.pdf" isIcon label="CV" download isPrimary>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </SocialCard>
                    </div>
                </section>


                {/* ------------------------------------------------------------------------------------ */}
                {/* PANEL DERECHO: Texto de Venta (Compactado)                                          */}
                {/* ------------------------------------------------------------------------------------ */}
                <section className="h-full flex flex-col justify-center p-8 lg:p-10 rounded-[2rem] bg-[var(--color-surface)]/10 border border-[var(--color-border)]/30 backdrop-blur-sm relative overflow-hidden text-left">

                    {/* Fondo sutil (Texto más pequeño y transparente) */}
                    <div className="absolute top-6 right-6 text-[5rem] font-bold text-[var(--color-foreground)]/5 pointer-events-none select-none leading-none">JAVA</div>

                    <div className="flex flex-col gap-4 relative z-10 max-w-xl">

                        {/* CÁPSULA BIPI (Texto pequeño) */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 w-fit">
                            <span className="flex h-1.5 w-1.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-primary)]"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-medium text-[var(--color-primary)] tracking-wide">
                                Desarrollando ERP Empresarial en <span className="font-bold">Tecnocim Innova</span>
                            </span>
                        </div>

                        {/* TÍTULO (Bajado de 7xl a 5xl) */}
                        <div className="space-y-1">
                            <h2 className="text-sm font-medium text-[var(--color-secondary)] tracking-widest uppercase">
                                Junior Software Developer
                            </h2>
                            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] leading-tight">
                                Xavi García <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Burgos</span>
                            </h1>
                        </div>

                        {/* PITCH (Texto base en lugar de xl) */}
                        <div className="space-y-3 text-sm lg:text-base text-[var(--color-text-2)] leading-relaxed text-balance">
                            <p>
                                <strong className="text-[var(--color-foreground)]">10 años de experiencia laboral</strong> transformados en código disciplinado.
                            </p>
                            <p>
                                Combino la mentalidad resolutiva del sector logístico con una sólida base técnica en <strong className="text-[var(--color-foreground)]">Java & Spring Boot</strong>.
                                Busco un equipo donde aportar madurez, capacidad de gestión y código backend robusto.
                            </p>
                        </div>

                        {/* STACK (Compacto con iconos pequeños) */}
                        <div className="py-3 border-t border-b border-[var(--color-border)]/50 my-1">
                            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs lg:text-sm font-medium text-[var(--color-text-2)]/90">
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--color-primary)] text-base">☕</span> Spring Boot & JPA
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400 text-base">⚛️</span> React & Next.js
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-yellow-500 text-base">🗄️</span> MySQL & PostgreSQL
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 text-base">🚀</span> API REST & Git
                                </li>
                            </ul>
                        </div>

                        {/* BOTONES (Padding reducido) */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a href="/proyectos" className="flex-1 min-w-[140px] text-center px-6 py-3 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl font-bold text-sm lg:text-base hover:bg-[var(--color-highlight)] hover:-translate-y-1 transition-all duration-300">
                                Ver Portfolio
                            </a>
                            <a href="/sobremi" className="flex-1 min-w-[140px] text-center px-6 py-3 bg-transparent border-2 border-[var(--color-border)] text-[var(--color-foreground)] rounded-xl font-bold text-sm lg:text-base hover:border-[var(--color-foreground)] hover:-translate-y-1 transition-all duration-300">
                                Mi Historia
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

interface SocialCardProps {
    href: string;
    label: string;
    icon?: string;       // Opcional
    isIcon?: boolean;    // Opcional
    children?: React.ReactNode; // Opcional
    download?: boolean;  // Opcional
    isPrimary?: boolean; // Opcional
}
// ... SocialCard (Tamaño reducido a w-10 h-10) ...
function SocialCard({ href, icon, isIcon, children, label, download, isPrimary }: SocialCardProps) {
    return (
        <a
            href={href}
            target={download ? "_self" : "_blank"}
            rel={download ? "" : "noopener noreferrer"}
            download={download}
            className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl border transition-all duration-300 group
                ${isPrimary
                ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white hover:bg-[var(--color-highlight)]'
                : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary)]/20'
            }`}
            aria-label={label}
        >
            {isIcon ? (
                <div className="transition-transform group-hover:scale-110 duration-300 scale-90">
                    {children}
                </div>
            ) : (
                <Image src={icon || ''} width={20} height={20} alt={label} className="transition-transform group-hover:scale-110 duration-300 opacity-90 group-hover:opacity-100" />
            )}
        </a>
    );
}
