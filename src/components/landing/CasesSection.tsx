import { Section, FadeUp } from "./SectionWrapper";

const CasesSection = () => (
  <>
    {/* SLIDE 1 — Major case study */}
    <Section className="section-light">
      <FadeUp>
        <h2 className="heading-lg mb-2">Кейс: <span className="text-primary">Шоу Доктора</span></h2>
      </FadeUp>
      <FadeUp delay={1}>
        <p className="text-body text-muted-foreground mb-6 max-w-2xl">
          <span className="text-primary font-medium">Контент-завод</span> коротких видео
        </p>
      </FadeUp>

      <FadeUp delay={2}>
        <p className="text-sm md:text-base font-body text-primary mb-12">
          <span className="font-display text-lg md:text-2xl font-bold">700+ коротких видео</span>
          <span className="text-muted-foreground"> → </span>
          <span className="font-display text-lg md:text-2xl font-bold">100&nbsp;000 подписчиков</span>
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <FadeUp delay={3}>
          <div className="glass-card p-6 md:p-8 h-full flex flex-col">
            <div className="image-placeholder media-frame aspect-[3/4] w-full mb-5 overflow-hidden">
              <img
                src="/images/doctora-start.png"
                alt="Instagram-профиль doctoreshow — старт проекта (~8 000 подписчиков)"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="heading-md text-xl mb-2">Старт проекта</h3>
            <p className="text-sm text-dim font-body">
              Аккаунт на момент начала создания имел 0 подписчиков!!!
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={4}>
          <div className="glass-card p-6 md:p-8 h-full flex flex-col">
            <div className="image-placeholder media-frame aspect-[3/4] w-full mb-5 overflow-hidden">
              <img
                src="/images/doctora-analytics.png"
                alt="Аналитика роста Instagram doctoreshow — график до 20 000 подписчиков"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="heading-md text-xl mb-2">Рост через систему Reels</h3>
            <p className="text-sm text-dim font-body">
              Системный выпуск коротких видео и оптимизация подачи контента.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={5}>
          <div className="glass-card p-6 md:p-8 h-full flex flex-col">
            <div className="image-placeholder media-frame aspect-video w-full mb-5 overflow-hidden">
              <img
                src="/images/doctora-100k.png"
                alt="Instagram-профиль doctoreshow — результат 100 000 подписчиков"
                className="h-full w-full object-contain bg-black"
                loading="lazy"
              />
            </div>
            <h3 className="heading-md text-xl mb-2">Результат</h3>
            <p className="text-sm text-dim font-body">
              Более 700 опубликованных роликов и рост аккаунта до 100&nbsp;000 подписчиков.
            </p>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={6}>
        <div className="max-w-3xl">
          <p className="text-body text-muted-foreground">
            Антон участвовал в создании и развитии контента для проекта «Доктора». Формат — короткие ролики для Instagram,
            собранные в систему регулярного выпуска и аналитики.
          </p>
        </div>
      </FadeUp>
    </Section>

    {/* SLIDE 2 — Single featured Reels case */}
    <Section className="section-light">
      <FadeUp>
        <h2 className="heading-lg mb-2">Кейс:<br /><span className="text-primary">один Reels → коммерческие предложения</span></h2>
      </FadeUp>
      <FadeUp delay={1}>
        <p className="text-body text-muted-foreground mb-14 max-w-2xl">
          Не теория ради теории, а один конкретный ролик, который открыл новые коммерческие возможности
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-5 gap-12 items-center mb-6">
        {/* Left — large Reels preview */}
        <FadeUp delay={2} className="lg:col-span-2">
          <div className="glass-card p-5 md:p-8 flex justify-center media-frame-accent">
            <div className="image-placeholder aspect-[9/16] w-full max-w-[280px] md:max-w-sm overflow-hidden rounded-lg">
              <video
                src="/videos/viral-reels.mp4"
                className="h-full w-full object-cover"
                controls
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </FadeUp>

        {/* Right — explanation and results */}
        <FadeUp delay={3} className="lg:col-span-3">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="heading-md text-2xl">Один Reels без бюджета</h3>
              <p className="text-body text-muted-foreground">
                Этот ролик Антон сделал для себя, без клиента и без бюджета.
                После публикации видео привлекло внимание и привело к новым предложениям о сотрудничестве.
              </p>
            </div>

            <div className="matte-card p-6 md:p-8">
              <h4 className="heading-md text-xl mb-5">Результат:</h4>
              <ul className="space-y-2">
                <li className="text-body text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-primary shrink-0">→</span>
                  <span className="font-medium text-primary">предложение о сотрудничестве от бренда ВкусВилл</span>
                </li>
                <li className="text-body text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-primary shrink-0">→</span>
                  <span className="font-medium text-primary">запрос от крупного инфлюенсера из сферы цветокоррекции</span>
                </li>
                <li className="text-body text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-primary shrink-0">→</span>
                  <span>ролик стал входной точкой в новые коммерческие проекты</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </Section>
  </>
);

export default CasesSection;
