import { Section, FadeUp } from "./SectionWrapper";

const resultItems = [
  "Начнёшь делать видео, которые не стыдно показывать клиенту",
  "Поднимешь чек в 2–3 раза",
  "Перестанешь бояться сложных проектов",
  "Соберёшь продающее портфолио",
  "Каждый следующий проект будет быстрее предыдущего",
];

const bonuses = [
  "Реальный оплачиваемый заказ от Антона с поддержкой в реализации",
  "Пак боевых заготовок",
  "Разбор твоего реального затыка на созвоне",
  "Поддержка после окончания курса",
  "Вебинар по медийке в Instagram",
  "Юридический блок через юриста",
  "ИИ-ассистент «ИИ-Антон»",
];

const notFor = [
  "Тем, кто хочет просто посмотреть уроки без практики",
  "Тем, кто не готов собирать портфолио",
  "Тем, кто хочет остаться в сегменте дешёвого монтажа",
  "Тем, кто ищет волшебную кнопку вместо системной работы",
  "Тем, кто не готов внедрять навык в реальные проекты",
];

const BonusesSection = () => (
  <>
    {/* Section 13 */}
    <Section>
      <FadeUp>
        <h2 className="heading-lg mb-12">Помощь<br /><span className="text-primary">в реализации</span></h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <FadeUp delay={1}>
          <div className="accent-card p-8">
            <h3 className="text-caption text-primary mb-6">Результат</h3>
            <ul className="space-y-3">
              {resultItems.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-body">
                  <span className="text-primary shrink-0">✓</span>{r}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={2}>
          <div className="glass-card p-8">
            <h3 className="text-caption mb-6">Бонусы</h3>
            <ul className="space-y-3">
              {bonuses.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-body text-muted-foreground">
                  <span className="text-primary shrink-0">+</span>{b}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </Section>

    {/* Section 14 — Not for */}
    <Section className="section-light">
      <FadeUp>
        <h2 className="heading-lg mb-10">Кому программа<br /><span className="text-primary">не подойдёт</span></h2>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notFor.map((item, i) => (
          <FadeUp key={i} delay={i}>
            <div className="matte-card p-6 h-full">
              <p className="text-body text-muted-foreground flex items-start gap-3">
                <span className="text-destructive/60 shrink-0 text-lg">✕</span>{item}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  </>
);

export default BonusesSection;
