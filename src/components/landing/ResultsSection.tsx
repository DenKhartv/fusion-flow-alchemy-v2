import { Section, FadeUp } from "./SectionWrapper";

const results = [
  { title: "Видео начнут выглядеть дороже", text: "Появится motion, графика, VFX и визуальная глубина." },
  { title: "Чек вырастет до 50–100к за проект", text: "Когда ты начинаешь делать то, что умеют не все — и берёшь более сложные задачи." },
  { title: "Сложные проекты перестанут пугать", text: "Ты начнёшь понимать логику сборки эффектов, а не просто копировать действия из туториалов." },
  { title: "Работа станет заметно быстрее", text: "За счёт системы, макросов, шаблонов и выстроенного пайплайна." },
];

const transforms = [
  { from: "20–60k", to: "60–150k+", label: "доход" },
  { from: "хаос", to: "система", label: "подход к обучению" },
  { from: "монтажёр", to: "специалист", label: "роль" },
];

const ResultsSection = () => (
  <Section>
    <FadeUp>
      <h2 className="heading-lg mb-16">Что изменится<br /><span className="text-primary">после программы</span></h2>
    </FadeUp>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {results.map((r, i) => (
        <FadeUp key={i} delay={i}>
          <div className="glass-card p-7 md:p-9 h-full flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-[0_0_24px_rgba(255,106,0,0.2)] shrink-0">
                <span className="font-display text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="heading-md text-lg md:text-xl">{r.title}</h3>
            </div>
            <p className="text-body text-muted-foreground">{r.text}</p>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp delay={2}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {transforms.map((t, i) => (
          <div key={i} className="accent-card p-5 md:p-6 text-center">
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
