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
    id: "pressure-map-picu",
    category: "medicine",
    date: "2026-10-27",
    featured: true,
    dateLabel: { ru: "27 октября 2026", en: "27 October 2026" },
    title: {
      ru: "Более низкая цель давления у детей в реанимации не ухудшила исход к 30-му дню",
      en: "A lower blood-pressure target in pediatric intensive care did not worsen the 30-day outcome",
    },
    happened: {
      ru: " В открытом прагматичном исследовании PRESSURE 1 900 детей на инвазивной вентиляции с гипотензией и вазопрессорами в 23 отделениях реанимации трёх стран сравнили цель по среднему артериальному давлению выше 5-го перцентиля для возраста и обычную цель врача. В анализ первичной точки вошли 910 и 904 ребёнка (медиана возраста 4 года). На вазопрессорах медиана среднего давления была 58 против 61 мм рт. ст., а суммарная доза в норэпинефриновом эквиваленте — на 37,5% ниже при более мягкой цели. Комбинированный исход к 30 дням (смерть и длительность вентиляции) не различался: вероятностный индекс 0,52 (95% ДИ 0,49–0,54; p = 0,23). Из вторичных точек у выживших короче было пребывание в реанимации (медиана 159 против 166 часов). Заместительная почечная терапия и нежелательные события не различались.",
      en: " In the unblinded pragmatic PRESSURE trial, 1,900 ventilated children with hypotension on vasoactive drugs in 23 intensive-care units across three countries were assigned a mean arterial pressure target above the age-specific 5th percentile or usual care. The primary analysis included 910 and 904 children (median age 4 years). While on vasoactives, median mean pressure was 58 vs 61 mm Hg, and the norepinephrine-equivalent total dose was 37.5% lower with the permissive target. The 30-day composite of mortality and duration of invasive ventilation did not differ: probabilistic index 0.52 (95% CI 0.49–0.54; P = .23). Among secondary outcomes, intensive-care stay was shorter in survivors (median 159 vs 166 hours). Kidney-replacement therapy and adverse events did not differ.",
    },
    means: {
      ru: " В этой группе детей меньшая экспозиция вазопрессоров при более мягкой цели не выглядела хуже обычной практики по смерти и длительности вентиляции к 30-му дню. Это не готовая «низкая» цель для любой гипотензии: причину шока, перфузию и местный протокол оценивает реанимационная команда.",
      en: " In this group of children, less vasoactive exposure with a permissive target did not look worse than usual care for death and ventilation time at 30 days. It is not a ready-made low target for every case of hypotension: the intensive-care team still judges the cause of shock, perfusion, and the local protocol.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42806496/",
    sourceKind: "pubmed",
  },
  {
    id: "semaglutide-hemodialysis",
    category: "medicine",
    date: "2026-10-27",
    dateLabel: { ru: "27 октября 2026", en: "27 October 2026" },
    title: {
      ru: "На гемодиализе семаглутид ассоциировался с меньшей смертностью, чем дулаглутид, но не лираглутид",
      en: "On hemodialysis, semaglutide was linked with lower mortality than dulaglutide, but not liraglutide",
    },
    happened: {
      ru: " Это не рандомизированное испытание, а эмуляция целевого исследования на данных US Renal Data System и Medicare за 2011–2022 годы. Сравнили 1 312 человек с диабетом на поддерживающем гемодиализе, начавших семаглутид, и 2 601, начавших дулаглутид или лираглутид. После overlap-взвешивания эффективная выборка — 3 200 пациентов (средний возраст 61 год, медиана наблюдения 1,1 года). Семаглутид против объединённой группы: субораспределённый ОР смерти на диализе 0,82 (95% ДИ 0,70–0,97; за год 11% против 13%), госпитализаций 0,91 (0,83–0,99; 57% против 62%), потеря веса к году −4,8% против −3,4%. Прямое сравнение с дулаглутидом дало похожий сигнал по смерти (0,82) и госпитализациям (0,88). С лираглутидом статистически значимой разницы по этим исходам не было.",
      en: " This was not a randomized trial. It emulated a target trial in US Renal Data System and Medicare data from 2011–2022, comparing 1,312 people with diabetes on maintenance hemodialysis who started semaglutide with 2,601 who started dulaglutide or liraglutide. After overlap weighting the effective sample was 3,200 patients (mean age 61; median follow-up 1.1 years). Versus the combined comparator, the subdistribution hazard ratio for death on dialysis was 0.82 (95% CI 0.70–0.97; 1-year cumulative incidence 11% vs 13%), for hospitalization 0.91 (0.83–0.99; 57% vs 62%), and weight loss at 1 year was −4.8% vs −3.4%. A direct comparison with dulaglutide showed a similar signal for death (0.82) and hospitalization (0.88). Versus liraglutide, mortality and hospitalization differences were not statistically significant.",
    },
    means: {
      ru: " Если агонист рецептора GLP-1 уже рассматривают у человека с диабетом на гемодиализе, наблюдательные данные чуть сильнее поддерживают семаглутид относительно дулаглутида и не показывают явного преимущества перед лираглутидом. Остаточное смешение возможно. Препарат выбирает лечащая команда, а не новостная заметка.",
      en: " If a GLP-1 receptor agonist is already being considered for someone with diabetes on hemodialysis, the observational comparison favors semaglutide over dulaglutide and does not show a clear advantage over liraglutide. Residual confounding remains possible. The prescribing team chooses the drug, not a news note.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42937520/",
    sourceKind: "pubmed",
  },
  {
    id: "wearable-cardiac-rehab",
    category: "medicine",
    date: "2026-10-27",
    dateLabel: { ru: "27 октября 2026", en: "27 October 2026" },
    title: {
      ru: "Кардиореабилитация с наручными трекерами в среднем повышала мощность и шаги, но эффект неоднороден",
      en: "Wrist-wearable cardiac rehab raised average fitness and steps, with inconsistent effects",
    },
    happened: {
      ru: " Систематический обзор и метаанализ включил 18 рандомизированных исследований (1 993 взрослых с сердечно-сосудистыми заболеваниями; 17 вошли в метаанализ) полностью дистанционной или гибридной кардиореабилитации II–III фазы с наручным носимым устройством. В среднем выше были пиковое потребление кислорода (10 исследований, 591 человек; +1,69 мл/кг/мин, 95% ДИ 0,46–2,92), дистанция 6-минутной ходьбы (9 исследований, 1 094 человека; +31 м, 7,66–53,92) и суточные шаги (8 исследований, 474 человека; +1 063 шага, 384–1 825). Для всех трёх точек 95% предиктивный интервал включал ноль. Ясного общего эффекта не было для анаэробного порога, ИМТ, окружности талии, силы хвата и качества жизни.",
      en: " A systematic review and meta-analysis included 18 randomized trials (1,993 adults with cardiovascular disease; 17 in the meta-analysis) of fully remote or hybrid phase II–III cardiac rehabilitation that used a wrist-worn wearable. Pooled estimates favored the programs for peak oxygen uptake (10 trials, 591 people; +1.69 mL/kg/min, 95% CI 0.46–2.92), 6-minute walk distance (9 trials, 1,094 people; +31 m, 7.66–53.92), and daily steps (8 trials, 474 people; +1,063 steps, 384–1,825). The 95% prediction interval included the null for all three. There was no clear pooled effect on anaerobic threshold, BMI, waist circumference, grip strength, or quality of life.",
    },
    means: {
      ru: " Трекер может помочь вынести мониторинг и обратную связь за стены центра, но выигрыш нельзя приписать одним часам: программы многокомпонентные, а в будущих похожих условиях эффект может не повториться. Формат кардиореабилитации и её безопасность определяет клиническая команда.",
      en: " A wearable can help extend monitoring and feedback beyond the center, but the gain cannot be credited to the watch alone: the programs have many parts, and a similar future setting may not see the same effect. The clinical team still decides the rehab format and its safety.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42945529/",
    sourceKind: "meta",
  },
  {
    id: "corn-protein-mps",
    category: "nutrition",
    date: "2026-10-26",
    dateLabel: { ru: "26 октября 2026", en: "26 October 2026" },
    title: {
      ru: "20 г кукурузного белка у пожилых подняли синтез мышечного белка сопоставимо с молочным",
      en: "Twenty grams of corn protein raised muscle protein synthesis in older adults comparably to milk protein",
    },
    happened: {
      ru: " В двойном слепом рандомизированном исследовании 48 здоровых пожилых (68 ± 5 лет, поровну мужчин и женщин) сравнили 20 г изолята кукурузного белка, смеси гороха и кукурузы, изолята молочного белка и низкоэнергетическое плацебо без белка. Все выполняли одностороннее разгибание колена: 3 подхода по 10 повторений при 75% одноповторного максимума. Прирост синтеза мышечного белка от базального уровня был выше, чем на плацебо, у кукурузы (216 ± 170%), смеси (217 ± 167%) и молока (138 ± 78%) против 77 ± 46% на плацебо; между тремя белковыми условиями различий не было. Силовая работа дополнительно усилила ответ во всех группах. У части авторов есть исследовательские и консультационные связи с производителями питания.",
      en: " In a double-blind randomized trial, 48 healthy older adults (68 ± 5 years; 24 men and 24 women) consumed 20 g of corn-protein isolate, a pea-and-corn blend, milk-protein isolate, or a non-protein low-energy placebo. Everyone performed unilateral knee extensions: 3 sets of 10 at 75% of one-repetition maximum. The rise in muscle protein synthesis above basal was greater than placebo for corn (216 ± 170%), the blend (217 ± 167%), and milk (138 ± 78%) versus 77 ± 46% with placebo, with no differences among the three protein conditions. Resistance exercise further increased the response in every group. Some authors report research and advisory ties to nutrition companies.",
    },
    means: {
      ru: " Для здоровых пожилых разовая порция около 20 г кукурузного белка или смеси с горохом может быть рабочим растительным вариантом рядом с молочным, особенно если есть тренировка. Это острый изотопный эксперимент, а не доказательство одинакового набора массы за месяцы. Суточный белок, энергия и регулярная силовая нагрузка важнее марки одного коктейля.",
      en: " For healthy older adults, a single dose of about 20 g of corn protein or a pea blend can be a workable plant option alongside milk protein, especially with training. This is an acute tracer study, not proof of equal muscle gain over months. Daily protein, energy intake, and regular resistance training matter more than the brand of one shake.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42933646/",
    sourceKind: "pubmed",
  },
  {
    id: "creatine-perimenopause-rt",
    category: "nutrition",
    date: "2026-10-24",
    dateLabel: { ru: "24 октября 2026", en: "24 October 2026" },
    title: {
      ru: "Креатин на фоне силовых в перименопаузе: сон и оксигенация, без отдельного выигрыша в тесте внимания",
      en: "Creatine with resistance training in perimenopause: sleep and oxygenation, not a separate attention-test gain",
    },
    happened: {
      ru: " В рандомизированном исследовании 51 женщину в перименопаузе (46 ± 5 лет) распределили на креатин (n = 18), плацебо (n = 20) или контроль без тренировок (n = 13). Группы креатина и плацебо 5 дней принимали 20 г/сутки, затем около 4,5 г/сутки шесть недель вместе с прогрессивными высокоинтенсивными силовыми дважды в неделю. Время реакции в тесте Струпа улучшилось со временем без различий между группами. Префронтальная оксигенация во время теста после периода тренировок изменилась на +0,32 ± 2,01% на креатине и на −1,62 ± 2,01% на плацебо (p = 0,003). Постоянство сна к 6-й неделе было выше на креатине: скорректированная разница +7,4 процентного пункта. Авторы называют анализ разведочным. Научный консультант связан с компаниями, которые выпускают креатин; данные браслета анализировал сотрудник производителя браслета, ослеплённый к группе.",
      en: " In a randomized study, 51 perimenopausal women (46 ± 5 years) were assigned to creatine (n = 18), placebo (n = 20), or a non-training control (n = 13). The creatine and placebo groups took 20 g/day for 5 days, then about 4.5 g/day for six weeks, with twice-weekly progressive high-intensity resistance training. Stroop reaction time improved over time with no group differences. Prefrontal oxygenation during the test changed by +0.32 ± 2.01% with creatine and −1.62 ± 2.01% with placebo after training (P = 0.003). Sleep consistency at week 6 was higher with creatine: baseline-adjusted difference +7.4 percentage points. The authors describe the analysis as exploratory. A scientific advisor has ties to companies that sell creatine, and wristband data were analyzed by an employee of the wristband maker who was blinded to group.",
    },
    means: {
      ru: " Практический стержень здесь — короткие силовые дважды в неделю, а не добавка как лечение симптомов менопаузы. Сигналы по сну и оксигенации предварительные, выборка небольшая, а тест внимания улучшился и без отдельного эффекта креатина. Креатин не заменяет разбор приливов, сна и когнитивных жалоб с врачом.",
      en: " The practical core here is short resistance sessions twice a week, not a supplement as treatment for menopause symptoms. The sleep and oxygenation signals are preliminary, the sample is small, and the attention test improved without a separate creatine effect. Creatine does not replace a clinical review of flushes, sleep, and cognitive complaints.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42926218/",
    sourceKind: "pubmed",
  },
  {
    id: "exercise-bdnf-dose",
    category: "training",
    date: "2026-10-26",
    dateLabel: { ru: "26 октября 2026", en: "26 October 2026" },
    title: {
      ru: "Регулярные тренировки в среднем повышали BDNF в крови, но «дозы для мозга» обзор не дал",
      en: "Regular training raised average blood BDNF, without a dose for the brain",
    },
    happened: {
      ru: " Метаанализ 48 рандомизированных исследований (56 сравнений, 2 361 уникальный участник) сопоставил длительные тренировки с контролем без нагрузки. В среднем циркулирующий BDNF был выше (g = 0,41; 95% ДИ 0,25–0,57) при высокой гетерогенности (I² = 67%; предиктивный интервал от −0,54 до 1,36). В совместной модели дозы ни суммарный объём, ни высокая интенсивность против умеренной не были связаны с величиной эффекта. Если кровь брали примерно через сутки и позже после нагрузки, эффект сохранялся (g = 0,35). Уверенность доказательств авторы оценили как очень низкую и отдельно подчеркнули: BDNF в крови не подтверждён как замена BDNF мозга.",
      en: " A meta-analysis of 48 randomized trials (56 comparisons, 2,361 unique participants) compared chronic exercise with a non-exercising control. Circulating BDNF was higher on average (g = 0.41; 95% CI 0.25–0.57), with high heterogeneity (I² = 67%; prediction interval −0.54 to 1.36). In the joint dose model, neither total prescribed volume nor vigorous versus moderate intensity was associated with the size of the effect. The effect remained when blood was sampled about 24 hours or more after exercise (g = 0.35). The authors rated certainty as very low and stated separately that blood BDNF is not a validated stand-in for brain BDNF.",
    },
    means: {
      ru: " Регулярная нагрузка связана с более высоким BDNF в крови в среднем по исследованиям, но из этого обзора нельзя собрать протокол «для нейропластичности» или гнаться за конкретной интенсивностью. Польза тренировок для здоровья не сводится к одному маркёру.",
      en: " Regular training is associated with higher blood BDNF on average across studies, but this review does not support a neuroplasticity protocol or a chase for one intensity. The health value of training is not reducible to a single marker.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42928306/",
    sourceKind: "meta",
  },
  {
    id: "grip-scapular-saps",
    category: "training",
    date: "2026-10-23",
    dateLabel: { ru: "23 октября 2026", en: "23 October 2026" },
    title: {
      ru: "Добавление хвата к стабилизации лопатки сильнее улучшило функцию плеча за 4 недели",
      en: "Adding grip work to scapular stabilization improved shoulder function more over 4 weeks",
    },
    happened: {
      ru: " В рандомизированном исследовании 36 взрослых с субакромиальным болевым синдромом сравнили стабилизацию лопатки плюс укрепление хвата (n = 18) и только стабилизацию лопатки (n = 18). Занятия шли 3 раза в неделю 4 недели. В обеих группах выросли сила мышц плеча, сила хвата и индекс боли и ограничений плеча (p < 0,001). Взаимодействие «время × группа» было значимым по всем точкам (p < 0,001): прирост больше там, где добавили хват. В публикации по абстракту нет величин эффекта в единицах силы или баллах шкалы.",
      en: " In a randomized trial of 36 adults with subacromial pain syndrome, scapular stabilization plus grip strengthening (n = 18) was compared with scapular stabilization alone (n = 18). Sessions were 3 times a week for 4 weeks. Both groups improved shoulder-muscle strength, grip strength, and Shoulder Pain and Disability Index scores (P < .001). The time-by-group interaction was significant for every outcome (P < .001), with larger gains when grip work was added. The abstract does not report effect sizes in strength units or scale points.",
    },
    means: {
      ru: " При субакромиальной боли к работе на лопатку можно добавить укрепление хвата, но это короткое исследование без отдалённого наблюдения и без опубликованных в абстракте размеров эффекта. Упражнения при боли в плече подбирают по диагнозу и переносимости, они не заменяют осмотр.",
      en: " For subacromial pain, grip strengthening can be added to scapular work, but this was a short trial without longer follow-up and without effect sizes in the abstract. Shoulder exercises still depend on the diagnosis and tolerance, and they do not replace an assessment.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42937737/",
    sourceKind: "pubmed",
  },
];
