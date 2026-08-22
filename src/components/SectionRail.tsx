import { navItems } from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'
import './SectionRail.css'

export function SectionRail() {
  const activeId = useActiveSection(navItems.map((item) => item.id))

  return (
    <nav className="section-rail" aria-label="Progreso de secciones">
      <ol>
        {navItems.map((item, index) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={isActive ? 'section-rail__active' : ''}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="section-rail__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="section-rail__label">{item.label}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
