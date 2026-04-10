'use client'
import { useState } from 'react'
import { SLIDES, DASHBOARD } from '@/data/data'

function SlideCopertina({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#3D3D3D', borderRadius: 14, padding: '40px 32px', textAlign: 'center' }}>
      <img src="/logo.png" alt="logo" style={{ width: 64, height: 64, objectFit: 'contain', marginBottom: 24, opacity: 0.9 }} />
      <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.2 }}>{s.titolo}</div>
      <div style={{ fontSize: 16, color: '#A0BFA8', marginBottom: 8, fontWeight: 500 }}>{(s as any).sottotitolo}</div>
      <div style={{ fontSize: 13, color: '#888', marginTop: 8 }}>{(s as any).body}</div>
    </div>
  )
}

function SlideProblema({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff', borderRadius: 14, padding: '40px 32px', border: '0.5px solid #E4E4E0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Il contesto</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: '#2A2A2A', marginBottom: 20, lineHeight: 1.3 }}>{s.titolo}</div>
      <div style={{ fontSize: 15, color: '#3A3A38', lineHeight: 1.8, marginBottom: 24 }}>{(s as any).body}</div>
      <div style={{ background: '#FDECEA', borderRadius: 10, padding: '16px 20px', fontSize: 16, fontWeight: 700, color: '#C0392B' }}>{(s as any).highlight}</div>
    </div>
  )
}

function SlideNumeri({ s }: { s: typeof SLIDES[0] }) {
  const metriche = (s as any).metriche as {label:string;valore:string;sub:string;danger?:boolean}[]
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff', borderRadius: 14, padding: '40px 32px', border: '0.5px solid #E4E4E0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Dati reali · Q2 2026</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: '#2A2A2A', marginBottom: 28, lineHeight: 1.3 }}>{s.titolo}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
        {metriche.map((m, i) => (
          <div key={i} style={{ background: m.danger ? '#FDECEA' : '#F4F8F5', borderRadius: 10, padding: '16px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: m.danger ? '#C0392B' : '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{m.label}</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: m.danger ? '#C0392B' : '#2A2A2A' }}>{m.valore}</div>
            <div style={{ fontSize: 11, color: m.danger ? '#C0392B' : '#8A8A85', marginTop: 4 }}>{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideObiettivo({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#4A7C59', borderRadius: 14, padding: '40px 32px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#A0D0B0', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Perché siamo qui</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 20, lineHeight: 1.3 }}>{s.titolo}</div>
      <div style={{ fontSize: 16, color: '#E8F0EB', lineHeight: 1.8, marginBottom: 28 }}>{(s as any).body}</div>
      <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 10, padding: '16px 20px', fontSize: 18, fontWeight: 700, color: '#fff', borderLeft: '4px solid rgba(255,255,255,0.6)' }}>{(s as any).highlight}</div>
    </div>
  )
}

function SlideAgenda({ s }: { s: typeof SLIDES[0] }) {
  const items = (s as any).items as string[]
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff', borderRadius: 14, padding: '40px 32px', border: '0.5px solid #E4E4E0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Programma</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: '#2A2A2A', marginBottom: 24 }}>{s.titolo}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 24, height: 24, borderRadius: 99, background: '#4A7C59', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i+1}</div>
            <div style={{ fontSize: 13, color: '#3A3A38' }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideFormula({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff', borderRadius: 14, padding: '40px 32px', border: '0.5px solid #E4E4E0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Formula live</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#2A2A2A', marginBottom: 24, lineHeight: 1.3 }}>{s.titolo}</div>
      <div style={{ background: '#3D3D3D', borderRadius: 10, padding: '20px 24px', marginBottom: 20, fontFamily: 'monospace', fontSize: 15, color: '#A0D0B0', overflowX: 'auto', wordBreak: 'break-all' }}>
        {(s as any).formula}
      </div>
      <div style={{ fontSize: 14, color: '#3A3A38', lineHeight: 1.7, marginBottom: 16 }}>{(s as any).spiegazione}</div>
      <div style={{ background: '#E8F0EB', borderRadius: 10, padding: '12px 16px', fontSize: 14, fontWeight: 600, color: '#2D5A3D', fontStyle: 'italic' }}>"{(s as any).domanda}"</div>
    </div>
  )
}

function SlideFilterView({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff', borderRadius: 14, padding: '40px 32px', border: '0.5px solid #E4E4E0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Esercizio pratico</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#2A2A2A', marginBottom: 20, lineHeight: 1.3 }}>{s.titolo}</div>
      <div style={{ fontSize: 14, color: '#3A3A38', lineHeight: 1.8, marginBottom: 20 }}>{(s as any).body}</div>
      <div style={{ background: '#3D3D3D', borderRadius: 10, padding: '16px 20px', fontFamily: 'monospace', fontSize: 14, color: '#A0D0B0' }}>{(s as any).highlight}</div>
    </div>
  )
}

function SlideRedistribuzione({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff', borderRadius: 14, padding: '40px 32px', border: '0.5px solid #E4E4E0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Automazione avanzata</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#2A2A2A', marginBottom: 20, lineHeight: 1.3 }}>{s.titolo}</div>
      <div style={{ fontSize: 14, color: '#3A3A38', lineHeight: 1.8, marginBottom: 16 }}>{(s as any).body}</div>
      <div style={{ background: '#FFF8E1', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: '#9A6B00', fontWeight: 600, borderLeft: '3px solid #F0D080' }}>{(s as any).highlight}</div>
    </div>
  )
}

function SlideWow({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#3D3D3D', borderRadius: 14, padding: '40px 32px', textAlign: 'center' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#A0BFA8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Momento WOW</div>
      <div style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 16 }}>{s.titolo}</div>
      <div style={{ fontSize: 16, color: '#ccc', marginBottom: 28, lineHeight: 1.6 }}>{(s as any).body}</div>
      <div style={{ background: '#4A7C59', borderRadius: 12, padding: '20px 32px', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 16 }}>{(s as any).highlight}</div>
      <div style={{ fontSize: 13, color: '#888', fontStyle: 'italic' }}>{(s as any).sub}</div>
    </div>
  )
}

function SlideChiusura({ s }: { s: typeof SLIDES[0] }) {
  const items = (s as any).items as string[]
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#4A7C59', borderRadius: 14, padding: '40px 32px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#A0D0B0', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Per concludere</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 24 }}>{s.titolo}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: 99, background: '#A0D0B0', flexShrink: 0 }} />
            <div style={{ fontSize: 14, color: '#E8F0EB' }}>{item}</div>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 10, padding: '16px 20px', fontSize: 15, color: '#fff', fontStyle: 'italic', lineHeight: 1.6 }}>"{(s as any).frase}"</div>
    </div>
  )
}

function SlideConcetto({ s }: { s: typeof SLIDES[0] }) {
  return (
    <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff', borderRadius: 14, padding: '40px 32px', border: '0.5px solid #E4E4E0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Concetto chiave</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#2A2A2A', marginBottom: 20 }}>{s.titolo}</div>
      <div style={{ fontSize: 15, color: '#3A3A38', lineHeight: 1.8, marginBottom: 20 }}>{(s as any).body}</div>
      <div style={{ background: '#E8F0EB', borderRadius: 10, padding: '14px 18px', fontSize: 15, fontWeight: 600, color: '#2D5A3D', borderLeft: '3px solid #4A7C59' }}>{(s as any).highlight}</div>
    </div>
  )
}

function renderSlide(s: typeof SLIDES[0]) {
  switch(s.tipo) {
    case 'copertina':       return <SlideCopertina s={s} />
    case 'problema':        return <SlideProblema s={s} />
    case 'numeri':          return <SlideNumeri s={s} />
    case 'obiettivo':       return <SlideObiettivo s={s} />
    case 'agenda':          return <SlideAgenda s={s} />
    case 'concetto':        return <SlideConcetto s={s} />
    case 'formula':         return <SlideFormula s={s} />
    case 'filterview':      return <SlideFilterView s={s} />
    case 'redistribuzione': return <SlideRedistribuzione s={s} />
    case 'wow':             return <SlideWow s={s} />
    case 'chiusura':        return <SlideChiusura s={s} />
    default:                return <div>{s.titolo}</div>
  }
}

export default function Presentazione() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length
  const s = SLIDES[current]

  return (
    <div>
      {/* Slide */}
      <div style={{ marginBottom: 16 }}>
        {renderSlide(s)}
      </div>

      {/* Navigazione */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button
          onClick={() => setCurrent(c => Math.max(0, c-1))}
          disabled={current === 0}
          style={{ padding: '8px 20px', borderRadius: 999, fontSize: 13, fontWeight: 600, background: current === 0 ? '#F2F2F0' : '#3D3D3D', color: current === 0 ? '#ccc' : '#fff', border: 'none', cursor: current === 0 ? 'default' : 'pointer', fontFamily: 'inherit' }}
        >← Indietro</button>

        <div style={{ flex: 1, height: 4, background: '#F0F0EC', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ width: `${((current+1)/total)*100}%`, height: '100%', background: '#4A7C59', borderRadius: 99, transition: 'width .2s' }} />
        </div>

        <button
          onClick={() => setCurrent(c => Math.min(total-1, c+1))}
          disabled={current === total-1}
          style={{ padding: '8px 20px', borderRadius: 999, fontSize: 13, fontWeight: 600, background: current === total-1 ? '#F2F2F0' : '#4A7C59', color: current === total-1 ? '#ccc' : '#fff', border: 'none', cursor: current === total-1 ? 'default' : 'pointer', fontFamily: 'inherit' }}
        >Avanti →</button>
      </div>

      {/* Indice pillole */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {SLIDES.map((sl, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: current===i ? 700 : 400,
              background: current===i ? '#4A7C59' : '#F2F2F0',
              color: current===i ? '#fff' : '#8A8A85',
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            }}
          >{i+1}. {sl.titolo}</button>
        ))}
      </div>
    </div>
  )
}
