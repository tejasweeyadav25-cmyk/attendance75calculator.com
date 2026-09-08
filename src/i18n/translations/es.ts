import type { Translations } from '../types';

const es: Translations = {
	meta: {
		title: 'Calculadora de Asistencia 75% - Gratis',
		description:
			'Calculadora de asistencia gratuita para el 75%. Calcula faltas permitidas, clases necesarias y proyecciones del semestre al instante.',
		keywords:
			'calculadora de asistencia, calculadora de asistencia 75, calculadora de asistencia del 75, calculadora de asistencia app, calculadora de asistencia del 75 por ciento, calculadora de asistencia universitaria, calculadora de asistencia para la universidad',
		ogLocale: 'es_ES',
	},
	nav: {
		badge: 'Attendance 75 Calculator',
		trackerLink: 'Rastreador',
		themeDark: 'Oscuro',
		themeLight: 'Claro',
		themeToggleAria: 'Cambiar entre modo oscuro y claro',
		aboutUs: 'Sobre Nosotros',
		privacyPolicy: 'Política de Privacidad',
		termsAndConditions: 'Términos y Condiciones',
		contactUs: 'Contáctanos',
		languageLabel: 'Idioma',
	},
	header: {
		title: 'Calculadora de Asistencia y Planificador de Faltas del 75%',
		subtitleHtml:
			'La inteligente <strong>calculadora de asistencia del 75</strong> para estudiantes universitarios. Conoce tu porcentaje exacto de asistencia, calcula cuántas clases puedes faltar sin riesgo o planifica tu recuperación.',
	},
	calculator: {
		targetLabel: 'Porcentaje de Asistencia Requerido',
		targetPrefix: 'Objetivo:',
		customPlaceholder: 'Personalizado',
		attendedLabel: 'Clases Asistidas',
		attendedSub: '(Presente)',
		attendedPlaceholder: 'ej. 30',
		totalLabel: 'Total de Clases Realizadas',
		totalSub: '(Hasta la fecha)',
		totalPlaceholder: 'ej. 40',
		semTotalLabel: 'Total de Clases del Semestre',
		semTotalSub: '(Opcional)',
		semTotalPlaceholder: 'ej. 100 clases previstas',
	},
	results: {
		currentAttendanceEyebrow: 'ASISTENCIA ACTUAL',
		heldSuffix: 'realizadas',
		rightNowEyebrow: 'ESTADO ACTUAL',
		waitingHeadline: 'Esperando datos...',
		waitingDesc: 'Ingresa los números de arriba para ver cuántas clases puedes faltar.',
		semesterForecastEyebrow: 'PRONÓSTICO DEL SEMESTRE',
		copyButtonText: 'Copiar Resumen de Asistencia',
		toastText: '¡Estado copiado al portapapeles!',
		shareButtonText: 'Compartir Resultado',
		shareCopiedText: '¡Imagen descargada y texto copiado!',
		shareStatAttendedLabel: 'ASISTENCIA',
		shareStatTargetLabel: 'OBJETIVO',
		trackerUpsellHtml: '¿Sigues más de una materia? → <strong>Guarda todas tus materias</strong>',
	},
	js: {
		noDataStatus: 'Sin Datos',
		noDataVibe: 'Ingresa tus clases asistidas y el total de clases para calcular tu estado.',
		waitingHeadline: 'Esperando datos...',
		waitingDesc: 'Ingresa los números de arriba para ver cuántas clases puedes faltar.',
		invalidStatus: 'Datos Inválidos',
		invalidVibe: '¡Las clases asistidas no pueden ser más que el total de clases realizadas! Revisa tus números.',
		invalidHeadline: 'Error de Entrada',
		invalidDesc: 'Por favor corrige tu número de clases asistidas.',
		safeToBunkPrefix: 'Puedes Faltar: {n} {classWord}',
		bunkBufferZero: 'Margen para Faltar: 0 clases',
		safeDescWithBunks: 'Puedes faltar a las próximas {n} clases seguidas sin bajar del {target}%.',
		safeDescOnLine: 'Estás justo en el límite ({pct}%). Si faltas a la próxima clase, bajarás del {target}%.',
		target100Headline: 'Objetivo del 100% Imposible',
		target100Desc: 'Una vez que faltas a una clase, ya no puedes recuperar el 100%.',
		attendNextPrefix: 'Debes Asistir a: {n} {classWord}',
		attendNextDesc: 'Asiste a {n} clases consecutivas sin faltar para volver a subir al {target}%.',
		cookedHeadline: '💀 Pronóstico del Semestre: Estás Frito',
		cookedDesc: 'Incluso con el 100% de asistencia en las {remaining} clases restantes, el máximo que puedes alcanzar es {maxPct}%.',
		semBudgetHeadline: 'Margen de Faltas del Semestre: {n} {classWord}',
		semBudgetDesc: 'De las {remaining} clases restantes, solo necesitas asistir a {needed} para terminar por encima del {target}%.',
		mustAttendHeadline: 'Debes Asistir a: {needed} / {remaining} clases',
		mustAttendDesc: 'Debes asistir al menos a {needed} de las {remaining} clases restantes para llegar al {target}%.',
		vibeCookedStatus: 'Frito 💀',
		vibeCookedMessageHtml:
			"<strong>Estás frito, hermano.</strong> Es matemáticamente imposible salvar esta asistencia aunque asistas a todas las clases restantes (Máx: {maxPct}%). Descansa en paz. 💀",
		vibeSafeStatus: 'A Salvo y Tranquilo 🚀',
		vibeSafeWithBunksHtml:
			"¡Puedes faltar sin problema! Sal a tomar aire, tómate un café y disfruta tu tiempo libre. <strong>{n} {bunkWord} sin riesgo.</strong> 🚀",
		vibeSafeOnEdgeHtml:
			"Estás bien, en <strong>{pct}%</strong>, ¡pero al límite! No faltes hoy o bajarás del {target}%. ⚠️",
		vibeBorderlineStatus: 'Al Límite ⚠️',
		vibeBorderlineMessageHtml:
			'Estás caminando sobre hielo fino, hermano. <strong>¡Hora de despertar e ir a clase!</strong> Asiste a las próximas <strong>{n} clases</strong> para arreglar esto. ☕',
		vibeShortageStatus: 'En Déficit 🚨',
		vibeShortageMessageHtml:
			'Hora de despertar e ir a clase. <strong>¡Todavía puedes arreglar esto si te esfuerzas ahora!</strong> Asiste a las próximas <strong>{n} clases</strong> consecutivas. 📚',
		copySummaryTitle: '📊 Resumen de Asistencia',
		copyStatusLabel: 'Estado',
		copyAttendanceLabel: 'Asistencia',
		copyTargetLabel: 'Objetivo',
		copyNoteLabel: 'Nota',
		copySemesterLabel: 'Semestre',
		classSingular: 'clase',
		classPlural: 'clases',
		bunkSingular: 'falta',
		bunkPlural: 'faltas',
		semTotalErrorTooLow: 'El total del semestre no puede ser menor que las clases ya realizadas ({held}).',
		semTotalErrorNonPositive: 'Ingresa un número positivo.',
		semTotalErrorTooLarge: 'Ingresa un número no mayor que {max}.',
		semesterLineBudget: '{remainVerb} {n} {bunkWord} de {remaining} {classWordRemaining}',
		semesterLineMustAttend: 'debes asistir a {needed} de {remaining} {classWordRemaining}',
		semesterLineCooked: 'frito: máximo {maxPct}% aunque asistas a todo',
		safeToBunkCappedPrefix: 'Puedes Faltar: {n} {classWord} (solo {cappedVerb} {n} este semestre)',
		remainVerbSingular: 'queda',
		remainVerbPlural: 'quedan',
		semCompleteHeadline: '🏁 Semestre Completo: {pct}%',
		semCompleteMetDesc: 'Terminaste el semestre con {pct}%, alcanzando tu objetivo del {target}%. 🎉',
		semCompleteMissedDesc: 'Terminaste el semestre con {pct}%, por debajo de tu objetivo del {target}%.',
		semesterLineCompleteMet: 'semestre completo con {pct}% — objetivo cumplido 🎉',
		semesterLineCompleteMissed: 'semestre completo con {pct}% — objetivo no alcanzado',
		customTargetError: 'Ingresa un valor entre 1 y 100.',
		vibeCompleteStatus: 'Semestre Completo 🏁',
		copyFooter: 'Calculado en attendance75calculator.com',
		copyFailed: 'Error al copiar al portapapeles.',
		unrecoverable100Status: 'No Recuperable 💀',
		unrecoverable100MessageHtml:
			'El objetivo es 100% y ya faltaste a una clase — un historial perfecto no se puede recuperar este semestre. Solo bajar el objetivo lo soluciona.',
		shortNoData: 'Aún no hay clases realizadas',
		shortInvalid: 'Inválido — asistidas no puede superar a realizadas',
		shortCompleteMet: 'Terminaste en {pct}% — objetivo cumplido 🎉',
		shortCompleteMissed: 'Terminaste en {pct}% — objetivo no alcanzado',
		shortSafeEdgeZero: 'Al límite — no faltes hoy ⚠️',
		shortSafeEdgeOne: 'Justo al límite — te queda 1 falta ⚠️',
		shortSafeRoom: 'A salvo — {n} {bunkWord} sin riesgo 🚀',
		shortUnrecoverable100: 'No recuperable con objetivo del 100% 💀',
		shortCooked: 'Frito — máximo {maxPct}% posible 💀',
		shortBorderline: 'En la cuerda floja — asiste {n} {classWord} seguidas ☕',
		shortShortage: 'Hora de esforzarte — asiste {n} {classWord} seguidas 📚',
	},
	article: {
		overview: {
			h2: '¿Qué es una Calculadora de Asistencia y Por Qué la Necesitas?',
			p1Html:
				'Una <strong>calculadora de asistencia</strong> es una herramienta académica esencial diseñada para ayudar a los estudiantes a rastrear, calcular y gestionar su asistencia a clases con precisión matemática. En universidades e institutos de todo el mundo, mantener un porcentaje mínimo de asistencia —comúnmente el <strong>75 por ciento de asistencia</strong>— es un requisito obligatorio para poder presentarse a los exámenes finales de semestre.',
			p2Html:
				'Ya sea que quieras calcular cuántas clases puedes faltar sin riesgo, averiguar a cuántas clases consecutivas debes asistir para superar un déficit de asistencia, o pronosticar tu situación al final del semestre, esta <strong>calculadora de asistencia del 75</strong> elimina las conjeturas. En lugar de hacer cálculos mentales complicados o depender de hojas de cálculo confusas, nuestra <strong>aplicación de calculadora de asistencia</strong> te ofrece resultados instantáneos y en tiempo real con solo dos números: las clases a las que has asistido y el total de clases realizadas hasta ahora.',
		},
		why75: {
			h2: '¿Por Qué el 75% de Asistencia es Obligatorio en la Universidad?',
			p1: 'Los organismos reguladores de la educación superior (como la UGC, el AICTE, el Bar Council of India, el Medical Council y los consejos universitarios de todo el mundo) exigen una estricta norma de asistencia del 75%. Las universidades implementan esta regla para garantizar una participación constante en clase, práctica en laboratorio y disciplina académica.',
			p2: 'No alcanzar el umbral requerido conlleva graves consecuencias académicas:',
			list: [
				'Exclusión de los Exámenes: Los estudiantes con una asistencia por debajo del 75% suelen quedar descalificados para presentarse a los exámenes de fin de semestre o finales.',
				'Multas y Sanciones por Condonación: Aunque algunas universidades permiten la condonación para una asistencia entre el 65% y el 75% con un certificado médico, esto suele implicar fuertes multas administrativas.',
				'Pérdida de Evaluación Interna: Muchas universidades asignan de 5 a 10 puntos de evaluación interna directamente proporcionales al porcentaje de asistencia.',
				'Repetición de Curso o Detención de Semestre: Los déficits graves por debajo del 60% pueden derivar en la detención del semestre, obligando a los estudiantes a repetir todo el período académico.',
			],
			p3Html:
				'Usar una <strong>calculadora de asistencia universitaria</strong> dedicada te permite anticiparte a los déficits de asistencia antes de que se conviertan en emergencias críticas.',
		},
		formulas: {
			h2: 'Cómo Calcular el 75% de Asistencia: Fórmulas y Lógica',
			introHtml:
				'Nuestra herramienta de <strong>calculadora de asistencia 75</strong> funciona con algoritmos matemáticos precisos. Aquí tienes el desglose exacto de cómo se calculan tu porcentaje de asistencia, tu límite seguro de faltas y tus requisitos de recuperación:',
			cards: [
				{
					title: '1. Fórmula del Porcentaje de Asistencia Actual',
					formula: 'Asistencia (%) = (Clases Asistidas / Total de Clases Realizadas) × 100',
					exampleLabel: 'Ejemplo:',
					descHtml:
						'Si se han realizado 40 clases hasta la fecha y asististe a 30 de ellas:<br /><code>(30 / 40) × 100 = 75.0%</code>',
				},
				{
					title: '2. Fórmula del Límite Seguro de Faltas (Cuando el % Actual ≥ % Objetivo)',
					formula: 'Faltas Seguras = ⌊(Clases Asistidas / Fracción Objetivo) - Total de Clases Realizadas⌋',
					exampleLabel: 'Ejemplo:',
					descHtml:
						'Donde la <em>Fracción Objetivo</em> es <code>0.75</code> para el 75%. El símbolo de piso <code>⌊ ⌋</code> redondea hacia abajo al número entero más cercano para asegurar que tu porcentaje nunca baje del 75%.<br /><strong>Ejemplo:</strong> Asistidas = 36, Total Realizadas = 40, Objetivo = 75% (0.75):<br /><code>Faltas Seguras = ⌊(36 / 0.75) - 40⌋ = ⌊48 - 40⌋ = 8 clases</code>.<br />Puedes faltar sin riesgo a las próximas 8 clases consecutivas y aun así terminar exactamente en 75%.',
				},
				{
					title: '3. Clases Consecutivas Necesarias para Recuperarse (Cuando el % Actual < % Objetivo)',
					formula:
						'Clases a Asistir = ⌈((Fracción Objetivo × Total de Clases Realizadas) - Clases Asistidas) / (1 - Fracción Objetivo)⌉',
					exampleLabel: 'Ejemplo:',
					descHtml:
						'Para un objetivo del 75% (donde <code>Fracción Objetivo = 0.75</code>), el denominador es <code>1 - 0.75 = 0.25</code>. Multiplicando por <code>4</code> se simplifica la fórmula a:<br /><code>Clases a Asistir = ⌈3 × Total Realizadas - 4 × Asistidas⌉</code>.<br /><strong>Ejemplo:</strong> Asistidas = 20, Total Realizadas = 35. Para llegar al 75%:<br /><code>Clases a Asistir = ⌈3(35) - 4(20)⌉ = ⌈105 - 80⌉ = 25 clases</code>.<br />Debes asistir a las próximas 25 clases seguidas sin faltar para recuperar el 75% de asistencia.',
				},
			],
		},
		howTo: {
			h2: 'Cómo Usar Esta Calculadora de Asistencia del 75 Por Ciento',
			introHtml:
				'Usar nuestra herramienta de <strong>calculadora de asistencia universitaria</strong> es sencillo y no requiere registro ni descargas:',
			steps: [
				'Selecciona Tu Objetivo de Asistencia: Haz clic en uno de los botones rápidos (60%, 65%, 70%, 75%, 80%, 85%, 90%) o escribe cualquier porcentaje personalizado que requiera tu departamento.',
				'Ingresa las Clases Asistidas: Introduce el número total de horas de clase o laboratorio a las que has asistido físicamente hasta ahora.',
				'Ingresa el Total de Clases Realizadas: Introduce el número acumulado de clases que tus profesores han impartido hasta la fecha.',
				'(Opcional) Ingresa el Total de Clases del Semestre: Si conoces el total de clases previstas para todo el semestre (por ejemplo, 90 o 120 clases), ingrésalo para desbloquear la tarjeta de Pronóstico del Semestre.',
				'Lee los Resultados al Instante: Observa cómo se actualizan al instante tu porcentaje, tu cuota de faltas seguras, tu objetivo de recuperación y tu estado dinámico mientras escribes.',
			],
		},
		features: {
			h2: 'Características Clave de Nuestra Calculadora de Asistencia Universitaria',
			items: [
				{
					icon: '⚡',
					title: 'Cálculos Instantáneos en Tiempo Real',
					desc: 'Sin esperas ni botones de "Enviar". La calculadora actualiza cada métrica en cuanto escribes o cambias un número.',
				},
				{
					icon: '🎯',
					title: 'Pronóstico de Fin de Semestre',
					desc: 'Planifica tu margen de faltas para el resto del semestre. Descubre si tu objetivo es matemáticamente alcanzable o si ya "estás frito".',
				},
				{
					icon: '🔒',
					title: 'Privacidad 100% en el Cliente',
					desc: 'Todos los cálculos se realizan directamente en tu navegador. Ningún dato de asistencia, credencial de acceso o registro estudiantil se envía jamás a servidores externos.',
				},
				{
					icon: '🌙',
					title: 'Modo Oscuro Incorporado',
					desc: 'Cambia sin problemas entre un nítido modo claro y un profundo modo oscuro OLED para tus sesiones de estudio nocturnas.',
				},
			],
		},
		faq: {
			h2: 'Preguntas Frecuentes (FAQ)',
			items: [
				{
					question: '¿Qué es una Calculadora de Asistencia Mensual y cómo se usa?',
					answerHtml:
						'Una <strong>calculadora de asistencia mensual</strong> permite a estudiantes y empleados calcular el porcentaje de asistencia durante un mes calendario específico. Simplemente ingresa el número de días o clases a los que asististe ese mes y divídelo entre el total de días laborables o clases programadas ese mes, luego multiplícalo por 100.',
				},
				{
					question: '¿Cuál es la Fórmula de la Calculadora de Asistencia?',
					answerHtml:
						'La <strong>fórmula de asistencia</strong> básica es: <code>Asistencia (%) = (Clases Asistidas / Total de Clases Realizadas) × 100</code>. Para saber cuántas faltas puedes permitirte sin bajar de un porcentaje objetivo (P%): <code>Faltas Seguras = ⌊(Asistidas / (P/100)) - Total Realizadas⌋</code>. Para saber cuántas clases necesitas para recuperar el objetivo (P%): <code>Clases a Asistir = ⌈((P/100 × Total Realizadas) - Asistidas) / (1 - P/100)⌉</code>.',
				},
				{
					question: '¿Qué es la Aplicación de Calculadora de Asistencia y funciona sin conexión?',
					answerHtml:
						'La <strong>Aplicación de Calculadora de Asistencia</strong> es una herramienta gratuita, web y compatible con móviles que funciona directamente en tu navegador. Calcula el porcentaje de asistencia, las faltas seguras y las clases de recuperación al instante, sin necesidad de descargas desde tiendas de aplicaciones, inicios de sesión ni almacenamiento en servidores.',
				},
				{
					question: '¿Qué es una Calculadora de Asistencia para Estudiantes?',
					answerHtml:
						'Una <strong>calculadora de asistencia para estudiantes</strong> es una calculadora educativa especializada, diseñada para que los estudiantes de escuela y universidad hagan seguimiento de su asistencia a clases y laboratorios. Evita la exclusión de exámenes al alertar a los estudiantes cuando su asistencia se acerca o cae por debajo de los umbrales obligatorios, como el 75% u 80%.',
				},
				{
					question: '¿Se puede usar la Calculadora de Asistencia para el 100 Por Ciento?',
					answerHtml:
						'Sí, puedes establecer el objetivo de asistencia en <strong>100%</strong> usando nuestro campo de objetivo personalizado. Ten en cuenta que lograr el 100% de asistencia requiere asistir a absolutamente todas las clases realizadas desde el primer día. Si has faltado aunque sea a una sola clase, alcanzar una asistencia final del 100.0% es matemáticamente imposible.',
				},
				{
					question: '¿Cómo funciona el objetivo del 80 por ciento en la Calculadora de Asistencia?',
					answerHtml:
						'La función de <strong>Calculadora de Asistencia 80</strong> establece tu umbral objetivo en 80% (común en universidades de prestigio y carreras profesionales). Para mantener el 80%, debes asistir al menos a 4 de cada 5 clases realizadas (Asistidas ≥ 0.8 × Total de Clases).',
				},
				{
					question: '¿Cómo funciona el objetivo del 75 por ciento en la Calculadora de Asistencia?',
					answerHtml:
						'La <strong>Calculadora de Asistencia 75</strong> ayuda a los estudiantes a cumplir con la norma estándar del 75% de asistencia exigida por la UGC y las universidades. Si tu asistencia actual es ≥ 75%, calcula cuántas clases puedes faltar. Si es &lt; 75%, calcula el número exacto de clases consecutivas a las que debes asistir para volver al 75%.',
				},
				{
					question: 'En una calculadora de asistencia del 75 por ciento, ¿cuántos días se pueden faltar?',
					answerHtml:
						'Para un semestre estándar de 100 clases, necesitas asistir al menos a 75 clases y puedes faltar como máximo a 25 clases. Si actualmente has asistido a 30 de 40 clases realizadas, no puedes faltar a ninguna clase inmediata sin bajar del 75%, pero de las 60 clases restantes del semestre, puedes faltar hasta 15.',
				},
				{
					question: '¿Cómo usar una calculadora de porcentaje de asistencia?',
					answerHtml:
						'Para usar una <strong>calculadora de porcentaje de asistencia</strong>: 1) Selecciona tu objetivo de asistencia (por ejemplo, 75% u 80%), 2) Ingresa el número de clases o días a los que asististe, 3) Ingresa el total de clases o días realizados hasta ahora. La calculadora muestra de inmediato tu porcentaje actual, tu estado y tu cuota de faltas seguras.',
				},
				{
					question: '¿Cómo se calcula el porcentaje de asistencia?',
					answerHtml:
						'El porcentaje de asistencia se calcula dividiendo el número total de sesiones presentes entre el número total de sesiones impartidas, y multiplicando esa fracción por 100. Por ejemplo, asistir a 45 de 60 clases da <code>(45 / 60) × 100 = 75%</code>.',
				},
				{
					question: '¿Cómo calcular el porcentaje de asistencia con una calculadora?',
					answerHtml:
						'En cualquier calculadora: escribe tus clases asistidas, presiona dividir (÷), ingresa el total de clases realizadas, presiona multiplicar (×), ingresa 100, y presiona igual (=). O simplemente usa nuestra <strong>aplicación de calculadora de asistencia</strong> gratuita en línea para obtener cálculos instantáneos con sugerencias de faltas automáticamente.',
				},
			],
		},
	},
	footer: {
		note: '© {year} Attendance 75 Calculator • Rastreador Gratuito de Asistencia Universitaria en Línea • Cálculo del lado del cliente y 100% privado',
	},
	tracker: {
		meta: {
			title: 'Rastreador de Asistencia - Controla Cada Materia con Un Toque',
			description:
				'Guarda todas tus materias una vez y actualiza tu asistencia con un toque después de cada clase. Rastreador de asistencia gratuito, privado y multi-materia con límites de faltas seguras, objetivos de recuperación y un resumen general — nada sale nunca de tu navegador.',
			keywords:
				'rastreador de asistencia, rastreador de asistencia multi materia, rastreador de asistencia semanal, app de rastreo de asistencia por clase, seguimiento de asistencia por materia, rastreador de asistencia para universitarios',
		},
		header: {
			title: 'Rastreador de Asistencia',
			subtitle: 'Guarda cada materia una vez y luego usa +Presente / +Ausente después de clase.',
		},
		targetLabel: 'Objetivo de asistencia',
		emptyHint: 'Agrega tu primera materia para empezar a rastrear.',
		sharedBanner: {
			text: 'Estás viendo un rastreador compartido por enlace. Todavía no se ha guardado en este navegador.',
			saveBtn: 'Guardar en mi rastreador',
			dismissBtn: 'Solo estoy viendo',
		},
		storageWarning:
			'Tu navegador está bloqueando los datos del sitio (modo privado, o datos del sitio desactivados), así que los cambios aquí no se guardarán al salir. El rastreador sigue funcionando con normalidad en esta sesión — usa Copiar enlace para tener una copia de respaldo.',
		addSubject: {
			heading: 'Agregar una materia',
			nameLabel: 'Nombre de la materia',
			namePlaceholder: 'ej. Estructuras de Datos',
			attendedLabel: 'Asistidas',
			attendedSub: 'hasta ahora',
			heldLabel: 'Realizadas',
			heldSub: 'hasta ahora',
			plannedLabel: 'Total de Clases del Semestre',
			plannedPlaceholder: 'ej. 100 clases previstas',
			submitBtn: '+ Agregar materia',
		},
		stats: {
			overall: 'Asistencia general',
			weakest: 'Materia más débil',
			strongest: 'Materia más fuerte',
		},
		subjectsHeading: 'Tus materias',
		copyVibeBtn: '📋 Copiar Resumen',
		copyLinkBtn: '🔗 Copiar enlace',
		printBtn: '🖨️ Imprimir / Captura',
		row: {
			totalThisSemester: '· {n} en total este semestre',
			present: '+ Presente',
			absent: '+ Ausente',
			edit: 'Editar',
			delete: 'Eliminar',
			editNameLabel: 'Nombre',
			editAttendedLabel: 'Asistidas',
			editHeldLabel: 'Realizadas',
			editPlannedLabel: 'Total de Clases del Semestre',
			save: 'Guardar',
			cancel: 'Cancelar',
		},
		notes: {
			invalid: 'Las asistidas ({attended}) no pueden ser más que las realizadas ({held}) — corrige los números abajo.',
			unrecoverable: 'El objetivo es 100% y ya faltaste a una clase — esto solo se puede corregir bajando el objetivo.',
			cooked: 'Aunque asistas a las {remaining} clases restantes, solo llegarías a {maxPct}% — por debajo del objetivo del semestre.',
			termCompleteMet: 'Semestre completo: terminaste en {pct}% — objetivo cumplido.',
			termCompleteMissed: 'Semestre completo: terminaste en {pct}% — objetivo no alcanzado.',
			forecastBudget: 'Para fin de semestre: puedes faltar {n} {classWord} más de las {remaining} que quedan.',
			forecastMustAttend: 'Para fin de semestre: debes asistir a las {remaining} clases que quedan.',
			borderline: '* Valor límite — las universidades redondean 74.x% de forma distinta; verifica la política de tu institución.',
			semesterOver: 'Semestre terminado — no quedan clases. Usa Editar para cambiar el total.',
		},
		validation: {
			nameRequired: 'Ponle un nombre a la materia.',
			duplicateName: 'Ya tienes una materia con ese nombre.',
			attendedInvalid: 'Asistidas debe ser un número entero, 0 o mayor.',
			heldInvalid: 'Realizadas debe ser un número entero, 0 o mayor.',
			plannedInvalid: 'Total de Clases del Semestre debe ser un número entero, 0 o mayor.',
			attendedExceedsHeld: 'Las asistidas no pueden ser más que las clases realizadas.',
			plannedBelowHeld: 'El total de clases del semestre debe ser mayor o igual que las clases realizadas.',
		},
		toasts: {
			vibeCopied: 'Resumen copiado',
			linkCopied: 'Enlace copiado',
			copyFailed: 'No se pudo copiar — intenta de nuevo',
			addressBarFallback: 'No se pudo copiar — copia la barra de direcciones en su lugar',
			savedToBrowser: 'Guardado en este navegador',
			undone: 'Deshecho',
			undoBtn: 'Deshacer',
		},
		undo: {
			present: '"{name}" marcada como presente',
			absent: '"{name}" marcada como ausente',
			deleted: '"{name}" eliminada',
			updated: '"{name}" actualizada',
		},
		rollup: {
			noClassesRecorded: '(no hay clases registradas todavía)',
			heldAcross: '({attended} / {held} realizadas en {n} {subjectWord})',
			subjectSingular: 'materia',
			subjectPlural: 'materias',
			noData: '—',
			noDataDetail: 'No hay clases registradas todavía',
			detailComplete: '{pct}% · semestre completo',
			detailUnrecoverable: '{pct}% · no recuperable con objetivo del 100%',
			detailCooked: '{pct}% · fuera de alcance este semestre',
			detailShort: '{pct}% · asiste {n} seguidas',
			detailSkip: '{pct}% · puedes faltar {n} más',
			detailSafe: '{pct}% · a salvo',
			detailLowest: '{pct}% · la más baja de tus materias',
			forecastUnavailable: 'Pronóstico no disponible — agrega los totales del semestre.',
			forecastMet: 'Para fin de semestre (materias con total definido): terminarías en {pct}% — objetivo cumplido.',
			forecastMissed: 'Para fin de semestre (materias con total definido): terminarías en {pct}% — objetivo no alcanzado.',
			forecastBudget: 'Para fin de semestre (materias con total definido): puedes faltar {n} {classWord} más de las {remaining} que quedan.',
			forecastMustAttend: 'Para fin de semestre (materias con total definido): debes asistir a las {remaining} clases que quedan.',
		},
		copySummary: {
			targetLine: '• Objetivo: {target}%',
			overallLine: '• General: {line}',
			noClassesRecorded: 'No hay clases registradas todavía.',
			noSubjectsSaved: 'No hay materias guardadas todavía.',
		},
		faq: [
			{
				question: '¿En qué se diferencia el Rastreador de la calculadora de la página principal?',
				answerHtml:
					'La calculadora de la página principal responde una sola pregunta puntual: asistidas, realizadas y tu porcentaje objetivo, y obtienes un resultado instantáneo. El Rastreador está pensado para todo el semestre — guardas cada materia una vez y, cada semana, tocas +Presente o +Ausente después de clase para mantener todo actualizado, con un resumen general de todas tus materias.',
			},
			{
				question: '¿Mis datos se envían a un servidor?',
				answerHtml:
					'No. El Rastreador es 100% del lado del cliente, igual que la calculadora de la página principal. Tus materias, conteos y objetivo se guardan solo en el almacenamiento local de tu navegador. Nada se sube nunca, y no hay cuenta ni inicio de sesión.',
			},
			{
				question: '¿Qué pasa si borro los datos de mi navegador o uso el modo privado/incógnito?',
				answerHtml:
					'El almacenamiento local está ligado a tu perfil del navegador, así que borrar los datos del sitio o navegar en una ventana privada eliminará (o nunca guardará) tu rastreador. En modo privado el Rastreador sigue funcionando perfectamente durante esa sesión — solo que no recordará tus materias la próxima vez que abras la página. Usa Copiar enlace antes de cerrar la pestaña si quieres tener una copia de respaldo.',
			},
			{
				question: '¿Cómo comparto mi rastreador con un amigo o lo paso a otro dispositivo?',
				answerHtml:
					'Toca Copiar enlace. Codifica tus materias y objetivo actuales directamente en la URL — nada se sube a ningún lado. Cualquiera que abra ese enlace ve tu rastreador y puede optar por guardarlo como propio; abrirlo en tu laptop restaura los mismos datos que tenías en tu teléfono.',
			},
			{
				question: '¿Cómo se calcula el número de "faltas seguras"?',
				answerHtml:
					'Una vez que ingresas el Total de Clases del Semestre de una materia, el Rastreador calcula la mayor cantidad de clases a las que todavía puedes faltar y aun así llegar a tu objetivo (o superarlo) al final del semestre — teniendo en cuenta las clases ya realizadas, no solo las que quedan.',
			},
			{
				question: '¿Por qué el número de recuperación es distinto de una estimación simple de "clases necesarias"?',
				answerHtml:
					'Asistir a una clase suma uno tanto a las clases asistidas como a las realizadas, así que el porcentaje avanza más despacio de lo que sugiere un cálculo ingenuo. La fórmula de recuperación del Rastreador tiene en cuenta ese denominador creciente, así que el número que te da es la cantidad exacta de clases seguidas que te lleva a tu objetivo — no una subestimación.',
			},
		],
		article: {
			introH2: 'Un rastreador pensado para todo el semestre',
			introP1:
				'La mayoría de las calculadoras de asistencia responden una pregunta y ya. Esta página es diferente: guarda cada materia una vez y, después de cada clase, toca <strong>+Presente</strong> o <strong>+Ausente</strong> en esa materia — un toque, sin volver a escribir números, sin diálogos de confirmación. Tus datos se guardan automáticamente en este navegador, listos para la próxima vez que abras la página.',
			introP2:
				'Cada materia muestra su propio porcentaje y estado, un resumen general de todo lo que estás cursando, y una alerta de "materia más débil" — porque es fácil vigilar tu número general y aun así llevarte una sorpresa con esa clase a la que sigues faltando.',
			calcH2: 'Cómo se calculan los números',
			formulas: [
				{
					title: 'Porcentaje actual',
					formula: 'porcentaje = (asistidas / realizadas) × 100',
					desc: 'El porcentaje exacto se muestra con un decimal. Las universidades no se ponen de acuerdo sobre si 74.6% debe redondearse a 74% o a 75% — este rastreador nunca redondea hacia arriba en silencio un valor límite; en cambio lo marca para que verifiques la política de tu institución.',
				},
				{
					title: 'Clases que puedes faltar ahora mismo',
					formula: 'faltas = floor(asistidas / objetivo% − realizadas)',
					desc: 'Se muestra para cada materia en la que vas bien — la misma cifra "ahora mismo" que da la calculadora de la página principal, sin necesitar el total de clases.',
				},
				{
					title: 'Clases necesarias para recuperarte',
					formula: 'necesarias = ceil((objetivo% × realizadas − asistidas) / (1 − objetivo%))',
					desc: 'Se muestra cuando estás por debajo del objetivo. Cada clase a la que asistes suma tanto al numerador como al denominador, así que una estimación ingenua que solo aumenta el numerador subestima cuántas necesitas en realidad — esta fórmula lo tiene en cuenta.',
				},
				{
					title: 'Pronóstico de fin de semestre',
					formula: 'porcentajeMáx = (asistidas + restantes) / totalClasesDelSemestre × 100',
					desc: 'Solo se muestra una vez que ingresas el Total de Clases del Semestre — proyecta dónde terminarás al final del semestre, limitando la cifra de faltas "ahora mismo" a lo que realmente queda y avisándote cuando el objetivo es matemáticamente inalcanzable.',
				},
			],
		},
		footerNote: '© {year} Attendance 75 Calculator • Rastreador Gratuito de Asistencia Universitaria en Línea',
		footerCalculatorLink: 'Calculadora',
	},
};

export default es;
