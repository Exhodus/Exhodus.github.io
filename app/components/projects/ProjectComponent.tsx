import Image from "next/image";
import Link from "next/link";

type projectType = {
    title: string,
    description: string,
    tech: string
    url: string
}

export default function ProjectComponent(props: projectType) {

    return (
        <>

            <div className="flex flex-col justify-center w-[95%] gap-10 border-2 border-border bg-surface rounded-2xl pl-10  pr-10 py-8 hover:border-primary transition-colors duration-300">
                <h1 className="text-4xl flex align-middle items-center gap-7">
                    <p className="text-[var(--color-foreground)] hover:text-primary transition-colors duration-200 cursor-pointer">
                        {props.title}
                    </p>
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 hover:opacity-80 transition-all duration-200 cursor-pointer"
                    >
                        <Image
                            src="/github-mark-white.png"
                            width={25}
                            height={25}
                            alt="github"
                            className="hover:brightness-150"
                        />
                    </a>
                </h1>

                <article className="min-h-1/2">
                    <h3 className="text-xl text-[var(--color-secondary)] font-semibold mb-3">Descripción</h3>
                    <p className="text-text-2 leading-relaxed">{props.description}</p>
                </article>

                <section>
                    <h3 className="text-xl text-[var(--color-secondary)] font-semibold mb-3">Tecnologías</h3>
                    <p className="text-text-3">{props.tech}</p>
                </section>
            </div>
        </>
    )
}