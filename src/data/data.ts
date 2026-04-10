export const NOMI = ["Saso","Giampaolo","Gianluca","Francesco","Camillo","Carlo","Graziano"]

export const PILL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Saso:       { bg: "#E8F0EB", text: "#2D5A3D", border: "#4A7C59" },
  Giampaolo:  { bg: "#EDF2EE", text: "#2D5A3D", border: "#6A9B7A" },
  Gianluca:   { bg: "#F0F5F1", text: "#2D5A3D", border: "#7AAB8A" },
  Francesco:  { bg: "#E8F0EB", text: "#2D5A3D", border: "#4A7C59" },
  Camillo:    { bg: "#EDF2EE", text: "#2D5A3D", border: "#6A9B7A" },
  Carlo:      { bg: "#F0F5F1", text: "#2D5A3D", border: "#7AAB8A" },
  Graziano:   { bg: "#E8F0EB", text: "#2D5A3D", border: "#4A7C59" },
}

export type Pratica = {
  id: string; cliente: string; tipo: string; valore: string
  fase: string; socio: string; resp: string; dataApertura: string
  scad: string; fee: string; note: string; priorita: string
  peso: number; riassegnabile: boolean
}

export const PRATICHE: Pratica[] = [
  {id:"BSC-001",cliente:"Gruppo Ferretti SpA",tipo:"Acquisizione industriale",valore:"€340M",fase:"Due Diligence",socio:"G. Valentini",resp:"Saso",dataApertura:"15/01/2026",scad:"22/04/2026",fee:"€2K",note:"DD legale + tecnica in corso",priorita:"Urgentissimo",peso:3,riassegnabile:true},
  {id:"BSC-002",cliente:"Blackstone Real Estate",tipo:"Portfolio immobiliare",valore:"€680M",fase:"Signing",socio:"F. Moretti",resp:"Giampaolo",dataApertura:"01/02/2026",scad:"15/05/2026",fee:"€3K",note:"Closing imminente",priorita:"Attenzione",peso:1,riassegnabile:true},
  {id:"BSC-003",cliente:"Famiglia Albrizzi",tipo:"Exit partecipazione SPA",valore:"€95M",fase:"Term Sheet",socio:"C. Russo",resp:"Gianluca",dataApertura:"10/02/2026",scad:"28/04/2026",fee:"€0K",note:"Trattativa riservata famiglia",priorita:"Critico",peso:2,riassegnabile:true},
  {id:"BSC-004",cliente:"TechVenture SGR",tipo:"Merger SaaS + FinTech",valore:"€210M",fase:"Due Diligence",socio:"L. Bianchi",resp:"Francesco",dataApertura:"20/02/2026",scad:"12/05/2026",fee:"€1K",note:"Due diligence IT critica",priorita:"Attenzione",peso:1,riassegnabile:true},
  {id:"BSC-005",cliente:"Dinastia Morselli",tipo:"Passaggio generazionale",valore:"€520M",fase:"Onboarding",socio:"G. Valentini",resp:"Camillo",dataApertura:"01/03/2026",scad:"30/07/2026",fee:"€3K",note:"Cliente HNWI — massima riservatezza",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-006",cliente:"Orion Capital Partners",tipo:"Leveraged buyout",valore:"€175M",fase:"Closing",socio:"F. Moretti",resp:"Carlo",dataApertura:"20/01/2026",scad:"26/04/2026",fee:"€1K",note:"Finanziamento sindacato quasi chiuso",priorita:"Critico",peso:2,riassegnabile:true},
  {id:"BSC-007",cliente:"Investimenti Lombardi",tipo:"Acquisizione PMI manifattura",valore:"€48M",fase:"Lettera d'intenti",socio:"C. Russo",resp:"Graziano",dataApertura:"05/03/2026",scad:"01/06/2026",fee:"€0K",note:"Prima operazione cliente",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-008",cliente:"Mediobanca Private",tipo:"Carve-out divisione retail",valore:"€290M",fase:"Negoziazione",socio:"G. Valentini",resp:"Saso",dataApertura:"10/01/2026",scad:"30/05/2026",fee:"€1K",note:"Spinoff da holding quotata",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-009",cliente:"FondoNext Italia",tipo:"Club deal infrastrutture",valore:"€415M",fase:"Due Diligence",socio:"L. Bianchi",resp:"Giampaolo",dataApertura:"15/02/2026",scad:"15/06/2026",fee:"€2K",note:"Co-investitori internazionali",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-010",cliente:"Studio Legale Conti",tipo:"Joint venture legale",valore:"€22M",fase:"Term Sheet",socio:"C. Russo",resp:"Gianluca",dataApertura:"10/03/2026",scad:"20/05/2026",fee:"€0K",note:"Partnership strategica",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-011",cliente:"Luxoro Holding SA",tipo:"Acquisizione brand moda",valore:"€180M",fase:"Signing",socio:"G. Valentini",resp:"Francesco",dataApertura:"05/02/2026",scad:"30/04/2026",fee:"€1K",note:"Brand toscano premium",priorita:"Critico",peso:2,riassegnabile:true},
  {id:"BSC-012",cliente:"Energia Verde SpA",tipo:"M&A rinnovabili",valore:"€320M",fase:"Due Diligence",socio:"F. Moretti",resp:"Camillo",dataApertura:"01/03/2026",scad:"25/05/2026",fee:"€2K",note:"Portafoglio fotovoltaico",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-013",cliente:"Gruppo GDO Italmarket",tipo:"Acquisizione catena GDO",valore:"€560M",fase:"Negoziazione",socio:"L. Bianchi",resp:"Carlo",dataApertura:"25/01/2026",scad:"30/06/2026",fee:"€3K",note:"Operazione complessa — antitrust",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-014",cliente:"PE Fund Adriatico",tipo:"Secondary buyout",valore:"€195M",fase:"Term Sheet",socio:"C. Russo",resp:"Graziano",dataApertura:"15/03/2026",scad:"01/07/2026",fee:"€1K",note:"Uscita fondo precedente",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-015",cliente:"Cantieri Navali Trieste",tipo:"Fusione per incorporazione",valore:"€430M",fase:"Onboarding",socio:"G. Valentini",resp:"Saso",dataApertura:"20/03/2026",scad:"01/08/2026",fee:"€2K",note:"Operazione sindacale delicata",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-016",cliente:"Banca Regionale Centro",tipo:"Cessione sportello ATM",valore:"€18M",fase:"Closing",socio:"F. Moretti",resp:"Giampaolo",dataApertura:"28/02/2026",scad:"25/04/2026",fee:"€0K",note:"Operazione minore",priorita:"Urgentissimo",peso:3,riassegnabile:true},
  {id:"BSC-017",cliente:"Healthcare Partners",tipo:"Roll-up cliniche private",valore:"€240M",fase:"Due Diligence",socio:"C. Russo",resp:"Gianluca",dataApertura:"01/03/2026",scad:"20/06/2026",fee:"€1K",note:"DD regolatoria settore sanitario",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-018",cliente:"Immobiliare Venezia Srl",tipo:"Sale & leaseback",valore:"€67M",fase:"Lettera d'intenti",socio:"L. Bianchi",resp:"Francesco",dataApertura:"18/03/2026",scad:"10/06/2026",fee:"€0K",note:"Hotel 5 stelle centro storico",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-019",cliente:"Distillerie Meridionali",tipo:"Acquisizione brand spirits",valore:"€115M",fase:"Term Sheet",socio:"G. Valentini",resp:"Camillo",dataApertura:"22/02/2026",scad:"18/05/2026",fee:"€1K",note:"Buyer internazionale interessato",priorita:"Attenzione",peso:1,riassegnabile:true},
  {id:"BSC-020",cliente:"Software House Torino",tipo:"Strategic investment SaaS",valore:"€38M",fase:"Onboarding",socio:"F. Moretti",resp:"Carlo",dataApertura:"22/03/2026",scad:"15/07/2026",fee:"€0K",note:"VC lead + round B",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-021",cliente:"Farmaceutica Gelli SpA",tipo:"Fusione laboratori",valore:"€285M",fase:"Due Diligence",socio:"C. Russo",resp:"Graziano",dataApertura:"18/02/2026",scad:"05/05/2026",fee:"€1K",note:"Autorizzazioni AIFA necessarie",priorita:"Attenzione",peso:1,riassegnabile:true},
  {id:"BSC-022",cliente:"Consorzio Agri Piemonte",tipo:"Acquisizione cooperativa",valore:"€42M",fase:"Negoziazione",socio:"L. Bianchi",resp:"Saso",dataApertura:"08/03/2026",scad:"25/06/2026",fee:"€0K",note:"Struttura cooperativistica complessa",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-023",cliente:"Hedge Fund Zurigo",tipo:"Acquisizione NPL portfolio",valore:"€890M",fase:"Signing",socio:"G. Valentini",resp:"Giampaolo",dataApertura:"30/01/2026",scad:"28/04/2026",fee:"€4K",note:"Operazione cross-border",priorita:"Critico",peso:2,riassegnabile:true},
  {id:"BSC-024",cliente:"Albergo Diffuso Puglia",tipo:"Cessione catena hospitality",valore:"€78M",fase:"Lettera d'intenti",socio:"F. Moretti",resp:"Gianluca",dataApertura:"25/03/2026",scad:"10/07/2026",fee:"€0K",note:"Turismo premium",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-025",cliente:"Costruzioni Padana SpA",tipo:"Carve-out divisione B2B",valore:"€145M",fase:"Onboarding",socio:"C. Russo",resp:"Francesco",dataApertura:"28/03/2026",scad:"20/08/2026",fee:"€1K",note:"Separazione societaria complessa",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-026",cliente:"Family Office Marchetti",tipo:"Riassetto holding familiare",valore:"€310M",fase:"Term Sheet",socio:"L. Bianchi",resp:"Camillo",dataApertura:"12/02/2026",scad:"22/05/2026",fee:"€2K",note:"4 rami familiari — governance",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-027",cliente:"Porto Franco Trieste SpA",tipo:"Privatizzazione parziale",valore:"€670M",fase:"Due Diligence",socio:"G. Valentini",resp:"Carlo",dataApertura:"28/01/2026",scad:"30/05/2026",fee:"€3K",note:"Operazione pubblica — sensibile",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-028",cliente:"Startup Mobility Roma",tipo:"Seed + convertibile",valore:"€12M",fase:"Closing",socio:"F. Moretti",resp:"Graziano",dataApertura:"30/03/2026",scad:"30/04/2026",fee:"€0K",note:"Closing rapido",priorita:"Critico",peso:2,riassegnabile:true},
  {id:"BSC-029",cliente:"Ceramiche Vietri Srl",tipo:"Acquisizione artigianato",valore:"€29M",fase:"Lettera d'intenti",socio:"C. Russo",resp:"Saso",dataApertura:"01/04/2026",scad:"20/07/2026",fee:"€0K",note:"Brand storico",priorita:"Ok",peso:1,riassegnabile:true},
  {id:"BSC-030",cliente:"RE Fund Milano Centro",tipo:"Portfolio uffici direzionali",valore:"€490M",fase:"Negoziazione",socio:"L. Bianchi",resp:"Giampaolo",dataApertura:"08/02/2026",scad:"05/06/2026",fee:"€2K",note:"12 immobili, valorizzazione",priorita:"Ok",peso:1,riassegnabile:true},
]

export type TeamMember = {
  nome: string; stato: "Attivo"|"Assente"
  capacitaMax: number; caricoAttuale: number
  taskAperte: number; saturazionePct: number
  semaforoTeam: string
}

export const TEAM: TeamMember[] = [
  {nome:"Saso",      stato:"Attivo", capacitaMax:10, caricoAttuale:7, taskAperte:5, saturazionePct:70, semaforoTeam:"Ok"},
  {nome:"Giampaolo", stato:"Attivo", capacitaMax:10, caricoAttuale:8, taskAperte:5, saturazionePct:80, semaforoTeam:"Attenzione"},
  {nome:"Gianluca",  stato:"Attivo", capacitaMax:10, caricoAttuale:5, taskAperte:4, saturazionePct:50, semaforoTeam:"Ok"},
  {nome:"Francesco", stato:"Attivo", capacitaMax:10, caricoAttuale:5, taskAperte:4, saturazionePct:50, semaforoTeam:"Ok"},
  {nome:"Camillo",   stato:"Attivo", capacitaMax:10, caricoAttuale:4, taskAperte:4, saturazionePct:40, semaforoTeam:"Ok"},
  {nome:"Carlo",     stato:"Attivo", capacitaMax:10, caricoAttuale:5, taskAperte:4, saturazionePct:50, semaforoTeam:"Ok"},
  {nome:"Graziano",  stato:"Attivo", capacitaMax:10, caricoAttuale:5, taskAperte:4, saturazionePct:50, semaforoTeam:"Ok"},
]

export const DASHBOARD = {
  pratiche_urgenti: 7,
  urgentissimo: 2,
  critico: 5,
  team_attenzione: 1,
  sovraccarichi: 0,
  assenti: 0,
  saturazione_media: 55.7,
  top_urgenze: [
    {id:"BSC-001", cliente:"Gruppo Ferretti SpA",    priorita:"Urgentissimo", scad:"22/04/2026", resp:"Saso"},
    {id:"BSC-016", cliente:"Banca Regionale Centro",  priorita:"Urgentissimo", scad:"25/04/2026", resp:"Giampaolo"},
    {id:"BSC-006", cliente:"Orion Capital Partners",  priorita:"Critico",      scad:"26/04/2026", resp:"Carlo"},
    {id:"BSC-003", cliente:"Famiglia Albrizzi",       priorita:"Critico",      scad:"28/04/2026", resp:"Gianluca"},
    {id:"BSC-023", cliente:"Hedge Fund Zurigo",       priorita:"Critico",      scad:"28/04/2026", resp:"Giampaolo"},
    {id:"BSC-011", cliente:"Luxoro Holding SA",       priorita:"Critico",      scad:"30/04/2026", resp:"Francesco"},
    {id:"BSC-028", cliente:"Startup Mobility Roma",   priorita:"Critico",      scad:"30/04/2026", resp:"Graziano"},
  ]
}

export type RedistribRow = {
  id: string; cliente: string; da: string; a: string
  priorita: string; peso: number; caricoPost: number; saturazionePost: string
}

export const REDISTRIB_PREVIEW: RedistribRow[] = [
  {id:"BSC-001",cliente:"Gruppo Ferretti SpA",    da:"Saso",a:"—",         priorita:"Urgentissimo",peso:3,caricoPost:0, saturazionePost:"nessun assegnatario"},
  {id:"BSC-008",cliente:"Mediobanca Private",      da:"Saso",a:"Carlo",     priorita:"Ok",          peso:1,caricoPost:6, saturazionePost:"60%"},
  {id:"BSC-022",cliente:"Consorzio Agri Piemonte", da:"Saso",a:"Francesco", priorita:"Ok",          peso:1,caricoPost:6, saturazionePost:"60%"},
  {id:"BSC-029",cliente:"Ceramiche Vietri Srl",    da:"Saso",a:"Gianluca",  priorita:"Ok",          peso:1,caricoPost:6, saturazionePost:"60%"},
  {id:"BSC-015",cliente:"Cantieri Navali Trieste",  da:"Saso",a:"Graziano",  priorita:"Ok",          peso:1,caricoPost:6, saturazionePost:"60%"},
]

export const PIANO_TEST = [
  {num:"1",scenario:"Peso da Priorità",  azione:"Cambia una riga da «Ok» a «Critico» in colonna Priorità.",                                        esito:"La colonna Peso passa da 1 a 2; nel tab Team aumenta il carico del responsabile."},
  {num:"2",scenario:"Semaforo persona",  azione:"Porta un responsabile vicino alla capacità massima o abbassa la sua capacità in Team.",             esito:"La saturazione % sale e il semaforo team passa a Attenzione o Sovraccarico."},
  {num:"3",scenario:"Assenza simulata",  azione:"Nel tab Team imposta Saso = Assente e lancia «Simula redistribuzione assenti».",                    esito:"Nel tab Test Preview compaiono le pratiche di Saso con il nuovo responsabile suggerito, senza modificare la pipeline."},
  {num:"4",scenario:"Assenza live",      azione:"Con Saso ancora Assente, lancia «Redistribuisci pratiche assenti».",                               esito:"Le pratiche riassegnabili cambiano owner in Pipeline Pratiche; il Log si popola."},
  {num:"5",scenario:"Email scadenze",    azione:"Lancia «Invia report scadenze».",                                                                   esito:"Arriva una mail con le pratiche Urgentissimo/Critico e i giorni mancanti."},
]

export const COLONNE = [
  {letter:"A",name:"ID pratica",      desc:"Codice univoco",          explain:"Ogni contratto ha un codice univoco (es. BSC-001). Serve per riferirsi a una pratica senza ambiguità in email, telefonate e riunioni.",                                                                 bad:"Senza: «quella cosa di Ferretti» — quale delle tre pratiche Ferretti? Nessuno lo sa."},
  {letter:"B",name:"Cliente",         desc:"Nome del cliente",        explain:"Chi ha incaricato Black Swan Capital. Il nome deve essere quello legale esatto — distingue Albrizzi SpA da Albrizzi Holding.",                                                                             bad:"Un socio confonde due soggetti giuridici diversi. Conseguenze legali enormi."},
  {letter:"C",name:"Tipo operazione", desc:"Categoria M&A",           explain:"Acquisizione, fusione, carve-out, LBO, passaggio generazionale… Ogni tipo ha iter legale, tempi e rischi diversi.",                                                                                      bad:"Un junior tratta un LBO come un'acquisizione semplice. Il leverage non viene strutturato. Il deal salta."},
  {letter:"D",name:"Valore deal",     desc:"Importo in milioni €",    explain:"Determina la fee dello studio, la priorità del team, le risorse allocate. Un deal da €800M non può avere lo stesso presidio di uno da €12M.",                                                             bad:"Un socio dedica 3 giorni a un deal da €18M e ignora quello da €680M. Fee persa, cliente perso."},
  {letter:"E",name:"Fase",            desc:"Stadio del processo",     explain:"Onboarding → Lettera d'intenti → Term Sheet → Due Diligence → Negoziazione → Signing → Closing. Ogni fase ha scadenze e rischi specifici.",                                                              bad:"Nessuno sa se la DD è finita o in corso. Il cliente chiede aggiornamenti, lo studio non sa rispondere."},
  {letter:"F",name:"Socio ref.",      desc:"Socio responsabile",      explain:"Il socio che risponde al cliente. È la persona che firma, va alle riunioni di board, prende le decisioni finali.",                                                                                        bad:"Il cliente chiama, tre soci danno tre risposte diverse. Credibilità azzerata."},
  {letter:"G",name:"Responsabile",    desc:"Chi la gestisce",         explain:"Chi segue la pratica giorno per giorno. Questa è la colonna usata per i filter view e per la redistribuzione automatica.",                                                                               bad:"Una scadenza slitta perché «pensavo ci pensasse lui». Lo studio risponde con soldi e reputazione."},
  {letter:"H",name:"Data apertura",   desc:"Inizio pratica",          explain:"Serve per capire se una pratica è bloccata da troppo tempo e per la pianificazione delle risorse.",                                                                                                       bad:"Una pratica aperta 18 mesi fa viene scoperta casualmente. Rischio contenzioso."},
  {letter:"I",name:"Scadenza",        desc:"Data limite",             explain:"La data entro cui deve succedere qualcosa di preciso. Spesso è un termine perentorio con penali contrattuali.",                                                                                           bad:"La scadenza passa. La controparte attiva una penale da €500K. Lo studio paga."},
  {letter:"J",name:"Giorni alla scad.",desc:"=I-TODAY()",            explain:"La formula =I5-TODAY() calcola automaticamente i giorni rimanenti ogni volta che si apre il foglio.",                                                                                                      bad:"Qualcuno aggiorna a mano ogni settimana. Si dimentica. Si sbaglia."},
  {letter:"K",name:"Semaforo",        desc:"Formula IF annidata",     explain:"La formula IF legge i giorni: Urgentissimo (≤7), Critico (≤14), Attenzione (≤30), Ok. Il foglio decide da solo.",                                                                                        bad:"Ogni lunedì un paralegal scorre 30 righe manualmente. 40 minuti persi, errori garantiti."},
  {letter:"L",name:"Fee stimata",     desc:"Compenso previsto",       explain:"Il compenso atteso da quella pratica. Serve per la pianificazione finanziaria.",                                                                                                                          bad:"Il managing partner scopre il gap di budget a bilancio chiuso."},
  {letter:"M",name:"Note operative",  desc:"Contesto libero",         explain:"Tutto quello che non entra nelle colonne strutturate. È la memoria operativa del team.",                                                                                                                 bad:"Un nuovo collaboratore commette una gaffe con il cliente. Il contesto era in testa al socio."},
  {letter:"N",name:"Priorità",        desc:"Urgentissimo/Critico/Ok", explain:"Categoria di urgenza. Alimenta il sistema di redistribuzione automatica e il calcolo del Peso.",                                                                                                         bad:"Ogni lunedì la riunione dura 45 minuti per decidere cosa è urgente. Con questa colonna: 3 minuti."},
  {letter:"O",name:"Peso",            desc:"1–3 da priorità",         explain:"Valore numerico per il calcolo della saturazione del team. Urgentissimo=3, Critico=2, Attenzione/Ok=1. È il cuore del bilanciamento automatico.",                                                        bad:"Senza peso: il sistema non distingue una pratica da €890M da una da €12M."},
  {letter:"P",name:"Riassegnabile",   desc:"Sì / No",                 explain:"Se la pratica può essere redistribuita automaticamente in caso di assenza. Alcune pratiche sono troppo riservate per essere passate automaticamente.",                                                   bad:"Senza: lo script tenta di redistribuire anche pratiche riservate o bloccate. Errori critici."},
]

export const GLOSSARIO = [
  {termine:"Acquisizione",               semplice:"Compri un'azienda intera o una parte. A paga B per prendere il controllo di C.",                                                            rischio:"Se la Due Diligence è superficiale, scopri i problemi solo dopo il closing. Valore distrutto: può essere il 100% dell'investimento."},
  {termine:"Merger / Fusione",           semplice:"Due aziende diventano una sola. Come due fiumi che si uniscono.",                                                                          rischio:"Cultura aziendale, sistemi, persone: tutto va ricombinato. Il 70% dei merger fallisce per fattori umani, non finanziari."},
  {termine:"Due Diligence",              semplice:"L'ispezione prima di comprare. Controlli conti, contratti, debiti nascosti, contenziosi legali.",                                          rischio:"Saltarla significa scoprire scheletri nell'armadio a deal chiuso. Rischio: nullità del contratto o perdite enormi."},
  {termine:"Term Sheet",                 semplice:"Il contratto di fidanzamento. Acquirente e venditore si accordano sui punti chiave prima dei dettagli legali.",                            rischio:"Ogni punto vago costerà 10x in negoziazione finale."},
  {termine:"Lettera d'intenti",          semplice:"Dichiari formalmente che vuoi trattare. Non vincola economicamente, ma crea aspettative legali.",                                          rischio:"Se esclusiva e riservatezza non sono chiare, il venditore può trattare con altri."},
  {termine:"Signing",                    semplice:"Il giorno della firma del contratto definitivo. Le parti si impegnano legalmente.",                                                        rischio:"Condizioni sospensive non chiuse → il deal può saltare anche dopo la firma."},
  {termine:"Closing",                    semplice:"Il giorno in cui i soldi passano e la proprietà cambia.",                                                                                  rischio:"Problemi tecnici, fiscali o regolatori dell'ultimo minuto possono bloccare tutto."},
  {termine:"Carve-out",                  semplice:"Separi e vendi solo un pezzo di un'azienda. Come togliere una fetta da una torta.",                                                       rischio:"Costo operativo spesso sottostimato del 30-40%."},
  {termine:"LBO — Leveraged Buyout",     semplice:"Compri un'azienda usando principalmente debito. L'azienda stessa ripaga il prestito con i suoi utili futuri.",                            rischio:"Se i flussi di cassa calano, l'azienda non riesce a ripagare. Rischio fallimento."},
  {termine:"Exit / Uscita",              semplice:"Il momento in cui un investitore vende la sua quota e incassa il ritorno.",                                                                rischio:"Timing sbagliato = vendere a multipli bassi."},
  {termine:"NPL — Non Performing Loan",  semplice:"Crediti bancari non rimborsati che le banche vendono a sconto.",                                                                          rischio:"Valutazione sbagliata del tasso di recupero = perdite strutturali."},
  {termine:"Passaggio generazionale",    semplice:"Trasferimento di un'azienda familiare alla generazione successiva o a terzi.",                                                             rischio:"Senza pianificazione: litigi familiari, imposta di successione elevata, perdita del controllo."},
  {termine:"Fee di advisory",            semplice:"Il compenso dello studio. Di solito 0.5-2% del valore del deal.",                                                                         rischio:"Fee non strutturata = advisor non allineato agli interessi del cliente."},
  {termine:"Saturazione team",           semplice:"Quanto è carico un membro del team rispetto alla sua capacità massima. 80%+ = zona rischio.",                                             rischio:"Chi è al 90% continua a ricevere pratiche. Errori, burnout, scadenze saltate."},
  {termine:"Redistribuzione automatica", semplice:"Quando qualcuno è assente, il sistema riassegna le sue pratiche a chi ha più capacità — bilanciando il carico automaticamente.",          rischio:"Senza: le pratiche rimangono orfane finché qualcuno se ne accorge. Nel M&A può voler dire perdere un deal."},
]

export const GUIDA = [
  {
    fase:"Fase 1 — Contesto", durata:"15 min",
    tuFai:"Proietti l'app. Spieghi cos'è Black Swan Capital e perché è messa male senza strumenti. Clicchi ogni colonna A→P e leggi la spiegazione con il rischio in rosso.",
    loroFanno:"Aprono il Google Sheet condiviso. Seguono le colonne mentre le spieghi.",
    domanda:"Se fossi il managing partner, come scopriresti le urgenze? Quanto ci vorresti?"
  },
  {
    fase:"Fase 2 — Formula giorni", durata:"10 min",
    tuFai:"Sul Google Sheet: clicchi J5 → digiti =I5-TODAY() → invio → trascini fino a J34. Il foglio ora sa quanti giorni mancano ad ogni scadenza.",
    loroFanno:"Seguono sul loro sheet e replicano la formula su J5. Trascinano.",
    domanda:"Cosa succederebbe se aggiornassi questo a mano ogni settimana?"
  },
  {
    fase:"Fase 3 — Formula semaforo", durata:"10 min",
    tuFai:"Clicchi K5 → digiti: =IF(J5<=7,\"Urgente\",IF(J5<=14,\"Critico\",IF(J5<=30,\"Attenzione\",\"Ok\"))) → trascini fino a K34. Mostri la formattazione condizionale.",
    loroFanno:"Replicano su K5 e trascinano. Vedono i semafori accendersi.",
    domanda:"Chi avrebbe scoperto le scadenze critiche senza questo sistema? E quando?"
  },
  {
    fase:"Fase 4 — Filter view", durata:"20 min",
    tuFai:"La colonna G ha già i vostri nomi. Crei il filter view 'Saso' in diretta: Dati → Visualizzazioni filtro → Crea nuova → G=Saso → rinomini 'Saso'. Mostri che gli altri vedono ancora tutto.",
    loroFanno:"A turno (2 min ciascuno): Giampaolo, Gianluca, Francesco, Camillo, Carlo, Graziano creano il loro. Mentre uno crea, gli altri cliccano la pill del compagno sull'app.",
    domanda:"Quante pratiche urgenti ha Giampaolo? Come lo vedresti senza filter view?"
  },
  {
    fase:"Fase 5 — WOW finale", durata:"10 min",
    tuFai:"Mostri lo script Apps Script (solo lettura, non lo scrivi). Esegui il trigger manuale → arriva l'email con le scadenze. Dici: «Questo gira ogni lunedì senza che nessuno premi niente».",
    loroFanno:"Guardano. Non toccano niente. L'obiettivo è capire che esiste e cosa fa.",
    domanda:"Cosa cambierebbe nel vostro lavoro se aveste questo? Chi vi serve per costruirlo? Quanto ci vuole? Adesso sapete rispondere."
  },
]

// Slide per la modalità presentazione
export const SLIDES = [
  {
    id: 1,
    tipo: "copertina",
    titolo: "I Cigni Neri",
    sottotitolo: "Workshop · Google Sheets & Automazioni",
    body: "Caso studio: Black Swan Capital — M&A Advisory",
  },
  {
    id: 2,
    tipo: "problema",
    titolo: "Il problema",
    body: "Black Swan Capital gestisce 30 pratiche M&A per un valore totale di €7.8 miliardi. Nessun sistema. Tutto su email e file sparsi. Tre scadenze critiche stanno per saltare.",
    highlight: "Chi se ne accorge? Quando?",
  },
  {
    id: 3,
    tipo: "numeri",
    titolo: "La situazione oggi",
    metriche: [
      {label:"Pratiche attive", valore:"30", sub:"in gestione"},
      {label:"Portfolio totale", valore:"€7.8B", sub:"deal in corso"},
      {label:"Urgenze attive", valore:"7", sub:"Urgentissimo + Critico", danger:true},
      {label:"Saturazione media", valore:"55.7%", sub:"team sotto pressione"},
    ]
  },
  {
    id: 4,
    tipo: "obiettivo",
    titolo: "L'obiettivo del workshop",
    body: "Non imparare a usare Sheets. Capire cosa chiedere a chi lo usa per voi — e controllare il risultato.",
    highlight: "Delega consapevole.",
  },
  {
    id: 5,
    tipo: "agenda",
    titolo: "Agenda · 2h 30min",
    items: [
      "Fase 1 · Contesto e colonne A→P · 15 min",
      "Fase 2 · Formula giorni =I5-TODAY() · 10 min",
      "Fase 3 · Formula semaforo IF annidata · 10 min",
      "Fase 4 · Filter view personalizzati · 20 min",
      "Pausa · 10 min",
      "Fase 5 · Script & email automatica · 10 min",
      "Debrief · domanda finale a ognuno · 15 min",
    ]
  },
  {
    id: 6,
    tipo: "concetto",
    titolo: "Cosa è un Google Sheet davvero",
    body: "Non è Excel sul cloud. È un database collaborativo in tempo reale con un motore di automazione integrato.",
    highlight: "Tre livelli: dati → viste filtrate → azioni automatiche.",
  },
  {
    id: 7,
    tipo: "formula",
    titolo: "La formula che cambia tutto",
    formula: "=I5-TODAY()",
    spiegazione: "Calcola i giorni alla scadenza da sola, ogni giorno, senza che nessuno la aggiorni.",
    domanda: "Quante ore al mese risparmia questa formula?",
  },
  {
    id: 8,
    tipo: "formula",
    titolo: "Il semaforo automatico",
    formula: '=IF(J5<=7,"Urgente",IF(J5<=14,"Critico",IF(J5<=30,"Attenzione","Ok")))',
    spiegazione: "Il foglio legge i giorni e decide da solo il colore. Nessuno lo tocca.",
    domanda: "Chi avrebbe trovato le 7 urgenze senza questo?",
  },
  {
    id: 9,
    tipo: "filterview",
    titolo: "Filter view — il superpotere nascosto",
    body: "Ogni partecipante crea la propria vista sul foglio condiviso. Gli altri vedono ancora tutto. La vista è tua, il foglio è di tutti.",
    highlight: "Dati → Visualizzazioni filtro → Crea nuova",
  },
  {
    id: 10,
    tipo: "redistribuzione",
    titolo: "Redistribuzione automatica",
    body: "Saso è assente. Il sistema legge le sue pratiche, calcola chi ha più capacità disponibile, ridistribuisce bilanciando il carico e notifica i nuovi responsabili via email.",
    highlight: "BSC-001 rimane orfana: nessuno ha abbastanza capacità. Il sistema lo segnala.",
  },
  {
    id: 11,
    tipo: "wow",
    titolo: "Il momento WOW",
    body: "Lo script gira. Aspetti in silenzio.",
    highlight: "L'email arriva.",
    sub: "Questo gira ogni lunedì alle 8 senza che nessuno premi niente.",
  },
  {
    id: 12,
    tipo: "chiusura",
    titolo: "Cosa portate a casa",
    items: [
      "Il Google Sheet operativo con i vostri filter view",
      "Il link a questa app — resta online",
      "Le 3 domande per delegare bene qualsiasi automazione",
    ],
    frase: "Non è usare Sheets. È sapere cosa chiedere a chi lo usa per voi.",
  },
]
