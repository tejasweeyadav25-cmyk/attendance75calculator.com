import type { Translations } from '../types';

const it: Translations = {
	meta: {
		title: 'Calcolatore Presenze 75% - Gratis',
		description:
			"Calcolatore presenze gratuito per il 75%. Calcola assenze sicure, lezioni necessarie e proiezioni del semestre all'istante.",
		keywords:
			'calcolatore presenze, calcolatore presenze 75, calcolatore presenze 75%, app calcolatore presenze, calcolatore presenze 75 percento, calcolatore presenze universitarie, calcolatore presenze università',
		ogLocale: 'it_IT',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		themeDark: 'Scuro',
		themeLight: 'Chiaro',
		themeToggleAria: 'Attiva/disattiva modalità scura/chiara',
		aboutUs: 'Chi Siamo',
		privacyPolicy: 'Informativa sulla Privacy',
		termsAndConditions: 'Termini e Condizioni',
		contactUs: 'Contattaci',
		languageLabel: 'Lingua',
	},
	header: {
		title: 'Calcolatore Presenze e Pianificatore Assenze 75%',
		subtitleHtml:
			'Il <strong>calcolatore presenze 75</strong> intelligente per studenti universitari. Scopri la tua percentuale esatta di presenza, calcola quante lezioni puoi saltare in sicurezza o pianifica il recupero.',
	},
	calculator: {
		targetLabel: 'Requisito di Presenza Target',
		targetPrefix: 'Target:',
		customPlaceholder: 'Personalizzato',
		attendedLabel: 'Lezioni Frequentate',
		attendedSub: '(Presenze)',
		attendedPlaceholder: 'es. 30',
		totalLabel: 'Totale Lezioni Svolte',
		totalSub: '(Ad Oggi)',
		totalPlaceholder: 'es. 40',
		semTotalLabel: 'Totale Lezioni del Semestre',
		semTotalSub: '(Opzionale)',
		semTotalPlaceholder: 'es. 100 lezioni previste',
	},
	results: {
		currentAttendanceEyebrow: 'PRESENZA ATTUALE',
		heldSuffix: 'svolte',
		rightNowEyebrow: 'STATO ATTUALE',
		waitingHeadline: 'In attesa dei dati...',
		waitingDesc: 'Inserisci i numeri qui sopra per vedere il tuo margine di assenze.',
		semesterForecastEyebrow: 'PREVISIONE SEMESTRE',
		copyButtonText: 'Copia il Riepilogo Presenze',
		toastText: 'Stato copiato negli appunti!',
		shareButtonText: 'Condividi Risultato',
		shareCopiedText: 'Immagine scaricata e didascalia copiata!',
		shareStatAttendedLabel: 'PRESENZE',
		shareStatTargetLabel: 'OBIETTIVO',
	},
	js: {
		noDataStatus: 'Nessun Dato',
		noDataVibe: 'Inserisci le lezioni frequentate e totali per calcolare il tuo stato.',
		waitingHeadline: 'In attesa dei dati...',
		waitingDesc: 'Inserisci i numeri qui sopra per vedere il tuo margine di assenze.',
		invalidStatus: 'Dati Non Validi',
		invalidVibe: 'Le lezioni frequentate non possono essere superiori al totale delle lezioni svolte! Controlla i numeri.',
		invalidHeadline: 'Errore di Inserimento',
		invalidDesc: 'Correggi il numero di presenze inserito.',
		safeToBunkPrefix: 'Puoi Saltare: {n} {classWord}',
		bunkBufferZero: 'Margine Assenze: 0 lezioni',
		safeDescWithBunks: 'Puoi saltare le prossime {n} lezioni di fila senza scendere sotto il {target}%.',
		safeDescOnLine: 'Sei sul filo del rasoio ({pct}%). Se salti la prossima lezione scendi sotto il {target}%.',
		target100Headline: 'Target del 100% Impossibile',
		target100Desc: 'Una volta saltata una lezione, il 100% non può più essere recuperato.',
		attendNextPrefix: 'Frequenta le Prossime: {n} {classWord}',
		attendNextDesc: 'Frequenta {n} lezioni consecutive senza saltarne nessuna per risalire al {target}%.',
		cookedHeadline: '💀 Previsione Semestre: Sei Fritto',
		cookedDesc: 'Anche frequentando il 100% delle {remaining} lezioni rimanenti, il massimo raggiungibile è solo il {maxPct}%.',
		semBudgetHeadline: 'Margine Assenze Semestre: {n} {classWord}',
		semBudgetDesc: 'Delle {remaining} lezioni rimanenti, devi frequentarne solo {needed} per finire sopra il {target}%.',
		mustAttendHeadline: 'Devi Frequentare: {needed} / {remaining} lezioni',
		mustAttendDesc: 'Devi frequentare almeno {needed} delle {remaining} lezioni rimanenti per raggiungere il {target}%.',
		vibeCookedStatus: 'Fritto 💀',
		vibeCookedMessageHtml:
			"<strong>Sei fritto, bro.</strong> È matematicamente impossibile salvare questa presenza anche frequentando tutte le lezioni rimanenti (Max: {maxPct}%). RIP. 💀",
		vibeSafeStatus: 'Al Sicuro e Rilassato 🚀',
		vibeSafeWithBunksHtml:
			"Puoi saltare senza problemi! Vai a prenderti una boccata d'aria, un caffè, e goditi il tempo libero. <strong>{n} {bunkWord} senza rischio.</strong> 🚀",
		vibeSafeOnEdgeHtml:
			"Sei al sicuro con <strong>{pct}%</strong>, ma sul filo del rasoio! Non saltare oggi o scendi sotto il {target}%. ⚠️",
		vibeBorderlineStatus: 'Al Limite ⚠️',
		vibeBorderlineMessageHtml:
			'Stai camminando sul ghiaccio sottile, bro. <strong>È ora di svegliarti e andare a lezione!</strong> Frequenta le prossime <strong>{n} lezioni</strong> per sistemare la situazione. ☕',
		vibeShortageStatus: 'Sotto Soglia 🚨',
		vibeShortageMessageHtml:
			'È ora di svegliarti e andare a lezione. <strong>Puoi ancora rimediare se ti impegni da subito!</strong> Frequenta le prossime <strong>{n} lezioni</strong> consecutive. 📚',
		copySummaryTitle: '📊 Riepilogo Presenze',
		copyStatusLabel: 'Stato',
		copyAttendanceLabel: 'Presenza',
		copyTargetLabel: 'Target',
		copyNoteLabel: 'Nota',
		copySemesterLabel: 'Semestre',
		classSingular: 'lezione',
		classPlural: 'lezioni',
		bunkSingular: 'assenza',
		bunkPlural: 'assenze',
		semTotalErrorTooLow: 'Il totale del semestre non può essere inferiore alle lezioni già svolte ({held}).',
		semTotalErrorNonPositive: 'Inserisci un numero positivo.',
		semTotalErrorTooLarge: 'Inserisci un numero non superiore a {max}.',
		semesterLineBudget: '{remainVerb} {n} {bunkWord} su {remaining} {classWordRemaining}',
		semesterLineMustAttend: 'devi frequentare {needed} su {remaining} {classWordRemaining}',
		semesterLineCooked: 'fritto: massimo {maxPct}% anche frequentando tutto',
		safeToBunkCappedPrefix: 'Puoi Saltare: {n} {classWord} (solo {n} {cappedVerb} questo semestre)',
		remainVerbSingular: 'rimane',
		remainVerbPlural: 'rimangono',
		semCompleteHeadline: '🏁 Semestre Concluso: {pct}%',
		semCompleteMetDesc: 'Hai concluso il semestre con il {pct}%, raggiungendo il tuo obiettivo del {target}%. 🎉',
		semCompleteMissedDesc: 'Hai concluso il semestre con il {pct}%, sotto il tuo obiettivo del {target}%.',
		semesterLineCompleteMet: 'semestre concluso al {pct}% — obiettivo raggiunto 🎉',
		semesterLineCompleteMissed: 'semestre concluso al {pct}% — obiettivo mancato',
		customTargetError: 'Inserisci un valore tra 1 e 100.',
		vibeCompleteStatus: 'Semestre Concluso 🏁',
		copyFooter: 'Calcolato su attendance75calculator.com',
		copyFailed: 'Copia negli appunti non riuscita.',
	},
	article: {
		overview: {
			h2: "Cos'è un Calcolatore di Presenze e Perché ti Serve?",
			p1Html:
				'Un <strong>calcolatore di presenze</strong> è uno strumento accademico essenziale, pensato per aiutare gli studenti a tracciare, calcolare e gestire la propria frequenza alle lezioni con precisione matematica. Nelle università e nei college di tutto il mondo, mantenere una percentuale minima di presenza — più comunemente il <strong>75% di presenze</strong> — è un requisito obbligatorio per poter sostenere gli esami di fine semestre.',
			p2Html:
				'Che tu voglia calcolare quante lezioni puoi saltare in sicurezza, capire quante lezioni consecutive devi frequentare per colmare una carenza di presenze, oppure prevedere la tua situazione a fine semestre, questo <strong>calcolatore presenze 75</strong> elimina ogni congettura. Invece di fare calcoli mentali complicati o affidarti a fogli di calcolo confusi, la nostra <strong>app calcolatore presenze</strong> fornisce informazioni istantanee e in tempo reale con solo due numeri: le lezioni frequentate e il totale delle lezioni svolte finora.',
		},
		why75: {
			h2: "Perché il 75% di Presenze è Obbligatorio all'Università?",
			p1: "Gli organi di regolamentazione dell'istruzione superiore (come UGC, AICTE, Bar Council of India, Medical Council e i consigli universitari di tutto il mondo) impongono una rigida regola del 75% di presenze. I college applicano questa regola per garantire una partecipazione costante alle lezioni, un impegno pratico nei laboratori e disciplina accademica.",
			p2: 'Scendere sotto la soglia richiesta comporta gravi conseguenze accademiche:',
			list: [
				'Esclusione dagli Esami: Gli studenti con una carenza di presenze sotto il 75% vengono spesso esclusi dagli esami di fine semestre o finali.',
				"Multe e Sanzioni per Condono: Alcuni college concedono il condono per presenze tra il 65% e il 75% con un certificato medico, ma spesso comporta pesanti sanzioni amministrative.",
				'Perdita di Valutazione Interna: Molte università assegnano da 5 a 10 punti di valutazione interna proporzionalmente alla percentuale di presenza.',
				"Ripetizione dell'Anno o Esclusione dal Semestre: Carenze gravi sotto il 60% possono comportare l'esclusione dal semestre, costringendo gli studenti a ripetere l'intero periodo accademico.",
			],
			p3Html:
				'Usare un <strong>calcolatore presenze universitarie</strong> dedicato ti permette di anticipare le carenze di presenza prima che diventino emergenze critiche.',
		},
		formulas: {
			h2: 'Come Calcolare il 75% di Presenze: Formule e Logica',
			introHtml:
				'Il nostro strumento <strong>calcolatore presenze 75</strong> si basa su algoritmi matematici precisi. Ecco la scomposizione esatta di come vengono calcolati la tua percentuale di presenza, il limite di assenze sicure e i requisiti di recupero:',
			cards: [
				{
					title: '1. Formula della Percentuale di Presenza Attuale',
					formula: 'Presenza (%) = (Lezioni Frequentate / Totale Lezioni Svolte) × 100',
					exampleLabel: 'Esempio:',
					descHtml:
						'Se finora sono state svolte 40 lezioni e ne hai frequentate 30:<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: '2. Formula del Limite di Assenze Sicure (Quando % Attuale ≥ % Target)',
					formula: 'Assenze Sicure = ⌊(Lezioni Frequentate / Frazione Target) - Totale Lezioni Svolte⌋',
					exampleLabel: 'Esempio:',
					descHtml:
						'Dove la <em>Frazione Target</em> è <code>0.75</code> per il 75%. Il simbolo di arrotondamento per difetto <code>⌊ ⌋</code> arrotonda al numero intero più vicino per garantire che la tua percentuale non scenda mai sotto il 75%.<br /><strong>Esempio:</strong> Frequentate = 36, Totale Svolte = 40, Target = 75% (0.75):<br /><code>Assenze Sicure = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8 lezioni</code>.<br />Puoi saltare in sicurezza le prossime 8 lezioni consecutive e finire comunque esattamente al 75%.',
				},
				{
					title: '3. Lezioni Consecutive Necessarie per Recuperare (Quando % Attuale < % Target)',
					formula:
						'Lezioni da Frequentare = ⌈((Frazione Target × Totale Lezioni Svolte) - Lezioni Frequentate) / (1 - Frazione Target)⌉',
					exampleLabel: 'Esempio:',
					descHtml:
						'Per un target del 75% (dove <code>Frazione Target = 0.75</code>), il denominatore è <code>1 - 0.75 = 0.25</code>. Moltiplicando per <code>4</code> la formula si semplifica in:<br /><code>Lezioni da Frequentare = ⌈3 × Totale Svolte - 4 × Frequentate⌉</code>.<br /><strong>Esempio:</strong> Frequentate = 20, Totale Svolte = 35. Per raggiungere il 75%:<br /><code>Lezioni da Frequentare = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25 lezioni</code>.<br />Devi frequentare le prossime 25 lezioni di fila senza assenze per recuperare il 75% di presenza.',
				},
			],
		},
		howTo: {
			h2: 'Come Usare Questa App Calcolatore Presenze 75 Percento',
			introHtml:
				"Usare il nostro strumento <strong>calcolatore presenze universitarie</strong> è semplice e non richiede registrazione o download:",
			steps: [
				'Seleziona il Tuo Target di Presenza: Clicca su uno dei pulsanti rapidi (60%, 65%, 70%, 75%, 80%, 85%, 90%) oppure digita qualsiasi percentuale personalizzata richiesta dal tuo dipartimento.',
				'Inserisci le Lezioni Frequentate: Inserisci il numero totale di ore di lezione o laboratorio a cui hai effettivamente partecipato finora.',
				'Inserisci il Totale delle Lezioni Svolte: Inserisci il numero cumulativo di lezioni che i tuoi professori hanno tenuto finora.',
				"(Opzionale) Inserisci il Totale delle Lezioni del Semestre: Se conosci il numero totale di lezioni previste per l'intero semestre (es. 90 o 120 lezioni), inseriscilo per sbloccare la scheda di Previsione Semestre.",
				'Leggi i Risultati Istantanei: Guarda la tua percentuale, il margine di assenze sicure, il target di recupero e lo stato dinamico aggiornarsi istantaneamente mentre digiti.',
			],
		},
		features: {
			h2: 'Caratteristiche Principali del Nostro Calcolatore Presenze Universitarie',
			items: [
				{
					icon: '⚡',
					title: 'Calcoli Istantanei in Tempo Reale',
					desc: 'Nessuna attesa e nessun pulsante "Invia". Il calcolatore aggiorna ogni valore non appena digiti o modifichi un numero.',
				},
				{
					icon: '🎯',
					title: 'Previsione di Fine Semestre',
					desc: 'Pianifica il tuo margine di assenze per il resto del semestre. Scopri se il tuo target è matematicamente raggiungibile o se sei "fritto".',
				},
				{
					icon: '🔒',
					title: 'Privacy Totale Lato Client',
					desc: 'Tutti i calcoli avvengono direttamente nel tuo browser. Nessun dato sulle presenze, credenziali di accesso o registro studenti viene mai inviato a server esterni.',
				},
				{
					icon: '🌙',
					title: 'Modalità Scura Integrata',
					desc: 'Passa senza sforzo dalla nitida modalità chiara alla profonda modalità scura OLED per le sessioni di studio universitarie fino a tarda notte.',
				},
			],
		},
		faq: {
			h2: 'Domande Frequenti (FAQ)',
			items: [
				{
					question: "Cos'è un Calcolatore di Presenze Mensile e come si usa?",
					answerHtml:
						'Un <strong>calcolatore di presenze mensile</strong> permette a studenti e lavoratori di calcolare la percentuale di presenza in un mese di calendario specifico. Basta inserire il numero di giorni o lezioni frequentate in quel mese e dividerlo per il totale dei giorni lavorativi o delle lezioni programmate in quel mese, poi moltiplicare per 100.',
				},
				{
					question: 'Qual è la Formula del Calcolatore di Presenze?',
					answerHtml:
						'La <strong>formula base delle presenze</strong> è: <code>Presenza (%) = (Lezioni Frequentate / Totale Lezioni Svolte) × 100</code>. Per trovare le assenze sicure sopra una percentuale target (P%): <code>Assenze Sicure = ⌊(Frequentate / (P/100)) - Totale Svolte⌋</code>. Per trovare le lezioni necessarie per recuperare il target (P%): <code>Lezioni da Frequentare = ⌈((P/100 × Totale Svolte) - Frequentate) / (1 - P/100)⌉</code>.',
				},
				{
					question: "Cos'è l'App Calcolatore Presenze e funziona offline?",
					answerHtml:
						"L'<strong>App Calcolatore Presenze</strong> è uno strumento gratuito, basato sul web e ottimizzato per il mobile, che funziona direttamente nel tuo browser. Calcola la percentuale di presenza, le assenze sicure e le lezioni di recupero istantaneamente, senza richiedere download da app store, accessi o archiviazione su server.",
				},
				{
					question: "Cos'è un Calcolatore di Presenze per Studenti?",
					answerHtml:
						"Un <strong>calcolatore di presenze per studenti</strong> è un calcolatore didattico specializzato, pensato per studenti di scuola e università per tenere traccia della frequenza a lezioni e laboratori. Previene l'esclusione dagli esami avvisando gli studenti quando la presenza scende vicino o sotto le soglie obbligatorie come il 75% o l'80%.",
				},
				{
					question: 'Si può usare il Calcolatore di Presenze per il 100 Percento?',
					answerHtml:
						"Sì, puoi impostare il target di presenza al <strong>100%</strong> usando il campo target personalizzato. Nota che raggiungere il 100% di presenze richiede di frequentare ogni singola lezione svolta fin dal primo giorno. Se anche una sola lezione è stata saltata, raggiungere una presenza finale del 100,0% diventa matematicamente impossibile.",
				},
				{
					question: "Come funziona il target dell'80 percento del Calcolatore di Presenze?",
					answerHtml:
						"La funzione <strong>Calcolatore di Presenze 80</strong> imposta la soglia target all'80% (comune nelle università di prestigio e nei corsi di laurea professionali). Per mantenere l'80%, devi frequentare almeno 4 lezioni su 5 svolte (Frequentate ≥ 0.8 × Totale Lezioni).",
				},
				{
					question: 'Come funziona il target del 75 percento del Calcolatore di Presenze?',
					answerHtml:
						"Il <strong>Calcolatore di Presenze 75</strong> aiuta gli studenti a rispettare la regola standard del 75% di presenze imposta dall'UGC e dai college. Se la tua presenza attuale è ≥ 75%, calcola quante lezioni puoi saltare. Se è &lt; 75%, calcola il numero esatto di lezioni consecutive che devi frequentare per tornare al 75%.",
				},
				{
					question: 'Per un calcolatore di presenze al 75 percento, quanti giorni si possono saltare?',
					answerHtml:
						'Per un semestre standard con 100 lezioni, devi frequentarne almeno 75 e puoi saltarne al massimo 25. Se attualmente hai frequentato 30 lezioni su 40 svolte, non puoi saltare nessuna lezione immediata senza scendere sotto il 75%, ma delle restanti 60 lezioni del semestre, puoi saltarne fino a 15.',
				},
				{
					question: 'Come si usa un calcolatore di percentuale di presenza?',
					answerHtml:
						'Per usare un <strong>calcolatore di percentuale di presenza</strong>: 1) Seleziona la tua presenza target (es. 75% o 80%), 2) Inserisci il numero di lezioni o giorni frequentati, 3) Inserisci il totale di lezioni o giorni svolti finora. Il calcolatore mostra immediatamente la tua percentuale attuale, il badge di stato e il margine di assenze sicure.',
				},
				{
					question: 'Come viene calcolata la percentuale di presenza?',
					answerHtml:
						'La percentuale di presenza si calcola dividendo il numero totale di sessioni presenti per il numero totale di sessioni svolte, e moltiplicando quella frazione per 100. Ad esempio, frequentare 45 lezioni su 60 dà <code>(45 / 60) × 100 = 75%</code>.',
				},
				{
					question: 'Come calcolare la percentuale di presenza con una calcolatrice?',
					answerHtml:
						'Su qualsiasi calcolatrice: digita le lezioni frequentate, premi dividi (÷), inserisci il totale delle lezioni svolte, premi moltiplica (×), inserisci 100 e premi uguale (=). Oppure usa semplicemente la nostra <strong>app calcolatore presenze</strong> online gratuita per ottenere calcoli istantanei con suggerimenti sulle assenze in modo automatico.',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • Tracker di Presenze Universitarie Online Gratuito • Calcoli lato client e 100% privato',
	},
};

export default it;
