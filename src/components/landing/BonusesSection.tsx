import { Section, FadeUp } from "./SectionWrapper";

const resultItems = [
  "Видео, которые не стыдно показывать клиенту",
  "Чек растёт за счёт визуала и задач",
  "Сложные проекты перестают пугать",
  "Портфолио работает как витрина для клиентов",
  "Каждый следующий проект собирается быстрее предыдущего",
];

const bonuses = [
  "Реальный оплачиваемый заказ с поддержкой в реализации",
  "Пак боевых заготовок и макросов",
  "Разбор твоего реального затыка на созвоне",
  "Поддержка после окончания программы",
  "Вебинар по медийке и работе с контентом",
  "Юридический блок от юриста",
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
        <h2 className="heading-lg mb-14">Помощь<br /><span className="text-primary">в реализации</span></h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <FadeUp delay={1}>
          <div className="accent-card p-8 md:p-10">
            <h3 className="text-caption text-primary mb-8">Результат</h3>
            <ul className="space-y-4">
              {resultItems.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-body">
                  <span className="text-primary shrink-0">✓</span>{r}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={2}>
          <div className="glass-card p-8 md:p-10">
            <h3 className="text-caption mb-8">Бонусы</h3>
            <ul className="space-y-4">
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
        <h2 className="heading-lg mb-10 leading-[1.15]">
          Кому программа<br />
          <span className="text-primary">не подойдёт</span>
        </h2>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {notFor.map((item, i) => (
          <FadeUp key={i} delay={i}>
            <div className="matte-card p-5 h-full">
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
