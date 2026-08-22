import { useState } from 'react'
import { Code2, MonitorSmartphone, FileCode2, Boxes, Megaphone, ChevronDown } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { Reveal } from '../components/Reveal'
import './Skills.css'

const icons = [Code2, MonitorSmartphone, FileCode2, Boxes, Megaphone]

export function Skills() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="capacidades" className="section skills">
      <div className="container">
        <span className="section-index" aria-hidden="true">05</span>
        <Reveal className="section-heading">
          <p className="eyebrow">Capacidades</p>
          <h2 className="section-title">En que puedo aportar</h2>
        </Reveal>

        <div className="skills__layout">
          <div className="skills__sticky">
            <p>Un recorrido por las principales capacidades que conecto para crear soluciones claras y funcionales.</p>
            <span>Click para explorar cada capacidad ↓</span>
          </div>

          <ol className="skills__accordion">
            {skillGroups.map((group, index) => {
              const Icon = icons[index % icons.length]
              const isOpen = openIndex === index
              return (
                <li key={group.id}>
                  <Reveal delay={(index % 3) * 0.06}>
                    <button
                      type="button"
                      className={`skills__row ${isOpen ? 'skills__row--open' : ''}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`skills-panel-${group.id}`}
                    >
                      <span className="skills__number">{String(index + 1).padStart(2, '0')}</span>
                      <Icon size={20} className="skills__icon" aria-hidden="true" />
                      <span className="skills__title">{group.title}</span>
                      <ChevronDown size={18} className="skills__chevron" aria-hidden="true" />
                    </button>
                    <div
                      id={`skills-panel-${group.id}`}
                      className="skills__panel"
                      hidden={!isOpen}
                    >
                      <ul className="skills__tags">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
