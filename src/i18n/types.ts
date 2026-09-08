export interface FaqItem {
	question: string;
	answerHtml: string;
}

export interface FeatureItem {
	icon: string;
	title: string;
	desc: string;
}

export interface FormulaCard {
	title: string;
	formula: string;
	exampleLabel: string;
	descHtml: string;
}

export interface Translations {
	meta: {
		title: string;
		description: string;
		keywords: string;
		ogLocale: string;
	};
	nav: {
		badge: string;
		trackerLink: string;
		themeDark: string;
		themeLight: string;
		themeToggleAria: string;
		aboutUs: string;
		privacyPolicy: string;
		termsAndConditions: string;
		contactUs: string;
		languageLabel: string;
	};
	header: {
		title: string;
		subtitleHtml: string;
	};
	calculator: {
		targetLabel: string;
		targetPrefix: string;
		customPlaceholder: string;
		attendedLabel: string;
		attendedSub: string;
		attendedPlaceholder: string;
		totalLabel: string;
		totalSub: string;
		totalPlaceholder: string;
		semTotalLabel: string;
		semTotalSub: string;
		semTotalPlaceholder: string;
	};
	results: {
		currentAttendanceEyebrow: string;
		heldSuffix: string;
		rightNowEyebrow: string;
		waitingHeadline: string;
		waitingDesc: string;
		semesterForecastEyebrow: string;
		copyButtonText: string;
		toastText: string;
		shareButtonText: string;
		shareCopiedText: string;
		shareStatAttendedLabel: string;
		shareStatTargetLabel: string;
		trackerUpsellHtml: string;
	};
	js: {
		noDataStatus: string;
		noDataVibe: string;
		waitingHeadline: string;
		waitingDesc: string;
		invalidStatus: string;
		invalidVibe: string;
		invalidHeadline: string;
		invalidDesc: string;
		safeToBunkPrefix: string;
		bunkBufferZero: string;
		safeDescWithBunks: string;
		safeDescOnLine: string;
		target100Headline: string;
		target100Desc: string;
		attendNextPrefix: string;
		attendNextDesc: string;
		cookedHeadline: string;
		cookedDesc: string;
		semBudgetHeadline: string;
		semBudgetDesc: string;
		mustAttendHeadline: string;
		mustAttendDesc: string;
		vibeCookedStatus: string;
		vibeCookedMessageHtml: string;
		vibeSafeStatus: string;
		vibeSafeWithBunksHtml: string;
		vibeSafeOnEdgeHtml: string;
		vibeBorderlineStatus: string;
		vibeBorderlineMessageHtml: string;
		vibeShortageStatus: string;
		vibeShortageMessageHtml: string;
		copySummaryTitle: string;
		copyStatusLabel: string;
		copyAttendanceLabel: string;
		copyTargetLabel: string;
		copyNoteLabel: string;
		copySemesterLabel: string;
		copyFooter: string;
		copyFailed: string;
		classSingular: string;
		classPlural: string;
		bunkSingular: string;
		bunkPlural: string;
		semTotalErrorTooLow: string;
		semTotalErrorNonPositive: string;
		semTotalErrorTooLarge: string;
		semesterLineBudget: string;
		semesterLineMustAttend: string;
		semesterLineCooked: string;
		safeToBunkCappedPrefix: string;
		semCompleteHeadline: string;
		semCompleteMetDesc: string;
		semCompleteMissedDesc: string;
		semesterLineCompleteMet: string;
		semesterLineCompleteMissed: string;
		customTargetError: string;
		vibeCompleteStatus: string;
		remainVerbSingular: string;
		remainVerbPlural: string;
		unrecoverable100Status: string;
		unrecoverable100MessageHtml: string;
		shortNoData: string;
		shortInvalid: string;
		shortCompleteMet: string;
		shortCompleteMissed: string;
		shortSafeEdgeZero: string;
		shortSafeEdgeOne: string;
		shortSafeRoom: string;
		shortUnrecoverable100: string;
		shortCooked: string;
		shortBorderline: string;
		shortShortage: string;
	};
	article: {
		overview: {
			h2: string;
			p1Html: string;
			p2Html: string;
		};
		why75: {
			h2: string;
			p1: string;
			p2: string;
			list: string[];
			p3Html: string;
		};
		formulas: {
			h2: string;
			introHtml: string;
			cards: [FormulaCard, FormulaCard, FormulaCard];
		};
		howTo: {
			h2: string;
			introHtml: string;
			steps: string[];
		};
		features: {
			h2: string;
			items: [FeatureItem, FeatureItem, FeatureItem, FeatureItem];
		};
		faq: {
			h2: string;
			items: FaqItem[];
		};
	};
	footer: {
		note: string;
	};
	tracker: {
		meta: {
			title: string;
			description: string;
			keywords: string;
		};
		header: {
			title: string;
			subtitle: string;
		};
		targetLabel: string;
		emptyHint: string;
		sharedBanner: {
			text: string;
			saveBtn: string;
			dismissBtn: string;
		};
		storageWarning: string;
		addSubject: {
			heading: string;
			nameLabel: string;
			namePlaceholder: string;
			attendedLabel: string;
			attendedSub: string;
			heldLabel: string;
			heldSub: string;
			plannedLabel: string;
			plannedPlaceholder: string;
			submitBtn: string;
		};
		stats: {
			overall: string;
			weakest: string;
			strongest: string;
		};
		subjectsHeading: string;
		copyVibeBtn: string;
		copyLinkBtn: string;
		printBtn: string;
		row: {
			totalThisSemester: string;
			present: string;
			absent: string;
			edit: string;
			delete: string;
			editNameLabel: string;
			editAttendedLabel: string;
			editHeldLabel: string;
			editPlannedLabel: string;
			save: string;
			cancel: string;
		};
		notes: {
			invalid: string;
			unrecoverable: string;
			cooked: string;
			termCompleteMet: string;
			termCompleteMissed: string;
			forecastBudget: string;
			forecastMustAttend: string;
			borderline: string;
			semesterOver: string;
		};
		validation: {
			nameRequired: string;
			duplicateName: string;
			attendedInvalid: string;
			heldInvalid: string;
			plannedInvalid: string;
			attendedExceedsHeld: string;
			plannedBelowHeld: string;
		};
		toasts: {
			vibeCopied: string;
			linkCopied: string;
			copyFailed: string;
			addressBarFallback: string;
			savedToBrowser: string;
			undone: string;
			undoBtn: string;
		};
		undo: {
			present: string;
			absent: string;
			deleted: string;
			updated: string;
		};
		rollup: {
			noClassesRecorded: string;
			heldAcross: string;
			subjectSingular: string;
			subjectPlural: string;
			noData: string;
			noDataDetail: string;
			detailComplete: string;
			detailUnrecoverable: string;
			detailCooked: string;
			detailShort: string;
			detailSkip: string;
			detailSafe: string;
			detailLowest: string;
			forecastUnavailable: string;
			forecastMet: string;
			forecastMissed: string;
			forecastBudget: string;
			forecastMustAttend: string;
		};
		copySummary: {
			targetLine: string;
			overallLine: string;
			noClassesRecorded: string;
			noSubjectsSaved: string;
		};
		faq: FaqItem[];
		article: {
			introH2: string;
			introP1: string;
			introP2: string;
			calcH2: string;
			formulas: { title: string; formula: string; desc: string }[];
		};
		footerNote: string;
		footerCalculatorLink: string;
	};
}
