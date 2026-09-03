import type { Translations } from '../types';

const fr: Translations = {
	meta: {
		title: 'Calculateur de Présence 75% - Gratuit',
		description:
			'Calculateur de présence gratuit pour le seuil de 75%. Calculez absences autorisées, cours nécessaires et prévisions de semestre.',
		keywords:
			"calculateur de présence, calculateur de présence 75, calculateur d'assiduité 75, calculateur de présence application, calculateur de présence 75 pourcent, calculateur de présence universitaire, calculateur de présence étudiant",
		ogLocale: 'fr_FR',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
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
					question: "Qu'est-ce qu'un calculateur de présence mensuel et comment l'utiliser ?",
					answerHtml:
						"Un <strong>calculateur de présence mensuel</strong> permet aux étudiants et employés de calculer leur pourcentage de présence sur un mois calendaire spécifique. Il suffit d'indiquer le nombre de jours ou de cours suivis ce mois-là et de diviser par le total des jours ouvrés ou des cours prévus ce mois-là, puis de multiplier par 100.",
				},
				{
					question: 'Quelle est la formule du calculateur de présence ?',
					answerHtml:
						"La <strong>formule de présence</strong> de base est : <code>Présence (%) = (Cours Suivis / Total des Cours Donnés) × 100</code>. Pour trouver les absences sécurisées au-dessus d'un pourcentage cible (P%) : <code>Absences Sécurisées = ⌊(Suivis / (P/100)) - Total Donné⌋</code>. Pour trouver le nombre de cours nécessaires pour revenir à l'objectif (P%) : <code>Cours à Suivre = ⌈((P/100 × Total Donné) - Suivis) / (1 - P/100)⌉</code>.",
				},
				{
					question: "Qu'est-ce qu'une application de calculateur de présence et fonctionne-t-elle hors ligne ?",
					answerHtml:
						"L'<strong>application de calculateur de présence</strong> est un outil gratuit, basé sur le web et adapté aux mobiles, qui fonctionne directement dans votre navigateur. Elle calcule le pourcentage de présence, les absences sécurisées et les cours de rattrapage instantanément, sans téléchargement depuis un store d'applications, sans connexion, et sans stockage sur serveur.",
				},
				{
					question: "Qu'est-ce qu'un calculateur de présence étudiant ?",
					answerHtml:
						"Un <strong>calculateur de présence étudiant</strong> est un calculateur pédagogique spécialisé conçu pour les élèves et étudiants d'école et d'université afin de suivre leur présence aux cours magistraux et travaux pratiques. Il évite l'exclusion des examens en alertant les étudiants lorsque leur présence approche ou descend en dessous des seuils obligatoires comme 75% ou 80%.",
				},
				{
					question: 'Peut-on utiliser le calculateur de présence pour un objectif de 100% ?',
					answerHtml:
						"Oui, vous pouvez définir l'objectif de présence à <strong>100%</strong> grâce à notre champ d'objectif personnalisé. Notez qu'atteindre 100% de présence nécessite d'assister à absolument tous les cours donnés depuis le premier jour. Si ne serait-ce qu'un seul cours a été manqué, atteindre une présence finale de 100.0% devient mathématiquement impossible.",
				},
				{
					question: "Comment fonctionne l'objectif de 80 pourcent du calculateur de présence ?",
					answerHtml:
						'La fonction <strong>calculateur de présence 80</strong> fixe votre seuil cible à 80% (courant dans les universités de premier plan et les filières professionnelles). Pour maintenir 80%, vous devez suivre au moins 4 cours sur 5 donnés (Suivis ≥ 0.8 × Total des Cours).',
				},
				{
					question: "Comment fonctionne l'objectif de 75 pourcent du calculateur de présence ?",
					answerHtml:
						"Le <strong>calculateur de présence 75</strong> aide les étudiants à respecter la règle standard des 75% de présence imposée par l'UGC et les établissements. Si votre présence actuelle est ≥ 75%, il calcule combien de cours vous pouvez manquer. Si elle est &lt; 75%, il calcule le nombre exact de cours consécutifs que vous devez suivre pour revenir à 75%.",
				},
				{
					question: 'Pour un calculateur de présence à 75 pourcent, combien de jours peut-on manquer ?',
					answerHtml:
						"Pour un semestre standard de 100 cours, vous devez suivre au moins 75 cours et pouvez en manquer un maximum de 25. Si vous avez actuellement suivi 30 cours sur 40 donnés, vous ne pouvez manquer aucun cours immédiatement sans descendre en dessous de 75%, mais sur les 60 cours restants du semestre, vous pouvez en sauter jusqu'à 15.",
				},
				{
					question: 'Comment utiliser un calculateur de pourcentage de présence ?',
					answerHtml:
						"Pour utiliser un <strong>calculateur de pourcentage de présence</strong> : 1) Choisissez votre objectif de présence (par exemple, 75% ou 80%), 2) Entrez le nombre de cours ou de jours que vous avez suivis, 3) Entrez le nombre total de cours ou de jours effectués jusqu'à présent. Le calculateur affiche immédiatement votre pourcentage actuel, votre badge de statut, et votre quota d'absences sécurisées.",
				},
				{
					question: 'Comment est calculé le pourcentage de présence ?',
					answerHtml:
						'Le pourcentage de présence est calculé en divisant le nombre total de séances présentes par le nombre total de séances données, puis en multipliant cette fraction par 100. Par exemple, suivre 45 cours sur 60 donne <code>(45 / 60) × 100 = 75%</code>.',
				},
				{
					question: 'Comment calculer le pourcentage de présence avec une calculatrice ?',
					answerHtml:
						"Sur n'importe quelle calculatrice : saisissez vos cours suivis, appuyez sur diviser (÷), entrez le total des cours donnés, appuyez sur multiplier (×), entrez 100, puis appuyez sur égal (=). Ou utilisez simplement notre <strong>application de calculateur de présence</strong> en ligne gratuite pour obtenir des calculs instantanés avec des suggestions d'absences automatiquement.",
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • Calculateur de Présence Universitaire Gratuit en Ligne • Calculs côté client et 100% privé',
	},
};

export default fr;
