import { Section, FadeUp } from "./SectionWrapper";

const ProgramWaitlistCTA = () => (
  <Section>
    <FadeUp>
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="heading-md">
          Если чувствуешь, что это именно тот навык, который тебе нужен — подай заявку на участие
        </h2>
        <p className="text-body text-muted-foreground">
          Ты уже видел программу и бонусные модули. Следующий шаг — оставить анкету, чтобы мы понимали, с чем ты заходишь в поток.
        </p>
        <div className="space-y-1">
          <a href="#pre-register" className="btn-primary">
            Подать заявку
          </a>
          <p className="text-xs text-dim font-body">
            Заполнение анкеты занимает ~2 минуты.
          </p>
        </div>
      </div>
    </FadeUp>
  </Section>
);

export default ProgramWaitlistCTA;

