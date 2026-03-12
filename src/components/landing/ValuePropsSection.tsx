import { Section, FadeUp } from "./SectionWrapper";

const cards = [
  "Как перейти от монтажёра к специалисту по дорогому визуалу",
  "Как поднять чек в 2–3 раза без увеличения количества работы",
  "Как перестать бояться сложных референсов, motion и VFX-задач",
  "Как собрать портфолио, которое продаёт тебя само",
];

const before = [
  "Монтируешь, но видео выглядят обычно",
  "Берёшь только простые задачи",
  "Боишься сложных референсов",
  "Не понимаешь, как повторять дорогой визуал / motion",
  "Учишься хаотично по YouTube",
  "Долго делаешь даже короткие ролики",
  "Чек растёт слишком медленно",
];

const after = [
  "Понимаешь Fusion как систему",
  "Умеешь делать motion, графику и VFX",
  "Увереннее берёшь сложные задачи",
  "Работаешь быстрее за счёт макросов и заготовок",
  "Собираешь продающее портфолио",
  "Повышаешь стоимость своей работы",
  "Переходишь из «просто монтажёра» в более дорогого специалиста",
];

const ValuePropsSection = () => (
  <>
    {/* Block 2 */}
    <Section className="section-light">
      <FadeUp>
        <h2 className="heading-lg mb-12 leading-[1.15]">
          За ближайшие 3–5 минут<br />
          <span className="text-primary">ты поймёшь:</span>
        </h2>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <FadeUp key={i} delay={i}>
            <div className="glass-card p-6 h-full flex items-start">
              <div>
                <span className="number-big text-4xl md:text-5xl opacity-30">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-body mt-3">{c}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>

    {/* Block 3 — For whom */}
    <Section>
      <FadeUp>
        <h2 className="heading-lg mb-6">Для кого<br /><span className="text-primary">эта программа</span></h2>
      </FadeUp>
      <FadeUp delay={1}>
        <p className="text-body text-muted-foreground max-w-3xl mb-12">
          Для монтажёров, которые уже работают с видео, но застряли на уровне обычного монтажа, хотят освоить Fusion, выйти на более дорогие проекты и поднять чек за счёт более сильного визуала
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6">
        <FadeUp delay={2}>
          <div className="matte-card p-8">
            <h3 className="heading-md text-muted-foreground mb-6">Сейчас</h3>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body text-muted-foreground">
                  <span className="text-destructive mt-1 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={3}>
          <div className="accent-card p-8">
            <h3 className="heading-md text-primary mb-6">После</h3>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-body">
                  <span className="text-primary mt-1 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </Section>
  </>
);

export default ValuePropsSection;
