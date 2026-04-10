'use client'

const TABS = [
  { id: 'pipeline',  label: 'Pipeline' },
  { id: 'sistema',   label: 'Sistema' },
  { id: 'glossario', label: 'Glossario' },
  { id: 'guida',     label: 'Guida' },
]

export default function Header({ active, onChange }: { active: string; onChange: (t: string) => void }) {
  return (
    <header style={{ background: '#FFFFFF', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #E4E4E0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 58 }}>
          <img src="/logo.png" alt="I Cigni Neri" style={{ width: 36, height: 36, objectFit: 'contain', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', lineHeight: 1.2 }}>I Cigni Neri</div>
            <div style={{ fontSize: 10, color: '#8A8A85', fontWeight: 400 }}>Black Swan Capital · Workshop</div>
          </div>
          <nav style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => onChange(t.id)} style={{
                padding: '6px 11px', borderRadius: 999, fontSize: 11, fontWeight: active===t.id ? 700 : 500,
                background: active===t.id ? '#4A7C59' : 'transparent',
                color: active===t.id ? '#fff' : '#8A8A85',
                border: active===t.id ? 'none' : '0.5px solid #E4E4E0',
                transition: 'all .15s', fontFamily: 'inherit', cursor: 'pointer',
              }}>{t.label}</button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
