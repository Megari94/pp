# AGENTS.md

Guia rapida para cualquier agente (o persona) que continue este proyecto.

## Que es esto

Portfolio profesional de Marianela Holsbach (Web Developer). SPA de una sola
pagina con secciones ancladas: Inicio, Sobre mi,
Proyectos, Trayectoria, Capacidades, Contacto (mas Metodo de trabajo sin
entrada propia en el nav).

## Stack y comandos

React 19 + TypeScript + Vite. CSS puro (variables en `src/styles/tokens.css`).
`motion` para animacion, `lucide-react` para iconos.

```bash
npm install
npm run dev      # desarrollo
npm run lint     # eslint .
npx tsc -b       # chequeo de tipos
npm run build    # tsc -b + vite build
```

## Arquitectura

- `src/data/*.ts` — unica fuente de contenido (proyectos, trayectoria,
  capacidades, proceso, nav, datos de contacto). Los componentes no deben
  tener texto de contenido hardcodeado salvo copy estructural minimo.
- `src/sections/*` — una seccion de la pagina por archivo, cada una con su
  CSS junto al componente.
- `src/components/*` — piezas reutilizables (Navbar, FloorNav, ProjectCard,
  ProjectModal, WhatsAppButton, Reveal, iconos custom).
- `src/hooks/*` — `useReducedMotion`, `useActiveSection` (scroll-spy del
  nav), `useReveal` (IntersectionObserver para animaciones de entrada).

## Restricciones visuales (no romper)

- Paleta fija en `src/styles/tokens.css`: fondo casi negro (`#050816`),
  acentos cian/violeta/magenta, texto blanco azulado. No introducir colores
  fuera de esas variables sin pedir confirmacion.
- Sin fondos cyberpunk pesados, sin video de fondo, sin WebGL/3D, sin
  sistemas de particulas, sin glitch constante.
- Animaciones: 150–700ms, con `transform`/`opacity` preferentemente. Deben
  respetar `prefers-reduced-motion` (ver `useReducedMotion` y el bloque
  `@media (prefers-reduced-motion: reduce)` en `global.css`). No animar
  letra por letra en mobile. Desactivar hover en touch (`@media (hover: none)`).
- Mobile-first. Verificar sin scroll horizontal en 360/390/768/1366/1920.
  Objetivos tactiles >= 44x44px (ya aplicado en botones y links del nav).

## Reglas de contenido (importante)

- No inventar testimonios, clientes, metricas de mejora, anos de
  experiencia ni tecnologias no usadas realmente.
- Antes de sumar una tecnologia a `src/data/skills.ts`, verificar que
  aparezca en un proyecto real (`src/data/projects.ts`) o en formacion
  confirmada, o dejarla marcada `TODO`.
- La trayectoria de `src/data/experience.ts` debe basarse exclusivamente en el
  CV confirmado de Marianela. Si no hay fecha, se omite; nunca se inventa.
- No publicar enlaces a repositorios ni accesos al codigo de los proyectos.
- La comunicacion debe mantenerse personal: no presentar una empresa,
  equipo o clientes que no esten confirmados.

## Definicion de terminado (para cualquier cambio)

- `npm run lint` y `npx tsc -b` sin errores.
- `npm run build` completa sin errores.
- Revisar el cambio en `npm run dev` en desktop y en un viewport movil
  (375–390px de ancho) antes de darlo por terminado.
- Si se agrega contenido nuevo, revisar que no haya datos inventados y que
  los pendientes queden marcados `TODO`.
