'use client'
import {useState,useRef,useCallback} from 'react'
import {SLIDES,PRATICHE,DASHBOARD,CASI} from '@/data/data'

const O='#4A7C59',A='#3D3D3D',W='#fff',G='#8A8A85'

function Pill({label,val,danger}:{label:string;val:string;danger?:boolean}){
  return(
    <div style={{background:danger?'#FDECEA':'#E8F0EB',borderRadius:10,padding:'12px 16px',flex:1,minWidth:120}}>
      <div style={{fontSize:10,color:danger?'#C0392B':O,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',marginBottom:4}}>{label}</div>
      <div style={{fontSize:26,fontWeight:700,color:danger?'#C0392B':A}}>{val}</div>
    </div>
  )
}

function SlideCopertina({s}:{s:typeof SLIDES[0]}){
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:A,borderRadius:16,padding:'48px 40px',textAlign:'center'}}>
      <img src="/logo.png" alt="logo" style={{width:72,height:72,objectFit:'contain',marginBottom:28,opacity:.9}}/>
      <div style={{fontSize:32,fontWeight:700,color:W,marginBottom:12,lineHeight:1.2}}>{s.titolo}</div>
      <div style={{fontSize:17,color:'#A0BFA8',marginBottom:10,fontWeight:500}}>{String(s.sottotitolo||'')}</div>
      <div style={{fontSize:13,color:'#888',marginTop:8,maxWidth:480}}>{String(s.corpo||'')}</div>
    </div>
  )
}

function SlideProblema({s}:{s:typeof SLIDES[0]}){
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:11,fontWeight:700,color:O,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:16}}>Il contesto</div>
      <div style={{fontSize:28,fontWeight:700,color:A,marginBottom:20,lineHeight:1.3}}>{s.titolo}</div>
      <div style={{fontSize:16,color:'#3A3A38',lineHeight:1.8,marginBottom:24}}>{String(s.corpo||'')}</div>
      <div style={{background:'#FDECEA',borderRadius:12,padding:'18px 22px',fontSize:17,fontWeight:700,color:'#C0392B',marginBottom:16}}>{String((s as any).highlight||'')}</div>
      <div style={{fontSize:14,color:G,fontStyle:'italic'}}>{String((s as any).domanda||'')}</div>
    </div>
  )
}

function SlideCosèScript({s}:{s:typeof SLIDES[0]}){
  const punti=(s as any).punti as string[]
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:11,fontWeight:700,color:O,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:16}}>Prima di partire</div>
      <div style={{fontSize:26,fontWeight:700,color:A,marginBottom:24}}>{s.titolo}</div>
      <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:24}}>
        {punti.map((p,i)=>(
          <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12}}>
            <div style={{width:24,height:24,borderRadius:99,background:O,color:W,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,flexShrink:0,marginTop:1}}>{i+1}</div>
            <div style={{fontSize:14,color:'#3A3A38',lineHeight:1.6}}>{p}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#E8F0EB',borderRadius:10,padding:'14px 18px',fontSize:15,fontWeight:700,color:'#2D5A3D',borderLeft:`3px solid ${O}`}}>{String((s as any).highlight||'')}</div>
    </div>
  )
}

function SlideCodice({s}:{s:typeof SLIDES[0]}){
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:26,fontWeight:700,color:A,marginBottom:20}}>{s.titolo}</div>
      <div style={{background:'#1E1E1E',borderRadius:10,padding:'20px 24px',fontFamily:'monospace',fontSize:12,color:'#A0D0B0',lineHeight:1.7,overflowX:'auto',whiteSpace:'pre',marginBottom:18}}>
        {String((s as any).codice||'')}
      </div>
      <div style={{fontSize:14,color:'#3A3A38',lineHeight:1.7}}>{String((s as any).spiegazione||'')}</div>
    </div>
  )
}

function SlideBSC({s}:{s:typeof SLIDES[0]}){
  const d=(s as any).dati as Record<string,string>
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:11,fontWeight:700,color:O,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:16}}>Il caso studio</div>
      <div style={{fontSize:26,fontWeight:700,color:A,marginBottom:24}}>{s.titolo}</div>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:22}}>
        <Pill label="Pratiche attive" val={d.pratiche}/>
        <Pill label="Portfolio M&A" val={d.portfolio}/>
        <Pill label="Urgenze" val={d.urgenze} danger/>
        <Pill label="Saturazione team" val={d.saturazione}/>
      </div>
      <div style={{fontSize:15,color:'#3A3A38',lineHeight:1.7}}>{String(s.corpo||'')}</div>
    </div>
  )
}

function SlideColonne({s}:{s:typeof SLIDES[0]}){
  const esempi=(s as any).esempi as {col:string;senza:string}[]
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:26,fontWeight:700,color:A,marginBottom:12}}>{s.titolo}</div>
      <div style={{fontSize:14,color:G,lineHeight:1.6,marginBottom:20}}>{String(s.corpo||'')}</div>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {esempi.map((e,i)=>(
          <div key={i} style={{background:'#FAFAF8',borderRadius:10,padding:'12px 16px',border:'0.5px solid #E4E4E0'}}>
            <div style={{fontSize:13,fontWeight:700,color:O,marginBottom:4,fontFamily:'monospace'}}>{e.col}</div>
            <div style={{fontSize:13,color:'#C0392B'}}><span style={{fontWeight:700}}>Senza: </span>{e.senza}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideFormula({s}:{s:typeof SLIDES[0]}){
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:11,fontWeight:700,color:O,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:16}}>Formula live</div>
      <div style={{fontSize:24,fontWeight:700,color:A,marginBottom:22,lineHeight:1.3}}>{s.titolo}</div>
      <div style={{background:'#1E1E1E',borderRadius:10,padding:'18px 22px',fontFamily:'monospace',fontSize:14,color:'#A0D0B0',marginBottom:18,wordBreak:'break-all',lineHeight:1.6}}>{String((s as any).formula||'')}</div>
      <div style={{fontSize:14,color:'#3A3A38',lineHeight:1.7,marginBottom:14}}>{String((s as any).desc||'')}</div>
      <div style={{background:'#E8F0EB',borderRadius:10,padding:'12px 16px',fontSize:14,fontWeight:600,color:'#2D5A3D',fontStyle:'italic'}}>"{String((s as any).domanda||'')}"</div>
    </div>
  )
}

function SlideFilterView({s}:{s:typeof SLIDES[0]}){
  const steps=(s as any).steps as string[]
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:26,fontWeight:700,color:A,marginBottom:8}}>{s.titolo}</div>
      <div style={{fontSize:16,color:G,marginBottom:22,fontWeight:500}}>{String(s.corpo||'')}</div>
      <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:20}}>
        {steps.map((st,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:26,height:26,borderRadius:99,background:O,color:W,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,flexShrink:0}}>{i+1}</div>
            <div style={{fontSize:14,color:'#3A3A38',fontFamily:st.includes('→')||st.includes('=')?'monospace':'inherit'}}>{st}</div>
          </div>
        ))}
      </div>
      <div style={{background:A,borderRadius:10,padding:'14px 18px',fontSize:15,color:'#E8F0EB',fontStyle:'italic'}}>{String((s as any).highlight||'')}</div>
    </div>
  )
}

function SlideRedistribuzione({s}:{s:typeof SLIDES[0]}){
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:11,fontWeight:700,color:O,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:16}}>Automazione avanzata</div>
      <div style={{fontSize:26,fontWeight:700,color:A,marginBottom:18}}>{s.titolo}</div>
      <div style={{fontSize:15,color:'#3A3A38',lineHeight:1.8,marginBottom:16}}>{String(s.corpo||'')}</div>
      <div style={{background:'#FFF8E1',borderRadius:10,padding:'12px 16px',fontSize:13,color:'#9A6B00',fontWeight:600,borderLeft:'3px solid #F0D080',marginBottom:12}}>{String((s as any).alert||'')}</div>
      <div style={{fontSize:14,color:G,fontStyle:'italic'}}>"{String((s as any).domanda||'')}"</div>
    </div>
  )
}

function SlideWow({s}:{s:typeof SLIDES[0]}){
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:A,borderRadius:16,padding:'48px 40px',textAlign:'center'}}>
      <div style={{fontSize:11,fontWeight:700,color:'#A0BFA8',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:20}}>Momento WOW</div>
      <div style={{fontSize:28,fontWeight:700,color:W,marginBottom:16}}>{s.titolo}</div>
      <div style={{fontSize:16,color:'#ccc',marginBottom:28,lineHeight:1.6}}>{String(s.corpo||'')}</div>
      <div style={{background:O,borderRadius:14,padding:'22px 40px',fontSize:24,fontWeight:700,color:W,marginBottom:18}}>{String((s as any).highlight||'')}</div>
      <div style={{fontSize:13,color:'#888',fontStyle:'italic'}}>{String((s as any).sub||'')}</div>
    </div>
  )
}

function SlideScoring({s}:{s:typeof SLIDES[0]}){
  const pesi=(s as any).pesi as {label:string;pct:string}[]
  const colors=['#C0392B','#9A6B00',O,'#3D3D3D']
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:W,borderRadius:16,padding:'40px',border:'0.5px solid #E4E4E0'}}>
      <div style={{fontSize:11,fontWeight:700,color:O,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:16}}>Livello 3</div>
      <div style={{fontSize:24,fontWeight:700,color:A,marginBottom:18}}>{s.titolo}</div>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:16}}>
        {pesi.map((p,i)=>(
          <div key={i} style={{flex:1,minWidth:120,background:'#FAFAF8',borderRadius:8,padding:'10px 12px',borderLeft:`3px solid ${colors[i]}`}}>
            <div style={{fontSize:10,color:colors[i],fontWeight:700,marginBottom:4}}>{p.pct}</div>
            <div style={{fontSize:12,color:'#3A3A38'}}>{p.label}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#1E1E1E',borderRadius:10,padding:'14px 18px',fontFamily:'monospace',fontSize:11,color:'#A0D0B0',wordBreak:'break-all',lineHeight:1.6,marginBottom:12}}>{String((s as any).formula||'')}</div>
      <div style={{fontSize:13,color:G}}>{String(s.corpo||'')}</div>
    </div>
  )
}

function SlideSorpresa(){
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:A,borderRadius:16,padding:'40px',textAlign:'center'}}>
      <div style={{fontSize:11,fontWeight:700,color:'#A0BFA8',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:20}}>La sorpresa</div>
      <div style={{fontSize:28,fontWeight:700,color:W,marginBottom:16}}>Adesso tocca a voi</div>
      <div style={{fontSize:15,color:'#ccc',lineHeight:1.7,marginBottom:28,maxWidth:500,margin:'0 auto 28px'}}>La stessa logica che avete visto su Black Swan Capital funziona in qualsiasi settore. Abbiamo preparato un file per ognuno di voi.</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,maxWidth:600,margin:'0 auto'}}>
        {CASI.map(c=>(
          <div key={c.id} style={{background:c.colore.bg,borderRadius:10,padding:'12px',border:`1px solid ${c.colore.border}`}}>
            <div style={{fontSize:11,fontWeight:700,color:c.colore.text}}>{c.settore}</div>
            <div style={{fontSize:10,color:c.colore.text,opacity:.7,marginTop:2}}>{c.titolo}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:24,fontSize:18,fontWeight:700,color:O}}>Aprite il vostro foglio.</div>
    </div>
  )
}

function SlideChiusura({s}:{s:typeof SLIDES[0]}){
  const items=(s as any).items as string[]
  return(
    <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',background:O,borderRadius:16,padding:'40px'}}>
      <div style={{fontSize:11,fontWeight:700,color:'#A0D0B0',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:16}}>Per concludere</div>
      <div style={{fontSize:26,fontWeight:700,color:W,marginBottom:24}}>{s.titolo}</div>
      <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:28}}>
        {items.map((item,i)=>(
          <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12}}>
            <div style={{width:8,height:8,borderRadius:99,background:'rgba(255,255,255,0.6)',flexShrink:0,marginTop:6}}/>
            <div style={{fontSize:15,color:'#E8F0EB'}}>{item}</div>
          </div>
        ))}
      </div>
      <div style={{background:'rgba(255,255,255,0.15)',borderRadius:10,padding:'18px 22px',fontSize:16,color:W,fontStyle:'italic',lineHeight:1.6}}>"{String((s as any).frase||'')}"</div>
    </div>
  )
}

function renderSlide(s:typeof SLIDES[0]){
  switch(s.tipo){
    case 'copertina': return <SlideCopertina s={s}/>
    case 'problema': return <SlideProblema s={s}/>
    case 'cosè_script': return <SlideCosèScript s={s}/>
    case 'come_funziona': return <SlideCodice s={s}/>
    case 'bsc_intro': return <SlideBSC s={s}/>
    case 'colonne': return <SlideColonne s={s}/>
    case 'formula_giorni':
    case 'formula_semaforo': return <SlideFormula s={s}/>
    case 'filterview': return <SlideFilterView s={s}/>
    case 'redistribuzione': return <SlideRedistribuzione s={s}/>
    case 'wow': return <SlideWow s={s}/>
    case 'scoring': return <SlideScoring s={s}/>
    case 'sorpresa': return <SlideSorpresa/>
    case 'chiusura': return <SlideChiusura s={s}/>
    default: return <div style={{padding:40,fontSize:18,color:A}}>{s.titolo}</div>
  }
}

export default function Presentazione(){
  const [cur,setCur]=useState(0)
  const [fs,setFs]=useState(false)
  const containerRef=useRef<HTMLDivElement>(null)
  const VISIBLE=SLIDES.filter(s=>s.tipo!=='wow')
  const total=VISIBLE.length
  const s=VISIBLE[cur]

  const toggleFullscreen=useCallback(()=>{
    if(!document.fullscreenElement){
      containerRef.current?.requestFullscreen().then(()=>setFs(true))
    } else {
      document.exitFullscreen().then(()=>setFs(false))
    }
  },[])

  const prev=()=>setCur(c=>Math.max(0,c-1))
  const next=()=>setCur(c=>Math.min(total-1,c+1))

  const handleKey=(e:React.KeyboardEvent)=>{
    if(e.key==='ArrowRight'||e.key==='ArrowDown') next()
    if(e.key==='ArrowLeft'||e.key==='ArrowUp') prev()
  }

  return(
    <div
      ref={containerRef}
      onKeyDown={handleKey}
      tabIndex={0}
      style={{
        outline:'none',
        background:fs?A:'transparent',
        display:'flex',
        flexDirection:'column',
        height:fs?'100vh':'auto',
        padding:fs?'20px':'0',
        overflow:'hidden',
      }}
    >
      {/* Slide — occupa tutto lo spazio disponibile in fullscreen */}
      <div style={{flex:1,minHeight:0,marginBottom:fs?12:14,display:'flex',flexDirection:'column'}}>
        <div style={{
          flex:1,
          minHeight:0,
          display:'flex',
          flexDirection:'column',
          borderRadius:16,
          overflow:'hidden',
        }}>
          {renderSlide(s)}
        </div>
      </div>

      {/* Controlli */}
      <div style={{display:'flex',alignItems:'center',gap:10,flexShrink:0}}>
        <button onClick={prev} disabled={cur===0} style={{
          padding:'8px 18px',borderRadius:999,fontSize:12,fontWeight:600,
          background:cur===0?'rgba(255,255,255,0.1)':fs?'rgba(255,255,255,0.2)':A,
          color:cur===0?'#888':W,
          border:'none',cursor:cur===0?'default':'pointer',fontFamily:'inherit',flexShrink:0,
        }}>← Indietro</button>

        <div style={{flex:1,height:4,background:fs?'rgba(255,255,255,0.2)':'#E4E4E0',borderRadius:99,overflow:'hidden'}}>
          <div style={{width:`${((cur+1)/total)*100}%`,height:'100%',background:O,borderRadius:99,transition:'width .2s'}}/>
        </div>

        <span style={{fontSize:11,color:fs?'rgba(255,255,255,0.6)':G,flexShrink:0}}>{cur+1}/{total}</span>

        <button onClick={toggleFullscreen} style={{
          padding:'7px 14px',borderRadius:999,fontSize:11,fontWeight:600,
          background:fs?'rgba(255,255,255,0.15)':'#E8F0EB',
          color:fs?W:O,border:'none',cursor:'pointer',fontFamily:'inherit',flexShrink:0,
        }}>{fs?'✕ Esci':'⛶ Schermo intero'}</button>

        <button onClick={next} disabled={cur===total-1} style={{
          padding:'8px 18px',borderRadius:999,fontSize:12,fontWeight:600,
          background:cur===total-1?'rgba(255,255,255,0.1)':O,
          color:cur===total-1?'#888':W,
          border:'none',cursor:cur===total-1?'default':'pointer',fontFamily:'inherit',flexShrink:0,
        }}>Avanti →</button>
      </div>

      {/* Indice — nascosto in fullscreen */}
      {!fs&&(
        <div style={{display:'flex',flexWrap:'wrap',gap:5,marginTop:10}}>
          {VISIBLE.map((sl,i)=>(
            <button key={i} onClick={()=>setCur(i)} style={{
              padding:'3px 9px',borderRadius:999,fontSize:9,fontWeight:cur===i?700:400,
              background:cur===i?O:'#F2F2F0',color:cur===i?W:G,
              border:'none',cursor:'pointer',fontFamily:'inherit',
            }}>{i+1}. {sl.titolo}</button>
          ))}
        </div>
      )}
    </div>
  )
}
