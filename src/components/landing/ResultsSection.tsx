import { Section, FadeUp } from "./SectionWrapper";

const results = [
  { title: "Видео начнут выглядеть дороже", text: "Появится motion, графика, VFX и визуальная глубина." },
  { title: "Чек вырастет в 2–3 раза", text: "Потому что ты начнёшь делать то, что умеют не все." },
  { title: "Сложные проекты перестанут пугать", text: "Ты начнёшь понимать логику сборки эффектов, а не просто копировать действия из туториалов." },
  { title: "Портфолио начнёт продавать тебя само", text: "Вместо абстрактной учёбы — реальные работы и доведённые проекты." },
  { title: "Работа станет быстрее", text: "За счёт макросов, пресетов, нодовых шаблонов и выстроенного пайплайна." },
];

const transforms = [
  { from: "20–60k", to: "60–150k+", label: "доход" },
  { from: "хаос", to: "система", label: "обучение" },
  { from: "страх", to: "уверенность", label: "подход" },
  { from: "монтажёр", to: "специалист", label: "статус" },
];

const ResultsSection = () => (
  <Section>
    <FadeUp>
      <h2 className="heading-lg mb-12">Что изменится<br /><span className="text-primary">после программы</span></h2>
    </FadeUp>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
      {results.map((r, i) => (
        <FadeUp key={i} delay={i}>
          <div className={`glass-card p-8 h-full ${i === 0 ? 'lg:col-span-1' : ''}`}>
            <h3 className="heading-md text-xl mb-3">{r.title}</h3>
            <p className="text-body text-muted-foreground">{r.text}</p>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp delay={3}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {transforms.map((t, i) => (
          <div key={i} className="accent-card p-6 text-center">
            <p className="text-caption mb-2">{t.label}</p>
            <p className="text-sm text-muted-foreground line-through font-body">{t.from}</p>
            <p className="text-xl font-bold text-primary font-display mt-1">{t.to}</p>
          </div>
        ))}
      </div>
    </FadeUp>
  </Section>
);

export default ResultsSection;
