import { Section, FadeUp } from "./SectionWrapper";
import ImagePlaceholder from "./ImagePlaceholder";

const cases = [
  {
    title: "Шоу Доктора",
    task: "Популяризировать проект через короткий контент и усилить рост канала через Reels.",
    done: "Монтаж коротких видео, переработка подачи, усиление удержания, перестройка кадров и ритма роликов под более цепляющий формат.",
    results: [
      "Instagram: 0 → 113 000 подписчиков",
      "Рост с июля по декабрь",
      "YouTube: ~5 000 → ~40 000 подписчиков",
    ],
  },
  {
    title: "Анимационный ролик для стоматолога",
    task: "Сделать анимированный ролик, который переводит аудиторию в Taplink и помогает конвертировать интерес в заявки.",
    done: "Полностью анимированный ролик с использованием motion-подхода и Fusion-логики для презентации продукта и маршрута пользователя.",
    results: [
      "Конверсия ~90–95%",
      "Почти вдвое усилились продажи участия",
    ],
  },
  {
    title: "Коммерческие и продакшен-проекты",
    task: "Работа в продакшен-среде над коммерческим видеоконтентом для брендов, блогеров и командных проектов.",
    done: "Участвовал в создании видео для брендов, работал с контентом для блогеров и коммерческих проектов, собирал визуально более сильные ролики под задачи клиентов.",
    results: [],
  },
];

const caseBadges = ["Работа с брендами и компаниями", "Продакшен-опыт", "Блогеры и экспертный контент", "Проекты в коммерческой среде", "Опыт работы на фрилансе", "Самый дорогой проект — 450 000 ₽"];

const CasesSection = () => (
  <Section className="section-light">
    <FadeUp>
      <h2 className="heading-lg mb-2">Кейсы<br /><span className="text-primary">и результаты</span></h2>
    </FadeUp>
    <FadeUp delay={1}>
      <p className="text-body text-muted-foreground mb-12 max-w-2xl">
        Не теория ради теории, а реальные задачи, рост метрик и работающий контент
      </p>
    </FadeUp>

    <div className="grid lg:grid-cols-3 gap-6 mb-8">
      {cases.map((c, i) => (
        <FadeUp key={i} delay={i}>
          <div className="glass-card p-6 h-full flex flex-col">
            <ImagePlaceholder caption="Кадр результата" aspectRatio="aspect-video" className="w-full mb-6" />
            <h3 className="heading-md text-xl mb-3">{c.title}</h3>
            <p className="text-sm text-dim mb-2 font-body"><strong className="text-foreground">Задача:</strong> {c.task}</p>
            <p className="text-sm text-dim mb-4 font-body"><strong className="text-foreground">Что сделано:</strong> {c.done}</p>
            {c.results.length > 0 && (
              <ul className="space-y-1 mt-auto">
                {c.results.map((r, ri) => (
                  <li key={ri} className="text-sm text-primary font-medium font-body flex items-start gap-2">
                    <span className="shrink-0">→</span>{r}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp delay={4}>
      <div className="flex flex-wrap gap-2">
        {caseBadges.map((b) => (
          <span key={b} className="badge-pill text-xs">{b}</span>
        ))}
      </div>
    </FadeUp>
  </Section>
);

export default CasesSection;
