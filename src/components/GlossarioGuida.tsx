'use client'
import {useState} from 'react'
import {GLOSSARIO_MA,GLOSSARIO_SHEETS,GUIDA} from '@/data/data'

export function Glossario(){
  const [open,setOpen]=useState<string|null>(null)
  const [tab,setTab]=useState<'ma'|'sheets'>('ma')
  const lista=tab==='ma'?GLOSSARIO_MA:GLOSSARIO_SHEETS
  return(
    <div>
      <div style={{display:'flex',gap:6,marginBottom:14}}>
        <button onClick={()=>setTab('ma')} style={{padding:'6px 14px',borderRadius:999,fontSize:11,fontWeight:tab==='ma'?700:500,background:tab==='ma'?'#4A7C59':'#F2F2F0',color:tab==='ma'?'#fff':'#8A8A85',border:'none',cursor:'pointer',fontFamily:'inherit'}}>Termini M&A</button>
        <button onClick={()=>setTab('sheets')} style={{padding:'6px 14px',borderRadius:999,fontSize:11,fontWeight:tab==='sheets'?700:500,background:tab==='sheets'?'#4A7C59':'#F2F2F0',color:tab==='sheets'?'#fff':'#8A8A85',border:'none',cursor:'pointer',fontFamily:'inherit'}}>Termini Sheets</button>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:7}}>
        {lista.map((g,i)=>{
          const k=`${tab}-${i}`
          const isO=open===k
          return(
            <div key={k} style={{background:'#fff',borderRadius:10,border:isO?'1.5px solid #4A7C59':'0.5px solid #E4E4E0',overflow:'hidden'}}>
              <button onClick={()=>setOpen(isO?null:k)} style={{width:'100%',textAlign:'left',padding:'12px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',background:isO?'#F4F8F5':'none',cursor:'pointer',fontFamily:'inherit'}}>
                <span style={{fontSize:13,fontWeight:700,color:'#2A2A2A'}}>{g.termine}</span>
                <span style={{fontSize:18,color:'#4A7C59',flexShrink:0,marginLeft:8}}>{isO?'−':'+'}</span>
              </button>
              {isO&&(
                <div style={{padding:'0 14px 14px',display:'flex',flexDirection:'column',gap:8}}>
                  <div style={{background:'#F4F8F5',borderRadius:8,padding:'10px 12px'}}>
                    <div style={{fontSize:10,fontWeight:700,color:'#4A7C59',marginBottom:4,textTransform:'uppercase',letterSpacing:'.06em'}}>{tab==='ma'?'In parole semplici':'Cosa fa'}</div>
                    <div style={{fontSize:13,color:'#3A3A38',lineHeight:1.6}}>{g.semplice}</div>
                  </div>
                  <div style={{background:'#FDECEA',borderRadius:8,padding:'10px 12px'}}>
                    <div style={{fontSize:10,fontWeight:700,color:'#C0392B',marginBottom:4,textTransform:'uppercase',letterSpacing:'.06em'}}>{tab==='ma'?'Se gestito male':'Quando usarlo'}</div>
                    <div style={{fontSize:13,color:'#C0392B',lineHeight:1.6}}>{'rischio' in g?g.rischio:('quando' in g?(g as any).quando:'')}</div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Guida(){
  const [open,setOpen]=useState(0)
  return(
    <div>
      <div style={{marginBottom:14,padding:'12px 14px',background:'#fff',borderLeft:'3px solid #4A7C59',borderRadius:'0 10px 10px 0'}}>
        <div style={{fontSize:13,fontWeight:700,color:'#2A2A2A',marginBottom:3}}>Guida conduttore — 8 fasi</div>
        <div style={{fontSize:12,color:'#8A8A85'}}>Scaletta dettagliata con cosa fai tu, cosa fanno loro e la domanda da porre al gruppo.</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        {GUIDA.map((g,i)=>{
          const isO=open===i
          return(
            <div key={i} style={{background:'#fff',borderRadius:10,border:isO?'1.5px solid #4A7C59':'0.5px solid #E4E4E0',overflow:'hidden'}}>
              <button onClick={()=>setOpen(isO?-1:i)} style={{width:'100%',textAlign:'left',padding:'12px 14px',display:'flex',alignItems:'center',gap:10,background:isO?'#4A7C59':'#fff',cursor:'pointer',fontFamily:'inherit',transition:'background .15s'}}>
                <span style={{width:26,height:26,borderRadius:99,flexShrink:0,background:isO?'rgba(255,255,255,0.2)':'#E8F0EB',color:isO?'#fff':'#4A7C59',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700}}>{i+1}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:700,color:isO?'#fff':'#2A2A2A'}}>{g.fase}</div>
                  <div style={{fontSize:11,color:isO?'rgba(255,255,255,.7)':'#8A8A85'}}>{g.durata}</div>
                </div>
                <span style={{fontSize:16,color:isO?'#fff':'#4A7C59'}}>{isO?'−':'+'}</span>
              </button>
              {isO&&(
                <div style={{padding:'12px 14px',display:'flex',flexDirection:'column',gap:9}}>
                  <div style={{background:'#FAFAF9',borderRadius:8,padding:'10px 12px',border:'0.5px solid #E4E4E0'}}>
                    <div style={{fontSize:10,fontWeight:700,color:'#3D3D3D',marginBottom:5,textTransform:'uppercase',letterSpacing:'.06em'}}>Tu fai</div>
                    <div style={{fontSize:13,color:'#3A3A38',lineHeight:1.7,whiteSpace:'pre-line'}}>{g.tuFai}</div>
                  </div>
                  <div style={{background:'#E8F0EB',borderRadius:8,padding:'10px 12px'}}>
                    <div style={{fontSize:10,fontWeight:700,color:'#2D5A3D',marginBottom:5,textTransform:'uppercase',letterSpacing:'.06em'}}>Loro fanno</div>
                    <div style={{fontSize:13,color:'#2D5A3D',lineHeight:1.7,whiteSpace:'pre-line'}}>{g.loroFanno}</div>
                  </div>
                  <div style={{background:'#3D3D3D',borderRadius:8,padding:'10px 12px'}}>
                    <div style={{fontSize:10,fontWeight:700,color:'#A0BFA8',marginBottom:4,textTransform:'uppercase',letterSpacing:'.06em'}}>Domanda al gruppo</div>
                    <div style={{fontSize:13,color:'#E8F0EB',lineHeight:1.6,fontStyle:'italic'}}>"{g.domanda}"</div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
