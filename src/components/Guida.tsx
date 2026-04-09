'use client'
import { useState } from 'react'
import { GUIDA } from '@/data/data'

export default function Guida() {
  const [open, setOpen] = useState<number>(0)

  return (
    <div>
      <div style={{ marginBottom: 16, padding: '14px 16px', background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', borderLeft: '3px solid #4A7C59' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', marginBottom: 4 }}>Guida conduttore</div>
        <div style={{ fontSize: 12, color: '#8A8A85' }}>Le 5 fasi del workshop — cosa fai tu e cosa fanno loro.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {GUIDA.map((g, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 10,
            border: open === i ? '1.5px solid #4A7C59' : '0.5px solid #E4E4E0',
            overflow: 'hidden', transition: 'border-color .15s',
          }}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                width: '100%', textAlign: 'left', padding: '13px 14px',
                display: 'flex', alignItems: 'center', gap: 12,
                background: open === i ? '#4A7C59' : '#fff',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'background .15s',
              }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: 999, flexShrink: 0,
                background: open === i ? 'rgba(255,255,255,0.2)' : '#E8F0EB',
                color: open === i ? '#fff' : '#4A7C59',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
              }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: open === i ? '#fff' : '#2A2A2A' }}>{g.fase}</div>
                <div style={{ fontSize: 11, color: open === i ? 'rgba(255,255,255,0.7)' : '#8A8A85' }}>{g.durata}</div>
              </div>
              <span style={{ fontSize: 18, color: open === i ? '#fff' : '#4A7C59', flexShrink: 0 }}>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ background: '#FAFAF9', borderRadius: 8, padding: '10px 12px', border: '0.5px solid #E4E4E0' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#3D3D3D', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tu fai</div>
                  <div style={{ fontSize: 13, color: '#3A3A38', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{g.tuFai}</div>
                </div>
                <div style={{ background: '#E8F0EB', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#2D5A3D', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Loro fanno</div>
                  <div style={{ fontSize: 13, color: '#2D5A3D', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{g.loroFanno}</div>
                </div>
                <div style={{ background: '#3D3D3D', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#A0BFA8', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Domanda al gruppo</div>
                  <div style={{ fontSize: 13, color: '#E8F0EB', lineHeight: 1.6, fontStyle: 'italic' }}>"{g.domanda}"</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
