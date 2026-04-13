'use client'
import {useState} from 'react'
import {PRATICHE,NOMI,PILL_COLORS,DASHBOARD,TEAM,type Pratica} from '@/data/data'

const FASE_STYLE:Record<string,{bg:string;color:string}>={
  'Onboarding':{bg:'#E8F5E9',color:'#2E7D32'},
  "Lettera d'intenti":{bg:'#E3F2FD',color:'#1565C0'},
  'Term Sheet':{bg:'#E3F2FD',color:'#1565C0'},
  'Due Diligence':{bg:'#FFF8E1',color:'#F57F17'},
  'Negoziazione':{bg:'#FBE9E7',color:'#BF360C'},
  'Signing':{bg:'#E8F5E9',color:'#2E7D32'},
  'Closing':{bg:'#F3E5F5',color:'#6A1B9A'},
}

function semStyle(p:string){
  if(p==='Urgentissimo')return{bg:'#FDECEA',color:'#C0392B'}
  if(p==='Critico')return{bg:'#FFF3E0',color:'#9A4B00'}
  if(p==='Attenzione')return{bg:'#FFFDE7',color:'#7A6B00'}
  return{bg:'#E8F5E9',color:'#2E7D32'}
}

function scoreColor(s:number){
  if(s>=80)return'#C0392B'
  if(s>=65)return'#9A6B00'
  return'#2E7D32'
}

export default function BSC(){
  const [sub,setSub]=useState<'pipeline'|'dashboard'>('pipeline')
  const [resp,setResp]=useState('tutti')
  const [sort,setSort]=useState<'priorita'|'score'>('score')

  const filtered=(resp==='tutti'?PRATICHE:PRATICHE.filter(p=>p.resp===resp))
    .slice().sort((a,b)=>sort==='score'?b.score-a.score:0)

  return(
    <div>
      {/* Sub nav */}
      <div style={{display:'flex',gap:6,marginBottom:16}}>
        {(['pipeline','dashboard'] as const).map(t=>(
          <button key={t} onClick={()=>setSub(t)} style={{
            padding:'6px 14px',borderRadius:999,fontSize:11,fontWeight:sub===t?700:500,
            background:sub===t?'#4A7C59':'#F2F2F0',color:sub===t?'#fff':'#8A8A85',
            border:'none',cursor:'pointer',fontFamily:'inherit',textTransform:'capitalize',
          }}>{t==='pipeline'?'Pipeline pratiche':'Dashboard executive'}</button>
        ))}
      </div>

      {sub==='dashboard' && (
        <div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,marginBottom:16}}>
            {[
              {label:'Urgenze totali',val:`${DASHBOARD.pratiche_urgenti}`,sub2:`${DASHBOARD.urgentissimo} urg · ${DASHBOARD.critico} crit`,danger:true},
              {label:'Team in attenzione',val:`${DASHBOARD.team_attenzione}`,sub2:`${DASHBOARD.sovraccarichi} sovrac · ${DASHBOARD.assenti} assenti`},
              {label:'Saturazione media',val:`${DASHBOARD.saturazione_media}%`,sub2:'su 7 membri attivi'},
              {label:'Portfolio attivo',val:'€7.8B',sub2:'30 pratiche'},
            ].map((m,i)=>(
              <div key={i} style={{background:'#fff',borderRadius:10,border:`0.5px solid ${m.danger?'#F0C0BB':'#E4E4E0'}`,padding:'12px 14px'}}>
                <div style={{fontSize:10,color:m.danger?'#C0392B':'#8A8A85',fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',marginBottom:4}}>{m.label}</div>
                <div style={{fontSize:24,fontWeight:700,color:m.danger?'#C0392B':'#2A2A2A'}}>{m.val}</div>
                <div style={{fontSize:10,color:'#8A8A85',marginTop:2}}>{m.sub2}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:10,fontWeight:700,color:'#8A8A85',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:8}}>Top urgenze</div>
          <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:16}}>
            {DASHBOARD.top_urgenze.map((u,i)=>{
              const ps=semStyle(u.priorita)
              return(
                <div key={i} style={{background:'#fff',borderRadius:10,border:'0.5px solid #E4E4E0',padding:'10px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}>
                  <div>
                    <div style={{fontSize:9,fontFamily:'monospace',color:'#8A8A85'}}>{u.id}</div>
                    <div style={{fontSize:13,fontWeight:700,color:'#2A2A2A'}}>{u.cliente}</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:3,flexShrink:0}}>
                    <span style={{padding:'2px 8px',borderRadius:999,fontSize:10,fontWeight:700,background:ps.bg,color:ps.color}}>{u.priorita}</span>
                    <span style={{fontSize:10,color:'#8A8A85'}}>{u.scad} · {u.resp}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{fontSize:10,fontWeight:700,color:'#8A8A85',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:8}}>Saturazione team</div>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            {TEAM.map((m,i)=>{
              const c=m.saturazionePct>=80?'#C0392B':m.saturazionePct>=60?'#9A6B00':'#4A7C59'
              return(
                <div key={i} style={{background:'#fff',borderRadius:10,border:'0.5px solid #E4E4E0',padding:'10px 14px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
                    <div style={{display:'flex',alignItems:'center',gap:8}}>
                      <div style={{width:28,height:28,borderRadius:99,background:'#E8F0EB',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:700,color:'#4A7C59'}}>{m.nome.slice(0,2).toUpperCase()}</div>
                      <div>
                        <div style={{fontSize:13,fontWeight:700,color:'#2A2A2A'}}>{m.nome}</div>
                        <div style={{fontSize:10,color:'#8A8A85'}}>{m.taskAperte} task · {m.caricoAttuale}/{m.capacitaMax}</div>
                      </div>
                    </div>
                    <span style={{padding:'2px 8px',borderRadius:999,fontSize:10,fontWeight:700,background:m.semaforoTeam==='Attenzione'?'#FFF8E1':'#E8F5E9',color:m.semaforoTeam==='Attenzione'?'#9A6B00':'#2E7D32'}}>{m.semaforoTeam}</span>
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
        </div>
      )}

      {sub==='pipeline' && (
        <>
          {/* Metriche */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:8,marginBottom:14}}>
            {[
              {l:'Pratiche',v:'30'},{l:'Portfolio',v:'€7.8B'},
              {l:'Urgenze',v:'7',d:true},{l:'Sat. media',v:'55.7%'},
            ].map((m,i)=>(
              <div key={i} style={{background:'#fff',borderRadius:10,border:`0.5px solid ${m.d?'#F0C0BB':'#E4E4E0'}`,padding:'10px 12px'}}>
                <div style={{fontSize:10,color:m.d?'#C0392B':'#8A8A85',fontWeight:700,textTransform:'uppercase',letterSpacing:'.05em',marginBottom:3}}>{m.l}</div>
                <div style={{fontSize:20,fontWeight:700,color:m.d?'#C0392B':'#2A2A2A'}}>{m.v}</div>
              </div>
            ))}
          </div>

          {/* Ordinamento */}
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
            <span style={{fontSize:10,color:'#8A8A85'}}>Ordina per:</span>
            {(['score','priorita'] as const).map(s=>(
              <button key={s} onClick={()=>setSort(s)} style={{
                padding:'4px 10px',borderRadius:999,fontSize:10,fontWeight:sort===s?700:400,
                background:sort===s?'#4A7C59':'#F2F2F0',color:sort===s?'#fff':'#8A8A85',
                border:'none',cursor:'pointer',fontFamily:'inherit',
              }}>{s==='score'?'Score':'Priorità'}</button>
            ))}
          </div>

          {/* Pills */}
          <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:14}}>
            <button onClick={()=>setResp('tutti')} style={{padding:'6px 14px',borderRadius:999,fontSize:12,fontWeight:600,background:resp==='tutti'?'#3D3D3D':'#F2F2F0',color:resp==='tutti'?'#fff':'#8A8A85',border:'none',cursor:'pointer',fontFamily:'inherit'}}>Tutti (30)</button>
            {NOMI.map(n=>{
              const cnt=PRATICHE.filter(p=>p.resp===n).length
              const pc=PILL_COLORS[n]
              const isA=resp===n
              return(
                <button key={n} onClick={()=>setResp(n)} style={{padding:'6px 14px',borderRadius:999,fontSize:12,fontWeight:600,background:isA?pc.bg:'#F2F2F0',color:isA?pc.text:'#8A8A85',border:isA?`1.5px solid ${pc.border}`:'0.5px solid #E0E0DC',cursor:'pointer',fontFamily:'inherit'}}>{n} ({cnt})</button>
              )
            })}
          </div>

          {/* Cards */}
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {filtered.map((p,i)=>{
              const sem=semStyle(p.priorita)
              const fase=FASE_STYLE[p.fase]??{bg:'#F2F2F0',color:'#3A3A38'}
              const pc=PILL_COLORS[p.resp]
              const sc=scoreColor(p.score)
              return(
                <div key={p.id} style={{background:'#fff',borderRadius:10,border:`0.5px solid ${p.priorita==='Urgentissimo'?'#F0C0BB':'#E4E4E0'}`,padding:'12px 14px'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
                    <div style={{flex:1,minWidth:0,paddingRight:8}}>
                      <div style={{fontSize:9,fontFamily:'monospace',color:'#8A8A85',marginBottom:2}}>{p.id} · #{i+1}</div>
                      <div style={{fontSize:14,fontWeight:700,color:'#2A2A2A',lineHeight:1.3}}>{p.cliente}</div>
                      <div style={{fontSize:11,color:'#8A8A85',marginTop:1}}>{p.tipo}</div>
                    </div>
                    <div style={{textAlign:'right',flexShrink:0}}>
                      <div style={{fontSize:18,fontWeight:700,color:sc}}>{p.score}</div>
                      <div style={{fontSize:10,color:'#8A8A85'}}>{p.valore} · {p.fee}</div>
                    </div>
                  </div>
                  <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                    <span style={{padding:'2px 8px',borderRadius:999,fontSize:10,fontWeight:700,background:fase.bg,color:fase.color}}>{p.fase}</span>
                    <span style={{padding:'2px 8px',borderRadius:999,fontSize:10,fontWeight:700,background:sem.bg,color:sem.color}}>{p.priorita} · {p.scad}</span>
                    <span style={{padding:'2px 8px',borderRadius:999,fontSize:10,fontWeight:700,background:pc?.bg,color:pc?.text,border:`1px solid ${pc?.border}`}}>{p.resp}</span>
                    <span style={{padding:'2px 8px',borderRadius:999,fontSize:10,color:'#8A8A85',background:'#F4F8F5'}}>prob {p.prob}% · rischio {p.rischio}/10</span>
                  </div>
                  {p.note&&<div style={{fontSize:11,color:'#8A8A85',marginTop:7,lineHeight:1.4,borderTop:'0.5px solid #F0F0EC',paddingTop:7}}>{p.note}</div>}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
