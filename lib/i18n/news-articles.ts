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
    id: "bproad-bp",
    category: "medicine",
    date: "2026-10-01",
    featured: true,
    dateLabel: { ru: "1 октября 2026", en: "1 October 2026" },
    title: {
      ru: "Интенсивный контроль давления при СД2 снизил крупные сердечно-сосудистые события",
      en: "Intensive blood-pressure control in type 2 diabetes cut major cardiovascular events",
    },
    happened: {
      ru: " В исследовании BPROAD 12 821 взрослых 50 лет и старше с сахарным диабетом 2-го типа и повышенным сердечно-сосудистым риском сравнили целевое систолическое давление ниже 120 мм рт. ст. и ниже 140 мм рт. ст. За медиану наблюдения 4,2 года комбинированная точка (нефатальный инсульт или инфаркт, госпитализация/лечение сердечной недостаточности, сердечно-сосудистая смерть) встречалась реже при интенсивной стратегии: 1,65 против 2,09 событий на 100 человеко-лет (ОР 0,79).",
      en: " In BPROAD, 12,821 adults aged 50+ with type 2 diabetes and elevated cardiovascular risk were assigned to systolic targets below 120 mm Hg versus below 140 mm Hg. Over a median 4.2 years, the composite of nonfatal stroke or myocardial infarction, heart-failure treatment or hospitalization, or cardiovascular death was lower with intensive control: 1.65 vs 2.09 events per 100 person-years (HR 0.79).",
    },
    means: {
      ru: " Для части пациентов с СД2 более жёсткая цель по систолическому давлению может снижать крупные сердечно-сосудистые исходы. Решение о цели давления остаётся индивидуальным: учитывают переносимость, риск гипотонии, почечную функцию и действующие рекомендации, а не «универсальную» цифру для всех.",
      en: " For some people with type 2 diabetes, a tighter systolic target may reduce major cardiovascular events. The blood-pressure goal remains individual: tolerability, hypotension risk, kidney function, and current guidelines matter more than one universal number.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/39555827/",
    sourceKind: "pubmed",
  },
  {
    id: "digital-diabetes-education",
    category: "medicine",
    date: "2026-10-09",
    dateLabel: { ru: "9 октября 2026", en: "9 October 2026" },
    title: {
      ru: "Цифровое обучение с «подталкиваниями» улучшило контроль при СД2 за 12 недель",
      en: "Digital education with behavioral nudges improved type 2 diabetes control in 12 weeks",
    },
    happened: {
      ru: " В многоцентровом рандомизированном исследовании 293 взрослых с сахарным диабетом 2-го типа сравнили стандартное цифровое обучение и программу с поведенческими «подталкиваниями». К 12-й неделе в группе вмешательства сильнее снизились HbA1c (скорректированная разница −0,38%), гликемия натощак, вес, ИМТ, артериальное давление и общий холестерин; также улучшились самоконтроль, самоэффективность и сила привычек.",
      en: " In a multicenter randomized trial of 293 adults with type 2 diabetes, standard digital education was compared with a program that added behavioral nudges. By 12 weeks the intervention arm had greater reductions in HbA1c (adjusted difference −0.38%), fasting glucose, weight, BMI, blood pressure, and total cholesterol, plus better self-management, self-efficacy, and habit strength.",
    },
    means: {
      ru: " Структурированное цифровое обучение может усиливать привычки самоконтроля, но это дополнение к лечению, а не замена лекарств и очной помощи. Нужны более длинные наблюдения, прежде чем переносить эффект на годы.",
      en: " Structured digital education can strengthen self-management habits, but it complements care rather than replacing medicines or in-person support. Longer follow-up is needed before assuming lasting benefit.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42695340/",
    sourceKind: "pubmed",
  },
  {
    id: "exercise-nutrition-hypertension",
    category: "medicine",
    date: "2026-10-08",
    dateLabel: { ru: "8 октября 2026", en: "8 October 2026" },
    title: {
      ru: "Тренировки плюс консультации по питанию сильнее снизили глюкозу у пожилых с АГ",
      en: "Exercise plus nutrition counseling lowered fasting glucose more in older adults with hypertension",
    },
    happened: {
      ru: " В прагматичном рандомизированном исследовании 32 участников 50–80 лет с артериальной гипертензией сравнили комбинированные тренировки дважды в неделю и те же тренировки плюс шесть групповых консультаций по питанию без ограничения калорий. За 12 недель глюкоза натощак была ниже при добавлении питания (−10 мг/дл; p = 0,004). Систолическое давление снизилось внутри группы с консультациями, но между группами значимой разницы не было.",
      en: " In a pragmatic randomized trial, 32 adults aged 50–80 with hypertension did twice-weekly combined exercise alone or the same training plus six group nutrition counseling sessions without calorie restriction. Over 12 weeks, fasting glucose was lower with added counseling (−10 mg/dL; p = 0.004). Systolic pressure fell within the counseling arm, but the between-group blood-pressure difference was not significant.",
    },
    means: {
      ru: " Даже без жёсткой диеты акцент на качестве пищи рядом с регулярной нагрузкой может улучшать гликемию у пожилых с гипертензией. Выбор формата консультаций и безопасность тренировок нужно подбирать индивидуально.",
      en: " Even without a strict diet, focusing on food quality alongside regular training may improve glycemia in older adults with hypertension. Counseling format and exercise safety still need individual tailoring.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42693257/",
    sourceKind: "pubmed",
  },
  {
    id: "protein-frail-rt",
    category: "nutrition",
    date: "2026-10-05",
    dateLabel: { ru: "5 октября 2026", en: "5 October 2026" },
    title: {
      ru: "Добавка белка при силовых тренировках у frail пожилых: эффект зависел от исходного рациона",
      en: "Protein with resistance training in frail older adults: benefit depended on baseline intake",
    },
    happened: {
      ru: " В рандомизированном исследовании frail пожилых (средний возраст 73,9 года) силовые тренировки до мышечного отказа сочетали с консультациями и сывороточным белком для достижения 1,2–1,5 г/кг/сутки либо оставили только тренировки. В целом сила жима ногами, мышечная масса и физическая работоспособность не выросли значимо сильнее в группе белка. В разведочном анализе больший прирост силы был у тех, кто до исследования ел меньше 1,2 г белка/кг/сутки, особенно при потреблении ниже 0,8 г/кг.",
      en: " In a randomized trial of frail older adults (mean age 73.9), resistance training to failure was paired with counseling and whey to reach 1.2–1.5 g/kg/day protein, or training alone. Overall, leg-press strength, lean mass, and physical performance did not improve significantly more with protein. Exploratory analyses found larger strength gains when baseline intake was below 1.2 g/kg/day, especially below 0.8 g/kg.",
    },
    means: {
      ru: " Для frail пожилых сначала имеет смысл закрыть дефицит белка в рационе, а не автоматически «добавлять ещё» при уже достаточном потреблении. Вывод о подгруппах требует подтверждения в более крупных исследованиях.",
      en: " For frail older adults, closing a true protein gap may matter more than automatically adding more when intake is already adequate. The subgroup signal needs confirmation in larger trials.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/41931963/",
    sourceKind: "pubmed",
  },
  {
    id: "whey-rt-older-nma",
    category: "nutrition",
    date: "2026-10-03",
    dateLabel: { ru: "3 октября 2026", en: "3 October 2026" },
    title: {
      ru: "Сывороточный белок плюс силовые тренировки — лидер сети метаанализов у пожилых",
      en: "Whey protein plus resistance training led a network meta-analysis in older adults",
    },
    happened: {
      ru: " Сетевой метаанализ 235 рандомизированных исследований (20 980 нетренированных пожилых) сравнил сочетания источников белка и видов нагрузки. Лучшие оценки по мышечной массе и силе ног получила комбинация сывороточного белка и силовых тренировок (крупные эффекты, умеренная уверенность). Для показателей мобильности — подъём со стула, timed up and go — чаще лидировал сывороточный белок с многокомпонентными тренировками.",
      en: " A network meta-analysis of 235 randomized trials (20,980 untrained older adults) compared protein sources with resistance, aerobic, or multicomponent training. Whey plus resistance training ranked best for muscle mass and leg strength (large effects, moderate certainty). For mobility outcomes such as chair rise and timed up and go, whey plus multicomponent training often ranked highest.",
    },
    means: {
      ru: " Для пожилых без регулярных тренировок практичный ориентир — силовая или многокомпонентная нагрузка и достаточный белок, часто в форме удобного сывороточного источника. Это обобщение исследований, а не назначение добавок «всем подряд».",
      en: " For previously untrained older adults, a practical pattern is resistance or multicomponent training plus adequate protein, often as a convenient whey source. This is a research synthesis, not a prescription of supplements for everyone.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42124009/",
    sourceKind: "meta",
  },
  {
    id: "exercise-hba1c-dose",
    category: "training",
    date: "2026-10-02",
    dateLabel: { ru: "2 октября 2026", en: "2 October 2026" },
    title: {
      ru: "При СД2 основная польза тренировок для HbA1c набирается около 600 MET-мин/неделю",
      en: "In type 2 diabetes, most exercise benefit for HbA1c appears around 600 MET-min/week",
    },
    happened: {
      ru: " Систематический обзор с сетевым и дозозависимым метаанализом включил 127 рандомизированных исследований и 8744 взрослых с сахарным диабетом 2-го типа. По снижению HbA1c выше ранжировались комбинированные mind-body силовые схемы и HIIT. Дозовая кривая была L-образной: основная клиническая польза достигалась около 600 MET-мин/неделю (средняя разница −0,57%), а после примерно 1000 MET-мин/неделю прирост эффекта заметно ослабевал.",
      en: " A systematic review with network and dose-response meta-analyses included 127 randomized trials and 8,744 adults with type 2 diabetes. Combined mind-body resistance formats and HIIT ranked highest for HbA1c reduction. The dose curve was L-shaped: most clinical benefit appeared around 600 MET-min/week (mean difference −0.57%), with diminishing returns beyond roughly 1,000 MET-min/week.",
    },
    means: {
      ru: " Регулярность и достижение умеренного недельного объёма важнее погони за экстремальными объёмами. Выбор формата (в том числе HIIT) должен учитывать безопасность, сопутствующие болезни и переносимость.",
      en: " Consistency and reaching a moderate weekly volume matter more than chasing extreme volumes. Modality choice, including HIIT, still depends on safety, comorbidities, and tolerance.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42310699/",
    sourceKind: "meta",
  },
  {
    id: "protein-meal-frequency",
    category: "training",
    date: "2026-09-28",
    dateLabel: { ru: "28 сентября 2026", en: "28 September 2026" },
    title: {
      ru: "Три или пять белковых приёмов в день одинаково поддерживали рост силы и массы",
      en: "Three or five high-protein meals a day supported similar strength and mass gains",
    },
    happened: {
      ru: " В рандомизированном исследовании 32 молодых мужчин с опытом силовых тренировок сравнили распределение белка на три или пять приёмов с порцией больше 0,24 г/кг при одинаковом суточном белке. За 8 недель обе группы увеличили тощую массу, площадь сечения vastus lateralis и силу разгибания колена без значимых различий между схемами распределения.",
      en: " In a randomized study of 32 young resistance-trained men, protein was distributed across three or five meals above 0.24 g/kg per meal with similar daily totals. Over 8 weeks both groups increased lean mass, vastus lateralis cross-sectional area, and knee-extension strength, with no meaningful between-group differences.",
    },
    means: {
      ru: " При достаточном суточном белке и нормальной калорийности дробление на 3 или 5 «белковых» приёмов не выглядит критичным для набора силы и массы у тренированных молодых мужчин. Удобство рациона важнее жёсткого числа приёмов.",
      en: " With adequate daily protein and energy intake, splitting intake into three versus five high-protein meals does not appear critical for mass and strength gains in trained young men. Practical meal patterns matter more than a rigid feeding count.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/40673785/",
    sourceKind: "pubmed",
  },
];
