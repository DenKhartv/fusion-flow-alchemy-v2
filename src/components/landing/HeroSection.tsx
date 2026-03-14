import { FadeUp } from "./SectionWrapper";

const badges = ["6 недель программы", "Реальные задачи и практика", "Портфолио в процессе обучения", "Поддержка после окончания"];

const HeroSection = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-8 pt-12 pb-20">
    {/* Background */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Base dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 70% 40%, rgba(255, 106, 0, 0.10), transparent 55%), radial-gradient(900px 700px at 55% 55%, rgba(255, 106, 0, 0.06), transparent 60%), linear-gradient(180deg, rgba(10,10,12,1) 0%, rgba(6,6,7,1) 100%)",
        }}
      />

      {/* Light trails */}
      <div
        className="absolute inset-0 opacity-[0.55] mix-blend-screen"
        style={{
          backgroundImage: "url(/images/hero-trails.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "70% 55%",
        }}
      />

      {/* Anton portrait as backdrop (subtle, masked) */}
      <div
        className="absolute inset-0 opacity-[0.36]"
        style={{
          backgroundImage: "url(/images/anton-portrait.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1320px auto",
          backgroundPosition: "70% 38%",
          filter: "blur(7px) saturate(1.08) contrast(1.12)",
          maskImage: "radial-gradient(ellipse at 60% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 60% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* Grain/noise for texture */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow accent */}
      <div
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, hsl(24 100% 50%), transparent 70%)" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto w-full relative z-10">
      {/* Content */}
      <div className="space-y-9 lg:pl-20">
        <FadeUp>
          <p className="text-caption">Онлайн-программа Антона Киселёва по Fusion в DaVinci Resolve</p>
        </FadeUp>

        <FadeUp delay={1}>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground font-body">Антон Киселёв</p>
            <p className="text-xs text-dim font-body">монтажёр / Fusion-специалист / автор программы</p>
          </div>
        </FadeUp>

        <FadeUp delay={2}>
          <h1 className="heading-xl">
            <span className="block">Чёрная</span>
            <span className="block">Магия</span>
            <span className="block text-primary">Fusion</span>
          </h1>
        </FadeUp>

        <FadeUp delay={3}>
          <p className="text-body text-muted-foreground max-w-2xl">
            За 6 недель ты освоишь Fusion в DaVinci Resolve<br />
            и выйдешь на уровень монтажа с VFX, за который платят 50–100к за проект.
          </p>
        </FadeUp>

        <FadeUp delay={4}>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="badge-pill text-xs">{b}</span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={5}>
          <div className="flex flex-wrap gap-4 pt-3">
            <a href="#pre-register" className="btn-primary">Заполнить анкету предзаписи</a>
            <a href="#pre-register" className="btn-outline">Я хочу в первый поток</a>
          </div>
        </FadeUp>
        <FadeUp delay={6}>
          <div className="space-y-1 pt-2">
            <p className="text-sm text-muted-foreground font-body">
              Сейчас мы собираем заявки в первый поток программы.
            </p>
            <p className="text-xs text-dim font-body">
              Анкета занимает около 2 минут.
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default HeroSection;
