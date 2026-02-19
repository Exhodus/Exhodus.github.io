'use client';

import ProjectComponent from "@/app/components/projects/ProjectComponent";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

// ... TUS DATOS DE PROYECTOS AQUÍ (MISMOS QUE ANTES) ...
const projects = [
    {
        title: "Sistema de Facturación REST API",
        description: "Sistema de facturación empresarial desarrollado con Java 21 y Spring Boot, siguiendo " +
            "arquitectura en capas (Controller, Service, Repository).Implementa modelado relacional completo con " +
            "@OneToMany y @ManyToOne, gestión de entidades mediante Spring Data JPA (Hibernate) y persistencia en " +
            "MySQL.La API expone endpoints REST para gestión de clientes, productos y facturas, utilizando DTOs para " +
            "desacoplar la capa de persistencia de la capa de presentación.Incluye control de versiones con Git",
        tech: "Spring Boot, Spring Data JPA, MySQL, Hibernate",
        url: "https://github.com/Exhodus/FacturationAPI"
    },
    {
        title: "Web de patrones de Crochet",
        description: "WaterMelonApp es una aplicación full-stack desarrollada con una arquitectura moderna de " +
            "frontend y backend separados, diseñada para gestión de datos con capacidad offline-first. " +
            "El backend está construido con Java y Spring Boot, exponiendo una API REST que maneja autenticación, " +
            "operaciones CRUD y sincronización de datos mediante una base de datos relacional. El frontend, " +
            "implementado en React/JavaScript, consume esta API y ofrece una interfaz reactiva con soporte para " +
            "almacenamiento local mediante WatermelonDB, permitiendo que la aplicación funcione sin conexión y " +
            "sincronice cambios cuando vuelva a estar online. Actualmente el proyecto está configurado para ejecutarse " +
            "completamente en entorno local (localhost), facilitando el desarrollo y las pruebas sin necesidad de " +
            "infraestructura externa.",
        tech: "React, CSS, Spring Boot, Spring Data JPA, MySQL, Hibernate",
        url: "https://github.com/Exhodus/FrontEndWatermelonApp"
    },
    {
        title: "Puzzle Game Inspirado en Pikmin",
        description: "Proyecto individual en Unity que recrea las mecánicas de Pikmin en primera persona. " +
            "El jugador dirige a una cápsula Pikmin mediante raycast (apuntando destinos con NavMesh) y " +
            "alterna su color con un segundo disparo para resolver puzles de botones que se activan solo con el color " +
            "correspondiente. Implementa una máquina de estados para el comportamiento del Pikmin, sistema de cambio " +
            "entre tres cámaras, triggers con validación de materiales y una arquitectura limpia usando el nuevo " +
            "Input System de Unity. Diseñado como un nivel único con puzles encadenados",
        tech: "Unity, Unity Physics, C#, Unity NavMesh",
        url: "https://github.com/Exhodus/PIKMIN-TEST"
    },
    {
        title: "Space Scape",
        description: "Endless runner espacial en 2D desarrollado con Unity. El jugador pilota una nave " +
            "esquivando asteroides generados proceduralmente en un escenario de scroll lateral. Implementa sistema " +
            "de colisiones con Rigidbody2D, generación aleatoria de obstáculos con dificultad escalable, sistema de " +
            "puntuación y controles táctiles optimizados para móvil. Proyecto que consolidó mis conocimientos en " +
            "física 2D, gestión de escenas y optimización de performance en Unity.",
        tech: "Unity, C#",
        url: "https://github.com/Exhodus/Runner"
    },
    {
        title: "Raycast en JavaScript",
        description: "Sistema de raycasting 2D implementado desde cero con JavaScript vanilla y Canvas API. El programa lanza 360 rayos desde la posición del cursor, calculando intersecciones en tiempo real con geometría rectangular mediante álgebra vectorial.\n" +
            "\n" +
            "Implementa algoritmo de intersección rayo-AABB (Axis-Aligned Bounding Box) que evalúa los cuatro lados del rectángulo, calcula el parámetro t de cada intersección válida y selecciona la más cercana. Los rayos se renderizan visualmente hasta el punto de colisión o hasta una distancia máxima si no hay obstáculos.\n" +
            "\n" +
            "Este proyecto me permitió profundizar en geometría computacional, optimización de renderizado en canvas y matemáticas aplicadas a gráficos interactivos.",
        tech: "JavaScript",
        url: "https://github.com/Exhodus/RayCastJavaScript/"
    },
    {
        title: "Falling Sand",
        description: "Simulador de física de partículas tipo \"Falling Sand\" implementado con JavaScript vanilla y Canvas API. Utiliza un autómata celular en grid de 250×250 celdas donde cada partícula de arena sigue reglas físicas simples pero realistas.\n" +
            "\n" +
            "El sistema implementa física granular mediante algoritmo de actualización bottom-up: cada partícula intenta caer verticalmente y, si está bloqueada, evalúa diagonales con selección aleatoria para simular acumulación natural. La interacción es en tiempo real mediante arrastrar del mouse, generando arena dinámica que se comporta como material granular.\n" +
            "\n" +
            "Proyecto que demuestra comprensión de autómatas celulares, optimización de game loops con requestAnimationFrame y simulación física sin motores externos.",
        tech: "JavaScript",
        url: "https://github.com/Exhodus/FallingSand/"
    }
]

export default function ProjectPage() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 25 });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => emblaApi.off('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <main className="h-screen w-full bg-[var(--color-background)] relative flex items-center justify-center overflow-hidden">

            {/* Navbar Flotante Minimalista */}
            <nav className="absolute top-0 w-full z-50 py-6 px-8 flex justify-between items-center pointer-events-none">
                <Link href="/" className="pointer-events-auto text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition">
                    XGB<span className="text-[var(--color-primary)]">.</span>
                </Link>
                <div className="flex gap-2">
                    <Link href="/sobremi" className="pointer-events-auto px-6 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all">
                        Sobre mi
                    </Link>
                    <Link href="/" className="pointer-events-auto px-6 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all">
                        Volver al Inicio
                    </Link>
                </div>
            </nav>

            {/* Fondo Decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--color-primary)]/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-secondary)]/5 rounded-full blur-[120px]"></div>
            </div>

            {/* CONTENEDOR PRINCIPAL - Define el tamaño "Pantalla Completa" */}
            <div className="relative w-full max-w-[1600px] h-[85vh] mt-10 px-4 lg:px-12 flex items-center justify-center gap-6">

                {/* Flecha Izquierda */}
                <button onClick={scrollPrev} className="hidden lg:flex flex-shrink-0 w-16 h-16 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-2)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:scale-110 transition-all z-20 bg-[var(--color-background)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                </button>

                {/* Viewport del Carrusel - Ocupa todo el espacio central */}
                <div className="overflow-hidden w-full h-full rounded-[2.5rem] shadow-2xl" ref={emblaRef}>
                    <div className="flex h-full touch-pan-y">
                        {projects.map((project, idx) => (
                            <div key={idx} className="flex-[0_0_100%] min-w-0 h-full p-2">
                                {/* Pasamos h-full al componente */}
                                <ProjectComponent {...project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flecha Derecha */}
                <button onClick={scrollNext} className="hidden lg:flex flex-shrink-0 w-16 h-16 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-2)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:scale-110 transition-all z-20 bg-[var(--color-background)]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Controles Móviles (solo visibles en móvil) */}
            <div className="absolute bottom-6 flex lg:hidden gap-4 z-30">
                <button onClick={scrollPrev} className="p-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg">←</button>
                <div className="px-4 py-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg font-mono text-sm">
                    {selectedIndex + 1} / {projects.length}
                </div>
                <button onClick={scrollNext} className="p-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg">→</button>
            </div>

            {/* Barra de progreso inferior */}
            <div className="absolute bottom-0 left-0 h-1 bg-[var(--color-primary)] transition-all duration-300 ease-out" style={{ width: `${((selectedIndex + 1) / projects.length) * 100}%` }}></div>

        </main>
    );
}
