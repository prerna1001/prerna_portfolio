import { useState } from 'react'

const NAV = [
  { id: 'overview',    icon: '🏠', label: 'Overview'   },
  { id: 'projects',   icon: '🛠', label: 'Projects'    },
  { id: 'experience', icon: '💼', label: 'Experience'  },
  { id: 'skills',     icon: '⚡', label: 'Skills'      },
  { id: 'education',  icon: '🎓', label: 'Education'   },
  { id: 'contact',    icon: '✉️', label: 'Contact'     },
]

export default function Sidebar({ active, onNav, theme, onTheme, mobileOpen, onClose }) {
  return (
    <aside style={{
      width: 'var(--sidebar-w)',
      flexShrink: 0,
      position: 'fixed',
      top: 0, left: 0, bottom: 0,
      background: theme === 'dark' ? 'rgba(5,11,24,0.75)' : 'rgba(240,244,255,0.8)',
      borderRight: '1px solid var(--border)',
      backdropFilter: 'blur(28px)',
      WebkitBackdropFilter: 'blur(28px)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 50,
      transform: mobileOpen ? 'translateX(0)' : undefined,
      transition: 'transform 0.3s',
    }}>
      {/* Profile */}
      <div style={{ padding: '36px 28px 28px', borderBottom: '1px solid var(--border)' }}>
        <div style={{
          width: 58, height: 58, borderRadius: 18,
          background: 'linear-gradient(135deg, var(--indigo), var(--sky), var(--rose))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600,
          color: '#fff', marginBottom: 16,
          boxShadow: '0 8px 32px rgba(99,102,241,0.3)',
        }}>PS</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--text)', marginBottom: 4 }}>
          Prerna Shinde
        </div>
        <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em', marginBottom: 14, lineHeight: 1.5 }}>
          Software Engineer · Full Stack &amp; AI
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 11, color: 'var(--emerald)',
          background: 'rgba(52,211,153,0.1)',
          border: '1px solid rgba(52,211,153,0.2)',
          padding: '4px 10px', borderRadius: 100,
          fontFamily: "'DM Mono', monospace",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
          Open to Work
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '20px 16px', overflowY: 'auto' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', padding: '0 12px', marginBottom: 8 }}>Menu</div>
        {NAV.map(n => (
          <NavItem key={n.id} {...n} isActive={active === n.id} onClick={() => { onNav(n.id); onClose?.() }} />
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: '20px 28px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
          <FooterLink href="https://github.com/prerna1001" title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </FooterLink>
          <FooterLink href="mailto:shindeprerna1012@gmail.com" title="Email">✉</FooterLink>
          <FooterLink href="https://calendly.com/shindeprerna1012/30min" title="Schedule" target="_blank" rel="noopener noreferrer">📅</FooterLink>
        </div>
        <button
          onClick={onTheme}
          style={{
            width: '100%', padding: '8px 14px',
            background: 'var(--glass)', border: '1px solid var(--glass-border)',
            borderRadius: 10, color: 'var(--muted)', fontSize: 12,
            fontFamily: "'Outfit', sans-serif", fontWeight: 500,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          {theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
      `}</style>
    </aside>
  )
}

function NavItem({ id, icon, label, isActive, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 11,
        padding: '10px 14px', borderRadius: 12,
        fontSize: 13.5, fontWeight: 500,
        color: isActive || hov ? 'var(--text)' : 'var(--muted)',
        background: isActive ? 'var(--glass-hover)' : hov ? 'var(--glass)' : 'transparent',
        border: `1px solid ${isActive ? 'var(--border)' : 'transparent'}`,
        cursor: 'pointer', marginBottom: 2, transition: 'all 0.2s',
        userSelect: 'none',
      }}
    >
      <span style={{
        width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
        background: isActive ? 'var(--indigo)' : 'var(--faint)',
        boxShadow: isActive ? '0 0 8px rgba(129,140,248,0.6)' : 'none',
        transition: 'all 0.2s',
      }} />
      <span style={{ width: 20, textAlign: 'center', fontSize: 15, flexShrink: 0 }}>{icon}</span>
      {label}
    </div>
  )
}

function FooterLink({ href, title, children, ...rest }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href} title={title} {...rest}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 34, height: 34, borderRadius: 10,
        background: hov ? 'var(--glass-hover)' : 'var(--glass)',
        border: `1px solid ${hov ? 'var(--indigo)' : 'var(--glass-border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, cursor: 'pointer', textDecoration: 'none',
        color: hov ? 'var(--text)' : 'var(--muted)',
        transition: 'all 0.2s',
      }}
    >{children}</a>
  )
}
