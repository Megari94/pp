export type ProjectStatus = 'publicado' | 'en-evolucion'

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  problem: string
  solution: string
  role: string
  technologies: string[]
  status: ProjectStatus
  statusLabel: string
  image: string
  imageAlt: string
  /** true si `image` es una ilustracion de marca y no una captura real del sitio. */
  imageIsPlaceholder?: boolean
  liveUrl: string
}

export type ExperienceCategory = 'formacion' | 'experiencia'

export interface ExperienceItem {
  id: string
  title: string
  organization: string
  period?: string
  category: ExperienceCategory
  description: string
}

export interface SkillGroupData {
  id: string
  title: string
  short: string
  description: string
  items: string[]
}

export interface ProcessStep {
  id: string
  order: number
  title: string
  description: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}
