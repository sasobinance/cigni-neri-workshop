'use client'
import { useState } from 'react'
import { GLOSSARIO } from '@/data/data'

export default function Glossario() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <div style={{ marginBottom: 16, padding: '14px 16px', background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', borderLeft: '3px solid #4A7C59' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', marginBottom: 4 }}>Glossario operazioni M&A</div>
        <div style={{ fontSize: 12, color: '#8A8A85' }}>Clicca un termine per capire cosa significa e cosa va storto se gestito male.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {GLOSSARIO.map((g, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 10,
            border: open === i ? '1.5px solid #4A7C59' : '0.5px solid #E4E4E0',
            overflow: 'hidden', transition: 'border-color .15s',
          }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', textAlign: 'left', padding: '13px 14px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: open === i ? '#F4F8F5' : 'none',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'background .15s',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 700, color: '#2A2A2A' }}>{g.termine}</span>
              <span style={{ fontSize: 18, color: '#4A7C59', fontWeight: 400, flexShrink: 0, marginLeft: 8 }}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ background: '#F4F8F5', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#4A7C59', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>In parole semplici</div>
                  <div style={{ fontSize: 13, color: '#3A3A38', lineHeight: 1.6 }}>{g.semplice}</div>
                </div>
                <div style={{ background: '#FDECEA', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#C0392B', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Se gestito male</div>
                  <div style={{ fontSize: 13, color: '#C0392B', lineHeight: 1.6 }}>{g.rischio}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
