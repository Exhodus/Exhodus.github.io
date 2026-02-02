'use client';

import ProjectComponent from "@/app/components/projects/ProjectComponent";
import useEmblaCarousel from "embla-carousel-react";
import {useCallback, useEffect, useState} from "react";
import Link from "next/link";

const projects = [
    {
        title: "Sistema de Facturación REST API",
        description: "API REST para gestión de facturación empresarial desarrollada con Spring Boot (Java 21) y MySQL " +
            "que permite gestionar clientes, productos y facturas con numeración automática y control de estados. " +
            "El sistema incluye arquitectura en capas con Spring Data JPA, catálogo de productos clasificados por tipo y " +
            "relaciones jerárquicas completas entre entidades. Actualmente estoy implementando el sistema de DTOs para separar " +
            "la capa de persistencia de la API. Los próximos pasos incluyen completar la gestión de usuarios y " +
            "aprender a implementar seguridad con Spring Security y JWT para autenticación y autorización.",
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

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(); // Inicializar el índice correcto
        emblaApi.on('select', onSelect); // Escuchar cambios
        emblaApi.on('reInit', onSelect); // Por si se reinicia

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <>

            <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-highlight)] transition">
                        XGB
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition">
                            Inicio
                        </Link>
                        <Link href="/sobremi" className="text-[var(--color-primary)] transition">
                            Proyectos
                        </Link>
                        <Link href="/sobremi" className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition">
                            Sobre mí
                        </Link>
                        <a href="mailto:garciax207@gmail.com" className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:bg-[var(--color-highlight)] transition">
                            Contactar
                        </a>
                    </div>
                </div>
            </nav>
            <div className="relative w-full h-screen flex items-center justify-center px-20">

                {/* Botón Anterior (izquierda) */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-10 z-10 w-12 h-12 flex pb-0.75 items-center-safe justify-center bg-[var(--color-surface)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-all duration-200 hover:scale-110"
                    aria-label="Proyecto anterior"
                >
                    <span className="text-2xl">←</span>
                </button>

                {/* Carousel */}
                <div className="overflow-hidden w-full max-w-5xl" ref={emblaRef}>
                    <div className="flex">
                        {projects.map((project, idx) => (
                            <div key={idx} className="flex-[0_0_100%] flex justify-center">
                                <ProjectComponent {...project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón Siguiente (derecha) */}
                <button
                    onClick={scrollNext}
                    className="absolute right-10 z-10 w-12 h-12 flex pb-0.75 items-center justify-center bg-[var(--color-surface)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-all duration-200 hover:scale-110"
                    aria-label="Siguiente proyecto"
                >
                    <span className="text-2xl">→</span>
                </button>

                {/* Indicador opcional (abajo) */}
                <div className="absolute bottom-10 flex gap-2">
                    {projects.map((title, idx) => (
                        <button
                            key={idx}
                            onClick={() => emblaApi?.scrollTo(idx)}
                            className={`w-3 h-3 rounded-full transition ${
                                idx === selectedIndex ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)] hover:bg-[var(--color-secondary)]'
                            }`}
                            aria-label={`Ir al proyecto ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}
