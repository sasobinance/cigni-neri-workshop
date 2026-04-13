// ── TIPI ────────────────────────────────────────────────────
export type Pratica = {
  id:string; cliente:string; tipo:string; valore:string; fase:string
  resp:string; scad:string; fee:string; note:string
  priorita:string; peso:number; prob:number; rischio:number; score:number
}

export type TeamMember = {
  nome:string; stato:'Attivo'|'Assente'
  capacitaMax:number; caricoAttuale:number; taskAperte:number
  saturazionePct:number; semaforoTeam:string
}

export type CasoRow = Record<string, string|number>

export type CasoStudio = {
  id:string
  titolo:string
  settore:string
  missione:string
  problemaReale:string
  colore:{ bg:string; text:string; border:string }
  kpi:{ label:string; valore:string }[]
  colonne:string[]
  righe:CasoRow[]
  step1:string
  step2formula:string
  step2desc:string
  step3prompt:string
  step4:string
}

// ── COLORI PROFILI ───────────────────────────────────────────
export const PILL_COLORS: Record<string,{bg:string;text:string;border:string}> = {
  Saso:      {bg:'#E8F0EB',text:'#2D5A3D',border:'#4A7C59'},
  Giampaolo: {bg:'#EDF2EE',text:'#2D5A3D',border:'#6A9B7A'},
  Gianluca:  {bg:'#F0F5F1',text:'#2D5A3D',border:'#7AAB8A'},
  Francesco: {bg:'#E8F0EB',text:'#2D5A3D',border:'#4A7C59'},
  Camillo:   {bg:'#EDF2EE',text:'#2D5A3D',border:'#6A9B7A'},
  Carlo:     {bg:'#F0F5F1',text:'#2D5A3D',border:'#7AAB8A'},
  Graziano:  {bg:'#E8F0EB',text:'#2D5A3D',border:'#4A7C59'},
}

export const NOMI = ['Saso','Giampaolo','Gianluca','Francesco','Camillo','Carlo','Graziano']

// ── PIPELINE BSC ─────────────────────────────────────────────
export const PRATICHE: Pratica[] = [
  {id:'BSC-001',cliente:'Gruppo Ferretti SpA',tipo:'Acquisizione industriale',valore:'€340M',fase:'Due Diligence',resp:'Saso',scad:'22/04/2026',fee:'€2K',note:'DD legale + tecnica in corso',priorita:'Urgentissimo',peso:3,prob:75,rischio:4,score:69},
  {id:'BSC-002',cliente:'Blackstone Real Estate',tipo:'Portfolio immobiliare',valore:'€680M',fase:'Signing',resp:'Giampaolo',scad:'15/05/2026',fee:'€3K',note:'Closing imminente',priorita:'Attenzione',peso:1,prob:88,rischio:2,score:87},
  {id:'BSC-003',cliente:'Famiglia Albrizzi',tipo:'Exit partecipazione SPA',valore:'€95M',fase:'Term Sheet',resp:'Gianluca',scad:'28/04/2026',fee:'€0K',note:'Trattativa riservata famiglia',priorita:'Critico',peso:2,prob:70,rischio:4,score:60},
  {id:'BSC-004',cliente:'TechVenture SGR',tipo:'Merger SaaS + FinTech',valore:'€210M',fase:'Due Diligence',resp:'Francesco',scad:'12/05/2026',fee:'€1K',note:'Due diligence IT critica',priorita:'Attenzione',peso:1,prob:65,rischio:5,score:61},
  {id:'BSC-005',cliente:'Dinastia Morselli',tipo:'Passaggio generazionale',valore:'€520M',fase:'Onboarding',resp:'Camillo',scad:'30/07/2026',fee:'€3K',note:'Cliente HNWI — massima riservatezza',priorita:'Ok',peso:1,prob:80,rischio:3,score:78},
  {id:'BSC-006',cliente:'Orion Capital Partners',tipo:'Leveraged buyout',valore:'€175M',fase:'Closing',resp:'Carlo',scad:'26/04/2026',fee:'€1K',note:'Finanziamento sindacato quasi chiuso',priorita:'Critico',peso:2,prob:68,rischio:5,score:68},
  {id:'BSC-007',cliente:'Investimenti Lombardi',tipo:'Acquisizione PMI manifattura',valore:'€48M',fase:"Lettera d'intenti",resp:'Graziano',scad:'01/06/2026',fee:'€0K',note:'Prima operazione cliente',priorita:'Ok',peso:1,prob:55,rischio:7,score:50},
  {id:'BSC-008',cliente:'Mediobanca Private',tipo:'Carve-out divisione retail',valore:'€290M',fase:'Negoziazione',resp:'Saso',scad:'30/05/2026',fee:'€1K',note:'Spinoff da holding quotata',priorita:'Ok',peso:1,prob:72,rischio:4,score:65},
  {id:'BSC-009',cliente:'FondoNext Italia',tipo:'Club deal infrastrutture',valore:'€415M',fase:'Due Diligence',resp:'Giampaolo',scad:'15/06/2026',fee:'€2K',note:'Co-investitori internazionali',priorita:'Ok',peso:1,prob:70,rischio:4,score:67},
  {id:'BSC-010',cliente:'Studio Legale Conti',tipo:'Joint venture legale',valore:'€22M',fase:'Term Sheet',resp:'Gianluca',scad:'20/05/2026',fee:'€0K',note:'Partnership strategica',priorita:'Ok',peso:1,prob:60,rischio:6,score:57},
  {id:'BSC-011',cliente:'Luxoro Holding SA',tipo:'Acquisizione brand moda',valore:'€180M',fase:'Signing',resp:'Francesco',scad:'30/04/2026',fee:'€1K',note:'Brand toscano premium',priorita:'Critico',peso:2,prob:60,rischio:6,score:65},
  {id:'BSC-012',cliente:'Energia Verde SpA',tipo:'M&A rinnovabili',valore:'€320M',fase:'Due Diligence',resp:'Camillo',scad:'25/05/2026',fee:'€2K',note:'Portafoglio fotovoltaico',priorita:'Ok',peso:1,prob:66,rischio:5,score:64},
  {id:'BSC-013',cliente:'Gruppo GDO Italmarket',tipo:'Acquisizione catena GDO',valore:'€560M',fase:'Negoziazione',resp:'Carlo',scad:'30/06/2026',fee:'€3K',note:'Operazione complessa — antitrust',priorita:'Ok',peso:1,prob:55,rischio:8,score:53},
  {id:'BSC-014',cliente:'PE Fund Adriatico',tipo:'Secondary buyout',valore:'€195M',fase:'Term Sheet',resp:'Graziano',scad:'01/07/2026',fee:'€1K',note:'Uscita fondo precedente',priorita:'Ok',peso:1,prob:74,rischio:4,score:62},
  {id:'BSC-015',cliente:'Cantieri Navali Trieste',tipo:'Fusione per incorporazione',valore:'€430M',fase:'Onboarding',resp:'Saso',scad:'01/08/2026',fee:'€2K',note:'Operazione sindacale delicata',priorita:'Ok',peso:1,prob:80,rischio:3,score:63},
  {id:'BSC-016',cliente:'Banca Regionale Centro',tipo:'Cessione sportello ATM',valore:'€18M',fase:'Closing',resp:'Giampaolo',scad:'25/04/2026',fee:'€0K',note:'Operazione minore',priorita:'Urgentissimo',peso:3,prob:90,rischio:2,score:90},
  {id:'BSC-017',cliente:'Healthcare Partners',tipo:'Roll-up cliniche private',valore:'€240M',fase:'Due Diligence',resp:'Gianluca',scad:'20/06/2026',fee:'€1K',note:'DD regolatoria settore sanitario',priorita:'Ok',peso:1,prob:62,rischio:6,score:58},
  {id:'BSC-018',cliente:'Immobiliare Venezia Srl',tipo:'Sale & leaseback',valore:'€67M',fase:"Lettera d'intenti",resp:'Francesco',scad:'10/06/2026',fee:'€0K',note:'Hotel 5 stelle centro storico',priorita:'Ok',peso:1,prob:74,rischio:4,score:60},
  {id:'BSC-019',cliente:'Distillerie Meridionali',tipo:'Acquisizione brand spirits',valore:'€115M',fase:'Term Sheet',resp:'Camillo',scad:'18/05/2026',fee:'€1K',note:'Buyer internazionale interessato',priorita:'Attenzione',peso:1,prob:58,rischio:6,score:61},
  {id:'BSC-020',cliente:'Software House Torino',tipo:'Strategic investment SaaS',valore:'€38M',fase:'Onboarding',resp:'Carlo',scad:'15/07/2026',fee:'€0K',note:'VC lead + round B',priorita:'Ok',peso:1,prob:55,rischio:7,score:50},
  {id:'BSC-021',cliente:'Farmaceutica Gelli SpA',tipo:'Fusione laboratori',valore:'€285M',fase:'Due Diligence',resp:'Graziano',scad:'05/05/2026',fee:'€1K',note:'Autorizzazioni AIFA necessarie',priorita:'Attenzione',peso:1,prob:63,rischio:5,score:69},
  {id:'BSC-022',cliente:'Consorzio Agri Piemonte',tipo:'Acquisizione cooperativa',valore:'€42M',fase:'Negoziazione',resp:'Saso',scad:'25/06/2026',fee:'€0K',note:'Struttura cooperativistica complessa',priorita:'Ok',peso:1,prob:74,rischio:4,score:55},
  {id:'BSC-023',cliente:'Hedge Fund Zurigo',tipo:'Acquisizione NPL portfolio',valore:'€890M',fase:'Signing',resp:'Giampaolo',scad:'28/04/2026',fee:'€4K',note:'Operazione cross-border',priorita:'Critico',peso:2,prob:82,rischio:3,score:86},
  {id:'BSC-024',cliente:'Albergo Diffuso Puglia',tipo:'Cessione catena hospitality',valore:'€78M',fase:"Lettera d'intenti",resp:'Gianluca',scad:'10/07/2026',fee:'€0K',note:'Turismo premium',priorita:'Ok',peso:1,prob:70,rischio:4,score:55},
  {id:'BSC-025',cliente:'Costruzioni Padana SpA',tipo:'Carve-out divisione B2B',valore:'€145M',fase:'Onboarding',resp:'Francesco',scad:'20/08/2026',fee:'€1K',note:'Separazione societaria complessa',priorita:'Ok',peso:1,prob:60,rischio:6,score:51},
  {id:'BSC-026',cliente:'Family Office Marchetti',tipo:'Riassetto holding familiare',valore:'€310M',fase:'Term Sheet',resp:'Camillo',scad:'22/05/2026',fee:'€2K',note:'4 rami familiari — governance',priorita:'Ok',peso:1,prob:74,rischio:4,score:68},
  {id:'BSC-027',cliente:'Porto Franco Trieste SpA',tipo:'Privatizzazione parziale',valore:'€670M',fase:'Due Diligence',resp:'Carlo',scad:'30/05/2026',fee:'€3K',note:'Operazione pubblica — sensibile',priorita:'Ok',peso:1,prob:60,rischio:7,score:65},
  {id:'BSC-028',cliente:'Startup Mobility Roma',tipo:'Seed + convertibile',valore:'€12M',fase:'Closing',resp:'Graziano',scad:'30/04/2026',fee:'€0K',note:'Closing rapido',priorita:'Critico',peso:2,prob:55,rischio:7,score:73},
  {id:'BSC-029',cliente:'Ceramiche Vietri Srl',tipo:'Acquisizione artigianato',valore:'€29M',fase:"Lettera d'intenti",resp:'Saso',scad:'20/07/2026',fee:'€0K',note:'Brand storico',priorita:'Ok',peso:1,prob:70,rischio:5,score:50},
  {id:'BSC-030',cliente:'RE Fund Milano Centro',tipo:'Portfolio uffici direzionali',valore:'€490M',fase:'Negoziazione',resp:'Giampaolo',scad:'05/06/2026',fee:'€2K',note:'12 immobili, valorizzazione',priorita:'Ok',peso:1,prob:76,rischio:3,score:73},
]

// ── TEAM ─────────────────────────────────────────────────────
export const TEAM: TeamMember[] = [
  {nome:'Saso',      stato:'Attivo',capacitaMax:10,caricoAttuale:7,taskAperte:5,saturazionePct:70,semaforoTeam:'Ok'},
  {nome:'Giampaolo', stato:'Attivo',capacitaMax:10,caricoAttuale:8,taskAperte:5,saturazionePct:80,semaforoTeam:'Attenzione'},
  {nome:'Gianluca',  stato:'Attivo',capacitaMax:10,caricoAttuale:5,taskAperte:4,saturazionePct:50,semaforoTeam:'Ok'},
  {nome:'Francesco', stato:'Attivo',capacitaMax:10,caricoAttuale:5,taskAperte:4,saturazionePct:50,semaforoTeam:'Ok'},
  {nome:'Camillo',   stato:'Attivo',capacitaMax:10,caricoAttuale:4,taskAperte:4,saturazionePct:40,semaforoTeam:'Ok'},
  {nome:'Carlo',     stato:'Attivo',capacitaMax:10,caricoAttuale:5,taskAperte:4,saturazionePct:50,semaforoTeam:'Ok'},
  {nome:'Graziano',  stato:'Attivo',capacitaMax:10,caricoAttuale:5,taskAperte:4,saturazionePct:50,semaforoTeam:'Ok'},
]

// ── REDISTRIBUZIONE PREVIEW ───────────────────────────────────
export const REDISTRIB: {id:string;cliente:string;da:string;a:string;priorita:string;peso:number;caricoPost:number;satPost:string}[] = [
  {id:'BSC-001',cliente:'Gruppo Ferretti SpA',da:'Saso',a:'—',priorita:'Urgentissimo',peso:3,caricoPost:0,satPost:'nessun assegnatario'},
  {id:'BSC-008',cliente:'Mediobanca Private',da:'Saso',a:'Carlo',priorita:'Ok',peso:1,caricoPost:6,satPost:'60%'},
  {id:'BSC-022',cliente:'Consorzio Agri Piemonte',da:'Saso',a:'Francesco',priorita:'Ok',peso:1,caricoPost:6,satPost:'60%'},
  {id:'BSC-029',cliente:'Ceramiche Vietri Srl',da:'Saso',a:'Gianluca',priorita:'Ok',peso:1,caricoPost:6,satPost:'60%'},
  {id:'BSC-015',cliente:'Cantieri Navali Trieste',da:'Saso',a:'Graziano',priorita:'Ok',peso:1,caricoPost:6,satPost:'60%'},
]

// ── DASHBOARD ────────────────────────────────────────────────
export const DASHBOARD = {
  pratiche_urgenti:7, urgentissimo:2, critico:5,
  team_attenzione:1, sovraccarichi:0, assenti:0,
  saturazione_media:55.7,
  top_urgenze:[
    {id:'BSC-001',cliente:'Gruppo Ferretti SpA',priorita:'Urgentissimo',scad:'22/04/2026',resp:'Saso'},
    {id:'BSC-016',cliente:'Banca Regionale Centro',priorita:'Urgentissimo',scad:'25/04/2026',resp:'Giampaolo'},
    {id:'BSC-006',cliente:'Orion Capital Partners',priorita:'Critico',scad:'26/04/2026',resp:'Carlo'},
    {id:'BSC-003',cliente:'Famiglia Albrizzi',priorita:'Critico',scad:'28/04/2026',resp:'Gianluca'},
    {id:'BSC-023',cliente:'Hedge Fund Zurigo',priorita:'Critico',scad:'28/04/2026',resp:'Giampaolo'},
    {id:'BSC-011',cliente:'Luxoro Holding SA',priorita:'Critico',scad:'30/04/2026',resp:'Francesco'},
    {id:'BSC-028',cliente:'Startup Mobility Roma',priorita:'Critico',scad:'30/04/2026',resp:'Graziano'},
  ]
}

// ── CASI PRATICI ─────────────────────────────────────────────
export const CASI: CasoStudio[] = [
  {
    id:'avvocato',
    titolo:'Scadenze Pratiche & Rischio',
    settore:'Studio legale',
    missione:'Individuare pratiche scadute o imminenti e costruire una vista legale giornaliera che diventa alert automatico.',
    problemaReale:'Serve analizzare subito pratiche scadute o ad alto rischio per capire dove si concentra il rischio operativo.',
    colore:{bg:'#E3F2FD',text:'#1565C0',border:'#90CAF9'},
    kpi:[{label:'Righe totali',valore:'20'},{label:'Scadute',valore:'8'},{label:'Entro 3 giorni',valore:'4'},{label:'Rischio alto',valore:'8'}],
    colonne:['ID','Cliente','Pratica','Tipologia','Scadenza','Stato','Priorità','Responsabile','Ultimo update','Rischio','Giorni','Semaforo'],
    righe:[
      {ID:'LAW-001',Cliente:'Alfa Srl',Pratica:'Ricorso TAR Alfa',Tipologia:'Contenzioso',Scadenza:'08/04/2026',Stato:'Aperta',Priorità:'Alta',Responsabile:'Avv. Vitale',Rischio:'Alto',Giorni:-5,Semaforo:'Scaduto'},
      {ID:'LAW-002',Cliente:'Beta Spa',Pratica:'Parere Beta',Tipologia:'Contrattualistica',Scadenza:'11/04/2026',Stato:'In revisione',Priorità:'Media',Responsabile:'Avv. Neri',Rischio:'Medio',Giorni:-2,Semaforo:'Scaduto'},
      {ID:'LAW-003',Cliente:'Delta Srl',Pratica:'Udienza Delta',Tipologia:'Civile',Scadenza:'10/04/2026',Stato:'Aperta',Priorità:'Alta',Responsabile:'Avv. Vitale',Rischio:'Alto',Giorni:-3,Semaforo:'Scaduto'},
      {ID:'LAW-004',Cliente:'Lambda Spa',Pratica:'M&A Due Diligence',Tipologia:'Corporate',Scadenza:'16/04/2026',Stato:'In corso',Priorità:'Alta',Responsabile:'Avv. Bassi',Rischio:'Medio',Giorni:3,Semaforo:'Urgente'},
      {ID:'LAW-005',Cliente:'Epsilon Spa',Pratica:'Diffida Epsilon',Tipologia:'Recovery',Scadenza:'25/04/2026',Stato:'Bozza',Priorità:'Bassa',Responsabile:'Avv. Neri',Rischio:'Basso',Giorni:12,Semaforo:'Ok'},
      {ID:'LAW-006',Cliente:'Kappa Srl',Pratica:'Appello Kappa',Tipologia:'Contenzioso',Scadenza:'13/04/2026',Stato:'Aperta',Priorità:'Alta',Responsabile:'Avv. Vitale',Rischio:'Alto',Giorni:0,Semaforo:'Urgente'},
      {ID:'LAW-007',Cliente:'Omega Spa',Pratica:'Verbale Omega',Tipologia:'Compliance',Scadenza:'18/04/2026',Stato:'In corso',Priorità:'Media',Responsabile:'Avv. Riva',Rischio:'Basso',Giorni:5,Semaforo:'Attenzione'},
      {ID:'LAW-008',Cliente:'Sigma Srl',Pratica:'Atto Sigma',Tipologia:'Civile',Scadenza:'09/04/2026',Stato:'Aperta',Priorità:'Alta',Responsabile:'Avv. Bassi',Rischio:'Alto',Giorni:-4,Semaforo:'Scaduto'},
      {ID:'LAW-009',Cliente:'Nuvola Srl',Pratica:'Parere Privacy',Tipologia:'Data Protection',Scadenza:'14/04/2026',Stato:'Review cliente',Priorità:'Media',Responsabile:'Avv. Neri',Rischio:'Medio',Giorni:1,Semaforo:'Urgente'},
      {ID:'LAW-010',Cliente:'Zeta Spa',Pratica:'Memoria Zeta',Tipologia:'Lavoro',Scadenza:'12/04/2026',Stato:'Aperta',Priorità:'Alta',Responsabile:'Avv. Riva',Rischio:'Alto',Giorni:-1,Semaforo:'Scaduto'},
    ],
    step1:"Crea una vista filtrando su:\n• Semaforo ≠ 'Ok'\n• oppure Rischio = 'Alto'\nOttieni il cruscotto pratiche da rivedere.",
    step2formula:"Giorni: =E8-TODAY()\nSemaforo: =IF(K8<0,\"Scaduto\",IF(K8<=3,\"Urgente\",IF(K8<=7,\"Attenzione\",\"Ok\")))",
    step2desc:"La formula calcola i giorni rimanenti e assegna automaticamente lo stato. Negativo = già scaduto.',",
    step3prompt:'Scrivimi un Google Apps Script che legge il foglio \'Avvocato\', trova le righe con Semaforo uguale a \'Scaduto\' o \'Urgente\' oppure Rischio uguale a \'Alto\', e crea un foglio \'Analisi Legale\' con ID, Cliente, Pratica, Scadenza, Responsabile e Rischio.',
    step4:"1) Porta una Scadenza a ieri o entro 3 giorni\n2) Verifica il Semaforo\n3) Esegui lo script e controlla Analisi Legale",
  },
  {
    id:'dentista',
    titolo:'Richiami Pazienti & Agenda',
    settore:'Studio dentistico',
    missione:'Trasformare un elenco pazienti in una vista operativa con formule, filtri e un micro-script di alert per i richiami imminenti o scaduti.',
    problemaReale:'I pazienti da richiamare si dimenticano facilmente: la segreteria deve vedere subito chi contattare oggi.',
    colore:{bg:'#E8F5E9',text:'#2E7D32',border:'#A5D6A7'},
    kpi:[{label:'Pazienti totali',valore:'20'},{label:'Richiami entro 7gg',valore:'10'},{label:'Scaduti',valore:'6'},{label:'Valore potenziale',valore:'€1.050'}],
    colonne:['ID','Paziente','Trattamento','Medico','Prossimo controllo','Priorità','Stato richiamo','Telefono','Valore €','Giorni','Semaforo'],
    righe:[
      {ID:'DEN-001',Paziente:'Mario Rossi',Trattamento:'Igiene + controllo',Medico:'Dr. Conti','Prossimo controllo':'12/04/2026',Priorità:'Alta','Stato richiamo':'Da chiamare',Telefono:'333 285xxxx','Valore €':'€180',Giorni:-1,Semaforo:'Scaduto'},
      {ID:'DEN-002',Paziente:'Lucia Bianchi',Trattamento:'Ortodonzia follow-up',Medico:'Dr.ssa Sala','Prossimo controllo':'15/04/2026',Priorità:'Media','Stato richiamo':'Programmato',Telefono:'333 433xxxx','Valore €':'€120',Giorni:2,Semaforo:'Urgente'},
      {ID:'DEN-003',Paziente:'Paolo Verdi',Trattamento:'Impianto check',Medico:'Dr. Conti','Prossimo controllo':'11/04/2026',Priorità:'Alta','Stato richiamo':'Da chiamare',Telefono:'333 467xxxx','Valore €':'€240',Giorni:-2,Semaforo:'Scaduto'},
      {ID:'DEN-005',Paziente:'Sara Fontana',Trattamento:'Pedodonzia',Medico:'Dr.ssa Sala','Prossimo controllo':'13/04/2026',Priorità:'Alta','Stato richiamo':'Da chiamare',Telefono:'333 807xxxx','Valore €':'€150',Giorni:0,Semaforo:'Urgente'},
      {ID:'DEN-007',Paziente:'Marta Leone',Trattamento:'Protesi mobile',Medico:'Dr. Bassi','Prossimo controllo':'09/04/2026',Priorità:'Alta','Stato richiamo':'Scaduto',Telefono:'333 168xxxx','Valore €':'€210',Giorni:-4,Semaforo:'Scaduto'},
      {ID:'DEN-008',Paziente:'Stefano Riva',Trattamento:'Parodontologia',Medico:'Dr. Conti','Prossimo controllo':'10/04/2026',Priorità:'Alta','Stato richiamo':'Scaduto',Telefono:'333 346xxxx','Valore €':'€300',Giorni:-3,Semaforo:'Scaduto'},
      {ID:'DEN-010',Paziente:'Riccardo Villa',Trattamento:'Ortodonzia',Medico:'Dr. Bassi','Prossimo controllo':'14/04/2026',Priorità:'Media','Stato richiamo':'Da chiamare',Telefono:'333 941xxxx','Valore €':'€130',Giorni:1,Semaforo:'Urgente'},
      {ID:'DEN-011',Paziente:'Chiara Ferri',Trattamento:'Implantologia',Medico:'Dr. Conti','Prossimo controllo':'16/04/2026',Priorità:'Alta','Stato richiamo':'Da chiamare',Telefono:'333 554xxxx','Valore €':'€260',Giorni:3,Semaforo:'Urgente'},
      {ID:'DEN-013',Paziente:'Anna Pellegrini',Trattamento:'Controllo post-estrazione',Medico:'Dr. Bassi','Prossimo controllo':'12/04/2026',Priorità:'Alta','Stato richiamo':'Da chiamare',Telefono:'333 868xxxx','Valore €':'€140',Giorni:-1,Semaforo:'Scaduto'},
      {ID:'DEN-019',Paziente:'Silvia Caruso',Trattamento:'Controllo impianto',Medico:'Dr. Bassi','Prossimo controllo':'11/04/2026',Priorità:'Alta','Stato richiamo':'Da chiamare',Telefono:'333 992xxxx','Valore €':'€275',Giorni:-2,Semaforo:'Scaduto'},
    ],
    step1:"Crea una vista filtrando su:\n• Semaforo ≠ 'Ok'\n• opzionale: Medico = una persona\nOttieni la lista richiami della giornata.",
    step2formula:"Giorni: =F8-TODAY()\nSemaforo: =IF(K8<0,\"Scaduto\",IF(K8<=3,\"Urgente\",IF(K8<=7,\"Attenzione\",\"Ok\")))",
    step2desc:"Stessa logica del caso M&A — la formula è universale. Cambia solo cosa misura: qui sono i giorni al prossimo controllo.",
    step3prompt:"Scrivimi un Google Apps Script che legge il foglio 'Dentista', trova le righe con Semaforo uguale a 'Scaduto', 'Urgente' o 'Attenzione', e le copia in un foglio 'Richiami Dentista' con ID, Paziente, Prossimo controllo, Medico e Telefono.",
    step4:"1) Sposta un Prossimo controllo a ieri o a 3 giorni\n2) Verifica Giorni e Semaforo\n3) Esegui lo script e controlla Richiami Dentista",
  },
  {
    id:'deloitte',
    titolo:'Staffing & Workload Advisory',
    settore:'Consulenza',
    missione:'Portare in evidenza risorse oltre soglia e deliverable critici, passando da foglio staffing a mini-sistema di alert.',
    problemaReale:'Le risorse più cariche e i deliverable in deadline ravvicinata vanno decisi prima, non gestiti a intuito.',
    colore:{bg:'#FFF8E1',text:'#F57F17',border:'#FFE082'},
    kpi:[{label:'Risorse totali',valore:'20'},{label:'Oltre 85%',valore:'9'},{label:'Non riallocabili',valore:'6'},{label:'Deliverable critici',valore:'9'}],
    colonne:['ID','Risorsa','Progetto','Manager','Skill','Carico %','Fase','Deadline','Priorità','Riallocabile','Semaforo'],
    righe:[
      {ID:'DEL-001',Risorsa:'Andrea',Progetto:'Due diligence A',Manager:'MD Ferri',Skill:'CDD','Carico %':'92%',Fase:'Red',Deadline:'12/04/2026',Priorità:'Alta',Riallocabile:'Sì',Semaforo:'Sovraccarico'},
      {ID:'DEL-003',Risorsa:'Lorenzo',Progetto:'Transformation C',Manager:'Director Neri',Skill:'IT','Carico %':'88%',Fase:'Red',Deadline:'13/04/2026',Priorità:'Alta',Riallocabile:'No',Semaforo:'Attenzione'},
      {ID:'DEL-005',Risorsa:'Davide',Progetto:'Deal E',Manager:'MD Ferri',Skill:'FDD','Carico %':'97%',Fase:'Red',Deadline:'11/04/2026',Priorità:'Alta',Riallocabile:'No',Semaforo:'Sovraccarico'},
      {ID:'DEL-008',Risorsa:'Sara',Progetto:'PMI H',Manager:'Partner Sala',Skill:'PMO','Carico %':'91%',Fase:'Red',Deadline:'14/04/2026',Priorità:'Alta',Riallocabile:'No',Semaforo:'Sovraccarico'},
      {ID:'DEL-010',Risorsa:'Anna',Progetto:'Separation J',Manager:'MD Ferri',Skill:'Valuation','Carico %':'86%',Fase:'Amber',Deadline:'15/04/2026',Priorità:'Alta',Riallocabile:'Sì',Semaforo:'Attenzione'},
      {ID:'DEL-011',Risorsa:'Nico',Progetto:'Carve-out K',Manager:'Director Riva',Skill:'FDD','Carico %':'94%',Fase:'Red',Deadline:'12/04/2026',Priorità:'Alta',Riallocabile:'No',Semaforo:'Sovraccarico'},
      {ID:'DEL-013',Risorsa:'Elena',Progetto:'DD M',Manager:'MD Ferri',Skill:'CDD','Carico %':'89%',Fase:'Red',Deadline:'13/04/2026',Priorità:'Alta',Riallocabile:'Sì',Semaforo:'Attenzione'},
      {ID:'DEL-017',Risorsa:'Camilla',Progetto:'Synergy Q',Manager:'Director Riva',Skill:'CDD','Carico %':'93%',Fase:'Red',Deadline:'11/04/2026',Priorità:'Alta',Riallocabile:'No',Semaforo:'Sovraccarico'},
      {ID:'DEL-020',Risorsa:'Federico',Progetto:'Tax T',Manager:'Partner Sala',Skill:'Ops','Carico %':'90%',Fase:'Red',Deadline:'14/04/2026',Priorità:'Alta',Riallocabile:'No',Semaforo:'Sovraccarico'},
      {ID:'DEL-002',Risorsa:'Chiara',Progetto:'PMO B',Manager:'Partner Sala',Skill:'IT','Carico %':'65%',Fase:'Amber',Deadline:'18/04/2026',Priorità:'Media',Riallocabile:'Sì',Semaforo:'Ok'},
    ],
    step1:"Crea una vista filtrando su:\n• Semaforo ≠ 'Ok'\n• opzionale: Priorità = 'Alta'\nOttieni la short list staffing da discutere.",
    step2formula:"Semaforo: =IF(F8>=0.9,\"Sovraccarico\",IF(AND(F8>=0.85,I8=\"Alta\"),\"Attenzione\",\"Ok\"))",
    step2desc:"Il semaforo combina due condizioni: carico assoluto e priorità del progetto. Stessa logica IF del caso M&A — cambia solo la soglia.",
    step3prompt:"Scrivimi un Google Apps Script che legge il foglio 'Deloitte', seleziona le attività con Semaforo = 'Sovraccarico' o 'Attenzione', considera solo quelle con Riallocabile = 'Sì', e tra le risorse disponibili assegna ogni attività alla risorsa con Carico % più basso. Crea un foglio 'Decisioni Deloitte' con ID, Progetto, Risorsa originale, Nuova risorsa, Carico %, Priorità.",
    step4:"1) Porta un Carico % sopra 85% o 90%\n2) Verifica il Semaforo\n3) Esegui lo script e controlla Decisioni Deloitte",
  },
  {
    id:'crediti',
    titolo:'Aging & Escalation',
    settore:'Recupero crediti',
    missione:'Filtrare le posizioni che invecchiano troppo e trasformare la coda di sollecito in un report automatico.',
    problemaReale:'Le posizioni che invecchiano e restano senza esito vanno ottimizzate in una coda chiara per l\'operatore.',
    colore:{bg:'#FDECEA',text:'#C0392B',border:'#EF9A9A'},
    kpi:[{label:'Posizioni totali',valore:'20'},{label:'Alta priorità',valore:'11'},{label:'Senza contatto >10gg',valore:'10'},{label:'Importo urgente',valore:'€122.300'}],
    colonne:['ID','Posizione','Debitore','Importo €','Ultimo contatto','Giorni aging','Priorità','Stato azione','Assegnatario','Prob. recupero','Rischio','Semaforo'],
    righe:[
      {ID:'CRD-001',Posizione:'Posizione 1001',Debitore:'Beta Retail','Importo €':'€12.000','Ultimo contatto':'26/03/2026','Giorni aging':15,Priorità:'Alta','Stato azione':'Nessun rientro',Assegnatario:'Rossi','Prob. recupero':'72%',Rischio:'Alto',Semaforo:'Urgente'},
      {ID:'CRD-003',Posizione:'Posizione 1003',Debitore:'Aurora Hotel','Importo €':'€18.500','Ultimo contatto':'21/03/2026','Giorni aging':20,Priorità:'Alta','Stato azione':'Irreperibile',Assegnatario:'Verdi','Prob. recupero':'81%',Rischio:'Alto',Semaforo:'Urgente'},
      {ID:'CRD-005',Posizione:'Posizione 1005',Debitore:'Edil Delta','Importo €':'€7.600','Ultimo contatto':'30/03/2026','Giorni aging':11,Priorità:'Alta','Stato azione':'Scadenza saltata',Assegnatario:'Rossi','Prob. recupero':'67%',Rischio:'Alto',Semaforo:'Attenzione'},
      {ID:'CRD-007',Posizione:'Posizione 1007',Debitore:'Sigma Food','Importo €':'€15.200','Ultimo contatto':'27/03/2026','Giorni aging':14,Priorità:'Alta','Stato azione':'Nessuna risposta',Assegnatario:'Neri','Prob. recupero':'76%',Rischio:'Alto',Semaforo:'Attenzione'},
      {ID:'CRD-009',Posizione:'Posizione 1009',Debitore:'Theta Group','Importo €':'€21.400','Ultimo contatto':'23/03/2026','Giorni aging':18,Priorità:'Alta','Stato azione':'PEC inviata',Assegnatario:'Rossi','Prob. recupero':'84%',Rischio:'Alto',Semaforo:'Urgente'},
      {ID:'CRD-011',Posizione:'Posizione 1011',Debitore:'Kappa Moda','Importo €':'€16.700','Ultimo contatto':'28/03/2026','Giorni aging':13,Priorità:'Alta','Stato azione':'Contestazione',Assegnatario:'Verdi','Prob. recupero':'73%',Rischio:'Alto',Semaforo:'Attenzione'},
      {ID:'CRD-013',Posizione:'Posizione 1013',Debitore:'Omega Pharma','Importo €':'€28.900','Ultimo contatto':'20/03/2026','Giorni aging':21,Priorità:'Alta','Stato azione':'Nessun esito',Assegnatario:'Rossi','Prob. recupero':'88%',Rischio:'Alto',Semaforo:'Urgente'},
      {ID:'CRD-015',Posizione:'Posizione 1015',Debitore:'Iota Spa','Importo €':'€8.400','Ultimo contatto':'29/03/2026','Giorni aging':12,Priorità:'Alta','Stato azione':'Scaduto piano',Assegnatario:'Neri','Prob. recupero':'69%',Rischio:'Alto',Semaforo:'Attenzione'},
      {ID:'CRD-018',Posizione:'Posizione 1018',Debitore:'Chi Srl','Importo €':'€19.400','Ultimo contatto':'25/03/2026','Giorni aging':16,Priorità:'Alta','Stato azione':'Cliente silente',Assegnatario:'Bianchi','Prob. recupero':'79%',Rischio:'Alto',Semaforo:'Urgente'},
      {ID:'CRD-020',Posizione:'Posizione 1020',Debitore:'Lambda Spa','Importo €':'€22.100','Ultimo contatto':'22/03/2026','Giorni aging':19,Priorità:'Alta','Stato azione':'Azione legale valutata',Assegnatario:'Neri','Prob. recupero':'86%',Rischio:'Alto',Semaforo:'Urgente'},
    ],
    step1:"Crea una vista filtrando su:\n• Semaforo ≠ 'Ok'\n• opzionale: Assegnatario = una persona\nOttieni la coda di lavoro giornaliera.",
    step2formula:"Semaforo: =IF(AND(G8=\"Alta\",F8>=15),\"Urgente\",IF(AND(G8=\"Alta\",F8>=10),\"Attenzione\",\"Ok\"))",
    step2desc:"La formula combina priorità e giorni di aging. Stessa struttura IF del M&A — qui i giorni misurano quanto tempo è passato senza esito.",
    step3prompt:"Scrivimi un Google Apps Script che legge il foglio 'Recupero Crediti', trova le posizioni con Semaforo uguale a 'Urgente' o 'Attenzione', le ordina per Giorni aging decrescente e le copia in un foglio 'Coda Ottimizzata Crediti' con ID, Debitore, Importo €, Giorni aging, Assegnatario e Prob. recupero.",
    step4:"1) Aumenta Giorni aging oltre 10 o 15 su una riga Alta priorità\n2) Verifica il Semaforo\n3) Esegui lo script e controlla Coda Ottimizzata Crediti",
  },
  {
    id:'brainlab',
    titolo:'Ordini & Stock',
    settore:'E-commerce / Shop',
    missione:'Controllare ordini da evadere e prodotti sotto soglia per costruire una vista shop operativa e un micro-script di alert.',
    problemaReale:'Bisogna prevenire ordini bloccati e stock bassi prima che diventino vendite perse.',
    colore:{bg:'#EDE7F6',text:'#4527A0',border:'#CE93D8'},
    kpi:[{label:'Ordini totali',valore:'20'},{label:'Ordini >1gg',valore:'11'},{label:'Stock critico',valore:'12'},{label:'Valore bloccato',valore:'€1.149'}],
    colonne:['ID','Cliente','Prodotto','Canale','Data ordine','Giorni attesa','Stato ordine','Stock disp.','Soglia min','Valore €','Next action','Semaforo'],
    righe:[
      {ID:'BLS-001',Cliente:'Farmacia Aurora',Prodotto:'Integratore Focus',Canale:'Shop','Data ordine':'10/04/2026','Giorni attesa':3,'Stato ordine':'Da evadere','Stock disp.':8,'Soglia min':12,'Valore €':'€84','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-003',Cliente:'Giulia Serra',Prodotto:'Integratore Focus',Canale:'Shop','Data ordine':'08/04/2026','Giorni attesa':5,'Stato ordine':'Da evadere','Stock disp.':5,'Soglia min':10,'Valore €':'€42','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-005',Cliente:'Wellness Point',Prodotto:'Integratore Focus',Canale:'B2B','Data ordine':'07/04/2026','Giorni attesa':6,'Stato ordine':'Da evadere','Stock disp.':9,'Soglia min':12,'Valore €':'€168','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-008',Cliente:'Elena Ferri',Prodotto:'Integratore Recovery',Canale:'Shop','Data ordine':'10/04/2026','Giorni attesa':3,'Stato ordine':'Da evadere','Stock disp.':7,'Soglia min':8,'Valore €':'€33','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-009',Cliente:'Farmacia Green',Prodotto:'Integratore Focus',Canale:'B2B','Data ordine':'12/04/2026','Giorni attesa':1,'Stato ordine':'Da evadere','Stock disp.':11,'Soglia min':12,'Valore €':'€126','Next action':'Riordinare',Semaforo:'Attenzione'},
      {ID:'BLS-010',Cliente:'Marco Valli',Prodotto:'Integratore Recovery',Canale:'Shop','Data ordine':'06/04/2026','Giorni attesa':7,'Stato ordine':'Da evadere','Stock disp.':4,'Soglia min':8,'Valore €':'€72','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-013',Cliente:'Farmacia Sole',Prodotto:'Integratore Focus',Canale:'B2B','Data ordine':'08/04/2026','Giorni attesa':5,'Stato ordine':'Da evadere','Stock disp.':6,'Soglia min':10,'Valore €':'€147','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-015',Cliente:'Fit Corner',Prodotto:'Integratore Focus',Canale:'B2B','Data ordine':'07/04/2026','Giorni attesa':6,'Stato ordine':'Da evadere','Stock disp.':10,'Soglia min':12,'Valore €':'€189','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-017',Cliente:'Parafarmacia Città',Prodotto:'Integratore Focus',Canale:'B2B','Data ordine':'10/04/2026','Giorni attesa':3,'Stato ordine':'Da evadere','Stock disp.':12,'Soglia min':12,'Valore €':'€105','Next action':'Preparare oggi',Semaforo:'Urgente'},
      {ID:'BLS-020',Cliente:'Noemi Testa',Prodotto:'Integratore Recovery',Canale:'Amazon','Data ordine':'08/04/2026','Giorni attesa':5,'Stato ordine':'Da evadere','Stock disp.':5,'Soglia min':8,'Valore €':'€45','Next action':'Preparare oggi',Semaforo:'Urgente'},
    ],
    step1:"Crea una vista filtrando su:\n• Semaforo ≠ 'Ok'\nOttieni subito ciò che va spedito o riordinato.",
    step2formula:"Giorni attesa: =TODAY()-E8\nSemaforo: =IF(AND(G8=\"Da evadere\",F8>=2),\"Urgente\",IF(H8<=I8,\"Attenzione\",\"Ok\"))",
    step2desc:"Due condizioni combinate: l'ordine è fermo da troppo tempo, oppure lo stock è sceso sotto soglia. Stessa struttura IF — contesto diverso.",
    step3prompt:"Scrivimi un Google Apps Script che legge il foglio 'BrainLabShop Italia', prende le righe con Semaforo uguale a 'Urgente' o 'Attenzione', e le copia in un foglio 'Prevenzione Shop' con ID, Cliente, Prodotto, Stato ordine, Stock disp., Soglia min e Next action.",
    step4:"1) Abbassa lo stock sotto soglia o rendi un ordine vecchio di 2 giorni\n2) Verifica il Semaforo\n3) Esegui lo script e controlla Prevenzione Shop",
  },
  {
    id:'servizi',
    titolo:'Squadre, SLA e Coperture',
    settore:'Servizi operativi',
    missione:'Evidenziare interventi scoperti e persone oltre soglia per creare una vista operativa pronta da automatizzare.',
    problemaReale:'Quando un intervento non è coperto o una persona supera soglia ore, bisogna priorizzare subito dove intervenire.',
    colore:{bg:'#FBE9E7',text:'#BF360C',border:'#FFAB91'},
    kpi:[{label:'Interventi totali',valore:'20'},{label:'Oltre 8 ore',valore:'11'},{label:'Alta priorità non coperta',valore:'10'},{label:'Ricavi a rischio',valore:'€5.400'}],
    colonne:['ID','Dipendente','Squadra','Sito / Intervento','Ore oggi','Turno','Priorità','Coperto','Rischio SLA','Ricavo €','Semaforo'],
    righe:[
      {ID:'SRV-001',Dipendente:'Franco',Squadra:'Squadra A','Sito / Intervento':'Condominio Aurora','Ore oggi':9,Turno:'Mattina',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€450',Semaforo:'Non coperto'},
      {ID:'SRV-003',Dipendente:'Marta',Squadra:'Squadra A','Sito / Intervento':'Hotel Stella','Ore oggi':10,Turno:'Pomeriggio',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€520',Semaforo:'Non coperto'},
      {ID:'SRV-005',Dipendente:'Elena',Squadra:'Squadra D','Sito / Intervento':'Clinica Blu','Ore oggi':11,Turno:'Pomeriggio',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€610',Semaforo:'Non coperto'},
      {ID:'SRV-006',Dipendente:'Paola',Squadra:'Squadra B','Sito / Intervento':'Centro Logistico','Ore oggi':9,Turno:'Notte',Priorità:'Alta',Coperto:'Sì','Rischio SLA':'Medio','Ricavo €':'€390',Semaforo:'Sovraccarico'},
      {ID:'SRV-008',Dipendente:'Alice',Squadra:'Squadra D','Sito / Intervento':'RSA Verde','Ore oggi':10,Turno:'Mattina',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€480',Semaforo:'Non coperto'},
      {ID:'SRV-010',Dipendente:'Chiara',Squadra:'Squadra C','Sito / Intervento':'Cantiere Est','Ore oggi':11,Turno:'Pomeriggio',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€560',Semaforo:'Non coperto'},
      {ID:'SRV-013',Dipendente:'Marco',Squadra:'Squadra A','Sito / Intervento':'Aeroporto Cargo','Ore oggi':12,Turno:'Notte',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€720',Semaforo:'Non coperto'},
      {ID:'SRV-015',Dipendente:'Filippo',Squadra:'Squadra B','Sito / Intervento':'Polo Sanitario','Ore oggi':9,Turno:'Mattina',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€500',Semaforo:'Non coperto'},
      {ID:'SRV-017',Dipendente:'Pietro',Squadra:'Squadra A','Sito / Intervento':'Hub Retail','Ore oggi':9,Turno:'Notte',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€430',Semaforo:'Non coperto'},
      {ID:'SRV-019',Dipendente:'Enrico',Squadra:'Squadra B','Sito / Intervento':'Hotel Miramare','Ore oggi':10,Turno:'Pomeriggio',Priorità:'Alta',Coperto:'No','Rischio SLA':'Alto','Ricavo €':'€590',Semaforo:'Non coperto'},
    ],
    step1:"Crea una vista filtrando su:\n• Semaforo ≠ 'Ok'\nOrdina poi per Ricavo € decrescente.\nOttieni le priorità operative del giorno.",
    step2formula:"Semaforo: =IF(AND(G8=\"Alta\",H8=\"No\"),\"Non coperto\",IF(E8>8,\"Sovraccarico\",\"Ok\"))",
    step2desc:"Due regole: se alta priorità e non coperto → emergenza. Se ore sopra soglia → persona sovraccarica. Stessa struttura IF — logica operativa.",
    step3prompt:"Scrivimi un Google Apps Script che legge il foglio 'Servizi', trova le righe con Semaforo diverso da 'Ok', le ordina per Ricavo € decrescente e le copia in un foglio 'Priorità Servizi' con ID, Dipendente, Sito / Intervento, Priorità, Ricavo € e Semaforo.",
    step4:"1) Metti Coperto = No su una riga Alta priorità oppure Ore oggi sopra 8\n2) Verifica il Semaforo\n3) Esegui lo script e controlla Priorità Servizi",
  },
]

// ── SLIDE PRESENTAZIONE ──────────────────────────────────────
export type Slide = {
  id:number; tipo:string; titolo:string
  [key:string]:unknown
}

export const SLIDES: Slide[] = [
  {id:1,tipo:'copertina',titolo:'I Cigni Neri',sottotitolo:'Workshop · Google Sheets & Automazioni',corpo:'Trasforma qualsiasi dato in un sistema che lavora per te'},
  {id:2,tipo:'problema',titolo:'Lunedì mattina',corpo:'Quanti minuti ti ci vogliono per capire su cosa lavorare questa settimana?',highlight:'La risposta media nel nostro settore: 47 minuti. Con quello che costruiamo oggi: 3 secondi.',domanda:'Cosa faresti con quei 47 minuti?'},
  {id:3,tipo:'cosè_script',titolo:"Cos'è Google Apps Script",punti:["È il linguaggio di automazione integrato in tutti i prodotti Google","Vive dentro Google Sheets — nessuna installazione, nessun software","Serve solo un account Google — che già hai","Si apre con: Estensioni → Apps Script","Può inviare email, creare fogli, chiamare API, mandare notifiche"],highlight:"Zero costi. Zero installazioni. Già nel tuo account Google."},
  {id:4,tipo:'come_funziona',titolo:'Come funziona uno script',codice:`function inviaAlert() {\n  var sheet = SpreadsheetApp.getActiveSheet();\n  var dati = sheet.getDataRange().getValues();\n  \n  for (var i = 1; i < dati.length; i++) {\n    if (dati[i][11] === 'Urgente') {\n      MailApp.sendEmail(\n        'tu@email.com',\n        'Pratica urgente: ' + dati[i][1],\n        'Scadenza: ' + dati[i][8]\n      );\n    }\n  }\n}`,spiegazione:'Legge il foglio, trova le righe urgenti, manda un\'email. Tre azioni. Quaranta righe di codice. Funziona da solo ogni lunedì.'},
  {id:5,tipo:'bsc_intro',titolo:'Il caso studio — Black Swan Capital',dati:{pratiche:'30',portfolio:'€7.8B',urgenze:'7',saturazione:'55.7%'},corpo:'Boutique M&A con 14 soci e 38 collaboratori. Nessun sistema. Scadenze gestite via email. Ogni lunedì: caos.'},
  {id:6,tipo:'colonne',titolo:'La struttura dei dati',corpo:'Ogni colonna è una decisione di design. Non metti una colonna perché "potrebbe servire" — la metti perché senza di essa succede questo:',esempi:[{col:'G — Responsabile',senza:'Una scadenza slitta. Nessuno sa di chi è. Lo studio paga.'},{col:'J — Giorni alla scad.',senza:'Qualcuno aggiorna a mano. Si dimentica. Mercoledì conta «14 giorni» ma sono già 7.'},{col:'S — Score',senza:'Ogni lunedì 45 minuti per decidere cosa fare. Con questa colonna: 3 minuti.'}]},
  {id:7,tipo:'formula_giorni',titolo:'Livello 1 — La prima formula',formula:'=I5-TODAY()',desc:'Il foglio ora sa quanti giorni mancano ad ogni scadenza. Si aggiorna da solo ogni mattina. Nessuno la tocca.',domanda:'Quante ore al mese risparmia questa formula?'},
  {id:8,tipo:'formula_semaforo',titolo:'Livello 1 — Il semaforo automatico',formula:'=IF(J5<=7,"Urgentissimo",IF(J5<=14,"Critico",IF(J5<=30,"Attenzione","Ok")))',desc:'Il foglio decide da solo il colore. Le 7 urgenze diventano rosse. Nessuno le ha colorate manualmente.',domanda:'Chi avrebbe trovato queste urgenze senza questo sistema?'},
  {id:9,tipo:'filterview',titolo:'Livello 1 — Filter view',corpo:'I dati sono di tutti. La vista è tua.',steps:['Dati → Visualizzazioni filtro → Crea nuova','Filtri colonna G = il tuo nome','Rinomina la vista con il tuo nome','Gli altri vedono ancora tutto il foglio'],highlight:'Ogni membro del team vede solo le sue pratiche — già ordinate per urgenza.'},
  {id:10,tipo:'redistribuzione',titolo:'Livello 2 — Redistribuzione automatica',corpo:'Saso è assente. Il sistema legge le sue pratiche, calcola chi ha più capacità disponibile, redistribuisce bilanciando il carico, notifica i nuovi responsabili via email.',alert:'BSC-001 rimane orfana: nessuno ha abbastanza capacità. Il sistema non forza — segnala.',domanda:'Quanto vale un sistema che redistribuisce da solo?'},
  {id:11,tipo:'wow',titolo:'Livello 2 — Il momento WOW',corpo:'Lo script gira. Aspetti in silenzio.',highlight:'L\'email arriva.',sub:'Questo gira ogni lunedì alle 8 senza che nessuno premi niente.'},
  {id:12,tipo:'scoring',titolo:'Livello 3 — Il motore decisionale',formula:'=ROUND(((100-J5)*0.30)+((VALUE(SUBSTITUTE(SUBSTITUTE(D5,"€",""),"M",""))/890)*100*0.30)+(R5*0.25)+((10-S5)*10*0.15),0)',pesi:[{label:'Urgenza temporale',pct:'30%'},{label:'Valore economico',pct:'30%'},{label:'Probabilità successo',pct:'25%'},{label:'Rischio inverso',pct:'15%'}],corpo:'Non è =TODAY(). È un modello decisionale dentro una cella. Quando cambia una variabile, la classifica si ricalcola da sola.'},
  {id:13,tipo:'sorpresa',titolo:'Adesso tocca a voi',corpo:'La stessa logica che avete visto su Black Swan Capital funziona in qualsiasi settore. Abbiamo preparato un file per ognuno di voi.',highlight:'Aprite il vostro foglio.'},
  {id:14,tipo:'chiusura',titolo:'Cosa portate a casa',items:['Il Google Sheet operativo con i vostri filter view e scoring','Il link a questa app — resta online','Come brieffare uno script a un AI o a un developer in 3 domande'],frase:"Non è usare Sheets. È sapere cosa chiedere a chi lo usa per voi."},
]

// ── GLOSSARIO ────────────────────────────────────────────────
export const GLOSSARIO_MA = [
  {termine:'Acquisizione',semplice:'Compri un\'azienda intera o una parte.',rischio:'Se la DD è superficiale, scopri i problemi dopo il closing. Valore distrutto: fino al 100%.'},
  {termine:'Due Diligence',semplice:'L\'ispezione prima di comprare. Controlli conti, contratti, debiti nascosti.',rischio:'Saltarla = scheletri nell\'armadio a deal chiuso. Rischio: nullità o perdite enormi.'},
  {termine:'Term Sheet',semplice:'Il contratto di fidanzamento. Parti si accordano sui punti chiave prima dei dettagli.',rischio:'Ogni punto vago costerà 10x in negoziazione finale.'},
  {termine:'Signing',semplice:'Il giorno della firma del contratto definitivo.',rischio:'Condizioni sospensive non chiuse → il deal può saltare anche dopo la firma.'},
  {termine:'Closing',semplice:'Il giorno in cui i soldi passano e la proprietà cambia.',rischio:'Problemi tecnici o regolatori dell\'ultimo minuto possono bloccare tutto.'},
  {termine:'LBO',semplice:'Compri un\'azienda usando principalmente debito. L\'azienda ripaga il prestito con i suoi utili.',rischio:'Se i flussi calano, l\'azienda non riesce a ripagare. Rischio fallimento.'},
  {termine:'Carve-out',semplice:'Separi e vendi solo un pezzo di un\'azienda.',rischio:'Sistemi IT, HR, contratti condivisi: tutto va separato. Costo spesso sottostimato del 30%.'},
  {termine:'NPL',semplice:'Crediti bancari non rimborsati che le banche vendono a sconto.',rischio:'Valutazione sbagliata del tasso di recupero = perdite strutturali.'},
  {termine:'Passaggio generazionale',semplice:'Trasferimento di un\'azienda familiare alla generazione successiva o a terzi.',rischio:'Senza pianificazione: litigi, imposta di successione elevata, perdita del controllo.'},
  {termine:'Saturazione team',semplice:'Quanto è carico un membro del team rispetto alla sua capacità massima.',rischio:'Chi è al 90% continua a ricevere pratiche. Errori, burnout, scadenze saltate.'},
]

export const GLOSSARIO_SHEETS = [
  {termine:'Filter View',semplice:'Una vista personale sul foglio condiviso. Gli altri vedono tutto, tu vedi solo il tuo.',quando:'Quando più persone lavorano sullo stesso foglio e ognuno ha le sue pratiche.'},
  {termine:'Formula IF',semplice:'Se (condizione) allora A, altrimenti B. Può essere annidata: IF dentro IF.',quando:'Semafori, classificazioni, alert automatici basati su soglie.'},
  {termine:'=TODAY()',semplice:'Restituisce la data di oggi. Si aggiorna automaticamente ogni giorno.',quando:'Calcolo giorni alla scadenza: =scadenza-TODAY()'},
  {termine:'Apps Script',semplice:'Il linguaggio di automazione di Google. Vive dentro Sheets, Docs, Gmail.',quando:'Quando vuoi che qualcosa succeda automaticamente: email, copia dati, alert.'},
  {termine:'Trigger',semplice:'Un\'istruzione che fa partire uno script automaticamente — ogni giorno, ogni settimana, su modifica.',quando:'Briefing automatico del lunedì, alert saturazione, redistribuzione pratiche.'},
  {termine:'Formattazione condizionale',semplice:'La cella cambia colore da sola in base al valore che contiene.',quando:'Semafori visivi: rosso = urgente, giallo = attenzione, verde = ok.'},
  {terme:'QUERY',semplice:'Una funzione che filtra e ordina dati come un database, direttamente nel foglio.',quando:'Viste dinamiche più complesse di un semplice filtro.'},
]

// ── GUIDA CONDUTTORE ─────────────────────────────────────────
export const GUIDA = [
  {fase:'Fase 1 — Il problema',durata:'15 min',tuFai:'Giri la domanda a ognuno: "Quanto ti ci vuole lunedì mattina per capire su cosa lavorare?" Aspetti le risposte. Poi mostri la pipeline BSC sull\'app — 30 pratiche, €7.8B, 7 urgenze.',loroFanno:'Rispondono alla domanda. Aprono il Google Sheet condiviso.',domanda:'Cosa faresti con quei 47 minuti?'},
  {fase:'Fase 2 — Apps Script',durata:'10 min',tuFai:'Mostri la slide "Cos\'è Apps Script". Apri Estensioni → Apps Script dal Sheet. Mostri l\'editor vuoto. Dici: "Questo è il motore. Adesso lo vediamo in azione."',loroFanno:'Aprono Apps Script sul loro Sheet. Solo guardano — non scrivono niente.',domanda:'Avevate idea che questo esistesse già nel vostro Google Sheets?'},
  {fase:'Fase 3 — Colonne A→T',durata:'15 min',tuFai:'Clicchi ogni colonna sull\'app. Per ognuna: cosa contiene, perché esiste, cosa va storto senza di essa. Le colonne R, S, T le lasci per dopo.',loroFanno:'Seguono le colonne sul loro Sheet.',domanda:'Quale colonna vi manca di più nel vostro lavoro?'},
  {fase:'Fase 4 — Formule live',durata:'15 min',tuFai:'Sul Sheet: J5 → =I5-TODAY() → trascini. K5 → formula IF → trascini. I semafori si accendono. Mostri formattazione condizionale.',loroFanno:'Replicano J5 e K5 e trascinano.',domanda:'Chi avrebbe scoperto le urgenze senza questo?'},
  {fase:'Fase 5 — Filter view',durata:'20 min',tuFai:'Crei il filter view "Saso" in diretta. Poi a turno ognuno crea il suo.',loroFanno:'Mentre uno crea, gli altri cliccano la pill del compagno sull\'app.',domanda:'Cosa cambierebbe se ogni lunedì vedessi già solo le tue pratiche?'},
  {fase:'Fase 6 — Script email',durata:'15 min',tuFai:'Mostri lo script. Esegui. Aspetti. L\'email arriva.',loroFanno:'Guardano in silenzio.',domanda:'Quanto vale questo script nel vostro contesto?'},
  {fase:'Fase 7 — Scoring',durata:'20 min',tuFai:'Spieghi le 4 variabili. Scrivi T5 sul Sheet. Trascini. La classifica si forma.',loroFanno:'Replicano T5.',domanda:'Cosa cambia nella classifica se Albrizzi va male?'},
  {fase:'Fase 8 — Sorpresa',durata:'15 min',tuFai:'Apri la sezione Casi sull\'app. "Adesso tocca a voi." Ognuno apre il suo file personale.',loroFanno:'Esplorano il loro caso studio. Step 1, 2, 3, 4.',domanda:'Nel tuo lavoro, quali sarebbero le 4 variabili del tuo score?'},
]
