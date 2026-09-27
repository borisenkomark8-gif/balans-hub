export default function HomePage() {
  return (
    <>
      <header className="site-header"><a className="brand" href="#top" aria-label="BALANS — на главную"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>BALANS</span></a><nav aria-label="Основная навигация"><a href="/balans">BALANS</a><a href="#projects">Проекты</a><a href="/news">Новости</a><a href="#author">Об авторе</a></nav></header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow">Здоровье · движение · медицинские знания</p><h1 id="hero-title">Понятные инструменты для вашего здоровья</h1><p className="hero-lead">Авторские проекты врача и персонального тренера: от питания и силовых тренировок до практической медицины и подготовки к медицинским экзаменам.</p><a className="primary-action" href="#projects">Смотреть проекты<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg></a></div>
          <div className="hero-map planetary-system" aria-label="Три направления BALANS"><div className="orbit orbit-outer" aria-hidden="true" /><div className="orbit orbit-mid" aria-hidden="true" /><div className="orbit orbit-inner" aria-hidden="true" /><div className="map-center"><img src="/assets/dr-mark-logo.jpeg" alt="Логотип Dr.Mark" /></div><a className="planet planet-balans" href="/balans" aria-label="BALANS — Питание и движение"><span className="planet-core" aria-hidden="true" /><span className="planet-copy"><span className="planet-name">BALANS</span><span className="planet-tag">Питание и движение</span></span></a><a className="planet planet-medicine" href="https://medbalans-kids.vercel.app/hub" target="_blank" rel="noopener noreferrer" aria-label="Практическая медицина — Инструменты для врачей"><span className="planet-core" aria-hidden="true" /><span className="planet-copy"><span className="planet-name">Практическая медицина</span><span className="planet-tag">Инструменты для врачей</span></span></a><a className="planet planet-exam" href="https://medical-exam-platform-ten.vercel.app/ru" target="_top" aria-label="MED EXAM — Подготовка к экзаменам"><span className="planet-core" aria-hidden="true" /><span className="planet-copy"><span className="planet-name">MED EXAM</span><span className="planet-tag">Подготовка к экзаменам</span></span></a></div>
        </section>
        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Уже работает</p>
            <h2 id="projects-title">Три проекта — одна логика</h2>
            <p>Научная основа, практическая польза и уважение к человеку.</p>
          </div>
          <div className="project-grid"><a className="project-card project-balans" href="/balans" aria-label="Перейти в BALANS"><div className="project-topline"><span className="project-number">01</span><span className="status"><i />{" BALANS"}</span></div><div><p className="project-type">Здоровье</p><h3 className="long-title">НОРМАЛЬНЫЙ ОБРАЗ ЖИЗНИ</h3><p className="project-description"><span className="wordplay">с<span>BALANS</span>ированное</span>{" питание и физическая активность — с опорой на современные данные, ваши цели и реальную жизнь."}</p></div><div className="topic-list" aria-label="Темы проекта"><span>Питание</span><span>Физическая активность</span><span>Восстановление</span></div><span className="card-action">{"Перейти в BALANS "}<span aria-hidden="true">→</span></span></a><a className="project-card project-kids" href="https://medbalans-kids.vercel.app/hub" target="_blank" rel="noopener noreferrer" aria-label="Открыть MedBalans"><div className="project-topline"><span className="project-number">02</span><span className="status"><i />{" MedBalans"}</span></div><div><p className="project-type">Дети и взрослые</p><h3 className="long-title">Практическая медицина</h3><p className="project-description">Справочная платформа по заболеваниям, антибиотикам и вакцинации — для детей и взрослых.</p></div><div className="topic-list" aria-label="Возможности проекта"><span>Нозологии</span><span>Антибиотики</span><span>Вакцинация</span></div><span className="card-action">{"Открыть проект "}<span aria-hidden="true">↗</span></span></a><a className="project-card project-exam" href="https://medical-exam-platform-ten.vercel.app/ru" target="_top" aria-label="Открыть MED EXAM"><div className="project-topline"><span className="project-number">03</span><span className="status"><i />{" MED EXAM"}</span></div><div><p className="project-type">Обучение врачей</p><h3>MED EXAM</h3><p className="project-description">Подготовка врачей к экзаменам и легализации в Словакии: тесты, теория, профессиональная лексика и контроль прогресса.</p></div><div className="topic-list" aria-label="Возможности проекта"><span>Тесты</span><span>Теория</span><span>Словарь</span></div><span className="card-action">{"Открыть проект "}<span aria-hidden="true">↗</span></span></a></div>
        </section>
        <section className="news" id="news" aria-labelledby="news-title">
          <div className="news-label"><span className="news-pulse" aria-hidden="true" />Обновлено 15 сентября 2026</div>
          <div className="news-copy"><p className="eyebrow">Новостная лента</p><h2 id="news-title">Что нового в здоровье и медицине</h2><p>Короткие разборы исследований и важных обновлений — без сенсаций, с объяснением практического значения.</p><a className="news-action" href="/news">{"Читать новости "}<span aria-hidden="true">→</span></a></div>
          <div className="news-topics" aria-label="Темы новостной ленты"><span>Питание</span><span>Тренировки</span><span>Медицина</span></div>
        </section>
        <section className="author" id="author" aria-labelledby="author-title">
          <div className="author-kicker">
            <figure className="author-photo"><img src="/assets/mark-borisenko.jpeg" alt="Марк Борисенко" /></figure>
            <p>Врач · тренер<br />автор проектов</p>
          </div>
          <div className="author-copy">
            <p className="eyebrow">Об авторе</p>
            <h2 id="author-title">Марк Борисенко</h2>
            <p className="author-summary">Я врач с многолетним опытом работы в России и Финляндии, а также сертифицированный персональный тренер. Сейчас прохожу легализацию врачебной квалификации в Словакии.</p>
            <details className="author-details">
              <summary>Подробнее обо мне</summary>
              <div>
                <p>В 1997 году окончил медицинский факультет Петрозаводского государственного университета по специальности «Педиатрия».</p>
                <p>Профессиональный путь в России включал работу общим хирургом, детским хирургом, детским урологом-андрологом и врачом ультразвуковой диагностики. Также работал с медицинской статистикой в информационно-аналитическом центре.</p>
                <p>После переезда в Финляндию два года работал врачом общей практики. Сейчас живу в Словакии и прохожу процесс легализации врачебной квалификации.</p>
                <p>Я также сертифицированный персональный тренер по программе Menno Henselmans. Медицинский и спортивный опыт, а также жизнь и работа в разных странах позволяют мне рассматривать здоровье, питание, физическую активность и профессиональную адаптацию с разных сторон — научно, практично и без лишнего упрощения.</p>
              </div>
            </details>
          </div>
        </section>
      </main>
      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>BALANS</span></a><p>Информация на сайте носит образовательный характер и не заменяет консультацию врача.</p><p>© 2026 BALANS</p></footer>
    </>
  );
}
