import Image from "next/image";
import '../globals.css'
export default function FrontPage(){
    return(
        <div className="flex flex-row w-full max-w-6xl h-screen justify-center items-center gap-16 px-8">
            <div className="flex flex-col items-center gap-12">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Image
                        className="relative rounded-3xl w-[280px] h-[280px] object-cover border-4 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-300 shadow-2xl"
                        width={280}
                        height={280}
                        src="/xavi.png"
                        alt="Xavi García Burgos"
                    />
                </div>

                {/* Iconos sociales */}
                <div className="flex gap-5 items-center">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/xavier-garcia-burgos-281696304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-13 flex items-center justify-center bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-200 group"
                        aria-label="LinkedIn"
                    >
                        <Image
                            src="/linkedin.svg"
                            width={24}
                            height={24}
                            alt="LinkedIn"
                            className="group-hover:brightness-125 transition"
                        />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Exhodus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-13 flex items-center justify-center bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-200 group"
                        aria-label="GitHub"
                    >
                        <Image
                            src="/github-mark-white.png"
                            width={24}
                            height={24}
                            alt="GitHub"
                            className="group-hover:brightness-125 transition"
                        />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:garciax207@gmail.com"
                        className="w-12 h-13 flex items-center justify-center bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-200 group"
                        aria-label="Email"
                    >
                        <svg
                            className="w-6 h-6 text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>

                    {/* CV Download */}
                    <a
                        href="/xaviCV.pdf"
                        download
                        className="w-12 h-13 flex items-center justify-center bg-[var(--color-primary)] border-2 border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-highlight)] hover:border-[var(--color-highlight)] hover:scale-110 transition-all duration-200 group"
                        aria-label="Descargar CV"
                    >
                        <svg
                            className="w-6 h-6 text-[var(--color-background)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Contenido de texto */}
            <div className="flex flex-col gap-6 max-w-xl">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold text-[var(--color-foreground)] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-highlight)] bg-clip-text text-transparent leading-tight">
                        Xavi García Burgos
                    </h1>
                    <h2 className="text-3xl font-semibold text-[var(--color-secondary)] tracking-wide">
                        Fullstack Developer
                    </h2>
                </div>

                <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></div>

                <p className="text-lg text-[var(--color-text-2)] leading-relaxed">
                    Programador versátil con experiencia en <span className="text-[var(--color-foreground)] font-semibold">frontend</span>, <span className="text-[var(--color-foreground)] font-semibold">backend</span> y <span className="text-[var(--color-foreground)] font-semibold">bases de datos</span>.
                    <br/>
                    Me adapto rápido a nuevas tecnologías y equipos.
                    <span className="text-[var(--color-primary)] font-medium"> Disponible en Barcelona y remoto</span>.
                </p>

                <div className="flex gap-4 mt-4">
                    <a
                        href="/proyectos"
                        className="px-8 py-3 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg font-semibold hover:bg-[var(--color-highlight)] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[var(--color-primary)]/50"
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="mailto:garciax207@gmail.com"
                        className="px-8 py-3 border-2 bg-[var(--color-surface)] border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-200"
                    >
                        Contactar
                    </a>
                    <a
                        href="/sobremi"
                        className="px-8 py-3 bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:scale-110 transition-all duration-200"
                    >
                        Sobre mí
                    </a>
                </div>
            </div>
        </div>

    )
}
