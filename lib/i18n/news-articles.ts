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
  sourceKind: "pubmed" | "cochrane" | "meta" | "mass";
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "achieve4-orforglipron",
    category: "medicine",
    date: "2026-10-17",
    featured: true,
    dateLabel: { ru: "17 октября 2026", en: "17 October 2026" },
    title: {
      ru: "Пероральный орфорглипрон не уступил инсулину гларгин по сердечно-сосудистой безопасности при СД2",
      en: "Oral orforglipron was non-inferior to insulin glargine for cardiovascular safety in type 2 diabetes",
    },
    happened: {
      ru: " В открытом исследовании ACHIEVE-4 фазы 3 сравнивали пероральный непептидный агонист GLP-1 орфорглипрон и титруемый инсулин гларгин у взрослых с сахарным диабетом 2-го типа, ИМТ от 25 кг/м² и уже установленным сердечно-сосудистым или хроническим заболеванием почек. Рандомизировали 2 749 человек. За медиану наблюдения около 2 лет точка MACE-4 (сердечно-сосудистая смерть, нефатальные инфаркт или инсульт, госпитализация из-за нестабильной стенокардии) возникла у 4,2% на орфорглипроне и у 5,0% на гларгине (ОР 0,84; 95% ДИ 0,59–1,20). Неуступание было задано широкой границей: верх ДИ ниже 1,8. Желудочно-кишечные явления были чаще на орфорглипроне (62,1% против 14,2%), клинически значимая гипогликемия ниже 3 ммоль/л — реже (6,8% против 19,2%). Спонсор — Eli Lilly.",
      en: " ACHIEVE-4, an open-label phase 3 trial, compared the oral non-peptide GLP-1 agonist orforglipron with titrated insulin glargine in adults with type 2 diabetes, BMI of at least 25 kg/m², and established cardiovascular or chronic kidney disease. Of 2,749 people randomized, over a median of about 2 years the MACE-4 outcome (cardiovascular death, nonfatal myocardial infarction or stroke, or hospitalization for unstable angina) occurred in 4.2% with orforglipron and 5.0% with glargine (HR 0.84; 95% CI 0.59–1.20). Non-inferiority used a wide margin: the upper CI bound had to be below 1.8. Gastrointestinal events were more common with orforglipron (62.1% vs 14.2%); clinically significant hypoglycemia below 3 mmol/L was less common (6.8% vs 19.2%). The sponsor was Eli Lilly.",
    },
    means: {
      ru: " Это сравнение безопасности с базальным инсулином, а не доказательство, что препарат снижает события лучше плацебо или других GLP-1. Широкий порог неуступания не позволяет читать цифры 4,2% и 5,0% как выигрыш. Переносимость со стороны желудка и уже назначенные сахароснижающие лекарства по-прежнему решают выбор схемы индивидуально.",
      en: " This is a safety comparison with basal insulin, not evidence that the drug reduces events more than placebo or other GLP-1 medicines. The wide non-inferiority margin does not turn 4.2% versus 5.0% into a proven win. Stomach tolerability and medicines already in use still decide the regimen for each person.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42815506/",
    sourceKind: "pubmed",
  },
  {
    id: "glp1-antipsychotic-weight",
    category: "medicine",
    date: "2026-10-24",
    dateLabel: { ru: "24 октября 2026", en: "24 October 2026" },
    title: {
      ru: "Агонисты GLP-1 снизили вес у людей с избыточной массой на фоне антипсихотиков",
      en: "GLP-1 receptor agonists lowered weight in people with antipsychotic-related excess weight",
    },
    happened: {
      ru: " Метаанализ 8 рандомизированных исследований (535 участников) оценил агонисты рецептора GLP-1 у взрослых, которые получают антипсихотики и имеют избыточную массу тела с метаболическими нарушениями. В среднем вес снизился на 6,54 кг (95% ДИ −9,80 до −3,29), ИМТ — на 2,34 кг/м², HbA1c — на 0,32%, окружность талии — на 5,22 см. Общий холестерин, триглицериды и ЛПВП значимо не изменились. Тошнота, рвота и запор встречались чаще; по серьёзным нежелательным явлениям и отмене из-за них явной разницы не показано. Психиатрические исходы в исходных работах описаны слишком скупо, чтобы их объединить. Разброс по весу большой (I² = 92%).",
      en: " A meta-analysis of 8 randomized trials (535 participants) assessed GLP-1 receptor agonists in adults taking antipsychotics who had excess weight and metabolic dysregulation. Mean body weight fell by 6.54 kg (95% CI −9.80 to −3.29), BMI by 2.34 kg/m², HbA1c by 0.32%, and waist circumference by 5.22 cm. Total cholesterol, triglycerides, and HDL-C did not change significantly. Nausea, vomiting, and constipation were more common; serious adverse events and stopping for adverse events were not clearly different. Psychiatric outcomes were too sparsely reported to pool. Weight results were highly heterogeneous (I² = 92%).",
    },
    means: {
      ru: " Для части людей, у которых набор веса связан с антипсихотиками, такие препараты могут улучшать вес и гликемию. Это не повод самостоятельно менять психиатрическое лечение: данных о психиатрической безопасности мало, а наблюдения пока короткие.",
      en: " For some people whose weight gain is tied to antipsychotics, these medicines may improve weight and glycemia. That is not a reason to change psychiatric treatment on one’s own: psychiatric safety data are thin, and follow-up is still short.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42920001/",
    sourceKind: "meta",
  },
  {
    id: "glp1-bone-density",
    category: "medicine",
    date: "2026-10-23",
    dateLabel: { ru: "23 октября 2026", en: "23 October 2026" },
    title: {
      ru: "Как агонисты GLP-1 влияют на плотность кости при ожирении, по данным испытаний пока неясно",
      en: "How GLP-1 receptor agonists affect bone density in obesity is still unclear in trials",
    },
    happened: {
      ru: " Систематический обзор разобрал 8 рандомизированных исследований (493 взрослых с избыточной массой тела или ожирением) с плотностью кости по DXA и не стал сводить разные агонисты GLP-1 в один метаанализ: молекулы и величина снижения веса слишком различаются. Уверенность по каждому препарату авторы оценили как очень низкую. В двух работах с наибольшей потерей веса — семаглутид (разница около −6,8 кг к плацебо) и лираглутид 3,0 мг (около −6,7 кг) — минеральная плотность поясничного отдела была ниже, чем в контроле. При семаглутиде также вырос маркёр костной резорбции CTX. На диабетической дозе лираглутида 1,8 мг заметного сдвига плотности в цитируемом испытании не было.",
      en: " A systematic review of 8 randomized trials (493 adults with overweight or obesity) looked at DXA bone mineral density and did not pool different GLP-1 receptor agonists, because the molecules and the amount of weight loss differ too much. Certainty for every agent was rated very low. In the two trials with the largest weight loss — semaglutide (about −6.8 kg versus placebo) and liraglutide 3.0 mg (about −6.7 kg) — lumbar spine density was lower than in the control arm. The semaglutide trial also reported a rise in the resorption marker CTX. At the diabetes dose of liraglutide 1.8 mg, the cited trial found no material density change.",
    },
    means: {
      ru: " Нельзя переносить результат одного препарата на весь класс и нельзя считать вопрос о кости закрытым. При большом снижении веса по-прежнему уместны привычные опоры: силовая нагрузка, достаточный белок и обычная оценка факторов остеопороза. Это не замена решению о том, продолжать ли лекарство.",
      en: " One drug’s result cannot be applied to the whole class, and the bone question is not settled. During large weight loss, the usual supports still apply: resistance training, enough protein, and a routine look at osteoporosis risk factors. That does not replace a decision about whether to continue a medicine.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42920024/",
    sourceKind: "pubmed",
  },
  {
    id: "mass-fiber-101",
    category: "nutrition",
    date: "2026-10-12",
    dateLabel: { ru: "12 октября 2026", en: "12 October 2026" },
    title: {
      ru: "Клетчатка — часть обычного рациона, а не необязательное дополнение к БЖУ",
      en: "Fiber belongs in the usual diet, not as an optional extra beside the macros",
    },
    happened: {
      ru: " В открытом обзоре MASS от 12 октября Eric Trexler собрал практические ориентиры по пищевым волокнам. Нового испытания в материале нет: опора — уже опубликованные обзоры. У многих людей клетчатки меньше, чем в рекомендациях, а сводки литературы связывают более высокое потребление с меньшим риском кардиометаболических болезней и смертности. Нижняя планка, которую он предлагает как старт: 14 г на каждые 1 000 ккал либо 25 г в сутки для взрослых женщин и 38 г для взрослых мужчин — берут большее из двух чисел. Растворимые и нерастворимые волокна решают разные задачи, а слишком быстрый рост дозы чаще упирается в вздутие и газы.",
      en: " In a public MASS review on 12 October, Eric Trexler collected practical anchors for dietary fiber. The piece is not a new trial; it rests on reviews already published. Many people eat less fiber than recommendations, and literature summaries link higher intakes with lower risk of cardiometabolic disease and death. The floor he suggests as a starting point is 14 g per 1,000 kcal, or 25 g/day for adult women and 38 g/day for adult men — whichever number is higher. Soluble and insoluble fibers do different jobs, and raising the dose too fast more often runs into bloating and gas.",
    },
    means: {
      ru: " Для большинства взрослых разумный шаг — сначала закрыть этот минимум обычными продуктами: овощами, бобовыми, цельными крупами, орехами и семенами, добавляя их небольшими порциями. Кратко снижать клетчатку можно в узких случаях, например при элиминационной диете со специалистом или на несколько дней перед взвешиванием, но не как постоянный фон. Это общий ориентир, а не личное меню.",
      en: " For most adults, a reasonable step is to reach that floor with ordinary foods — vegetables, legumes, whole grains, nuts, and seeds — and to add them in small steps. Fiber can be cut briefly in narrow cases, such as an elimination diet with a clinician or a few days before a weigh-in, but not as the standing pattern. This is a general anchor, not a personal menu.",
    },
    sourceHref: "https://massresearchreview.com/2026/10/12/fiber-101/",
    sourceKind: "mass",
  },
  {
    id: "caffeine-placebo-performance",
    category: "nutrition",
    date: "2026-10-20",
    dateLabel: { ru: "20 октября 2026", en: "20 October 2026" },
    title: {
      ru: "Плацебо, которое назвали кофеином, само немного улучшало спортивный результат",
      en: "A placebo described as caffeine modestly improved sport performance on its own",
    },
    happened: {
      ru: " Метаанализ 17 исследований у здоровых взрослых посмотрел, что происходит, когда человеку говорят, что он получил кофеин, а дают плацебо. Сводный эффект на спортивные результаты был небольшим или умеренным (d = 0,49; 95% ДИ 0,28–0,69). Он чаще выглядел крупнее там, где исследователи были ослеплены, и в выборках с большей долей мужчин. Девять работ имели высокий риск смещения, восемь — неясный. По GRADE уверенность низкая.",
      en: " A meta-analysis of 17 studies in healthy adults looked at what happens when people are told they received caffeine but are given placebo. The pooled effect on sport performance was small to moderate (d = 0.49; 95% CI 0.28–0.69). It tended to look larger when researchers were blinded and in samples with more men. Nine studies were at high risk of bias and eight were unclear. GRADE certainty was low.",
    },
    means: {
      ru: " Часть привычного «эффекта кофеина» на тренировке может быть ожиданием, а не только действием вещества. Это не отменяет исследования самого кофеина и не повод поднимать дозу: качество испытаний слабое, а переносимость у людей разная.",
      en: " Part of the familiar “caffeine effect” in training can be expectation, not only the substance. That does not cancel research on caffeine itself, and it is not a reason to raise the dose: trial quality is weak, and tolerance differs between people.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42897966/",
    sourceKind: "meta",
  },
  {
    id: "velocity-loss-power",
    category: "training",
    date: "2026-10-06",
    dateLabel: { ru: "6 октября 2026", en: "6 October 2026" },
    title: {
      ru: "Более низкий порог потери скорости чуть лучше сохранял прыжок и спринт у тренированных",
      en: "A lower velocity-loss threshold slightly favored jumps and sprints in trained people",
    },
    happened: {
      ru: " Трёхуровневый метаанализ 12 рандомизированных исследований (42 эффекта) сравнил пороги потери скорости штанги в силовой работе у уже тренированных людей. Более низкий порог давал небольшой перевес по сумме прыжков и спринтов против более высокого (g = 0,29; 95% ДИ 0,17–0,42), почти без неоднородности. Яснее эффект был для прыжка с контрдвижением, 10 м и 30 м. Сравнение 20% против 40% потери скорости значимого перевеса не показало. Уверенность доказательств — от низкой до умеренной.",
      en: " A three-level meta-analysis of 12 randomized trials (42 effects) compared barbell velocity-loss thresholds during resistance training in already trained people. A lower threshold had a small advantage over a higher one for combined jump and sprint performance (g = 0.29; 95% CI 0.17–0.42), with almost no heterogeneity. The signal was clearer for countermovement jump and for 10 m and 30 m sprints. The 20% versus 40% comparison did not show a significant advantage. Certainty of evidence was low to moderate.",
    },
    means: {
      ru: " Если задача — скорость и мощность, подход можно чаще останавливать раньше, не доводя потерю скорости до высоких порогов. Для роста мышц и максимальной силы этот обзор ответа не даёт: он про прыжок и спринт у тренированных, а не про правило «всегда меньше повторений».",
      en: " If the goal is speed and power, sets can more often stop earlier, before velocity loss reaches a high threshold. This review does not answer hypertrophy or maximal strength: it covers jumps and sprints in trained people, not a rule to always do fewer reps.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42903080/",
    sourceKind: "meta",
  },
  {
    id: "training-time-older-adults",
    category: "training",
    date: "2026-09-25",
    dateLabel: { ru: "25 сентября 2026", en: "25 September 2026" },
    title: {
      ru: "Силовая тренировка в «лучший час суток» не усилила адаптацию у пожилых",
      en: "Resistance training at a personal best hour did not improve adaptation in older adults",
    },
    happened: {
      ru: " В рандомизированном исследовании сначала нашли индивидуальный пик и спад силы в 8:00, 12:00, 16:00 и 20:00, а затем 12 недель сравнивали тренировку в свой пик, в свой спад и привычный образ жизни без этих занятий. Из 108 рандомизированных пожилых (средний возраст 67 лет) в анализ вошли 93. Программа: две силовые сессии в неделю и одна умеренная велотренировка. Разница «пик против спада» была около нуля: тяга середины бедра 0,06 Н/кг (95% ДИ −0,76 до 0,88), без ясного сдвига силы хвата и индекса аппендикулярной тощей массы. Серьёзных нежелательных явлений, связанных с программой, не было.",
      en: " A randomized trial first found each person’s peak and trough strength at 08:00, 12:00, 16:00, and 20:00, then for 12 weeks compared training at that peak, training at that trough, and usual life without those sessions. Of 108 older adults randomized (mean age 67), 93 entered the analysis. The program was two resistance sessions a week plus one moderate cycling session. The peak-versus-trough difference was near zero: midthigh pull 0.06 N/kg (95% CI −0.76 to 0.88), with no clear shift in grip strength or appendicular lean-mass index. There were no intervention-related serious adverse events.",
    },
    means: {
      ru: " Пожилым важнее регулярная силовая работа, чем поиск одного «правильного» часа по личному пику. Время можно выбирать по сну и расписанию. Это относительно здоровые участники одного центра, и результат не переносится автоматически на людей с выраженной саркопенией или другими болезнями.",
      en: " For older adults, regular resistance training matters more than hunting for one “right” hour from a personal peak. The clock time can follow sleep and schedule. These were relatively healthy people at one center, and the result does not automatically transfer to people with marked sarcopenia or other illnesses.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42791208/",
    sourceKind: "pubmed",
  },
];
