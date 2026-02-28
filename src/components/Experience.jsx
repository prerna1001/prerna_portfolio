import { useState } from 'react'
import { GlassCard, Tag, PageHeader } from './UI.jsx'
import { EXPERIENCE } from '../data.js'

export default function Experience() {
  return (
    <div>
      <PageHeader eyebrow="Career" title="Work" titleEm="Experience" subtitle="Hands-on engineering across ML research, web development, healthcare tech, and enterprise compliance systems." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {EXPERIENCE.map((e, i) => <ExpCard key={i} exp={e} />)}
      </div>
    </div>
  )
}

function ExpCard({ exp: e }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'var(--glass-hover)' : 'var(--glass)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(20px)',
        borderRadius: 18,
        padding: '28px 32px',
        position: 'relative',
        transition: 'all 0.25s',
      }}
    >
      {/* Badge */}
      <div style={{
        position: 'absolute', top: 28, right: 28,
        fontSize: 10, fontFamily: "'DM Mono', monospace",
        padding: '4px 10px', borderRadius: 100,
        background: e.type === 'current' ? 'rgba(52,211,153,0.12)' : 'var(--faint)',
        color: e.type === 'current' ? 'var(--emerald)' : 'var(--muted)',
        border: `1px solid ${e.type === 'current' ? 'rgba(52,211,153,0.2)' : 'var(--border)'}`,
      }}>
        {e.type === 'current' ? '● Current' : e.period.split('·')[0].trim()}
      </div>

      {/* Header */}
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--indigo)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{e.company}</div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--text)', marginBottom: 6 }}>{e.role}</div>
      <div style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
        <span>📍 {e.location}</span>
        <span>🗓 {e.period}</span>
      </div>

      {/* iConsult has sub-projects */}
      {e.projects ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {e.projects.map((proj, pi) => (
            <div key={pi} style={{ borderLeft: '2px solid var(--indigo)', paddingLeft: 18 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>
                {proj.name}
              </div>
              <ul style={{ listStyle: 'none' }}>
                {proj.points.map((pt, i) => (
                  <li key={i} style={{
                    fontSize: 13, color: 'var(--muted)', lineHeight: 1.75,
                    padding: '4px 0 4px 18px', position: 'relative',
                    borderBottom: i < proj.points.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--indigo)', fontFamily: "'DM Mono', monospace", fontSize: 11, top: 6 }}>→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {e.highlights.map((h, i) => (
            <li key={i} style={{
              fontSize: 13, color: 'var(--muted)', lineHeight: 1.75,
              padding: '5px 0 5px 18px', position: 'relative',
              borderBottom: i < e.highlights.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--indigo)', fontFamily: "'DM Mono', monospace", fontSize: 11, top: 7 }}>→</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Stack */}
      <div style={{ marginTop: 16 }}>{e.stack.map(s => <Tag key={s} label={s} color="indigo" />)}</div>
    </div>
  )
}
