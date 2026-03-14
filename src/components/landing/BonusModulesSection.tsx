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
      <h2 className="heading-lg mb-8">
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
          <div className="accent-card p-6 md:p-7 h-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-display">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-md text-lg md:text-xl normal-case">{b.title}</h3>
            </div>
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

