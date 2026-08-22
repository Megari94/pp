import { skillGroups } from '../data/skills'
import { Reveal } from '../components/Reveal'
import './Skills.css'

export function Skills() {
  return (
    <section id="capacidades" className="section skills">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Capacidades</p>
          <h2 className="section-title">En que puedo aportar</h2>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={(index % 3) * 0.08} className="skills__card">
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
    </section>
  )
}
