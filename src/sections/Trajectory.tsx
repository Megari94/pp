import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { experience } from '../data/experience'
import { Reveal } from '../components/Reveal'
import { BookOpen, GraduationCap, HardDrive, Megaphone, Users } from 'lucide-react'
import './Trajectory.css'

const categoryLabel: Record<string, string> = {
  formacion: 'Formacion',
  experiencia: 'Experiencia',
}
const icons = [GraduationCap, Users, HardDrive, BookOpen, Megaphone]

export function Trajectory() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 75%', 'end 70%'] })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 85, damping: 24, mass: 0.6 })

  return (
    <section id="trayectoria" className="section trajectory" ref={sectionRef}>
      <div className="container">
        <span className="section-index" aria-hidden="true">04</span>
        <span className="trajectory__watermark" aria-hidden="true">TRAYECTORIA</span>
        <Reveal className="section-heading">
          <p className="eyebrow">Trayectoria</p>
          <h2 className="section-title">Formacion y experiencia</h2>
          <p className="section-lead">
            Una seleccion breve de experiencia y formacion que respalda mi manera de abordar cada
            proyecto digital.
          </p>
        </Reveal>

        <ol className="trajectory__timeline">
          <motion.span className="trajectory__progress" style={{ scaleY: lineProgress }} aria-hidden="true" />
          {experience.map((item, index) => (
            <li key={item.id} className="trajectory__item">
              <Reveal delay={index * 0.08} className="trajectory__reveal">
                <motion.div
                  className="trajectory__marker"
                  aria-hidden="true"
                  initial={{ opacity: 0.55, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5 }}
                >{String(index + 1).padStart(2, '0')}</motion.div>
                <div className="trajectory__content">
                  {(() => { const Icon = icons[index]; return <Icon className="trajectory__icon" aria-hidden="true" /> })()}
                  <span className="trajectory__category">{categoryLabel[item.category]}</span>
                  <h3 className="trajectory__title">{item.title}</h3>
                  <p className="trajectory__org">
                    {item.organization}{item.period ? ` · ${item.period}` : ''}
                  </p>
                  <p className="trajectory__desc">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
