// Single source of truth for the site's "vibe" status copy — the homepage
// calculator and the /tracker page both import this so their tone (labels,
// emoji, messages) can never drift apart. It is presentation-only: every
// number it derives (safe bunks, classes needed, semester forecast) mirrors
// the exact formulas already used by each page's own calculations, so the
// tier this picks can never disagree with the numbers shown next to it.
import en from '../i18n/translations/en';

export type AttendanceTier =
	| 'no-data'
	| 'invalid'
	| 'safe-room'
	| 'safe-edge'
	| 'borderline'
	| 'shortage'
	| 'cooked'
	| 'unrecoverable-100'
	| 'complete-met'
	| 'complete-missed';

export interface AttendanceStatusInput {
	attended: number;
	held: number;
	target: number;
	totalPlanned?: number | null;
}

export interface AttendanceStatus {
	tier: AttendanceTier;
	/** Short badge label, e.g. "Safe & Chilling 🚀" — already includes the emoji. */
	label: string;
	/** The tier's emoji on its own, for callers that want to place it separately. */
	emoji: string;
	/** Longer, playful line — for the homepage vibe box and the tracker's overall roll-up. May contain light <strong> markup; use toPlainText() to flatten it. */
	message: string;
	/** Compact, plain-text one-liner that fits a phone-width subject row. */
	shortMessage: string;
}

// The subset of the site's i18n `js` translation bundle this module needs to
// keep the homepage's copy localized. Any object with these string keys
// works — HomePage.astro passes its already-loaded per-locale strings
// straight through, so existing translations keep working unchanged.
// Callers with no i18n (the tracker) can omit this and get the English
// defaults below, read directly from the English translation file so the
// copy itself is never typed out a second time.
export interface AttendanceStatusStrings {
	noDataStatus: string;
	noDataVibe: string;
	invalidStatus: string;
	invalidVibe: string;
	vibeSafeStatus: string;
	vibeSafeWithBunksHtml: string;
	vibeSafeOnEdgeHtml: string;
	vibeBorderlineStatus: string;
	vibeBorderlineMessageHtml: string;
	vibeShortageStatus: string;
	vibeShortageMessageHtml: string;
	vibeCookedStatus: string;
	vibeCookedMessageHtml: string;
	vibeCompleteStatus: string;
	semCompleteMetDesc: string;
	semCompleteMissedDesc: string;
	classSingular: string;
	classPlural: string;
	bunkSingular: string;
	bunkPlural: string;
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
}

const DEFAULT_STRINGS: AttendanceStatusStrings = en.js;

/** Plain-text footer used by both pages' "Copy Vibe Check" clipboard text. */
export const COPY_FOOTER = 'Calculated on attendance75calculator.com';
export const COPY_TITLE = '📊 Attendance Vibe Check';

function pluralize(n: number, singular: string, plural: string): string {
	return n === 1 ? singular : plural;
}

function format(template: string, vars: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

/** Flattens a message's light <strong> markup down to plain text — for clipboard/copy output. */
export function toPlainText(html: string): string {
	return html.replace(/<[^>]+>/g, '');
}

interface Forecast {
	remaining: number;
	isComplete: boolean;
	isCooked: boolean;
	metTarget: boolean;
	maxPct: number;
}

// Mirrors buildSemesterForecast() (homepage) / buildForecast() (tracker) —
// same formulas, kept here only so this module can pick the right tier.
// The numbers actually shown on either page still come from each page's own
// calculation, never from this copy.
function buildForecast(attended: number, held: number, target: number, totalPlanned: number): Forecast {
	const remaining = Math.max(0, totalPlanned - held);
	const isComplete = remaining === 0;
	const maxPct = totalPlanned > 0 ? ((attended + remaining) / totalPlanned) * 100 : 0;
	return {
		remaining,
		isComplete,
		isCooked: !isComplete && maxPct < target,
		metTarget: maxPct >= target,
		maxPct,
	};
}

export function getAttendanceStatus(
	input: AttendanceStatusInput,
	strings: AttendanceStatusStrings = DEFAULT_STRINGS
): AttendanceStatus {
	const { attended, held, target } = input;
	const totalPlanned = input.totalPlanned ?? null;
	const s = strings;

	if (held === 0) {
		return { tier: 'no-data', label: s.noDataStatus, emoji: '', message: s.noDataVibe, shortMessage: s.shortNoData };
	}
	if (attended > held) {
		return {
			tier: 'invalid',
			label: s.invalidStatus,
			emoji: '⚠️',
			message: s.invalidVibe,
			shortMessage: s.shortInvalid,
		};
	}

	const targetFrac = target / 100;
	const pct = (attended / held) * 100;
	const forecast = totalPlanned !== null && totalPlanned >= held
		? buildForecast(attended, held, target, totalPlanned)
		: null;

	if (forecast && forecast.isComplete) {
		const pctRounded = Math.round(forecast.maxPct);
		if (forecast.metTarget) {
			return {
				tier: 'complete-met',
				label: s.vibeCompleteStatus,
				emoji: '🏁',
				message: format(s.semCompleteMetDesc, { pct: pctRounded, target }),
				shortMessage: format(s.shortCompleteMet, { pct: pctRounded }),
			};
		}
		return {
			tier: 'complete-missed',
			label: s.vibeCompleteStatus,
			emoji: '🏁',
			message: format(s.semCompleteMissedDesc, { pct: pctRounded, target }),
			shortMessage: format(s.shortCompleteMissed, { pct: pctRounded }),
		};
	}

	if (pct >= target) {
		let immediateBunks = Math.floor(attended / targetFrac - held);
		if (forecast && !forecast.isComplete && immediateBunks > forecast.remaining) {
			immediateBunks = forecast.remaining;
		}

		if (immediateBunks <= 1) {
			// "On the edge" — 0 or 1 safe bunks left. At exactly 0, the existing
			// on-edge copy ("don't bunk today") is accurate; at 1, reuse the
			// with-bunks copy (accurate: "1 safe bunk available") rather than
			// stretching the 0-bunks phrasing to a case where it would be wrong.
			const message = immediateBunks === 0
				? format(s.vibeSafeOnEdgeHtml, { pct: Math.round(pct), target })
				: format(s.vibeSafeWithBunksHtml, { n: immediateBunks, bunkWord: pluralize(immediateBunks, s.bunkSingular, s.bunkPlural) });
			return {
				tier: 'safe-edge',
				label: s.vibeSafeStatus,
				emoji: '🚀',
				message,
				shortMessage: immediateBunks === 0 ? s.shortSafeEdgeZero : s.shortSafeEdgeOne,
			};
		}

		const bunkWord = pluralize(immediateBunks, s.bunkSingular, s.bunkPlural);
		return {
			tier: 'safe-room',
			label: s.vibeSafeStatus,
			emoji: '🚀',
			message: format(s.vibeSafeWithBunksHtml, { n: immediateBunks, bunkWord }),
			shortMessage: format(s.shortSafeRoom, { n: immediateBunks, bunkWord }),
		};
	}

	// Below target.
	if (targetFrac >= 1) {
		// Target is 100% and a class has already been missed — mathematically
		// impossible to regain regardless of totalPlanned, so this is checked
		// before the forecast-based cooked tier below.
		return {
			tier: 'unrecoverable-100',
			label: s.unrecoverable100Status,
			emoji: '💀',
			message: s.unrecoverable100MessageHtml,
			shortMessage: s.shortUnrecoverable100,
		};
	}

	if (forecast && forecast.isCooked) {
		// Only reachable when a total planned count exists AND attending every
		// remaining class still can't reach target — never just a low percentage.
		const maxPctRounded = Math.round(forecast.maxPct);
		return {
			tier: 'cooked',
			label: s.vibeCookedStatus,
			emoji: '💀',
			message: format(s.vibeCookedMessageHtml, { maxPct: maxPctRounded }),
			shortMessage: format(s.shortCooked, { maxPct: maxPctRounded }),
		};
	}

	const immediateNeeded = Math.max(0, Math.ceil((targetFrac * held - attended) / (1 - targetFrac)));
	const classWord = pluralize(immediateNeeded, s.classSingular, s.classPlural);

	if (pct >= target - 5) {
		return {
			tier: 'borderline',
			label: s.vibeBorderlineStatus,
			emoji: '☕',
			message: format(s.vibeBorderlineMessageHtml, { n: immediateNeeded, classWord }),
			shortMessage: format(s.shortBorderline, { n: immediateNeeded, classWord }),
		};
	}

	return {
		tier: 'shortage',
		label: s.vibeShortageStatus,
		emoji: '🚨',
		message: format(s.vibeShortageMessageHtml, { n: immediateNeeded, classWord }),
		shortMessage: format(s.shortShortage, { n: immediateNeeded, classWord }),
	};
}
