import type { SkillGroupData } from '../types'

/**
 * Solo se listan tecnologias y capacidades verificables en proyectos
 * realizados o formacion confirmada. Antes de sumar una tecnologia nueva,
 * verificar que aparezca en un proyecto real o dejarla marcada como TODO.
 */
export const skillGroups: SkillGroupData[] = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo web',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Vite'],
  },
  {
    id: 'diseno-responsive',
    title: 'Diseno responsive',
    items: [
      'Mobile-first',
      'Flexbox y Grid',
      'Accesibilidad basica (contraste, foco, semantica)',
    ],
  },
  {
    id: 'python-django',
    title: 'Python y Django',
    items: ['Python', 'Django'],
  },
  {
    id: 'soluciones-digitales',
    title: 'Soluciones digitales',
    items: [
      'Relevamiento de requerimientos',
      'Supabase y automatizacion',
      'Despliegue y mejora continua',
    ],
  },
  {
    id: 'publicidad-marketing',
    title: 'Publicidad y marketing',
    items: [
      'Elaboracion de propuestas comerciales',
      'Contenido y comunicacion digital',
      'Atencion y seguimiento de anunciantes',
    ],
  },
]
