import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
  {
    id: 'comprender',
    order: 1,
    title: 'Comprender',
    description:
      'Escucho la necesidad real detras del pedido: que problema resuelve, quien lo va a usar y que objetivo de negocio persigue.',
  },
  {
    id: 'disenar',
    order: 2,
    title: 'Diseñar',
    description:
      'Propongo una estructura de contenido e interfaz clara, priorizando lo que el usuario necesita encontrar primero.',
  },
  {
    id: 'construir',
    order: 3,
    title: 'Construir',
    description:
      'Desarrollo la solucion con un stack acorde a la escala del proyecto, cuidando que el codigo sea mantenible.',
  },
  {
    id: 'probar',
    order: 4,
    title: 'Probar',
    description:
      'Reviso funcionamiento, responsive y accesibilidad antes de considerar algo terminado.',
  },
  {
    id: 'mejorar',
    order: 5,
    title: 'Mejorar',
    description:
      'Un sitio publicado sigue evolucionando: ajusto y sumo funcionalidad segun el uso real y el feedback.',
  },
]
