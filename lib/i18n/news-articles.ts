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
    id: "cgm-noninsulin-t2d",
    category: "medicine",
    date: "2026-10-29",
    featured: true,
    dateLabel: { ru: "29 октября 2026", en: "29 October 2026" },
    title: {
      ru: "Непрерывный мониторинг глюкозы сильнее снизил HbA1c при СД2 без инсулина",
      en: "Continuous glucose monitoring lowered HbA1c more in non-insulin-treated type 2 diabetes",
    },
    happened: {
      ru: " В 26-недельном исследовании CONNECT в 22 практиках первичной помощи в США 283 взрослых с сахарным диабетом 2-го типа без инсулина распределили на непрерывный мониторинг глюкозы или обычную помощь. HbA1c снизился с 8,8% до 7,2% при мониторинге и с 8,7% до 8,0% при обычной помощи (скорректированная разница −0,9 п.п.; 95% ДИ от −1,1 до −0,6). Время в диапазоне 70–180 мг/дл было на 21 п.п. выше при мониторинге. Тяжёлых гипогликемий не зарегистрировали, время ниже 54 мг/дл не стало хуже.",
      en: " In the 26-week CONNECT trial at 22 U.S. primary care practices, 283 adults with type 2 diabetes who were not using insulin were assigned to continuous glucose monitoring or usual care. HbA1c fell from 8.8% to 7.2% with monitoring and from 8.7% to 8.0% with usual care (adjusted difference −0.9 percentage points; 95% CI −1.1 to −0.6). Time in the 70–180 mg/dL range was 21 percentage points higher with monitoring. No severe hypoglycemia was reported, and time below 54 mg/dL was not worse.",
    },
    means: {
      ru: " Для части людей с СД2 без инсулина датчик глюкозы может улучшать средний контроль и время в целевом диапазоне. Это не повод назначать мониторинг всем: важны исходный HbA1c, стоимость, готовность пользоваться датчиком и общий план лечения. Исследование финансировал производитель системы.",
      en: " For some people with type 2 diabetes who are not using insulin, a glucose sensor may improve average control and time in range. That is not a reason to prescribe monitoring for everyone: baseline HbA1c, cost, willingness to use a sensor, and the overall treatment plan still matter. The device maker funded the trial.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42878622/",
    sourceKind: "pubmed",
  },
  {
    id: "attain-j-orforglipron",
    category: "medicine",
    date: "2026-10-30",
    dateLabel: { ru: "30 октября 2026", en: "30 October 2026" },
    title: {
      ru: "Пероральный орфорглипрон снизил вес у взрослых с ожирением в Японии",
      en: "Oral orforglipron reduced body weight in Japanese adults with obesity disease",
    },
    happened: {
      ru: " В фазе 3 ATTAIN-J 238 взрослых в Японии с ожирением по местным показаниям (среди связанных состояний — гипертензия, дислипидемия или СД2) 72 недели получали орфорглипрон 6, 12 или 36 мг в сутки либо плацебо. Исследование завершили 214 человек (90%). Среднее изменение веса составило −5,9%, −8,7% и −7,9% против −0,6% на плацебо. Снижение хотя бы на 5% оценили в 45,6%, 60,8% и 58,8% против 15,2% (9 из 60 на плацебо). Нежелательные явления чаще были желудочно-кишечными; из-за тошноты лечение прекратили у 5 из 60 на дозе 36 мг.",
      en: " In the phase 3 ATTAIN-J trial, 238 adults in Japan who met local criteria for obesity disease (related conditions included hypertension, dyslipidemia, or type 2 diabetes) took orforglipron 6, 12, or 36 mg daily or placebo for 72 weeks. Of them, 214 (90%) completed the study. Mean weight change was −5.9%, −8.7%, and −7.9% versus −0.6% with placebo. A loss of at least 5% was estimated in 45.6%, 60.8%, and 58.8% versus 15.2% (9 of 60 on placebo). Adverse effects were mostly gastrointestinal; nausea led to stopping treatment in 5 of 60 people on 36 mg.",
    },
    means: {
      ru: " Таблетированный агонист рецептора GLP-1 может снижать вес сильнее плацебо в этой группе и за этот срок, но желудочно-кишечные симптомы, особенно на 36 мг, остаются частью выбора. Результат относится к участникам с японскими показаниями и не заменяет решение врача о лекарстве, питании и нагрузке.",
      en: " This oral GLP-1 receptor agonist can reduce weight more than placebo in this group over 72 weeks, but gastrointestinal symptoms, especially at 36 mg, remain part of the tradeoff. The result applies to people who met Japanese treatment criteria and does not replace a clinician’s decision about medication, diet, and activity.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42962687/",
    sourceKind: "pubmed",
  },
  {
    id: "chord-chw-prediabetes",
    category: "medicine",
    date: "2026-10-30",
    dateLabel: { ru: "30 октября 2026", en: "30 October 2026" },
    title: {
      ru: "Программа с community health workers не снизила новые случаи диабета при предиабете",
      en: "A community health worker program did not reduce new diabetes in prediabetes",
    },
    happened: {
      ru: " В прагматичном кластерном исследовании CHORD команды первичной помощи в Нью-Йорке (VA NY Harbor и Bellevue) сравнили 12-месячную программу с community health workers и обычную помощь у взрослых 18–75 лет с HbA1c 5,7–6,4%. Новый диабет возник у 43 из 728 в группе вмешательства (5,9%) и у 76 из 1781 в контроле (4,3%); разница рисков 1,6 п.п. (95% ДИ от −3,7 до 4,1). HbA1c, вес, давление и липиды между группами значимо не различались. Визитов в первичное звено было больше при вмешательстве (77,6% против 62,5%).",
      en: " In the pragmatic cluster trial CHORD, primary care teams in New York (VA NY Harbor and Bellevue) compared a 12-month community health worker program with usual care in adults aged 18–75 with HbA1c 5.7–6.4%. New diabetes occurred in 43 of 728 intervention patients (5.9%) and 76 of 1,781 controls (4.3%); risk difference 1.6 percentage points (95% CI −3.7 to 4.1). HbA1c, weight, blood pressure, and lipids did not differ meaningfully. Primary care visits were more common with the intervention (77.6% vs 62.5%).",
    },
    means: {
      ru: " Короткая поддержка в обычной поликлинике не повторяет эффект интенсивных программ профилактики диабета. Здесь контактов было меньше, чем планировали, и метаболические показатели не сдвинулись. Это не отменяет питание и движение при предиабете и не позволяет считать любую программу с community health workers способом снизить новые случаи диабета.",
      en: " Brief support in a routine clinic does not reproduce intensive diabetes-prevention programs. Contacts here were fewer than planned, and metabolic measures did not shift. The finding does not set aside diet and activity for prediabetes, and it does not show that every community health worker program prevents new diabetes.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42961875/",
    sourceKind: "pubmed",
  },
  {
    id: "potassium-untreated-htn",
    category: "nutrition",
    date: "2026-10-30",
    dateLabel: { ru: "30 октября 2026", en: "30 October 2026" },
    title: {
      ru: "Добавка калия скромно снизила клиническое давление при нелеченой гипертензии",
      en: "Potassium supplements modestly lowered clinic blood pressure in untreated hypertension",
    },
    happened: {
      ru: " Систематический обзор и метаанализ собрал 19 рандомизированных исследований (803 взрослых с первичной гипертензией без лечения; медиана 4 недели): добавку калия сравнивали с плацебо, хлоридом натрия или отсутствием добавки. Клиническое систолическое давление было ниже на 5,3 мм рт. ст. (95% ДИ 4,4–6,3), диастолическое — на 4,5 мм рт. ст. (3,9–5,1). Суточное амбулаторное давление снижалось меньше: на 2,8 и 3,2 мм рт. ст. Нежелательные явления встречались чаще на калии (12,8% против 3,2%). Разброс между исследованиями был большим, данных по суточному давлению мало.",
      en: " A systematic review and meta-analysis pooled 19 randomized trials (803 adults with untreated primary hypertension; median 4 weeks) of oral potassium versus placebo, sodium chloride, or no supplement. Clinic systolic pressure was 5.3 mm Hg lower (95% CI 4.4–6.3) and diastolic pressure 4.5 mm Hg lower (3.9–5.1). Twenty-four-hour ambulatory reductions were smaller: 2.8 and 3.2 mm Hg. Adverse events were more common with potassium (12.8% vs 3.2%). Heterogeneity was substantial, and ambulatory data were limited.",
    },
    means: {
      ru: " Калий может немного снижать давление у людей с ещё не леченной гипертензией, но это короткие и неоднородные исследования. Добавка не заменяет назначенную терапию. При болезни почек, препаратах, влияющих на калий, и при уже подобранном лечении вопрос добавки решает врач.",
      en: " Potassium may lower blood pressure a little in untreated hypertension, but the trials were short and heterogeneous. A supplement does not replace prescribed treatment. With kidney disease, medicines that affect potassium, or blood pressure that is already being treated, supplementation is a clinical decision.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42960746/",
    sourceKind: "meta",
  },
  {
    id: "plant-vs-whey-rt",
    category: "nutrition",
    date: "2026-10-29",
    dateLabel: { ru: "29 октября 2026", en: "29 October 2026" },
    title: {
      ru: "Растительный белок и сыворотка у новичков в силовых дали сходные сдвиги состава тела",
      en: "Plant protein and whey led to similar body-composition shifts in new lifters",
    },
    happened: {
      ru: " Метаанализ пяти исследований сравнил растительный белок и сыворотку у нетренированных взрослых 18–59 лет на силовых тренировках; состав тела измеряли DEXA. При сопоставимом суточном белке и тренировках обе добавки сопровождались сдвигами тощей и жировой массы без значимой разницы между источниками. Для сои и гороха это выглядит практической альтернативой сыворотке. По белку чиа есть одно исследование без значимого изменения тощей массы. Доверительные интервалы широкие: это не доказательство, что источники физиологически эквивалентны.",
      en: " A meta-analysis of five trials compared plant protein with whey in untrained adults aged 18–59 during resistance training, with body composition measured by DEXA. When daily protein and training were comparable, both supplements were associated with changes in lean and fat mass, without a significant difference between sources. Soy and pea look like practical alternatives to whey. Chia protein rests on one trial that did not show a significant lean-mass change. Confidence intervals were wide, so this is not proof that the sources are physiologically equivalent.",
    },
    means: {
      ru: " Новичку важнее регулярные силовые тренировки и достаточный белок за день, чем обязательная сыворотка. Соя или горох могут закрыть ту же дозу, если так удобнее. Пяти исследований мало, чтобы считать любой растительный белок полной заменой сыворотки.",
      en: " For someone new to lifting, consistent resistance training and enough protein across the day matter more than an obligatory whey shake. Soy or pea can cover the same dose when that is the practical choice. Five trials are not enough to treat every plant protein as a full stand-in for whey.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42954267/",
    sourceKind: "meta",
  },
  {
    id: "exercise-masld",
    category: "training",
    date: "2026-10-30",
    dateLabel: { ru: "30 октября 2026", en: "30 October 2026" },
    title: {
      ru: "Силовые и умеренные аэробные тренировки снижали жир в печени при MASLD",
      en: "Resistance and moderate aerobic training reduced liver fat in MASLD",
    },
    happened: {
      ru: " Обзор тренировок без диеты и лекарств при метаболически ассоциированной жировой болезни печени включил 41 исследование (1517 человек); 24 вошли в метаанализ, среди работ были и нерандомизированные. Жир в печени был ниже при силовых тренировках (SMD −0,77; 95% ДИ от −1,14 до −0,39) и при аэробной нагрузке умеренной интенсивности (SMD −0,50; от −0,95 до −0,04). Для HIIT ясного эффекта не нашли. Ферменты печени менялись несогласованно, а ИМТ, жировая масса и HbA1c почти не сдвигались. Уверенность доказательств низкая или очень низкая.",
      en: " A review of exercise without diet or drugs in metabolic dysfunction-associated steatotic liver disease included 41 studies (1,517 people); 24 were meta-analyzed, and some studies were not randomized. Liver fat was lower with resistance training (SMD −0.77; 95% CI −1.14 to −0.39) and with moderate-intensity aerobic exercise (SMD −0.50; −0.95 to −0.04). High-intensity interval training showed no clear effect. Liver enzymes changed inconsistently, while BMI, fat mass, and HbA1c barely moved. Certainty of evidence was low or very low.",
    },
    means: {
      ru: " Регулярная силовая или умеренная аэробная нагрузка может уменьшать жир в печени даже без заметного снижения веса, но точный размер эффекта по этим данным непредсказуем. Формат выбирают по переносимости и тому, что человек будет делать стабильно. Это не схема лечения болезни печени.",
      en: " Regular resistance training or moderate aerobic work may reduce liver fat even without a clear drop in weight, but these data do not pin down the size of the effect. The format should follow tolerance and what a person will actually keep doing. This is not a treatment plan for liver disease.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42960563/",
    sourceKind: "meta",
  },
  {
    id: "digital-balance-older",
    category: "training",
    date: "2026-10-28",
    dateLabel: { ru: "28 октября 2026", en: "28 October 2026" },
    title: {
      ru: "Цифровые тренировки баланса у пожилых были лучше бездействия, но не лучше обычных упражнений",
      en: "Digital balance training in older adults beat inactivity, not usual exercise",
    },
    happened: {
      ru: " Сетевой метаанализ сравнил цифровые тренировки баланса у пожилых: 60 рандомизированных исследований, 3469 участников, средний возраст 73 года; поиск дополнен до 31 января 2026 года. Телереабилитация, экзергейминг на балансировочных платформах, экзергейминг с захватом движения и обычные упражнения превосходили отсутствие тренировок. Ни один цифровой формат не превзошёл обычные упражнения. Умеренная уверенность была только у сравнения платформ и захвата движения с отсутствием нагрузки по тесту Timed Up and Go. Падения в включённых исследованиях не сообщались.",
      en: " A network meta-analysis compared digital balance training in older adults: 60 randomized trials, 3,469 participants, mean age 73 years, with the search updated through 31 January 2026. Telerehabilitation, exergaming on balance platforms, motion-capture exergaming, and conventional exercise all beat no training. No digital format beat conventional exercise. Certainty was moderate only for platforms and motion capture versus no training on the Timed Up and Go test. The included trials did not report falls.",
    },
    means: {
      ru: " Если обычной тренировки нет, цифровой формат баланса может быть лучше, чем ничего. Он не выглядит сильнее привычных упражнений и не доказан как способ предотвращать падения. Для пожилого человека важнее безопасная регулярная нагрузка, чем выбор самой технологичной программы.",
      en: " If usual training is absent, a digital balance format may be better than nothing. It does not look stronger than ordinary exercise, and these trials do not show that the programs prevent falls. For an older adult, safe regular training matters more than the most technological option.",
    },
    sourceHref: "https://pubmed.ncbi.nlm.nih.gov/42954170/",
    sourceKind: "meta",
  },
];
