import type { SkillGroupData } from '../types'

/**
 * Solo se listan tecnologias y capacidades verificables en proyectos
 * realizados o formacion confirmada. Antes de sumar una tecnologia nueva,
 * verificar que aparezca en un proyecto real o dejarla marcada como TODO.
 */
export const skillGroups: SkillGroupData[] = [
  {
    id: 'analisis-soluciones',
    title: 'Analisis y diseno de soluciones',
    short: 'Entender antes de construir.',
    description: 'Investigo la necesidad, organizo la informacion y diseno una solucion que tenga sentido para las personas y la organizacion.',
    items: ['Analisis de requerimientos', 'Diseno funcional', 'Arquitectura de informacion', 'UX/UI', 'Prototipado', 'Documentacion', 'Gestion de proyectos digitales'],
  },
  {
    id: 'frontend',
    title: 'Desarrollo frontend',
    short: 'Interfaces claras en cualquier pantalla.',
    description: 'Construyo interfaces modernas, responsive, accesibles y adaptadas a distintos dispositivos.',
    items: ['HTML', 'CSS', 'JavaScript', 'Diseno responsive', 'Mobile-first', 'Flexbox y Grid', 'Accesibilidad', 'Animaciones web', 'Optimizacion de rendimiento'],
  },
  {
    id: 'backend-datos',
    title: 'Backend, datos e integraciones',
    short: 'Logica, informacion y servicios conectados.',
    description: 'Desarrollo la logica que permite administrar informacion, conectar servicios y sostener el funcionamiento de una solucion digital.',
    items: ['Python', 'Django', 'APIs', 'Bases de datos', 'Modelado de informacion', 'Paneles administrativos', 'Procesamiento de datos', 'Integraciones', 'Digitalizacion documental', 'Git y GitHub'],
  },
  {
    id: 'automatizacion-ia',
    title: 'Automatizacion e inteligencia artificial',
    short: 'Menos repeticion, mas control humano.',
    description: 'Diseno procesos asistidos por IA para reducir tareas repetitivas, organizar informacion y mejorar la operacion cotidiana.',
    items: ['Automatizacion de procesos', 'Flujos de trabajo con IA', 'Clasificacion y transformacion de informacion', 'Generacion asistida de contenido', 'Integraciones entre herramientas', 'Sistemas con control humano', 'Bots para plataformas compatibles', 'Soluciones autonomas supervisadas'],
  },
  {
    id: 'estrategia-comunicacion',
    title: 'Estrategia, comunicacion y presencia digital',
    short: 'Productos que pueden explicarse y crecer.',
    description: 'Combino la mirada tecnologica con experiencia en comunicacion para desarrollar productos que tambien puedan explicarse, posicionarse y crecer.',
    items: ['Comunicacion digital', 'Publicidad', 'Marketing', 'Estrategia de contenidos', 'Campanas digitales', 'SEO', 'Analitica', 'Media kits', 'Presentaciones comerciales', 'Identidad y presencia digital', 'Monetizacion de espacios digitales'],
  },
  {
    id: 'formacion-acompanamiento',
    title: 'Formacion y acompanamiento tecnico',
    short: 'Tecnologia que las personas pueden adoptar.',
    description: 'Puedo explicar, documentar y acompanar la adopcion de una solucion para que las personas realmente puedan utilizarla.',
    items: ['Mentoria en Python', 'Formacion en informatica', 'Acompanamiento a estudiantes', 'Soporte tecnico', 'Instalacion y configuracion', 'Documentacion', 'Capacitacion de usuarios', 'Resolucion de problemas', 'Comunicacion tecnica en lenguaje claro'],
  },
]
