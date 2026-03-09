import { Section, FadeUp } from "./SectionWrapper";

const pains = [
  "Хочу делать крутые эффекты, но не понимаю, с чего начать",
  "Fusion выглядит как хаос и чёрный ящик",
  "По туториалу повторить могу, сам собрать — нет",
  "Клиент кидает референс, а я не понимаю, как это повторить",
  "Видео выглядят дёшево, потому что в них нет motion и VFX",
  "Из-за страха сложных задач теряю деньги",
  "Учусь урывками и не чувствую системы",
  "Трачу слишком много времени даже на короткие ролики",
  "Застрял в сегменте дешёвого монтажа",
];

const PainPointsSection = () => (
  <Section className="section-light">
    <FadeUp>
      <h2 className="heading-lg mb-12">С чем чаще всего<br /><span className="text-primary">приходят ко мне</span></h2>
    </FadeUp>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pains.map((p, i) => (
        <FadeUp key={i} delay={i * 0.5}>
          <div className="glass-card p-6 h-full flex items-start gap-4">
            <span className="text-primary font-display text-2xl font-bold opacity-40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-body">{p}</p>
          </div>
        </FadeUp>
      ))}
    </div>
  </Section>
);

export default PainPointsSection;
