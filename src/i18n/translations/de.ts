import type { Translations } from '../types';

const de: Translations = {
	meta: {
		title: 'Anwesenheitsrechner – Kostenloser 75 % Anwesenheitsrechner für Studenten',
		description:
			'Kostenloser Online-Anwesenheitsrechner für die 75-Prozent-Regel. Berechne sichere Fehlstunden, benötigte Stunden für 75 % Anwesenheit und Semesterprognosen in Echtzeit.',
		keywords:
			'Anwesenheitsrechner, 75 Anwesenheitsrechner, Anwesenheitsrechner 75, Anwesenheitsrechner App, 75 Prozent Anwesenheitsrechner, Anwesenheitsrechner Uni, Uni Anwesenheitsrechner, Fehlstunden Rechner',
		ogLocale: 'de_DE',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		themeDark: 'Dunkel',
		themeLight: 'Hell',
		themeToggleAria: 'Dunkel-/Hell-Modus umschalten',
		aboutUs: 'Über uns',
		privacyPolicy: 'Datenschutzerklärung',
		termsAndConditions: 'Nutzungsbedingungen',
		contactUs: 'Kontakt',
		languageLabel: 'Sprache',
	},
	header: {
		title: 'Anwesenheitsrechner & 75%-Fehlstunden-Planer',
		subtitleHtml:
			'Der intelligente <strong>75 Anwesenheitsrechner</strong> für Studierende. Kenne deine genaue Anwesenheitsquote, berechne sichere Fehlstunden oder plane deine Aufholstrategie.',
	},
	calculator: {
		targetLabel: 'Ziel-Anwesenheitsquote',
		targetPrefix: 'Ziel:',
		customPlaceholder: 'Individuell',
		attendedLabel: 'Besuchte Stunden',
		attendedSub: '(Anwesend)',
		attendedPlaceholder: 'z. B. 30',
		totalLabel: 'Gesamtzahl gehaltener Stunden',
		totalSub: '(Bisher)',
		totalPlaceholder: 'z. B. 40',
		semTotalLabel: 'Gesamtzahl der Stunden im Semester',
		semTotalSub: '(Optional)',
		semTotalPlaceholder: 'z. B. 100 geplante Stunden',
	},
	results: {
		currentAttendanceEyebrow: 'AKTUELLE ANWESENHEIT',
		heldSuffix: 'gehalten',
		rightNowEyebrow: 'STATUS JETZT',
		waitingHeadline: 'Warte auf Eingabe...',
		waitingDesc: 'Gib oben Zahlen ein, um dein Fehlstunden-Budget zu sehen.',
		semesterForecastEyebrow: 'SEMESTERPROGNOSE',
		copyButtonText: 'Anwesenheits-Vibe-Check kopieren',
		toastText: 'Status in die Zwischenablage kopiert!',
		shareButtonText: 'Ergebnis teilen',
		shareCopiedText: 'Bild heruntergeladen und Text kopiert!',
		shareStatAttendedLabel: 'ANWESENHEIT',
		shareStatTargetLabel: 'ZIEL',
	},
	js: {
		noDataStatus: 'Keine Daten',
		noDataVibe: 'Gib deine besuchten und gesamten Stunden ein, um deinen Status zu berechnen.',
		waitingHeadline: 'Warte auf Eingabe...',
		waitingDesc: 'Gib oben Zahlen ein, um dein Fehlstunden-Budget zu sehen.',
		invalidStatus: 'Ungültige Eingabe',
		invalidVibe: 'Besuchte Stunden können nicht höher sein als die Gesamtzahl gehaltener Stunden! Überprüfe deine Zahlen.',
		invalidHeadline: 'Eingabefehler',
		invalidDesc: 'Bitte korrigiere deine Anzahl besuchter Stunden.',
		safeToBunkPrefix: 'Sicher zu schwänzen: {n} {classWord}',
		bunkBufferZero: 'Fehlstunden-Puffer: 0 Stunden',
		safeDescWithBunks: 'Du kannst die nächsten {n} Stunden am Stück verpassen, ohne unter {target}% zu fallen.',
		safeDescOnLine: 'Du bist auf der Kippe ({pct}%). Verpasst du die nächste Stunde, fällst du unter {target}%.',
		target100Headline: '100%-Ziel unmöglich',
		target100Desc: 'Sobald eine Stunde verpasst wurde, können 100% nicht mehr erreicht werden.',
		attendNextPrefix: 'Als Nächstes besuchen: {n} {classWord}',
		attendNextDesc: 'Besuche {n} {classWord} am Stück ohne Fehlzeit, um wieder auf {target}% zu kommen.',
		cookedHeadline: '💀 Semester-Aussicht: Erledigt',
		cookedDesc: 'Selbst mit 100% Anwesenheit in allen verbleibenden {remaining} Stunden sind maximal {maxPct}% erreichbar.',
		semBudgetHeadline: 'Semester-Fehlstunden-Budget: {n} {classWord}',
		semBudgetDesc: 'Von den verbleibenden {remaining} Stunden musst du nur {needed} besuchen, um über {target}% abzuschließen.',
		mustAttendHeadline: 'Muss besuchen: {needed} / {remaining} Stunden',
		mustAttendDesc: 'Du musst mindestens {needed} der verbleibenden {remaining} Stunden besuchen, um {target}% zu erreichen.',
		vibeCookedStatus: 'Erledigt 💀',
		vibeCookedMessageHtml:
			'<strong>Du bist erledigt, Alter.</strong> Es ist mathematisch unmöglich, diese Anwesenheit noch zu retten, selbst wenn du in jeder einzelnen verbleibenden Stunde sitzt (Max: {maxPct}%). RIP. 💀',
		vibeSafeStatus: 'Safe & Chillig 🚀',
		vibeSafeWithBunksHtml:
			'Du kannst gefahrlos schwänzen! Geh raus, hol dir einen Chai und genieß deine Freizeit. <strong>{n} sichere {bunkWord} verfügbar.</strong> 🚀',
		vibeSafeOnEdgeHtml:
			'Du liegst sicher bei <strong>{pct}%</strong>, aber auf der Kippe! Schwänz heute nicht, sonst fällst du unter {target}%. ⚠️',
		vibeBorderlineStatus: 'Grenzwertig ⚠️',
		vibeBorderlineMessageHtml:
			'Du wandelst auf dünnem Eis, Alter. <strong>Zeit aufzuwachen und in den Hörsaal zu gehen!</strong> Besuche die nächsten <strong>{n} Stunden</strong>, um das zu retten. ☕',
		vibeShortageStatus: 'Fehlstunden-Alarm 🚨',
		vibeShortageMessageHtml:
			'Zeit aufzuwachen und in den Hörsaal zu gehen. <strong>Du kannst das noch retten, wenn du jetzt durchziehst!</strong> Besuche die nächsten <strong>{n} Stunden</strong> am Stück. 📚',
		copySummaryTitle: '📊 Anwesenheits-Vibe-Check',
		copyStatusLabel: 'Status',
		copyAttendanceLabel: 'Anwesenheit',
		copyTargetLabel: 'Ziel',
		copyNoteLabel: 'Hinweis',
		copySemesterLabel: 'Semester',
		classSingular: 'Stunde',
		classPlural: 'Stunden',
		bunkSingular: 'Fehlstunde',
		bunkPlural: 'Fehlstunden',
		semTotalErrorTooLow: 'Die Semester-Gesamtzahl darf nicht kleiner sein als die bereits gehaltenen Stunden ({held}).',
		semTotalErrorNonPositive: 'Gib eine positive Zahl ein.',
		semTotalErrorTooLarge: 'Gib eine Zahl kleiner oder gleich {max} ein.',
		semesterLineBudget: 'noch {n} {bunkWord} übrig von {remaining} {classWordRemaining}',
		semesterLineMustAttend: 'muss {needed} von {remaining} {classWordRemaining} besuchen',
		semesterLineCooked: 'erledigt: max {maxPct}% selbst bei voller Anwesenheit',
		safeToBunkCappedPrefix: 'Sicher zu schwänzen: {n} {classWord} (nur noch {n} dieses Semester übrig)',
		semCompleteHeadline: '🏁 Semester abgeschlossen: {pct}%',
		semCompleteMetDesc: 'Du hast das Semester mit {pct}% beendet und dein {target}%-Ziel erreicht. 🎉',
		semCompleteMissedDesc: 'Du hast das Semester mit {pct}% beendet, unter deinem {target}%-Ziel.',
		semesterLineCompleteMet: 'Semester abgeschlossen mit {pct}% — Ziel erreicht 🎉',
		semesterLineCompleteMissed: 'Semester abgeschlossen mit {pct}% — Ziel verfehlt',
		customTargetError: 'Gib einen Wert zwischen 1 und 100 ein.',
		vibeCompleteStatus: 'Semester abgeschlossen 🏁',
		remainVerbSingular: 'bleibt',
		remainVerbPlural: 'bleiben',
		copyFooter: 'Berechnet auf attendance75calculator.com',
		copyFailed: 'Kopieren in die Zwischenablage fehlgeschlagen.',
	},
	article: {
		overview: {
			h2: 'Was ist ein Anwesenheitsrechner und warum brauchst du ihn?',
			p1Html:
				'Ein <strong>Anwesenheitsrechner</strong> ist ein unverzichtbares akademisches Hilfsmittel, das Studierenden hilft, ihre Vorlesungsanwesenheit mathematisch genau zu verfolgen, zu berechnen und zu verwalten. An Universitäten und Hochschulen weltweit ist die Einhaltung einer Mindestanwesenheitsquote – meist <strong>75 Prozent Anwesenheit</strong> – Voraussetzung, um zu den Abschlussprüfungen des Semesters zugelassen zu werden.',
			p2Html:
				'Ob du berechnen willst, wie viele Vorlesungen du gefahrlos verpassen kannst, herausfinden möchtest, wie viele Stunden du am Stück besuchen musst, um eine Fehlzeit auszugleichen, oder deinen Stand zum Semesterende vorhersagen willst – dieser <strong>75 Anwesenheitsrechner</strong> nimmt dir das Rätselraten ab. Statt komplizierter Kopfrechnerei oder verwirrender Tabellenkalkulationen liefert unsere <strong>Anwesenheitsrechner-App</strong> sofortige Echtzeit-Einblicke mit nur zwei Zahlen: den besuchten Stunden und der bisherigen Gesamtzahl gehaltener Stunden.',
		},
		why75: {
			h2: 'Warum ist 75% Anwesenheit an der Uni Pflicht?',
			p1: 'Hochschul-Aufsichtsbehörden (wie UGC, AICTE, Bar Council of India, Medical Council und internationale Universitätsgremien) schreiben eine strikte 75%-Anwesenheitsregel vor. Hochschulen setzen diese Regel durch, um regelmäßige Teilnahme am Unterricht, praktische Laborarbeit und akademische Disziplin sicherzustellen.',
			p2: 'Wer unter die vorgeschriebene Schwelle fällt, riskiert ernsthafte akademische Konsequenzen:',
			list: [
				'Ausschluss von Prüfungen: Studierende mit einer Anwesenheit unter 75% werden häufig nicht zu den Semester- oder Abschlussprüfungen zugelassen.',
				'Nachsichtsgebühren & Strafen: Manche Hochschulen erlauben bei einer Anwesenheit zwischen 65% und 75% mit ärztlichem Attest eine Ausnahmegenehmigung, die jedoch oft mit hohen Verwaltungsgebühren verbunden ist.',
				'Verlust interner Bewertungspunkte: Viele Universitäten vergeben 5 bis 10 Punkte der internen Bewertung direkt proportional zur Anwesenheitsquote.',
				'Nichtversetzung oder Wiederholung des Semesters: Schwere Fehlzeiten unter 60% können zur Sperrung für das Semester führen, wodurch Studierende das gesamte akademische Semester wiederholen müssen.',
			],
			p3Html:
				'Mit einem speziellen <strong>Uni-Anwesenheitsrechner</strong> bleibst du Fehlzeiten immer einen Schritt voraus, bevor sie zu ernsthaften Problemen werden.',
		},
		formulas: {
			h2: '75% Anwesenheit berechnen: Formeln & Logik',
			introHtml:
				'Unser <strong>75 Anwesenheitsrechner</strong>-Tool basiert auf präzisen mathematischen Algorithmen. Hier die genaue Aufschlüsselung, wie deine Anwesenheitsquote, dein sicheres Fehlstunden-Limit und dein Aufholbedarf berechnet werden:',
			cards: [
				{
					title: '1. Formel für die aktuelle Anwesenheitsquote',
					formula: 'Anwesenheit (%) = (Besuchte Stunden / Gesamtzahl gehaltener Stunden) × 100',
					exampleLabel: 'Beispiel:',
					descHtml:
						'Wenn bisher 40 Vorlesungen gehalten wurden und du 30 davon besucht hast:<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: '2. Formel für das sichere Fehlstunden-Limit (wenn aktuelle % ≥ Ziel %)',
					formula: 'Sichere Fehlstunden = ⌊(Besuchte Stunden / Zielanteil) - Gesamtzahl gehaltener Stunden⌋',
					exampleLabel: 'Beispiel:',
					descHtml:
						'Dabei ist der <em>Zielanteil</em> für 75% gleich <code>0.75</code>. Das Abrundungssymbol <code>⌊ ⌋</code> rundet auf die nächste ganze Zahl ab, damit deine Quote nie unter 75% fällt.<br /><strong>Beispiel:</strong> Besucht = 36, Gesamt gehalten = 40, Ziel = 75% (0.75):<br /><code>Sichere Fehlstunden = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8 Stunden</code>.<br />Du kannst die nächsten 8 Stunden am Stück gefahrlos verpassen und landest trotzdem genau bei 75%.',
				},
				{
					title: '3. Aufeinanderfolgende Stunden zum Aufholen (wenn aktuelle % < Ziel %)',
					formula:
						'Zu besuchende Stunden = ⌈((Zielanteil × Gesamtzahl gehaltener Stunden) - Besuchte Stunden) / (1 - Zielanteil)⌉',
					exampleLabel: 'Beispiel:',
					descHtml:
						'Für ein 75%-Ziel (wobei <code>Zielanteil = 0.75</code>) ist der Nenner <code>1 - 0.75 = 0.25</code>. Multipliziert man mit <code>4</code>, vereinfacht sich die Formel zu:<br /><code>Zu besuchende Stunden = ⌈3 × Gesamt gehalten - 4 × Besucht⌉</code>.<br /><strong>Beispiel:</strong> Besucht = 20, Gesamt gehalten = 35. Um 75% zu erreichen:<br /><code>Zu besuchende Stunden = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25 Stunden</code>.<br />Du musst die nächsten 25 Stunden ohne Fehlzeit am Stück besuchen, um wieder 75% Anwesenheit zu erreichen.',
				},
			],
		},
		howTo: {
			h2: 'So verwendest du diesen 75-Prozent-Anwesenheitsrechner',
			introHtml:
				'Die Nutzung unseres <strong>Anwesenheitsrechners für die Uni</strong> ist unkompliziert und erfordert keine Registrierung oder Downloads:',
			steps: [
				'Wähle dein Anwesenheitsziel: Klicke auf eine der Schnellauswahl-Pillen (60%, 65%, 70%, 75%, 80%, 85%, 90%) oder gib eine beliebige individuelle Prozentzahl ein, die dein Fachbereich verlangt.',
				'Gib die besuchten Stunden ein: Trage die Gesamtzahl der Vorlesungs- oder Laborstunden ein, die du bisher tatsächlich besucht hast.',
				'Gib die Gesamtzahl gehaltener Stunden ein: Trage die kumulierte Anzahl der Stunden ein, die deine Dozenten bisher abgehalten haben.',
				'(Optional) Gib die Gesamtzahl der Stunden im Semester ein: Wenn du die geplante Gesamtzahl der Stunden für das gesamte Semester kennst (z. B. 90 oder 120 Stunden), gib sie ein, um die Semesterprognose-Karte freizuschalten.',
				'Lies die Ergebnisse sofort ab: Beobachte, wie sich deine Quote, dein sicheres Fehlstunden-Kontingent, dein Aufholziel und dein dynamischer Status sofort beim Tippen aktualisieren.',
			],
		},
		features: {
			h2: 'Die wichtigsten Funktionen unseres Anwesenheitsrechners für die Uni',
			items: [
				{
					icon: '⚡',
					title: 'Sofortige Echtzeit-Berechnung',
					desc: 'Kein Warten, kein „Absenden“-Button. Der Rechner aktualisiert jede Kennzahl, sobald du eine Zahl eingibst oder änderst.',
				},
				{
					icon: '🎯',
					title: 'Prognose zum Semesterende',
					desc: 'Plane dein Fehlstunden-Budget für den Rest des Semesters. Finde heraus, ob dein Ziel mathematisch noch erreichbar ist oder ob du „erledigt“ bist.',
				},
				{
					icon: '🔒',
					title: '100% clientseitiger Datenschutz',
					desc: 'Alle Berechnungen laufen direkt in deinem Browser ab. Es werden niemals Anwesenheitsdaten, Zugangsdaten oder Studierendendaten an externe Server gesendet.',
				},
				{
					icon: '🌙',
					title: 'Integrierter Dunkelmodus',
					desc: 'Wechsle nahtlos zwischen klarem Hellmodus und tiefem OLED-Dunkelmodus für späte Lernsessions.',
				},
			],
		},
		faq: {
			h2: 'Häufig gestellte Fragen (FAQ)',
			items: [
				{
					question: 'Was ist ein monatlicher Anwesenheitsrechner und wie wird er verwendet?',
					answerHtml:
						'Ein <strong>monatlicher Anwesenheitsrechner</strong> ermöglicht es Studierenden und Angestellten, die Anwesenheitsquote für einen bestimmten Kalendermonat zu berechnen. Gib einfach die Anzahl der besuchten Tage oder Stunden in diesem Monat ein und teile sie durch die Gesamtzahl der Arbeitstage oder geplanten Vorlesungen in diesem Monat, dann multipliziere mit 100.',
				},
				{
					question: 'Wie lautet die Formel des Anwesenheitsrechners?',
					answerHtml:
						'Die grundlegende <strong>Anwesenheitsformel</strong> lautet: <code>Anwesenheit (%) = (Besuchte Stunden / Gesamtzahl gehaltener Stunden) × 100</code>. Um sichere Fehlstunden oberhalb einer Zielquote (P%) zu ermitteln: <code>Sichere Fehlstunden = ⌊(Besucht / (P/100)) - Gesamt gehalten⌋</code>. Um die zum Erreichen des Ziels (P%) nötigen Stunden zu ermitteln: <code>Zu besuchende Stunden = ⌈((P/100 × Gesamt gehalten) - Besucht) / (1 - P/100)⌉</code>.',
				},
				{
					question: 'Was ist die Anwesenheitsrechner-App und funktioniert sie offline?',
					answerHtml:
						'Die <strong>Anwesenheitsrechner-App</strong> ist ein kostenloses, webbasiertes und mobilfreundliches Tool, das direkt in deinem Browser läuft. Sie berechnet Anwesenheitsquote, sichere Fehlstunden und Aufholstunden sofort, ganz ohne App-Store-Downloads, Logins oder Serverspeicherung.',
				},
				{
					question: 'Was ist ein Anwesenheitsrechner für Studierende?',
					answerHtml:
						'Ein <strong>Anwesenheitsrechner für Studierende</strong> ist ein spezieller Bildungsrechner, der Schülern und Studierenden hilft, ihre Vorlesungs- und Laboranwesenheit im Blick zu behalten. Er verhindert den Ausschluss von Prüfungen, indem er Studierende warnt, sobald ihre Anwesenheit in die Nähe von oder unter Pflichtschwellen wie 75% oder 80% fällt.',
				},
				{
					question: 'Kann man den Anwesenheitsrechner auch für 100 Prozent nutzen?',
					answerHtml:
						'Ja, du kannst das Anwesenheitsziel über unsere individuelle Zieleingabe auf <strong>100%</strong> setzen. Beachte, dass für 100% Anwesenheit jede einzelne gehaltene Stunde seit dem ersten Tag besucht werden muss. Wurde auch nur eine Stunde verpasst, ist eine finale Anwesenheitsquote von 100.0% mathematisch nicht mehr erreichbar.',
				},
				{
					question: 'Wie funktioniert das 80-Prozent-Ziel des Anwesenheitsrechners?',
					answerHtml:
						'Die Funktion <strong>Anwesenheitsrechner 80</strong> setzt deine Zielschwelle auf 80% (üblich an führenden Universitäten und in Studiengängen mit staatlicher Zulassungsprüfung). Um 80% zu halten, musst du mindestens 4 von 5 gehaltenen Stunden besuchen (Besucht ≥ 0.8 × Gesamtzahl Stunden).',
				},
				{
					question: 'Wie funktioniert das 75-Prozent-Ziel des Anwesenheitsrechners?',
					answerHtml:
						'Der <strong>Anwesenheitsrechner 75</strong> hilft Studierenden, die von UGC und Hochschulen vorgeschriebene Standardregel von 75% Anwesenheit zu erfüllen. Liegt deine aktuelle Anwesenheit bei ≥ 75%, berechnet er, wie viele Stunden du verpassen kannst. Liegt sie &lt; 75%, berechnet er die genaue Anzahl aufeinanderfolgender Stunden, die du besuchen musst, um wieder auf 75% zu kommen.',
				},
				{
					question: 'Wie viele Tage darf man bei einem 75-Prozent-Anwesenheitsrechner verpassen?',
					answerHtml:
						'Bei einem Standardsemester mit 100 Stunden musst du mindestens 75 Stunden besuchen und darfst maximal 25 Stunden verpassen. Hast du aktuell 30 von 40 gehaltenen Stunden besucht, kannst du 0 unmittelbare Stunden verpassen, ohne unter 75% zu fallen, aber von den verbleibenden 60 Semesterstunden kannst du bis zu 15 Stunden auslassen.',
				},
				{
					question: 'Wie benutzt man einen Anwesenheitsquoten-Rechner?',
					answerHtml:
						'So verwendest du einen <strong>Anwesenheitsquoten-Rechner</strong>: 1) Wähle deine Zielanwesenheit (z. B. 75% oder 80%), 2) Gib die Anzahl der besuchten Stunden oder Tage ein, 3) Gib die bisher insgesamt abgehaltenen Stunden oder Tage ein. Der Rechner zeigt sofort deine aktuelle Quote, deinen Status und dein sicheres Fehlstunden-Kontingent an.',
				},
				{
					question: 'Wie wird die Anwesenheitsquote berechnet?',
					answerHtml:
						'Die Anwesenheitsquote wird berechnet, indem die Gesamtzahl der anwesenden Sitzungen durch die Gesamtzahl der abgehaltenen Sitzungen geteilt und dieser Bruch mit 100 multipliziert wird. Zum Beispiel ergibt der Besuch von 45 von 60 Vorlesungen <code>(45 / 60) × 100 = 75%</code>.',
				},
				{
					question: 'Wie berechnet man die Anwesenheitsquote mit einem Taschenrechner?',
					answerHtml:
						'Auf jedem Taschenrechner: Gib deine besuchten Stunden ein, drücke geteilt (÷), gib die Gesamtzahl gehaltener Stunden ein, drücke mal (×), gib 100 ein und drücke Gleich (=). Oder nutze einfach unsere kostenlose <strong>Anwesenheitsrechner-App</strong> für automatische Sofortberechnungen inklusive Fehlstunden-Empfehlungen.',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • Kostenloser Online-Anwesenheitstracker für Studierende • Clientseitige Berechnung & 100% privat',
	},
};

export default de;
