module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/projects/ProjectComponent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ProjectComponent({ title, description, tech, url }) {
    // PROTECCIÓN CONTRA ERRORES: Si tech es undefined, usa ""
    const safeTech = tech || "";
    const techTags = safeTech.split(',').filter((t)=>t.trim() !== "").map((t)=>t.trim());
    return(// Quitamos max-w-5xl y h-[500px]. Ahora es w-full h-full para llenar el carrusel
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "w-full h-full bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border)] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full lg:w-1/2 h-1/2 lg:h-full bg-[var(--color-surface)] border-b lg:border-b-0 lg:border-r border-[var(--color-border)] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 group-hover:scale-105 transition-transform duration-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl",
                                        children: "🚀"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                        lineNumber: 21,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[var(--color-text-2)] font-mono text-sm uppercase tracking-widest",
                                    children: "Project Preview"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                            lineNumber: 19,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                    }, void 0, false, {
                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/2 h-1/2 lg:h-full p-8 lg:p-12 flex flex-col relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl lg:text-5xl font-bold text-[var(--color-foreground)] leading-tight",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300",
                                        title: "Ver código en GitHub",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                                lineNumber: 47,
                                                columnNumber: 108
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                            lineNumber: 47,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: techTags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-md",
                                        children: tag
                                    }, i, false, {
                                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-1 bg-[var(--color-primary)] mb-6 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow overflow-y-auto pr-4 custom-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[var(--color-text-2)] leading-relaxed text-pretty",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 right-8 text-[8rem] font-bold text-[var(--color-foreground)]/5 pointer-events-none leading-none -z-10 select-none",
                        children: "DEV"
                    }, void 0, false, {
                        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/projects/ProjectComponent.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/projects/ProjectComponent.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this));
}
}),
"[project]/app/components/ProjectsPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$projects$2f$ProjectComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/projects/ProjectComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// ... TUS DATOS DE PROYECTOS AQUÍ (MISMOS QUE ANTES) ...
const projects = [
    {
        title: "Sistema de Facturación REST API",
        description: "Sistema de facturación empresarial desarrollado con Java 21 y Spring Boot, siguiendo " + "arquitectura en capas (Controller, Service, Repository).Implementa modelado relacional completo con " + "@OneToMany y @ManyToOne, gestión de entidades mediante Spring Data JPA (Hibernate) y persistencia en " + "MySQL.La API expone endpoints REST para gestión de clientes, productos y facturas, utilizando DTOs para " + "desacoplar la capa de persistencia de la capa de presentación.Incluye control de versiones con Git",
        tech: "Spring Boot, Spring Data JPA, MySQL, Hibernate",
        url: "https://github.com/Exhodus/FacturationAPI"
    },
    {
        title: "Web de patrones de Crochet",
        description: "WaterMelonApp es una aplicación full-stack desarrollada con una arquitectura moderna de " + "frontend y backend separados, diseñada para gestión de datos con capacidad offline-first. " + "El backend está construido con Java y Spring Boot, exponiendo una API REST que maneja autenticación, " + "operaciones CRUD y sincronización de datos mediante una base de datos relacional. El frontend, " + "implementado en React/JavaScript, consume esta API y ofrece una interfaz reactiva con soporte para " + "almacenamiento local mediante WatermelonDB, permitiendo que la aplicación funcione sin conexión y " + "sincronice cambios cuando vuelva a estar online. Actualmente el proyecto está configurado para ejecutarse " + "completamente en entorno local (localhost), facilitando el desarrollo y las pruebas sin necesidad de " + "infraestructura externa.",
        tech: "React, CSS, Spring Boot, Spring Data JPA, MySQL, Hibernate",
        url: "https://github.com/Exhodus/FrontEndWatermelonApp"
    },
    {
        title: "Puzzle Game Inspirado en Pikmin",
        description: "Proyecto individual en Unity que recrea las mecánicas de Pikmin en primera persona. " + "El jugador dirige a una cápsula Pikmin mediante raycast (apuntando destinos con NavMesh) y " + "alterna su color con un segundo disparo para resolver puzles de botones que se activan solo con el color " + "correspondiente. Implementa una máquina de estados para el comportamiento del Pikmin, sistema de cambio " + "entre tres cámaras, triggers con validación de materiales y una arquitectura limpia usando el nuevo " + "Input System de Unity. Diseñado como un nivel único con puzles encadenados",
        tech: "Unity, Unity Physics, C#, Unity NavMesh",
        url: "https://github.com/Exhodus/PIKMIN-TEST"
    },
    {
        title: "Space Scape",
        description: "Endless runner espacial en 2D desarrollado con Unity. El jugador pilota una nave " + "esquivando asteroides generados proceduralmente en un escenario de scroll lateral. Implementa sistema " + "de colisiones con Rigidbody2D, generación aleatoria de obstáculos con dificultad escalable, sistema de " + "puntuación y controles táctiles optimizados para móvil. Proyecto que consolidó mis conocimientos en " + "física 2D, gestión de escenas y optimización de performance en Unity.",
        tech: "Unity, C#",
        url: "https://github.com/Exhodus/Runner"
    },
    {
        title: "Raycast en JavaScript",
        description: "Sistema de raycasting 2D implementado desde cero con JavaScript vanilla y Canvas API. El programa lanza 360 rayos desde la posición del cursor, calculando intersecciones en tiempo real con geometría rectangular mediante álgebra vectorial.\n" + "\n" + "Implementa algoritmo de intersección rayo-AABB (Axis-Aligned Bounding Box) que evalúa los cuatro lados del rectángulo, calcula el parámetro t de cada intersección válida y selecciona la más cercana. Los rayos se renderizan visualmente hasta el punto de colisión o hasta una distancia máxima si no hay obstáculos.\n" + "\n" + "Este proyecto me permitió profundizar en geometría computacional, optimización de renderizado en canvas y matemáticas aplicadas a gráficos interactivos.",
        tech: "JavaScript",
        url: "https://github.com/Exhodus/RayCastJavaScript/"
    },
    {
        title: "Falling Sand",
        description: "Simulador de física de partículas tipo \"Falling Sand\" implementado con JavaScript vanilla y Canvas API. Utiliza un autómata celular en grid de 250×250 celdas donde cada partícula de arena sigue reglas físicas simples pero realistas.\n" + "\n" + "El sistema implementa física granular mediante algoritmo de actualización bottom-up: cada partícula intenta caer verticalmente y, si está bloqueada, evalúa diagonales con selección aleatoria para simular acumulación natural. La interacción es en tiempo real mediante arrastrar del mouse, generando arena dinámica que se comporta como material granular.\n" + "\n" + "Proyecto que demuestra comprensión de autómatas celulares, optimización de game loops con requestAnimationFrame y simulación física sin motores externos.",
        tech: "JavaScript",
        url: "https://github.com/Exhodus/FallingSand/"
    }
];
function ProjectPage() {
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        loop: true,
        duration: 25
    });
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>emblaApi?.scrollPrev(), [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>emblaApi?.scrollNext(), [
        emblaApi
    ]);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return ()=>emblaApi.off('select', onSelect);
    }, [
        emblaApi,
        onSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "h-screen w-full bg-[var(--color-background)] relative flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "absolute top-0 w-full z-50 py-6 px-8 flex justify-between items-center pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "pointer-events-auto text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition",
                        children: [
                            "XGB",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--color-primary)]",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProjectsPage.tsx",
                                lineNumber: 102,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/sobremi",
                                className: "pointer-events-auto px-6 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all",
                                children: "Sobre mi"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProjectsPage.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "pointer-events-auto px-6 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all",
                                children: "Volver al Inicio"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProjectsPage.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProjectsPage.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--color-primary)]/5 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-secondary)]/5 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProjectsPage.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[1600px] h-[85vh] mt-10 px-4 lg:px-12 flex items-center justify-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollPrev,
                        className: "hidden lg:flex flex-shrink-0 w-16 h-16 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-2)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:scale-110 transition-all z-20 bg-[var(--color-background)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1.5,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProjectsPage.tsx",
                                lineNumber: 125,
                                columnNumber: 100
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProjectsPage.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden w-full h-full rounded-[2.5rem] shadow-2xl",
                        ref: emblaRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full touch-pan-y",
                            children: projects.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-[0_0_100%] min-w-0 h-full p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$projects$2f$ProjectComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        ...project
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ProjectsPage.tsx",
                                        lineNumber: 134,
                                        columnNumber: 33
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/app/components/ProjectsPage.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProjectsPage.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollNext,
                        className: "hidden lg:flex flex-shrink-0 w-16 h-16 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-2)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:scale-110 transition-all z-20 bg-[var(--color-background)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1.5,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProjectsPage.tsx",
                                lineNumber: 142,
                                columnNumber: 100
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProjectsPage.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProjectsPage.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 flex lg:hidden gap-4 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollPrev,
                        className: "p-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg font-mono text-sm",
                        children: [
                            selectedIndex + 1,
                            " / ",
                            projects.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 149,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollNext,
                        className: "p-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectsPage.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProjectsPage.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 h-1 bg-[var(--color-primary)] transition-all duration-300 ease-out",
                style: {
                    width: `${(selectedIndex + 1) / projects.length * 100}%`
                }
            }, void 0, false, {
                fileName: "[project]/app/components/ProjectsPage.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProjectsPage.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e7a876a9._.js.map