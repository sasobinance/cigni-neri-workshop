'use client'
import {useState} from 'react'
import Header from '@/components/Header'
import Presentazione from '@/components/Presentazione'
import BSC from '@/components/BSC'
import Casi from '@/components/Casi'
import Sistema from '@/components/Sistema'
import {Glossario,Guida} from '@/components/GlossarioGuida'

export default function Home(){
  const [tab,setTab]=useState('presenta')
  return(
    <>
      <Header active={tab} onChange={setTab}/>
      <main style={{maxWidth:920,margin:'0 auto',padding:'18px 14px 80px'}}>
        {tab==='presenta'  && <Presentazione/>}
        {tab==='bsc'       && <BSC/>}
        {tab==='casi'      && <Casi/>}
        {tab==='sistema'   && <Sistema/>}
        {tab==='glossario' && <Glossario/>}
        {tab==='guida'     && <Guida/>}
      </main>
    </>
  )
}
