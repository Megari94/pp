# CLAUDE.md

Este archivo sigue las mismas reglas que [AGENTS.md](AGENTS.md) — leerlo
primero. Este documento solo agrega notas especificas para Claude Code.

## Resumen

Portfolio de Marianela Holsbach. React + TypeScript + Vite, CSS
puro con variables, `motion` + `lucide-react`. Contenido separado en
`src/data/*.ts` (tipado) para poder crecer sin tocar componentes.

## Al trabajar en este repo

- Usar los comandos de [AGENTS.md](AGENTS.md) (`npm run lint`, `npx tsc -b`,
  `npm run build`) antes de dar un cambio por terminado.
- Respetar la paleta y las restricciones de animacion descritas en
  AGENTS.md — son requisitos explicitos del brief original, no preferencias
  arbitrarias.
- No agregar datos, testimonios, metricas o tecnologias que no puedan
  verificarse en `src/data/projects.ts` o en la formacion confirmada de
  `src/data/experience.ts`. Ante la duda, dejar un comentario `TODO` en el
  archivo de datos correspondiente en vez de inventar el dato.
- Preferir editar `src/data/*.ts` para cambios de contenido; reservar los
  cambios en `src/components` / `src/sections` para estructura o
  comportamiento.
- El sitio se verifica en el navegador embebido del entorno (Vite dev
  server vía `.claude/launch.json`, configuracion `portfolio-dev`).
