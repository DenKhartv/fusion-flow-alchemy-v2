import { Section, FadeUp } from "./SectionWrapper";

const ProofWaitlistCTA = () => (
  <Section>
    <FadeUp>
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="heading-md">
          Если тебе близок этот уровень работ — подай заявку в поток
        </h2>
        <p className="text-body text-muted-foreground">
          Кейсами и отзывами выше мы показали, к какому уровню визуала и задачам ведёт программа. Если тебе откликается такой уровень — оставь заявку в первый поток.
        </p>
        <a href="#pre-register" className="btn-primary">
          Оставить заявку
        </a>
      </div>
    </FadeUp>
  </Section>
);

export default ProofWaitlistCTA;

