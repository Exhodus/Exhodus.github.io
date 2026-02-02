import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            {/* Navbar fijo arriba */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-highlight)] transition">
                        XGB
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition">
                            Inicio
                        </Link>
                        <Link href="/proyectos" className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition">
                            Proyectos
                        </Link>
                        <Link href="/sobremi" className="text-[var(--color-primary)] transition">
                            Sobre mí
                        </Link>
                        <a href="mailto:garciax207@gmail.com" className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:bg-[var(--color-highlight)] transition">
                            Contactar
                        </a>
                    </div>
                </div>
            </nav>

            {/* Contenido principal */}
            <main className="pt-24 pb-16 px-8 max-w-5xl mx-auto">

                {/* Hero section */}
                <section className="mb-16 text-center">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-highlight)] bg-clip-text text-transparent mb-4">
                        Sobre mí
                    </h1>
                    <p className="text-xl text-[var(--color-text-2)] max-w-2xl mx-auto">
                        Full-stack developer graduado en DAM-vi. <br/>De la logística al código,
                        resolución de problemas y aprendizaje continuo.

                    </p>
                </section>

                {/* Quién soy */}
                <section className="mb-16 bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-primary)] transition-colors">
                    <h2 className="text-3xl font-semibold text-[var(--color-secondary)] mb-6">¿Quién soy?</h2>
                    <div className="space-y-4 text-[var(--color-text-2)] leading-relaxed">
                        <p>Soy desarrollador full-stack recién graduado en DAM con especialización en videojuegos.
                            Durante años trabajé en logística, donde desarrollé habilidades analíticas, resolución de
                            problemas bajo presión y organización que ahora aplico al desarrollo de software. En 2023
                            decidí convertir mi pasión por la programación en mi carrera profesional.</p>
                        <p>Me motiva crear soluciones técnicas que funcionen bien y sean mantenibles.
                            Disfruto tanto del frontend (donde puedo ver el resultado inmediato) como del backend
                            (resolviendo lógica compleja y arquitectura). Mi curiosidad me lleva a entender cómo
                            funcionan las cosas por dentro, desde algoritmos de raycasting hasta arquitecturas
                            REST con Spring Boot.</p>
                        <p>Busco mi primer rol profesional como desarrollador, donde pueda aportar
                            mi capacidad de aprendizaje rápido, adaptabilidad y mentalidad resolutiva.
                            Estoy listo para crecer en un equipo que valore la calidad del código, el
                            trabajo colaborativo y el aprendizaje continuo. Disponible en Barcelona y remoto.</p>
                    </div>
                </section>

                {/* Habilidades técnicas */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-[var(--color-secondary)] mb-6">Habilidades Técnicas</h2>

                    {/* Sección 1: Tecnologías que domino */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
                            Tecnologías con las que trabajo
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Frontend */}
                            <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] transition-colors">
                                <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Frontend</h4>
                                <ul className="space-y-2 text-[var(--color-text-2)]">
                                    <li>• HTML5, CSS3, JavaScript</li>
                                    <li>• TypeScript</li>
                                    <li>• React, Next.js</li>
                                    <li>• Tailwind CSS</li>
                                </ul>
                            </div>

                            {/* Backend */}
                            <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] transition-colors">
                                <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Backend</h4>
                                <ul className="space-y-2 text-[var(--color-text-2)]">
                                    <li>• Java</li>
                                    <li>• Spring Boot</li>
                                    <li>• Hibernate, Spring Data JPA</li>
                                    <li>• Node.js</li>
                                    <li>• APIs REST</li>
                                </ul>
                            </div>

                            {/* Bases de datos */}
                            <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] transition-colors">
                                <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Bases de Datos</h4>
                                <ul className="space-y-2 text-[var(--color-text-2)]">
                                    <li>• MySQL</li>
                                    <li>• PostgreSQL</li>
                                    <li>• Diseño relacional</li>
                                    <li>• Optimización de queries</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sección 2: Tecnologías con conocimientos básicos */}
                    <div>
                        <h3 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                            Conocimientos adicionales
                        </h3>
                        <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-secondary)] transition-colors">
                            <p className="text-[var(--color-text-3)] text-sm mb-3">Tecnologías con las que he trabajado en entorno académico:</p>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-[var(--color-text-2)]">
                                <li>• MongoDB</li>
                                <li>• PyMongo</li>
                                <li>• Django</li>
                                <li>• .NET Core / ASP.NET</li>
                                <li>• Entity Framework</li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Formación */}
                <section className="mb-16 bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-primary)] transition-colors">
                    <h2 className="text-3xl font-semibold text-[var(--color-secondary)] mb-6">Formación</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-[var(--color-primary)] pl-6">
                            <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                                Desarrollo de Aplicaciones Multiplataforma - Especialización Videojuegos (DAM-vi)
                            </h3>
                            <p className="text-[var(--color-text-3)] mt-1">Institut Sabadell • 2023-2025</p>
                            <p className="text-[var(--color-text-2)] mt-3">
                                Formación intensiva en desarrollo full-stack con enfoque en videojuegos. Durante el primer año trabajé fundamentos de programación orientada a objetos con Java (patrones de diseño como Observer, Factory), bases de datos relacionales (MySQL, PostgreSQL, MariaDB) y NoSQL (MongoDB), y frontend con HTML/CSS/JavaScript y librerías como jQuery. En segundo curso me especialicé en backend con frameworks enterprise (Spring Boot, Hibernate, Django, .NET/Entity Framework), frontend moderno con React y TypeScript (hooks, gestión de estado), desarrollo móvil nativo con Android Studio, y proyectos de videojuegos 2D/3D con Unity y C#.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experiencia laboral (opcional) */}
                <section className="mb-16 bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-primary)] transition-colors">
                    <h2 className="text-3xl font-semibold text-[var(--color-secondary)] mb-6">Experiencia Laboral</h2>
                    <p className="text-[var(--color-text-2)] mb-6">
                        Mis 10 años en el sector logístico me han dado habilidades directamente aplicables al desarrollo de software: resolver problemas complejos dividiendo tareas, encontrar rutas alternativas cuando el camino principal falla, y mantener la calma bajo presión cuando surgen imprevistos. Estas competencias las aplico cada día cuando debugueo código, optimizo arquitecturas o busco soluciones creativas a retos técnicos.
                    </p>

                    <div className="space-y-4 text-[var(--color-text-2)]">
                        {/* Puesto actual / reciente */}
                        <div>
                            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                                Desarrollador Fullstack • Tecnocim Innova • 2025-2026
                            </h3>
                            <p className="mt-2">
                                Desarrollo de una webapp interna (Proyecto BIPI) para ayudar a consultores de innovación a hacer seguimiento de las empresas con las que trabajan. La aplicación permite gestionar empresas, colaboradores y proyectos, así como las evidencias, estados de aprobación e informes asociados. Trabajo en un stack fullstack usando Node.js con Tailwind CSS en el frontend, Spring Boot en el backend y PostgreSQL como base de datos principal.
                            </p>
                        </div>

                        {/* Experiencia previa agrupada */}
                        <div>
                            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                                Sector de logística • 2014-2025
                            </h3>
                            <p className="mt-2">
                                Experiencia combinada como mozo de almacén y repartidor, gestionando rutas, tiempos de entrega y organización de mercancía. Este trabajo me enseñó a priorizar tareas, trabajar bajo presión, coordinarme con equipos y mantener la atención al detalle, habilidades que ahora aplico a la planificación, desarrollo y mantenimiento de proyectos software.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Hobbies / Intereses */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-[var(--color-secondary)] mb-6">Más allá del código</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl p-6 text-center hover:border-[var(--color-secondary)] transition-colors">
                            <div className="text-4xl mb-3">🎮</div>
                            <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">[Videojuegos]</h3>
                            <p className="text-[var(--color-text-2)] text-sm">Me encantan los juegos de puzles y estrategia, sobre todo los que plantean
                                mecánicas ingeniosas. Entender cómo funcionan por dentro fue lo que me
                                llevó a interesarme por el desarrollo.</p>
                        </div>
                        <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl p-6 text-center hover:border-[var(--color-secondary)] transition-colors">
                            <div className="text-4xl mb-3">🎸</div>
                            <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">[Música]</h3>
                            <p className="text-[var(--color-text-2)] text-sm">Toco guitarra eléctrica y me gusta explorar estilos distintos. Para mí la
                                música es otro espacio donde experimentar, probar cosas nuevas y buscar
                                equilibrio entre técnica y creatividad.</p>
                        </div>
                        <div className="bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl p-6 text-center hover:border-[var(--color-secondary)] transition-colors">
                            <div className="text-4xl mb-3">📚</div>
                            <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">[Lectura]</h3>
                            <p className="text-[var(--color-text-2)] text-sm">Disfruto de la fantasía épica con sistemas de reglas y lógica claros.
                                Me atraen las historias donde el ingenio y la planificación pesan más que
                                la fuerza bruta.</p>
                        </div>
                    </div>
                </section>

                {/* CTA final */}
                <section className="text-center bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-secondary)]/10 to-[var(--color-highlight)]/10 border-2 border-[var(--color-primary)]/30 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4">
                        ¿Hablamos?
                    </h2>
                    <p className="text-lg text-[var(--color-text-2)] mb-6 max-w-2xl mx-auto">
                        [CTA: "Si buscas alguien motivado, que aprende rápido y aporta soluciones, conectemos"]
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="mailto:garciax207@gmail.com"
                            className="px-8 py-3 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg font-semibold hover:bg-[var(--color-highlight)] hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Enviar email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/xavier-garcia-burgos-281696304/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-all duration-200"
                        >
                            Ver LinkedIn
                        </a>
                    </div>
                </section>

            </main>

        </>
    )
}
