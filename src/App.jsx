import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Overview from './components/Overview.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

const PAGES = { overview: Overview, projects: Projects, experience: Experience, skills: Skills, education: Education, contact: Contact }

export default function App() {
  const [page, setPage] = useState('overview')
  const [theme, setTheme] = useState('dark')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : ''
  }, [theme])

  const PageComponent = PAGES[page]

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', filter: 'blur(100px)', background: 'rgba(99,102,241,0.2)', top: -200, left: -150, transition: 'background 0.4s' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', filter: 'blur(100px)', background: 'rgba(56,189,248,0.15)', bottom: -150, right: -100 }} />
        <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', filter: 'blur(100px)', background: 'rgba(251,113,133,0.1)', top: '45%', left: '38%' }} />
      </div>

      {/* Mobile top bar */}
      <div style={{
        display: 'none',
        position: 'sticky', top: 0, zIndex: 40,
        padding: '14px 20px',
        background: theme === 'dark' ? 'rgba(5,11,24,0.85)' : 'rgba(240,244,255,0.85)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(20px)',
        alignItems: 'center', justifyContent: 'space-between',
      }} id="mobile-bar">
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: 'var(--text)' }}>Prerna Shinde</div>
        <button onClick={() => setMobileOpen(o => !o)} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: 22, cursor: 'pointer' }}>☰</button>
      </div>

      <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <Sidebar
          active={page}
          onNav={p => { setPage(p); window.scrollTo(0,0) }}
          theme={theme}
          onTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        <main style={{ marginLeft: 'var(--sidebar-w)', flex: 1, minHeight: '100vh', padding: '52px 56px' }}>
          <div key={page} style={{ animation: 'fadeUp 0.45s ease' }}>
            <PageComponent onNav={p => { setPage(p); window.scrollTo(0,0) }} />
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          #mobile-bar { display: flex !important; }
          main { margin-left: 0 !important; padding: 24px 20px !important; }
          aside { transform: translateX(-100%); transition: transform 0.3s; }
          aside.open { transform: translateX(0) !important; }
        }
      `}</style>
    </div>
  )
}
