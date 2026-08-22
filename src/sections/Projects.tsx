import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Reveal } from '../components/Reveal'
import type { Project } from '../types'
import './Projects.css'

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <span className="section-index" aria-hidden="true">03</span>
        <Reveal className="section-heading">
          <p className="eyebrow">Proyectos</p>
          <h2 className="section-title">Trabajo publicado</h2>
          <p className="section-lead">
            Proyectos reales, con datos verificables. Cada uno puede evolucionar hacia un caso de
            estudio mas completo.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} onOpenDetail={setActiveProject} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
