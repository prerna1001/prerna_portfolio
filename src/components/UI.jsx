import { useState } from 'react'

export function GlassCard({ children, style, noHover, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => !noHover && setHov(true)}
      onMouseLeave={() => !noHover && setHov(false)}
      style={{
        background: hov ? 'var(--glass-hover)' : 'var(--glass)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 18,
        transition: 'all 0.25s',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >{children}</div>
  )
}

const TAG_COLORS = {
  indigo: { bg: 'rgba(129,140,248,0.12)', color: 'var(--indigo)', border: 'rgba(129,140,248,0.22)' },
  sky:    { bg: 'rgba(56,189,248,0.12)',  color: 'var(--sky)',    border: 'rgba(56,189,248,0.22)'  },
  rose:   { bg: 'rgba(251,113,133,0.12)', color: 'var(--rose)',   border: 'rgba(251,113,133,0.22)' },
  emerald:{ bg: 'rgba(52,211,153,0.12)',  color: 'var(--emerald)',border: 'rgba(52,211,153,0.22)'  },
  amber:  { bg: 'rgba(251,191,36,0.12)',  color: 'var(--amber)',  border: 'rgba(251,191,36,0.22)'  },
}

export function Tag({ label, color = 'indigo' }) {
  const c = TAG_COLORS[color] || TAG_COLORS.indigo
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: "'DM Mono', monospace",
      fontSize: 10, letterSpacing: '0.06em',
      padding: '3px 9px', borderRadius: 6,
      background: c.bg, color: c.color,
      border: `1px solid ${c.border}`,
      margin: '3px 3px 0 0',
    }}>{label}</span>
  )
}

export function PageHeader({ eyebrow, title, titleEm, subtitle }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: 10 }}>
        {eyebrow}
      </div>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px,5vw,52px)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.05, marginBottom: 8 }}>
        {title}{titleEm && <em style={{ fontStyle: 'italic', color: 'var(--indigo)' }}> {titleEm}</em>}
      </h1>
      {subtitle && <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7 }}>{subtitle}</p>}
    </div>
  )
}

export function Mono({ children, style }) {
  return <span style={{ fontFamily: "'DM Mono', monospace", ...style }}>{children}</span>
}
