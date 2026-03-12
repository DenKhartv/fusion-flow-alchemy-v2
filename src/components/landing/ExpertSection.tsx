import { Section, FadeUp } from "./SectionWrapper";
import ImagePlaceholder from "./ImagePlaceholder";

const facts = [
  { num: "3", label: "года в монтаже и работе с видео" },
  { num: "2", label: "года в DaVinci Resolve" },
  { num: "2", label: "года работы с Fusion" },
  { num: "650K", label: "₽ — самый дорогой проект" },
  { num: "250–300K", label: "₽/мес на монтаже и видео" },
];

const clients = ["ВкусВилл", "Жанулька", "Евгений Никитин", "Шоу Доктора"];

const ExpertSection = () => (
  <>
    {/* Why now — section 7 */}
    <Section>
      <FadeUp>
        <h2 className="heading-lg mb-8">Почему рынок всё больше платит<br /><span className="text-primary">за motion и VFX</span></h2>
      </FadeUp>
      <FadeUp delay={1}>
        <p className="text-body text-muted-foreground max-w-3xl mb-10">
          Сегодня клиент моментально видит разницу между обычным монтажом и работой, которая ощущается как реклама, брендовый ролик или cinematic-контент. Пока ты умеешь делать только базовый монтаж — ты конкурируешь в самом дешёвом сегменте. Как только у тебя появляется motion, Fusion и понимание визуальной логики — ты переходишь в другую категорию специалистов.
        </p>
      </FadeUp>
      <FadeUp delay={2}>
        <div className="flex flex-wrap gap-3">
          {["Выше чек", "Сильнее портфолио", "Меньше конкуренции"].map((t) => (
            <span key={t} className="badge-accent">{t}</span>
          ))}
        </div>
      </FadeUp>
    </Section>

    {/* Expert — section 8 */}
    <Section className="section-light">
      <FadeUp>
        <h2 className="heading-lg mb-2">Кто такой<br /><span className="text-primary">Антон Киселёв</span></h2>
      </FadeUp>
      <FadeUp delay={1}>
        <p className="text-body text-muted-foreground mb-12 max-w-2xl">
          Практик, который сам прошёл путь от монтажа к более дорогому визуалу через Fusion
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-4">
          <div className="image-placeholder aspect-[3/4] w-full overflow-hidden">
            <img
              src="/images/anton-expert.png"
              alt="Антон Киселёв"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {facts.map((f, i) => (
              <FadeUp key={i} delay={i}>
                <div className="glass-card p-5 text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">{f.num}</p>
                  <p className="text-xs text-dim mt-1 font-body">{f.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={3}>
            <p className="text-body text-muted-foreground">
              Антон работает на стыке монтажа, визуальной логики, motion и коммерческого контента. Для него Fusion — не дополнительная функция, а инструмент роста чека, качества работ и профессионального уровня.
            </p>
          </FadeUp>
          <FadeUp delay={4}>
            <div className="flex flex-wrap gap-2">
              {clients.map((c) => (
                <span key={c} className="badge-pill text-xs">{c}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>

    {/* Why created — section 9 */}
    <Section>
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-8">
          <FadeUp>
            <h2 className="heading-lg">Почему я собрал<br /><span className="text-primary">эту программу</span></h2>
          </FadeUp>
          <FadeUp delay={1}>
            <p className="text-body text-muted-foreground">
              Я начал глубоко изучать Fusion, потому что это один из тех инструментов, который сильно повышает чек, уровень работ и кругозор в визуале. Самое сложное — не эффекты сами по себе, а вход в систему. Пока не понимаешь логику Fusion, всё кажется хаосом. Когда понимаешь — сложность резко падает, и ты начинаешь собирать нужные решения гораздо быстрее.
            </p>
          </FadeUp>
          <FadeUp delay={2}>
            <blockquote className="accent-card p-6 text-lg font-medium italic font-body border-l-4 border-l-primary rounded-l-none">
              «Я потратил около 2 лет, чтобы разобраться в Fusion на своём текущем уровне — и собрал программу, которая проводит тебя по этой базе и практическому пути за 6 недель.»
            </blockquote>
          </FadeUp>
          <FadeUp delay={3}>
            <p className="text-body text-muted-foreground">
              Я сделал эту программу, чтобы сократить другим путь, который у меня занял намного больше времени: дать систему вместо хаоса, практику вместо бесконечных туториалов и помочь людям не только усилить навык, но и выйти на более дорогие проекты.
            </p>
          </FadeUp>
          <FadeUp delay={4}>
            <div className="glass-card p-6">
              <p className="text-body text-primary font-medium">
                Сильных учеников Антон рассматривает как будущую базу специалистов, которым можно делегировать реальные задачи.
              </p>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={2} className="lg:col-span-2">
          <div className="image-placeholder aspect-[3/4] w-full overflow-hidden">
            <img
              src="/images/anton-doc.png"
              alt="Антон Киселёв за работой"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>
    </Section>
  </>
);

export default ExpertSection;
