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

            {m.title === "Трекинг" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-0 md:ml-14">
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/tracking-standard.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Трекинг объекта (Tracker)</p>
                </div>
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/tracking-planar.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Планарный трекинг (Planar Tracker)</p>
                </div>
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/tracking-surface.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Трекинг поверхности (Surface Tracker)</p>
                </div>
              </div>
            ) : m.title === "2D Анимация" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-0 md:ml-14">
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/2d-anim-1.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Анимация текста и элементов интерфейса</p>
                </div>
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/2d-anim-2.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Монтаж с 2D‑графикой и motion‑приёмами</p>
                </div>
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/2d-anim-3.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Рекламный ролик с кликабельным Taplink</p>
                </div>
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/2d-anim-4.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Анимация для B‑roll и динамики кадра</p>
                </div>
              </div>
            ) : m.title === "3D Анимация" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-14">
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/3d-anim-1.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">3D‑анимация с интеграцией в сцену</p>
                </div>
                <div className="space-y-2">
                  <div className="image-placeholder aspect-video w-full overflow-hidden">
                    <video
                      src="/videos/3d-anim-2.mp4"
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-xs text-dim font-body ml-1">Презентационный ролик с 3D‑плашками</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-14">
                {m.refs.map((ref, ri) => (
                  <div key={ri} className="space-y-2">
                    <ImagePlaceholder caption={m.caption} aspectRatio="aspect-video" className="w-full" />
                    <p className="text-xs text-dim font-body">{ref}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeUp>
      ))}
    </div>
  </Section>
);

export default ModuleShowcaseSection;
