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
  liveUrl: string
  repoUrl?: string
}

export type ExperienceCategory = 'formacion' | 'docencia' | 'administrativa' | 'actual' | 'holsbi'

export interface ExperienceItem {
  id: string
  title: string
  organization: string
  period: string
  category: ExperienceCategory
  description: string
}

export interface SkillGroupData {
  id: string
  title: string
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
