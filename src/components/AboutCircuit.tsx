import { motion } from 'motion/react'
import { useReveal } from '../hooks/useReveal'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './AboutCircuit.css'

const nodesY = [50, 200, 350]

export function AboutCircuit() {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.3)
  const reduced = useReducedMotion()
  const draw = isVisible || reduced

  return (
    <div className="about-circuit" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 100 400" preserveAspectRatio="none" fill="none">
        <motion.line
          x1="50"
          y1="10"
          x2="50"
          y2="390"
          stroke="url(#about-circuit-gradient)"
          strokeWidth="1.5"
          initial={reduced ? undefined : { pathLength: 0 }}
          animate={draw ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
        {nodesY.map((y, index) => (
          <motion.path
            key={y}
            d={`M50 ${y} H92`}
            stroke="url(#about-circuit-gradient)"
            strokeWidth="1.5"
            initial={reduced ? undefined : { pathLength: 0 }}
            animate={draw ? { pathLength: 1 } : undefined}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.15, ease: 'easeOut' }}
          />
        ))}
        {nodesY.map((y) => (
          <circle key={y} cx="50" cy={y} r="5" className="about-circuit__node" />
        ))}
        <defs>
          <linearGradient id="about-circuit-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-cyan)" />
            <stop offset="50%" stopColor="var(--color-violet)" />
            <stop offset="100%" stopColor="var(--color-magenta)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
