import type { Translations } from '../types';

const fr: Translations = {
	meta: {
		title: 'Calculateur de Présence 75% - Gratuit',
		description:
			'Calculateur de présence à 75% gratuit pour étudiants. Vérifiez votre pourcentage de présence, combien de cours vous pouvez manquer et combien suivre pour vous rattraper.',
		keywords:
			"calculateur de présence, calculateur de présence 75, calculateur de pourcentage de présence, calculateur de présence 75 pourcent, calculateur d'absences, calculateur de présence requise, calculateur de présence universitaire, combien de cours puis-je manquer",
		ogLocale: 'fr_FR',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		trackerLink: 'Suivi',
		themeDark: 'Sombre',
		themeLight: 'Clair',
		themeToggleAria: 'Basculer le mode Sombre/Clair',
		aboutUs: 'À propos de nous',
		privacyPolicy: 'Politique de confidentialité',
		termsAndConditions: 'Conditions générales',
		contactUs: 'Contactez-nous',
		languageLabel: 'Langue',
	},
	header: {
		title: "Calculateur de Présence & Planificateur d'Absences 75%",
		subtitleHtml:
			'Le <strong>calculateur de présence 75</strong> intelligent pour les étudiants. Connaissez votre pourcentage de présence exact, calculez vos absences sans risque, ou planifiez votre rattrapage.',
	},
	calculator: {
		targetLabel: 'Objectif de présence requis',
		targetPrefix: 'Objectif :',
		customPlaceholder: 'Personnalisé',
		attendedLabel: 'Cours suivis',
		attendedSub: '(Présences)',
		attendedPlaceholder: 'ex. 30',
		totalLabel: 'Total des cours donnés',
		totalSub: '(À ce jour)',
		totalPlaceholder: 'ex. 40',
		semTotalLabel: 'Total des cours du semestre',
		semTotalSub: '(Optionnel)',
		semTotalPlaceholder: 'ex. 100 cours prévus',
	},
	results: {
		currentAttendanceEyebrow: 'PRÉSENCE ACTUELLE',
		heldSuffix: 'donnés',
		rightNowEyebrow: 'STATUT ACTUEL',
		waitingHeadline: 'En attente de données...',
		waitingDesc: "Entrez les chiffres ci-dessus pour voir votre marge d'absences.",
		semesterForecastEyebrow: 'PRÉVISION DU SEMESTRE',
		copyButtonText: 'Copier le bilan de présence',
		toastText: 'Statut copié dans le presse-papiers !',
		shareButtonText: 'Partager le résultat',
		shareCopiedText: 'Image téléchargée et légende copiée !',
		shareStatAttendedLabel: 'PRÉSENCE',
		shareStatTargetLabel: 'OBJECTIF',
		trackerUpsellHtml: 'Vous suivez plusieurs matières ? → <strong>Enregistrez toutes vos matières</strong>',
	},
	js: {
		noDataStatus: 'Aucune donnée',
		noDataVibe: 'Entrez vos cours suivis et le total des cours pour calculer votre statut.',
		waitingHeadline: 'En attente de données...',
		waitingDesc: "Entrez les chiffres ci-dessus pour voir votre marge d'absences.",
		invalidStatus: 'Saisie invalide',
		invalidVibe: 'Le nombre de cours suivis ne peut pas être supérieur au total des cours donnés ! Vérifiez vos chiffres.',
		invalidHeadline: 'Erreur de saisie',
		invalidDesc: 'Veuillez corriger votre nombre de cours suivis.',
		safeToBunkPrefix: 'Absences possibles : {n} cours',
		bunkBufferZero: "Marge d'absences : 0 cours",
		safeDescWithBunks: "Vous pouvez manquer les {n} prochains cours d'affilée sans descendre en dessous de {target}%.",
		safeDescOnLine: 'Vous êtes à la limite ({pct}%). Manquer le prochain cours vous fera descendre en dessous de {target}%.',
		target100Headline: 'Objectif de 100% impossible',
		target100Desc: 'Une fois un cours manqué, les 100% ne peuvent plus être atteints.',
		attendNextPrefix: 'À suivre : {n} cours',
		attendNextDesc: 'Suivez {n} cours consécutifs sans en manquer pour remonter à {target}%.',
		cookedHeadline: '💀 Bilan du semestre : cuit',
		cookedDesc: "Même avec 100% de présence sur les {remaining} cours restants, le maximum atteignable n'est que de {maxPct}%.",
		semBudgetHeadline: "Marge d'absences du semestre : {n} cours",
		semBudgetDesc: 'Sur les {remaining} cours restants, vous devez seulement suivre {needed} pour terminer au-dessus de {target}%.',
		mustAttendHeadline: 'À suivre obligatoirement : {needed} / {remaining} cours',
		mustAttendDesc: 'Vous devez suivre au moins {needed} des {remaining} cours restants pour atteindre {target}%.',
		vibeCookedStatus: 'Cuit 💀',
		vibeCookedMessageHtml:
			"<strong>T'es cuit mon pote.</strong> Mathématiquement impossible de sauver cette présence même en assistant à absolument tous les cours restants (Max : {maxPct}%). RIP. 💀",
		vibeSafeStatus: 'Tranquille & Peinard 🚀',
		vibeSafeWithBunksHtml:
			"T'es tranquille, tu peux sécher ! Va prendre l'air, un chaï, et profite de ton temps libre. <strong>{n} {bunkWord} de marge.</strong> 🚀",
		vibeSafeOnEdgeHtml:
			"T'es tranquille à <strong>{pct}%</strong>, mais sur le fil ! Ne sèche pas aujourd'hui ou tu descendras sous {target}%. ⚠️",
		vibeBorderlineStatus: 'Limite ⚠️',
		vibeBorderlineMessageHtml:
			"Tu marches sur des œufs mon pote. <strong>Il est temps de te réveiller et d'aller en cours !</strong> Assiste aux <strong>{n} prochains cours</strong> pour rattraper le coup. ☕",
		vibeShortageStatus: 'Pénurie 🚨',
		vibeShortageMessageHtml:
			"Il est temps de te réveiller et d'aller en cours. <strong>Tu peux encore rattraper le coup si tu t'y mets maintenant !</strong> Assiste aux <strong>{n} prochains cours</strong> consécutivement. 📚",
		copySummaryTitle: '📊 Bilan de présence',
		copyStatusLabel: 'Statut',
		copyAttendanceLabel: 'Présence',
		copyTargetLabel: 'Objectif',
		copyNoteLabel: 'Remarque',
		copySemesterLabel: 'Semestre',
		classSingular: 'cours',
		classPlural: 'cours',
		bunkSingular: 'absence',
		bunkPlural: 'absences',
		semTotalErrorTooLow: 'Le total du semestre ne peut pas être inférieur aux cours déjà donnés ({held}).',
		semTotalErrorNonPositive: 'Entrez un nombre positif.',
		semTotalErrorTooLarge: 'Entrez un nombre inférieur ou égal à {max}.',
		semesterLineBudget: 'il reste {n} {bunkWord} sur {remaining} {classWordRemaining}',
		semesterLineMustAttend: 'il faut suivre {needed} sur {remaining} {classWordRemaining}',
		semesterLineCooked: 'cuit : max {maxPct}% même en assistant à tout',
		safeToBunkCappedPrefix: "Absences possibles : {n} {classWord} (il n'en reste que {n} ce semestre)",
		semCompleteHeadline: '🏁 Semestre terminé : {pct}%',
		semCompleteMetDesc: 'Vous avez terminé le semestre à {pct}%, atteignant votre objectif de {target}%. 🎉',
		semCompleteMissedDesc: 'Vous avez terminé le semestre à {pct}%, en dessous de votre objectif de {target}%.',
		semesterLineCompleteMet: 'semestre terminé à {pct}% — objectif atteint 🎉',
		semesterLineCompleteMissed: 'semestre terminé à {pct}% — objectif manqué',
		customTargetError: 'Entrez une valeur entre 1 et 100.',
		vibeCompleteStatus: 'Semestre terminé 🏁',
		remainVerbSingular: 'reste',
		remainVerbPlural: 'restent',
		copyFooter: 'Calculé sur attendance75calculator.com',
		copyFailed: 'Échec de la copie dans le presse-papiers.',
		unrecoverable100Status: 'Non Récupérable 💀',
		unrecoverable100MessageHtml:
			"L'objectif est de 100% et un cours a déjà été manqué — un dossier parfait ne peut plus être récupéré ce semestre. Seul le fait de baisser l'objectif corrige cela.",
		shortNoData: 'Aucun cours donné pour le moment',
		shortInvalid: 'Invalide — les cours suivis ne peuvent pas dépasser les cours donnés',
		shortCompleteMet: 'Terminé à {pct}% — objectif atteint 🎉',
		shortCompleteMissed: 'Terminé à {pct}% — objectif manqué',
		shortSafeEdgeZero: "Sur le fil — ne séchez pas aujourd'hui ⚠️",
		shortSafeEdgeOne: 'Marge serrée — il reste 1 absence ⚠️',
		shortSafeRoom: 'Tranquille — {n} {bunkWord} de marge 🚀',
		shortUnrecoverable100: 'Non récupérable avec un objectif de 100% 💀',
		shortCooked: 'Cuit — max {maxPct}% possible 💀',
		shortBorderline: 'Sur des œufs — assistez à {n} {classWord} de suite ☕',
		shortShortage: 'Il est temps de vous accrocher — assistez à {n} {classWord} de suite 📚',
	},
	article: {
		overview: {
			h2: "Qu'est-ce qu'un calculateur de présence et pourquoi en avez-vous besoin ?",
			p1Html:
				'Un <strong>calculateur de présence</strong> est un outil académique essentiel conçu pour aider les étudiants à suivre, calculer et gérer leur présence en cours avec une précision mathématique. Dans les universités et collèges du monde entier, maintenir un pourcentage de présence minimum — le plus souvent <strong>75% de présence</strong> — est une exigence obligatoire pour pouvoir se présenter aux examens de fin de semestre.',
			p2Html:
				"Que vous vouliez calculer combien de cours vous pouvez manquer sans risque, déterminer combien de cours consécutifs vous devez suivre pour combler un déficit de présence, ou anticiper votre situation en fin de semestre, ce <strong>calculateur de présence 75</strong> élimine les approximations. Plutôt que de faire des calculs mentaux complexes ou de dépendre de tableurs confus, notre <strong>application de calculateur de présence</strong> fournit des informations instantanées et en temps réel à partir de seulement deux chiffres : les cours que vous avez suivis et le total des cours donnés jusqu'à présent.",
		},
		why75: {
			h2: "Pourquoi la présence de 75% est-elle obligatoire à l'université ?",
			p1: "Les organismes de régulation de l'enseignement supérieur (comme l'UGC, l'AICTE, le Bar Council of India, le Medical Council, et les conseils universitaires internationaux) imposent une règle stricte de 75% de présence. Les établissements appliquent cette règle pour garantir un engagement constant en classe, une participation active aux travaux pratiques en laboratoire, et une discipline académique.",
			p2: 'Descendre en dessous du seuil requis entraîne de graves conséquences académiques :',
			list: [
				'Exclusion des examens : les étudiants dont la présence est inférieure à 75% sont souvent exclus des examens de fin de semestre ou des examens finaux.',
				'Amendes de régularisation et pénalités : bien que certains établissements autorisent une régularisation pour une présence entre 65% et 75% avec un certificat médical, cela implique souvent de lourdes amendes administratives.',
				"Perte d'évaluation interne : de nombreuses universités attribuent 5 à 10 points d'évaluation interne directement proportionnels au pourcentage de présence.",
				"Redoublement ou exclusion du semestre : un déficit sévère en dessous de 60% peut entraîner une exclusion du semestre, obligeant les étudiants à refaire l'intégralité du semestre académique.",
			],
			p3Html:
				"Utiliser un <strong>calculateur de présence universitaire</strong> dédié vous permet d'anticiper les déficits de présence avant qu'ils ne deviennent des urgences critiques.",
		},
		formulas: {
			h2: 'Comment calculer 75% de présence : formules et logique',
			introHtml:
				"Notre outil <strong>calculateur de présence 75</strong> fonctionne sur des algorithmes mathématiques précis. Voici le détail exact du calcul de votre pourcentage de présence, de votre limite d'absences sécurisées, et des exigences de rattrapage :",
			cards: [
				{
					title: '1. Formule du pourcentage de présence actuel',
					formula: 'Présence (%) = (Cours Suivis / Total des Cours Donnés) × 100',
					exampleLabel: 'Exemple :',
					descHtml:
						'Si 40 cours ont été donnés à ce jour et que vous en avez suivi 30 :<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: "2. Formule de la limite d'absences sécurisées (quand le % actuel ≥ % cible)",
					formula: 'Absences Sécurisées = ⌊(Cours Suivis / Fraction Cible) - Total des Cours Donnés⌋',
					exampleLabel: 'Exemple :',
					descHtml:
						"Où la <em>Fraction Cible</em> est <code>0.75</code> pour 75%. Le symbole de partie entière <code>⌊ ⌋</code> arrondit à l'entier inférieur le plus proche pour garantir que votre pourcentage ne descend jamais en dessous de 75%.<br /><strong>Exemple :</strong> Suivis = 36, Total Donné = 40, Cible = 75% (0.75) :<br /><code>Absences Sécurisées = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8 cours</code>.<br />Vous pouvez manquer sans risque les 8 prochains cours consécutifs et terminer exactement à 75%.",
				},
				{
					title: '3. Cours consécutifs nécessaires pour récupérer (quand le % actuel < % cible)',
					formula:
						'Cours à Suivre = ⌈((Fraction Cible × Total des Cours Donnés) - Cours Suivis) / (1 - Fraction Cible)⌉',
					exampleLabel: 'Exemple :',
					descHtml:
						"Pour un objectif de 75% (où <code>Fraction Cible = 0.75</code>), le dénominateur est <code>1 - 0.75 = 0.25</code>. En multipliant par <code>4</code>, la formule se simplifie ainsi :<br /><code>Cours à Suivre = ⌈3 × Total Donné - 4 × Suivis⌉</code>.<br /><strong>Exemple :</strong> Suivis = 20, Total Donné = 35. Pour atteindre 75% :<br /><code>Cours à Suivre = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25 cours</code>.<br />Vous devez suivre les 25 prochains cours d'affilée sans absence pour retrouver 75% de présence.",
				},
			],
		},
		howTo: {
			h2: 'Comment utiliser cette application de calculateur de présence à 75 pourcent',
			introHtml:
				'Utiliser notre outil <strong>calculateur de présence universitaire</strong> est simple et ne nécessite aucune inscription ni téléchargement :',
			steps: [
				"Choisissez votre objectif de présence : cliquez sur l'une des pastilles de sélection rapide (60%, 65%, 70%, 75%, 80%, 85%, 90%) ou saisissez tout pourcentage personnalisé exigé par votre département.",
				"Saisissez les cours suivis : entrez le nombre total d'heures de cours ou de travaux pratiques auxquelles vous avez physiquement assisté jusqu'à présent.",
				'Saisissez le total des cours donnés : entrez le nombre cumulé de cours que vos professeurs ont dispensés à ce jour.',
				"(Optionnel) Saisissez le total des cours du semestre : si vous connaissez le nombre total de cours prévus pour l'ensemble du semestre (par exemple, 90 ou 120 cours), saisissez-le pour débloquer la carte de prévision du semestre.",
				"Consultez les résultats instantanés : observez votre pourcentage, votre quota d'absences sécurisées, votre objectif de rattrapage, et votre statut dynamique se mettre à jour instantanément au fur et à mesure de votre saisie.",
			],
		},
		features: {
			h2: 'Fonctionnalités clés de notre calculateur de présence universitaire',
			items: [
				{
					icon: '⚡',
					title: 'Calculs instantanés en temps réel',
					desc: "Pas d'attente, pas de bouton « Envoyer ». Le calculateur met à jour chaque indicateur dès que vous saisissez ou modifiez un chiffre.",
				},
				{
					icon: '🎯',
					title: 'Prévision de fin de semestre',
					desc: "Planifiez votre marge d'absences pour le reste du semestre. Découvrez si votre objectif est mathématiquement atteignable ou si vous êtes « cuit ».",
				},
				{
					icon: '🔒',
					title: '100% Confidentialité côté client',
					desc: "Tous les calculs se font directement dans votre navigateur. Aucune donnée de présence, identifiant de connexion, ou dossier étudiant n'est jamais envoyé à des serveurs externes.",
				},
				{
					icon: '🌙',
					title: 'Mode sombre intégré',
					desc: 'Basculez sans effort entre un mode clair net et un mode sombre profond adapté aux écrans OLED, parfait pour les sessions de révision nocturnes.',
				},
			],
		},
		faq: {
			h2: 'Questions fréquemment posées (FAQ)',
			items: [
				{
					question: 'Comment est calculé le pourcentage de présence ?',
					answerHtml:
						'Le pourcentage de présence se calcule en divisant les cours suivis par le total des cours donnés jusqu\'à présent, puis en multipliant par 100 : <code>Présence % = (Cours Suivis / Total des Cours Donnés) × 100</code>. Par exemple, suivre 30 cours sur 40 donne <code>(30 / 40) × 100 = 75%</code>.',
				},
				{
					question: 'Combien de cours puis-je manquer en gardant 75% de présence ?',
					answerHtml:
						"Une fois votre présence actuelle à 75% ou plus, le nombre de cours que vous pouvez manquer sans risque est <code>⌊(Suivis / 0.75) − Total Donné⌋</code>. Par exemple, avec 36 cours suivis sur 40, vous pouvez manquer les 8 prochains d'affilée et finir exactement à 75%. Entrez vos propres chiffres ci-dessus pour votre quota exact.",
				},
				{
					question: 'Combien de cours dois-je suivre pour atteindre 75% de présence ?',
					answerHtml:
						"Si votre présence est passée sous les 75%, le nombre de cours consécutifs à suivre sans en manquer un seul est <code>⌈(0.75 × Total Donné − Suivis) / 0.25⌉</code>. Par exemple, avoir suivi 20 cours sur 35 donnés signifie qu'il faut suivre les 25 prochains cours d'affilée pour revenir à 75%.",
				},
				{
					question: 'Que se passe-t-il si ma présence est inférieure à 75% ?',
					answerHtml:
						"La plupart des établissements exigent 75% de présence minimum pour se présenter aux examens de fin de semestre. En dessous, cela peut entraîner une exclusion des examens, des pénalités de régularisation pour une présence entre environ 65 et 75% (souvent avec certificat médical), une perte de points de contrôle continu, ou, sous 60%, un redoublement du semestre. Les règles varient selon l'établissement — vérifiez toujours auprès du vôtre.",
				},
				{
					question: "Puis-je calculer la présence pour n'importe quel pourcentage, pas seulement 75% ?",
					answerHtml:
						"Oui. En plus de 75%, vous pouvez choisir 60%, 65%, 70%, 80%, 85%, 90%, ou saisir un objectif personnalisé de 1 à 100% avec le sélecteur ci-dessus. Les absences sécurisées et les cours de rattrapage se mettent à jour instantanément pour le pourcentage exigé par votre établissement.",
				},
				{
					question: 'Ce calculateur de présence est-il gratuit ?',
					answerHtml:
						'Oui, entièrement gratuit — sans inscription, sans offre premium, sans frais cachés. Utilisez-le aussi souvent que vous le souhaitez, pour autant de matières ou de semestres que nécessaire.',
				},
				{
					question: 'Le calculateur de présence fonctionne-t-il sur mobile ?',
					answerHtml:
						"Oui. Il est entièrement adapté aux téléphones, tablettes et ordinateurs, avec un mode sombre pour les vérifications tardives. Tout fonctionne dans votre navigateur, sans aucune application à installer.",
				},
				{
					question: 'Mes données de présence sont-elles privées ?',
					answerHtml:
						'Oui. Chaque calcul se fait directement dans votre navigateur — rien de ce que vous saisissez n\'est envoyé à un serveur ni suivi. Fermer l\'onglet efface la session, sauf si vous utilisez le <a href="/fr/tracker/" class="legal-link">suivi de présence</a> pour enregistrer vos matières sur votre propre appareil.',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • Calculateur de Présence Universitaire Gratuit en Ligne • Calculs côté client et 100% privé',
	},
	tracker: {
		meta: {
			title: 'Suivi de Présence - Suivez Chaque Matière en Un Geste',
			description:
				"Enregistrez toutes vos matières une fois, puis mettez à jour votre présence en un geste après chaque cours. Suivi de présence gratuit, privé et multi-matières avec limites d'absences sécurisées, objectifs de rattrapage et un bilan général — rien ne quitte jamais votre navigateur.",
			keywords:
				'suivi de présence, suivi de présence multi matières, suivi de présence hebdomadaire, application de suivi de présence par cours, suivi de présence par matière, suivi de présence pour étudiants',
		},
		header: {
			title: 'Suivi de Présence',
			subtitle: 'Enregistrez chaque matière une fois, puis +Présent / +Absent après le cours.',
		},
		targetLabel: 'Objectif de présence',
		emptyHint: 'Ajoutez votre première matière pour commencer le suivi.',
		sharedBanner: {
			text: "Vous consultez un suivi partagé par lien. Il n'a pas encore été enregistré sur ce navigateur.",
			saveBtn: 'Enregistrer dans mon suivi',
			dismissBtn: 'Je consulte seulement',
		},
		storageWarning:
			"Votre navigateur bloque les données du site (mode privé, ou données du site désactivées), donc les changements ici ne seront pas enregistrés une fois que vous partirez. Le suivi continue de fonctionner normalement pour cette session — utilisez Copier le lien pour garder une sauvegarde.",
		addSubject: {
			heading: 'Ajouter une matière',
			nameLabel: 'Nom de la matière',
			namePlaceholder: 'ex. Structures de Données',
			attendedLabel: 'Suivis',
			attendedSub: "jusqu'ici",
			heldLabel: 'Donnés',
			heldSub: "jusqu'ici",
			plannedLabel: 'Total des Cours du Semestre',
			plannedPlaceholder: 'ex. 100 cours prévus',
			submitBtn: '+ Ajouter la matière',
		},
		stats: {
			overall: 'Présence globale',
			weakest: 'Matière la plus faible',
			strongest: 'Matière la plus forte',
		},
		subjectsHeading: 'Vos matières',
		copyVibeBtn: '📋 Copier le bilan',
		copyLinkBtn: '🔗 Copier le lien',
		printBtn: '🖨️ Imprimer / Capture',
		row: {
			totalThisSemester: '· {n} au total ce semestre',
			present: '+ Présent',
			absent: '+ Absent',
			edit: 'Modifier',
			delete: 'Supprimer',
			editNameLabel: 'Nom',
			editAttendedLabel: 'Suivis',
			editHeldLabel: 'Donnés',
			editPlannedLabel: 'Total des Cours du Semestre',
			save: 'Enregistrer',
			cancel: 'Annuler',
		},
		notes: {
			invalid: "Les cours suivis ({attended}) ne peuvent pas dépasser les cours donnés ({held}) — corrigez les chiffres ci-dessous.",
			unrecoverable: "L'objectif est de 100% et un cours a déjà été manqué — cela ne peut être corrigé qu'en baissant l'objectif.",
			cooked: 'Même en assistant aux {remaining} cours restants, vous n\'atteindriez que {maxPct}% — en dessous de l\'objectif du semestre.',
			termCompleteMet: 'Semestre terminé : vous avez fini à {pct}% — objectif atteint.',
			termCompleteMissed: 'Semestre terminé : vous avez fini à {pct}% — objectif manqué.',
			forecastBudget: "D'ici la fin du semestre : vous pouvez manquer {n} {classWord} de plus sur les {remaining} restants.",
			forecastMustAttend: "D'ici la fin du semestre : vous devez assister aux {remaining} cours restants.",
			borderline: '* Valeur limite — les établissements arrondissent 74,x% différemment ; vérifiez la politique de votre établissement.',
			semesterOver: "Semestre terminé — plus aucun cours restant. Utilisez Modifier pour changer le total.",
		},
		validation: {
			nameRequired: 'Donnez un nom à la matière.',
			duplicateName: 'Vous avez déjà une matière portant ce nom.',
			attendedInvalid: 'Suivis doit être un nombre entier, 0 ou plus.',
			heldInvalid: 'Donnés doit être un nombre entier, 0 ou plus.',
			plannedInvalid: 'Total des Cours du Semestre doit être un nombre entier, 0 ou plus.',
			attendedExceedsHeld: 'Les cours suivis ne peuvent pas dépasser les cours donnés.',
			plannedBelowHeld: 'Le total des cours du semestre doit être supérieur ou égal aux cours donnés.',
		},
		toasts: {
			vibeCopied: 'Bilan copié',
			linkCopied: 'Lien copié',
			copyFailed: 'Impossible de copier — réessayez',
			addressBarFallback: "Impossible de copier — copiez plutôt la barre d'adresse",
			savedToBrowser: 'Enregistré sur ce navigateur',
			undone: 'Annulé',
			undoBtn: 'Annuler',
		},
		undo: {
			present: '« {name} » marquée présente',
			absent: '« {name} » marquée absente',
			deleted: '« {name} » supprimée',
			updated: '« {name} » mise à jour',
		},
		rollup: {
			noClassesRecorded: '(aucun cours enregistré pour le moment)',
			heldAcross: '({attended} / {held} donnés sur {n} {subjectWord})',
			subjectSingular: 'matière',
			subjectPlural: 'matières',
			noData: '—',
			noDataDetail: 'Aucun cours enregistré pour le moment',
			detailComplete: '{pct}% · semestre terminé',
			detailUnrecoverable: '{pct}% · non récupérable avec un objectif de 100%',
			detailCooked: '{pct}% · hors de portée ce semestre',
			detailShort: '{pct}% · assistez à {n} cours de suite',
			detailSkip: '{pct}% · peut manquer {n} de plus',
			detailSafe: '{pct}% · en sécurité',
			detailLowest: '{pct}% · la plus basse de vos matières',
			forecastUnavailable: 'Prévision indisponible — ajoutez les totaux du semestre.',
			forecastMet: "D'ici la fin du semestre (matières avec un total défini) : vous finiriez à {pct}% — objectif atteint.",
			forecastMissed: "D'ici la fin du semestre (matières avec un total défini) : vous finiriez à {pct}% — objectif manqué.",
			forecastBudget: "D'ici la fin du semestre (matières avec un total défini) : vous pouvez manquer {n} {classWord} de plus sur les {remaining} restants.",
			forecastMustAttend: "D'ici la fin du semestre (matières avec un total défini) : vous devez assister aux {remaining} cours restants.",
		},
		copySummary: {
			targetLine: '• Objectif : {target}%',
			overallLine: '• Global : {line}',
			noClassesRecorded: 'Aucun cours enregistré pour le moment.',
			noSubjectsSaved: 'Aucune matière enregistrée pour le moment.',
		},
		faq: [
			{
				question: 'En quoi le Suivi diffère-t-il du calculateur de la page d\'accueil ?',
				answerHtml:
					"Le calculateur de la page d'accueil répond à une seule question ponctuelle : cours suivis, cours donnés et votre pourcentage cible, pour un résultat instantané. Le Suivi est conçu pour tout le semestre — vous enregistrez chaque matière une fois, puis chaque semaine vous appuyez sur +Présent ou +Absent après le cours pour tout garder à jour, avec un bilan général sur l'ensemble de vos matières.",
			},
			{
				question: 'Mes données sont-elles envoyées à un serveur ?',
				answerHtml:
					"Non. Le Suivi est 100% côté client, exactement comme le calculateur de la page d'accueil. Vos matières, compteurs et objectif sont enregistrés uniquement dans le stockage local de votre navigateur. Rien n'est jamais envoyé, et il n'y a ni compte ni connexion.",
			},
			{
				question: 'Que se passe-t-il si j\'efface les données de mon navigateur ou si j\'utilise le mode privé/navigation privée ?',
				answerHtml:
					"Le stockage local est lié à votre profil de navigateur, donc effacer les données du site ou naviguer dans une fenêtre privée supprimera (ou n'enregistrera jamais) votre suivi. En mode privé, le Suivi fonctionne parfaitement pour cette session — il ne se souviendra simplement pas de vos matières la prochaine fois que vous ouvrirez la page. Utilisez Copier le lien avant de fermer l'onglet si vous voulez garder une sauvegarde.",
			},
			{
				question: 'Comment partager mon suivi avec un ami ou le transférer sur un autre appareil ?',
				answerHtml:
					"Appuyez sur Copier le lien. Il encode vos matières et votre objectif actuels directement dans l'URL — rien n'est envoyé nulle part. Toute personne qui ouvre ce lien voit votre suivi et peut choisir de l'enregistrer comme le sien ; l'ouvrir sur votre ordinateur restaure les mêmes données que sur votre téléphone.",
			},
			{
				question: 'Comment le nombre d\'« absences sécurisées » est-il calculé ?',
				answerHtml:
					"Une fois que vous entrez le Total des Cours du Semestre pour une matière, le Suivi calcule le nombre maximum de cours que vous pouvez encore manquer tout en atteignant (ou dépassant) votre objectif d'ici la fin du semestre — en tenant compte des cours déjà donnés, pas seulement de ceux qui restent.",
			},
			{
				question: 'Pourquoi le nombre de rattrapage est-il différent d\'une simple estimation de « cours nécessaires » ?',
				answerHtml:
					"Assister à un cours ajoute un point à la fois aux cours suivis et aux cours donnés, donc le pourcentage évolue plus lentement qu'une estimation naïve ne le suggère. La formule de rattrapage du Suivi tient compte de ce dénominateur croissant, donc le nombre qu'elle vous donne est le nombre exact de cours consécutifs qui vous ramène à votre objectif — jamais une sous-estimation.",
			},
		],
		article: {
			introH2: 'Un suivi conçu pour tout le semestre',
			introP1:
				"La plupart des calculateurs de présence répondent à une question et c'est tout. Cette page est différente : enregistrez chaque matière une fois, et après chaque cours appuyez sur <strong>+Présent</strong> ou <strong>+Absent</strong> pour cette matière — un geste, sans ressaisir de chiffres, sans boîte de dialogue de confirmation. Vos données sont enregistrées automatiquement dans ce navigateur, prêtes pour la prochaine fois que vous ouvrirez la page.",
			introP2:
				"Chaque matière affiche son propre pourcentage et son statut, un bilan général sur tout ce que vous suivez, et une alerte « matière la plus faible » — parce qu'il est facile de surveiller son chiffre global tout en se faisant surprendre par ce seul cours qu'on continue de manquer.",
			calcH2: 'Comment les chiffres sont calculés',
			formulas: [
				{
					title: 'Pourcentage actuel',
					formula: 'pourcentage = (suivis / donnés) × 100',
					desc: "Le pourcentage exact est affiché avec une décimale. Les établissements ne s'accordent pas sur si 74,6% doit être arrondi à 74% ou à 75% — ce suivi n'arrondit jamais silencieusement une valeur limite vers le haut ; il la signale plutôt, pour que vous vérifiiez la politique de votre établissement.",
				},
				{
					title: 'Cours que vous pouvez manquer dès maintenant',
					formula: 'absences = floor(suivis / objectif% − donnés)',
					desc: "Affiché pour chaque matière où vous êtes dans les temps — le même chiffre « dès maintenant » que donne le calculateur de la page d'accueil, sans avoir besoin du nombre total de cours.",
				},
				{
					title: 'Cours nécessaires pour rattraper',
					formula: 'nécessaires = ceil((objectif% × donnés − suivis) / (1 − objectif%))',
					desc: "Affiché lorsque vous êtes en dessous de l'objectif. Chaque cours suivi s'ajoute à la fois au numérateur et au dénominateur, donc une estimation naïve qui n'augmente que le numérateur sous-estime le nombre réellement nécessaire — cette formule en tient compte.",
				},
				{
					title: 'Prévision de fin de semestre',
					formula: 'pourcentageMax = (suivis + restants) / totalCoursDuSemestre × 100',
					desc: "Affiché uniquement une fois que vous avez saisi le Total des Cours du Semestre — projette où vous en serez à la fin du semestre, plafonnant le chiffre d'absences « dès maintenant » à ce qui reste réellement, et signalant quand l'objectif est mathématiquement hors de portée.",
				},
			],
		},
		footerNote: '© {year} Attendance 75 Calculator • Calculateur de Présence Universitaire Gratuit en Ligne',
		footerCalculatorLink: 'Calculateur',
	},
};

export default fr;
