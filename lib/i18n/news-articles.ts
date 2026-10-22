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
    id: "mstep-concussion",
    category: "medicine",
    date: "2026-10-19",
    featured: true,
    dateLabel: { ru: "19 октября 2026", en: "19 October 2026" },
    title: {
      ru: "Дистанционная аэробная программа ускорила восстановление после сотрясения у подростков",
      en: "A remote aerobic program sped recovery after concussion in adolescents",
    },
    happened: {
      ru: " В рандомизированном исследовании MSTEP 210 подростков 11–18 лет (средний возраст 15,1 года, в среднем 73 дня после травмы) шесть недель сравнивали дистанционную аэробную программу и контроль с растяжкой при одинаковых еженедельных видеоконсультациях. Нагрузку начинали с 60% от максимальной частоты сердечных сокращений и постепенно увеличивали. К 3 месяцам в группе аэробной программы симптомы были ниже (β −3,15; 95% ДИ −6,05…−0,25), а качество жизни выше (β 4,15; 95% ДИ 0,64–7,66). К 6 месяцам различия между группами исчезли, но скорость снижения симптомов была выше при аэробной программе. Выигрыш по симптомам и качеству жизни был у тех, кто начал раньше чем через 3 месяца после травмы.",
      en: " In the MSTEP randomized trial, 210 adolescents aged 11–18 (mean age 15.1 years, mean 73 days after injury) followed a six-week remote aerobic program or a stretching control with the same weekly video visits. Exercise started at 60% of maximum heart rate and progressed gradually. At 3 months the aerobic arm had lower symptoms (β −3.15; 95% CI −6.05 to −0.25) and higher quality of life (β 4.15; 95% CI 0.64 to 7.66). Group differences were gone by 6 months, but symptoms fell faster with aerobic exercise. Symptom and quality-of-life benefits were seen in those who started less than 3 months after injury.",
    },
    means: {
      ru: " При затянувшемся восстановлении после сотрясения у подростков постепенно нарастаемая аэробная нагрузка под наблюдением может ускорять возвращение к обычной жизни, и её можно вести дистанционно. Это не разрешение тренироваться через симптомы: старт, темп и ограничения определяет врач, который ведёт травму.",
      en: " For adolescents with prolonged concussion recovery, supervised aerobic exercise that progresses gradually may speed return to usual life, and it can be delivered remotely. It is not permission to train through symptoms: when to start, how fast to progress, and what to avoid stay with the clinician managing the injury.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42895728/",
    sourceKind: "pubmed",
  },
  {
    id: "flow-sema-ckd-safety",
    category: "medicine",
    date: "2026-10-20",
    dateLabel: { ru: "20 октября 2026", en: "20 October 2026" },
    title: {
      ru: "В FLOW серьёзные нежелательные явления на семаглутиде не участились при более низкой функции почек",
      en: "In FLOW, serious adverse events on semaglutide were not more common at lower kidney function",
    },
    happened: {
      ru: " Заранее запланированный разбор безопасности исследования FLOW охватил 3533 взрослых с сахарным диабетом 2-го типа и хронической болезнью почек: семаглутид 1,0 мг подкожно раз в неделю против плацебо. Серьёзные нежелательные явления встречались реже на семаглутиде при разной исходной СКФ: 45,1% против 50,4% при СКФ ≥60 мл/мин/1,73 м² и 56,4% против 60,4% при СКФ <30. Отмена из-за любых нежелательных явлений росла при более низкой СКФ почти одинаково в обеих группах (при СКФ ≥60 — 11,2% и 11,3%; при СКФ <30 — 18,8% и 18,7%). Отмена именно из-за желудочно-кишечных явлений была чаще на семаглутиде: 4,5% против 1,1%, без явной зависимости от исходной СКФ.",
      en: " A prespecified safety analysis of FLOW included 3,533 adults with type 2 diabetes and chronic kidney disease assigned to semaglutide 1.0 mg once weekly or placebo. Serious adverse events were less frequent with semaglutide across baseline eGFR: 45.1% vs 50.4% at eGFR ≥60 mL/min/1.73 m² and 56.4% vs 60.4% at eGFR <30. Discontinuation for any adverse event rose as eGFR fell, and did so similarly in both arms (eGFR ≥60: 11.2% and 11.3%; eGFR <30: 18.8% and 18.7%). Discontinuation specifically for gastrointestinal events was more common with semaglutide, 4.5% vs 1.1%, without a clear dependence on baseline eGFR.",
    },
    means: {
      ru: " Для людей с СД2 и ХБП этот разбор не показывает нового сигнала опасности семаглутида по мере снижения СКФ, но желудочно-кишечная непереносимость остаётся частой причиной отмены. Дозу и наблюдение по-прежнему определяют клиника и инструкция, а не один сводный анализ безопасности.",
      en: " For people with type 2 diabetes and CKD, this analysis does not show a new safety signal for semaglutide as eGFR falls, but gastrointestinal intolerance remains a common reason to stop. Dose and monitoring still follow the clinical picture and the product label, not one pooled safety table.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42901325/",
    sourceKind: "pubmed",
  },
  {
    id: "metabolic-health-cvd",
    category: "medicine",
    date: "2026-10-17",
    dateLabel: { ru: "17 октября 2026", en: "17 October 2026" },
    title: {
      ru: "Для риска сердечно-сосудистых болезней метаболическое здоровье оказалось не слабее ИМТ",
      en: "For cardiovascular risk, metabolic health was at least as informative as BMI",
    },
    happened: {
      ru: " Метаанализ 44 когортных исследований сравнил сочетания индекса массы тела и метаболического здоровья. Относительно людей с нормальным весом и сохранным метаболическим здоровьем у людей с ожирением и нарушенным метаболизмом риск был выше: сердечно-сосудистые болезни — ОР 2,10 (95% ДИ 1,85–2,40), ишемическая болезнь сердца — 1,97 (1,71–2,27), инфаркт — 2,20 (1,75–2,76), инсульт — 1,55 (1,38–1,78), сердечная недостаточность — 2,05 (1,65–2,54). Риск у людей с нормальным весом, но нарушенным метаболизмом часто превышал риск у людей с ожирением без таких нарушений. Для инсульта ведущим фактором выглядело метаболическое здоровье.",
      en: " A meta-analysis of 44 cohort studies compared combinations of body mass index and metabolic health. Versus metabolically healthy normal weight, metabolically unhealthy obesity carried higher risk: cardiovascular disease HR 2.10 (95% CI 1.85–2.40), coronary heart disease 1.97 (1.71–2.27), myocardial infarction 2.20 (1.75–2.76), stroke 1.55 (1.38–1.78), and heart failure 2.05 (1.65–2.54). Risk in metabolically unhealthy normal weight often exceeded risk in metabolically healthy obesity. For stroke, metabolic health looked like the main driver.",
    },
    means: {
      ru: " Одна цифра веса плохо описывает риск. Давление, липиды, глюкоза и окружность талии дают более содержательную картину. Это наблюдательные данные: они не показывают, насколько изменится риск у конкретного человека, если сдвинуть один показатель.",
      en: " A single weight number describes risk poorly. Blood pressure, lipids, glucose, and waist circumference give a fuller picture. These are observational data: they do not show how much one person's risk would change if a single marker moved.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42892649/",
    sourceKind: "meta",
  },
  {
    id: "protein-microbiota-active",
    category: "nutrition",
    date: "2026-10-20",
    dateLabel: { ru: "20 октября 2026", en: "20 October 2026" },
    title: {
      ru: "У физически активных белок менял состав микробиоты неоднозначно",
      en: "In physically active people, protein shifted the gut microbiota in mixed directions",
    },
    happened: {
      ru: " Систематический обзор и метаанализ 18 исследований (819 участников) оценил связь потребления белка с кишечной микробиотой у физически активных людей. Индексы разнообразия Шеннона и Chao1 были выше, индексы Симпсона и число OTU — нет. Метарегрессия описала U-образную связь дозы с эффектом на α-разнообразие: нижняя точка подобранной кривой пришлась на 1,5–2,0 г/кг/сутки. Одновременно снижались Actinobacteria, Bifidobacterium, Firmicutes и отношение Firmicutes/Bacteroidetes, а доля Bacteroidetes росла.",
      en: " A systematic review and meta-analysis of 18 studies (819 participants) assessed protein intake and gut microbiota in physically active people. Shannon and Chao1 diversity were higher; the Simpson index and observed OTUs were not. Meta-regression described a U-shaped link between dose and the α-diversity effect, with the fitted curve lowest at 1.5–2.0 g/kg/day. At the same time Actinobacteria, Bifidobacterium, Firmicutes, and the Firmicutes/Bacteroidetes ratio were lower, while Bacteroidetes were higher.",
    },
    means: {
      ru: " Для тренирующихся это не повод ни поднимать, ни резать белок «ради микробиома». Индексы разнообразия и отдельные группы бактерий смещались в разные стороны, а работы в обзоре сильно различаются по диетам и методам анализа. Ориентир по белку по-прежнему связан с целью тренировок и общим рационом, а не с одним индексом микробиоты.",
      en: " For people who train, this is not a reason to raise or cut protein for the microbiome. Diversity indices and specific bacterial groups moved in different directions, and the included studies differ in diets and lab methods. Protein targets still follow training goals and the overall diet, not one microbiota index.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42896859/",
    sourceKind: "meta",
  },
  {
    id: "protein-autophagy-blood",
    category: "nutrition",
    date: "2026-09-01",
    dateLabel: { ru: "1 сентября 2026", en: "1 September 2026" },
    title: {
      ru: "Снижение белка с 20% до 10% энергии не усилило аутофагию в крови здоровых взрослых",
      en: "Cutting protein from 20% to 10% of energy did not raise autophagy in healthy adults' blood",
    },
    happened: {
      ru: " В перекрёстном рандомизированном исследовании 74 здоровых взрослых (63 завершили оба периода; средний возраст 29,5 года, ИМТ 24,0) по 4 недели ели рацион с 20% или 10% энергии из белка при сохранении энергобаланса; между периодами была отмывка 4 недели. Поток аутофагии в клетках крови не изменился (скорректированная разница −8,46 нг LC3B-II/мг белка/ч; 95% ДИ −24,06…7,14; p = 0,28). Мочевина была ниже на низкобелковом рационе, то есть диеты действительно различались. Небольшие сдвиги веса и мышечной массы были; жировая масса, глюкоза, инсулин, липиды, давление и качество жизни не различались.",
      en: " In a randomized crossover trial, 74 healthy adults (63 completed both periods; mean age 29.5 years, BMI 24.0) ate 20% or 10% of energy from protein for 4 weeks each, with energy balance held and a 4-week washout. Autophagic flux in blood cells did not change (adjusted difference −8.46 ng LC3B-II/mg protein/h; 95% CI −24.06 to 7.14; p = 0.28). Urea was lower on the reduced-protein diet, so the diets did separate. Small shifts in weight and muscle mass appeared; fat mass, glucose, insulin, lipids, blood pressure, and quality of life did not differ.",
    },
    means: {
      ru: " Идея урезать белок, чтобы «включить аутофагию», в этом исследовании не подтвердилась: умеренное снижение белка без дефицита калорий не разогнало аутофагию в иммунных клетках крови. Это измерение не в мышцах и не в печени и не аргумент менять белок людям другого возраста или с другими клиническими задачами.",
      en: " The idea of cutting protein to switch on autophagy was not supported here: a moderate protein reduction without a calorie deficit did not raise autophagy in circulating immune cells. The assay was not in muscle or liver, and it is not a reason to change protein intake for people of a different age or with different clinical needs.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42721581/",
    sourceKind: "pubmed",
  },
  {
    id: "exercise-timing-glucose",
    category: "training",
    date: "2026-10-20",
    dateLabel: { ru: "20 октября 2026", en: "20 October 2026" },
    title: {
      ru: "Время суток тренировки почти не различало кардиометаболические показатели",
      en: "Time of day for exercise barely separated cardiometabolic markers",
    },
    happened: {
      ru: " Метаанализ 12 рандомизированных исследований (879 взрослых) сравнил контролируемые тренировки длительностью от 2 недель в разное время суток. Авторы связывают более поздние занятия с небольшим снижением глюкозы натощак относительно более ранних (средняя разница 0,16 ммоль/л; 95% ДИ 0,03–0,29; неоднородность около нуля). Для HbA1c, инсулина натощак, HOMA-IR, липидов, систолического и диастолического давления, ИМТ и жировой массы устойчивого преимущества одного времени суток не было. Уверенность доказательств по исходам — от очень низкой до умеренной.",
      en: " A meta-analysis of 12 randomized trials (879 adults) compared supervised exercise of at least 2 weeks performed at different times of day. The authors link later-day sessions with a small reduction in fasting glucose versus earlier sessions (mean difference 0.16 mmol/L; 95% CI 0.03 to 0.29; heterogeneity near zero). HbA1c, fasting insulin, HOMA-IR, lipids, systolic and diastolic blood pressure, BMI, and fat mass showed no consistent advantage for one time of day. Certainty ranged from very low to moderate.",
    },
    means: {
      ru: " Перестраивать неделю под «идеальный час тренировки» пока незачем. Небольшая разница по глюкозе натощак не повторилась на других маркерах. Важнее регулярность и то, что нагрузку реально получается выполнять, чем перенос занятия с утра на вечер или наоборот.",
      en: " Rebuilding the week around an ideal training hour is not justified yet. The small fasting-glucose difference did not show up in the other markers. Consistency, and a time when the session actually happens, matters more than moving it from morning to evening or the reverse.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42901123/",
    sourceKind: "meta",
  },
  {
    id: "rt-osa-sleep",
    category: "training",
    date: "2026-10-20",
    dateLabel: { ru: "20 октября 2026", en: "20 October 2026" },
    title: {
      ru: "Восемь недель силовых тренировок улучшили субъективный сон при апноэ, но не дневную сонливость",
      en: "Eight weeks of resistance training improved subjective sleep in apnea, not daytime sleepiness",
    },
    happened: {
      ru: " Вторичный анализ рандомизированного исследования включил 25 взрослых с умеренным и тяжёлым апноэ сна без предшествующего лечения (средний возраст 54,6 года, ИМТ 36,1, индекс апноэ–гипопноэ 52,2 события/час). Силовые тренировки трижды в неделю, восемь упражнений на верх и низ тела, сравнили с растяжкой дважды в неделю по 30 минут. За 8 недель общий балл Питтсбургского индекса в группе силовых снизился с 7,9±0,9 до 4,8±0,8, а при растяжке почти не изменился (с 6,9±1,1 до 6,6±1,1; p взаимодействия = 0,004). Шкала сонливости Эпворта между группами не разошлась. Общий балл SF-36 изменился на +10,8±3,3 против −3,4±3,1 (p = 0,002). Сдвиг по домену снотворных шёл за счёт роста балла в группе растяжки, а не за счёт отказа от препаратов на силовых.",
      en: " A secondary analysis of a randomized trial included 25 adults with untreated moderate to severe obstructive sleep apnea (mean age 54.6 years, BMI 36.1, apnea–hypopnea index 52.2 events/hour). Resistance training three times a week, eight upper- and lower-body exercises, was compared with stretching twice a week for 30 minutes. Over 8 weeks the Pittsburgh index fell from 7.9±0.9 to 4.8±0.8 with resistance training and was nearly unchanged with stretching (6.9±1.1 to 6.6±1.1; interaction p = 0.004). The Epworth Sleepiness Scale did not differ between groups. The SF-36 global score changed by +10.8±3.3 versus −3.4±3.1 (p = 0.002). The sleep-medication domain shift was driven by a higher score in the stretching arm, not by people on resistance training stopping medication.",
    },
    means: {
      ru: " Силовая нагрузка может улучшать то, как человек с апноэ оценивает сон и качество жизни, но выборка маленькая, а дневная сонливость не изменилась. Это не замена лечению апноэ. Добавлять тренировки имеет смысл только если они переносимы и согласованы с уже назначенной терапией.",
      en: " Resistance training may improve how a person with apnea rates sleep and quality of life, but the sample is small and daytime sleepiness did not change. It does not replace apnea treatment. Adding training makes sense only when it is tolerated and fits therapy already prescribed.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42900248/",
    sourceKind: "pubmed",
  },
];
