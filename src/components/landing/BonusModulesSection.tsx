import { Section, FadeUp } from "./SectionWrapper";

const bonuses = [
  {
    title: "Работа с клиентами",
    text: "Как выстраивать коммуникацию, работать с правками, вести проекты и расти в стоимости своих услуг.",
  },
  {
    title: "Юридическая часть",
    text: "Бонусный модуль с юристом: договор, акт, ТЗ и базовая безопасность при работе с клиентами.",
  },
  {
    title: "Медийка",
    text: "Как развивать личный бренд, собирать более дорогие проекты через публичность и контент.",
  },
  {
    title: "Цветокоррекция",
    text: "Модуль с приглашённым спикером, который разложит вам всё по полочкам.",
  },
];

const BonusModulesSection = () => (
  <Section className="section-light">
    <FadeUp>
      <h2 className="heading-lg mb-6">
        Бонусные<br />
        <span className="text-primary">модули</span>
      </h2>
    </FadeUp>
    <FadeUp delay={1}>
      <p className="text-body text-muted-foreground max-w-2xl mb-10">
        Дополнительные блоки, которые помогают не только освоить Fusion, но и сильнее зайти в профессию, работу с клиентами и рост чека.
      </p>
    </FadeUp>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {bonuses.map((b, i) => (
        <FadeUp key={b.title} delay={i * 0.3}>
          <div className="accent-card p-5 md:p-6 h-full flex flex-col gap-3">
            <h3 className="heading-md text-lg md:text-xl normal-case">{b.title}</h3>
            <p className="text-body text-muted-foreground text-sm md:text-base">
              {b.text}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>
  </Section>
);

export default BonusModulesSection;

