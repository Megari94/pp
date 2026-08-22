import { ExternalLink } from 'lucide-react'
import type { Project } from '../types'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
  onOpenDetail: (project: Project) => void
}

export function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__chrome" aria-hidden="true">
        <span /><span /><span /><p>{project.liveUrl.replace(/^https?:\/\//, '')}</p>
      </div>
      <button
        type="button"
        className="project-card__media-btn"
        onClick={() => onOpenDetail(project)}
        aria-label={`Ver detalle de ${project.name}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={640}
          height={400}
          className="project-card__image"
        />
        <span className="project-card__status">{project.statusLabel}</span>
        {project.imageIsPlaceholder && (
          <span className="project-card__placeholder-tag">Ilustracion, no captura real</span>
        )}
      </button>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__problem"><strong>Necesidad:</strong> {project.problem}</p>

        <ul className="project-card__tech">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <button
            type="button"
            className="project-card__link"
            onClick={() => onOpenDetail(project)}
          >
            Ver caso completo
          </button>
          <div className="project-card__external">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar sitio de ${project.name}`}
              className="project-card__icon-link"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
