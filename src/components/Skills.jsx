import { GlassCard, Tag, PageHeader } from './UI.jsx'
import { SKILLS } from '../data.js'

const COLOR_MAP = { indigo: 'indigo', sky: 'sky', rose: 'rose', emerald: 'emerald', amber: 'amber' }

export default function Skills() {
  return (
    <div>
      <PageHeader eyebrow="Technical" title="Skills &" titleEm="Stack" subtitle="Built across real projects — not just listed, actually shipped." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {SKILLS.map(g => <SkillGroup key={g.group} group={g} />)}
      </div>
    </div>
  )
}

function SkillGroup({ group: g }) {
  return (
    <GlassCard noHover style={{ padding: '26px 28px' }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: 'var(--text)', marginBottom: 2 }}>{g.group}</div>
      <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>{g.sub}</div>
      <div>
        {g.items.map(item => (
          <Tag key={item} label={item} color={COLOR_MAP[g.color] || 'indigo'} />
        ))}
      </div>
    </GlassCard>
  )
}
