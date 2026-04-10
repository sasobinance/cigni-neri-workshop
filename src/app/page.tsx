'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Presentazione from '@/components/Presentazione'
import Dashboard from '@/components/Dashboard'
import Pipeline from '@/components/Pipeline'
import Sistema from '@/components/Sistema'
import Glossario from '@/components/Glossario'
import Guida from '@/components/Guida'

export default function Home() {
  const [tab, setTab] = useState('presentazione')
  return (
    <>
      <Header active={tab} onChange={setTab} />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '20px 16px 80px' }}>
        {tab === 'presentazione' && <Presentazione />}
        {tab === 'dashboard'     && <Dashboard />}
        {tab === 'pipeline'      && <Pipeline />}
        {tab === 'sistema'       && <Sistema />}
        {tab === 'glossario'     && <Glossario />}
        {tab === 'guida'         && <Guida />}
      </main>
    </>
  )
}
