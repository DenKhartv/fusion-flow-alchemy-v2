import { Section, FadeUp } from "./SectionWrapper";

const MidPageWaitlistCTA = () => (
  <Section className="section-light">
    <FadeUp>
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="heading-md">
          Если тебе откликается этот уровень работы — можно оставить заявку в первый поток
        </h2>
        <p className="text-body text-muted-foreground">
          После обучения ты выходишь на другой уровень визуала и задач. Анкета помогает понять, на каком ты сейчас этапе и что для тебя приоритетно.
        </p>
        <div className="space-y-1">
          <a href="#pre-register" className="btn-primary">
            Заполнить анкету
          </a>
          <p className="text-xs text-dim font-body">
            Заполнение анкеты занимает ~2 минуты.
          </p>
        </div>
      </div>
    </FadeUp>
  </Section>
);

export default MidPageWaitlistCTA;

