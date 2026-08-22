import { ExternalLink } from 'lucide-react'
import type { PointerEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { Project } from '../types'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
  onOpenDetail: (project: Project) => void
}

export function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  const reduced = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.65 })
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.65 })
  const rotateY = useTransform(smoothX, [-1, 1], [-1.8, 1.8])
  const rotateX = useTransform(smoothY, [-1, 1], [1.5, -1.5])
  const imageX = useTransform(smoothX, [-1, 1], [-4, 4])
  const imageY = useTransform(smoothY, [-1, 1], [-3, 3])
  const lightX = useTransform(smoothX, [-1, 1], [-120, 120])
  const lightY = useTransform(smoothY, [-1, 1], [-80, 80])

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2)
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.article
      className={`project-card project-card--${project.slug}`}
      style={reduced ? undefined : { rotateX, rotateY }}
      onPointerMove={onPointerMove}
      onPointerLeave={resetTilt}
    >
      <motion.span className="project-card__cursor-light" aria-hidden="true" style={reduced ? undefined : { x: lightX, y: lightY }} />
      <div className="project-card__chrome" aria-hidden="true">
        <span /><span /><span /><p>{project.liveUrl.replace(/^https?:\/\//, '')}</p>
      </div>
      <button
        type="button"
        className="project-card__media-btn"
        onClick={() => onOpenDetail(project)}
        aria-label={`Ver detalle de ${project.name}`}
      >
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={640}
          height={400}
          className="project-card__image"
          style={reduced ? undefined : { x: imageX, y: imageY }}
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
    </motion.article>
  )
}
