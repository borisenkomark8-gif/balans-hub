const assessmentForm = document.querySelector("#assessment-form");

if (assessmentForm) {
  assessmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const sex = document.querySelector("#sex").value;
    const age = Number(document.querySelector("#age").value);
    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const waist = Number(document.querySelector("#waist").value);
    const activity = Number(document.querySelector("#activity").value);

    const bmi = weight / ((height / 100) ** 2);
    const waistHeight = waist / height;
    const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
    const tdee = bmr * activity;
    const proteinLow = weight * 1.4;
    const proteinHigh = weight * 1.8;
    const bmiText = bmi < 18.5 ? "ниже обычного диапазона" : bmi < 25 ? "обычный диапазон" : bmi < 30 ? "выше обычного диапазона" : "значительно выше обычного диапазона";

    document.querySelector("#assessment-results").innerHTML = `
      <p class="eyebrow">Ваши ориентиры</p>
      <h2>${Math.round(tdee)} ккал/сутки</h2>
      <p>Ориентировочные суточные энергозатраты при выбранной активности.</p>
      <div class="result-list">
        <span><b>${bmi.toFixed(1)}</b> ИМТ · ${bmiText}</span>
        <span><b>${waistHeight.toFixed(2)}</b> талия / рост</span>
        <span><b>${Math.round(bmr)} ккал</b> основной обмен</span>
        <span><b>${Math.round(proteinLow)}–${Math.round(proteinHigh)} г</b> белок в сутки</span>
      </div>`;
  });
}

const searchInput = document.querySelector("#exercise-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const exerciseCards = [...document.querySelectorAll("#exercise-grid article")];
let activeFilter = "all";

function filterExercises() {
  if (!exerciseCards.length) return;
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visible = 0;
  exerciseCards.forEach((card) => {
    const matchesGroup = activeFilter === "all" || card.dataset.group === activeFilter;
    const matchesSearch = !query || card.dataset.search.includes(query) || card.textContent.toLowerCase().includes(query);
    const show = matchesGroup && matchesSearch;
    card.hidden = !show;
    if (show) visible += 1;
  });
  const empty = document.querySelector("#exercise-empty");
  if (empty) empty.hidden = visible !== 0;
}

searchInput?.addEventListener("input", filterExercises);
filterButtons.forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle("active", item === button));
  filterExercises();
}));

const equipment = {
  machines: ["Жим ногами", "Тяга верхнего блока", "Горизонтальная тяга", "Машина Смита", "Жим от груди", "Жим на плечи", "Pec deck / обратная бабочка", "Кроссовер", "Сгибание и разгибание ног", "Гиперэкстензия", "Гравитрон", "Приведение и отведение бедра"],
  free: ["Стойка для приседаний", "Скамья для жима", "Штанги и диски", "Гантельный ряд", "Гири", "Скамьи", "Турник", "Помост для тяги"],
  cardio: ["Беговая дорожка", "Велотренажёр", "Эллиптический тренажёр", "Гребной тренажёр", "Степпер", "Лестница"]
};

const equipmentPanel = document.querySelector("#equipment-panel");
const equipmentTabs = [...document.querySelectorAll(".equipment-tab")];

function renderEquipment(zone = "machines") {
  if (!equipmentPanel) return;
  equipmentPanel.innerHTML = equipment[zone].map((item, index) => `<span><b>${String(index + 1).padStart(2, "0")}</b>${item}</span>`).join("");
}

equipmentTabs.forEach((button) => button.addEventListener("click", () => {
  equipmentTabs.forEach((item) => item.classList.toggle("active", item === button));
  renderEquipment(button.dataset.zone);
}));

renderEquipment();

const STORAGE_KEY = "balansEntriesV1";

function getEntries() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.sort((a, b) => a.date.localeCompare(b.date)) : [];
  } catch {
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function localDateISO() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

function numberOrNull(selector) {
  const value = document.querySelector(selector)?.value;
  return value === "" || value == null ? null : Number(value);
}

function formatNumber(value, digits = 0) {
  return value == null || Number.isNaN(value)
    ? "—"
    : new Intl.NumberFormat("ru-RU", { maximumFractionDigits: digits }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "short", year: "numeric" })
    .format(new Date(`${value}T12:00:00`));
}

const dailyForm = document.querySelector("#daily-form");

if (dailyForm) {
  const dateInput = document.querySelector("#entry-date");
  dateInput.value = localDateISO();

  document.querySelectorAll(".score-grid input[type='range']").forEach((range) => {
    const output = range.parentElement.querySelector("output");
    const sync = () => { output.value = range.value; };
    range.addEventListener("input", sync);
    sync();
  });

  const fillForm = (entry) => {
    if (!entry) return;
    const fields = {
      "#entry-weight": entry.weight, "#entry-waist": entry.waist, "#entry-hips": entry.hips,
      "#entry-calories": entry.calories, "#entry-protein": entry.protein, "#entry-fat": entry.fat,
      "#entry-carbs": entry.carbs, "#entry-steps": entry.steps, "#entry-training": entry.training,
      "#entry-duration": entry.duration, "#entry-sleep": entry.sleep, "#entry-hunger": entry.hunger,
      "#entry-mood": entry.mood, "#entry-fatigue": entry.fatigue, "#entry-notes": entry.notes
    };
    Object.entries(fields).forEach(([selector, value]) => {
      const field = document.querySelector(selector);
      if (field && value != null) {
        field.value = value;
        if (field.type === "range") field.dispatchEvent(new Event("input"));
      }
    });
  };

  const renderLatest = () => {
    const entries = getEntries();
    const latest = entries.at(-1);
    const box = document.querySelector("#latest-entry");
    if (!latest) return;
    box.innerHTML = `
      <p class="eyebrow">Последняя запись · ${formatDate(latest.date)}</p>
      <h2>${formatNumber(latest.weight, 1)} кг</h2>
      <div class="latest-metrics">
        <span><b>${formatNumber(latest.steps)}</b> шагов</span>
        <span><b>${formatNumber(latest.protein)}</b> г белка</span>
        <span><b>${formatNumber(latest.sleep)}</b> сон</span>
        <span><b>${latest.training || "—"}</b> тренировка</span>
      </div>`;
  };

  dateInput.addEventListener("change", () => {
    const existing = getEntries().find((entry) => entry.date === dateInput.value);
    if (existing) fillForm(existing);
  });

  dailyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const entry = {
      date: dateInput.value,
      weight: numberOrNull("#entry-weight"), waist: numberOrNull("#entry-waist"), hips: numberOrNull("#entry-hips"),
      calories: numberOrNull("#entry-calories"), protein: numberOrNull("#entry-protein"), fat: numberOrNull("#entry-fat"), carbs: numberOrNull("#entry-carbs"),
      steps: numberOrNull("#entry-steps"), training: document.querySelector("#entry-training").value,
      duration: numberOrNull("#entry-duration"), sleep: numberOrNull("#entry-sleep"), hunger: numberOrNull("#entry-hunger"),
      mood: numberOrNull("#entry-mood"), fatigue: numberOrNull("#entry-fatigue"), notes: document.querySelector("#entry-notes").value.trim()
    };
    const entries = getEntries().filter((item) => item.date !== entry.date);
    entries.push(entry);
    entries.sort((a, b) => a.date.localeCompare(b.date));
    saveEntries(entries);
    renderLatest();
    const status = document.querySelector("#save-status");
    status.textContent = `Запись за ${formatDate(entry.date)} сохранена.`;
    setTimeout(() => { status.textContent = ""; }, 3500);
  });

  const download = (filename, content, type) => {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  document.querySelector("#export-json").addEventListener("click", () => {
    download(`balans-backup-${localDateISO()}.json`, JSON.stringify(getEntries(), null, 2), "application/json");
  });

  document.querySelector("#export-csv").addEventListener("click", () => {
    const columns = ["date", "weight", "waist", "hips", "calories", "protein", "fat", "carbs", "steps", "training", "duration", "sleep", "hunger", "mood", "fatigue", "notes"];
    const escapeCsv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
    const rows = getEntries().map((entry) => columns.map((column) => escapeCsv(entry[column])).join(","));
    download(`balans-data-${localDateISO()}.csv`, [columns.join(","), ...rows].join("\n"), "text/csv;charset=utf-8");
  });

  document.querySelector("#import-json").addEventListener("change", async (event) => {
    const status = document.querySelector("#data-status");
    try {
      const raw = JSON.parse(await event.target.files[0].text());
      const source = Array.isArray(raw) ? raw : raw.entries || raw.logs;
      if (!Array.isArray(source)) throw new Error("invalid");
      const imported = source.filter((entry) => /^\d{4}-\d{2}-\d{2}$/.test(entry?.date || ""));
      const merged = new Map(getEntries().map((entry) => [entry.date, entry]));
      imported.forEach((entry) => merged.set(entry.date, entry));
      saveEntries([...merged.values()].sort((a, b) => a.date.localeCompare(b.date)));
      renderLatest();
      status.textContent = `Импортировано записей: ${imported.length}.`;
    } catch {
      status.textContent = "Не удалось прочитать файл. Нужна резервная копия BALANS в формате JSON.";
    }
    event.target.value = "";
  });

  fillForm(getEntries().find((entry) => entry.date === dateInput.value));
  renderLatest();
}

const progressContent = document.querySelector("#progress-content");

if (progressContent) {
  let periodDays = 28;

  const average = (values) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;

  const filteredEntries = () => {
    const cutoff = new Date(`${localDateISO()}T12:00:00`);
    cutoff.setDate(cutoff.getDate() - (periodDays - 1));
    return getEntries().filter((entry) => new Date(`${entry.date}T12:00:00`) >= cutoff);
  };

  const renderChart = (element, entries, key, unit, color) => {
    const points = entries.filter((entry) => Number.isFinite(entry[key]));
    if (!points.length) {
      element.innerHTML = '<p class="chart-empty">Нет данных за выбранный период.</p>';
      return;
    }
    const values = points.map((entry) => entry[key]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const spread = max - min || Math.max(Math.abs(max) * 0.05, 1);
    const width = 640;
    const height = 230;
    const padX = 44;
    const padY = 30;
    const coords = points.map((entry, index) => {
      const x = points.length === 1 ? width / 2 : padX + index * ((width - padX * 2) / (points.length - 1));
      const y = height - padY - ((entry[key] - min) / spread) * (height - padY * 2);
      return { x, y, value: entry[key], date: entry.date };
    });
    const polyline = coords.map((point) => `${point.x},${point.y}`).join(" ");
    const circles = coords.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4"><title>${formatDate(point.date)}: ${formatNumber(point.value, 1)} ${unit}</title></circle>`).join("");
    element.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Значения от ${formatNumber(min, 1)} до ${formatNumber(max, 1)} ${unit}">
        <line x1="${padX}" y1="${padY}" x2="${padX}" y2="${height - padY}" class="chart-axis" />
        <line x1="${padX}" y1="${height - padY}" x2="${width - padX}" y2="${height - padY}" class="chart-axis" />
        <text x="8" y="${padY + 4}">${formatNumber(max, 1)}</text>
        <text x="8" y="${height - padY + 4}">${formatNumber(min, 1)}</text>
        <polyline points="${polyline}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <g fill="${color}">${circles}</g>
      </svg>`;
  };

  const renderProgress = () => {
    const entries = filteredEntries();
    const empty = document.querySelector("#progress-empty");
    const hasEntries = entries.length > 0;
    empty.hidden = hasEntries;
    progressContent.hidden = !hasEntries;
    if (!hasEntries) return;

    const weights = entries.filter((entry) => Number.isFinite(entry.weight));
    const firstWeight = weights[0]?.weight;
    const lastWeight = weights.at(-1)?.weight;
    const change = firstWeight != null && lastWeight != null ? lastWeight - firstWeight : null;
    const averageSteps = average(entries.map((entry) => entry.steps).filter(Number.isFinite));
    const averageSleep = average(entries.map((entry) => entry.sleep).filter(Number.isFinite));
    const workouts = entries.filter((entry) => entry.training && entry.training !== "Нет").length;

    document.querySelector("#progress-kpis").innerHTML = `
      <article><span>Текущий вес</span><b>${formatNumber(lastWeight, 1)} кг</b></article>
      <article><span>Изменение</span><b>${change == null ? "—" : `${change > 0 ? "+" : ""}${formatNumber(change, 1)} кг`}</b></article>
      <article><span>Шаги в среднем</span><b>${formatNumber(averageSteps)}</b></article>
      <article><span>Сон в среднем</span><b>${formatNumber(averageSleep, 1)} / 10</b></article>
      <article><span>Тренировок</span><b>${workouts}</b></article>`;

    renderChart(document.querySelector("#weight-chart"), entries, "weight", "кг", "#1174e6");
    renderChart(document.querySelector("#steps-chart"), entries, "steps", "шагов", "#2ac18f");

    document.querySelector("#history-body").innerHTML = [...entries].reverse().map((entry) => `
      <tr><td>${formatDate(entry.date)}</td><td>${formatNumber(entry.weight, 1)}</td><td>${formatNumber(entry.waist, 1)}</td><td>${formatNumber(entry.steps)}</td><td>${formatNumber(entry.sleep)}</td><td>${entry.training || "—"}</td></tr>`).join("");
  };

  document.querySelectorAll(".period-switch button").forEach((button) => button.addEventListener("click", () => {
    periodDays = Number(button.dataset.days);
    document.querySelectorAll(".period-switch button").forEach((item) => item.classList.toggle("active", item === button));
    renderProgress();
  }));

  renderProgress();
}
