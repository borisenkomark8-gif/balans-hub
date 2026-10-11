import type { Metadata } from "next";
import InquiryForm from "./inquiry-form";

export const metadata: Metadata = {
  title: "Индивидуальное сопровождение — BALANS",
  description:
    "Индивидуальное сопровождение по питанию, тренировкам, контролю веса и поддержке образа жизни, в том числе при использовании GLP-1.",
  alternates: { canonical: "/coaching" },
  openGraph: {
    url: "/coaching",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS Hub" }],
  },
};

const directions = [
  {
    title: "Питание и коррекция пищевых привычек",
    text: "Практичная структура рациона, работа с привычками и реалистичные шаги без жёстких запретов.",
  },
  {
    title: "Тренировки и физическая активность",
    text: "Подбор нагрузки под цели, уровень подготовки и восстановление — с опорой на регулярность.",
  },
  {
    title: "Контроль веса и образ жизни",
    text: "Системный подход к весу через питание, движение, сон и устойчивые бытовые решения.",
  },
  {
    title: "Поддержка при использовании GLP-1",
    text: "Питание, активность, переносимость терапии и соблюдение рекомендаций лечащего врача. Без назначения лекарств и изменения дозировок.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <div className="platform-page">
        <header className="site-header platform-header">
          <a className="brand" href="/" aria-label="BALANS — на главную">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>BALANS</span>
          </a>
          <nav aria-label="Основная навигация">
            <a href="/balans">BALANS</a>
            <a href="/#projects">Проекты</a>
            <a href="/news">Новости</a>
            <a className="active" href="/coaching" aria-current="page">
              Сопровождение
            </a>
            <a href="/#author">Об авторе</a>
          </nav>
        </header>

        <main className="coaching-main">
          <section className="page-intro coaching-intro" aria-labelledby="coaching-title">
            <p className="eyebrow">Индивидуальная работа</p>
            <h1 id="coaching-title">Индивидуальное сопровождение</h1>
            <p>
              Короткие направления поддержки для тех, кому нужна персональная структура рядом с
              бесплатными приложениями BALANS. Это образовательное и практическое сопровождение, а не
              медицинское лечение.
            </p>
          </section>

          <section className="coaching-directions" aria-labelledby="directions-title">
            <h2 id="directions-title">Направления</h2>
            <ul>
              {directions.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <aside className="medical-note coaching-boundary">
            <strong>Важно.</strong> Сопровождение не включает назначение лекарств, изменение дозировок
            или медицинское лечение. Вопросы терапии решаются с лечащим врачом.
          </aside>

          <section className="coaching-form-section" aria-labelledby="inquiry-title">
            <div>
              <p className="eyebrow">Заявка</p>
              <h2 id="inquiry-title">Оставить запрос</h2>
              <p>
                Напишите имя, email, направление и короткое сообщение — заявка придёт владельцу
                проекта.
              </p>
            </div>
            <InquiryForm />
          </section>

          <a className="back-link" href="/">
            ← Вернуться на главную
          </a>
        </main>

        <footer>
          <a className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>BALANS</span>
          </a>
          <p>Информация на сайте носит образовательный характер и не заменяет консультацию врача.</p>
          <div className="footer-actions">
            <a
              className="support-link"
              href="https://ko-fi.com/balans"
              target="_blank"
              rel="noopener noreferrer"
            >
              Поддержать проект
            </a>
            <p>© 2026 BALANS</p>
          </div>
        </footer>
      </div>
    </>
  );
}
