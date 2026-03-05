import { useState } from 'react'
import { GlassCard, PageHeader } from './UI.jsx'

const CONTACTS = [
  {
    icon: '✉️',
    iconBg: 'rgba(251,113,133,0.12)',
    label: 'Email',
    value: 'shindeprerna1012@gmail.com',
    desc: 'Best way to reach me. I respond within 24 hours.',
    href: 'mailto:shindeprerna1012@gmail.com',
  },
  {
    icon: null,
    iconBg: 'rgba(129,140,248,0.12)',
    label: 'GitHub',
    value: 'github.com/prerna1001',
    desc: 'All my projects, source code, and repos.',
    href: 'https://github.com/prerna1001',
  },
  {
    icon: '📅',
    iconBg: 'rgba(52,211,153,0.12)',
    label: 'Schedule a Call',
    value: 'Calendly · 30 min',
    desc: 'Book a quick call to chat about opportunities.',
    href: 'https://calendly.com/shindeprerna1012/30min',
  },
]

export default function Contact() {
  return (
    <div>
      <PageHeader eyebrow="Get in Touch" title="Let's" titleEm="Connect" subtitle="Open to full-time roles in software engineering, full-stack, and AI engineering. Let's talk." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {CONTACTS.map(c => <ContactCard key={c.label} contact={c} />)}
      </div>

      <GlassCard noHover style={{ padding: '36px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 300, color: 'var(--text)', marginBottom: 8 }}>
          Ready to build something together?
        </div>
        <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24 }}>
          Whether it's a full-time role, contract, or just a conversation — reach out.
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <CTABtn href="mailto:shindeprerna1012@gmail.com" primary>✉ Send Email</CTABtn>
          <CTABtn href="https://calendly.com/shindeprerna1012/30min">📅 Book a Call</CTABtn>
        </div>
      </GlassCard>
    </div>
  )
}

function ContactCard({ contact: c }) {
  const [hov, setHov] = useState(false)
  const El = c.href ? 'a' : 'div'
  return (
    <El
      href={c.href || undefined}
      target={c.href && !c.href.startsWith('mailto') ? '_blank' : undefined}
      rel={c.href && !c.href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 16, padding: '26px 28px',
        background: hov && c.href ? 'var(--glass-hover)' : 'var(--glass)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(20px)',
        borderRadius: 18,
        textDecoration: 'none',
        transition: 'all 0.25s',
        cursor: c.href ? 'pointer' : 'default',
      }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 14, background: c.iconBg, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
        {c.icon ? c.icon : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--indigo)">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )}
      </div>
      <div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{c.label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', marginBottom: 3 }}>{c.value}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>{c.desc}</div>
      </div>
    </El>
  )
}

function CTABtn({ href, children, primary }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '12px 26px', borderRadius: 12,
        fontWeight: 600, fontSize: 14, textDecoration: 'none',
        fontFamily: "'Outfit', sans-serif",
        transition: 'all 0.2s',
        background: primary ? 'var(--indigo)' : 'var(--glass)',
        color: primary ? '#fff' : 'var(--text)',
        border: primary ? 'none' : '1px solid var(--border)',
        opacity: hov ? 0.85 : 1,
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov && primary ? '0 8px 24px rgba(129,140,248,0.35)' : 'none',
      }}
    >{children}</a>
  )
}
