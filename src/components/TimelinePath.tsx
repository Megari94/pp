import { motion } from 'motion/react'
import { useReveal } from '../hooks/useReveal'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './TimelinePath.css'

export function TimelinePath() {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.1)
  const reduced = useReducedMotion()
  const draw = isVisible || reduced

  return (
    <div className="timeline-path" ref={ref} aria-hidden="true">
      <svg width="2" height="100%" viewBox="0 0 2 100" preserveAspectRatio="none" fill="none">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          stroke="url(#timeline-path-gradient)"
          strokeWidth="2"
          initial={reduced ? undefined : { pathLength: 0 }}
          animate={draw ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="timeline-path-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-cyan)" />
            <stop offset="50%" stopColor="var(--color-violet)" />
            <stop offset="100%" stopColor="var(--color-magenta)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
