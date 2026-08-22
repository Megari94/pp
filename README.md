# Portfolio — Marianela Holsbach / Holsbi

Portfolio profesional de Marianela Holsbach, Web Developer y creadora de
**Holsbi**. Presenta proyectos, trayectoria, capacidades y vías de contacto.

## Stack

- React 19 + TypeScript + Vite
- CSS puro con variables (sin frameworks de utilidades)
- [motion](https://motion.dev/) para animaciones puntuales
- [lucide-react](https://lucide.dev/) para iconografía
- ESLint (flat config) + TypeScript en modo estricto

## Requisitos

- Node.js 20+

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Calidad

```bash
npm run lint      # ESLint
npx tsc -b        # Chequeo de tipos
npm run build     # Build de produccion (incluye tsc -b)
npm run preview   # Sirve el build de dist/ localmente
```

## Estructura

```
src/
  components/   Componentes reutilizables (Navbar, tarjetas, modal, iconos)
  sections/     Una seccion de la landing por archivo (Hero, About, ...)
  data/         Contenido tipado: proyectos, trayectoria, capacidades, contacto
  styles/       tokens.css (variables de diseno) y global.css (reset + utilidades)
  types/        Tipos compartidos
  hooks/        useReducedMotion, useActiveSection, useReveal
public/
  projects/     Capturas WebP reales de cada proyecto publicado
  favicon.svg, og-image.png, robots.txt, sitemap.xml
```

## Agregar un proyecto nuevo

Editar [`src/data/projects.ts`](src/data/projects.ts) y sumar un objeto al
arreglo `projects` siguiendo el tipo `Project` (`src/types/index.ts`). No
completar campos que no puedan verificarse: dejar un comentario `TODO` en su
lugar. Si el proyecto tiene imagen propia, agregarla en `public/projects/`.

## Datos personales y de contacto

Centralizados en [`src/data/siteConfig.ts`](src/data/siteConfig.ts). Los
campos marcados `TODO` (por ejemplo la URL final de despliegue) deben
completarse antes de publicar en el dominio definitivo — y actualizarse
tambien en `index.html` (canonical, Open Graph, Twitter Card, JSON-LD) y en
`public/robots.txt` / `public/sitemap.xml`.

## Despliegue

El proyecto es un sitio estatico (`npm run build` genera `dist/`). Puede
desplegarse en cualquier hosting estatico (Cloudflare Pages, Netlify, GitHub
Pages, Vercel). Pasos generales:

1. `npm run build`
2. Subir el contenido de `dist/` al hosting elegido, o conectar el repositorio
   para build automatico (`npm run build`, carpeta de salida `dist`).
3. Actualizar `siteConfig.siteUrl` y las URLs de `index.html` /
   `public/sitemap.xml` con el dominio final.

## Fuente de trayectoria

La seleccion de formacion y experiencia de [`src/data/experience.ts`](src/data/experience.ts)
se basa exclusivamente en el CV de Marianela. El portfolio no publica enlaces a repositorios:
los proyectos se muestran mediante sus versiones en produccion.

## TODO pendientes conocidos

- Definir la URL de despliegue final y actualizarla en `siteConfig.ts`,
  `index.html` y `public/sitemap.xml`.
