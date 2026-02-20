import Image from "next/image";
import Link from "next/link";

type projComponent = {
    title: string;
    description: string;
    tech: string;
    url: string;
}

export default function ProjectComponent({ title, description, tech, url } : projComponent) {
    // PROTECCIÓN CONTRA ERRORES: Si tech es undefined, usa ""
    const safeTech = tech || "";
    const techTags = safeTech.split(',').filter(t => t.trim() !== "").map(t => t.trim());

    return (
        // Quitamos max-w-5xl y h-[500px]. Ahora es w-full h-full para llenar el carrusel
        <article className="w-full h-full bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border)] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative group">

            {/* LADO IZQUIERDO: IMAGEN (50%) */}
            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-[var(--color-surface)] border-b lg:border-b-0 lg:border-r border-[var(--color-border)] overflow-hidden">

                {/* Placeholder de imagen elegante */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 group-hover:scale-105 transition-transform duration-700">
                    {/* Aquí iría tu <Image src={...} layout="fill" objectFit="cover" /> */}
                    <div className="text-center p-6">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shadow-lg">
                            <span className="text-3xl">🚀</span>
                        </div>
                        <p className="text-[var(--color-text-2)] font-mono text-sm uppercase tracking-widest">Project Preview</p>
                    </div>
                </div>

                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* LADO DERECHO: INFO (50%) */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-8 lg:p-12 flex flex-col relative">

                {/* Cabecera del Proyecto */}
                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex justify-between items-start">
                        <h3 className="text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] leading-tight">
                            {title}
                        </h3>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0  px-4 h-12 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300"
                            title="Ver código en GitHub"
                        >
                            Ver en GitHub
                        </a>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {techTags.map((tag: string, i: number) => (
                            <span key={i} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Separador */}
                <div className="w-20 h-1 bg-[var(--color-primary)] mb-6 rounded-full"></div>

                {/* Descripción con scroll elegante si es necesario */}
                <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-lg text-[var(--color-text-2)] leading-relaxed text-pretty">
                        {description}
                    </p>
                </div>

                {/* Número de página decorativo */}
                <div className="absolute bottom-6 right-8 text-[8rem] font-bold text-[var(--color-foreground)]/5 pointer-events-none leading-none -z-10 select-none">
                    DEV
                </div>
            </div>
        </article>
    );
}
