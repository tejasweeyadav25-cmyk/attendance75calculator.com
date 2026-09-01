import type { Translations } from '../types';

const pt: Translations = {
	meta: {
		title: 'Calculadora de Frequência - App Gratuito de Calculadora de Frequência 75% para Faculdade',
		description:
			'Calculadora de frequência online gratuita para verificar o critério dos 75%. Calcule quantas aulas pode faltar com segurança, quantas precisa frequentar para atingir 75% de frequência e projeções do semestre instantaneamente.',
		keywords:
			'calculadora de frequência, calculadora de frequência 75, calculadora de presença 75%, app calculadora de frequência, calculadora de frequência 75 por cento, calculadora de frequência universitária, calculadora de frequência faculdade',
		ogLocale: 'pt_PT',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		themeDark: 'Escuro',
		themeLight: 'Claro',
		themeToggleAria: 'Alternar Modo Escuro/Claro',
		aboutUs: 'Sobre Nós',
		privacyPolicy: 'Política de Privacidade',
		termsAndConditions: 'Termos e Condições',
		contactUs: 'Contacte-nos',
		languageLabel: 'Idioma',
	},
	header: {
		title: 'Calculadora de Frequência e Planeador de Faltas 75%',
		subtitleHtml:
			'A <strong>calculadora de frequência 75</strong> inteligente para estudantes universitários. Descubra a sua porcentagem exata de frequência, calcule faltas seguras ou planeie a sua recuperação.',
	},
	calculator: {
		targetLabel: 'Meta de Frequência Exigida',
		targetPrefix: 'Meta:',
		customPlaceholder: 'Personalizado',
		attendedLabel: 'Aulas Frequentadas',
		attendedSub: '(Presenças)',
		attendedPlaceholder: 'ex.: 30',
		totalLabel: 'Total de Aulas Realizadas',
		totalSub: '(Até Agora)',
		totalPlaceholder: 'ex.: 40',
		semTotalLabel: 'Total de Aulas no Semestre',
		semTotalSub: '(Opcional)',
		semTotalPlaceholder: 'ex.: 100 aulas previstas',
	},
	results: {
		currentAttendanceEyebrow: 'FREQUÊNCIA ATUAL',
		heldSuffix: 'realizadas',
		rightNowEyebrow: 'STATUS NESTE MOMENTO',
		waitingHeadline: 'Aguardando dados...',
		waitingDesc: 'Digite os números acima para ver a sua margem de faltas.',
		semesterForecastEyebrow: 'PREVISÃO DO SEMESTRE',
		copyButtonText: 'Copiar Resumo de Frequência',
		toastText: 'Status copiado para a área de transferência!',
	},
	js: {
		noDataStatus: 'Sem Dados',
		noDataVibe: 'Digite as aulas frequentadas e o total de aulas para calcular o seu status.',
		waitingHeadline: 'Aguardando dados...',
		waitingDesc: 'Digite os números acima para ver a sua margem de faltas.',
		invalidStatus: 'Entrada Inválida',
		invalidVibe: 'As aulas frequentadas não podem ser maiores do que o total de aulas realizadas! Verifique os seus números.',
		invalidHeadline: 'Erro de Entrada',
		invalidDesc: 'Corrija o número de aulas frequentadas.',
		safeToBunkPrefix: 'Pode Faltar: {n} aulas',
		bunkBufferZero: 'Margem de Faltas: 0 aulas',
		safeDescWithBunks: 'Você pode faltar às próximas {n} aulas seguidas sem cair abaixo de {target}%.',
		safeDescOnLine: 'Você está no limite ({pct}%). Faltar à próxima aula fará você cair abaixo de {target}%.',
		target100Headline: 'Meta de 100% Impossível',
		target100Desc: 'Depois de faltar a uma aula, não é possível voltar a 100%.',
		attendNextPrefix: 'Frequentar: {n} aulas',
		attendNextDesc: 'Frequente {n} aulas consecutivas sem faltar para voltar a {target}%.',
		cookedHeadline: '💀 Previsão do Período: Ferrado',
		cookedDesc: 'Mesmo com 100% de frequência em todas as {remaining} aulas restantes, o máximo possível é apenas {maxPct}%.',
		semBudgetHeadline: 'Margem de Faltas do Semestre: {n} aulas',
		semBudgetDesc: 'Das {remaining} aulas restantes, você só precisa frequentar {needed} para terminar acima de {target}%.',
		mustAttendHeadline: 'Precisa Frequentar: {needed} / {remaining} aulas',
		mustAttendDesc: 'Você precisa frequentar pelo menos {needed} das {remaining} aulas restantes para atingir {target}%.',
		vibeCookedStatus: 'Ferrado 💀',
		vibeCookedMessageHtml:
			"<strong>Você já era, mano.</strong> É matematicamente impossível salvar essa frequência mesmo que você não falte a nenhuma das aulas restantes (Máx.: {maxPct}%). Já vai. 💀",
		vibeSafeStatus: 'Tranquilo e de Boa 🚀',
		vibeSafeWithBunksHtml:
			"Você pode faltar sem medo! Vá tomar um ar, tomar um café e aproveitar o seu tempo livre. <strong>{n} faltas seguras disponíveis.</strong> 🚀",
		vibeSafeOnEdgeHtml:
			"Você está seguro em <strong>{pct}%</strong>, mas por pouco! Não falte hoje ou vai cair abaixo de {target}%. ⚠️",
		vibeBorderlineStatus: 'No Limite ⚠️',
		vibeBorderlineMessageHtml:
			'Pisando em ovos, hein. <strong>Hora de acordar e ir para a aula!</strong> Frequente as próximas <strong>{n} aulas</strong> para resolver isso. ☕',
		vibeShortageStatus: 'Déficit 🚨',
		vibeShortageMessageHtml:
			'Hora de acordar e ir para a aula. <strong>Você ainda pode consertar isso se correr atrás agora!</strong> Frequente as próximas <strong>{n} aulas</strong> seguidas. 📚',
		copySummaryTitle: '📊 Resumo de Frequência',
		copyStatusLabel: 'Status',
		copyAttendanceLabel: 'Frequência',
		copyTargetLabel: 'Meta',
		copyNoteLabel: 'Nota',
		copyFooter: 'Calculado em attendance75calculator.com',
		copyFailed: 'Falha ao copiar para a área de transferência.',
	},
	article: {
		overview: {
			h2: 'O que é uma Calculadora de Frequência e Por que Você Precisa Dela?',
			p1Html:
				'Uma <strong>calculadora de frequência</strong> é uma ferramenta acadêmica essencial, criada para ajudar os estudantes a acompanhar, calcular e gerenciar a frequência às aulas com precisão matemática. Em universidades e faculdades do mundo todo, manter uma porcentagem mínima de frequência — geralmente <strong>75% de frequência</strong> — é um requisito obrigatório para poder fazer as provas finais do semestre.',
			p2Html:
				'Seja para calcular quantas aulas você pode faltar com segurança, descobrir quantas aulas seguidas precisa frequentar para superar um déficit de frequência, ou prever a sua situação no final do semestre, esta <strong>calculadora de frequência 75</strong> elimina qualquer dúvida. Em vez de fazer contas complicadas de cabeça ou depender de planilhas confusas, o nosso <strong>app de calculadora de frequência</strong> fornece resultados instantâneos e em tempo real com apenas dois números: as aulas que você já frequentou e o total de aulas realizadas até agora.',
		},
		why75: {
			h2: 'Por que a Frequência de 75% é Obrigatória na Faculdade?',
			p1: 'Órgãos reguladores do ensino superior (como o UGC, AICTE, Bar Council of India, Medical Council e conselhos universitários ao redor do mundo) exigem uma regra rígida de 75% de frequência. As faculdades aplicam essa regra para garantir engajamento constante em sala de aula, participação prática em laboratório e disciplina acadêmica.',
			p2: 'Ficar abaixo do limite exigido leva a sérias consequências acadêmicas:',
			list: [
				'Impedimento de Realizar Exames: Estudantes com déficit de frequência abaixo de 75% costumam ser desqualificados para fazer as provas finais ou de fim de semestre.',
				'Multas e Penalidades por Tolerância: Embora algumas faculdades permitam tolerância para frequência entre 65% e 75% mediante atestado médico, isso costuma envolver multas administrativas pesadas.',
				'Perda de Nota na Avaliação Interna: Muitas universidades atribuem de 5 a 10 pontos da avaliação interna diretamente proporcionais à porcentagem de frequência.',
				'Reprovação do Ano ou Retenção do Semestre: Déficits graves abaixo de 60% podem resultar em retenção do semestre, obrigando o estudante a repetir todo o período letivo.',
			],
			p3Html:
				'Usar uma <strong>calculadora de frequência universitária</strong> dedicada permite que você se antecipe a déficits de frequência antes que se tornem emergências críticas.',
		},
		formulas: {
			h2: 'Como Calcular 75% de Frequência: Fórmulas e Lógica',
			introHtml:
				'A nossa ferramenta <strong>calculadora de frequência 75</strong> funciona com algoritmos matemáticos precisos. Aqui está o detalhamento exato de como a sua porcentagem de frequência, o limite seguro de faltas e os requisitos de recuperação são calculados:',
			cards: [
				{
					title: '1. Fórmula da Porcentagem de Frequência Atual',
					formula: 'Frequência (%) = (Aulas Frequentadas / Total de Aulas Realizadas) × 100',
					exampleLabel: 'Exemplo:',
					descHtml:
						'Se 40 aulas foram realizadas até agora e você frequentou 30 delas:<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: '2. Fórmula do Limite Seguro de Faltas (Quando % Atual ≥ % da Meta)',
					formula: 'Faltas Seguras = ⌊(Aulas Frequentadas / Fração da Meta) - Total de Aulas Realizadas⌋',
					exampleLabel: 'Exemplo:',
					descHtml:
						'Onde a <em>Fração da Meta</em> é <code>0.75</code> para 75%. O símbolo de piso <code>⌊ ⌋</code> arredonda para baixo até o número inteiro mais próximo, garantindo que a sua porcentagem nunca fique abaixo de 75%.<br /><strong>Exemplo:</strong> Frequentadas = 36, Total Realizadas = 40, Meta = 75% (0.75):<br /><code>Faltas Seguras = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8 aulas</code>.<br />Você pode faltar com segurança às próximas 8 aulas seguidas e ainda assim terminar exatamente em 75%.',
				},
				{
					title: '3. Aulas Consecutivas Necessárias para Recuperar (Quando % Atual < % da Meta)',
					formula:
						'Aulas a Frequentar = ⌈((Fração da Meta × Total de Aulas Realizadas) - Aulas Frequentadas) / (1 - Fração da Meta)⌉',
					exampleLabel: 'Exemplo:',
					descHtml:
						'Para uma meta de 75% (onde <code>Fração da Meta = 0.75</code>), o denominador é <code>1 - 0.75 = 0.25</code>. Multiplicando por <code>4</code>, a fórmula se simplifica para:<br /><code>Aulas a Frequentar = ⌈3 × Total Realizadas - 4 × Frequentadas⌉</code>.<br /><strong>Exemplo:</strong> Frequentadas = 20, Total Realizadas = 35. Para atingir 75%:<br /><code>Aulas a Frequentar = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25 aulas</code>.<br />Você precisa frequentar as próximas 25 aulas seguidas sem faltar para recuperar 75% de frequência.',
				},
			],
		},
		howTo: {
			h2: 'Como Usar Este App de Calculadora de Frequência 75%',
			introHtml:
				'Usar a nossa ferramenta <strong>calculadora de frequência universitária</strong> é simples e não exige nenhum cadastro ou download:',
			steps: [
				'Selecione a Sua Meta de Frequência: Clique em uma das opções rápidas (60%, 65%, 70%, 75%, 80%, 85%, 90%) ou digite qualquer porcentagem personalizada exigida pelo seu departamento.',
				'Insira as Aulas Frequentadas: Digite o número total de aulas ou horas de laboratório que você compareceu fisicamente até agora.',
				'Insira o Total de Aulas Realizadas: Digite o número acumulado de aulas que os seus professores já ministraram até agora.',
				'(Opcional) Insira o Total de Aulas do Semestre: Se você souber o total de aulas planejadas para todo o semestre (por exemplo, 90 ou 120 aulas), insira esse valor para desbloquear o cartão de Previsão do Semestre.',
				'Veja os Resultados Instantâneos: Acompanhe a sua porcentagem, cota de faltas seguras, meta de recuperação e status dinâmico sendo atualizados instantaneamente enquanto você digita.',
			],
		},
		features: {
			h2: 'Principais Recursos da Nossa Calculadora de Frequência Universitária',
			items: [
				{
					icon: '⚡',
					title: 'Cálculos Instantâneos em Tempo Real',
					desc: 'Sem espera e sem botões de "Enviar". A calculadora atualiza todas as métricas assim que você digita ou altera um número.',
				},
				{
					icon: '🎯',
					title: 'Previsão de Fim de Semestre',
					desc: 'Planeje a sua margem de faltas para o restante do semestre. Descubra se a sua meta é matematicamente alcançável ou se você está "ferrado".',
				},
				{
					icon: '🔒',
					title: 'Privacidade 100% no Seu Dispositivo',
					desc: 'Todos os cálculos acontecem diretamente no seu navegador. Nenhum dado de frequência, credencial de login ou registro de estudante é enviado a servidores externos.',
				},
				{
					icon: '🌙',
					title: 'Modo Escuro Integrado',
					desc: 'Alterne facilmente entre o modo claro nítido e o modo escuro profundo (ideal para telas OLED) nas suas sessões de estudo até tarde da noite.',
				},
			],
		},
		faq: {
			h2: 'Perguntas Frequentes (FAQ)',
			items: [
				{
					question: 'O que é uma Calculadora de Frequência Mensal e como usá-la?',
					answerHtml:
						'Uma <strong>calculadora de frequência mensal</strong> permite que estudantes e funcionários calculem a porcentagem de frequência em um mês específico do calendário. Basta inserir o número de dias ou aulas frequentadas naquele mês e dividir pelo total de dias úteis ou aulas programadas realizadas no mês, depois multiplicar por 100.',
				},
				{
					question: 'Qual é a Fórmula da Calculadora de Frequência?',
					answerHtml:
						'A <strong>fórmula básica de frequência</strong> é: <code>Frequência (%) = (Aulas Frequentadas / Total de Aulas Realizadas) × 100</code>. Para encontrar as faltas seguras acima de uma porcentagem meta (P%): <code>Faltas Seguras = ⌊(Frequentadas / (P/100)) - Total Realizadas⌋</code>. Para encontrar as aulas necessárias para recuperar até a meta (P%): <code>Aulas a Frequentar = ⌈((P/100 × Total Realizadas) - Frequentadas) / (1 - P/100)⌉</code>.',
				},
				{
					question: 'O que é o Aplicativo de Calculadora de Frequência e ele funciona offline?',
					answerHtml:
						'O <strong>Aplicativo de Calculadora de Frequência</strong> é uma ferramenta gratuita, baseada na web e adaptada para dispositivos móveis, que funciona diretamente no seu navegador. Ele calcula a porcentagem de frequência, as faltas seguras e as aulas de recuperação instantaneamente, sem exigir downloads em lojas de aplicativos, logins ou armazenamento em servidor.',
				},
				{
					question: 'O que é uma Calculadora de Frequência para Estudantes?',
					answerHtml:
						'Uma <strong>calculadora de frequência para estudantes</strong> é uma calculadora educacional especializada, criada para que estudantes do ensino médio e da faculdade acompanhem a frequência em aulas e laboratórios. Ela evita o impedimento de fazer provas ao alertar os estudantes quando a frequência se aproxima ou fica abaixo de limites obrigatórios como 75% ou 80%.',
				},
				{
					question: 'É Possível Usar a Calculadora de Frequência para 100 Por Cento?',
					answerHtml:
						'Sim, você pode definir a meta de frequência para <strong>100%</strong> usando o nosso campo de meta personalizada. Note que atingir 100% de frequência exige comparecer a absolutamente todas as aulas realizadas desde o primeiro dia. Se você faltar a apenas uma aula, alcançar 100,0% de frequência final se torna matematicamente impossível.',
				},
				{
					question: 'Como Funciona a Meta de 80 Por Cento na Calculadora de Frequência?',
					answerHtml:
						'O recurso <strong>Calculadora de Frequência 80</strong> define o seu limite de meta em 80% (comum em universidades de elite e cursos de graduação profissionais). Para manter 80%, você precisa frequentar pelo menos 4 de cada 5 aulas realizadas (Frequentadas ≥ 0,8 × Total de Aulas).',
				},
				{
					question: 'Como Funciona a Meta de 75 Por Cento na Calculadora de Frequência?',
					answerHtml:
						'A <strong>Calculadora de Frequência 75</strong> ajuda os estudantes a cumprir a regra padrão de 75% de frequência exigida pelo UGC e pelas faculdades. Se a sua frequência atual for ≥ 75%, ela calcula quantas aulas você pode faltar. Se for &lt; 75%, ela calcula o número exato de aulas consecutivas que você precisa frequentar para voltar a 75%.',
				},
				{
					question: 'Em uma Calculadora de Frequência de 75 Por Cento, Quantos Dias Você Pode Faltar?',
					answerHtml:
						'Em um semestre padrão com 100 aulas, você precisa frequentar pelo menos 75 aulas e pode faltar no máximo 25 aulas. Se você já frequentou 30 de 40 aulas realizadas até agora, não pode faltar a nenhuma aula imediatamente sem cair abaixo de 75%, mas das 60 aulas restantes do semestre, você pode faltar a até 15 aulas.',
				},
				{
					question: 'Como Usar uma Calculadora de Porcentagem de Frequência?',
					answerHtml:
						'Para usar uma <strong>calculadora de porcentagem de frequência</strong>: 1) Selecione a sua meta de frequência (por exemplo, 75% ou 80%), 2) Insira o número de aulas ou dias que você frequentou, 3) Insira o total de aulas ou dias realizados até agora. A calculadora mostra imediatamente a sua porcentagem atual, o selo de status e a cota de faltas seguras.',
				},
				{
					question: 'Como a Porcentagem de Frequência é Calculada?',
					answerHtml:
						'A porcentagem de frequência é calculada dividindo o número total de aulas presentes pelo número total de aulas ministradas, e multiplicando essa fração por 100. Por exemplo, frequentar 45 de 60 aulas resulta em <code>(45 / 60) × 100 = 75%</code>.',
				},
				{
					question: 'Como Calcular a Porcentagem de Frequência com uma Calculadora?',
					answerHtml:
						'Em qualquer calculadora: digite as suas aulas frequentadas, pressione dividir (÷), insira o total de aulas realizadas, pressione multiplicar (×), digite 100 e pressione igual (=). Ou simplesmente use o nosso <strong>aplicativo de calculadora de frequência</strong> online gratuito para obter cálculos instantâneos com sugestões de faltas automaticamente.',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • Rastreador de Frequência Universitária Online Gratuito • Cálculos no seu dispositivo e 100% privado',
	},
};

export default pt;
