import './HeroVisual.css'

export function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Composicion geometrica con el monograma MH y la palabra Holsbi"
    >
      <defs>
        <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-cyan)" />
          <stop offset="55%" stopColor="var(--color-violet)" />
          <stop offset="100%" stopColor="var(--color-magenta)" />
        </linearGradient>
      </defs>

      <circle
        className="hero-visual__ring hero-visual__ring--outer"
        cx="210"
        cy="210"
        r="170"
      />
      <circle
        className="hero-visual__ring hero-visual__ring--inner"
        cx="210"
        cy="210"
        r="128"
      />

      <g className="hero-visual__grid">
        <line x1="40" y1="210" x2="380" y2="210" />
        <line x1="210" y1="40" x2="210" y2="380" />
      </g>

      <polygon
        className="hero-visual__diamond"
        points="210,96 324,210 210,324 96,210"
      />

      <text x="210" y="196" textAnchor="middle" className="hero-visual__mark">
        MH
      </text>
      <text x="210" y="240" textAnchor="middle" className="hero-visual__word">
        HOLSBI
      </text>

      <g className="hero-visual__cursor">
        <rect x="176" y="252" width="58" height="2.5" />
      </g>
    </svg>
  )
}
