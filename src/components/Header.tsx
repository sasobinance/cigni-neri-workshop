'use client'
const TABS=[
  {id:'presenta',label:'Presenta'},
  {id:'bsc',label:'BSC'},
  {id:'casi',label:'Casi pratici'},
  {id:'sistema',label:'Sistema'},
  {id:'glossario',label:'Glossario'},
  {id:'guida',label:'Guida'},
]
export default function Header({active,onChange}:{active:string;onChange:(t:string)=>void}){
  return(
    <header style={{background:'#fff',position:'sticky',top:0,zIndex:100,borderBottom:'1px solid #E4E4E0'}}>
      <div style={{maxWidth:960,margin:'0 auto',padding:'0 12px'}}>
        <div style={{display:'flex',alignItems:'center',gap:10,height:54}}>
          <img src="/logo.png" alt="logo" style={{width:30,height:30,objectFit:'contain',flexShrink:0}}/>
          <div style={{flexShrink:0}}>
            <div style={{fontSize:12,fontWeight:700,color:'#2A2A2A',lineHeight:1.2}}>I Cigni Neri</div>
            <div style={{fontSize:9,color:'#8A8A85'}}>Workshop</div>
          </div>
          <nav style={{display:'flex',gap:4,flex:1,justifyContent:'flex-end',flexWrap:'wrap'}}>
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>onChange(t.id)} style={{
                padding:'5px 10px',borderRadius:999,fontSize:10,fontWeight:active===t.id?700:500,
                background:active===t.id?(t.id==='presenta'?'#3D3D3D':'#4A7C59'):'transparent',
                color:active===t.id?'#fff':'#8A8A85',
                border:active===t.id?'none':'0.5px solid #E4E4E0',
                transition:'all .15s',fontFamily:'inherit',cursor:'pointer',whiteSpace:'nowrap',
              }}>{t.label}</button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
