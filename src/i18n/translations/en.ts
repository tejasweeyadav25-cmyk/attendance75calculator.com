import type { Translations } from '../types';

const en: Translations = {
	meta: {
		title: '75% Attendance Calculator - Free College Tool',
		description:
			'Free attendance calculator for the 75% rule. Check safe bunks, classes needed, and semester projections instantly.',
		keywords:
			'attendance calculator, 75 attendance calculator, attendance calculator 75, attendance calculator app, 75 percent attendance calculator, college attendance calculator, attendance calculator college',
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
				'Using a dedicated <strong>college attendance calculator</strong> allows you to stay ahead of attendance shortfalls before they become critical emergencies.',
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
					question: 'What is a Monthly Attendance Calculator and how to use it?',
					answerHtml:
						'A <strong>monthly attendance calculator</strong> allows students and employees to calculate attendance percentage over a specific calendar month. Simply input the number of days or classes attended in that month and divide by the total working days or scheduled lectures held in that month, then multiply by 100.',
				},
				{
					question: 'What is the Attendance Calculator Formula?',
					answerHtml:
						'The basic <strong>attendance formula</strong> is: <code>Attendance (%) = (Classes Attended / Total Classes Held) × 100</code>. To find safe bunks above a target percentage (P%): <code>Safe Bunks = ⌊(Attended / (P/100)) - Total Held⌋</code>. To find classes needed to recover to target (P%): <code>Classes to Attend = ⌈((P/100 × Total Held) - Attended) / (1 - P/100)⌉</code>.',
				},
				{
					question: 'What is the Attendance Calculator App and does it work offline?',
					answerHtml:
						'The <strong>Attendance Calculator App</strong> is a free, web-based mobile-friendly tool that runs directly in your browser. It calculates attendance percentage, safe bunks, and recovery classes instantly without requiring app store downloads, logins, or server storage.',
				},
				{
					question: 'What is a Student Attendance Calculator?',
					answerHtml:
						'A <strong>student attendance calculator</strong> is a specialized educational calculator designed for school and university students to keep track of lecture and laboratory attendance. It prevents examination debarment by alerting students when attendance drops near or below mandatory thresholds like 75% or 80%.',
				},
				{
					question: 'Can you use the Attendance Calculator for 100 Percent?',
					answerHtml:
						'Yes, you can set the attendance target to <strong>100%</strong> using our custom target input. Note that achieving 100% attendance requires attending every single class held from day one. If even one class has been missed, reaching a 100.0% final attendance is mathematically impossible.',
				},
				{
					question: 'How does the Attendance Calculator 80 percent target work?',
					answerHtml:
						'The <strong>Attendance Calculator 80</strong> feature sets your target threshold to 80% (common in premier universities and professional degree courses). To maintain 80%, you must attend at least 4 out of every 5 classes held (Attended ≥ 0.8 × Total Classes).',
				},
				{
					question: 'How does the Attendance Calculator 75 percent target work?',
					answerHtml:
						'The <strong>Attendance Calculator 75</strong> helps students satisfy the standard 75% attendance rule mandated by UGC and colleges. If your current attendance is ≥ 75%, it calculates how many classes you can skip. If it is &lt; 75%, it computes the exact number of consecutive classes you must attend to return to 75%.',
				},
				{
					question: 'For a 75 percent attendance calculator, how many days can you miss?',
					answerHtml:
						'For a standard semester with 100 classes, you need to attend at least 75 classes and can miss a maximum of 25 classes. If you have currently attended 30 out of 40 classes held, you can miss 0 immediate classes without dropping below 75%, but out of the remaining 60 semester classes, you can skip up to 15 classes.',
				},
				{
					question: 'How to use an attendance percentage calculator?',
					answerHtml:
						'To use an <strong>attendance percentage calculator</strong>: 1) Select your target attendance (e.g., 75% or 80%), 2) Enter the number of classes or days you attended, 3) Enter the total classes or days conducted so far. The calculator immediately shows your current percentage, status badge, and safe bunk quota.',
				},
				{
					question: 'How is attendance percentage calculated?',
					answerHtml:
						'Attendance percentage is calculated by dividing the total number of present sessions by the total number of delivered sessions, and multiplying that fraction by 100. For instance, attending 45 out of 60 lectures gives <code>(45 / 60) × 100 = 75%</code>.',
				},
				{
					question: 'How to calculate attendance percentage with a calculator?',
					answerHtml:
						'On any calculator: type your attended classes, press divide (÷), enter total classes held, press multiply (×), enter 100, and press equals (=). Or simply use our free online <strong>attendance calculator app</strong> to get instant calculations with bunk suggestions automatically.',
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
