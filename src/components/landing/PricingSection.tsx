import { Section, FadeUp } from "./SectionWrapper";

const group = [
  "6 недель программы",
  "1 групповой созвон-разбор в неделю",
  "Чат с участниками и куратором",
  "Все материалы и записи",
  "Домашки на базе твоих реальных проектов",
  "Финальный портфолио-проект",
  "ИИ Антон после обучения",
];

const vip = [
  "2 гарантированных разбора твоего проекта за поток",
  "1 личная сессия в неделю (1 час)",
  "Приоритет в чате",
  "Разбор под твою задачу",
  "Пак апгрейда: доп. шаблоны, нодовые заготовки, секретные приёмы",
];

const PricingSection = () => (
  <>
    {/* Pricing — section 15 */}
    <Section id="pricing">
      <FadeUp>
        <h2 className="heading-lg mb-16 text-center leading-[1.15]">
          Что<br />
          <span className="text-primary">по чём</span>
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Group */}
        <FadeUp delay={1}>
          <div className="glass-card p-8 h-full flex flex-col">
            <h3 className="heading-md mb-1">Группа</h3>
            <p className="text-sm text-muted-foreground mb-6 font-body">Для тех, кто хочет пройти программу в группе и системно зайти в Fusion</p>
            <p className="font-display text-5xl font-bold text-foreground mb-8">60 000 <span className="text-xl text-muted-foreground">₽</span></p>
            <ul className="space-y-2 mb-8 flex-1">
              {group.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                  <span className="text-primary shrink-0">→</span>{g}
                </li>
              ))}
            </ul>
            <a href="#apply" className="btn-outline text-center">Выбрать тариф</a>
          </div>
        </FadeUp>

        {/* VIP */}
        <FadeUp delay={2}>
          <div className="accent-card p-8 h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="badge-accent text-xs">Рекомендуем</span>
            </div>
            <h3 className="heading-md mb-1 text-primary">Внедрение</h3>
            <p className="text-sm text-muted-foreground mb-2 font-body">Всё из «Группы» +</p>
            <p className="font-display text-5xl font-bold text-primary mb-8">90 000 <span className="text-xl text-muted-foreground">₽</span></p>
            <ul className="space-y-2 mb-8 flex-1">
              {vip.map((v, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-body">
                  <span className="text-primary shrink-0">★</span>{v}
                </li>
              ))}
            </ul>
            <div className="badge-accent text-xs self-start mb-4">Мест: 10</div>
            <a href="#apply" className="btn-primary text-center">Выбрать тариф</a>
          </div>
        </FadeUp>
      </div>
    </Section>

    {/* Guarantee — section 16 */}
    <Section className="section-light">
      <FadeUp>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-8">Гарантия<br /><span className="text-primary">результата</span></h2>
          <p className="text-body text-muted-foreground">
            Если после программы ты не сможешь самостоятельно собрать проект с использованием Fusion — проводим дополнительную личную сессию до результата.
          </p>
        </div>
      </FadeUp>
    </Section>
  </>
);

export default PricingSection;
