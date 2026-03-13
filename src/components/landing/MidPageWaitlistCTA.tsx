import { Section, FadeUp } from "./SectionWrapper";

const MidPageWaitlistCTA = () => (
  <Section className="section-light">
    <FadeUp>
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="heading-md">
          Если ты хочешь попасть в первый поток — оставь заявку
        </h2>
        <p className="text-body text-muted-foreground">
          Сейчас мы собираем предзапись на первый поток программы. Заполни короткую анкету, чтобы мы могли вернуться к тебе с деталями.
        </p>
        <a href="#pre-register" className="btn-primary">
          Заполнить анкету предзаписи
        </a>
      </div>
    </FadeUp>
  </Section>
);

export default MidPageWaitlistCTA;

