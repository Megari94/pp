import { motion } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import './HolsbiMark.css'

interface HolsbiMarkProps { compact?: boolean; animated?: boolean; className?: string }

export function HolsbiMark({ compact = false, animated = false, className = '' }: HolsbiMarkProps) {
  const reduced = useReducedMotion()
  const draw = animated && !reduced ? { pathLength: 1, opacity: 1 } : undefined
  const initial = animated && !reduced ? { pathLength: 0, opacity: 0.25 } : undefined
  return (
    <svg className={`holsbi-mark ${compact ? 'holsbi-mark--compact' : ''} ${className}`} viewBox="0 0 180 190" role="img" aria-label="Monograma H">
      <motion.path className="holsbi-mark__cyan" d="M18 18H66V69H114V18H162V155H139V174H41V155H18V18ZM42 42V132H66V108H114V132H138V42H114V89H66V42H42Z" fill="none" initial={initial} animate={draw} transition={{ duration: 1, ease: [0.22,1,0.36,1] }} />
      <motion.path className="holsbi-mark__magenta" d="M114 18H162V155H139M114 69V18M114 108V132H138M90 174H139" fill="none" initial={initial} animate={draw} transition={{ duration: 1, delay: 0.14, ease: [0.22,1,0.36,1] }} />
      {!compact && <>
        <path className="holsbi-mark__detail" d="M27 54h10m-10 16h10m-10 50h10m106-66h10m-10 16h10m-10 50h10M51 148h78M59 160h62" />
        <circle className="holsbi-mark__node" cx="34" cy="35" r="2.5" /><circle className="holsbi-mark__node" cx="146" cy="35" r="2.5" />
      </>}
    </svg>
  )
}
