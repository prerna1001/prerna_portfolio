import { GlassCard, Tag, PageHeader } from './UI.jsx'
import { EDUCATION } from '../data.js'

export default function Education() {
  return (
    <div>
      <PageHeader eyebrow="Academic" title="Education" subtitle="Formal training in computer science and information technology — supporting practice with solid theory." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {EDUCATION.map((e, i) => <EduCard key={i} edu={e} />)}
      </div>
    </div>
  )
}

function EduCard({ edu: e }) {
  const isMasters = e.uni === 'Syracuse University'
  return (
    <GlassCard style={{ padding: '28px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: isMasters ? 20 : 0 }}>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: 6 }}>{e.uni}</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: 'var(--text)', marginBottom: 4 }}>{e.degree}</div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 10 }}>{e.field}</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: 'var(--emerald)', marginBottom: isMasters ? 0 : 14 }}>
            ✓ {e.grade} · Completed
          </div>
          {!isMasters && <div style={{ marginTop: 14 }}>{e.tags.map(t => <Tag key={t} label={t} color="sky" />)}</div>}
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: 'var(--muted)', textAlign: 'right', flexShrink: 0 }}>
          {e.period.split('–').map((p, i, arr) => (
            <div key={i}>{p.trim()}{i < arr.length - 1 && <div style={{ color: 'var(--border)', lineHeight: 1.2 }}>—</div>}</div>
          ))}
        </div>
      </div>

      {/* Coursework grid for Masters */}
      {isMasters && (
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
            Coursework
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 8 }}>
            {e.tags.map(course => (
              <div key={course} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 12px',
                background: 'var(--faint)',
                borderRadius: 10,
                border: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--indigo)', fontSize: 11, fontFamily: "'DM Mono', monospace", flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>{course}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </GlassCard>
  )
}
