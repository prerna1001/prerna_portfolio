import { useState } from 'react'
import { GlassCard, Tag, PageHeader } from './UI.jsx'
import { PROJECTS } from '../data.js'

export default function Projects() {
  return (
    <div>
      <PageHeader eyebrow="Portfolio" title="Selected" titleEm="Projects" subtitle="9 projects spanning full-stack apps, AI tools, voice agents, and backend systems — each solving a real problem." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}

function ProjectCard({ project: p }) {
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
        padding: '30px 32px',
        transition: 'all 0.25s',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'var(--indigo)', letterSpacing: '0.15em', marginBottom: 6 }}>PROJECT {p.id}</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--text)', marginBottom: 4 }}>{p.name}</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>{p.tagline}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          {p.live && <LinkBtn href={p.live} variant="live">↗ Live</LinkBtn>}
          {p.github && <LinkBtn href={p.github}>GitHub</LinkBtn>}
          {p.arxiv && <LinkBtn href={p.arxiv}>{p.arxivLabel || 'arXiv Paper'}</LinkBtn>}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 14 }}>{p.desc}</p>
      {p.note && <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: "'DM Mono', monospace", marginBottom: 10, opacity: 0.6 }}>⚠ {p.note}</p>}

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', margin: '14px 0' }} />

      {/* Stack */}
      <div>{p.stack.map(s => <Tag key={s.label} label={s.label} color={s.color} />)}</div>
    </div>
  )
}

function LinkBtn({ href, children, variant }) {
  const [hov, setHov] = useState(false)
  const isLive = variant === 'live'
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '6px 14px', borderRadius: 8,
        fontSize: 11, fontWeight: 600,
        fontFamily: "'DM Mono', monospace",
        textDecoration: 'none', transition: 'all 0.2s',
        border: isLive
          ? `1px solid ${hov ? 'rgba(52,211,153,0.5)' : 'rgba(52,211,153,0.3)'}`
          : `1px solid ${hov ? 'var(--indigo)' : 'var(--border)'}`,
        color: isLive ? 'var(--emerald)' : hov ? 'var(--text)' : 'var(--muted)',
        background: isLive
          ? (hov ? 'rgba(52,211,153,0.12)' : 'rgba(52,211,153,0.06)')
          : 'var(--glass)',
      }}
    >{children}</a>
  )
}
