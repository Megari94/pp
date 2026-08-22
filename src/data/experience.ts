import type { ExperienceItem } from '../types'

/**
 * Linea de trayectoria. Los periodos marcados "TODO" todavia no tienen
 * fecha confirmada: completar con mes/anio real antes de publicar si se
 * quiere mostrar precision, o dejar la etiqueta generica.
 */
export const experience: ExperienceItem[] = [
  {
    id: 'informatorio-chaco',
    title: 'Formacion en Python y Django',
    organization: 'Informatorio Chaco',
    period: 'TODO: confirmar periodo',
    category: 'formacion',
    description:
      'Formacion en desarrollo backend con Python y el framework Django.',
  },
  {
    id: 'mentoria-python',
    title: 'Mentora de Python',
    organization: 'Informatorio Chaco',
    period: 'TODO: confirmar periodo',
    category: 'docencia',
    description:
      'Acompanamiento a estudiantes en el aprendizaje de Python, resolviendo dudas y revisando ejercicios.',
  },
  {
    id: 'profesorado-informatica',
    title: 'Profesorado de Educacion Secundaria en Informatica',
    organization: 'UEGP N.° 172',
    period: 'En formacion',
    category: 'formacion',
    description:
      'Formacion docente orientada a la ensenanza de informatica en el nivel secundario.',
  },
  {
    id: 'utn-tesoreria',
    title: 'Area de Tesoreria / Egresos',
    organization: 'UTN Facultad Regional Resistencia',
    period: 'TODO: confirmar periodo',
    category: 'administrativa',
    description:
      'Experiencia administrativa que aporto comprension de procesos internos, gestion documental y trato con distintas areas de una institucion.',
  },
  {
    id: 'diario-chaco-publicidad',
    title: 'Area de Publicidad',
    organization: 'Diario Chaco y Diario TAG',
    period: 'Actualidad',
    category: 'actual',
    description:
      'Trabajo comercial que implica comprender necesidades de clientes, comunicar propuestas con claridad y coordinar contenido y campanas publicitarias.',
  },
  {
    id: 'holsbi',
    title: 'Creacion y desarrollo de Holsbi',
    organization: 'Proyecto propio',
    period: 'Actualidad',
    category: 'holsbi',
    description:
      'Construccion progresiva de Holsbi como identidad tecnologica desde la cual desarrollo soluciones digitales.',
  },
]
