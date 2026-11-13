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
    id: "tirzepatide-resistance",
    category: "training",
    date: "2026-11-09",
    featured: true,
    dateLabel: { ru: "9 ноября 2026", en: "9 November 2026" },
    title: {
      ru: "Силовые тренировки на фоне тирзепатида уменьшили потерю тощей массы и развернули спад силы",
      en: "Resistance training during tirzepatide reduced lean-mass loss and reversed the drop in strength",
    },
    happened: {
      ru: " В открытом рандомизированном исследовании 120 взрослых с избыточным весом или ожирением 40 недель получали тирзепатид (у большинства — с титрацией до 15 мг в неделю) плюс силовые тренировки трижды в неделю или обычную активность. Потеря веса и жира не различалась: −22,61 кг против −22,28 кг (p = 0,694) и −17,19 кг против −17,98 кг (разница −0,77 кг; 95% ДИ −2,14 до 0,60). Тощая масса снизилась меньше при тренировках: −3,57 кг против −4,67 кг (разница 1,09 кг; 95% ДИ 0,43–1,75). Без тренировок сила в жиме лёжа, тяге верхнего блока и разгибании колена упала на 4,09, 4,42 и 4,42 кг, а с тренировками выросла на 4,68, 8,58 и 5,88 кг. Приверженность тренировкам — 91%.",
      en: " In an open-label randomized trial, 120 adults with overweight or obesity took tirzepatide for 40 weeks (most titrated to 15 mg weekly) and were assigned to thrice-weekly resistance training or usual activity. Weight and fat loss did not differ: −22.61 vs −22.28 kg (P = 0.694) and −17.19 vs −17.98 kg (difference −0.77 kg; 95% CI −2.14 to 0.60). Lean soft-tissue loss was smaller with training: −3.57 vs −4.67 kg (difference 1.09 kg; 95% CI 0.43 to 1.75). Without training, bench press, lat pulldown, and knee extension fell by 4.09, 4.42, and 4.42 kg; with training they rose by 4.68, 8.58, and 5.88 kg. Training adherence was 91%.",
    },
    means: {
      ru: " На фоне тирзепатида силовые тренировки не отменили потерю веса и жира, но сократили потерю тощей массы примерно на 1 кг и сменили спад силы на прирост. Это один контролируемый опыт: нагрузку и препарат согласуют с теми, кто ведёт лечение. Контролем была обычная активность, а не тренировочное плацебо.",
      en: " Alongside tirzepatide, resistance training did not cancel weight or fat loss, but it cut lean-tissue loss by about 1 kg and turned a strength decline into a gain. This is one controlled trial: training and the medicine still belong with the clinicians managing treatment. The control was usual activity, not an exercise placebo.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/43003902/",
    sourceKind: "pubmed",
  },
  {
    id: "bproad-cognition",
    category: "medicine",
    date: "2026-11-12",
    dateLabel: { ru: "12 ноября 2026", en: "12 November 2026" },
    title: {
      ru: "Интенсивный контроль давления при СД2 не снизил деменцию и умеренное когнитивное снижение",
      en: "Intensive blood-pressure control in type 2 diabetes did not reduce dementia or mild cognitive impairment",
    },
    happened: {
      ru: " В заранее заданном анализе когнитивных исходов BPROAD 12 434 взрослых 50 лет и старше с сахарным диабетом 2-го типа без вероятной деменции на старте сравнивали систолическое давление ниже 120 мм рт. ст. и ниже 140 мм рт. ст. За медиану 3,8 года деменция или умеренное когнитивное снижение возникли у 747 и 783 человек (3,69 против 3,89 на 100 человеко-лет; ОР 0,96; 95% ДИ 0,86–1,06; p = 0,38). В МРТ-подвыборке (428 против 434) прирост объёма поражений белого вещества был меньше при интенсивной цели (разница −0,09 в asinh-преобразованных см³; 95% ДИ −0,15 до −0,02; p = 0,01). Через год среднее давление было 121,6 против 133,2 мм рт. ст.",
      en: " In a prespecified cognitive analysis of BPROAD, 12,434 adults aged 50 or older with type 2 diabetes and no probable dementia at baseline were compared at systolic targets below 120 mm Hg versus below 140 mm Hg. Over a median 3.8 years, dementia or mild cognitive impairment occurred in 747 versus 783 people (3.69 vs 3.89 per 100 person-years; HR 0.96; 95% CI 0.86 to 1.06; P = 0.38). In the MRI subset (428 vs 434), white-matter lesion volume increased less with the intensive target (difference −0.09 asinh-transformed cm³; 95% CI −0.15 to −0.02; P = 0.01). At one year, mean pressure was 121.6 versus 133.2 mm Hg.",
    },
    means: {
      ru: " Более жёсткая цель давления в этом анализе не уменьшила новые случаи деменции или умеренного когнитивного снижения примерно за четыре года. Меньший прирост изменений белого вещества — различие на снимках, а не доказательство, что интенсивный контроль сохраняет память. Цель давления по-прежнему подбирают индивидуально, с учётом переносимости и других рисков.",
      en: " In this analysis a tighter blood-pressure target did not reduce new dementia or mild cognitive impairment over about four years. Less growth in white-matter lesions is an imaging difference, not proof that intensive control preserves memory. The pressure target still has to be chosen individually, with tolerability and other risks in mind.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/43020520/",
    sourceKind: "pubmed",
  },
  {
    id: "courage-myostatin",
    category: "medicine",
    date: "2026-11-11",
    dateLabel: { ru: "11 ноября 2026", en: "11 November 2026" },
    title: {
      ru: "Антитело к миостатину в фазе 2 уменьшило потерю тощей массы на фоне семаглутида",
      en: "A myostatin antibody reduced lean-mass loss during semaglutide in a phase 2 trial",
    },
    happened: {
      ru: " В фазе 2 COURAGE взрослым с ожирением к семаглутиду (до 2,4 мг в неделю) добавляли антитело к миостатину тревогрумаб, его сочетание с антителом к активину A или плацебо. В части A к 26-й неделе тощая масса на семаглутиде с плацебо снизилась на 6,6% (95% ДИ −7,4 до −5,7); разница против этого составила +3,1% для тревогрумаба 200 мг, +2,7% для 400 мг и +4,5% для комбинации. В части B к 52-й неделе снижение на плацебо было 7,3%; для 75 мг разница +3,1% (95% ДИ 1,3–4,9), для 25 мг интервал пересекал ноль. Комбинация чаще давала серьёзные нежелательные явления (14 из 149) и отмены (48 из 149); мышечные спазмы — у 41% против 8% на одном тревогрумабе и 5% на плацебо. Две смерти были в группе комбинации, причинную связь не установили. Исследование финансировал Regeneron.",
      en: " In phase 2 COURAGE, adults with obesity received semaglutide (titrated to 2.4 mg weekly) plus the myostatin antibody trevogrumab, trevogrumab plus an activin A antibody, or placebo. In part A, lean mass on semaglutide plus placebo fell 6.6% by week 26 (95% CI −7.4 to −5.7); the difference versus that arm was +3.1% with trevogrumab 200 mg, +2.7% with 400 mg, and +4.5% with the combination. In part B, the placebo-arm decline at week 52 was 7.3%; the difference was +3.1% (95% CI 1.3 to 4.9) with 75 mg, while the interval for 25 mg crossed zero. The combination had more serious adverse events (14 of 149) and discontinuations (48 of 149); muscle spasms occurred in 41%, versus 8% on trevogrumab alone and 5% on placebo. Two deaths occurred in the combination arm; a causal link was not established. Regeneron funded the trial.",
    },
    means: {
      ru: " Это доказательство концепции, а не схема лечения: антитела к миостатину не являются доступной рекомендацией, чтобы «сохранить мышцы» при похудении. Добавление блокады активина A сильнее меняло состав тела, но переносимость была хуже, а сохранение физической функции не показано. На практике остаются силовая нагрузка, достаточный белок и наблюдение врача.",
      en: " This is proof of concept, not a treatment plan: myostatin antibodies are not an available recommendation for “keeping muscle” during weight loss. Adding activin A blockade changed body composition further, but tolerability was worse, and preservation of physical function was not shown. In practice, resistance training, adequate protein, and clinician follow-up remain the tools that are actually in use.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/43014326/",
    sourceKind: "pubmed",
  },
  {
    id: "single-pill-hypertension",
    category: "medicine",
    date: "2026-11-08",
    dateLabel: { ru: "8 ноября 2026", en: "8 November 2026" },
    title: {
      ru: "Комбинированная таблетка вместе с командной помощью сильнее снизила давление в поликлиниках",
      en: "A single-pill combination plus team-based care lowered blood pressure more in primary care",
    },
    happened: {
      ru: " В кластерном исследовании 40 поликлиник Колумбии и Ямайки 1706 взрослых с неконтролируемой гипертензией сравнивали обычную помощь и пакет: препарат в одной таблетке плюс командную работу (обучение врача и медсестры, коучинг, домашнее измерение давления и разбор показателей). За 18 месяцев систолическое давление снизилось на 19,1 мм рт. ст. (со 145,9 до 126,8) против 9,0 мм рт. ст. (со 145,0 до 136,1); разница −10,1 мм рт. ст. (95% ДИ −13,3 до −6,9). Цель «ниже 130 и ниже 80» достигли 69,5% против 29,2%. Смерть и госпитализации встречались сходно: 7,9% против 9,9%. В первичном анализе было 1574 человека.",
      en: " In a cluster trial at 40 primary-care clinics in Colombia and Jamaica, 1,706 adults with uncontrolled hypertension were assigned to usual care or to a package of single-pill combination therapy plus team-based care (physician and nurse training, coaching, home blood-pressure monitoring, and audit). Over 18 months systolic pressure fell by 19.1 mm Hg (145.9 to 126.8) versus 9.0 mm Hg (145.0 to 136.1); difference −10.1 mm Hg (95% CI −13.3 to −6.9). A target below 130 and below 80 mm Hg was reached by 69.5% versus 29.2%. Deaths and hospitalizations were similar: 7.9% versus 9.9%. The primary analysis included 1,574 people.",
    },
    means: {
      ru: " Выигрыш относится ко всему пакету организации помощи, а не к одной таблетке отдельно от сопровождения. Для человека с гипертензией это довод в пользу схемы, которую реально принимают, и регулярного контроля давления вместе с лечащим врачом, а не повод менять препараты самостоятельно.",
      en: " The benefit belongs to the whole package of how care was organized, not to a combination pill separated from support. For a person with hypertension it is an argument for a regimen they can actually take, and for checking pressure with their clinician, not a reason to change medicines on their own.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/43000001/",
    sourceKind: "pubmed",
  },
  {
    id: "protein-hydration",
    category: "nutrition",
    date: "2026-11-10",
    dateLabel: { ru: "10 ноября 2026", en: "10 November 2026" },
    title: {
      ru: "Напитки с белком лучше удерживали жидкость, чем контрольный напиток",
      en: "Protein-containing drinks retained more fluid than the control beverage",
    },
    happened: {
      ru: " Систематический обзор с метаанализом включил 16 исследований (205 взрослых, 17% женщин; в 14 работах участников сначала доводили до дефицита жидкости). Напитки содержали в среднем 23,7 г белка на литр. По сравнению с контрольным напитком белковые варианты лучше удерживали жидкость (SMD 0,66; 95% ДИ 0,39–0,93), давали меньше суммарной мочи (SMD −0,71; 95% ДИ −0,99 до −0,43) и более высокий чистый баланс жидкости (SMD 0,58; 95% ДИ 0,30–0,85). Сдвиг объёма плазмы был небольшим (SMD 0,29; 95% ДИ 0,03–0,55).",
      en: " A systematic review and meta-analysis included 16 trials (205 adults, 17% women; 14 trials first brought participants into a fluid deficit). Drinks contained a mean 23.7 g of protein per liter. Compared with a control beverage, protein drinks retained more fluid (SMD 0.66; 95% CI 0.39 to 0.93), produced less cumulative urine (SMD −0.71; 95% CI −0.99 to −0.43), and gave a higher net fluid balance (SMD 0.58; 95% CI 0.30 to 0.85). The plasma-volume shift was small (SMD 0.29; 95% CI 0.03 to 0.55).",
    },
    means: {
      ru: " В этих работах белок в напитке помогал удержать больше жидкости, чем использованный контроль. Это не замена воды и натрия и не повод пить белковый коктейль после каждой тренировки: выборок мало, женщин мало, растительные напитки почти не представлены. У части авторов есть связи с производителями напитков и добавок.",
      en: " In these trials, protein in the drink helped retain more fluid than the control that was used. It does not replace water and sodium, and it is not a reason to drink a protein shake after every session: samples are small, women are few, and plant-based drinks are barely represented. Some authors report ties to beverage and supplement makers.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/43007647/",
    sourceKind: "meta",
  },
  {
    id: "fibre-protein-bread",
    category: "nutrition",
    date: "2026-11-04",
    dateLabel: { ru: "4 ноября 2026", en: "4 November 2026" },
    title: {
      ru: "Хлеб с клетчаткой и белком немного улучшил глюкозу при СД2 за две недели",
      en: "Higher-fibre, higher-protein bread modestly improved glucose in type 2 diabetes over two weeks",
    },
    happened: {
      ru: " В перекрёстном исследовании 33 взрослых с сахарным диабетом 2-го типа (завершили 31) две недели ели хлеб с клетчаткой 8,1 г и белком 19,5 г на 100 г либо обычный хлеб (2,9 г и 10,4 г на 100 г), затем меняли продукт. Калорийность была сопоставима, клетчатки и белка на обогащённом хлебе было больше. По непрерывному мониторингу время в целевом диапазоне выросло на 4,1 процентного пункта (95% ДИ 2,2–6,1), время выше диапазона снизилось на 4,3 п.п. (95% ДИ −6,3 до −2,4), вариабельность CONGA — на 0,4 (95% ДИ −0,5 до −0,2). Первичная приростная площадь под кривой глюкозы по всем приёмам пищи тоже была ниже (разница −21; 95% ДИ −39 до −3). Систолическое и диастолическое давление снизились на 7,2 мм рт. ст. Вес, липиды и С-реактивный белок не различались.",
      en: " In a crossover trial, 33 adults with type 2 diabetes (31 completed) ate bread with 8.1 g of fibre and 19.5 g of protein per 100 g, or usual bread (2.9 g and 10.4 g per 100 g), for two weeks, then switched. Energy intake was similar; fibre and protein intake were higher on the fortified bread. On continuous monitoring, time in range rose by 4.1 percentage points (95% CI 2.2 to 6.1), time above range fell by 4.3 points (95% CI −6.3 to −2.4), and CONGA variability fell by 0.4 (95% CI −0.5 to −0.2). The primary all-meal glucose incremental area was also lower (difference −21; 95% CI −39 to −3). Systolic and diastolic pressure each fell by 7.2 mm Hg. Weight, lipids, and C-reactive protein did not differ.",
    },
    means: {
      ru: " Замена одного привычного продукта на вариант побогаче клетчаткой и белком может немного сгладить глюкозу за две недели. Это короткий опыт одного хлеба, а не диета и не повод менять сахароснижающие препараты. Падение давления за такой срок нуждается в подтверждении: состав рациона в целом важнее одного продукта.",
      en: " Swapping one everyday food for a higher-fibre, higher-protein version may smooth glucose a little over two weeks. This is a short trial of one bread, not a diet and not a reason to change glucose-lowering medicines. A blood-pressure drop over that span needs confirmation: the overall diet matters more than a single product.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42982610/",
    sourceKind: "pubmed",
  },
  {
    id: "instability-rt-mci",
    category: "training",
    date: "2026-11-07",
    dateLabel: { ru: "7 ноября 2026", en: "7 November 2026" },
    title: {
      ru: "Силовые на неустойчивой опоре улучшили отдельные тесты при вероятном когнитивном снижении",
      en: "Unstable-surface resistance training improved selected tests in probable cognitive impairment",
    },
    happened: {
      ru: " В исследовании 162 человека 65 лет и старше с вероятным умеренным когнитивным снижением (средний MoCA 20,1) 24 недели дважды в неделю выполняли семь силовых упражнений на неустойчивой опоре, 3 подхода по 10–15 повторений, либо низкоинтенсивные упражнения без прогрессии и растяжку. К 24-й неделе лучше были называние слов на букву A (+1,2; 95% ДИ 0,2–2,2) и прямой цифровой ряд (+0,7 балла; 95% ДИ 0,1–1,3). По остальным тестам памяти и управляющих функций значимой разницы между группами не было.",
      en: " In a trial of 162 adults aged 65 or older with probable mild cognitive impairment (mean MoCA 20.1), participants spent 24 weeks doing seven resistance exercises on an unstable surface twice weekly, 3 sets of 10–15 repetitions, or low-intensity non-progressive exercise and stretching. At 24 weeks, letter-A verbal fluency (+1.2; 95% CI 0.2 to 2.2) and forward digit span (+0.7 points; 95% CI 0.1 to 1.3) were better with unstable resistance training. The other memory and executive tests showed no significant between-group difference.",
    },
    means: {
      ru: " Прогрессивная силовая работа может чуть улучшить отдельные показатели управляющих функций у пожилых с вероятным когнитивным снижением. Это не профилактика деменции: эффект узкий, а контроль был заметно легче, поэтому вклад именно неустойчивой опоры, а не самой силовой нагрузки, не отделён.",
      en: " Progressive resistance work may slightly improve selected executive measures in older adults with probable cognitive impairment. It is not dementia prevention: the effect is narrow, and the control was much lighter, so the contribution of the unstable surface itself is not separated from resistance training.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42998615/",
    sourceKind: "pubmed",
  },
];
