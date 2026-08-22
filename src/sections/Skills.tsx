import { skillGroups } from '../data/skills'
import { Reveal } from '../components/Reveal'
import './Skills.css'

export function Skills() {
  return (
    <section id="capacidades" className="section skills">
      <div className="container">
        <span className="section-index" aria-hidden="true">05</span>
        <Reveal className="section-heading">
          <p className="eyebrow">Capacidades</p>
          <h2 className="section-title">En que puedo aportar</h2>
        </Reveal>

        <div className="skills__layout">
          <div className="skills__sticky"><p>Un recorrido por las capacidades que conecto para crear soluciones claras y funcionales.</p><span>Scroll para explorar ↓</span></div>
          <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={(index % 3) * 0.08} className="skills__card">
              <span className="skills__number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="skills__card-title">{group.title}</h3>
              <ul className="skills__card-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
