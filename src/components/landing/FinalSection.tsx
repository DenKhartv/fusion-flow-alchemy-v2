import { Section, FadeUp } from "./SectionWrapper";
import ImagePlaceholder from "./ImagePlaceholder";
import { IS_PRELAUNCH_VARIANT } from "@/config";

const FinalSection = () => (
  <>
    {/* Application — section 18 (only prelaunch variant) */}
    {IS_PRELAUNCH_VARIANT && (
      <Section className="section-light" id="apply">
        <FadeUp>
          <h2 className="heading-lg mb-6 text-center leading-[1.15]">
            Предзапись /<br />
            <span className="text-primary">диагностика</span>
          </h2>
        </FadeUp>
        <FadeUp delay={1}>
          <p className="text-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Перед стартом ты заполняешь анкету, чтобы зафиксировать текущий уровень, задачи и точку роста.
            По этой диагностике Антон понимает, как лучше провести тебя через программу.
          </p>
        </FadeUp>
        <FadeUp delay={2}>
          <div className="max-w-xl mx-auto glass-card p-8 space-y-6">
            {[
              { label: "Имя", type: "text", placeholder: "Твоё имя" },
              { label: "Telegram / контакт", type: "text", placeholder: "@username" },
              { label: "Опыт в монтаже", type: "text", placeholder: "Расскажи коротко" },
              { label: "Сколько ты сейчас берёшь за работу?", type: "text", placeholder: "Например: 30 000 ₽ за ролик" },
              { label: "Какие задачи хочешь научиться делать?", type: "text", placeholder: "Motion, VFX, трекинг..." },
            ].map((field, i) => (
              <div key={i}>
                <label className="text-sm font-medium mb-2 block font-body">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-dim focus:outline-none focus:ring-1 focus:ring-primary"
                  readOnly
                />
              </div>
            ))}
            <button className="btn-primary w-full text-center">Оставить предзапись</button>
          </div>
        </FadeUp>
      </Section>
    )}

    {/* Final CTA — section 19 */}
    <Section>
      <div className="grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 space-y-8">
          <FadeUp>
            <h2 className="heading-xl">
              Хватит быть просто<br />монтажёром.
            </h2>
          </FadeUp>
          <FadeUp delay={1}>
            <h3 className="heading-md text-primary normal-case">
              Стань специалистом, которому платят за визуал.
            </h3>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="text-body text-muted-foreground max-w-xl">
              Освой Fusion за 6 недель, собери портфолио из реальных задач и начни брать проекты другого уровня
            </p>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="btn-primary">Выбрать тариф</a>
              <a href="#program" className="btn-outline">Получить программу</a>
            </div>
          </FadeUp>
          <FadeUp delay={4}>
            <div className="flex flex-wrap gap-2 pt-4">
              {["6 недель", "Реальные проекты", "Поддержка", "Рост чека"].map((b) => (
                <span key={b} className="badge-pill text-xs">{b}</span>
              ))}
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={2} className="lg:col-span-1">
          <div className="image-placeholder aspect-[3/4] w-full max-w-xs mx-auto overflow-hidden">
            <img
              src="/images/anton-final.png"
              alt="Антон Киселёв"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>
    </Section>

    {/* Footer */}
    <footer className="py-8 px-4 text-center">
      <p className="text-xs text-dim font-body">© 2026 Антон Киселёв — Чёрная магия Fusion. Все права защищены.</p>
    </footer>
  </>
);

export default FinalSection;
