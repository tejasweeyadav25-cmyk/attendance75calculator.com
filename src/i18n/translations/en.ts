import type { Translations } from '../types';

const en: Translations = {
	meta: {
		title: '75% Attendance Calculator - Free College Tool',
		description:
			'Free 75% attendance calculator for college students. Check your attendance percentage, how many classes you can miss, and how many you must attend to recover.',
		keywords:
			'attendance calculator, 75 attendance calculator, attendance percentage calculator, 75 percent attendance calculator, attendance shortage calculator, required attendance calculator, college attendance calculator, university attendance calculator, how many classes can I miss',
		ogLocale: 'en_US',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		trackerLink: 'Tracker',
		themeDark: 'Dark',
		themeLight: 'Light',
		themeToggleAria: 'Toggle Dark/Light Mode',
		aboutUs: 'About Us',
		privacyPolicy: 'Privacy Policy',
		termsAndConditions: 'Terms & Conditions',
		contactUs: 'Contact Us',
		languageLabel: 'Language',
	},
	header: {
		title: 'Attendance Calculator & 75% Bunk Planner',
		subtitleHtml:
			'The smart <strong>75 attendance calculator</strong> for college students. Know your exact attendance percentage, calculate safe bunks, or plan your recovery.',
	},
	calculator: {
		targetLabel: 'Target Attendance Requirement',
		targetPrefix: 'Target:',
		customPlaceholder: 'Custom',
		attendedLabel: 'Classes Attended',
		attendedSub: '(Present)',
		attendedPlaceholder: 'e.g. 30',
		totalLabel: 'Total Classes Held',
		totalSub: '(To Date)',
		totalPlaceholder: 'e.g. 40',
		semTotalLabel: 'Total Classes in Semester',
		semTotalSub: '(Optional)',
		semTotalPlaceholder: 'e.g. 100 expected classes',
	},
	results: {
		currentAttendanceEyebrow: 'CURRENT ATTENDANCE',
		heldSuffix: 'held',
		rightNowEyebrow: 'RIGHT NOW STATUS',
		waitingHeadline: 'Waiting for input...',
		waitingDesc: 'Enter numbers above to see your bunk budget.',
		semesterForecastEyebrow: 'SEMESTER FORECAST',
		copyButtonText: 'Copy Attendance Vibe Check',
		toastText: 'Copied status to clipboard!',
		shareButtonText: 'Share Result',
		shareCopiedText: 'Image downloaded & caption copied!',
		shareStatAttendedLabel: 'ATTENDANCE',
		shareStatTargetLabel: 'TARGET',
		trackerUpsellHtml: 'Tracking more than one subject? → <strong>Save all your subjects</strong>',
	},
	js: {
		noDataStatus: 'No Data',
		noDataVibe: 'Enter your attended and total classes to calculate your status.',
		waitingHeadline: 'Waiting for input...',
		waitingDesc: 'Enter numbers above to see your bunk budget.',
		invalidStatus: 'Invalid Input',
		invalidVibe: 'Attended classes cannot be higher than total classes held! Check your numbers.',
		invalidHeadline: 'Input Error',
		invalidDesc: 'Please fix your attended count.',
		safeToBunkPrefix: 'Safe to Bunk: {n} {classWord}',
		bunkBufferZero: 'Bunk Buffer: 0 classes',
		safeDescWithBunks: 'You can miss the next {n} {classWord} in a row without dropping below {target}%.',
		safeDescOnLine: 'You are on the line ({pct}%). Missing the next class will drop you below {target}%.',
		target100Headline: '100% Target Impossible',
		target100Desc: 'Once a class is missed, 100% cannot be regained.',
		attendNextPrefix: 'Attend Next: {n} {classWord}',
		attendNextDesc: 'Attend {n} consecutive {classWord} without missing to climb back to {target}%.',
		cookedHeadline: '💀 Term Outlook: Cooked',
		cookedDesc: 'Even with 100% attendance in all {remaining} remaining {classWordRemaining}, max achievable is only {maxPct}%.',
		semBudgetHeadline: 'Semester Bunk Budget: {n} {classWord}',
		semBudgetDesc: 'Out of {remaining} remaining {classWordRemaining}, you only need to attend {needed} to finish above {target}%.',
		mustAttendHeadline: 'Must Attend: {needed} / {remaining} classes',
		mustAttendDesc: 'You must attend at least {needed} of the {remaining} remaining {classWordRemaining} to hit {target}%.',
		vibeCookedStatus: 'Cooked 💀',
		vibeCookedMessageHtml:
			"<strong>You're cooked bro.</strong> Mathematically impossible to save this attendance even if you sit through every single remaining class (Max: {maxPct}%). RIP. 💀",
		vibeSafeStatus: 'Safe & Chilling 🚀',
		vibeSafeWithBunksHtml:
			"You're safe to bunk! Go touch grass, grab some chai, and enjoy your free time. <strong>{n} safe {bunkWord} available.</strong> 🚀",
		vibeSafeOnEdgeHtml:
			"You're safely at <strong>{pct}%</strong>, but on the edge! Don't bunk today or you'll drop below {target}%. ⚠️",
		vibeBorderlineStatus: 'Borderline ⚠️',
		vibeBorderlineMessageHtml:
			'Walking on thin ice bro. <strong>Time to wake up and head to class!</strong> Attend the next <strong>{n} {classWord}</strong> to fix this. ☕',
		vibeShortageStatus: 'Shortage 🚨',
		vibeShortageMessageHtml:
			'Time to wake up and head to class. <strong>You can still fix this if you grind now!</strong> Attend the next <strong>{n} {classWord}</strong> consecutively. 📚',
		copySummaryTitle: '📊 Attendance Vibe Check',
		copyStatusLabel: 'Status',
		copyAttendanceLabel: 'Attendance',
		copyTargetLabel: 'Target',
		copyNoteLabel: 'Note',
		copySemesterLabel: 'Semester',
		classSingular: 'class',
		classPlural: 'classes',
		bunkSingular: 'bunk',
		bunkPlural: 'bunks',
		semTotalErrorTooLow: 'Semester total cannot be less than classes already held ({held}).',
		semTotalErrorNonPositive: 'Enter a positive number.',
		semTotalErrorTooLarge: 'Enter a number no greater than {max}.',
		semesterLineBudget: '{n} {bunkWord} left of {remaining} remaining {classWordRemaining}',
		semesterLineMustAttend: 'must attend {needed} of {remaining} remaining {classWordRemaining}',
		semesterLineCooked: 'cooked — max {maxPct}% even attending every remaining class',
		safeToBunkCappedPrefix: 'Safe to Bunk: {n} {classWord} (only {n} left this semester)',
		semCompleteHeadline: '🏁 Semester Complete: {pct}%',
		semCompleteMetDesc: 'You finished the semester at {pct}%, meeting your {target}% target. 🎉',
		semCompleteMissedDesc: 'You finished the semester at {pct}%, short of your {target}% target.',
		semesterLineCompleteMet: 'semester complete at {pct}% — target met 🎉',
		semesterLineCompleteMissed: 'semester complete at {pct}% — target missed',
		customTargetError: 'Enter a value between 1 and 100.',
		vibeCompleteStatus: 'Semester Complete 🏁',
		remainVerbSingular: 'remains',
		remainVerbPlural: 'remain',
		copyFooter: 'Calculated on attendance75calculator.com',
		copyFailed: 'Failed to copy to clipboard.',
		unrecoverable100Status: 'Not Recoverable 💀',
		unrecoverable100MessageHtml:
			'Target is 100% and a class has already been missed — a perfect record can’t be regained this term. Only lowering the target fixes this.',
		shortNoData: 'No classes held yet',
		shortInvalid: "Invalid — attended can't exceed held",
		shortCompleteMet: 'Finished at {pct}% — target met 🎉',
		shortCompleteMissed: 'Finished at {pct}% — target missed',
		shortSafeEdgeZero: 'On the edge — don’t skip today ⚠️',
		shortSafeEdgeOne: 'Cutting it close — 1 bunk left ⚠️',
		shortSafeRoom: 'Safe — {n} {bunkWord} to spare 🚀',
		shortUnrecoverable100: 'Not recoverable at 100% target 💀',
		shortCooked: 'Cooked — max {maxPct}% possible 💀',
		shortBorderline: 'Thin ice — attend {n} {classWord} in a row ☕',
		shortShortage: 'Time to grind — attend {n} {classWord} in a row 📚',
	},
	article: {
		overview: {
			h2: 'What is an Attendance Calculator and Why Do You Need It?',
			p1Html:
				'An <strong>attendance calculator</strong> is an essential academic utility designed to help students track, calculate, and manage their lecture attendance with mathematical accuracy. In universities and colleges worldwide, maintaining a minimum attendance percentage—most commonly <strong>75 percent attendance</strong>—is a mandatory requirement to appear for final semester examinations.',
			p2Html:
				'Whether you want to calculate how many lectures you can safely skip, figure out how many consecutive classes you must attend to overcome an attendance shortage, or forecast your end-of-semester standing, this <strong>75 attendance calculator</strong> eliminates guesswork. Instead of doing complex mental arithmetic or relying on confusing spreadsheets, our <strong>attendance calculator app</strong> provides instant, real-time insights with just two numbers: the classes you have attended and the total classes held so far.',
		},
		why75: {
			h2: 'Why is 75% Attendance Mandatory in College?',
			p1: 'Higher education regulatory bodies (such as the UGC, AICTE, Bar Council of India, Medical Council, and global university boards) enforce a strict 75% attendance rule. Colleges implement this rule to ensure consistent classroom engagement, practical laboratory participation, and academic discipline.',
			p2: 'Falling below the required threshold leads to serious academic repercussions:',
			list: [
				'Debarment from Examinations: Students with an attendance shortage below 75% are often disqualified from sitting for end-semester or final exams.',
				'Condonation Fines & Penalties: While some colleges allow condonation for attendance between 65% and 75% with a medical certificate, it often involves hefty administrative fines.',
				'Internal Assessment Loss: Many universities allocate 5 to 10 marks of internal assessment directly proportional to attendance percentage.',
				'Year Back or Semester Detention: Severe shortages below 60% can result in semester detention, forcing students to repeat the entire academic term.',
			],
			p3Html:
				'A dedicated <strong>attendance shortage calculator</strong> — one that doubles as a <strong>required attendance calculator</strong> for whatever percentage your department enforces — helps you stay ahead of these shortfalls before they become critical emergencies.',
		},
		formulas: {
			h2: 'How to Calculate 75% Attendance: Formulas & Logic',
			introHtml:
				'Our <strong>attendance calculator 75</strong> tool runs on precise mathematical algorithms. Here is the exact breakdown of how your attendance percentage, safe bunk limit, and catch-up requirements are computed:',
			cards: [
				{
					title: '1. Current Attendance Percentage Formula',
					formula: 'Attendance (%) = (Classes Attended / Total Classes Held) × 100',
					exampleLabel: 'Example:',
					descHtml:
						'If 40 lectures have been held to date and you attended 30 of them:<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: '2. Safe Bunk Limit Formula (When Current % ≥ Target %)',
					formula: 'Safe Bunks = ⌊(Classes Attended / Target Fraction) - Total Classes Held⌋',
					exampleLabel: 'Example:',
					descHtml:
						'Where <em>Target Fraction</em> is <code>0.75</code> for 75%. The floor symbol <code>⌊ ⌋</code> rounds down to the nearest whole integer to ensure your percentage never dips below 75%.<br /><strong>Example:</strong> Attended = 36, Total Held = 40, Target = 75% (0.75):<br /><code>Safe Bunks = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8 classes</code>.<br />You can safely miss the next 8 consecutive classes and still finish exactly at 75%.',
				},
				{
					title: '3. Consecutive Classes Needed to Recover (When Current % < Target %)',
					formula:
						'Classes to Attend = ⌈((Target Fraction × Total Classes Held) - Classes Attended) / (1 - Target Fraction)⌉',
					exampleLabel: 'Example:',
					descHtml:
						'For a 75% target (where <code>Target Fraction = 0.75</code>), the denominator is <code>1 - 0.75 = 0.25</code>. Multiplying by <code>4</code> simplifies the formula to:<br /><code>Classes to Attend = ⌈3 × Total Held - 4 × Attended⌉</code>.<br /><strong>Example:</strong> Attended = 20, Total Held = 35. To reach 75%:<br /><code>Classes to Attend = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25 classes</code>.<br />You must attend the next 25 classes in a row without absence to regain 75% attendance.',
				},
			],
		},
		howTo: {
			h2: 'How to Use This 75 Percent Attendance Calculator App',
			introHtml:
				'Using our <strong>attendance calculator college</strong> utility is straightforward and requires zero registration or downloads:',
			steps: [
				'Select Your Attendance Target: Click on one of the quick-select pills (60%, 65%, 70%, 75%, 80%, 85%, 90%) or type any custom percentage required by your department.',
				'Enter Classes Attended: Input the total number of lecture or lab hours you have physically attended so far.',
				'Enter Total Classes Held: Input the cumulative number of classes your professors have conducted to date.',
				'(Optional) Enter Total Classes in Semester: If you know the total planned classes for the entire semester (e.g., 90 or 120 classes), enter it to unlock the Semester Forecast card.',
				'Read Instant Results: Watch your percentage, safe bunk quota, recovery target, and dynamic vibe status update instantly as you type.',
			],
		},
		features: {
			h2: 'Key Features of Our College Attendance Calculator',
			items: [
				{
					icon: '⚡',
					title: 'Instant Real-Time Calculations',
					desc: 'No waiting and no "Submit" buttons. The calculator updates every metric as soon as you type or change a number.',
				},
				{
					icon: '🎯',
					title: 'End-of-Semester Forecast',
					desc: 'Plan your bunk budget across the remaining semester. Find out if your target is mathematically achievable or if you are "cooked".',
				},
				{
					icon: '🔒',
					title: '100% Client-Side Privacy',
					desc: 'All calculations happen directly inside your browser. No attendance data, login credentials, or student records are ever sent to external servers.',
				},
				{
					icon: '🌙',
					title: 'Built-in Dark Mode',
					desc: 'Seamlessly toggle between crisp light mode and deep OLED dark mode for late-night college study sessions.',
				},
			],
		},
		faq: {
			h2: 'Frequently Asked Questions (FAQ)',
			items: [
				{
					question: 'How is attendance percentage calculated?',
					answerHtml:
						'Attendance percentage is calculated by dividing the classes you attended by the total classes held so far, then multiplying by 100: <code>Attendance % = (Classes Attended / Total Classes Held) × 100</code>. For example, attending 30 out of 40 classes held gives <code>(30 / 40) × 100 = 75%</code>.',
				},
				{
					question: 'How many classes can I miss and still have 75% attendance?',
					answerHtml:
						'Once your current attendance is at or above 75%, the number of classes you can safely miss is <code>⌊(Attended / 0.75) − Total Held⌋</code>. For example, if you have attended 36 out of 40 classes, you can miss the next 8 in a row and still finish exactly at 75%. Enter your own numbers above for your exact safe-bunk count.',
				},
				{
					question: 'How many classes do I need to attend to reach 75% attendance?',
					answerHtml:
						'If your attendance has dropped below 75%, the number of consecutive classes you need to attend without missing any is <code>⌈(0.75 × Total Held − Attended) / 0.25⌉</code>. For example, attending 20 out of 35 classes held means you need the next 25 classes in a row to bring your attendance back up to 75%.',
				},
				{
					question: 'What happens if my attendance is below 75%?',
					answerHtml:
						'Most colleges treat 75% as the minimum required to sit for end-semester exams. Falling short can mean exam debarment, condonation fines for attendance roughly between 65–75% (often with a medical certificate), loss of internal assessment marks, or, below 60%, being held back for the semester. Rules vary by institution, so always confirm with your own college.',
				},
				{
					question: 'Can I calculate attendance for any percentage, not just 75%?',
					answerHtml:
						'Yes. Alongside 75%, you can select 60%, 65%, 70%, 80%, 85%, 90%, or enter any custom target from 1–100% using the target selector above. The safe-bunk and recovery numbers update instantly for whichever percentage your college requires.',
				},
				{
					question: 'Is this attendance calculator free to use?',
					answerHtml:
						'Yes, completely free — no sign-ups, premium tiers, or hidden costs. Use it as often as you like, for as many subjects or semesters as you need.',
				},
				{
					question: 'Does the attendance calculator work on mobile?',
					answerHtml:
						'Yes. It is fully responsive on phones, tablets, and desktops, with a dark mode for late-night checks. It runs entirely in your browser with no app to install.',
				},
				{
					question: 'Is my attendance data private?',
					answerHtml:
						'Yes. Every calculation happens directly in your browser — nothing you type is sent to a server or tracked. Closing the tab clears the session unless you use the <a href="/tracker" class="legal-link">Attendance Tracker</a> to save your subjects on your own device.',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • Free Online College Attendance Tracker • Client-side math & 100% private',
	},
	tracker: {
		meta: {
			title: 'Attendance Tracker - Track Every Subject, One Tap After Class',
			description:
				'Save all your subjects once, then update your attendance with one tap after each class. Free, private, multi-subject attendance tracker with safe-skip limits, recovery targets, and an overall roll-up — nothing ever leaves your browser.',
			keywords:
				'attendance tracker, multi subject attendance tracker, weekly attendance tracker, class attendance tracker app, track attendance per subject, attendance tracker for college students',
		},
		header: {
			title: 'Attendance Tracker',
			subtitle: 'Save every subject once, then +Present / +Absent after class.',
		},
		targetLabel: 'Target attendance',
		emptyHint: 'Add your first subject to start tracking.',
		sharedBanner: {
			text: "You're viewing a tracker shared via link. It hasn't been saved to this browser yet.",
			saveBtn: 'Save to my tracker',
			dismissBtn: 'Just viewing',
		},
		storageWarning:
			"Your browser is blocking site data (private mode, or site data disabled), so changes here won't be saved once you leave. The tracker still works normally for this session — use Copy Link to keep a backup.",
		addSubject: {
			heading: 'Add a subject',
			nameLabel: 'Subject name',
			namePlaceholder: 'e.g. Data Structures',
			attendedLabel: 'Attended',
			attendedSub: 'so far',
			heldLabel: 'Held',
			heldSub: 'so far',
			plannedLabel: 'Total Classes in Semester',
			plannedPlaceholder: 'e.g. 100 expected classes',
			submitBtn: '+ Add subject',
		},
		stats: {
			overall: 'Overall attendance',
			weakest: 'Weakest subject',
			strongest: 'Strongest subject',
		},
		subjectsHeading: 'Your subjects',
		copyVibeBtn: '📋 Copy Vibe Check',
		copyLinkBtn: '🔗 Copy link',
		printBtn: '🖨️ Print / Screenshot',
		row: {
			totalThisSemester: '· {n} total this semester',
			present: '+ Present',
			absent: '+ Absent',
			edit: 'Edit',
			delete: 'Delete',
			editNameLabel: 'Name',
			editAttendedLabel: 'Attended',
			editHeldLabel: 'Held',
			editPlannedLabel: 'Total Classes in Semester',
			save: 'Save',
			cancel: 'Cancel',
		},
		notes: {
			invalid: "Attended ({attended}) can't be more than held ({held}) — fix the numbers below.",
			unrecoverable: 'Target is 100% and a class was already missed — this can only be reset by lowering the target.',
			cooked: 'Even attending every one of the {remaining} remaining classes only reaches {maxPct}% — below target for the term.',
			termCompleteMet: 'Term complete: finished at {pct}% — target met.',
			termCompleteMissed: 'Term complete: finished at {pct}% — target missed.',
			forecastBudget: 'By term end: safe to skip {n} more {classWord} of {remaining} remaining.',
			forecastMustAttend: 'By term end: must attend all {remaining} remaining classes.',
			borderline: "* Borderline value — colleges round 74.x% differently, double-check your institution's policy.",
			semesterOver: 'Semester over — no classes left. Use Edit to change the total.',
		},
		validation: {
			nameRequired: 'Give the subject a name.',
			duplicateName: 'You already have a subject with that name.',
			attendedInvalid: 'Attended must be a whole number, 0 or greater.',
			heldInvalid: 'Held must be a whole number, 0 or greater.',
			plannedInvalid: 'Total Classes in Semester must be a whole number, 0 or greater.',
			attendedExceedsHeld: "Attended can't be more than classes held.",
			plannedBelowHeld: 'Total classes in semester must be greater than or equal to classes held.',
		},
		toasts: {
			vibeCopied: 'Vibe check copied',
			linkCopied: 'Link copied',
			copyFailed: 'Could not copy — try again',
			addressBarFallback: 'Could not copy — copy the address bar instead',
			savedToBrowser: 'Saved to this browser',
			undone: 'Undone',
			undoBtn: 'Undo',
		},
		undo: {
			present: '"{name}" marked present',
			absent: '"{name}" marked absent',
			deleted: '"{name}" deleted',
			updated: '"{name}" updated',
		},
		rollup: {
			noClassesRecorded: '(no classes recorded yet)',
			heldAcross: '({attended} / {held} held across {n} {subjectWord})',
			subjectSingular: 'subject',
			subjectPlural: 'subjects',
			noData: '—',
			noDataDetail: 'No classes recorded yet',
			detailComplete: '{pct}% · semester complete',
			detailUnrecoverable: '{pct}% · not recoverable at 100% target',
			detailCooked: '{pct}% · out of reach this term',
			detailShort: '{pct}% · attend {n} in a row',
			detailSkip: '{pct}% · can skip {n} more',
			detailSafe: '{pct}% · safe',
			detailLowest: '{pct}% · lowest of your subjects',
			forecastUnavailable: 'Forecast unavailable — add semester totals.',
			forecastMet: 'By term end (subjects with a total set): finished at {pct}% — target met.',
			forecastMissed: 'By term end (subjects with a total set): finished at {pct}% — target missed.',
			forecastBudget: 'By term end (subjects with a total set): safe to skip {n} more {classWord} of {remaining} remaining.',
			forecastMustAttend: 'By term end (subjects with a total set): must attend all {remaining} remaining classes.',
		},
		copySummary: {
			targetLine: '• Target: {target}%',
			overallLine: '• Overall: {line}',
			noClassesRecorded: 'No classes recorded yet.',
			noSubjectsSaved: 'No subjects saved yet.',
		},
		faq: [
			{
				question: 'How is the Tracker different from the homepage calculator?',
				answerHtml:
					'The homepage calculator answers a single one-off question: attended, held, and your target percentage in, an instant result out. The Tracker is built for the whole semester — you save every subject once, and each week you tap +Present or +Absent after class to keep every subject up to date, with an overall roll-up across all of them.',
			},
			{
				question: 'Is my data sent to a server?',
				answerHtml:
					"No. The Tracker is 100% client-side, exactly like the homepage calculator. Your subjects, counts, and target are saved only in your browser's local storage. Nothing is ever uploaded, and there is no account or sign-in.",
			},
			{
				question: 'What happens if I clear my browser data or use private/incognito mode?',
				answerHtml:
					"Local storage is tied to your browser profile, so clearing site data or browsing in a private window will remove (or never save) your tracker. In private mode the Tracker still works perfectly for that session — it just won't remember your subjects the next time you open the page. Use Copy Link before you close the tab if you want to keep a backup.",
			},
			{
				question: 'How do I share my tracker with a friend or move it to another device?',
				answerHtml:
					'Tap Copy Link. It encodes your current subjects and target directly into the URL — nothing is uploaded anywhere. Anyone who opens that link sees your tracker and can choose to save it as their own; opening it on your laptop restores the same data you had on your phone.',
			},
			{
				question: 'How is the "safe to skip" number calculated?',
				answerHtml:
					'Once you enter the Total Classes in Semester for a subject, the Tracker works out the most classes you can still miss and still land at or above your target by the end of the term — accounting for the classes already held, not just the ones left.',
			},
			{
				question: 'Why does the recovery number look different from a simple "classes needed" guess?',
				answerHtml:
					"Attending a class adds one to both the classes attended and the classes held, so the percentage moves slower than a naive calculation suggests. The Tracker's recovery formula accounts for that growing denominator, so the number it gives you is the exact number of classes in a row that brings you to your target — not an underestimate.",
			},
		],
		article: {
			introH2: 'A tracker built for the whole semester',
			introP1:
				"Most attendance calculators answer one question and you move on. This page is different: save every subject once, and after each class tap <strong>+Present</strong> or <strong>+Absent</strong> on that subject — one tap, no retyping numbers, no confirmation dialog. Your data is saved automatically in this browser so it's ready the next time you open the page.",
			introP2:
				'Each subject shows its own percentage and status, an overall roll-up across everything you\'re taking, and a "weakest subject" callout — because it\'s easy to track your overall number and still get blindsided by the one class you keep skipping.',
			calcH2: 'How the numbers are calculated',
			formulas: [
				{
					title: 'Current percentage',
					formula: 'pct = (attended / held) × 100',
					desc: "The raw percentage is shown to one decimal place. Colleges disagree on whether 74.6% should floor to 74% or round to 75% — this tracker never silently rounds a borderline value up for you; it flags it instead so you can check your institution's own policy.",
				},
				{
					title: 'Classes you can skip right now',
					formula: 'skips = floor(attended / target% − held)',
					desc: 'Shown for every subject you\'re on track in — the same "right now" figure the homepage calculator gives, with no total class count required.',
				},
				{
					title: 'Classes needed to recover',
					formula: 'needed = ceil((target% × held − attended) / (1 − target%))',
					desc: "Shown when you're below target. Every class you attend adds to both the numerator and the denominator, so a naive guess that only grows the numerator understates how many you actually need — this formula accounts for that.",
				},
				{
					title: 'By-term-end forecast',
					formula: 'maxPct = (attended + remaining) / totalClassesInSemester × 100',
					desc: 'Only shown once you enter the Total Classes in Semester — projects where you\'ll land by the end of the term, capping the "right now" skip figure to what actually remains and flagging when target is mathematically out of reach.',
				},
			],
		},
		footerNote: '© {year} Attendance 75 Calculator • Free Online College Attendance Tracker',
		footerCalculatorLink: 'Calculator',
	},
};

export default en;
