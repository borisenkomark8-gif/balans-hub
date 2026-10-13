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
    id: "triumph2-retatrutide",
    category: "medicine",
    date: "2026-10-10",
    featured: true,
    dateLabel: { ru: "10 октября 2026", en: "10 October 2026" },
    title: {
      ru: "Ретатрутид снизил вес у взрослых с ожирением и сахарным диабетом 2-го типа",
      en: "Retatrutide lowered body weight in adults with obesity and type 2 diabetes",
    },
    happened: {
      ru: " В фазе 3 TRIUMPH-2 (Lancet, выпуск от 10 октября 2026) 1152 взрослых с ожирением и СД2 случайным образом получали ретатрутид 4, 9 или 12 мг либо плацебо раз в неделю. К 80-й неделе средняя потеря веса составила 11,9%, 16,8% и 18,8% против 5,1% на плацебо; разница с плацебо — −6,9, −11,8 и −13,8 процентного пункта. На тех же дозах диарея была у 27%, 34% и 34% против 13%, тошнота — у 14%, 21% и 28% против 8%. Отмена из-за нежелательных явлений или смерти чаще случалась на 9 мг (12%) и 12 мг (8%), чем на 4 мг (4%) и плацебо (5%); следователи сочли смертельные исходы не связанными с препаратом. Исследование финансировала Eli Lilly.",
      en: " In the phase 3 TRIUMPH-2 trial (Lancet, 10 October 2026 issue), 1,152 adults with obesity and type 2 diabetes were assigned to weekly retatrutide 4, 9, or 12 mg or placebo. At week 80, mean weight loss was 11.9%, 16.8%, and 18.8% versus 5.1% with placebo; the differences versus placebo were −6.9, −11.8, and −13.8 percentage points. At those doses, diarrhea occurred in 27%, 34%, and 34% versus 13%, and nausea in 14%, 21%, and 28% versus 8%. Stopping for adverse events or death was more common at 9 mg (12%) and 12 mg (8%) than at 4 mg (4%) or placebo (5%); investigators judged the deaths unrelated to the drug. Eli Lilly funded the trial.",
    },
    means: {
      ru: " Это результат контролируемого испытания, а не повод самостоятельно начинать или менять лечение. Ретатрутид остаётся изучаемым препаратом: выбор терапии ожирения и СД2, включая уже доступные средства, делает врач с учётом переносимости и сопутствующих болезней.",
      en: " This is a controlled-trial result, not a reason to start or change treatment on your own. Retatrutide is still an investigational drug: choices for obesity and type 2 diabetes, including medicines already in use, belong with a clinician and depend on tolerability and other conditions.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42810372/",
    sourceKind: "pubmed",
  },
  {
    id: "prostate-as-qol",
    category: "medicine",
    date: "2026-10-12",
    dateLabel: { ru: "12 октября 2026", en: "12 October 2026" },
    title: {
      ru: "Питание и тренировки снизили вес, но не общее качество жизни при наблюдении рака простаты",
      en: "Diet and exercise lowered weight, but not overall quality of life, during prostate-cancer surveillance",
    },
    happened: {
      ru: " Во вторичном анализе РКИ от 12 октября 2026 года 100 мужчин с избыточным весом или ожирением на активном наблюдении при раке простаты сравнили 6-месячную программу питания и тренировок с целью −7% веса и обычные рекомендации по питанию и активности. Вес снизился на 7,1% против 1,8%. Значимой разницы не было по общему качеству жизни (EQ-5D-5L), мочевым симптомам (IPSS), опроснику EPIC-26 и тревоге, связанной с раком (MAX-PC). Заметные сдвиги отдельных шкал нашлись только в разведочных подгруппах.",
      en: " A secondary analysis published on 12 October 2026 followed 100 men with overweight or obesity on active surveillance for prostate cancer. A 6-month diet and exercise program aimed at 7% weight loss was compared with usual diet and activity guidance. Weight fell by 7.1% versus 1.8%. There was no significant difference in general quality of life (EQ-5D-5L), urinary symptoms (IPSS), the EPIC-26 prostate questionnaire, or cancer-related anxiety (MAX-PC). Notable shifts on single scales appeared only in exploratory subgroups.",
    },
    means: {
      ru: " Потеря веса сама по себе не обещает, что мочевые, сексуальные или общие оценки самочувствия станут лучше. Питание и движение по-прежнему важны для здоровья в целом, но ожидания по симптомам рака простаты разумнее обсуждать с лечащим врачом.",
      en: " Weight loss by itself does not promise better urinary, sexual, or overall quality-of-life scores. Eating and movement still matter for general health, but expectations about prostate-cancer symptoms are better discussed with the treating physician.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42862393/",
    sourceKind: "pubmed",
  },
  {
    id: "trt-cv-safety",
    category: "medicine",
    date: "2026-10-06",
    dateLabel: { ru: "6 октября 2026", en: "6 October 2026" },
    title: {
      ru: "Тестостерон улучшил часть липидов, но сигнал по аритмиям остаётся неясным",
      en: "Testosterone replacement improved some lipids, but an arrhythmia signal remains unclear",
    },
    happened: {
      ru: " Метаанализ 31 РКИ (9437 мужчин среднего и старшего возраста; публикация 6 октября 2026) сравнил заместительную терапию тестостероном с плацебо при курсах от 40 дней до 36 месяцев. На терапии были ниже общий холестерин (−10,20 мг/дл), триглицериды (−7,03 мг/дл) и ЛПНП (−6,64 мг/дл); ЛПВП значимо не изменился. Среди нефатальных событий выделен сигнал по аритмиям (ОШ 1,58; 95% ДИ 1,21–2,05; 6598 участников).",
      en: " A meta-analysis of 31 randomized trials (9,437 middle-aged and older men; published 6 October 2026) compared testosterone replacement with placebo over 40 days to 36 months. Therapy was associated with lower total cholesterol (−10.20 mg/dL), triglycerides (−7.03 mg/dL), and LDL cholesterol (−6.64 mg/dL); HDL did not change significantly. Among nonfatal events, an arrhythmia signal was reported (OR 1.58; 95% CI 1.21–2.05; 6,598 participants).",
    },
    means: {
      ru: " Сдвиг липидов не делает тестостерон средством профилактики болезней сердца. Насколько важен сигнал по аритмиям, по этим данным не ясно. Вопрос терапии обсуждают при подтверждённом гипогонадизме и с врачом, а не как способ «поднять уровень».",
      en: " A lipid shift does not make testosterone a way to prevent heart disease. How much the arrhythmia signal matters is not clear from these data. Therapy belongs with confirmed hypogonadism and a clinician, not as a way to “raise the level.”",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42836912/",
    sourceKind: "meta",
  },
  {
    id: "protein-sources-mps",
    category: "nutrition",
    date: "2026-10-12",
    dateLabel: { ru: "12 октября 2026", en: "12 October 2026" },
    title: {
      ru: "После силовой источники белка близки по острому синтезу, значимый эффект — у сыворотки",
      en: "After lifting, protein sources ranked closely for acute synthesis; only whey was significant",
    },
    happened: {
      ru: " Сетевой метаанализ 51 исследования с биопсией мышцы (12 октября 2026) сравнил один приём разных белков после силовой у здоровых взрослых. По оценке почасового синтеза выше стояли нативная сыворотка, горох, цельное яйцо, микопротеин и обычная сыворотка, но статистически значимый эффект был только у сыворотки (средняя разница 0,02% в час; 95% ДИ 0,01–0,04). Уверенность доказательств низкая или умеренная. В дозовом разборе для части животных и растительных источников наибольший предсказанный ответ приходился на 18–25 г.",
      en: " A network meta-analysis of 51 muscle-biopsy studies (12 October 2026) compared a single dose of different proteins after resistance exercise in healthy adults. Native whey, pea, whole egg, mycoprotein, and whey ranked highest for estimated hourly synthesis, but only whey had a statistically significant effect (mean difference 0.02% per hour; 95% CI 0.01–0.04). Certainty was low to moderate. In the dose analysis, some animal and plant sources had their highest predicted response at 18–25 g.",
    },
    means: {
      ru: " На практике важнее суточная норма белка и сама силовая, чем поиск «идеального» порошка. Острый синтез в биопсии не равен набору массы за месяцы, а источники, за которыми стоит мало исследований, легко переоценить.",
      en: " In practice, daily protein intake and the lifting itself matter more than hunting for an ideal powder. Acute synthesis in a biopsy is not the same as muscle gain over months, and sources backed by few studies are easy to overrate.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42862730/",
    sourceKind: "meta",
  },
  {
    id: "creatine-rt-meta",
    category: "nutrition",
    date: "2026-09-21",
    dateLabel: { ru: "21 сентября 2026", en: "21 September 2026" },
    title: {
      ru: "Креатин вместе с силовыми добавил силы и тощей массы, но не убрал жир",
      en: "Creatine plus lifting added strength and lean mass, without a clear fat-mass drop",
    },
    happened: {
      ru: " Трёхуровневый метаанализ 63 исследований (1489 участников; публикация 21 сентября 2026) сравнил силовые с креатином и силовые без него. С креатином были выше сила верха (g = 0,54) и низа тела (g = 0,55) и тощая масса (g = 0,30). Масса тела чуть выросла (g = 0,12), процент жира чуть снизился (g = −0,14), а жировая масса значимо не изменилась. Разбор по возрасту разведочный: эффект на силу выглядел крупнее в более молодых выборках. Питание участников в исходных работах описано неполно.",
      en: " A three-level meta-analysis of 63 studies (1,489 participants; published 21 September 2026) compared resistance training with and without creatine. Creatine was linked with greater upper-body strength (g = 0.54), lower-body strength (g = 0.55), and lean mass (g = 0.30). Body mass rose slightly (g = 0.12) and body-fat percentage fell slightly (g = −0.14), while fat mass did not change significantly. An age split was exploratory: strength effects looked larger in younger samples. Diet was incompletely reported in the source trials.",
    },
    means: {
      ru: " Креатин здесь выглядит добавкой к силовым, а не способом «сушки». Ожидаемый вклад — умеренная прибавка силы и тощей массы на фоне тренировок. Обзор не заменяет решение о добавке, если уже есть повод следить за почками или рационом вместе с врачом.",
      en: " Here creatine looks like an add-on to lifting, not a fat-loss method. The expected contribution is a moderate gain in strength and lean mass alongside training. The review does not replace a decision about the supplement when kidney health or diet already needs a clinician’s eye.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42765482/",
    sourceKind: "meta",
  },
  {
    id: "parkinson-exercise-dose",
    category: "training",
    date: "2026-10-10",
    dateLabel: { ru: "10 октября 2026", en: "10 October 2026" },
    title: {
      ru: "При болезни Паркинсона больший объём нагрузки связан с моторикой, лучший формат не выбран",
      en: "In Parkinson’s disease, more weekly exercise tracked with motor scores, with no best format",
    },
    happened: {
      ru: " Байесовский сетевой метаанализ 173 РКИ (10 октября 2026) оценил моторные симптомы, равновесие, скорость ходьбы и тест «встань и иди». Против контроля без тренировок наибольшая оценка по UPDRS III была у упражнений категории mind-body (g = 0,65; 95% CrI 0,42–0,87). Плюс 250 MET-мин структурированной нагрузки в неделю на уровне исследований связывали с улучшением UPDRS III, равновесия и TUG, но не скорости ходьбы. Уверенность доказательств низкая или очень низкая, а интервалы предсказания для сравнений с контролем пересекали ноль.",
      en: " A Bayesian network meta-analysis of 173 randomized trials (10 October 2026) covered motor symptoms, balance, walking speed, and the timed up-and-go test. Versus non-exercise control, mind-body exercise had the largest estimate for UPDRS III (g = 0.65; 95% CrI 0.42–0.87). An extra 250 MET-min of planned weekly exercise, at the trial level, was associated with better UPDRS III, balance, and TUG, but not walking speed. Certainty was low or very low, and prediction intervals versus control crossed zero.",
    },
    means: {
      ru: " Регулярная нагрузка здесь важнее спора о единственно верном формате. Объём и переносимость подбирают с неврологом и специалистом по движению: обзор не задаёт личную норму минут и не заменяет лечение.",
      en: " Regular training matters here more than arguing over one correct format. Volume and tolerance belong with a neurologist and a movement specialist: the review does not set a personal minute target and does not replace treatment.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42859236/",
    sourceKind: "meta",
  },
  {
    id: "rt-sets-cognition",
    category: "training",
    date: "2026-10-06",
    dateLabel: { ru: "6 октября 2026", en: "6 October 2026" },
    title: {
      ru: "Один и три подхода силовой не сдвинули когнитивные тесты при когнитивных нарушениях",
      en: "One or three lifting sets did not shift cognition tests in people with cognitive impairment",
    },
    happened: {
      ru: " В 8-недельном исследовании (номер от 6 октября 2026) 30 человек с когнитивными нарушениями случайно распределили на один или три подхода силовой, ещё 13 неслучайно оставили в контрольной группе. По шкале DRS-2 и BDNF различий между группами не было, прироста от исходного уровня тоже. Работоспособность по SPPB выросла против контроля и после одного подхода (+2,7 балла), и после трёх (+1,4). Сводная сила значимо выросла только в группе одного подхода (+12 кг), но после программы группы между собой не различались.",
      en: " In an 8-week study (6 October 2026 issue), 30 people with cognitive impairment were randomized to one or three resistance-training sets, and 13 others were nonrandomly kept as controls. DRS-2 cognition scores and BDNF did not differ between groups, and neither rose from baseline. SPPB physical performance rose versus control after one set (+2.7 points) and after three (+1.4). Composite strength rose significantly only in the single-set group (+12 kg), but the groups did not differ from each other after the program.",
    },
    means: {
      ru: " Короткая силовая может поддерживать физическую функцию, даже если за 8 недель когнитивные шкалы не меняются. Один подход здесь не уступил трём по работоспособности — это довод в пользу посильного объёма, а не схема лечения деменции.",
      en: " Short resistance sessions can support physical function even when cognition scores do not change over 8 weeks. One set did not lose to three for performance here — a case for a tolerable dose, not a dementia treatment plan.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42678372/",
    sourceKind: "pubmed",
  },
];
