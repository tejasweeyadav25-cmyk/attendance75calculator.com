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
};

export default en;
