import { Section, FadeUp } from "./SectionWrapper";

const ProofWaitlistCTA = () => (
  <Section>
    <FadeUp>
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="heading-md">
          Если ты хочешь выйти на такой уровень проектов — оставь заявку в первый поток
        </h2>
        <p className="text-body text-muted-foreground">
          Кейсами и отзывами выше мы показали, к какому уровню визуала и задачам ведёт программа. Если тебе откликается такой уровень — оставь заявку в первый поток.
        </p>
        <div className="space-y-1">
          <a href="#pre-register" className="btn-primary">
            Оставить заявку
          </a>
          <p className="text-xs text-dim font-body">
            После анкеты мы свяжемся с тобой и расскажем детали участия.
          </p>
        </div>
      </div>
    </FadeUp>
  </Section>
);

export default ProofWaitlistCTA;

