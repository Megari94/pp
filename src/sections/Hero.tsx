import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { HeroVisual } from '../components/HeroVisual'
import { GithubMark } from '../components/icons/GithubMark'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './Hero.css'

export function Hero() {
  const reduced = useReducedMotion()

  const initial = reduced ? undefined : { opacity: 0, y: 18 }
  const animate = reduced ? undefined : { opacity: 1, y: 0 }

  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.p
            className="eyebrow"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 }}
          >
            Web Developer · Creadora de Holsbi
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            className="hero__tagline gradient-text"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            className="hero__lead"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            {siteConfig.heroValueProp}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Conversemos
            </a>
          </motion.div>

          <motion.a
            className="hero__github"
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <GithubMark size={18} />
            github.com/Megari94
          </motion.a>
        </div>

        <div className="hero__visual-wrap">
          <HeroVisual />
        </div>
      </div>

      <a href="#sobre-mi" className="hero__scroll" aria-label="Ir a la siguiente seccion">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
