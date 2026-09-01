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
		copyFooter: string;
		copyFailed: string;
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
}
