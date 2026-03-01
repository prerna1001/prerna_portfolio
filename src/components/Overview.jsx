import { GlassCard, Tag } from './UI.jsx'

export default function Overview({ onNav }) {
  const stats = [
    { num: '~2yr', label: 'Industry Experience' },
    { num: '7',    label: 'Projects Built'       },
    { num: '3.677', label: "Master's GPA"         },
  ]
  const cards = [
    { icon: '🛠', title: 'Projects',   desc: 'RAG tools, AI assistants, voice agents, secure executors and more.', page: 'projects'   },
    { icon: '💼', title: 'Experience', desc: 'Research at Syracuse, SWE internships at D&D Motor Systems and iConsult.', page: 'experience' },
    { icon: '⚡', title: 'Skills',     desc: 'React, Python, Java, Spring Boot, LangChain, AWS, Docker and more.', page: 'skills'     },
    { icon: '🎓', title: 'Education',  desc: 'MS Computer Science, Syracuse University (May 2025). BS IT, Mumbai University.', page: 'education'  },
    { icon: '✉️', title: 'Contact',    desc: "Email, GitHub, or book a 30-min call — let's connect.", page: 'contact'    },
    { icon: '⌨', title: 'GitHub',     desc: 'All code is open source. Browse repos and explore the architecture.', href: 'https://github.com/prerna1001' },
  ]

  return (
    <div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: 10 }}>Welcome</div>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px,5vw,52px)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.05, marginBottom: 8 }}>
        Hi, I'm <em style={{ fontStyle: 'italic', color: 'var(--indigo)' }}>Prerna</em>
      </h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
        A software engineer with a passion for building full-stack applications, AI-powered tools, and clean backend systems. MS in Computer Science from Syracuse University, May 2025.
      </p>

      {/* Hero grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start', marginBottom: 40 }}>
        <GlassCard noHover style={{ padding: '28px 32px' }}>
          <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.85 }}>
            I build across the full stack — and I mean that literally. React frontends, Python and Java backends, AI pipelines, databases, deployment — I've touched all of it in production.
On the frontend I work with React and TypeScript to build interfaces that actually feel good to use. On the backend I'm equally comfortable in Python (FastAPI, Flask) and Java (Spring Boot) — building APIs, microservices, and systems that hold up under real load.
The area I get most excited about is AI. I've built RAG pipelines, integrated OpenAI GPT-4 and LLaMA 3, designed multi-turn conversation flows, and done prompt engineering and LLM output validation in production. I've also built voice AI systems using ASR and Vapi.ai — not just played with them, actually shipped them.
For infrastructure I've worked with PostgreSQL, MySQL, Oracle, PGVector, Supabase, AWS (EC2, S3), and Docker. I like owning the full thing — from the first prototype to the final deployment.
My work spans healthcare platforms, AML compliance systems, and AI voice agents — across a fintech startup, internships, and university research.
<br /><br />
Currently a Research Assistant at Syracuse University working on emotion-aware ML models. I have about 2 years of hands-on experience and I'm actively looking for my next role — software engineering, full-stack, or AI engineering. Based in the United States, open to relocation anywhere.
                        
                      </p>
          <div style={{ marginTop: 20 }}>
            <Tag label="Philadelphia, PA" color="sky" />
            <Tag label="Open to Relocation (USA)" color="emerald" />
            <Tag label="Full Stack" color="indigo" />
            <Tag label="AI / ML" color="rose" />
          </div>
        </GlassCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 160 }}>
          {stats.map(s => (
            <GlassCard key={s.label} noHover style={{ padding: '18px 22px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: 'var(--text)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3 }}>{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {cards.map(c => (
          <OverviewCard key={c.title} {...c} onNav={onNav} />
        ))}
      </div>
    </div>
  )
}

function OverviewCard({ icon, title, desc, page, href, onNav }) {
  return (
    <GlassCard
      onClick={() => page ? onNav(page) : window.open(href, '_blank')}
      style={{ padding: '24px 26px' }}
    >
      <div style={{ fontSize: 22, marginBottom: 12 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 10 }}>{desc}</p>
      <div style={{ fontSize: 11, color: 'var(--indigo)', fontFamily: "'DM Mono', monospace", opacity: 0.8 }}>View →</div>
    </GlassCard>
  )
}
