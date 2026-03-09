import ImagePlaceholder from "./ImagePlaceholder";
import { FadeUp } from "./SectionWrapper";

const badges = ["6 недель программы", "Реальные задачи и практика", "Портфолио в процессе обучения", "Поддержка после окончания"];

const HeroSection = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-8 pt-12 pb-20">
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(24 100% 50%), transparent 70%)" }} />
    </div>

    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
      {/* Left */}
      <div className="space-y-8">
        <FadeUp>
          <p className="text-caption">Онлайн-программа Антона Киселёва по Fusion и Motion в DaVinci Resolve</p>
        </FadeUp>

        <FadeUp delay={1}>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground font-body">Антон Киселёв</p>
            <p className="text-xs text-dim font-body">монтажёр / motion-специалист / автор программы</p>
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
          <p className="text-body text-muted-foreground max-w-lg">
            За 6 недель ты освоишь Fusion в DaVinci Resolve — и начнёшь делать видео, за которые платят в 2–3 раза больше
          </p>
        </FadeUp>

        <FadeUp delay={4}>
          <p className="text-sm text-dim font-body max-w-lg">
            Перестанешь гуглить туториалы, соберёшь портфолио из реальных работ, доведёшь свои проекты до результата и начнёшь брать задачи, от которых раньше отказывался
          </p>
        </FadeUp>

        <FadeUp delay={5}>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="badge-pill text-xs">{b}</span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={6}>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#program" className="btn-primary">Посмотреть программу</a>
            <a href="#pricing" className="btn-outline">Выбрать тариф</a>
          </div>
        </FadeUp>
      </div>

      {/* Right — Portrait placeholder */}
      <FadeUp delay={3} className="flex justify-center lg:justify-end">
        <ImagePlaceholder caption="Портрет Антона Киселёва" className="w-full max-w-md" aspectRatio="aspect-[3/4]" />
      </FadeUp>
    </div>
  </section>
);

export default HeroSection;
