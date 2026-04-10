'use client'
import { DASHBOARD, TEAM } from '@/data/data'

function prioStyle(p: string) {
  if (p === 'Urgentissimo') return { bg: '#FDECEA', color: '#C0392B' }
  if (p === 'Critico')      return { bg: '#FFF3E0', color: '#9A4B00' }
  return                           { bg: '#E8F5E9', color: '#2E7D32' }
}

export default function Dashboard() {
  const teamSorted = [...TEAM].sort((a,b) => b.saturazionePct - a.saturazionePct)

  return (
    <div>
      <div style={{ marginBottom: 16, padding: '14px 16px', background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', borderLeft: '3px solid #4A7C59' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', marginBottom: 4 }}>Dashboard Executive</div>
        <div style={{ fontSize: 12, color: '#8A8A85' }}>Vista aggregata in tempo reale — urgenze, team, saturazione</div>
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 20 }}>
        <div style={{ background: '#FDECEA', borderRadius: 10, padding: '14px', border: '0.5px solid #F0C0BB' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Urgenze totali</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#C0392B' }}>{DASHBOARD.pratiche_urgenti}</div>
          <div style={{ fontSize: 11, color: '#C0392B', marginTop: 2 }}>{DASHBOARD.urgentissimo} urgentissimo · {DASHBOARD.critico} critico</div>
        </div>
        <div style={{ background: '#FFF8E1', borderRadius: 10, padding: '14px', border: '0.5px solid #F0D080' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#9A6B00', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Team in attenzione</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#9A6B00' }}>{DASHBOARD.team_attenzione}</div>
          <div style={{ fontSize: 11, color: '#9A6B00', marginTop: 2 }}>{DASHBOARD.sovraccarichi} sovraccarichi · {DASHBOARD.assenti} assenti</div>
        </div>
        <div style={{ background: '#E8F0EB', borderRadius: 10, padding: '14px', border: '0.5px solid #C8DDD0' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#4A7C59', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Saturazione media</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#4A7C59' }}>{DASHBOARD.saturazione_media}%</div>
          <div style={{ fontSize: 11, color: '#4A7C59', marginTop: 2 }}>su 7 membri attivi</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 10, padding: '14px', border: '0.5px solid #E4E4E0' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#8A8A85', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Portfolio attivo</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#2A2A2A' }}>€7.8B</div>
          <div style={{ fontSize: 11, color: '#8A8A85', marginTop: 2 }}>30 pratiche in gestione</div>
        </div>
      </div>

      {/* Top urgenze */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8A8A85', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Top urgenze</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {DASHBOARD.top_urgenze.map((u, i) => {
            const ps = prioStyle(u.priorita)
            return (
              <div key={i} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#8A8A85' }}>{u.id}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.cliente}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                  <span style={{ padding: '2px 8px', borderRadius: 999, fontSize: 10, fontWeight: 700, background: ps.bg, color: ps.color }}>{u.priorita}</span>
                  <span style={{ fontSize: 10, color: '#8A8A85' }}>{u.scad} · {u.resp}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Saturazione team */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8A8A85', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Saturazione team</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {teamSorted.map((m, i) => {
            const color = m.saturazionePct >= 80 ? '#C0392B' : m.saturazionePct >= 60 ? '#9A6B00' : '#4A7C59'
            const semBg = m.semaforoTeam === 'Attenzione' ? '#FFF8E1' : '#E8F5E9'
            const semColor = m.semaforoTeam === 'Attenzione' ? '#9A6B00' : '#2E7D32'
            return (
              <div key={i} style={{ background: '#fff', borderRadius: 10, border: '0.5px solid #E4E4E0', padding: '10px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 99, background: '#E8F0EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#4A7C59' }}>
                      {m.nome.slice(0,2).toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A2A' }}>{m.nome}</div>
                      <div style={{ fontSize: 10, color: '#8A8A85' }}>{m.taskAperte} task · {m.caricoAttuale}/{m.capacitaMax}</div>
                    </div>
                  </div>
                  <span style={{ padding: '2px 8px', borderRadius: 999, fontSize: 10, fontWeight: 700, background: semBg, color: semColor }}>{m.semaforoTeam}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ flex: 1, height: 6, background: '#F0F0EC', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ width: `${m.saturazionePct}%`, height: '100%', background: color, borderRadius: 99 }} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color, minWidth: 34, textAlign: 'right' }}>{m.saturazionePct}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
