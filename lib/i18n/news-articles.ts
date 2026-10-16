import type { Locale } from "./config";

export type NewsArticle = {
  id: string;
  category: "medicine" | "nutrition" | "training";
  date: string;
  dateLabel: Record<Locale, string>;
  title: Record<Locale, string>;
  happened: Record<Locale, string>;
  means: Record<Locale, string>;
  sourceHref: string;
  sourceKind: "pubmed" | "cochrane" | "meta";
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "tartan-hf",
    category: "medicine",
    date: "2026-10-13",
    featured: true,
    dateLabel: { ru: "13 октября 2026", en: "13 October 2026" },
    title: {
      ru: "Скрининг NT-proBNP выявил нераспознанную сердечную недостаточность у четверти людей с диабетом",
      en: "NT-proBNP screening found unrecognized heart failure in a quarter of people with diabetes",
    },
    happened: {
      ru: " В многоцентровом исследовании TARTAN-HF 706 взрослых от 40 лет с диабетом 1-го или 2-го типа и хотя бы одним фактором риска сердечной недостаточности, но без известного диагноза, случайно распределили на скрининг NT-proBNP (при уровне от 125 пг/мл — эхокардиография) или обычную помощь. Медиана возраста — 71 год, у 90% был сахарный диабет 2-го типа. Через 6 месяцев сердечную недостаточность диагностировали у 87 из 354 в группе скрининга (24,6%) против 2 из 352 при обычной помощи (1%; ОШ 58, 95% ДИ 14–236). Большинство случаев — СН с сохранённой фракцией выброса (23%). Чтобы выявить один случай, нужно было обследовать около 5 человек. Доля принимающих ингибиторы SGLT2 в группе скрининга выросла с 24% до 39%. У людей с нераспознанной СН оценка самочувствия по KCCQ-12 была ниже: медиана 65,6 против 89,6.",
      en: " In the multicenter TARTAN-HF trial, 706 adults aged 40 or older with type 1 or type 2 diabetes and at least one heart-failure risk factor, but no known heart-failure diagnosis, were randomized to NT-proBNP screening (echocardiography if the level was at least 125 pg/mL) or usual care. Median age was 71 years, and 90% had type 2 diabetes. At 6 months, heart failure was diagnosed in 87 of 354 in the screening arm (24.6%) versus 2 of 352 with usual care (1%; OR 58, 95% CI 14–236). Most cases were heart failure with preserved ejection fraction (23%). The number needed to screen was about 5. SGLT2 inhibitor use in the screening arm rose from 24% to 39%. People with unrecognized heart failure reported worse health status on the KCCQ-12 (median 65.6 vs 89.6).",
    },
    means: {
      ru: " У части людей с диабетом и факторами риска сердечная недостаточность уже есть, но не названа. В этом испытании связка «пептид, а при повышении — эхокардиография» сильно увеличивала число диагнозов за полгода. Это аргумент изучать скрининг в практике, а не повод обследоваться самостоятельно или менять лечение без врача.",
      en: " Some people with diabetes and risk factors already have heart failure that has not been named. In this trial, peptide testing followed by echocardiography when the result was high greatly increased diagnoses over six months. That supports studying screening in practice. It is not a reason to test or change treatment on your own.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42615958/",
    sourceKind: "pubmed",
  },
  {
    id: "activity-attention",
    category: "medicine",
    date: "2026-10-15",
    dateLabel: { ru: "15 октября 2026", en: "15 October 2026" },
    title: {
      ru: "Физическая активность улучшала внимание у взрослых, выше в рейтинге были аэробные нагрузки",
      en: "Physical activity improved attention in adults, with aerobic exercise ranked highest",
    },
    happened: {
      ru: " Сетевой метаанализ 15 рандомизированных исследований (1217 взрослых) сравнил виды физической активности по влиянию на внимание. Поиск шёл по четырём базам до января 2026 года. В целом активность была лучше контроля: стандартизированная разница средних 0,57 (95% ДИ 0,19–0,94). В рейтинге выше остальных стояли аэробные нагрузки, затем силовые. На оценку влияли интенсивность, длина занятия и длительность программы.",
      en: " A network meta-analysis of 15 randomized trials (1,217 adults) compared physical-activity types for effects on attention. Four databases were searched through January 2026. Activity beat control overall (standardized mean difference 0.57, 95% CI 0.19–0.94). Aerobic exercise ranked highest, followed by resistance training. Intensity, session length, and program duration influenced the estimates.",
    },
    means: {
      ru: " Регулярная нагрузка — один из нелекарственных способов поддерживать внимание, но первое место аэробных в рейтинге не отменяет силовые и другие форматы. Пятнадцати исследований мало, чтобы назначить один «лучший» протокол всем взрослым: переносимость и сопутствующие болезни по-прежнему решают выбор.",
      en: " Regular activity is one non-drug way to support attention, and a top ranking for aerobic exercise does not erase resistance training or other formats. Fifteen trials are not enough to prescribe one best protocol for every adult. Tolerance and other health conditions still decide the choice.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42878280/",
    sourceKind: "meta",
  },
  {
    id: "sglt2-cardiorenal",
    category: "medicine",
    date: "2026-10-13",
    dateLabel: { ru: "13 октября 2026", en: "13 October 2026" },
    title: {
      ru: "Метаанализ: ингибиторы SGLT2 снижали сердечно-сосудистые и почечные исходы при СД2",
      en: "Meta-analysis: SGLT2 inhibitors reduced cardiovascular and kidney outcomes in type 2 diabetes",
    },
    happened: {
      ru: " Метаанализ 14 крупных плацебо-контролируемых исследований (76 969 взрослых с сахарным диабетом 2-го типа; поиск до 15 мая 2026 года) собрал оценки по классу ингибиторов SGLT2. Комбинированная точка «первая госпитализация из-за сердечной недостаточности или сердечно-сосудистая смерть» была ниже на терапии: ОР 0,77 (95% ДИ 0,73–0,81), разнородность нулевая. Эффект не зависел от уже имеющейся сердечной недостаточности или установленного атеросклероза. Крупные сердечно-сосудистые события: ОР 0,86; сердечно-сосудистая смерть: ОР 0,86; инфаркт: ОР 0,88. Для инсульта значимого снижения не было (ОР 0,93; 95% ДИ 0,81–1,08). Первая госпитализация из-за сердечной недостаточности: ОР 0,71; комбинированные почечные исходы: ОР 0,69.",
      en: " A meta-analysis of 14 large placebo-controlled trials (76,969 adults with type 2 diabetes; search through 15 May 2026) pooled class effects of SGLT2 inhibitors. The composite of first heart-failure hospitalization or cardiovascular death was lower on treatment (HR 0.77, 95% CI 0.73–0.81), with no heterogeneity. Baseline heart failure or established atherosclerosis did not modify the effect. Major cardiovascular events HR 0.86, cardiovascular death HR 0.86, and myocardial infarction HR 0.88. Stroke was not clearly reduced (HR 0.93, 95% CI 0.81–1.08). First heart-failure hospitalization HR 0.71; composite kidney outcomes HR 0.69.",
    },
    means: {
      ru: " Сводка подтверждает уже известную пользу класса при СД2, а не открывает новый препарат. Какое средство выбрать, с чем его сочетать и кому оно не подходит, по-прежнему решают клиническая ситуация и рекомендации, а не один общий коэффициент.",
      en: " The synthesis supports the known class benefit in type 2 diabetes. It does not introduce a new drug. Which agent to use, what to combine it with, and who should avoid it still depend on the clinical situation and guidelines, not on one pooled hazard ratio.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42865310/",
    sourceKind: "meta",
  },
  {
    id: "issn-weight-diets",
    category: "nutrition",
    date: "2026-10-13",
    dateLabel: { ru: "13 октября 2026", en: "13 October 2026" },
    title: {
      ru: "Позиция ISSN: для снижения веса важнее дефицит, белок и силовые, чем название диеты",
      en: "ISSN position: for weight loss, the deficit, protein, and lifting matter more than the diet’s name",
    },
    happened: {
      ru: " 13 октября 2026 года International Society of Sports Nutrition опубликовала позицию по диетам для снижения массы тела у в целом здоровых и физически активных взрослых, с опорой и на данные при избыточном весе. Документ не разбирает лекарства для снижения веса, бариатрическую хирургию и сгонку веса обезвоживанием. Очень низкокалорийные схемы (меньше 800 ккал/сут) и низкокалорийные (800–1200 ккал/сут) сильнее снижают вес вначале, но без долгосрочного преимущества перед более мягким контролем калорий и с большим риском потери безжировой массы. Варианты интервального голодания в целом не отличались от непрерывного ограничения по весу и составу тела. Частота приёмов пищи сама по себе мало влияет на вес и жир; у активных людей белок хотя бы в трёх приёмах может помогать сохранять мышечную массу в дефиците. Для общей популяции назван ориентир 1,2–1,6 г белка/кг/сут, вместе с силовыми — 1,6–2,2 г/кг, а у сухих тренированных в дефиците для удержания безжировой массы — 1,9–3,2 г/кг. Долю углеводов и жиров можно подбирать по предпочтению: снижение веса было сходным от кетогенных до низкожировых схем, но кетогенные чаще сильнее уменьшали безжировую массу, особенно в коротких исследованиях.",
      en: " On 13 October 2026 the International Society of Sports Nutrition published a position on diets for weight reduction in generally healthy, physically active adults, also drawing on evidence in overweight and obesity. It does not cover weight-loss medicines, bariatric surgery, or dehydration-based weight cutting. Very-low-energy diets (under 800 kcal/day) and low-energy diets (800–1,200 kcal/day) produce more short-term loss, without a long-term advantage over milder calorie control, and with a greater risk of losing lean mass. Intermittent-fasting variants were broadly similar to continuous restriction for weight and body composition. Meal frequency by itself has little effect on weight and fat; in active people, protein across at least three meals may help retain lean mass in a deficit. The statement cites 1.2–1.6 g protein/kg/day for the general population, 1.6–2.2 g/kg with resistance training, and 1.9–3.2 g/kg to retain lean mass in lean, resistance-trained people during a deficit. Carbohydrate and fat shares can follow preference: weight loss was similar from ketogenic to low-fat patterns, but ketogenic diets more often reduced lean mass further, especially in short trials.",
    },
    means: {
      ru: " Рабочий каркас из позиции — посильный дефицит энергии, достаточный белок и силовые тренировки, а не поиск единственно правильного названия диеты. Верхние диапазоны белка и жёсткие калорийности относятся к конкретным группам в документе. Это обзор общества, а не индивидуальное назначение.",
      en: " The practical frame in the position is a tolerable energy deficit, enough protein, and resistance training, rather than one correctly named diet. The higher protein ranges and aggressive calorie levels apply to specific groups in the statement. This is a society review, not an individual prescription.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42867412/",
    sourceKind: "pubmed",
  },
  {
    id: "beetroot-endurance",
    category: "nutrition",
    date: "2026-10-12",
    dateLabel: { ru: "12 октября 2026", en: "12 October 2026" },
    title: {
      ru: "Свекольный сок не увеличил число повторений до отказа у тренированных женщин",
      en: "Beetroot juice did not increase repetitions to failure in resistance-trained women",
    },
    happened: {
      ru: " В рандомизированном двойном слепом перекрёстном исследовании 16 женщин с опытом силовых тренировок (средний возраст 27 лет) за 2,5 часа до работы делали жим лёжа и жим ногами под 45°: четыре подхода до концентрического отказа при 60% от одного повторного максимума. Сравнивали сок с нитратом (12,8 ммоль), плацебо (0,92 ммоль) и контроль без напитка. Сумма повторений в жиме лёжа не различалась: контроль 55,6±9,7, плацебо 58,9±13,0, нитрат 56,0±14,0 (p = 0,785). В жиме ногами: 82,6±36,0, 80,4±37,0 и 79,3±30,0 (p = 0,945). Не было различий и по воспринимаемой нагрузке, пульсу, давлению и лактату.",
      en: " In a randomized double-blind crossover study, 16 resistance-trained women (mean age 27) performed bench press and 45° leg press 2.5 hours after a drink: four sets to concentric failure at 60% of one-repetition maximum. Conditions were nitrate-rich beetroot juice (12.8 mmol), placebo (0.92 mmol), and no drink. Total bench-press repetitions did not differ: control 55.6±9.7, placebo 58.9±13.0, nitrate 56.0±14.0 (p = 0.785). Leg press: 82.6±36.0, 80.4±37.0, and 79.3±30.0 (p = 0.945). Perceived exertion, heart rate, blood pressure, and lactate also did not differ.",
    },
    means: {
      ru: " Разовая доза нитрата перед силовой работой до отказа не выглядела полезной для результата в этой группе. Один небольшой перекрёстный протокол не закрывает вопрос для других задач, например длительной выносливости, но и не подтверждает ожидание «больше повторений» именно в такой схеме.",
      en: " A single nitrate dose before lifting to failure did not look performance-enhancing in this group. One small crossover protocol does not close the question for other tasks, such as prolonged endurance, and it also does not support expecting more repetitions from this setup.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42864982/",
    sourceKind: "pubmed",
  },
  {
    id: "progressive-overload",
    category: "training",
    date: "2026-10-15",
    dateLabel: { ru: "15 октября 2026", en: "15 October 2026" },
    title: {
      ru: "Прогрессия нагрузки и рост мышцы: разница проявилась не сразу, а к концу 12 недель",
      en: "Progressive overload and muscle growth: the difference appeared late, toward week 12",
    },
    happened: {
      ru: " В рандомизированном исследовании 31 здоровый нетренированный молодой взрослый 12 недель тренировал одну ногу с прогрессией нагрузки, а вторую — с постоянным весом (разгибание колена, 3×10–12, дважды в неделю). Площадь поперечного сечения выросла в обеих ногах к 24-й тренировке: с прогрессией на 3,36±1,94 см², без неё на 2,67±1,86 см². На отдельных контрольных точках ноги значимо не различались. Прирост именно с 18-й по 24-ю тренировку был больше при прогрессии: разница изменений 1,22 см² (95% ДИ 0,59–1,84). Запас повторений при прогрессии оставался около нуля (0,20±0,37 к концу), без прогрессии вырос до 4,08±1,94. Суммарный объём и воспринимаемое усилие были выше в ноге с прогрессией.",
      en: " In a randomized within-subject trial, 31 healthy untrained young adults trained one leg with progressive overload and the other with a fixed load for 12 weeks (unilateral knee extension, 3×10–12, twice weekly). Muscle cross-sectional area rose in both legs by session 24: +3.36±1.94 cm² with progression and +2.67±1.86 cm² without it. The legs did not differ significantly at the individual check-ins. The gain specifically from session 18 to 24 was larger with progression (between-leg difference in change 1.22 cm², 95% CI 0.59–1.84). Repetitions in reserve stayed near zero with progression (0.20±0.37 at the end) and rose to 4.08±1.94 without it. Volume load and perceived exertion were higher in the progressing leg.",
    },
    means: {
      ru: " У новичка мышца может расти и без постоянного повышения веса, пока подход остаётся тяжёлым. Когда постоянный вес становится заметно легче, прогрессия помогает удерживать высокое усилие: здесь преимущество накопилось во второй половине программы. Это сравнение двух ног у нетренированных взрослых, а не шаблон для любого стажа.",
      en: " In a beginner, muscle can grow for a while without raising the weight, as long as the set stays hard. Once a fixed load becomes clearly easier, progression helps keep the effort high: here the advantage accumulated in the second half of the program. This is a two-leg comparison in untrained adults, not a template for every training age.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42880344/",
    sourceKind: "pubmed",
  },
  {
    id: "aquatic-hip-bone",
    category: "training",
    date: "2026-10-13",
    dateLabel: { ru: "13 октября 2026", en: "13 October 2026" },
    title: {
      ru: "32 недели силовых в воде улучшили участок бедренной кости сильнее, чем ленты на суше",
      en: "32 weeks of aquatic resistance training improved a hip bone site more than land-based bands",
    },
    happened: {
      ru: " Вторичный анализ трёх групп более крупного рандомизированного исследования сравнил 32 недели силовых дважды в неделю у женщин со средним возрастом 67,5 года и избыточной массой тела: водные силовые (33 человека), эластичные ленты на суше (32) и контроль (33). По денситометрии взаимодействие времени и группы было значимым для минеральной плотности и T-критерия треугольника Варда и для минерального содержания всей проксимальной бедренной кости. Плотность и T-критерий треугольника Варда выросли больше в воде, чем на суше и в контроле (величина эффекта 0,445 и 0,412). Для остальных показателей, включая поясничный отдел, такого различия между группами не было.",
      en: " A secondary analysis of three arms from a larger randomized trial compared 32 weeks of twice-weekly resistance training in women with a mean age of 67.5 years and overweight: aquatic training (33 people), land-based elastic bands (32), and control (33). On DXA, time-by-group interactions were significant for Ward’s triangle bone mineral density and T-score and for total-hip bone mineral content. Ward’s triangle density and T-score improved more in water than on land or in control (effect sizes 0.445 and 0.412). The remaining measures, including the lumbar spine, did not show that between-group difference.",
    },
    means: {
      ru: " Если тренироваться на суше трудно, силовая работа в воде может быть реальным вариантом с точечным эффектом на кость бедра, а не обещанием «укрепить весь скелет». Переломы в анализе не считали, и эти данные не заменяют назначенное лечение остеопороза.",
      en: " When land-based training is difficult, resistance work in water can be a real option with a site-specific effect on the hip, not a promise to strengthen the whole skeleton. Fractures were not an endpoint, and these data do not replace prescribed osteoporosis treatment.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42879863/",
    sourceKind: "pubmed",
  },
];
