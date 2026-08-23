import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { HolsbiCoreModel } from '../components/HolsbiCoreModel'
import './Hero.css'

export function Hero() {
  const reduced = useReducedMotion()
  const initial = reduced ? undefined : { opacity: 0, y: 18 }
  const animate = reduced ? undefined : { opacity: 1, y: 0 }

  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <span className="section-index" aria-hidden="true">01</span>
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

        </div>

        <motion.div
          className="hero__visual-wrap"
          initial={reduced ? undefined : { opacity: 0, scale: 0.92, rotateY: 8 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <HolsbiCoreModel reduced={reduced} />
        </motion.div>
      </div>

      <a href="#sobre-mi" className="hero__scroll" aria-label="Ir a la siguiente seccion">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
