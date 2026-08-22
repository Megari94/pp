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
    id: 'maquetacion-interfaces',
    title: 'Maquetacion e interfaces',
    items: ['CSS moderno con variables', 'Tailwind CSS', 'Microinteracciones y animacion con Motion'],
  },
  {
    id: 'git-github',
    title: 'Git y GitHub',
    items: ['Control de versiones', 'Ramas y repositorios remotos'],
  },
  {
    id: 'integracion-despliegue',
    title: 'Integracion y despliegue',
    items: ['Supabase (Postgres, Auth, Storage)', 'Despliegue en Cloudflare Workers', 'Despliegue con dominio propio (GitHub Pages)'],
  },
  {
    id: 'analisis-necesidades',
    title: 'Analisis de necesidades',
    items: [
      'Relevamiento de requerimientos',
      'Traduccion de objetivos de negocio en soluciones digitales',
    ],
  },
  {
    id: 'comunicacion-clientes',
    title: 'Comunicacion con clientes',
    items: [
      'Elaboracion de propuestas comerciales',
      'Atencion y seguimiento de anunciantes',
    ],
  },
  {
    id: 'pensamiento-procesos',
    title: 'Pensamiento orientado a procesos',
    items: [
      'Comprension de flujos administrativos internos',
      'Organizacion y documentacion de tareas',
    ],
  },
  {
    id: 'ia-apoyo-desarrollo',
    title: 'Uso estrategico de IA como apoyo al desarrollo',
    items: [
      'Prototipado asistido por IA',
      'Aceleracion de tareas repetitivas de desarrollo',
    ],
  },
]
