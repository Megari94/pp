import { experience } from '../data/experience'
import { Reveal } from '../components/Reveal'
import './Trajectory.css'

const categoryLabel: Record<string, string> = {
  formacion: 'Formacion',
  docencia: 'Docencia',
  administrativa: 'Experiencia administrativa',
  actual: 'Actualidad',
  holsbi: 'Holsbi',
}

export function Trajectory() {
  return (
    <section id="trayectoria" className="section trajectory">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Trayectoria</p>
          <h2 className="section-title">Formacion y experiencia</h2>
          <p className="section-lead">
            Un recorrido que combina formacion tecnica, docencia y experiencia administrativa y
            comercial: distintas piezas que aportan a como entiendo un proyecto digital.
          </p>
        </Reveal>

        <ol className="trajectory__timeline">
          {experience.map((item, index) => (
            <li key={item.id} className="trajectory__item">
              <Reveal delay={index * 0.08} className="trajectory__reveal">
                <div className="trajectory__marker" aria-hidden="true" />
                <div className="trajectory__content">
                  <span className="trajectory__category">{categoryLabel[item.category]}</span>
                  <h3 className="trajectory__title">{item.title}</h3>
                  <p className="trajectory__org">
                    {item.organization} · {item.period}
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
