import { Section, FadeUp } from "./SectionWrapper";
import ImagePlaceholder from "./ImagePlaceholder";

interface Module {
  title: string;
  desc: string;
  refs: string[];
  caption: string;
}

const modules: Module[] = [
  {
    title: "Трекинг",
    desc: "Берёшь задачи на замену, встраивание и приклейку элементов без страха",
    refs: ["Замена экрана", "Встраивание графики в сцену", "Логотип на движущейся поверхности"],
    caption: "Референс трекинга",
  },
  {
    title: "2D Анимация",
    desc: "Видео перестаёт быть просто монтажом — появляется motion и ощущение дорогой работы",
    refs: ["Анимация текста", "Плашки и графика", "UI / HUD overlays", "Градиентные motion-композиции"],
    caption: "Референс 2D motion",
  },
  {
    title: "3D Анимация",
    desc: "Ты сможешь брать референсы из рекламы и понимать, как их повторить",
    refs: ["3D текст в пространстве", "Камера и глубина", "Рекламный 3D visual"],
    caption: "Референс 3D сцены",
  },
  {
    title: "Частицы",
    desc: "Клиент просит что-то эффектное — ты не паникуешь, а предлагаешь решение",
    refs: ["Пыль / атмосфера", "Снег / дождь", "Распад / разлёт / частицы"],
    caption: "Референс эффектов частиц",
  },
  {
    title: "Макросы и пресеты",
    desc: "Проекты делаются быстрее, а выглядят дороже",
    refs: ["Шаблон текстовой анимации", "Reusable motion preset", "Готовая боевая заготовка"],
    caption: "Референс пресета / шаблона",
  },
];

const ModuleShowcaseSection = () => (
  <Section className="section-light">
    <FadeUp>
      <h2 className="heading-lg mb-3">Какой визуал ты научишься<br /><span className="text-primary">делать по модулям</span></h2>
    </FadeUp>
    <FadeUp delay={1}>
      <p className="text-body text-muted-foreground max-w-2xl mb-16">
        Не просто теория по Fusion, а конкретные визуальные результаты, которые ты сможешь собирать сам
      </p>
    </FadeUp>

    <div className="space-y-16">
      {modules.map((m, mi) => (
        <FadeUp key={mi} delay={mi}>
          <div>
            <div className="flex items-baseline gap-4 mb-3">
              <span className="number-big text-4xl opacity-30">{String(mi + 1).padStart(2, "0")}</span>
              <h3 className="heading-md">{m.title}</h3>
            </div>
            <p className="text-body text-muted-foreground mb-6 max-w-xl ml-14">{m.desc}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-14">
              {m.refs.map((ref, ri) => (
                <div key={ri} className="space-y-2">
                  <ImagePlaceholder caption={m.caption} aspectRatio="aspect-video" className="w-full" />
                  <p className="text-xs text-dim font-body">{ref}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  </Section>
);

export default ModuleShowcaseSection;
