'use client'
import { useState } from 'react'
import { PRATICHE, COLONNE, NOMI, PILL_COLORS, type Pratica } from '@/data/data'

const FASE_STYLE: Record<string, { bg: string; color: string }> = {
  'Onboarding':        { bg: '#E8F5E9', color: '#2E7D32' },
  "Lettera d'intenti": { bg: '#E3F2FD', color: '#1565C0' },
  'Term Sheet':        { bg: '#E3F2FD', color: '#1565C0' },
  'Due Diligence':     { bg: '#FFF8E1', color: '#F57F17' },
  'Negoziazione':      { bg: '#FBE9E7', color: '#BF360C' },
  'Signing':           { bg: '#E8F5E9', color: '#2E7D32' },
  'Closing':           { bg: '#F3E5F5', color: '#6A1B9A' },
}

function semaforo(priorita: string) {
  if (priorita === 'Urgentissimo') return { label: 'Urgentissimo', color: '#C0392B', bg: '#FDECEA' }
  if (priorita === 'Critico')      return { label: 'Critico',      color: '#9A4B00', bg: '#FFF3E0' }
  if (priorita === 'Attenzione')   return { label: 'Attenzione',   color: '#7A6B00', bg: '#FFFDE7' }
  return                                  { label: 'Ok',           color: '#2E7D32', bg: '#E8F5E9' }
}

function MetricCard({ label, value, sub, danger }: { label: string; value: string; sub: string; danger?: boolean }) {
  return (
    <div style={{ background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', padding: '12px 14px' }}>
      <div style={{ fontSize: 10, color: '#8A8A85', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: danger ? '#C0392B' : '#2A2A2A' }}>{value}</div>
      <div style={{ fontSize: 10, color: '#8A8A85', marginTop: 2 }}>{sub}</div>
    </div>
  )
}

export default function Pipeline() {
  const [activeCol, setActiveCol] = useState<number | null>(null)
  const [activeResp, setActiveResp] = useState<string>('tutti')

  const filtered = activeResp === 'tutti' ? PRATICHE : PRATICHE.filter(p => p.resp === activeResp)
  const colInfo = activeCol !== null ? COLONNE[activeCol] : null

  return (
    <div>
      {/* Intro */}
      <div style={{ marginBottom: 20, padding: '14px 16px', background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', borderLeft: '3px solid #4A7C59' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', marginBottom: 4 }}>Black Swan Capital — Pipeline M&A Q2 2025</div>
        <div style={{ fontSize: 12, color: '#8A8A85', lineHeight: 1.5 }}>Milano · Roma · Lugano · 14 soci · 38 collaboratori · 30 pratiche attive</div>
      </div>

      {/* Metriche */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 20 }}>
        <MetricCard label="Pratiche attive" value="30" sub="in gestione" />
        <MetricCard label="Portfolio" value="€7.8B" sub="deal in corso" />
        <MetricCard label="Scadenze critiche" value="5" sub="entro 14 giorni" danger />
        <MetricCard label="Fee attese Q2" value="€32M" sub="vs target €38M" />
      </div>

      {/* Colonne */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A8A85', marginBottom: 8 }}>
          Le colonne — clicca per capire cosa contiene e perché esiste
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 5, marginBottom: 10 }}>
          {COLONNE.map((c, i) => (
            <button
              key={c.letter}
              onClick={() => setActiveCol(activeCol === i ? null : i)}
              style={{
                padding: '8px 4px',
                borderRadius: 8,
                border: activeCol === i ? '1.5px solid #4A7C59' : '0.5px solid #E4E4E0',
                background: activeCol === i ? '#4A7C59' : '#fff',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all .15s',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: activeCol === i ? '#E8F0EB' : '#8A8A85', fontFamily: 'monospace', marginBottom: 2, paddingLeft: 4 }}>{c.letter}</div>
              <div style={{ fontSize: 9, fontWeight: 600, color: activeCol === i ? '#fff' : '#3A3A38', lineHeight: 1.2, paddingLeft: 4 }}>{c.name}</div>
            </button>
          ))}
        </div>
        {colInfo && (
          <div style={{
            background: '#F4F8F5',
            border: '0.5px solid #C8DDD0',
            borderLeft: '3px solid #4A7C59',
            borderRadius: '0 8px 8px 0',
            padding: '12px 14px',
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            <div style={{ fontWeight: 700, color: '#2A2A2A', marginBottom: 6 }}>Colonna {colInfo.letter} — {colInfo.name}</div>
            <div style={{ color: '#3A3A38', marginBottom: 10 }}>{colInfo.explain}</div>
            <div style={{ fontSize: 12, color: '#C0392B', background: '#FDECEA', borderRadius: 6, padding: '8px 10px' }}>
              <span style={{ fontWeight: 700 }}>Senza questa colonna: </span>{colInfo.bad}
            </div>
          </div>
        )}
      </div>

      {/* Pills responsabili */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A8A85', marginBottom: 8 }}>
          Vista per responsabile — clicca il tuo nome
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button
            onClick={() => setActiveResp('tutti')}
            style={{
              padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600,
              background: activeResp === 'tutti' ? '#3D3D3D' : '#F2F2F0',
              color: activeResp === 'tutti' ? '#fff' : '#8A8A85',
              border: activeResp === 'tutti' ? 'none' : '0.5px solid #E0E0DC',
              transition: 'all .15s', fontFamily: 'inherit', cursor: 'pointer',
            }}
          >Tutti (30)</button>
          {NOMI.map(n => {
            const count = PRATICHE.filter(p => p.resp === n).length
            const pc = PILL_COLORS[n]
            const isActive = activeResp === n
            return (
              <button
                key={n}
                onClick={() => setActiveResp(n)}
                style={{
                  padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                  background: isActive ? pc.bg : '#F2F2F0',
                  color: isActive ? pc.text : '#8A8A85',
                  border: isActive ? `1.5px solid ${pc.border}` : '0.5px solid #E0E0DC',
                  transition: 'all .15s', fontFamily: 'inherit', cursor: 'pointer',
                }}
              >{n} ({count})</button>
            )
          })}
        </div>
      </div>

      {/* Cards pratiche */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#8A8A85', fontSize: 13 }}>Nessuna pratica trovata</div>
        )}
        {filtered.map(p => {
          const sem = semaforo(p.priorita)
          const fase = FASE_STYLE[p.fase] ?? { bg: '#F2F2F0', color: '#3A3A38' }
          const pc = PILL_COLORS[p.resp]
          const isUrgent = p.priorita === 'Urgentissimo'
          return (
            <div key={p.id} style={{
              background: '#fff', borderRadius: 10,
              border: isUrgent ? '1px solid #F0C0BB' : '0.5px solid #E4E4E0',
              padding: '12px 14px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                  <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#8A8A85', marginBottom: 2 }}>{p.id}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#2A2A2A', lineHeight: 1.3 }}>{p.cliente}</div>
                  <div style={{ fontSize: 11, color: '#8A8A85', marginTop: 2 }}>{p.tipo}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#2A2A2A' }}>{p.valore}</div>
                  <div style={{ fontSize: 11, color: '#4A7C59', fontWeight: 600 }}>{p.fee}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                <span style={{ padding: '3px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700, background: fase.bg, color: fase.color }}>{p.fase}</span>
                <span style={{ padding: '3px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700, background: sem.bg, color: sem.color }}>{sem.label} · scad. {p.scad}</span>
                <span style={{ padding: '3px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700, background: pc?.bg, color: pc?.text, border: `1px solid ${pc?.border}` }}>{p.resp}</span>
                <span style={{ padding: '3px 9px', borderRadius: 999, fontSize: 10, fontWeight: 600, background: '#F4F8F5', color: '#4A7C59' }}>peso {p.peso}</span>
              </div>
              {p.note && (
                <div style={{ fontSize: 11, color: '#8A8A85', marginTop: 8, lineHeight: 1.4, borderTop: '0.5px solid #F0F0EC', paddingTop: 8 }}>{p.note}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
