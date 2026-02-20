import Link from "next/link";
// import Image from "next/image"; // Por si quieres añadir foto tuya en el futuro

export default function AboutPage() {
    return (
        <div
            className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-primary)] selection:text-white">

            {/* Navbar fijo (Compacto) */}
            <nav className="absolute top-0 w-full z-50 py-6 px-8 flex justify-between items-center pointer-events-none">
                <Link href="/"
                      className="pointer-events-auto text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition">
                    XGB<span className="text-[var(--color-primary)]">.</span>
                </Link>
                <div className="flex gap-2">
                    <Link href="/proyectos"
                          className="pointer-events-auto px-6 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all">
                        Proyectos
                    </Link>
                    <Link href="/"
                          className="pointer-events-auto px-6 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all">
                        Volver al Inicio
                    </Link>
                </div>
            </nav>

            <main className="pt-28 pb-16 px-6 max-w-4xl mx-auto relative">

                {/* Decoración de fondo (Más sutil) */}
                <div
                    className="absolute top-20 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-[100px] -z-10"></div>
                <div
                    className="absolute top-40 left-0 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-[80px] -z-10"></div>

                {/* HERO SECTION (Compacto) */}
                <section className="mb-16 text-center animate-fade-in-up">
                    <div
                        className="inline-block mb-3 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-primary)] tracking-widest uppercase">
                        Perfil Profesional
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4 leading-tight">
                        Más que código,<br/>
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                            soluciones reales.
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-[var(--color-text-2)] max-w-2xl mx-auto leading-relaxed text-balance">
                        Backend Developer transformando 10 años de experiencia logística en software eficiente y
                        escalable.
                    </p>
                </section>

                {/* QUIÉN SOY + HISTORIA (Grid ajustado) */}
                <section className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        className="md:col-span-8 bg-[var(--color-surface)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-4 flex items-center gap-2">
                            <span className="text-2xl">👋</span> ¿Quién soy?
                        </h2>
                        <div
                            className="space-y-3 text-sm md:text-base text-[var(--color-text-2)] leading-relaxed text-pretty">
                            <p>
                                Soy un <strong className="text-[var(--color-foreground)]">desarrollador de
                                software</strong> apasionado por entender cómo funcionan las cosas "bajo el capó".
                            </p>
                            <p>
                                Mi trayectoria es poco convencional: durante una década trabajé en logística, donde
                                aprendí a gestionar el caos, optimizar rutas y trabajar bajo presión. En 2023, decidí
                                volcar esa mentalidad analítica en mi verdadera pasión: la programación.
                            </p>
                            <p>
                                Hoy construyo aplicaciones web robustas con <span
                                className="text-[var(--color-secondary)] font-medium">Spring Boot</span> y <span
                                className="text-[var(--color-primary)] font-medium">bases de datos relacionales</span>,
                                buscando siempre el
                                equilibrio entre un código limpio y una experiencia de usuario fluida.
                            </p>
                        </div>
                    </div>

                    {/* Stats Laterales (Compacto) */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <div
                            className="flex-1 bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:bg-[var(--color-primary)]/10 transition-colors">
                            <span className="text-4xl font-bold text-[var(--color-primary)] mb-1">10+</span>
                            <span className="text-xs font-bold text-[var(--color-foreground)] uppercase tracking-wide">Años Logística</span>
                            <span
                                className="text-[10px] text-[var(--color-text-2)] mt-1 opacity-80">(Soft skills)</span>
                        </div>
                        <div
                            className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                            <span className="text-4xl font-bold text-[var(--color-foreground)] mb-1">DAM</span>
                            <span
                                className="text-xs font-bold text-[var(--color-foreground)] uppercase tracking-wide">Graduado</span>
                            <span className="text-[10px] text-[var(--color-text-2)] mt-1">Esp. Videojuegos</span>
                        </div>
                    </div>
                </section>

                {/* STACK TÉCNICO (Grid Bento Compacto) */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6 flex items-center gap-2">
                        <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                        Arsenal Técnico
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Backend Card */}
                        <div
                            className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-primary)] transition-all hover:-translate-y-1">
                            <div
                                className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-xl">☕
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-3">Backend Core</h3>
                            <ul className="space-y-2 text-sm text-[var(--color-text-2)] font-medium">
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-red-500"></span>Java & Spring Boot
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-red-500"></span>Hibernate / JPA
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-red-500"></span>API REST Design
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-red-500"></span>.Net (Básico)
                                </li>
                            </ul>
                        </div>

                        {/* Frontend Card */}
                        <div
                            className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-secondary)] transition-all hover:-translate-y-1">
                            <div
                                className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-xl">⚛️
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-3">Frontend Moderno</h3>
                            <ul className="space-y-2 text-sm text-[var(--color-text-2)] font-medium">
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>React & Next.js
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>TypeScript
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Tailwind CSS
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>HTML5 & CSS3
                                </li>
                            </ul>
                        </div>

                        {/* Data Card */}
                        <div
                            className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-yellow-500 transition-all hover:-translate-y-1">
                            <div
                                className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 text-xl">🗄️
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-3">Data & Tools</h3>
                            <ul className="space-y-2 text-sm text-[var(--color-text-2)] font-medium">
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>MySQL & Postgres
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Git & GitHub
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>MongoDB (Básico)
                                </li>
                                <li className="flex items-center gap-2"><span
                                    className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Postman
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* TRAYECTORIA (Timeline Ajustado) */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-8">Trayectoria</h2>
                    <div className="relative border-l border-[var(--color-border)] ml-3 space-y-10">

                        {/* Item 1 - Puesto Actual */}
                        <div className="relative pl-8 md:pl-10 group">
                            <span
                                className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-background)]"></span>

                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                                <h3 className="text-lg font-bold text-[var(--color-foreground)]">Desarrollador
                                    Fullstack</h3>
                                <span
                                    className="text-xs font-mono text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-0.5 rounded">Júlio 2025 - Febrero 2026</span>
                            </div>

                            <div className="text-base font-medium text-[var(--color-text-2)] mb-3">Tecnocim Innova •
                                Proyecto BIPI
                            </div>

                            <div
                                className="space-y-3 text-sm text-[var(--color-text-2)] max-w-3xl leading-relaxed bg-[var(--color-surface)]/30 p-4 rounded-xl border border-[var(--color-border)]/50">
                                <p>
                                    Desarrollo integral de una <strong>plataforma de gestión empresarial
                                    (ERP/SaaS)</strong> para bonificaciones a la Seguridad Social.
                                </p>

                                <ul className="space-y-2 mt-2">
                                    <li className="flex gap-2 items-start">
                                        <span className="text-[var(--color-primary)] mt-1 text-[10px]">●</span>
                                        <span>
                                            <strong
                                                className="text-[var(--color-foreground)]">Modelado de Datos:</strong> Diseño en PostgreSQL con jerarquías complejas: <em>Consultores → Empresas → Empleados → Proyectos</em>.
                                        </span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <span className="text-[var(--color-primary)] mt-1 text-[10px]">●</span>
                                        <span>
                                            <strong className="text-[var(--color-foreground)]">Lógica Avanzada:</strong> Máquina de estados para propagación de cambios y validaciones en cascada.
                                        </span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <span className="text-[var(--color-primary)] mt-1 text-[10px]">●</span>
                                        <span>
                                            <strong className="text-[var(--color-foreground)]">Seguridad:</strong> Auth completo, gestión de ficheros y auditoría de acciones.
                                        </span>
                                    </li>
                                </ul>

                                <div className="pt-2 flex flex-wrap gap-2">
                                    <span
                                        className="px-2 py-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-[10px] font-mono text-[var(--color-primary)]">Spring Boot</span>
                                    <span
                                        className="px-2 py-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-[10px] font-mono text-[var(--color-primary)]">React</span>
                                    <span
                                        className="px-2 py-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded text-[10px] font-mono text-[var(--color-primary)]">PostgreSQL</span>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 - Logística */}
                        <div className="relative pl-8 md:pl-10 group">
                            <span
                                className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-[var(--color-border)] ring-4 ring-[var(--color-background)] group-hover:bg-[var(--color-secondary)] transition-colors"></span>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                                <h3 className="text-lg font-bold text-[var(--color-foreground)]">Sector Logístico</h3>
                                <span className="text-xs font-mono text-[var(--color-text-3)]">2014 - 2025</span>
                            </div>
                            <div className="text-base font-medium text-[var(--color-text-2)] mb-2">Varias empresas</div>
                            <p className="text-sm text-[var(--color-text-2)] max-w-2xl leading-relaxed">
                                Gestión de rutas, resolución de incidencias en tiempo real y coordinación de equipos.
                                <br/><span className="italic text-xs opacity-80">Aprendizaje clave: "Si algo puede fallar, fallará. Ten siempre un plan B."</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* FORMACIÓN (Compacto) */}
                <section
                    className="mb-16 bg-[var(--color-surface)]/30 border border-[var(--color-border)] rounded-2xl p-6">
                    <div className="flex gap-4 items-start">
                        <div
                            className="hidden sm:block bg-[var(--color-background)] p-3 rounded-lg border border-[var(--color-border)]">
                            <svg className="w-6 h-6 text-[var(--color-foreground)]" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                      d="M12 14l9-5-9-5-9 5 9 5z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[var(--color-foreground)]">CFGS Desarrollo de
                                Aplicaciones Multiplataforma</h3>
                            <p className="text-sm text-[var(--color-text-2)] mb-2">Institut Sabadell • Especialización
                                en Videojuegos</p>
                            <p className="text-xs md:text-sm text-[var(--color-text-2)] max-w-3xl leading-relaxed text-pretty">
                                Formación intensiva desde POO con Java hasta arquitecturas modernas. Proyectos
                                destacados en <strong>Unity (C#)</strong> y desarrollo web Fullstack.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INTERESES (Grid Compacto) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">Off-Topic</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div
                            className="p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors flex items-center gap-3">
                            <span className="text-2xl">🎮</span>
                            <div>
                                <h3 className="font-bold text-[var(--color-foreground)] text-sm">Gamer</h3>
                                <p className="text-xs text-[var(--color-text-2)]">Estrategia y Puzles.</p>
                            </div>
                        </div>
                        <div
                            className="p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors flex items-center gap-3">
                            <span className="text-2xl">🎸</span>
                            <div>
                                <h3 className="font-bold text-[var(--color-foreground)] text-sm">Músico</h3>
                                <p className="text-xs text-[var(--color-text-2)]">Guitarra eléctrica.</p>
                            </div>
                        </div>
                        <div
                            className="p-5 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors flex items-center gap-3">
                            <span className="text-2xl">📚</span>
                            <div>
                                <h3 className="font-bold text-[var(--color-foreground)] text-sm">Lector</h3>
                                <p className="text-xs text-[var(--color-text-2)]">Fantasía Épica.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL (Compacto) */}
                <section
                    className="text-center py-12 px-6 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)] border border-[var(--color-border)] rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-4">
                        ¿Listo para trabajar juntos?
                    </h2>
                    <p className="text-base text-[var(--color-text-2)] mb-6 max-w-xl mx-auto">
                        Busco un equipo donde pueda aportar mi energía y seguir creciendo. Si te encaja mi perfil,
                        hablemos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="mailto:garciax207@gmail.com"
                            className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl font-bold hover:bg-[var(--color-highlight)] hover:-translate-y-1 transition-all shadow-lg text-sm"
                        >
                            Enviar Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/xavier-garcia-burgos-281696304/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-transparent border-2 border-[var(--color-border)] text-[var(--color-foreground)] rounded-xl font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all text-sm"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>

            </main>
        </div>
    );
}
