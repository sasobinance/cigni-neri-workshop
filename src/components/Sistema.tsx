'use client'
import {useState} from 'react'
import {TEAM,REDISTRIB} from '@/data/data'

function calcScore(giorni:number,valoreM:number,prob:number,rischio:number){
  const urg=Math.max(0,100-giorni)
  const val=Math.min(valoreM/890*100,100)
  return Math.round((urg*0.30)+(val*0.30)+(prob*0.25)+((10-rischio)*10*0.15))
}

export default function Sistema(){
  const [sub,setSub]=useState<'team'|'redistrib'|'whatif'>('team')
  const [giorni,setGiorni]=useState(18)
  const [valore,setValore]=useState(95)
  const [prob,setProb]=useState(70)
  const [rischio,setRischio]=useState(4)
  const score=calcScore(giorni,valore,prob,rischio)
  const scoreC=score>=80?'#C0392B':score>=65?'#9A6B00':'#2E7D32'

  return(
    <div>
      <div style={{display:'flex',gap:6,marginBottom:14,flexWrap:'wrap'}}>
        {(['team','redistrib','whatif'] as const).map(t=>(
          <button key={t} onClick={()=>setSub(t)} style={{
            padding:'6px 12px',borderRadius:999,fontSize:11,fontWeight:sub===t?700:500,
            background:sub===t?'#4A7C59':'#F2F2F0',color:sub===t?'#fff':'#8A8A85',
            border:'none',cursor:'pointer',fontFamily:'inherit',
          }}>{t==='team'?'Team & saturazione':t==='redistrib'?'Redistribuzione':' What-If scorer'}</button>
        ))}
      </div>

      {sub==='team'&&(
        <div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:8,marginBottom:14}}>
            {[
              {l:'Attivi',v:`${TEAM.filter(t=>t.stato==='Attivo').length}`},
              {l:'In attenzione',v:`${TEAM.filter(t=>t.semaforoTeam==='Attenzione').length}`,d:true},
              {l:'Sat. media',v:`${Math.round(TEAM.reduce((s,t)=>s+t.saturazionePct,0)/TEAM.length)}%`},
              {l:'Capacità totale',v:`${TEAM.reduce((s,t)=>s+t.capacitaMax,0)}`},
            ].map((m,i)=>(
              <div key={i} style={{background:'#fff',borderRadius:8,border:'0.5px solid #E4E4E0',padding:'10px 12px'}}>
                <div style={{fontSize:10,color:m.d?'#C0392B':'#8A8A85',fontWeight:600,textTransform:'uppercase',letterSpacing:'.05em',marginBottom:3}}>{m.l}</div>
                <div style={{fontSize:20,fontWeight:700,color:m.d?'#C0392B':'#2A2A2A'}}>{m.v}</div>
              </div>
            ))}
          </div>
          {TEAM.map((m,i)=>{
            const c=m.saturazionePct>=80?'#C0392B':m.saturazionePct>=60?'#9A6B00':'#4A7C59'
            return(
              <div key={i} style={{background:'#fff',borderRadius:10,border:'0.5px solid #E4E4E0',padding:'12px 14px',marginBottom:7}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:30,height:30,borderRadius:99,background:'#E8F0EB',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:'#4A7C59'}}>{m.nome.slice(0,2).toUpperCase()}</div>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:'#2A2A2A'}}>{m.nome}</div>
                      <div style={{fontSize:10,color:'#8A8A85'}}>{m.taskAperte} task · {m.caricoAttuale}/{m.capacitaMax}</div>
                    </div>
                  </div>
                  <span style={{padding:'2px 9px',borderRadius:999,fontSize:10,fontWeight:700,background:m.semaforoTeam==='Attenzione'?'#FFF8E1':'#E8F5E9',color:m.semaforoTeam==='Attenzione'?'#9A6B00':'#2E7D32'}}>{m.semaforoTeam}</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <div style={{flex:1,height:5,background:'#F0F0EC',borderRadius:99,overflow:'hidden'}}>
                    <div style={{width:`${m.saturazionePct}%`,height:'100%',background:c,borderRadius:99}}/>
                  </div>
                  <span style={{fontSize:11,fontWeight:700,color:c,minWidth:34,textAlign:'right'}}>{m.saturazionePct}%</span>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {sub==='redistrib'&&(
        <div>
          <div style={{background:'#FFF8E1',border:'0.5px solid #F0D080',borderRadius:10,padding:'12px 14px',marginBottom:12,fontSize:12,color:'#7A5800'}}>
            <span style={{fontWeight:700}}>Scenario: </span>Saso impostato Assente. Il sistema ha simulato la redistribuzione delle sue 5 pratiche.
          </div>
          {REDISTRIB.map((r,i)=>{
            const orfana=r.a==='—'
            return(
              <div key={i} style={{background:'#fff',borderRadius:10,border:orfana?'1px solid #F0C0BB':'0.5px solid #E4E4E0',padding:'12px 14px',marginBottom:7}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
                  <div>
                    <div style={{fontSize:9,fontFamily:'monospace',color:'#8A8A85'}}>{r.id}</div>
                    <div style={{fontSize:14,fontWeight:700,color:'#2A2A2A'}}>{r.cliente}</div>
                  </div>
                  <span style={{padding:'2px 9px',borderRadius:999,fontSize:10,fontWeight:700,background:r.priorita==='Urgentissimo'?'#FDECEA':'#E8F5E9',color:r.priorita==='Urgentissimo'?'#C0392B':'#2E7D32',flexShrink:0,marginLeft:8}}>{r.priorita} · peso {r.peso}</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:8,fontSize:12}}>
                  <span style={{padding:'2px 9px',borderRadius:999,background:'#FDECEA',color:'#C0392B',fontWeight:700}}>{r.da}</span>
                  <span style={{color:'#8A8A85'}}>→</span>
                  {orfana
                    ?<span style={{padding:'2px 9px',borderRadius:999,background:'#FFF3E0',color:'#9A4B00',fontWeight:700}}>Nessun assegnatario disponibile</span>
                    :<span style={{padding:'2px 9px',borderRadius:999,background:'#E8F5E9',color:'#2E7D32',fontWeight:700}}>{r.a} — carico post {r.caricoPost} ({r.satPost})</span>
                  }
                </div>
              </div>
            )
          })}
          <div style={{marginTop:10,padding:'10px 14px',background:'#F4F8F5',borderRadius:8,fontSize:12,color:'#4A7C59',lineHeight:1.6}}>
            <span style={{fontWeight:700}}>BSC-001 rimane orfana</span> — peso 3 (Urgentissimo), nessun membro ha abbastanza capacità residua. Il sistema non forza l'assegnazione: segnala e aspetta un intervento manuale.
          </div>
        </div>
      )}

      {sub==='whatif'&&(
        <div>
          <div style={{background:'#fff',borderRadius:10,border:'0.5px solid #E4E4E0',padding:'16px'}}>
            <div style={{fontSize:13,fontWeight:700,color:'#2A2A2A',marginBottom:4}}>Simulatore scoring — What-If</div>
            <div style={{fontSize:12,color:'#8A8A85',marginBottom:16}}>Modifica le variabili e vedi come cambia lo score in tempo reale</div>

            {[
              {label:'Giorni alla scadenza',val:giorni,min:1,max:120,set:setGiorni,fmt:(v:number)=>`${v} gg`},
              {label:'Valore deal (€M)',val:valore,min:5,max:890,set:setValore,fmt:(v:number)=>`€${v}M`},
              {label:'Probabilità successo %',val:prob,min:0,max:100,set:setProb,fmt:(v:number)=>`${v}%`},
              {label:'Rischio blocco (1-10)',val:rischio,min:1,max:10,set:setRischio,fmt:(v:number)=>`${v}/10`},
            ].map((sl,i)=>(
              <div key={i} style={{marginBottom:14}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'#3A3A38',marginBottom:4}}>
                  <span>{sl.label}</span><span style={{fontWeight:700,color:'#4A7C59'}}>{sl.fmt(sl.val)}</span>
                </div>
                <input type="range" min={sl.min} max={sl.max} step={1} value={sl.val} onChange={e=>sl.set(Number(e.target.value))} style={{width:'100%'}}/>
              </div>
            ))}

            <div style={{background:'#FAFAF8',borderRadius:8,padding:'14px',marginTop:8}}>
              <div style={{fontSize:11,color:'#8A8A85',marginBottom:6}}>Score di priorità</div>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div style={{fontSize:36,fontWeight:700,color:scoreC}}>{score}</div>
                <div style={{flex:1}}>
                  <div style={{height:8,background:'#E4E4E0',borderRadius:99,overflow:'hidden',marginBottom:4}}>
                    <div style={{width:`${score}%`,height:'100%',background:scoreC,borderRadius:99,transition:'width .3s'}}/>
                  </div>
                  <div style={{fontSize:11,color:scoreC,fontWeight:600}}>
                    {score>=80?'Priorità massima — lavora questa settimana':score>=65?'Priorità alta — tieni d\'occhio':'Coda — può aspettare'}
                  </div>
                </div>
              </div>
            </div>

            <div style={{marginTop:12,background:'#1E1E1E',borderRadius:8,padding:'12px 14px',fontFamily:'monospace',fontSize:11,color:'#A0D0B0',lineHeight:1.6}}>
              =ROUND(((100-{giorni})*0.30)+(({valore}/890)*100*0.30)+({prob}*0.25)+(({10-rischio})*10*0.15),0)<br/>
              = {Math.round((100-giorni)*0.30)} + {Math.round((valore/890)*100*0.30)} + {Math.round(prob*0.25)} + {Math.round((10-rischio)*10*0.15)} = <span style={{color:'#fff',fontWeight:700}}>{score}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
