'use client'
import { useState } from 'react'
import { TEAM, REDISTRIB_PREVIEW, PIANO_TEST } from '@/data/data'

function semaforoStyle(s: string): { bg: string; color: string } {
  if (s === 'Sovraccarico') return { bg: '#FDECEA', color: '#C0392B' }
  if (s === 'Attenzione')   return { bg: '#FFF8E1', color: '#9A6B00' }
  return                           { bg: '#E8F5E9', color: '#2E7D32' }
}

function SatBar({ pct }: { pct: number }) {
  const color = pct >= 80 ? '#C0392B' : pct >= 60 ? '#9A6B00' : '#4A7C59'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: 6, background: '#F0F0EC', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ width: `${Math.min(pct,100)}%`, height: '100%', background: color, borderRadius: 99, transition: 'width .3s' }} />
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color, minWidth: 32, textAlign: 'right' }}>{pct}%</span>
    </div>
  )
}

export default function Sistema() {
  const [subTab, setSubTab] = useState<'team'|'redistrib'|'test'|'log'>('team')

  const SUBTABS: {id: typeof subTab; label: string}[] = [
    {id:'team',     label:'Team & saturazione'},
    {id:'redistrib',label:'Simulazione redistribuzione'},
    {id:'test',     label:'Piano test'},
    {id:'log',      label:'Log automazioni'},
  ]

  return (
    <div>
      <div style={{ marginBottom: 16, padding: '14px 16px', background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', borderLeft: '3px solid #4A7C59' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', marginBottom: 4 }}>Sistema operativo BSC</div>
        <div style={{ fontSize: 12, color: '#8A8A85' }}>Saturazione team · redistribuzione automatica · piano test · log</div>
      </div>

      {/* Sub-nav */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        {SUBTABS.map(t => (
          <button key={t.id} onClick={() => setSubTab(t.id)} style={{
            padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: subTab===t.id ? 700 : 500,
            background: subTab===t.id ? '#4A7C59' : '#F2F2F0',
            color: subTab===t.id ? '#fff' : '#8A8A85',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s',
          }}>{t.label}</button>
        ))}
      </div>

      {/* TEAM */}
      {subTab === 'team' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 8 }}>
            {[
              {label:'Membri attivi',  value: TEAM.filter(t=>t.stato==='Attivo').length.toString(),  color:'#2A2A2A'},
              {label:'In attenzione',  value: TEAM.filter(t=>t.semaforoTeam==='Attenzione').length.toString(), color:'#9A6B00'},
              {label:'Sovraccarichi',  value: TEAM.filter(t=>t.semaforoTeam==='Sovraccarico').length.toString(), color:'#C0392B'},
              {label:'Saturazione media', value: Math.round(TEAM.reduce((s,t)=>s+t.saturazionePct,0)/TEAM.length)+'%', color:'#4A7C59'},
            ].map((m,i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', padding: '12px 14px' }}>
                <div style={{ fontSize: 10, color: '#8A8A85', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{m.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>
          {TEAM.map(m => {
            const sem = semaforoStyle(m.semaforoTeam)
            return (
              <div key={m.nome} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 99, background: '#E8F0EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#4A7C59' }}>
                      {m.nome.slice(0,2).toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#2A2A2A' }}>{m.nome}</div>
                      <div style={{ fontSize: 11, color: '#8A8A85' }}>{m.taskAperte} task · carico {m.caricoAttuale}/{m.capacitaMax}</div>
                    </div>
                  </div>
                  <span style={{ padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700, background: sem.bg, color: sem.color }}>{m.semaforoTeam}</span>
                </div>
                <SatBar pct={m.saturazionePct} />
              </div>
            )
          })}
        </div>
      )}

      {/* REDISTRIBUZIONE */}
      {subTab === 'redistrib' && (
        <div>
          <div style={{ background: '#FFF8E1', border: '0.5px solid #F0D080', borderRadius: 10, padding: '12px 14px', marginBottom: 14, fontSize: 13, color: '#7A5800' }}>
            <span style={{ fontWeight: 700 }}>Scenario di test: </span>Saso impostato come Assente. Il sistema ha simulato la redistribuzione delle sue 5 pratiche bilanciando il carico tra i membri disponibili.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {REDISTRIB_PREVIEW.map((r, i) => {
              const orfana = r.a === '—'
              return (
                <div key={i} style={{ background: '#fff', borderRadius: 10, border: orfana ? '1px solid #F0C0BB' : '0.5px solid #E4E4E0', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#8A8A85', marginBottom: 2 }}>{r.id}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#2A2A2A' }}>{r.cliente}</div>
                    </div>
                    <span style={{ padding: '3px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700, background: r.priorita==='Urgentissimo' ? '#FDECEA' : r.priorita==='Critico' ? '#FFF3E0' : '#E8F5E9', color: r.priorita==='Urgentissimo' ? '#C0392B' : r.priorita==='Critico' ? '#9A4B00' : '#2E7D32' }}>{r.priorita} · peso {r.peso}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                    <span style={{ padding: '2px 10px', borderRadius: 999, background: '#FDECEA', color: '#C0392B', fontWeight: 700 }}>{r.da}</span>
                    <span style={{ color: '#8A8A85' }}>→</span>
                    {orfana
                      ? <span style={{ padding: '2px 10px', borderRadius: 999, background: '#FFF3E0', color: '#9A4B00', fontWeight: 700 }}>Nessun assegnatario disponibile</span>
                      : <span style={{ padding: '2px 10px', borderRadius: 999, background: '#E8F5E9', color: '#2E7D32', fontWeight: 700 }}>{r.a} → carico post: {r.caricoPost} ({r.saturazionePost})</span>
                    }
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ marginTop: 14, padding: '10px 14px', background: '#F4F8F5', borderRadius: 8, fontSize: 12, color: '#4A7C59', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700 }}>BSC-001 rimane orfana</span> perché ha peso 3 (Urgentissimo) e nessun membro attivo ha abbastanza capacità residua. Il sistema non forza l'assegnazione — la segnala e aspetta un intervento manuale.
          </div>
        </div>
      )}

      {/* PIANO TEST */}
      {subTab === 'test' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {PIANO_TEST.map((t, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', padding: '12px 14px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                <span style={{ width: 24, height: 24, borderRadius: 99, background: '#4A7C59', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{t.num}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A' }}>{t.scenario}</span>
              </div>
              <div style={{ background: '#F4F8F5', borderRadius: 8, padding: '8px 10px', fontSize: 12, color: '#3A3A38', marginBottom: 6, lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700, color: '#4A7C59' }}>Azione: </span>{t.azione}
              </div>
              <div style={{ background: '#E8F5E9', borderRadius: 8, padding: '8px 10px', fontSize: 12, color: '#2D5A3D', lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700 }}>Esito atteso: </span>{t.esito}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LOG */}
      {subTab === 'log' && (
        <div>
          <div style={{ background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>📋</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#2A2A2A', marginBottom: 6 }}>Log automazioni</div>
            <div style={{ fontSize: 12, color: '#8A8A85', lineHeight: 1.6 }}>
              Il log si popola automaticamente ogni volta che lo script esegue una redistribuzione.<br />
              Durante il workshop lo vedrete riempirsi in tempo reale dopo aver lanciato «Redistribuisci pratiche assenti».
            </div>
            <div style={{ marginTop: 14, padding: '10px 14px', background: '#F4F8F5', borderRadius: 8, fontSize: 11, color: '#4A7C59', fontFamily: 'monospace', textAlign: 'left', lineHeight: 1.8 }}>
              Timestamp · ID pratica · Cliente · Vecchio resp. · Nuovo resp. · Motivo · Note
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
