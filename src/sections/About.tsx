import { Reveal } from '../components/Reveal'
import { motion } from 'motion/react'
import './About.css'

const points = [
  'Combino desarrollo, comunicacion, analisis de necesidades y comprension del funcionamiento real de empresas e instituciones.',
  'Me interesa que una solucion sea atractiva, pero tambien util, comprensible, escalable y facil de mantener.',
  'Trabajo con cercania, responsabilidad, claridad y atencion al detalle.',
]

export function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">
        <span className="section-index" aria-hidden="true">02</span>
        <Reveal className="section-heading">
          <p className="eyebrow">Sobre mi</p>
          <h2 className="section-title">
            Marianela Holsbach, <span className="gradient-text">Web Developer</span>
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__intro">
            <p>
              Soy Web Developer y estoy construyendo <strong>Holsbi</strong> como mi identidad
              tecnologica: el espacio desde el cual diseno y desarrollo soluciones digitales.
            </p>
          </Reveal>

          <svg className="about__circuit" viewBox="0 0 100 390" aria-hidden="true">
            <motion.path
              d="M50 0V58L28 82V171L68 201V302L50 326V390"
              initial={{ pathLength: 0, opacity: 0.2 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            {[82, 201, 326].map((cy, index) => (
              <motion.circle
                key={cy}
                cx={index === 1 ? 68 : index === 0 ? 28 : 50}
                cy={cy}
                r="6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.18, duration: 0.35 }}
              />
            ))}
          </svg>
          <div className="about__points">
            {points.map((point, index) => (
              <Reveal key={point} delay={index * 0.08} className="about__point">
                <span className="about__node" aria-hidden="true">0{index + 1}</span><p>{point}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
