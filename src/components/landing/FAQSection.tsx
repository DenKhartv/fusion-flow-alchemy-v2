import { Section, FadeUp } from "./SectionWrapper";
import { useState } from "react";

const faqs = [
  { q: "«Я научусь на YouTube бесплатно»", a: "YouTube учит отдельным действиям, но не даёт систему, обратную связь и маршрут от хаоса к рабочему уровню." },
  { q: "«Fusion слишком сложный»", a: "Он сложный, пока ты не понимаешь его логику. Со структурой программы логика становится понятной с первых шагов." },
  { q: "«Не уверен, что окупится»", a: "Один заказ с motion или VFX может уже заметно приблизить окупаемость." },
  { q: "«У меня нет времени»", a: "Обучение должно встраиваться в реальную работу, а не существовать отдельно от неё." },
  { q: "«Я новичок»", a: "Шаг 0 и предобучение 5–7 дней выравнивают вход и дают понятную систему старта." },
  { q: "«Мне пока не нужны сложные эффекты»", a: "Но именно такие навыки отделяют дешёвого монтажёра от более дорогого специалиста." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section>
      <FadeUp>
        <h2 className="heading-lg mb-12">Вопросы<br /><span className="text-primary">и возражения</span></h2>
      </FadeUp>
      <div className="max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <FadeUp key={i} delay={i * 0.5}>
            <div className="glass-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="text-body font-medium">{f.q}</span>
                <span className="text-primary text-2xl shrink-0 font-body transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-body text-muted-foreground">{f.a}</p>
                </div>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
};

export default FAQSection;
