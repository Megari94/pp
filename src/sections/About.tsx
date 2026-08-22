import { Reveal } from '../components/Reveal'
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

          <div className="about__points">
            {points.map((point, index) => (
              <Reveal key={point} delay={index * 0.08} className="about__point">
                <p>{point}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
