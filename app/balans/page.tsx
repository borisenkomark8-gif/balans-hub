import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BALANS — нормальный образ жизни",
  description: "BALANS — оценка, питание, тренировки, восстановление и практические инструменты для здоровья.",
};

export default function BalansPage() {
  return (
    <>
      <div className="platform-page">
        <header className="site-header platform-header"><a className="brand" href="/" aria-label="На главную"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>BALANS</span></a><nav aria-label="Разделы BALANS"><a href="/balans/assessment">Оценка</a><a href="/balans/control">Контроль</a><a href="/balans/progress">Прогресс</a><a href="/balans/learn">Знания</a><a href="/balans/train">Тренировки</a><a href="/balans/clinical">По заболеваниям</a></nav></header>
        <main className="platform-main">
          <section className="platform-hero">
            <div>
              <p className="eyebrow">Нормальный образ жизни</p>
              <h1><span className="wordplay">с<span>BALANS</span>ированное</span>{" питание и физическая активность"}</h1>
              <p className="hero-lead">Оцените исходную точку, разберитесь в принципах питания и соберите понятную систему тренировок и восстановления.</p>
            </div>
            <div className="route-note" aria-label="Маршрут BALANS"><span>01 · Оценка</span><span>02 · Контроль</span><span>03 · Прогресс</span><span>04 · Знания</span><span>05 · Тренировки</span><span>06 · По заболеваниям</span></div>
          </section>
          <section className="platform-modules" aria-labelledby="modules-title">
            <div className="section-heading compact-heading">
              <p className="eyebrow">Начните с нужного раздела</p>
              <h2 id="modules-title">Инструменты BALANS</h2>
            </div>
            <div className="module-grid"><a className="module-card accent-blue" href="/balans/assessment"><span className="module-index">01</span><h3>Оценка</h3><p>Базовые показатели, энергозатраты, ориентиры по белку и калорийности.</p><b>Открыть →</b></a><a className="module-card accent-cyan" href="/balans/control"><span className="module-index">02</span><h3>Контроль</h3><p>Ежедневные записи веса, питания, активности и самочувствия.</p><b>Добавить запись →</b></a><a className="module-card accent-mint" href="/balans/progress"><span className="module-index">03</span><h3>Прогресс</h3><p>Динамика показателей за 7, 28, 56 или 84 дня.</p><b>Смотреть динамику →</b></a><a className="module-card accent-cyan" href="/balans/learn"><span className="module-index">04</span><h3>Знания</h3><p>Питание, обмен веществ, сон, восстановление и критическое мышление.</p><b>Читать →</b></a><a className="module-card accent-mint" href="/balans/train"><span className="module-index">05</span><h3>Тренировки</h3><p>29 упражнений, тренажёры, силовые и аэробные тренировки.</p><b>Выбрать →</b></a><a className="module-card accent-navy" href="/balans/clinical"><span className="module-index">06</span><h3>Питание и тренировки при заболеваниях</h3><p>Модели для взрослых и детей с учётом диагноза, возраста и ограничений.</p><b>Посмотреть →</b></a></div>
          </section>
          <section className="migration-note">
            <div>
              <p className="eyebrow">Переезд проекта</p>
              <h2>Все материалы собираются здесь</h2>
            </div>
            <p>Содержание старой платформы переносится поэтапно. Уже перенесены оценка, контроль, прогресс, раздел знаний, клинические направления и каталог упражнений.</p>
          </section>
        </main>
        <footer><a className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>Dr.Mark · BALANS</span></a><p>Информация носит образовательный характер и не заменяет консультацию врача.</p><p>© 2026 BALANS</p></footer>
      </div>
    </>
  );
}
