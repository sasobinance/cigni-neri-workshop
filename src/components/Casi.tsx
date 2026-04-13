'use client'
import {useState} from 'react'
import {CASI,type CasoStudio} from '@/data/data'

function semColor(s:string){
  if(s==='Scaduto'||s==='Urgente'||s==='Non coperto'||s==='Sovraccarico')return{bg:'#FDECEA',color:'#C0392B'}
  if(s==='Attenzione')return{bg:'#FFF8E1',color:'#9A6B00'}
  return{bg:'#E8F5E9',color:'#2E7D32'}
}

function CasoDetail({c}:{c:CasoStudio}){
  const [step,setStep]=useState(0)
  const steps=[
    {titolo:'Step 1 — View / Filtro',corpo:c.step1,bg:'#E3F2FD',col:'#1565C0'},
    {titolo:'Step 2 — Formula',corpo:c.step2formula,extra:c.step2desc,bg:'#E8F5E9',col:'#2E7D32'},
    {titolo:'Step 3 — Prompt AI',corpo:c.step3prompt,bg:'#EDE7F6',col:'#4527A0'},
    {titolo:'Step 4 — Test rapido',corpo:c.step4,bg:'#FFF8E1',col:'#F57F17'},
  ]

  const colsToShow=c.colonne.slice(0,8)
  const semCol=c.colonne.indexOf('Semaforo')

  return(
    <div>
      {/* Header caso */}
      <div style={{background:'#fff',border:`0.5px solid ${c.colore.border}`,borderLeft:`3px solid ${c.colore.border}`,borderRadius:'0 10px 10px 0',padding:'14px 16px',marginBottom:12}}>
        <div style={{fontSize:10,fontWeight:700,color:c.colore.text,textTransform:'uppercase',letterSpacing:'.07em',marginBottom:4}}>{c.settore}</div>
        <div style={{fontSize:15,fontWeight:700,color:'#2A2A2A',marginBottom:6}}>{c.titolo}</div>
        <div style={{fontSize:12,color:'#8A8A85',lineHeight:1.5,marginBottom:10}}>{c.missione}</div>
        <div style={{background:c.colore.bg,borderRadius:8,padding:'8px 12px',fontSize:12,color:c.colore.text,fontWeight:600}}>
          Problema reale: {c.problemaReale}
        </div>
      </div>

      {/* KPI */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:8,marginBottom:12}}>
        {c.kpi.map((k,i)=>(
          <div key={i} style={{background:'#fff',borderRadius:8,border:'0.5px solid #E4E4E0',padding:'10px 12px'}}>
            <div style={{fontSize:10,color:'#8A8A85',fontWeight:600,marginBottom:3,textTransform:'uppercase',letterSpacing:'.05em'}}>{k.label}</div>
            <div style={{fontSize:18,fontWeight:700,color:'#2A2A2A'}}>{k.valore}</div>
          </div>
        ))}
      </div>

      {/* Tabella dati */}
      <div style={{marginBottom:14}}>
        <div style={{fontSize:10,fontWeight:700,color:'#8A8A85',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:8}}>Dati — prime 10 righe (focus su urgenti)</div>
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {c.righe.map((r,i)=>{
            const sem=String(r['Semaforo']||'Ok')
            const sc=semColor(sem)
            const idKey=Object.keys(r)[0]
            const clienteKey=Object.keys(r)[1]
            const giorni=r['Giorni']!==undefined?Number(r['Giorni']):r['Giorni aging']!==undefined?Number(r['Giorni aging']):null
            return(
              <div key={i} style={{background:'#fff',borderRadius:8,border:`0.5px solid ${sem!=='Ok'?sc.bg:'#E4E4E0'}`,padding:'10px 12px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:6}}>
                  <div>
                    <div style={{fontSize:9,fontFamily:'monospace',color:'#8A8A85'}}>{String(r[idKey])}</div>
                    <div style={{fontSize:13,fontWeight:700,color:'#2A2A2A'}}>{String(r[clienteKey])}</div>
                    {r['Pratica']&&<div style={{fontSize:11,color:'#8A8A85'}}>{String(r['Pratica'])}</div>}
                    {r['Prodotto']&&<div style={{fontSize:11,color:'#8A8A85'}}>{String(r['Prodotto'])}</div>}
                    {r['Progetto']&&<div style={{fontSize:11,color:'#8A8A85'}}>{String(r['Progetto'])}</div>}
                    {r['Trattamento']&&<div style={{fontSize:11,color:'#8A8A85'}}>{String(r['Trattamento'])}</div>}
                    {r['Posizione']&&<div style={{fontSize:11,color:'#8A8A85'}}>{String(r['Posizione'])}</div>}
                    {r['Sito / Intervento']&&<div style={{fontSize:11,color:'#8A8A85'}}>{String(r['Sito / Intervento'])}</div>}
                  </div>
                  <span style={{padding:'3px 10px',borderRadius:999,fontSize:11,fontWeight:700,background:sc.bg,color:sc.color,flexShrink:0,marginLeft:8}}>{sem}</span>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:5,fontSize:10}}>
                  {giorni!==null&&<span style={{padding:'2px 7px',borderRadius:999,background:'#F4F8F5',color:'#4A7C59'}}>Giorni: {giorni}</span>}
                  {r['Responsabile']&&<span style={{padding:'2px 7px',borderRadius:999,background:'#F2F2F0',color:'#8A8A85'}}>{String(r['Responsabile'])}</span>}
                  {r['Rischio']&&<span style={{padding:'2px 7px',borderRadius:999,background:'#F2F2F0',color:'#8A8A85'}}>Rischio: {String(r['Rischio'])}</span>}
                  {r['Importo €']&&<span style={{padding:'2px 7px',borderRadius:999,background:'#F2F2F0',color:'#8A8A85'}}>{String(r['Importo €'])}</span>}
                  {r['Valore €']&&<span style={{padding:'2px 7px',borderRadius:999,background:'#F2F2F0',color:'#8A8A85'}}>{String(r['Valore €'])}</span>}
                  {r['Ricavo €']&&<span style={{padding:'2px 7px',borderRadius:999,background:'#F2F2F0',color:'#8A8A85'}}>{String(r['Ricavo €'])}</span>}
                  {r['Carico %']&&<span style={{padding:'2px 7px',borderRadius:999,background:'#F2F2F0',color:'#8A8A85'}}>Carico: {String(r['Carico %'])}</span>}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Steps guidati */}
      <div style={{fontSize:10,fontWeight:700,color:'#8A8A85',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:8}}>Lab guidato — 4 step</div>
      <div style={{display:'flex',gap:6,marginBottom:10,flexWrap:'wrap'}}>
        {steps.map((s,i)=>(
          <button key={i} onClick={()=>setStep(i)} style={{
            padding:'5px 12px',borderRadius:999,fontSize:11,fontWeight:step===i?700:500,
            background:step===i?s.col:'#F2F2F0',color:step===i?'#fff':'#8A8A85',
            border:'none',cursor:'pointer',fontFamily:'inherit',
          }}>Step {i+1}</button>
        ))}
      </div>
      <div style={{background:'#fff',border:`0.5px solid #E4E4E0`,borderLeft:`3px solid ${steps[step].col}`,borderRadius:'0 10px 10px 0',padding:'14px 16px'}}>
        <div style={{fontSize:12,fontWeight:700,color:steps[step].col,marginBottom:8}}>{steps[step].titolo}</div>
        {step===1?(
          <>
            <div style={{background:'#1E1E1E',borderRadius:8,padding:'12px 14px',fontFamily:'monospace',fontSize:11,color:'#A0D0B0',whiteSpace:'pre-wrap',marginBottom:10,lineHeight:1.6}}>{steps[step].corpo}</div>
            {steps[step].extra&&<div style={{fontSize:12,color:'#3A3A38',lineHeight:1.6}}>{steps[step].extra}</div>}
          </>
        ):step===2?(
          <div>
            <div style={{fontSize:12,color:'#4527A0',lineHeight:1.6,marginBottom:10,fontStyle:'italic'}}>Copia questo prompt su ChatGPT o Claude:</div>
            <div style={{background:'#F4F0FF',borderRadius:8,padding:'12px 14px',fontSize:12,color:'#2A2A2A',lineHeight:1.6,border:'0.5px solid #CE93D8',whiteSpace:'pre-wrap'}}>{steps[step].corpo}</div>
          </div>
        ):(
          <div style={{fontSize:13,color:'#3A3A38',lineHeight:1.7,whiteSpace:'pre-line'}}>{steps[step].corpo}</div>
        )}
      </div>
    </div>
  )
}

export default function Casi(){
  const [active,setActive]=useState(0)
  const c=CASI[active]
  return(
    <div>
      <div style={{marginBottom:14,padding:'12px 14px',background:'#fff',border:'0.5px solid #E4E4E0',borderLeft:'3px solid #4A7C59',borderRadius:'0 10px 10px 0'}}>
        <div style={{fontSize:13,fontWeight:700,color:'#2A2A2A',marginBottom:3}}>Casi pratici — la sorpresa finale</div>
        <div style={{fontSize:12,color:'#8A8A85'}}>Ogni scheda è costruita con gli stessi strumenti del caso BSC — stesso foglio, stessa logica, settore diverso.</div>
      </div>
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:16}}>
        {CASI.map((caso,i)=>(
          <button key={caso.id} onClick={()=>setActive(i)} style={{
            padding:'6px 13px',borderRadius:999,fontSize:11,fontWeight:active===i?700:500,
            background:active===i?caso.colore.bg:'#F2F2F0',
            color:active===i?caso.colore.text:'#8A8A85',
            border:active===i?`1.5px solid ${caso.colore.border}`:'0.5px solid #E0E0DC',
            cursor:'pointer',fontFamily:'inherit',
          }}>{caso.settore}</button>
        ))}
      </div>
      <CasoDetail c={c}/>
    </div>
  )
}
