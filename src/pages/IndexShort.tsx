import ParticleBackground from "@/components/landing/ParticleBackground";
import ScrollProgressBar from "@/components/landing/ScrollProgressBar";
import FloatingCtaButton from "@/components/landing/FloatingCtaButton";
import HeroSection from "@/components/landing/HeroSection";
import CasesSection from "@/components/landing/CasesSection";
import TestimonialsFusionSection from "@/components/landing/TestimonialsFusionSection";
import BonusModulesSection from "@/components/landing/BonusModulesSection";
import BonusesSection from "@/components/landing/BonusesSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalSection from "@/components/landing/FinalSection";
import { Section, FadeUp, SectionDivider } from "@/components/landing/SectionWrapper";

const ShortOrientationSection = () => (
  <Section className="section-light">
    <FadeUp>
      <h2 className="heading-lg mb-6 leading-[1.15]">
        За ближайшие 2–3 минуты<br />
        <span className="text-primary">ты поймёшь</span>
      </h2>
    </FadeUp>
    <div className="grid sm:grid-cols-3 gap-4">
      {[
        "Как перейти от обычного монтажа к motion и VFX",
        "Как за счёт Fusion поднимать стоимость своих работ",
        "Как собирать проекты и портфолио без хаоса и туториалов",
      ].map((text, i) => (
        <FadeUp key={text} delay={i * 0.3}>
          <div className="glass-card p-5 h-full flex items-start">
            <div>
              <span className="number-big text-4xl md:text-5xl opacity-30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-body mt-3">{text}</p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  </Section>
);

const ShortForWhomSection = () => (
  <Section>
    <FadeUp>
      <h2 className="heading-lg mb-8">
        Для кого<br />
        <span className="text-primary">эта программа</span>
      </h2>
    </FadeUp>
    <FadeUp delay={1}>
      <div className="max-w-3xl mb-10 space-y-3">
        <p className="text-body text-muted-foreground">
          Для монтажёров, которые уже работают с видео, но хотят:
        </p>
        <ul className="text-body text-muted-foreground space-y-2">
          {[
            "освоить Fusion",
            "выйти на более дорогие проекты",
            "делать более сильный и современный визуал",
            "поднять стоимость своей работы",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>

    <div className="grid md:grid-cols-2 gap-6">
      <FadeUp delay={2}>
        <div className="matte-card p-8">
          <h3 className="heading-md text-muted-foreground mb-6">Сейчас</h3>
          <ul className="space-y-3 text-body text-muted-foreground">
            {[
              "делаешь обычный монтаж",
              "берёшь простые задачи",
              "боишься сложных референсов",
              "учишься хаотично",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-destructive/70 mt-0.5 shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>
      <FadeUp delay={3}>
        <div className="accent-card p-8">
          <h3 className="heading-md text-primary mb-6">После</h3>
          <ul className="space-y-3 text-body">
            {[
              "понимаешь Fusion как систему",
              "умеешь делать motion, графику и VFX",
              "увереннее берёшь сложные задачи",
              "собираешь портфолио под более дорогие проекты",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>
    </div>
  </Section>
);

const ShortPainSection = () => {
  const pains = [
    "Хочу делать крутые эффекты, но не понимаю, с чего начать",
    "Fusion выглядит как хаос и чёрный ящик",
    "По туториалу повторить могу, сам собрать — нет",
    "Клиент кидает референс, а я не понимаю, как это повторить",
    "Видео выглядят дёшево, потому что в них нет motion и VFX",
    "Теряю деньги из-за страха сложных задач",
  ];

  return (
    <Section className="section-light">
      <FadeUp>
        <h2 className="heading-lg mb-10">
          С чем чаще всего<br />
          <span className="text-primary">приходят</span>
        </h2>
      </FadeUp>
      <div className="grid md:grid-cols-2 gap-4">
        {pains.map((p, i) => (
          <FadeUp key={p} delay={i * 0.3}>
            <div className="glass-card p-6 h-full flex items-start gap-3">
              <span className="text-primary font-display text-xl font-bold opacity-40 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-body">{p}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
};

const ShortResultsSection = () => {
  const results = [
    "Видео начнут выглядеть дороже",
    "Чек вырастет до 50–100к за проект",
    "Сложные проекты перестанут пугать",
    "Портфолио начнёт аккуратно продавать тебя",
    "Работа станет быстрее за счёт системы и заготовок",
  ];

  const transforms = [
    { from: "20–60k", to: "60–150k+", label: "доход" },
    { from: "хаос", to: "система", label: "подход к обучению" },
    { from: "монтажёр", to: "специалист", label: "роль" },
  ];

  return (
    <Section>
      <FadeUp>
        <h2 className="heading-lg mb-12">
          Что изменится<br />
          <span className="text-primary">после программы</span>
        </h2>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {results.map((r, i) => (
          <FadeUp key={r} delay={i * 0.3}>
            <div className="glass-card p-6 h-full flex flex-col gap-3">
              <h3 className="heading-md text-lg md:text-xl">{r}</h3>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay={2}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {transforms.map((t, i) => (
            <div key={t.label} className="accent-card p-5 text-center">
              <p className="text-caption mb-2">{t.label}</p>
              <p className="text-sm text-muted-foreground line-through font-body">{t.from}</p>
              <p className="text-xl font-bold text-primary font-display mt-1">{t.to}</p>
            </div>
          ))}
        </div>
      </FadeUp>
    </Section>
  );
};

const ShortVisualExamplesSection = () => (
  <Section className="section-light">
    <FadeUp>
      <h2 className="heading-lg mb-8">
        Какой визуал<br />
        <span className="text-primary">ты научишься делать</span>
      </h2>
    </FadeUp>
    <div className="space-y-8">
      <FadeUp delay={1}>
        <div className="glass-card p-6 md:p-8 space-y-4">
          <h3 className="heading-md mb-2 normal-case">01 Трекинг</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: "/videos/tracking-standard.mp4", label: "Трекинг объекта" },
              { src: "/videos/tracking-planar.mp4", label: "Планарный трекинг" },
              { src: "/videos/tracking-surface.mp4", label: "Трекинг поверхности" },
            ].map((item) => (
              <div key={item.src} className="space-y-2">
                <div className="image-placeholder media-frame aspect-video w-full overflow-hidden">
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    controls
                    muted
                    loop
                    playsInline
                  />
                </div>
                <p className="text-xs text-dim font-body ml-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={2}>
        <div className="glass-card p-6 md:p-8 space-y-4">
          <h3 className="heading-md mb-2 normal-case">02 2D Анимация</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: "/videos/2d-anim-1.mp4", label: "Анимация текста и интерфейса" },
              { src: "/videos/2d-anim-2.mp4", label: "Монтаж с 2D‑графикой" },
              { src: "/videos/2d-anim-3.mp4", label: "Рекламный ролик с motion" },
            ].map((item) => (
              <div key={item.src} className="space-y-2">
                <div className="image-placeholder media-frame aspect-video w-full overflow-hidden">
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    controls
                    muted
                    loop
                    playsInline
                  />
                </div>
                <p className="text-xs text-dim font-body ml-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={3}>
        <div className="glass-card p-6 md:p-8 space-y-4">
          <h3 className="heading-md mb-2 normal-case">03 3D / motion / коммерческий визуал</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: "/videos/viral-reels.mp4", label: "Коммерческий ролик с 3D‑элементами" },
              { src: "/videos/3d-anim-2.mp4", label: "Презентационный 3D‑визуал" },
              { src: "/videos/particles-dissolve.mp4", label: "Эффектные VFX с частицами" },
            ].map((item) => (
              <div key={item.src} className="space-y-2">
                <div className="image-placeholder media-frame aspect-video w-full overflow-hidden">
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    controls
                    muted
                    loop
                    playsInline
                  />
                </div>
                <p className="text-xs text-dim font-body ml-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  </Section>
);

const ShortWhyMarketSection = () => (
  <Section>
    <FadeUp>
      <h2 className="heading-lg mb-8">
        Почему рынок всё больше платит<br />
        <span className="text-primary">за motion и VFX</span>
      </h2>
    </FadeUp>
    <FadeUp delay={1}>
      <div className="max-w-3xl mb-8 space-y-4">
        <p className="text-body text-muted-foreground">
          Сегодня клиент быстро видит разницу между обычным монтажом и работой, которая ощущается как реклама, брендовый ролик или cinematic-контент.
        </p>
        <p className="text-body text-muted-foreground">
          Когда у тебя появляется motion, Fusion и понимание визуальной логики — ты переходишь в другую категорию специалистов.
        </p>
      </div>
    </FadeUp>
    <FadeUp delay={2}>
      <div className="flex flex-wrap gap-3">
        {["Выше чек", "Сильнее портфолио", "Меньше конкуренции"].map((t) => (
          <span key={t} className="badge-accent">
            {t}
          </span>
        ))}
      </div>
    </FadeUp>
  </Section>
);

const ShortNotTheorySection = () => (
  <Section>
    <FadeUp>
      <h2 className="heading-lg mb-10">
        Это не теория<br />
        <span className="text-primary">ради теории</span>
      </h2>
    </FadeUp>
    <div className="grid md:grid-cols-2 gap-6">
      <FadeUp delay={1}>
        <div className="matte-card p-8">
          <h3 className="text-caption mb-6 text-destructive/70">Не здесь</h3>
          <ul className="space-y-3 text-body text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-destructive/70 mt-0.5 shrink-0">✕</span>
              <span>хаос из YouTube</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive/70 mt-0.5 shrink-0">✕</span>
              <span>набор разрозненных кнопок</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive/70 mt-0.5 shrink-0">✕</span>
              <span>абстрактные упражнения</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive/70 mt-0.5 shrink-0">✕</span>
              <span>имитация практики</span>
            </li>
          </ul>
        </div>
      </FadeUp>
      <FadeUp delay={2}>
        <div className="accent-card p-8">
          <h3 className="text-caption mb-6 text-primary">Здесь</h3>
          <ul className="space-y-3 text-body">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>система</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>понимание логики Fusion</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>коммерческий контекст</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>реальные задачи</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>обратная связь</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>портфолио</span>
            </li>
          </ul>
        </div>
      </FadeUp>
    </div>
  </Section>
);

const ShortProgramSection = () => {
  const steps = [
    {
      step: "Шаг 0",
      title: "Живой эфир / вебинар по мышлению",
      result: "Собираешь мышление под рост в монтаже и дорогом визуале.",
    },
    {
      step: "Шаг 01",
      title: "Предобучение",
      result: "Входишь в первые уроки без базовых затыков и теряния времени.",
    },
    {
      step: "Шаг 02",
      title: "Трекинг",
      result: "Берёшь задачи на встраивание и замену элементов без страха.",
    },
    {
      step: "Шаг 03",
      title: "2D Анимация",
      result: "Видео перестаёт быть просто монтажом — появляется motion.",
    },
    {
      step: "Шаг 04",
      title: "3D Анимация",
      result: "Понимаешь, как повторять визуал из рекламы и больших проектов.",
    },
    {
      step: "Шаг 05",
      title: "Частицы",
      result: "Собираешь эффектные решения под коммерческие задачи.",
    },
    {
      step: "Шаг 06",
      title: "Премиальная анимация + Макросы",
      result: "Сокращаешь время проектов за счёт макросов и системы.",
    },
  ];

  return (
    <Section className="section-light">
      <FadeUp>
        <h2 className="heading-lg mb-10 leading-[1.15]">
          Программа<br />
          <span className="text-primary">«Чёрная магия Fusion»</span>
        </h2>
      </FadeUp>
      <div className="grid md:grid-cols-2 gap-5">
        {steps.map((s, i) => (
          <FadeUp key={s.step} delay={i * 0.3}>
            <div className="glass-card p-6 md:p-7 h-full flex flex-col gap-2">
              <span className="badge-accent text-xs w-fit mb-1">{s.step}</span>
              <h3 className="heading-md text-lg md:text-xl normal-case">{s.title}</h3>
              <p className="text-sm text-primary font-medium font-body">{s.result}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
};

const ShortIntermediateCTA = () => (
  <Section>
    <FadeUp>
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="heading-md">
          Если тебе близок этот уровень работ — оставь заявку в поток
        </h2>
        <p className="text-body text-muted-foreground">
          Мы показали, к какому уровню визуала и задач ведёт программа. Если тебе откликается такой уровень — заполни анкету предзаписи.
        </p>
        <div className="space-y-1">
          <a href="#pre-register" className="btn-primary">
            Оставить заявку
          </a>
          <p className="text-xs text-dim font-body">
            Заполнение анкеты занимает ~2 минуты.
          </p>
        </div>
      </div>
    </FadeUp>
  </Section>
);

const IndexShort = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
    <ScrollProgressBar />
    <FloatingCtaButton />
    <ParticleBackground />
    <div className="relative z-10">
      <HeroSection />
      <SectionDivider />
      <ShortOrientationSection />
      <SectionDivider />
      <ShortForWhomSection />
      <SectionDivider />
      <ShortPainSection />
      <SectionDivider />
      <ShortResultsSection />
      <SectionDivider />
      <ShortVisualExamplesSection />
      <SectionDivider />
      <ShortWhyMarketSection />
      <SectionDivider />
      <CasesSection />
      <SectionDivider />
      <TestimonialsFusionSection />
      <SectionDivider />
      <ShortIntermediateCTA />
      <SectionDivider />
      <ShortNotTheorySection />
      <SectionDivider />
      <ShortProgramSection />
      <SectionDivider />
      <BonusModulesSection />
      <SectionDivider />
      <BonusesSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <FinalSection />
    </div>
  </div>
);

export default IndexShort;

