import { Section, FadeUp } from "./SectionWrapper";

const groupPoints = [
  "6 недель программы",
  "групповые разборы проектов",
  "чат участников и поддержка",
  "доступ ко всем материалам и записям",
  "финальный портфолио-проект",
  "доступ к ИИ-ассистенту после обучения",
];

const vipPoints = [
  "всё из формата «Группа»",
  "разборы твоих проектов",
  "личные сессии с Антоном",
  "приоритетная поддержка",
  "дополнительные шаблоны и заготовки",
  "помощь в применении Fusion в реальной работе",
];

const PricingSection = () => (
  <Section id="formats">
    <FadeUp>
      <h2 className="heading-lg mb-4 text-center leading-[1.15]">
        Форматы<br />
        <span className="text-primary">участия</span>
      </h2>
    </FadeUp>
    <FadeUp delay={1}>
      <p className="text-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Программа проходит в двух форматах участия.<br />
        Подробности и рекомендации по формату мы отправим после анкеты предзаписи.
      </p>
    </FadeUp>

    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Группа */}
      <FadeUp delay={2}>
        <div className="glass-card p-8 h-full flex flex-col">
          <h3 className="heading-md mb-2">Группа</h3>
          <p className="text-sm text-muted-foreground mb-6 font-body">
            Для тех, кто хочет пройти программу в потоке и системно разобраться в Fusion.
          </p>
          <ul className="space-y-2 mb-8 flex-1">
            {groupPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <span className="text-primary shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#pre-register" className="btn-outline text-center">
            Подать заявку
          </a>
        </div>
      </FadeUp>

      {/* Внедрение */}
      <FadeUp delay={3}>
        <div className="accent-card p-8 h-full flex flex-col relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <span className="badge-accent text-xs">Рекомендуем</span>
          </div>
          <h3 className="heading-md mb-2 text-primary">Внедрение</h3>
          <p className="text-sm text-muted-foreground mb-6 font-body">
            Формат с более плотной работой и фокусом на твоих проектах.
          </p>
          <ul className="space-y-2 mb-8 flex-1">
            {vipPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body">
                <span className="text-primary shrink-0">★</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#pre-register" className="btn-primary text-center">
            Подать заявку
          </a>
        </div>
      </FadeUp>
    </div>

    <FadeUp delay={4}>
      <p className="text-center text-sm text-dim font-body mt-8 max-w-xl mx-auto">
        Формат участия и детали программы мы обсуждаем после анкеты предзаписи.
      </p>
    </FadeUp>
  </Section>
);

export default PricingSection;
