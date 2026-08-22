import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { Project } from '../types'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { GithubMark } from './icons/GithubMark'
import './ProjectModal.css'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!project) return

    closeBtnRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal__backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
          initial={reduced ? undefined : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            initial={reduced ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button
              type="button"
              ref={closeBtnRef}
              className="project-modal__close"
              onClick={onClose}
              aria-label="Cerrar detalle del proyecto"
            >
              <X size={20} />
            </button>

            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-modal__image"
              loading="lazy"
            />

            <div className="project-modal__body">
              <div className="project-modal__heading">
                <span className="eyebrow">{project.statusLabel}</span>
                <h3 id="project-modal-title" className="project-modal__title">
                  {project.name}
                </h3>
                <p className="project-modal__tagline">{project.tagline}</p>
              </div>

              <p className="project-modal__description">{project.description}</p>

              <div className="project-modal__cols">
                <div>
                  <h4>Problema o necesidad</h4>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h4>Solucion desarrollada</h4>
                  <p>{project.solution}</p>
                </div>
              </div>

              <div>
                <h4>Mi rol</h4>
                <p>{project.role}</p>
              </div>

              <div>
                <h4>Tecnologias</h4>
                <ul className="project-modal__tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="project-modal__actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} />
                  Visitar sitio
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <GithubMark size={16} />
                    Repositorio
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
