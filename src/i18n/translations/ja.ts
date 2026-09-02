import type { Translations } from '../types';

const ja: Translations = {
	meta: {
		title: '出席率計算機 - 無料で使える大学出席率75%計算アプリ',
		description:
			'出席率75%基準を無料でチェックできるオンライン出席率計算機。安全にサボれる回数、75%達成に必要なクラス数、学期末の出席率予測を瞬時に計算できます。',
		keywords:
			'出席率計算機, 出席率75 計算機, 出席率計算 75, 出席率計算アプリ, 出席率75% 計算機, 大学 出席率計算機, 大学 出席率 計算',
		ogLocale: 'ja_JP',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		themeDark: 'ダーク',
		themeLight: 'ライト',
		themeToggleAria: 'ダークモード/ライトモードを切り替え',
		aboutUs: '当サイトについて',
		privacyPolicy: 'プライバシーポリシー',
		termsAndConditions: '利用規約',
		contactUs: 'お問い合わせ',
		languageLabel: '言語',
	},
	header: {
		title: '出席率計算機 & 75%出席プランナー',
		subtitleHtml:
			'大学生のためのスマートな<strong>出席率75%計算機</strong>。正確な出席率を把握し、安全にサボれる回数を計算し、出席率の回復プランを立てましょう。',
	},
	calculator: {
		targetLabel: '目標出席率',
		targetPrefix: '目標:',
		customPlaceholder: 'カスタム',
		attendedLabel: '出席したクラス数',
		attendedSub: '（出席）',
		attendedPlaceholder: '例: 30',
		totalLabel: '実施されたクラス総数',
		totalSub: '（現在まで）',
		totalPlaceholder: '例: 40',
		semTotalLabel: '学期の総クラス数',
		semTotalSub: '（任意）',
		semTotalPlaceholder: '例: 予定クラス数100',
	},
	results: {
		currentAttendanceEyebrow: '現在の出席率',
		heldSuffix: '実施済み',
		rightNowEyebrow: '現在のステータス',
		waitingHeadline: '入力を待っています...',
		waitingDesc: '上に数字を入力すると、サボれる余裕がわかります。',
		semesterForecastEyebrow: '学期の予測',
		copyButtonText: '出席率チェック結果をコピー',
		toastText: 'ステータスをクリップボードにコピーしました！',
		shareButtonText: '結果を共有',
		shareCopiedText: '画像をダウンロードし、キャプションをコピーしました！',
		shareStatAttendedLabel: '出席率',
		shareStatTargetLabel: '目標',
	},
	js: {
		noDataStatus: 'データなし',
		noDataVibe: '出席したクラス数と総クラス数を入力すると、ステータスを計算します。',
		waitingHeadline: '入力を待っています...',
		waitingDesc: '上に数字を入力すると、サボれる余裕がわかります。',
		invalidStatus: '入力エラー',
		invalidVibe: '出席したクラス数が実施されたクラス総数より多くなっています！数字を確認してください。',
		invalidHeadline: '入力エラー',
		invalidDesc: '出席したクラス数を修正してください。',
		safeToBunkPrefix: 'サボっても安全: {n}回',
		bunkBufferZero: 'サボれる余裕: 0回',
		safeDescWithBunks: '次の{n}回のクラスを連続で休んでも、{target}%を下回りません。',
		safeDescOnLine: 'ぎりぎりのラインです（{pct}%）。次のクラスを休むと{target}%を下回ってしまいます。',
		target100Headline: '目標100%は達成不可能',
		target100Desc: '一度でもクラスを休むと、100%には戻せません。',
		attendNextPrefix: '次に出席すべき: {n}回',
		attendNextDesc: '{n}回連続でクラスに出席すれば、{target}%まで回復できます。',
		cookedHeadline: '💀 今学期の見通し: 詰んだ',
		cookedDesc: '残り{remaining}回すべてに出席しても、到達できる最大出席率は{maxPct}%です。',
		semBudgetHeadline: '学期のサボり予算: {n}回',
		semBudgetDesc: '残り{remaining}回のクラスのうち、{needed}回出席すれば{target}%以上で学期を終えられます。',
		mustAttendHeadline: '出席必須: {needed} / {remaining}回',
		mustAttendDesc: '{target}%に到達するには、残り{remaining}回のうち少なくとも{needed}回出席する必要があります。',
		vibeCookedStatus: '詰んだ 💀',
		vibeCookedMessageHtml:
			'<strong>もう詰んだわ、これ。</strong>残り全部のクラスに出席しても、数学的にこの出席率はもう救えない（最大: {maxPct}%）。ご愁傷様。💀',
		vibeSafeStatus: '安全でまったり 🚀',
		vibeSafeWithBunksHtml:
			'サボっても余裕！外に出て日光浴でもして、チャイでも飲んで自由時間を楽しもう。<strong>あと{n}回サボれるよ。</strong> 🚀',
		vibeSafeOnEdgeHtml:
			'今は<strong>{pct}%</strong>で安全圏だけど、ギリギリだよ！今日サボったら{target}%を割っちゃうから注意。⚠️',
		vibeBorderlineStatus: 'ボーダーライン ⚠️',
		vibeBorderlineMessageHtml:
			'薄氷の上を歩いてるようなもんだよ、これ。<strong>そろそろ目を覚まして教室に向かう時間だ！</strong>次の<strong>{n}回のクラス</strong>に出席すれば立て直せる。☕',
		vibeShortageStatus: '出席不足 🚨',
		vibeShortageMessageHtml:
			'そろそろ目を覚まして教室に向かおう。<strong>今から本気を出せばまだ間に合う！</strong>次の<strong>{n}回のクラス</strong>に連続で出席しよう。📚',
		copySummaryTitle: '📊 出席率チェック結果',
		copyStatusLabel: 'ステータス',
		copyAttendanceLabel: '出席率',
		copyTargetLabel: '目標',
		copyNoteLabel: 'メモ',
		copySemesterLabel: '学期',
		classSingular: 'クラス',
		classPlural: 'クラス',
		bunkSingular: '回',
		bunkPlural: '回',
		semTotalErrorTooLow: '学期の総クラス数は、すでに実施された{held}回を下回らないようにしてください。',
		semTotalErrorNonPositive: '正の数を入力してください。',
		semTotalErrorTooLarge: '{max}以下の数を入力してください。',
		semesterLineBudget: '残り{remaining}回のうち{n}回はサボれる',
		semesterLineMustAttend: '残り{remaining}回のうち{needed}回は出席必須',
		semesterLineCooked: '残り全部出席しても最大{maxPct}%',
		safeToBunkCappedPrefix: 'サボっても安全: {n}回（今学期残り{n}回のみ）',
		semCompleteHeadline: '🏁 学期終了: {pct}%',
		semCompleteMetDesc: '出席率{pct}%で学期を終え、目標の{target}%を達成しました。🎉',
		semCompleteMissedDesc: '出席率{pct}%で学期を終え、目標の{target}%には届きませんでした。',
		semesterLineCompleteMet: '学期終了、出席率{pct}% — 目標達成 🎉',
		semesterLineCompleteMissed: '学期終了、出席率{pct}% — 目標未達成',
		customTargetError: '1から100の間の値を入力してください。',
		vibeCompleteStatus: '学期終了 🏁',
		remainVerbSingular: '残る',
		remainVerbPlural: '残る',
		copyFooter: 'attendance75calculator.com で計算',
		copyFailed: 'クリップボードへのコピーに失敗しました。',
	},
	article: {
		overview: {
			h2: '出席率計算機とは？なぜ必要なのか',
			p1Html:
				'<strong>出席率計算機</strong>は、学生が講義の出席状況を正確な数値で追跡・計算・管理するために設計された、学業に欠かせないツールです。世界中の大学やカレッジでは、最低出席率——多くの場合<strong>出席率75%</strong>——を維持することが、学期末試験を受験するための必須条件となっています。',
			p2Html:
				'安全にサボれる講義の回数を計算したい、出席不足を解消するために連続して出席すべきクラス数を知りたい、あるいは学期末時点での出席率を予測したい——どんな目的であれ、この<strong>出席率75%計算機</strong>なら面倒な当て推量は不要です。複雑な暗算やわかりにくいスプレッドシートに頼る代わりに、私たちの<strong>出席率計算アプリ</strong>なら、出席したクラス数とこれまでに実施されたクラス総数という2つの数字だけで、瞬時にリアルタイムの結果がわかります。',
		},
		why75: {
			h2: 'なぜ大学では出席率75%が必須なのか？',
			p1: '高等教育の規制機関（UGC、AICTE、Bar Council of India、Medical Council、そして世界各国の大学理事会など）は、厳格な出席率75%ルールを定めています。大学がこのルールを導入するのは、継続的な授業への参加、実験・実習への出席、そして学業規律を確保するためです。',
			p2: '必要な基準を下回ると、深刻な学業上の影響が生じます。',
			list: [
				'受験資格の剥奪：出席率が75%を下回る学生は、多くの場合、学期末試験や最終試験の受験資格を失います。',
				'出席免除の罰金・ペナルティ：一部の大学では診断書があれば出席率65%〜75%の間で出席免除（condonation）が認められますが、多額の事務手数料が発生することが多いです。',
				'内部評価点の減点：多くの大学では、出席率に比例して5〜10点の内部評価点を配分しています。',
				'留年・学期の再履修：出席率が60%を大きく下回ると学期の再履修（detention）となり、その学期をまるごとやり直さなければならないこともあります。',
			],
			p3Html:
				'専用の<strong>大学出席率計算機</strong>を使えば、出席不足が深刻な事態になる前に先手を打つことができます。',
		},
		formulas: {
			h2: '出席率75%の計算方法：数式とロジック',
			introHtml:
				'私たちの<strong>出席率75計算機</strong>は、正確な数学的アルゴリズムで動作しています。ここでは、出席率、安全にサボれる上限、そして出席率回復に必要なクラス数がどのように算出されるのか、その仕組みを詳しく解説します。',
			cards: [
				{
					title: '1. 現在の出席率の計算式',
					formula: '出席率(%) = (出席したクラス数 / 実施されたクラス総数) × 100',
					exampleLabel: '例:',
					descHtml:
						'これまでに40回の講義が実施され、そのうち30回出席した場合:<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: '2. 安全にサボれる上限の計算式 (現在の出席率 ≥ 目標出席率の場合)',
					formula: '安全にサボれる回数 = ⌊(出席したクラス数 / 目標割合) - 実施されたクラス総数⌋',
					exampleLabel: '例:',
					descHtml:
						'ここで<em>目標割合</em>とは、75%の場合の<code>0.75</code>を指します。床関数（切り捨て）記号<code>⌊ ⌋</code>は、出席率が75%を絶対に下回らないよう、最も近い整数に切り捨てます。<br /><strong>例:</strong> 出席数 = 36、実施総数 = 40、目標 = 75%（0.75）の場合:<br /><code>安全にサボれる回数 = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8回</code>。<br />次の8回を連続で休んでも、ちょうど75%で学期を終えられます。',
				},
				{
					title: '3. 出席率を回復するために必要な連続出席回数 (現在の出席率 < 目標出席率の場合)',
					formula:
						'出席すべきクラス数 = ⌈((目標割合 × 実施されたクラス総数) - 出席したクラス数) / (1 - 目標割合)⌉',
					exampleLabel: '例:',
					descHtml:
						'目標が75%の場合（<code>目標割合 = 0.75</code>）、分母は<code>1 - 0.75 = 0.25</code>になります。<code>4</code>を掛けることで、式は次のように簡略化できます。<br /><code>出席すべきクラス数 = ⌈3 × 実施総数 - 4 × 出席数⌉</code>。<br /><strong>例:</strong> 出席数 = 20、実施総数 = 35の場合。75%に到達するには:<br /><code>出席すべきクラス数 = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25回</code>。<br />出席率を75%に戻すには、次の25回を欠席せず連続で出席する必要があります。',
				},
			],
		},
		howTo: {
			h2: 'この出席率75%計算アプリの使い方',
			introHtml:
				'この<strong>大学向け出席率計算機</strong>の使い方はとてもシンプルで、登録やダウンロードは一切不要です。',
			steps: [
				'目標出席率を選択: クイック選択ボタン（60%、65%、70%、75%、80%、85%、90%）のいずれかをクリックするか、学部が定める任意のカスタム割合を入力します。',
				'出席したクラス数を入力: これまでに実際に出席した講義や実習の合計時間数を入力します。',
				'実施されたクラス総数を入力: これまでに教員が実施した授業の累計数を入力します。',
				'（任意）学期の総クラス数を入力: 学期全体で予定されている授業数（例: 90回や120回）がわかっている場合は入力すると、「学期の予測」カードが表示されます。',
				'結果を即座に確認: 入力するたびに、出席率、安全にサボれる回数、回復目標、そしてリアルタイムのステータスが即座に更新されます。',
			],
		},
		features: {
			h2: '大学出席率計算機の主な特徴',
			items: [
				{
					icon: '⚡',
					title: '瞬時のリアルタイム計算',
					desc: '待ち時間も「送信」ボタンも不要。数字を入力・変更するたびに、すべての指標が即座に更新されます。',
				},
				{
					icon: '🎯',
					title: '学期末予測',
					desc: '残りの学期全体でサボれる余裕を計画できます。目標出席率が数学的に達成可能かどうか、あるいは「詰んでいる」のかがわかります。',
				},
				{
					icon: '🔒',
					title: '100%クライアントサイドのプライバシー保護',
					desc: 'すべての計算はブラウザ内で直接行われます。出席データ、ログイン情報、学生記録が外部サーバーに送信されることは一切ありません。',
				},
				{
					icon: '🌙',
					title: '標準搭載のダークモード',
					desc: '鮮明なライトモードと深みのあるOLEDダークモードをシームレスに切り替え可能。深夜の勉強にも最適です。',
				},
			],
		},
		faq: {
			h2: 'よくある質問（FAQ）',
			items: [
				{
					question: '月次出席率計算機とは？使い方は？',
					answerHtml:
						'<strong>月次出席率計算機</strong>を使うと、学生や社会人が特定の暦月における出席率を計算できます。その月に出席した日数またはクラス数を入力し、その月に予定されていた稼働日数または講義数で割ってから100を掛けるだけです。',
				},
				{
					question: '出席率計算機の計算式とは？',
					answerHtml:
						'基本的な<strong>出席率の計算式</strong>は次の通りです: <code>出席率(%) = (出席したクラス数 / 実施されたクラス総数) × 100</code>。目標割合（P%）を上回った状態で安全にサボれる回数を求めるには: <code>安全にサボれる回数 = ⌊(出席数 / (P/100)) - 実施総数⌋</code>。目標割合（P%）まで回復するために必要なクラス数を求めるには: <code>出席すべきクラス数 = ⌈((P/100 × 実施総数) - 出席数) / (1 - P/100)⌉</code>。',
				},
				{
					question: '出席率計算アプリとは？オフラインでも使えるのか？',
					answerHtml:
						'<strong>出席率計算アプリ</strong>は、ブラウザ上で直接動作する無料のWebベースツールで、モバイルにも対応しています。アプリストアからのダウンロード、ログイン、サーバーへのデータ保存を一切必要とせず、出席率、安全にサボれる回数、回復に必要なクラス数を瞬時に計算します。',
				},
				{
					question: '学生向け出席率計算機とは？',
					answerHtml:
						'<strong>学生向け出席率計算機</strong>は、学校や大学の学生が講義や実習の出席状況を管理するために特化した教育用計算ツールです。出席率が75%や80%といった必須基準に近づいたり下回ったりした際に警告を出すことで、受験資格の剥奪を未然に防ぎます。',
				},
				{
					question: '出席率計算機で目標を100%に設定できるか？',
					answerHtml:
						'はい、カスタム目標入力を使えば出席率の目標を<strong>100%</strong>に設定できます。ただし、出席率100%を達成するには初日から実施されたすべてのクラスに出席する必要があります。一度でもクラスを休んでしまうと、最終的な出席率100.0%を達成することは数学的に不可能になります。',
				},
				{
					question: '出席率計算機の目標80%はどう機能するのか？',
					answerHtml:
						'<strong>出席率計算機80</strong>機能では、目標基準を80%に設定します（有名大学や専門学位課程でよく見られる基準です）。80%を維持するには、実施されたクラス5回のうち少なくとも4回に出席する必要があります（出席数 ≥ 0.8 × 総クラス数）。',
				},
				{
					question: '出席率計算機の目標75%はどう機能するのか？',
					answerHtml:
						'<strong>出席率計算機75</strong>は、UGCや大学が定める標準的な出席率75%ルールを満たすためのサポートをします。現在の出席率が75%以上の場合は何回サボれるかを計算し、75%未満（&lt; 75%）の場合は75%に戻すために連続して出席すべき正確なクラス数を算出します。',
				},
				{
					question: '出席率75%計算機では、何日休めるのか？',
					answerHtml:
						'100回のクラスがある標準的な学期では、少なくとも75回出席する必要があり、最大で25回まで休むことができます。現在40回のクラスのうち30回出席している場合、すぐに次のクラスを休むと75%を下回ってしまうため休めませんが、学期の残り60回のクラスのうち最大15回まで休むことができます。',
				},
				{
					question: '出席率パーセント計算機の使い方は？',
					answerHtml:
						'<strong>出席率パーセント計算機</strong>の使い方: 1）目標出席率を選択する（例: 75%や80%）、2）出席したクラス数や日数を入力する、3）これまでに実施されたクラス数や日数を入力する。これだけで、現在の出席率、ステータスバッジ、安全にサボれる回数がすぐに表示されます。',
				},
				{
					question: '出席率はどのように計算されるのか？',
					answerHtml:
						'出席率は、出席した授業数の合計を実施された授業数の合計で割り、その割合に100を掛けることで計算されます。例えば、60回の講義のうち45回出席した場合は<code>(45 / 60) × 100 = 75%</code>になります。',
				},
				{
					question: '電卓で出席率を計算するには？',
					answerHtml:
						'普通の電卓を使う場合: 出席したクラス数を入力し、割り算（÷）を押し、実施されたクラス総数を入力し、掛け算（×）を押し、100を入力して、イコール（=）を押します。もっと簡単にしたいなら、私たちの無料オンライン<strong>出席率計算アプリ</strong>を使えば、サボれる回数の提案付きで瞬時に計算結果が得られます。',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • 無料オンライン大学出席率トラッカー • クライアントサイド計算＆100%プライバシー保護',
	},
};

export default ja;
