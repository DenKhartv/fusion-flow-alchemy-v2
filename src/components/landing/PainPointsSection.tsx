import { Section, FadeUp } from "./SectionWrapper";

const pains = [
  "Хочу делать крутые эффекты, но не понимаю, с чего начать",
  "Fusion выглядит как хаос и чёрный ящик",
  "Клиент кидает референс, а я не понимаю, как это повторить",
  "Видео выглядят дёшево, потому что в них нет motion и VFX",
  "Трачу слишком много времени даже на короткие ролики",
  "Из-за страха сложных задач теряю деньги",
];

const PainPointsSection = () => (
  <Section className="section-light">
    <FadeUp>
      <h2 className="heading-lg mb-10">С чем чаще всего<br /><span className="text-primary">приходят ко мне</span></h2>
    </FadeUp>
    <div className="grid md:grid-cols-2 gap-4">
      {pains.map((p, i) => (
        <FadeUp key={i} delay={i * 0.3}>
          <div className="glass-card p-5 md:p-6 h-full flex items-start gap-3">
            <span className="text-primary font-display text-xl font-bold opacity-40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-body">{p}</p>
          </div>
        </FadeUp>
      ))}
    </div>
  </Section>
);

export default PainPointsSection;
