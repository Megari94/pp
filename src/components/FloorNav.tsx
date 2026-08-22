import { useActiveSection } from '../hooks/useActiveSection'
import './FloorNav.css'

const floors = [
  { id: 'inicio', label: '01' },
  { id: 'sobre-mi', label: '02' },
  { id: 'proyectos', label: '03' },
  { id: 'trayectoria', label: '04' },
  { id: 'capacidades', label: '05' },
]

export function FloorNav() {
  const activeId = useActiveSection(floors.map((floor) => floor.id))

  return (
    <nav className="floor-nav" aria-label="Navegacion por secciones">
      {floors.map((floor) => (
        <a
          key={floor.id}
          href={`#${floor.id}`}
          className={activeId === floor.id ? 'floor-nav__item floor-nav__item--active' : 'floor-nav__item'}
          aria-label={`Ir a la seccion ${floor.label}`}
          aria-current={activeId === floor.id ? 'location' : undefined}
        >
          <span>{floor.label}</span><i />
        </a>
      ))}
    </nav>
  )
}
