import type { Translations } from '../types';

const ko: Translations = {
	meta: {
		title: '출석률 계산기 - 무료 대학교 75% 출석률 계산기 앱',
		description:
			'75% 출석 기준을 확인하는 무료 온라인 출석률 계산기입니다. 안전하게 결석 가능한 수업 수, 75% 출석률 달성에 필요한 수업 수, 학기 말 출석률 예측을 즉시 계산해 드립니다.',
		keywords:
			'출석률 계산기, 출석 75 계산기, 75 출석률 계산기, 출석률 계산기 앱, 출석률 75퍼센트 계산기, 대학 출석률 계산기, 대학교 출석 계산기',
		ogLocale: 'ko_KR',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		themeDark: '다크',
		themeLight: '라이트',
		themeToggleAria: '다크/라이트 모드 전환',
		aboutUs: '회사 소개',
		privacyPolicy: '개인정보 처리방침',
		termsAndConditions: '이용약관',
		contactUs: '문의하기',
		languageLabel: '언어',
	},
	header: {
		title: '출석률 계산기 & 75% 결석 플래너',
		subtitleHtml:
			'대학생을 위한 스마트한 <strong>75 출석률 계산기</strong>입니다. 정확한 출석률을 확인하고, 안전하게 결석할 수 있는 수업 수를 계산하거나, 출석률 회복 계획을 세워보세요.',
	},
	calculator: {
		targetLabel: '목표 출석률 기준',
		targetPrefix: '목표:',
		customPlaceholder: '직접 입력',
		attendedLabel: '출석한 수업 수',
		attendedSub: '(출석)',
		attendedPlaceholder: '예: 30',
		totalLabel: '진행된 총 수업 수',
		totalSub: '(현재까지)',
		totalPlaceholder: '예: 40',
		semTotalLabel: '학기 전체 수업 수',
		semTotalSub: '(선택 사항)',
		semTotalPlaceholder: '예: 예상 수업 100회',
	},
	results: {
		currentAttendanceEyebrow: '현재 출석률',
		heldSuffix: '진행됨',
		rightNowEyebrow: '현재 상태',
		waitingHeadline: '입력을 기다리는 중...',
		waitingDesc: '위에 숫자를 입력하면 결석 가능 일수를 확인할 수 있어요.',
		semesterForecastEyebrow: '학기 말 예측',
		copyButtonText: '출석 상태 복사하기',
		toastText: '상태가 클립보드에 복사되었습니다!',
		shareButtonText: '결과 공유',
		shareCopiedText: '이미지가 다운로드되고 캡션이 복사되었습니다!',
		shareStatAttendedLabel: '출석률',
		shareStatTargetLabel: '목표',
	},
	js: {
		noDataStatus: '데이터 없음',
		noDataVibe: '출석한 수업 수와 총 수업 수를 입력하면 상태를 계산해 드려요.',
		waitingHeadline: '입력을 기다리는 중...',
		waitingDesc: '위에 숫자를 입력하면 결석 가능 일수를 확인할 수 있어요.',
		invalidStatus: '잘못된 입력',
		invalidVibe: '출석한 수업 수는 진행된 총 수업 수보다 클 수 없어요! 숫자를 다시 확인해 주세요.',
		invalidHeadline: '입력 오류',
		invalidDesc: '출석 수업 수를 다시 확인해 주세요.',
		safeToBunkPrefix: '안전하게 결석 가능: {n}회',
		bunkBufferZero: '결석 여유: 0회',
		safeDescWithBunks: '다음 {n}번의 수업을 연속으로 빠져도 {target}% 아래로 떨어지지 않아요.',
		safeDescOnLine: '지금 딱 경계선({pct}%)이에요. 다음 수업을 빠지면 {target}% 아래로 떨어져요.',
		target100Headline: '100% 목표는 불가능해요',
		target100Desc: '한 번이라도 결석하면 100%를 다시 달성할 수 없어요.',
		attendNextPrefix: '다음 출석 필요: {n}회',
		attendNextDesc: '연속으로 {n}번 결석 없이 출석하면 {target}%까지 회복할 수 있어요.',
		cookedHeadline: '💀 학기 전망: 망함',
		cookedDesc: '남은 {remaining}번의 수업에 전부 출석해도 최대 {maxPct}%밖에 달성할 수 없어요.',
		semBudgetHeadline: '학기 결석 가능 일수: {n}회',
		semBudgetDesc: '남은 {remaining}번의 수업 중 {needed}번만 출석하면 {target}% 이상으로 마무리할 수 있어요.',
		mustAttendHeadline: '필수 출석: {remaining}회 중 {needed}회',
		mustAttendDesc: '{target}%를 달성하려면 남은 {remaining}번의 수업 중 최소 {needed}번은 출석해야 해요.',
		vibeCookedStatus: '망함 💀',
		vibeCookedMessageHtml:
			'<strong>야, 너 완전 망했어.</strong> 남은 수업 전부 출석해도 이 출석률은 수학적으로 살릴 수 없어(최대: {maxPct}%). 명복을 빕니다. 💀',
		vibeSafeStatus: '안전하게 여유 만만 🚀',
		vibeSafeWithBunksHtml:
			'결석해도 안전해! 바람도 좀 쐬고, 차 한 잔 마시면서 여유를 즐겨. <strong>안전하게 결석 가능한 수업 {n}회 남음.</strong> 🚀',
		vibeSafeOnEdgeHtml:
			'지금 <strong>{pct}%</strong>로 안전하긴 한데, 아슬아슬해! 오늘 빠지면 {target}% 아래로 떨어지니까 결석은 금물이야. ⚠️',
		vibeBorderlineStatus: '경계선 ⚠️',
		vibeBorderlineMessageHtml:
			'완전 살얼음판 걷는 중이야. <strong>이제 정신 차리고 수업 들으러 가야 해!</strong> 다음 <strong>{n}번</strong> 수업에 출석하면 해결돼. ☕',
		vibeShortageStatus: '출석 부족 🚨',
		vibeShortageMessageHtml:
			'이제 정신 차리고 수업 들으러 가야 할 때야. <strong>지금부터 열심히 하면 아직 만회할 수 있어!</strong> 다음 <strong>{n}번</strong> 수업에 연속으로 출석해봐. 📚',
		copySummaryTitle: '📊 출석 상태 체크',
		copyStatusLabel: '상태',
		copyAttendanceLabel: '출석률',
		copyTargetLabel: '목표',
		copyNoteLabel: '메모',
		copySemesterLabel: '학기',
		classSingular: '수업',
		classPlural: '수업',
		bunkSingular: '회',
		bunkPlural: '회',
		semTotalErrorTooLow: '학기 총 수업 수는 이미 진행된 {held}회보다 적을 수 없어요.',
		semTotalErrorNonPositive: '양수를 입력해 주세요.',
		semTotalErrorTooLarge: '{max} 이하의 숫자를 입력해 주세요.',
		semesterLineBudget: '남은 {remaining}회 중 {n}회는 결석 가능',
		semesterLineMustAttend: '남은 {remaining}회 중 {needed}회는 출석 필수',
		semesterLineCooked: '전부 출석해도 최대 {maxPct}%',
		safeToBunkCappedPrefix: '안전하게 결석 가능: {n}회 (이번 학기에 {n}회만 남음)',
		semCompleteHeadline: '🏁 학기 종료: {pct}%',
		semCompleteMetDesc: '출석률 {pct}%로 학기를 마쳤고, 목표 {target}%를 달성했어요. 🎉',
		semCompleteMissedDesc: '출석률 {pct}%로 학기를 마쳤고, 목표 {target}%에는 못 미쳤어요.',
		semesterLineCompleteMet: '학기 종료, 출석률 {pct}% — 목표 달성 🎉',
		semesterLineCompleteMissed: '학기 종료, 출석률 {pct}% — 목표 미달성',
		customTargetError: '1에서 100 사이의 값을 입력해 주세요.',
		vibeCompleteStatus: '학기 종료 🏁',
		remainVerbSingular: '남다',
		remainVerbPlural: '남다',
		copyFooter: 'attendance75calculator.com에서 계산됨',
		copyFailed: '클립보드 복사에 실패했습니다.',
	},
	article: {
		overview: {
			h2: '출석률 계산기란 무엇이며 왜 필요할까요?',
			p1Html:
				'<strong>출석률 계산기</strong>는 학생들이 수업 출석을 정확하게 추적, 계산, 관리할 수 있도록 도와주는 필수 학업 도구입니다. 전 세계 대학교에서는 기말고사 응시를 위해 최소 출석률—가장 일반적으로 <strong>출석률 75%</strong>—을 유지하는 것이 필수 요건입니다.',
			p2Html:
				'몇 개의 수업을 안전하게 빠질 수 있는지 계산하고 싶든, 출석 부족을 만회하기 위해 연속으로 몇 번의 수업에 출석해야 하는지 알고 싶든, 학기 말 출석 상태를 예측하고 싶든, 이 <strong>75 출석률 계산기</strong>는 복잡한 계산을 없애줍니다. 어려운 암산이나 헷갈리는 스프레드시트 대신, 저희 <strong>출석률 계산기 앱</strong>은 출석한 수업 수와 현재까지 진행된 총 수업 수, 이 두 숫자만으로 즉각적인 실시간 정보를 제공합니다.',
		},
		why75: {
			h2: '대학교에서 75% 출석이 필수인 이유는 무엇일까요?',
			p1: 'UGC, AICTE, 인도 변호사협의회(Bar Council of India), 의학협의회(Medical Council) 등 고등교육 규제 기관과 전 세계 대학 이사회는 엄격한 75% 출석 규정을 시행하고 있습니다. 대학들은 이 규정을 통해 지속적인 수업 참여, 실습 실험 참여, 학업 규율을 보장하려 합니다.',
			p2: '기준 출석률 미달 시 다음과 같은 심각한 학업상의 불이익이 발생할 수 있습니다:',
			list: [
				'시험 응시 자격 박탈: 출석률이 75% 미만인 학생은 대개 학기말 시험이나 기말고사 응시 자격을 잃습니다.',
				'출석 인정(콘도네이션) 벌금 및 페널티: 일부 대학에서는 진단서를 제출하면 출석률 65~75% 구간에 대해 출석 인정을 허용하지만, 대개 상당한 행정 벌금이 부과됩니다.',
				'내신(평가) 점수 손실: 많은 대학에서 내신 평가 점수 5~10점을 출석률에 비례하여 배정합니다.',
				'유급 또는 학기 정지: 출석률이 60% 미만으로 심각하게 부족한 경우 학기 정지 처분을 받아 해당 학기를 처음부터 다시 이수해야 할 수 있습니다.',
			],
			p3Html:
				'전용 <strong>대학 출석률 계산기</strong>를 사용하면 출석 부족이 심각한 문제가 되기 전에 미리 대비할 수 있습니다.',
		},
		formulas: {
			h2: '75% 출석률 계산 방법: 공식과 원리',
			introHtml:
				'저희 <strong>출석률 75 계산기</strong> 도구는 정확한 수학 알고리즘으로 작동합니다. 출석률, 안전 결석 한도, 만회에 필요한 수업 수가 어떻게 계산되는지 정확히 살펴보겠습니다:',
			cards: [
				{
					title: '1. 현재 출석률 계산 공식',
					formula: '출석률(%) = (출석한 수업 수 / 진행된 총 수업 수) × 100',
					exampleLabel: '예시:',
					descHtml:
						'지금까지 40회의 수업이 진행되었고 그중 30회에 출석했다면:<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: '2. 안전 결석 한도 공식 (현재 출석률 ≥ 목표 출석률인 경우)',
					formula: '안전 결석 가능 수 = ⌊(출석한 수업 수 / 목표 비율) - 진행된 총 수업 수⌋',
					exampleLabel: '예시:',
					descHtml:
						'여기서 <em>목표 비율</em>은 75%의 경우 <code>0.75</code>입니다. 내림 기호 <code>⌊ ⌋</code>는 출석률이 절대 75% 아래로 떨어지지 않도록 가장 가까운 정수로 내림 처리합니다.<br /><strong>예시:</strong> 출석 = 36, 진행된 총 수업 = 40, 목표 = 75%(0.75):<br /><code>안전 결석 가능 수 = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8회</code>.<br />다음 8번의 수업을 연속으로 안전하게 빠져도 정확히 75%로 마칠 수 있습니다.',
				},
				{
					title: '3. 회복에 필요한 연속 출석 수업 수 (현재 출석률 < 목표 출석률인 경우)',
					formula:
						'출석해야 할 수업 수 = ⌈((목표 비율 × 진행된 총 수업 수) - 출석한 수업 수) / (1 - 목표 비율)⌉',
					exampleLabel: '예시:',
					descHtml:
						'목표 75%(여기서 <code>목표 비율 = 0.75</code>)의 경우, 분모는 <code>1 - 0.75 = 0.25</code>입니다. 이 값에 <code>4</code>를 곱하면 공식이 다음과 같이 단순화됩니다:<br /><code>출석해야 할 수업 수 = ⌈3 × 진행된 총 수업 수 - 4 × 출석한 수업 수⌉</code>.<br /><strong>예시:</strong> 출석 = 20, 진행된 총 수업 = 35. 75%에 도달하려면:<br /><code>출석해야 할 수업 수 = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25회</code>.<br />75% 출석률을 회복하려면 결석 없이 다음 25번의 수업에 연속으로 출석해야 합니다.',
				},
			],
		},
		howTo: {
			h2: '이 75% 출석률 계산기 앱 사용 방법',
			introHtml:
				'저희 <strong>대학 출석률 계산기</strong> 도구는 사용이 간편하며 회원가입이나 다운로드가 전혀 필요 없습니다:',
			steps: [
				'목표 출석률 선택: 빠른 선택 버튼(60%, 65%, 70%, 75%, 80%, 85%, 90%) 중 하나를 클릭하거나, 소속 학과에서 요구하는 목표 출석률을 직접 입력하세요.',
				'출석한 수업 수 입력: 지금까지 실제로 출석한 강의 또는 실습 시간의 총 수를 입력하세요.',
				'진행된 총 수업 수 입력: 교수님이 현재까지 진행한 누적 수업 수를 입력하세요.',
				'(선택) 학기 전체 수업 수 입력: 학기 전체에 예정된 총 수업 수(예: 90회 또는 120회)를 알고 있다면 입력하여 학기 말 예측 카드를 확인해 보세요.',
				'즉시 결과 확인: 입력하는 즉시 출석률, 안전 결석 한도, 회복 목표, 실시간 상태 메시지가 바로 업데이트되는 것을 확인하세요.',
			],
		},
		features: {
			h2: '대학 출석률 계산기의 주요 기능',
			items: [
				{
					icon: '⚡',
					title: '실시간 즉시 계산',
					desc: '기다릴 필요도, "제출" 버튼도 없어요. 숫자를 입력하거나 변경하는 즉시 모든 항목이 업데이트됩니다.',
				},
				{
					icon: '🎯',
					title: '학기 말 출석률 예측',
					desc: '남은 학기 동안의 결석 가능 일수를 계획해 보세요. 목표 출석률이 수학적으로 달성 가능한지, 아니면 이미 "망했는지" 확인할 수 있습니다.',
				},
				{
					icon: '🔒',
					title: '100% 클라이언트 사이드 개인정보 보호',
					desc: '모든 계산은 브라우저 안에서 직접 처리됩니다. 출석 데이터, 로그인 정보, 학생 기록이 외부 서버로 전송되는 일은 절대 없습니다.',
				},
				{
					icon: '🌙',
					title: '기본 제공 다크 모드',
					desc: '늦은 밤 공부할 때도 눈이 편안하도록 선명한 라이트 모드와 깊은 OLED 다크 모드를 자유롭게 전환할 수 있습니다.',
				},
			],
		},
		faq: {
			h2: '자주 묻는 질문 (FAQ)',
			items: [
				{
					question: '월간 출석률 계산기란 무엇이며 어떻게 사용하나요?',
					answerHtml:
						'<strong>월간 출석률 계산기</strong>는 학생과 직장인이 특정 달력상의 월을 기준으로 출석률을 계산할 수 있도록 해줍니다. 해당 월에 출석한 일수 또는 수업 수를 입력하고, 그 달에 진행된 총 근무일 수 또는 예정된 수업 수로 나눈 뒤 100을 곱하면 됩니다.',
				},
				{
					question: '출석률 계산기 공식은 무엇인가요?',
					answerHtml:
						'기본 <strong>출석률 공식</strong>은 다음과 같습니다: <code>출석률(%) = (출석한 수업 수 / 진행된 총 수업 수) × 100</code>. 목표 출석률(P%) 이상에서 안전하게 결석 가능한 수를 구하려면: <code>안전 결석 가능 수 = ⌊(출석 수 / (P/100)) - 진행된 총 수업 수⌋</code>. 목표(P%) 회복에 필요한 수업 수를 구하려면: <code>출석해야 할 수업 수 = ⌈((P/100 × 진행된 총 수업 수) - 출석 수) / (1 - P/100)⌉</code>.',
				},
				{
					question: '출석률 계산기 앱이란 무엇이며 오프라인에서도 작동하나요?',
					answerHtml:
						'<strong>출석률 계산기 앱</strong>은 브라우저에서 바로 실행되는 무료 웹 기반 모바일 친화적 도구입니다. 앱스토어 다운로드, 로그인, 서버 저장 없이도 출석률, 안전 결석 가능 수, 회복에 필요한 수업 수를 즉시 계산합니다.',
				},
				{
					question: '학생 출석률 계산기란 무엇인가요?',
					answerHtml:
						'<strong>학생 출석률 계산기</strong>는 학교 및 대학교 학생들이 강의와 실습 출석을 관리할 수 있도록 설계된 전문 교육용 계산기입니다. 출석률이 75%나 80% 같은 필수 기준에 가까워지거나 미달할 때 미리 알려주어 시험 응시 자격 박탈을 예방합니다.',
				},
				{
					question: '출석률 계산기를 100%로 사용할 수 있나요?',
					answerHtml:
						'네, 직접 입력 기능을 사용해 목표 출석률을 <strong>100%</strong>로 설정할 수 있습니다. 단, 100% 출석률을 달성하려면 첫날부터 진행된 모든 수업에 빠짐없이 출석해야 합니다. 단 한 번이라도 결석했다면 최종 출석률 100.0%를 달성하는 것은 수학적으로 불가능합니다.',
				},
				{
					question: '출석률 계산기 80% 목표는 어떻게 작동하나요?',
					answerHtml:
						'<strong>출석률 계산기 80</strong> 기능은 목표 기준을 80%로 설정합니다(주요 대학 및 전문 학위 과정에서 흔히 요구됨). 80%를 유지하려면 진행된 수업 5회 중 최소 4회에는 출석해야 합니다(출석 수 ≥ 0.8 × 총 수업 수).',
				},
				{
					question: '출석률 계산기 75% 목표는 어떻게 작동하나요?',
					answerHtml:
						'<strong>출석률 계산기 75</strong>는 UGC 및 각 대학에서 정한 표준 75% 출석 규정을 충족하도록 도와줍니다. 현재 출석률이 75% 이상이면 몇 개의 수업을 빠질 수 있는지 계산해 주고, 75% 미만이면 다시 75%로 돌아가기 위해 연속으로 출석해야 하는 정확한 수업 수를 계산해 줍니다.',
				},
				{
					question: '75% 출석률 계산기 기준으로 며칠까지 결석할 수 있나요?',
					answerHtml:
						'한 학기에 총 100회의 수업이 있는 표준적인 경우, 최소 75회에 출석해야 하며 최대 25회까지 결석할 수 있습니다. 현재 40회의 수업 중 30회에 출석한 상태라면, 75% 아래로 떨어지지 않기 위해 지금 당장은 0회밖에 결석할 수 없지만, 남은 학기 60회의 수업 중에서는 최대 15회까지 결석할 수 있습니다.',
				},
				{
					question: '출석률 계산기는 어떻게 사용하나요?',
					answerHtml:
						'<strong>출석률 계산기</strong> 사용법: 1) 목표 출석률을 선택하세요(예: 75% 또는 80%), 2) 출석한 수업 또는 일수를 입력하세요, 3) 지금까지 진행된 총 수업 또는 일수를 입력하세요. 계산기가 즉시 현재 출석률, 상태 배지, 안전 결석 가능 수를 보여줍니다.',
				},
				{
					question: '출석률은 어떻게 계산하나요?',
					answerHtml:
						'출석률은 출석한 총 수업 수를 진행된 총 수업 수로 나눈 뒤, 그 값에 100을 곱하여 계산합니다. 예를 들어, 60개의 강의 중 45개에 출석했다면 <code>(45 / 60) × 100 = 75%</code>가 됩니다.',
				},
				{
					question: '계산기로 출석률을 계산하는 방법은 무엇인가요?',
					answerHtml:
						'일반 계산기에서는 출석한 수업 수를 입력하고 나누기(÷)를 누른 뒤 진행된 총 수업 수를 입력하고 곱하기(×)를 눌러 100을 입력한 다음 등호(=)를 누르면 됩니다. 또는 저희 무료 온라인 <strong>출석률 계산기 앱</strong>을 사용하면 결석 가능 일수까지 자동으로 즉시 계산해 드립니다.',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • 무료 온라인 대학 출석률 관리 도구 • 클라이언트 사이드 계산 & 100% 개인정보 보호',
	},
};

export default ko;
