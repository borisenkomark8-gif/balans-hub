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
    id: "cagrisema-semaglutide",
    category: "medicine",
    date: "2026-10-02",
    featured: true,
    dateLabel: { ru: "2 октября 2026", en: "2 October 2026" },
    title: {
      ru: "Кагрилинтид с семаглутидом снизил вес сильнее, чем семаглутид 2,4 мг",
      en: "Cagrilintide plus semaglutide produced more weight loss than semaglutide 2.4 mg",
    },
    happened: {
      ru: " Систематический обзор пяти рандомизированных исследований (4746 участников) сравнил CagriSema — фиксированную комбинацию кагрилинтида и семаглутида — с семаглутидом 2,4 мг у взрослых с избыточной массой тела или ожирением, с сахарным диабетом 2-го типа и без него. Комбинация дала большее снижение веса: средняя разница −6,89 процентного пункта (95% ДИ −8,70 до −5,06), около −7,16 кг и −2,41 кг/м² по ИМТ. Шанс снижения веса на 20% и более был примерно вдвое выше (ОР 2,10). Дополнительного снижения HbA1c не было: разница −0,07 процентного пункта (95% ДИ −0,14 до 0,01); интервал для глюкозы натощак тоже лежал внутри заранее заданного порога значимости. Реакции в месте инъекции встречались чаще (ОР 3,14; 95% ДИ 1,42–6,96). Желудочно-кишечные нежелательные явления значимо не участились (ОР 1,09; 95% ДИ 0,97–1,21).",
      en: " A systematic review of five randomized trials (4,746 participants) compared CagriSema, a fixed-dose combination of cagrilintide and semaglutide, with semaglutide 2.4 mg in adults with overweight or obesity, with or without type 2 diabetes. The combination produced greater weight loss: mean difference −6.89 percentage points (95% CI −8.70 to −5.06), about −7.16 kg, and −2.41 kg/m² of BMI. The chance of losing at least 20% of body weight was about twice as high (RR 2.10). There was no additional HbA1c reduction: difference −0.07 percentage points (95% CI −0.14 to 0.01); the fasting-glucose interval also lay inside a prespecified threshold of importance. Injection-site reactions were more common (RR 3.14; 95% CI 1.42 to 6.96). Gastrointestinal adverse events were not significantly more frequent (RR 1.09; 95% CI 0.97 to 1.21).",
    },
    means: {
      ru: " Это сравнение лекарств в исследованиях, а не повод менять терапию самостоятельно. Дополнительное снижение веса выглядит заметным, но устойчивость результата, сердечно-сосудистые исходы и состав тела ещё не определены. Выбор препарата остаётся за врачом — с учётом показаний и переносимости.",
      en: " This is a comparison of medicines in trials, not a reason to change treatment on your own. The extra weight loss looks meaningful, but durability, cardiovascular outcomes, and body composition are still unknown. Drug choice stays with a clinician, based on indications and tolerability.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42890523/",
    sourceKind: "meta",
  },
  {
    id: "hyper-mastic-bp",
    category: "medicine",
    date: "2026-10-16",
    dateLabel: { ru: "16 октября 2026", en: "16 October 2026" },
    title: {
      ru: "Мастика хиосская не снизила суточное давление при уже контролируемой гипертензии",
      en: "Chios mastic did not lower 24-hour blood pressure in already controlled hypertension",
    },
    happened: {
      ru: " В двойном слепом исследовании HYPER-MASTIC 106 взрослых со стабильной контролируемой гипертензией 3 месяца получали мастику хиосскую — 1500 или 2800 мг/сутки — либо плацебо. Суточное систолическое и диастолическое давление, главные точки, между группами значимо не различались. Маркеры окислительного стресса и активность протеасомы тоже не изменились. В подгруппе более высокого риска появились отличия транскриптома, в том числе в путях, связанных с контактами эндотелия.",
      en: " In the double-blind HYPER-MASTIC trial, 106 adults with stable, well-controlled hypertension took Chios mastic at 1,500 or 2,800 mg/day, or placebo, for 3 months. Twenty-four-hour systolic and diastolic pressure, the primary endpoints, did not differ significantly between groups. Oxidative-stress markers and proteasome activity were also unchanged. In a higher-risk subgroup, transcriptomic differences appeared, including pathways related to endothelial junctions.",
    },
    means: {
      ru: " Если давление уже контролируется, добавка мастики не выглядит способом дополнительно его снизить. Транскриптомные сдвиги в подгруппе — повод для новых исследований, а не основание принимать смолу. Лечение гипертензии по этой работе не меняют.",
      en: " When blood pressure is already controlled, mastic does not look like a way to lower it further. Transcriptomic shifts in a subgroup are a reason for more research, not a reason to take the resin. This trial does not change hypertension treatment.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42885189/",
    sourceKind: "pubmed",
  },
  {
    id: "oa-vitamins-exercise",
    category: "medicine",
    date: "2026-10-16",
    dateLabel: { ru: "16 октября 2026", en: "16 October 2026" },
    title: {
      ru: "Витамин D3 или E не усилил эффект домашних упражнений при артрозе колена",
      en: "Active vitamin D3 or vitamin E did not add to home exercise for knee osteoarthritis",
    },
    happened: {
      ru: " В пилотном рандомизированном исследовании 88 женщин в постменопаузе с артрозом колена (степень Келлгрена–Лоуренса 2–4, средний возраст 71,9 года) 24 недели делали изометрические упражнения для ног дважды в день: только упражнения, упражнения плюс активный витамин D3 или упражнения плюс витамин E. Наблюдение завершили 80 участниц. Во всех группах улучшились симптомы по шкале JKOM, сила квадрицепса и тест ходьбы на 10 метров. Между группами значимой разницы по симптомам, силе и физической работоспособности не было.",
      en: " In a pilot randomized trial, 88 postmenopausal women with knee osteoarthritis (Kellgren–Lawrence grade 2–4, mean age 71.9) did isometric lower-limb exercises twice a day for 24 weeks: exercise alone, exercise plus active vitamin D3, or exercise plus vitamin E. Eighty participants completed follow-up. Every group improved JKOM symptoms, quadriceps strength, and the 10-meter walk. Symptoms, strength, and physical performance did not differ significantly between groups.",
    },
    means: {
      ru: " В этом исследовании симптомы и функцию улучшала регулярная нагрузка, а не добавление витамина D3 или E. Это не отменяет лечение подтверждённого дефицита витамина D и не заменяет индивидуальный план при артрозе.",
      en: " In this trial, regular exercise improved symptoms and function, and adding vitamin D3 or E did not. That does not set aside treatment of a confirmed vitamin D deficiency, and it does not replace an individual plan for osteoarthritis.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42888606/",
    sourceKind: "pubmed",
  },
  {
    id: "soy-menopause-diet",
    category: "nutrition",
    date: "2026-09-25",
    dateLabel: { ru: "25 сентября 2026", en: "25 September 2026" },
    title: {
      ru: "Соевые продукты могут смягчать приливы, но уверенность в эффекте очень низкая",
      en: "Soy foods may ease hot flashes, but certainty in the effect is very low",
    },
    happened: {
      ru: " Систематический обзор 15 рандомизированных исследований (1952 женщины 40–65 лет) оценил цельные продукты и модели питания, без испытаний одних только добавок. Соевые вмешательства снижали частоту и тяжесть приливов (стандартизированная разница средних −0,79; 95% ДИ −1,34 до −0,23; 4 исследования, 206 участниц), но не общий балл вазомоторных симптомов (−0,43; 95% ДИ −1,12 до 0,26) и не психологические исходы (−0,21; 95% ДИ −0,47 до 0,05). Общая уверенность по GRADE — очень низкая.",
      en: " A systematic review of 15 randomized trials (1,952 women aged 40–65) assessed whole foods and dietary patterns, not supplement-only trials. Soy interventions reduced hot-flash frequency and severity (standardized mean difference −0.79; 95% CI −1.34 to −0.23; 4 trials, 206 participants), but not the overall vasomotor score (−0.43; 95% CI −1.12 to 0.26) or psychological outcomes (−0.21; 95% CI −0.47 to 0.05). Overall GRADE certainty was very low.",
    },
    means: {
      ru: " Соевые продукты можно оставить в рационе, если они подходят по переносимости. Ждать от них замены менопаузальной гормональной терапии или предсказуемого снятия всех симптомов нельзя: выборка по приливам небольшая, а разброс результатов большой. Тема разобрана по открытой странице Examine и самой статье, без платного пересказа.",
      en: " Soy foods can stay in the diet when they are tolerated. They are not a substitute for menopausal hormone therapy, and they do not predictably clear every symptom: the hot-flash sample is small and the results are scattered. The topic follows a free Examine page and the paper itself, not a paid summary.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42790873/",
    sourceKind: "meta",
  },
  {
    id: "protein-leucine-adf",
    category: "nutrition",
    date: "2026-10-02",
    dateLabel: { ru: "2 октября 2026", en: "2 October 2026" },
    title: {
      ru: "Белок и лейцин не улучшили состав тела при коротком питании через день",
      en: "Protein and leucine did not improve body composition during short alternate-day fasting",
    },
    happened: {
      ru: " В рандомизированном исследовании 61 мужчина старшего возраста с ИМТ от 23 кг/м² 28 дней питался через день. Добавки уравняли по калориям: контроль без белка и лейцина, лейцин 0,08 г/кг или белок 0,4 г/кг плюс лейцин 0,04 г/кг; в дни приёма пищи было три дозы, в дни голодания — одна. По составу тела взаимодействия группы и времени не было. Значимые различия между группами нашлись для диастолического давления и холестерина ЛПВП. В среднем за четыре недели снизились масса тела и ряд липидов, а сила и функциональные показатели выросли независимо от вида добавки.",
      en: " In a randomized trial, 61 older men with BMI at least 23 kg/m² followed alternate-day fasting for 28 days. Supplements were calorie-matched: a control with no protein or leucine, leucine at 0.08 g/kg, or protein at 0.4 g/kg plus leucine at 0.04 g/kg, with three doses on feeding days and one on fasting days. There was no group-by-time interaction for body composition. Significant between-group differences appeared for diastolic pressure and HDL cholesterol. Over four weeks, body mass and several lipids fell on average, while strength and function rose regardless of the supplement.",
    },
    means: {
      ru: " На коротком отрезке питания через день калорийно равная добавка белка или лейцина не дала дополнительного выигрыша по составу тела. Это не отменяет обычную норму белка в рационе и не описывает более длинные схемы снижения веса.",
      en: " Over a short alternate-day fast, a calorie-matched protein or leucine supplement did not add a body-composition benefit. This does not remove the case for adequate protein in a usual diet, and it does not describe longer weight-loss plans.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42884706/",
    sourceKind: "pubmed",
  },
  {
    id: "frequency-set-distribution",
    category: "training",
    date: "2026-09-08",
    dateLabel: { ru: "8 сентября 2026", en: "8 September 2026" },
    title: {
      ru: "Три тренировки вместо одной повысили объём работы, но не толщину мышцы",
      en: "Three sessions instead of one raised work volume, but not muscle thickness",
    },
    happened: {
      ru: " В исследовании 18 тренированных мужчин 6 недель тренировали ноги: присед, жим ногами и разгибания. На каждое упражнение было 3 подхода в неделю до концентрического отказа при 80% исходного 1ПМ — либо все подходы в одном занятии, либо те же подходы в трёх занятиях. При трёх занятиях объём (вес × повторения) был выше: +58% в приседе и +76% в жиме ногами. Сила и толщина квадрицепса выросли в обеих группах без значимой разницы между схемами.",
      en: " In a study of 18 trained men, lower-body training lasted 6 weeks: back squat, leg press, and leg extension. Each exercise used 3 weekly sets to concentric failure at 80% of pretest 1RM, either all in one session or the same sets across three sessions. Three sessions produced more volume load (weight × reps): +58% in the squat and +76% in the leg press. Strength and quadriceps thickness rose in both groups, with no significant difference between schedules.",
    },
    means: {
      ru: " При одном и том же числе подходов более частые занятия помогли сделать больше повторений, но за 6 недель это не дало большей толщины мышцы. Частоту разумно подбирать под восстановление и расписание. Практический смысл совпадает с публичным разбором MASS: частота распределяет объём, а не работает как отдельный ускоритель роста. Закрытый текст выпуска не использовался.",
      en: " With the same number of sets, more frequent sessions helped complete more reps, but that did not produce thicker muscle over 6 weeks. Frequency is reasonably chosen around recovery and schedule. The practical reading matches the public MASS discussion: frequency distributes volume rather than acting as a separate growth accelerator. Paywalled issue text was not used.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42709978/",
    sourceKind: "pubmed",
  },
  {
    id: "exercise-frailty-modalities",
    category: "training",
    date: "2026-10-02",
    dateLabel: { ru: "2 октября 2026", en: "2 October 2026" },
    title: {
      ru: "Силовые тренировки связаны с меньшими баллами хрупкости, но данные неоднородны",
      en: "Resistance training was linked to lower frailty scores, but the evidence is heterogeneous",
    },
    happened: {
      ru: " Метаанализ 10 статей (13 сравнений, 1361 наблюдение: 682 в группах упражнений и 679 в контроле) оценил силовые тренировки, ходьбу и тайцзи по отдельности. В целом упражнения были связаны с более низкими баллами хрупкости (стандартизированная разница средних −0,57; 95% ДИ −0,91 до −0,24), но неоднородность высокая (I² = 88%), а прогнозный интервал пересекает ноль. Для силовых сравнений оценка была значимой (−0,78; 95% ДИ −1,22 до −0,35). Для ходьбы и тайцзи оценки были неточными и статистически не значимыми. Прямого сравнения форматов между собой не было.",
      en: " A meta-analysis of 10 articles (13 comparisons, 1,361 observations: 682 in exercise groups and 679 in control) assessed resistance training, walking, and Tai Chi separately. Overall, exercise was associated with lower frailty scores (standardized mean difference −0.57; 95% CI −0.91 to −0.24), but heterogeneity was high (I² = 88%) and the prediction interval crossed zero. Resistance-training comparisons had a significant estimate (−0.78; 95% CI −1.22 to −0.35). Walking and Tai Chi estimates were imprecise and not statistically significant. The formats were not compared head to head.",
    },
    means: {
      ru: " Из трёх разобранных форматов силовая нагрузка выглядит наиболее подкреплённой, но обзор не доказывает, что она лучше ходьбы или тайцзи. Из-за разброса исследований одну «лучшую дозу» вывести нельзя. Формат стоит выбирать по переносимости и по тому, что человек готов делать постоянно.",
      en: " Of the three formats reviewed, resistance training looks the best supported, but the review does not show that it beats walking or Tai Chi. The scatter across trials does not yield one best dose. Format is better chosen by tolerance and by what a person will keep doing.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42891303/",
    sourceKind: "meta",
  },
];
