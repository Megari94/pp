import { processSteps } from '../data/process'
import { Reveal } from '../components/Reveal'
import './Process.css'

export function Process() {
  return (
    <section id="metodo" className="section process">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Metodo de trabajo</p>
          <h2 className="section-title">Un proceso simple y claro</h2>
          <p className="section-lead">
            El objetivo es desarrollar soluciones coherentes con la necesidad real, con
            comunicacion clara en cada etapa y posibilidad de crecer despues del lanzamiento.
          </p>
        </Reveal>

        <ol className="process__steps">
          {processSteps.map((step, index) => (
            <li key={step.id} className="process__step">
              <Reveal delay={index * 0.08} className="process__reveal">
                <span className="process__order">{String(step.order).padStart(2, '0')}</span>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__desc">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
