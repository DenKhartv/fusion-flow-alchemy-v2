import { Section, FadeUp } from "./SectionWrapper";

const TestimonialsFusionSection = () => (
  <Section className="section-dark">
    <FadeUp>
      <h2 className="heading-lg mb-3">Что говорят<br /><span className="text-primary">после разбора Fusion</span></h2>
    </FadeUp>
    <FadeUp delay={1}>
      <p className="text-body text-muted-foreground mb-12 max-w-2xl">
        Отзывы монтажёров, которым Антон помог разобраться во Fusion
      </p>
    </FadeUp>

    <div className="relative">
      <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
        <FadeUp delay={2} className="basis-[260px] md:basis-[280px] lg:basis-[300px]">
          <div className="bg-white text-black rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] p-4 md:p-5 rotate-[-3deg]">
            <img
              src="/images/fusion-review-1.png"
              alt="Отзыв ученика о разборе Fusion"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </FadeUp>

        <FadeUp delay={3} className="basis-[220px] md:basis-[260px] lg:basis-[280px] translate-y-4 lg:translate-y-10">
          <div className="bg-white text-black rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] p-4 md:p-5 rotate-[2deg]">
            <img
              src="/images/fusion-review-2.png"
              alt="Отзыв о том, как стало легче работать во Fusion"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </FadeUp>

        <FadeUp delay={4} className="basis-[240px] md:basis-[260px] lg:basis-[300px] -translate-y-2 lg:-translate-y-6">
          <div className="bg-white text-black rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] p-4 md:p-5 rotate-[-1deg]">
            <img
              src="/images/fusion-review-3.png"
              alt="Отзыв о консультации по Fusion"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </FadeUp>

        <FadeUp delay={5} className="basis-[260px] md:basis-[280px] lg:basis-[320px] translate-y-2 lg:translate-y-6">
          <div className="bg-white text-black rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] p-4 md:p-5 rotate-[4deg]">
            <img
              src="/images/fusion-review-4.png"
              alt="Отзыв об обучении и разборе нод во Fusion"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>
    </div>
  </Section>
);

export default TestimonialsFusionSection;

