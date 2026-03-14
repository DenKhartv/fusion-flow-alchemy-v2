import { Section, FadeUp } from "./SectionWrapper";

const notHere = [
  "Не хаос из YouTube",
  "Не набор разрозненных кнопок",
  "Не абстрактные упражнения в вакууме",
  "Не «когда-нибудь пригодится»",
  "Не имитация практики",
];

const here = [
  "Система",
  "Понимание логики Fusion",
  "Коммерческий контекст",
  "Реальные задачи",
  "Обратная связь",
  "Портфолио",
  "Инструменты, которые сразу можно использовать в работе",
];

const steps = [
  {
    step: "Шаг 0",
    title: "Живой эфир / вебинар по мышлению",
    result: "Перед стартом участник правильно собирает мышление под рост в монтаже и дорогом визуале",
    topics: ["Блок мышления в монтаже", "Знакомство", "Эфир / вебинар перед стартом", "Настройка на работу как вход в новую профессиональную лигу"],
  },
  {
    step: "Шаг 01",
    title: "Предобучение — 5–7 дней",
    result: "Заходишь в первый основной урок и сразу работаешь, а не теряешь недели на базовых затыках",
    topics: ["Интерфейс DaVinci: монтаж, Fusion, переключение", "Горячие клавиши", "Базовая логика нод", "Структура папок, импорт, экспорт, форматы", "Рабочий график на 6 недель"],
  },
  {
    step: "Шаг 02",
    title: "Трекинг — 4 дня",
    result: "Берёшь задачи на встраивание, замену и приклейку элементов без страха",
    topics: ["Tracker", "Planar Tracker", "Surface Tracker", "Когда и какой трекер использовать", "Реальные задачи «приклей / встрои / замени»"],
  },
  {
    step: "Шаг 03",
    title: "2D Анимация",
    result: "Видео перестаёт быть просто монтажом — появляется motion и ощущение дорогой работы",
    topics: [
      "Работа с текстом",
      "Градиентная графика и фоны",
      "UI/UX элементы в Fusion",
      "Формы и шейпы",
      "Ключи и кривые",
      "Текстуры",
      "Базовые частицы в 2D-сценах",
      "Шаблоны для переиспользования",
    ],
  },
  {
    step: "Шаг 04",
    title: "3D Анимация",
    result: "Можешь брать референсы из рекламы крупных брендов и понимать, как их повторить",
    topics: ["Текст и 3D-пространство", "Формы в 3D", "Переход 2D → 3D", "Камера, стабилизация", "Ключи и кривые"],
  },
  {
    step: "Шаг 05",
    title: "Частицы",
    result: "Клиент просит «что-то эффектное» — ты предлагаешь решение и зарабатываешь больше",
    topics: ["Пыль, снег, дождь", "Распыление, взрывы", "Типы частиц и гравитация", "Управление поведением", "Эффекты как апсейл клиенту"],
  },
  {
    step: "Шаг 06",
    title: "Профессиональная анимация + Макросы и пресеты",
    result: "Проект, который раньше занимал 3 дня, теперь занимает 1 день",
    topics: ["AnimCurves", "Премиальное движение", "Макросы и пресеты", "Текстовые заготовки", "Шаблоны частиц, фонов, 2D", "Личная библиотека боевых решений"],
  },
];

const ProgramSection = () => (
  <>
    {/* Not just a course — section 11 */}
    <Section>
      <FadeUp>
        <h2 className="heading-lg mb-14">Это не теория<br /><span className="text-primary">ради теории</span></h2>
      </FadeUp>
      <div className="grid md:grid-cols-2 gap-8">
        <FadeUp delay={1}>
          <div className="matte-card p-8 md:p-10">
            <h3 className="text-caption mb-8 text-destructive/70">Не здесь</h3>
            <ul className="space-y-4">
              {notHere.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body text-muted-foreground">
                  <span className="text-destructive/60 shrink-0">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={2}>
          <div className="accent-card p-8 md:p-10">
            <h3 className="text-caption mb-8 text-primary">Здесь</h3>
            <ul className="space-y-4">
              {here.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body">
                  <span className="text-primary shrink-0">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </Section>

    {/* Program — section 12 */}
    <Section className="section-light" id="program">
      <FadeUp>
        <h2 className="heading-lg mb-20 leading-[1.15]">
          Программа<br />
          <span className="text-primary">«Чёрная магия Fusion»</span>
        </h2>
      </FadeUp>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <FadeUp key={i} delay={i * 0.5}>
              <div className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-primary hidden md:block" />

                <div className="glass-card p-7 md:p-9">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <span className="badge-accent text-xs">{s.step}</span>
                    <h3 className="heading-md text-lg md:text-xl normal-case">{s.title}</h3>
                  </div>
                  <p className="text-sm text-primary font-medium mb-5 font-body">Результат: {s.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.topics.slice(0, 3).map((t, ti) => (
                      <span key={ti} className="badge-pill text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  </>
);

export default ProgramSection;
