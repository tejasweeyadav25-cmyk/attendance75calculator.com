// Single source of truth for the site's attendance math — the homepage
// calculator and the /tracker page both import this so their numbers (right
// now safe-skips/needed, and the whole-semester forecast) can never drift
// apart. This module is numbers-only; copy/tone lives in attendanceStatus.ts.

export interface SemesterForecast {
	isCooked: boolean;
	isComplete: boolean;
	metTarget: boolean;
	remaining: number;
	needed: number;
	bunksRemaining: number;
	maxPct: number;
}

/** Right-now safe bunks once at/above target: floor(attended/targetFrac − held). */
export function computeImmediateSkips(attended: number, held: number, targetPct: number): number {
	return Math.floor(attended / (targetPct / 100) - held);
}

/** Right-now classes needed in a row once below target: ceil((target×held − attended) / (1 − target)). */
export function computeImmediateNeeded(attended: number, held: number, targetPct: number): number {
	const targetFrac = targetPct / 100;
	return Math.max(0, Math.ceil((targetFrac * held - attended) / (1 - targetFrac)));
}

/**
 * Whole-semester forecast once a total planned class count is known.
 * Caller must ensure totalPlanned >= held before calling — this function
 * does not validate that itself.
 */
export function buildSemesterForecast(
	attended: number,
	held: number,
	targetPct: number,
	totalPlanned: number
): SemesterForecast {
	const targetFrac = targetPct / 100;
	const remaining = Math.max(0, totalPlanned - held);
	const isComplete = remaining === 0;
	const maxPossibleAttended = attended + remaining;
	const maxPossiblePct = totalPlanned > 0 ? (maxPossibleAttended / totalPlanned) * 100 : 0;
	const semTotalTargetAttended = Math.ceil(targetFrac * totalPlanned);
	const needed = Math.max(0, semTotalTargetAttended - attended);
	const bunksRemaining = remaining - needed;
	return {
		isCooked: !isComplete && maxPossiblePct < targetPct,
		isComplete,
		metTarget: maxPossiblePct >= targetPct,
		remaining,
		needed,
		bunksRemaining,
		maxPct: maxPossiblePct,
	};
}
