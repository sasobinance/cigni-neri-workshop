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
  id: string
  cliente: string
  tipo: string
  valore: string
  fase: string
  socio: string
  resp: string
  scad: string
  giorni: number
  fee: string
  note: string
}

export const PRATICHE: Pratica[] = [
  {id:"BSC-001",cliente:"Gruppo Ferretti SpA",tipo:"Acquisizione industriale",valore:"€340M",fase:"Due Diligence",socio:"G. Valentini",resp:"Saso",scad:"22/04/25",giorni:4,fee:"€1.7M",note:"DD legale e tecnica in corso"},
  {id:"BSC-002",cliente:"Blackstone Real Estate",tipo:"Portfolio immobiliare",valore:"€680M",fase:"Signing",socio:"F. Moretti",resp:"Giampaolo",scad:"15/05/25",giorni:27,fee:"€3.4M",note:"Closing imminente"},
  {id:"BSC-003",cliente:"Famiglia Albrizzi",tipo:"Exit partecipazione SPA",valore:"€95M",fase:"Term Sheet",socio:"C. Russo",resp:"Gianluca",scad:"28/04/25",giorni:10,fee:"€475K",note:"Trattativa riservata famiglia"},
  {id:"BSC-004",cliente:"TechVenture SGR",tipo:"Merger SaaS + FinTech",valore:"€210M",fase:"Due Diligence",socio:"L. Bianchi",resp:"Francesco",scad:"12/05/25",giorni:24,fee:"€1.05M",note:"Due diligence IT critica"},
  {id:"BSC-005",cliente:"Dinastia Morselli",tipo:"Passaggio generazionale",valore:"€520M",fase:"Onboarding",socio:"G. Valentini",resp:"Camillo",scad:"30/07/25",giorni:103,fee:"€2.6M",note:"Cliente HNWI — massima riservatezza"},
  {id:"BSC-006",cliente:"Orion Capital Partners",tipo:"Leveraged buyout",valore:"€175M",fase:"Closing",socio:"F. Moretti",resp:"Carlo",scad:"26/04/25",giorni:8,fee:"€875K",note:"Finanziamento sindacato quasi chiuso"},
  {id:"BSC-007",cliente:"Investimenti Lombardi",tipo:"Acquisizione PMI manifattura",valore:"€48M",fase:"Lettera d'intenti",socio:"C. Russo",resp:"Graziano",scad:"01/06/25",giorni:44,fee:"€240K",note:"Prima operazione cliente"},
  {id:"BSC-008",cliente:"Mediobanca Private",tipo:"Carve-out retail",valore:"€290M",fase:"Negoziazione",socio:"G. Valentini",resp:"Saso",scad:"30/05/25",giorni:42,fee:"€1.45M",note:"Spinoff da holding quotata"},
  {id:"BSC-009",cliente:"FondoNext Italia",tipo:"Club deal infrastrutture",valore:"€415M",fase:"Due Diligence",socio:"L. Bianchi",resp:"Giampaolo",scad:"15/06/25",giorni:58,fee:"€2.07M",note:"Co-investitori internazionali"},
  {id:"BSC-010",cliente:"Studio Legale Conti",tipo:"Joint venture legale",valore:"€22M",fase:"Term Sheet",socio:"C. Russo",resp:"Gianluca",scad:"20/05/25",giorni:32,fee:"€110K",note:"Partnership strategica"},
  {id:"BSC-011",cliente:"Luxoro Holding SA",tipo:"Acquisizione brand moda",valore:"€180M",fase:"Signing",socio:"G. Valentini",resp:"Francesco",scad:"30/04/25",giorni:12,fee:"€900K",note:"Brand toscano premium"},
  {id:"BSC-012",cliente:"Energia Verde SpA",tipo:"M&A rinnovabili",valore:"€320M",fase:"Due Diligence",socio:"F. Moretti",resp:"Camillo",scad:"25/05/25",giorni:37,fee:"€1.6M",note:"Portafoglio fotovoltaico"},
  {id:"BSC-013",cliente:"Gruppo GDO Italmarket",tipo:"Acquisizione catena GDO",valore:"€560M",fase:"Negoziazione",socio:"L. Bianchi",resp:"Carlo",scad:"30/06/25",giorni:73,fee:"€2.8M",note:"Operazione complessa — antitrust"},
  {id:"BSC-014",cliente:"PE Fund Adriatico",tipo:"Secondary buyout",valore:"€195M",fase:"Term Sheet",socio:"C. Russo",resp:"Graziano",scad:"01/07/25",giorni:74,fee:"€975K",note:"Uscita fondo precedente"},
  {id:"BSC-015",cliente:"Cantieri Navali Trieste",tipo:"Fusione per incorporazione",valore:"€430M",fase:"Onboarding",socio:"G. Valentini",resp:"Saso",scad:"01/08/25",giorni:105,fee:"€2.15M",note:"Operazione sindacale delicata"},
  {id:"BSC-016",cliente:"Banca Regionale Centro",tipo:"Cessione sportello ATM",valore:"€18M",fase:"Closing",socio:"F. Moretti",resp:"Giampaolo",scad:"25/04/25",giorni:7,fee:"€90K",note:"Operazione minore"},
  {id:"BSC-017",cliente:"Healthcare Partners",tipo:"Roll-up cliniche private",valore:"€240M",fase:"Due Diligence",socio:"C. Russo",resp:"Gianluca",scad:"20/06/25",giorni:63,fee:"€1.2M",note:"DD regolatoria settore sanitario"},
  {id:"BSC-018",cliente:"Immobiliare Venezia Srl",tipo:"Sale & leaseback",valore:"€67M",fase:"Lettera d'intenti",socio:"L. Bianchi",resp:"Francesco",scad:"10/06/25",giorni:53,fee:"€335K",note:"Hotel 5 stelle centro storico"},
  {id:"BSC-019",cliente:"Distillerie Meridionali",tipo:"Acquisizione brand spirits",valore:"€115M",fase:"Term Sheet",socio:"G. Valentini",resp:"Camillo",scad:"18/05/25",giorni:30,fee:"€575K",note:"Buyer internazionale interessato"},
  {id:"BSC-020",cliente:"Software House Torino",tipo:"Strategic investment SaaS",valore:"€38M",fase:"Onboarding",socio:"F. Moretti",resp:"Carlo",scad:"15/07/25",giorni:88,fee:"€190K",note:"VC lead + round B"},
  {id:"BSC-021",cliente:"Farmaceutica Gelli SpA",tipo:"Fusione laboratori",valore:"€285M",fase:"Due Diligence",socio:"C. Russo",resp:"Graziano",scad:"05/05/25",giorni:17,fee:"€1.42M",note:"Autorizzazioni AIFA necessarie"},
  {id:"BSC-022",cliente:"Consorzio Agri Piemonte",tipo:"Acquisizione cooperativa",valore:"€42M",fase:"Negoziazione",socio:"L. Bianchi",resp:"Saso",scad:"25/06/25",giorni:68,fee:"€210K",note:"Struttura cooperativistica complessa"},
  {id:"BSC-023",cliente:"Hedge Fund Zurigo",tipo:"Acquisizione NPL portfolio",valore:"€890M",fase:"Signing",socio:"G. Valentini",resp:"Giampaolo",scad:"28/04/25",giorni:10,fee:"€4.45M",note:"Operazione cross-border"},
  {id:"BSC-024",cliente:"Albergo Diffuso Puglia",tipo:"Cessione catena hospitality",valore:"€78M",fase:"Lettera d'intenti",socio:"F. Moretti",resp:"Gianluca",scad:"10/07/25",giorni:83,fee:"€390K",note:"Turismo premium"},
  {id:"BSC-025",cliente:"Costruzioni Padana SpA",tipo:"Carve-out divisione B2B",valore:"€145M",fase:"Onboarding",socio:"C. Russo",resp:"Francesco",scad:"20/08/25",giorni:124,fee:"€725K",note:"Separazione societaria complessa"},
  {id:"BSC-026",cliente:"Family Office Marchetti",tipo:"Riassetto holding familiare",valore:"€310M",fase:"Term Sheet",socio:"L. Bianchi",resp:"Camillo",scad:"22/05/25",giorni:34,fee:"€1.55M",note:"4 rami familiari — governance"},
  {id:"BSC-027",cliente:"Porto Franco Trieste SpA",tipo:"Privatizzazione parziale",valore:"€670M",fase:"Due Diligence",socio:"G. Valentini",resp:"Carlo",scad:"30/05/25",giorni:42,fee:"€3.35M",note:"Operazione pubblica — sensibile"},
  {id:"BSC-028",cliente:"Startup Mobility Roma",tipo:"Seed + convertibile",valore:"€12M",fase:"Closing",socio:"F. Moretti",resp:"Graziano",scad:"30/04/25",giorni:12,fee:"€60K",note:"Closing rapido"},
  {id:"BSC-029",cliente:"Ceramiche Vietri Srl",tipo:"Acquisizione artigianato",valore:"€29M",fase:"Lettera d'intenti",socio:"C. Russo",resp:"Saso",scad:"20/07/25",giorni:93,fee:"€145K",note:"Brand storico"},
  {id:"BSC-030",cliente:"RE Fund Milano Centro",tipo:"Portfolio uffici direzionali",valore:"€490M",fase:"Negoziazione",socio:"L. Bianchi",resp:"Giampaolo",scad:"05/06/25",giorni:48,fee:"€2.45M",note:"12 immobili, valorizzazione"},
]

export const COLONNE = [
  {letter:"A",name:"ID pratica",desc:"Codice univoco",explain:"Ogni contratto ha un codice univoco (es. BSC-001). Serve per riferirsi a una pratica senza ambiguità in email, telefonate e riunioni.",bad:"Senza: «quella cosa di Ferretti» — quale delle tre pratiche Ferretti? Nessuno lo sa."},
  {letter:"B",name:"Cliente",desc:"Nome del cliente",explain:"Chi ha incaricato Black Swan Capital. Può essere una holding, una famiglia, un fondo. Il nome qui deve essere quello legale esatto.",bad:"Un socio confonde Albrizzi SpA con Albrizzi Holding — due soggetti giuridici diversi, conseguenze legali enormi."},
  {letter:"C",name:"Tipo operazione",desc:"Categoria M&A",explain:"Acquisizione, fusione, carve-out, LBO, passaggio generazionale… Ogni tipo ha iter legale, tempi e rischi diversi. Categorizzarlo permette di filtrare, assegnare expertise, stimare tempi.",bad:"Un junior tratta un LBO come un'acquisizione semplice. Il leverage non viene strutturato. Il deal salta."},
  {letter:"D",name:"Valore deal",desc:"Importo in milioni €",explain:"Il valore dell'operazione in euro. Determina la fee dello studio, la priorità del team, le risorse allocate. Un deal da €800M non può avere lo stesso presidio di uno da €12M.",bad:"Un socio dedica 3 giorni a un deal da €18M e ignora quello da €680M. Fee persa, cliente perso."},
  {letter:"E",name:"Fase",desc:"Stadio del processo",explain:"Il punto esatto nel processo M&A: Onboarding → Lettera d'intenti → Term Sheet → Due Diligence → Negoziazione → Signing → Closing. Ogni fase ha scadenze e rischi specifici.",bad:"Nessuno sa se la DD è già finita o in corso. Il cliente chiede aggiornamenti, lo studio non sa rispondere."},
  {letter:"F",name:"Socio ref.",desc:"Socio responsabile",explain:"Il socio dello studio che risponde al cliente. È la persona che firma, va alle riunioni di board, prende le decisioni finali.",bad:"Il cliente chiama, tre soci danno tre risposte diverse. Credibilità dello studio azzerata."},
  {letter:"G",name:"Responsabile",desc:"Chi la gestisce",explain:"Chi segue la pratica giorno per giorno: scadenze, documenti, call con le controparti. Questa è la colonna usata per i filter view personalizzati nel workshop.",bad:"Una scadenza slitta perché «pensavo ci pensasse lui». Il cliente subisce un danno. Lo studio risponde con soldi e reputazione."},
  {letter:"H",name:"Data apertura",desc:"Inizio pratica",explain:"Quando è iniziata la pratica. Serve per capire se una pratica è bloccata da troppo tempo e per la pianificazione delle risorse.",bad:"Una pratica aperta 18 mesi fa viene scoperta casualmente. Il cliente non è mai stato aggiornato. Rischio contenzioso."},
  {letter:"I",name:"Scadenza",desc:"Data limite",explain:"La data entro cui deve succedere qualcosa di preciso: consegna DD, firma term sheet, deposito atti. Spesso è un termine perentorio con penali contrattuali.",bad:"Nessuno monitora. La scadenza passa. La controparte attiva una penale da €500K. Lo studio paga."},
  {letter:"J",name:"Giorni alla scad.",desc:"=I5-TODAY()",explain:"La formula =I5-TODAY() calcola automaticamente i giorni rimanenti ogni volta che si apre il foglio. Non serve aggiornarlo a mano — lo sheet lo sa da solo.",bad:"Qualcuno aggiorna a mano ogni settimana. Si dimentica. Si sbaglia. Un martedì conta «14 giorni» ma sono già 7."},
  {letter:"K",name:"Semaforo",desc:"Formula IF annidata",explain:"La formula IF legge i giorni e assegna uno stato: Urgente (≤7 giorni), Critico (≤14), Attenzione (≤30), Ok. Il foglio decide da solo senza che nessuno tocchi niente.",bad:"Ogni lunedì un paralegal scorre 30 righe e colora manualmente. 40 minuti persi, errori garantiti."},
  {letter:"L",name:"Fee stimata",desc:"Compenso previsto",explain:"Il compenso che lo studio prevede di incassare. Di solito 0.5-2% del valore del deal. Serve per la pianificazione finanziaria e per capire quali pratiche presidiare di più.",bad:"Il socio managing non sa se il trimestre è in linea con il budget. Scopre il gap a bilancio chiuso."},
  {letter:"M",name:"Note operative",desc:"Contesto libero",explain:"Tutto quello che non entra nelle colonne strutturate: cliente riservato, DD bloccata, controparte straniera. È la memoria operativa del team.",bad:"Un nuovo collaboratore commette una gaffe con il cliente. Il contesto era in testa al socio, non nel foglio."},
  {letter:"N",name:"Priorità",desc:"Ranking automatico",explain:"Un ranking che combina urgenza e valore. Permette di rispondere in 3 secondi a «cosa facciamo oggi?» senza leggere 30 righe.",bad:"Ogni lunedì la riunione dura 45 minuti per decidere cosa è urgente. Con questa colonna: 3 minuti."},
]

export const GLOSSARIO = [
  {termine:"Acquisizione",semplice:"Compri un'azienda intera o una parte. A paga B per prendere il controllo di C.",rischio:"Se la Due Diligence è superficiale, scopri i problemi solo dopo il closing. Valore distrutto: può essere il 100% dell'investimento."},
  {termine:"Merger / Fusione",semplice:"Due aziende diventano una sola. Come due fiumi che si uniscono.",rischio:"Cultura aziendale, sistemi, persone: tutto va ricombinato. Il 70% dei merger fallisce per fattori umani, non finanziari."},
  {termine:"Due Diligence",semplice:"L'ispezione prima di comprare. Controlli conti, contratti, debiti nascosti, contenziosi legali.",rischio:"Saltarla o farla male significa scoprire scheletri nell'armadio a deal chiuso. Rischio: nullità del contratto o perdite enormi."},
  {termine:"Term Sheet",semplice:"Il contratto di fidanzamento. Acquirente e venditore si accordano sui punti chiave prima dei dettagli legali.",rischio:"Se le condizioni cambiano dopo la firma, nascono contenziosi. Ogni punto vago costerà 10x in negoziazione finale."},
  {termine:"Lettera d'intenti",semplice:"Dichiari formalmente che vuoi trattare. Non vincola economicamente, ma crea aspettative legali e reputazionali.",rischio:"Se esclusiva e riservatezza non sono chiare, il venditore può trattare con altri. Perdita di tempo e opportunità."},
  {termine:"Signing",semplice:"Il giorno della firma del contratto definitivo. Le parti si impegnano legalmente.",rischio:"Condizioni sospensive non chiuse → il deal può saltare anche dopo la firma. Danni reputazionali enormi."},
  {termine:"Closing",semplice:"Il giorno in cui i soldi passano e la proprietà cambia. Finisce il deal, inizia l'integrazione.",rischio:"Problemi tecnici, fiscali o regolatori dell'ultimo minuto possono bloccare tutto. Penali contrattuali pesanti."},
  {termine:"Carve-out",semplice:"Separi e vendi solo un pezzo di un'azienda. Come togliere una fetta da una torta senza rompere le altre.",rischio:"Sistemi IT, HR, contratti condivisi: tutto va separato. Costo operativo spesso sottostimato del 30-40%."},
  {termine:"LBO — Leveraged Buyout",semplice:"Compri un'azienda usando principalmente debito. L'azienda stessa ripaga il prestito con i suoi utili futuri.",rischio:"Se i flussi di cassa calano, l'azienda non riesce a ripagare. Rischio fallimento se mal strutturato."},
  {termine:"Exit / Uscita",semplice:"Il momento in cui un investitore vende la sua quota e incassa il ritorno sull'investimento.",rischio:"Timing sbagliato significa vendere a multipli bassi. Una valutazione mal costruita può dimezzare il valore percepito."},
  {termine:"NPL — Non Performing Loan",semplice:"Crediti bancari non rimborsati che le banche vendono a sconto. Il compratore tenta di recuperare il massimo.",rischio:"Valutazione sbagliata del tasso di recupero significa perdite strutturali. Settore regolato: errori normativi molto costosi."},
  {termine:"Passaggio generazionale",semplice:"Trasferimento di un'azienda familiare alla generazione successiva o a terzi tramite vendita o management buyout.",rischio:"Senza pianificazione fiscale e governance: litigi familiari, imposta di successione elevata, perdita del controllo."},
  {termine:"Fee di advisory",semplice:"Il compenso dello studio legale o dell'advisor finanziario. Di solito una percentuale del valore del deal (0.5-2%).",rischio:"Fee non strutturata bene significa advisor non allineato agli interessi del cliente. Conflitti di interesse nascosti."},
]

export const GUIDA = [
  {
    fase:"Fase 1 — Contesto",
    durata:"15 min",
    tuFai:"Proietti l'app. Racconti cos'è Black Swan Capital e perché è messa male senza strumenti. Clicchi ogni colonna A→N e leggi la spiegazione con il rischio in rosso.",
    loroFanno:"Aprono il Google Sheet condiviso. Seguono le colonne mentre le spieghi. Possono già esplorare la tabella.",
    domanda:"Quale colonna vi sembra più critica nel vostro lavoro quotidiano?"
  },
  {
    fase:"Fase 2 — Formula giorni",
    durata:"10 min",
    tuFai:"Vai sul Google Sheet. Clicchi J5 e digiti: =I5-TODAY(). Premi invio — appare il numero. Trascini la formula fino a J34. Mostri che si aggiorna da sola ogni giorno.",
    loroFanno:"Replicano la formula su J5 e trascinano sul loro sheet.",
    domanda:"Quanto tempo spendete ogni settimana ad aggiornare scadenze a mano?"
  },
  {
    fase:"Fase 3 — Formula semaforo",
    durata:"10 min",
    tuFai:"Clicchi K5 e digiti: =IF(J5<=7,\"Urgente\",IF(J5<=14,\"Critico\",IF(J5<=30,\"Attenzione\",\"Ok\"))). Trascinamento fino a K34. I semafori si accendono.",
    loroFanno:"Replicano su K5 e trascinano. Vedono i loro semafori accendersi.",
    domanda:"Chi avrebbe scoperto le 5 scadenze critiche senza questo? E quando?"
  },
  {
    fase:"Fase 4 — Filter view",
    durata:"20 min",
    tuFai:"Clicchi la pill Saso nell'app e mostri le sue pratiche. Poi sul Sheet: Dati → Visualizzazioni filtro → Crea nuova → filtri colonna G = Saso → rinomini 'Saso'. Mostri che gli altri vedono ancora tutto.",
    loroFanno:"A turno (2 min ciascuno) ognuno crea il suo filter view. Mentre uno crea, gli altri cliccano la pill del compagno sull'app e rispondono: quante pratiche urgenti ha?",
    domanda:"Cosa cambierebbe se ogni lunedì vedessi già solo le tue pratiche?"
  },
  {
    fase:"Fase 5 — Script & automazione",
    durata:"10 min",
    tuFai:"Mostri lo script Apps Script (solo lettura). Esegui il trigger manuale → arriva l'email con le scadenze. Mostri il trigger automatico settimanale.",
    loroFanno:"Guardano. Non toccano niente. L'obiettivo è capire che esiste e cosa fa.",
    domanda:"Adesso sapete cosa chiedere a un developer o a un AI. Quanto vale questo script nel vostro contesto?"
  },
]
