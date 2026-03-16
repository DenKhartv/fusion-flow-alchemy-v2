import { useState, FormEvent } from "react";
import { Section, FadeUp } from "./SectionWrapper";
import ImagePlaceholder from "./ImagePlaceholder";

const FinalSection = () => {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [instagram, setInstagram] = useState("");
  const [pricePerVideo, setPricePerVideo] = useState("");
  const [problem, setProblem] = useState("");
  const [requestText, setRequestText] = useState("");
  const [experience, setExperience] = useState<string | null>(null);
  const [fusionLevel, setFusionLevel] = useState<string | null>(null);
  const [incomeMonth, setIncomeMonth] = useState<string | null>(null);
  const [readiness, setReadiness] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState({
    name: false,
    telegram: false,
    experience: false,
    fusion: false,
    pricePerVideo: false,
    incomeMonth: false,
    problem: false,
    request: false,
    readiness: false,
  });

  const baseChoiceClasses =
    "w-full rounded-lg border bg-background/80 px-4 py-3 text-sm font-body text-foreground text-left transition-colors transition-shadow cursor-pointer flex items-start justify-between gap-3";

  const unselectedClasses =
    "border-border/60 hover:border-primary/70 hover:bg-background/90";

  const selectedClasses =
    "border-primary shadow-[0_0_0_1px_rgba(255,106,0,0.35)] bg-background/95";

  const renderChoice = (
    current: string | null,
    setter: (value: string) => void,
    options: string[],
    opts?: { hasError?: boolean; onSelect?: (value: string) => void }
  ) => {
    const hasError = opts?.hasError;
    const onSelect = opts?.onSelect;

    return (
      <div className="grid gap-2 sm:grid-cols-2" role="radiogroup">
        {options.map((label) => {
          const value = label;
          const isSelected = current === value;
          const errorRing =
            hasError && !current && !isSelected
              ? "border-destructive/70"
              : "";

          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => {
                setter(value);
                onSelect?.(value);
              }}
              className={`${baseChoiceClasses} ${
                isSelected ? selectedClasses : unselectedClasses
              } ${errorRing}`}
            >
              <span className="break-words min-w-0">{label}</span>
              {isSelected && (
                <span className="text-primary text-xs font-medium shrink-0">
                  ✔
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    try {
      const trimmedName = name.trim();
      const trimmedTelegram = telegram.trim();
      const trimmedPricePerVideo = pricePerVideo.trim();
      const trimmedProblem = problem.trim();
      const trimmedRequest = requestText.trim();

      const nextErrors = {
        name: trimmedName === "",
        telegram: trimmedTelegram === "",
        experience: !experience,
        fusion: !fusionLevel,
        pricePerVideo: trimmedPricePerVideo === "",
        incomeMonth: !incomeMonth,
        problem: trimmedProblem === "",
        request: trimmedRequest === "",
        readiness: !readiness,
      };

      const hasErrors = Object.values(nextErrors).some(Boolean);
      if (hasErrors) {
        setErrors(nextErrors);
        setStatus("idle");
        return;
      }

      setStatus("idle");
      setIsSubmitting(true);

      const payload = {
        name,
        telegram,
        instagram,
        experience: experience ?? "",
        fusion: fusionLevel ?? "",
        price_per_video: pricePerVideo,
        monthly_income: incomeMonth ?? "",
        problem,
        request: requestText,
        readiness: readiness ?? "",
      };

      const response = await fetch("https://deniskhar.app.n8n.cloud/webhook/fusion-anketa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setErrors({
        name: false,
        telegram: false,
        experience: false,
        fusion: false,
        pricePerVideo: false,
        incomeMonth: false,
        problem: false,
        request: false,
        readiness: false,
      });

      // Опционально очищаем форму после успешной отправки
      setName("");
      setTelegram("");
      setInstagram("");
      setPricePerVideo("");
      setProblem("");
      setRequestText("");
      setExperience(null);
      setFusionLevel(null);
      setIncomeMonth(null);
      setReadiness(null);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    name.trim() !== "" &&
    telegram.trim() !== "" &&
    !!experience &&
    !!fusionLevel &&
    pricePerVideo.trim() !== "" &&
    !!incomeMonth &&
    problem.trim() !== "" &&
    requestText.trim() !== "" &&
    !!readiness;

  return (
  <>
    {/* Final CTA for first cohort */}
    <Section>
      <div className="grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 space-y-8">
          <FadeUp>
            <h2 className="heading-xl leading-[1.15]">
              <span className="block mb-3">Хочешь попасть в первый поток</span>
              <span className="block">«Чёрной магии Fusion»?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={1}>
            <h3 className="heading-md text-primary normal-case">
              Это программа для тех, кто хочет вырасти в визуале и уровне проектов.
            </h3>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="text-body text-muted-foreground max-w-xl">
              Сейчас мы собираем первый поток. Это не страница «купить сейчас», а заявка на участие — дальше мы связываемся и обсуждаем формат и условия.
            </p>
          </FadeUp>
          <FadeUp delay={3}>
            <div className="space-y-1">
              <div className="flex flex-wrap gap-4">
                <a href="#pre-register" className="btn-primary">Пройти анкету предзаписи</a>
                <a href="#program" className="btn-outline">Посмотреть программу ещё раз</a>
              </div>
              <p className="text-xs text-dim font-body">
                После анкеты мы свяжемся с тобой и расскажем детали участия.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={4}>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Первый поток", "Живой разбор работ", "Поддержка по ходу пути"].map((b) => (
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

    {/* Application form — pre-registration */}
    <Section className="section-light" id="pre-register">
      <FadeUp>
        <h2 className="heading-lg mb-4 text-center leading-[1.15]">
          Анкета предзаписи
        </h2>
      </FadeUp>
      <FadeUp delay={1}>
        <p className="text-body text-muted-foreground text-center max-w-2xl mx-auto mb-6">
          Оставь заявку, если хочешь попасть в первый поток программы «Чёрная магия Fusion».
        </p>
      </FadeUp>
      <FadeUp delay={2}>
        <p className="text-body text-muted-foreground text-center max-w-3xl mx-auto mb-10">
          Сейчас мы собираем первый поток. Количество мест будет ограничено, потому что часть обучения проходит с разбором работ и обратной связью.
        </p>
      </FadeUp>
      <FadeUp delay={3}>
        {status === "success" ? (
          <div className="max-w-2xl mx-auto glass-card p-8 space-y-5 text-center flex flex-col items-center">
            <h3 className="heading-md">Анкета отправлена</h3>
            <p className="text-body text-muted-foreground max-w-md">
              Спасибо, мы получили твою заявку.
              <br />
              Пока ждёшь ответ — забери бонусы и материалы в закрытом Telegram-канале.
            </p>
            <a
              href="https://t.me/+aYKfN4UYw4E0MThi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full sm:w-auto"
            >
              Забрать бонусы в Telegram
            </a>
            <p className="text-xs text-dim font-body max-w-md">
              Внутри канала: бонусные материалы, полезный контент по Fusion
              <br />
              и обновления по первому потоку программы.
            </p>
          </div>
        ) : (
          <form
            className="max-w-2xl mx-auto glass-card p-8 space-y-7"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-sm font-medium mb-2 block font-body">
                Имя<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              <input
                type="text"
                placeholder="Твоё имя"
                className={`w-full bg-background border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-dim focus:outline-none focus:ring-1 ${
                  errors.name
                    ? "border-destructive/70 focus:ring-destructive/70"
                    : "border-border focus:ring-primary"
                }`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) {
                    setErrors((prev) => ({ ...prev, name: false }));
                  }
                }}
              />
              {errors.name && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Заполни это поле
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-2 block font-body">
                  Твой @ник в Telegram<span className="text-destructive/80 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  className={`w-full bg-background border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-dim focus:outline-none focus:ring-1 ${
                    errors.telegram
                      ? "border-destructive/70 focus:ring-destructive/70"
                      : "border-border focus:ring-primary"
                  }`}
                  value={telegram}
                  onChange={(e) => {
                    setTelegram(e.target.value);
                    if (errors.telegram) {
                      setErrors((prev) => ({ ...prev, telegram: false }));
                    }
                  }}
                />
                {errors.telegram && (
                  <p className="text-xs text-destructive/80 font-body mt-1">
                    Заполни это поле
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block font-body">
                  Твой @ник в Instagram
                </label>
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-dim focus:outline-none focus:ring-1 focus:ring-primary"
                  value={instagram}
                  onChange={(e) => {
                    setInstagram(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block font-body">
                Сколько у тебя опыта в монтаже?<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              {renderChoice(
                experience,
                setExperience,
                ["Только начинаю", "До 6 месяцев", "6–12 месяцев", "1–2 года", "2+ года"],
                {
                  hasError: errors.experience,
                  onSelect: () =>
                    setErrors((prev) => ({ ...prev, experience: false })),
                }
              )}
              {errors.experience && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Выбери один вариант
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block font-body">
                Работаешь ли ты с Fusion в DaVinci Resolve?<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              {renderChoice(
                fusionLevel,
                setFusionLevel,
                [
                  "Да, уже использую",
                  "Немного пробовал",
                  "Слышал, но не работал",
                  "Вообще не знаю что это",
                ],
                {
                  hasError: errors.fusion,
                  onSelect: () =>
                    setErrors((prev) => ({ ...prev, fusion: false })),
                }
              )}
              {errors.fusion && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Выбери один вариант
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block font-body">
                Сколько ты обычно берёшь за монтаж одного видео?<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              <input
                type="text"
                placeholder="Например: 30 000 ₽ за ролик"
                className={`w-full bg-background border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-dim focus:outline-none focus:ring-1 ${
                  errors.pricePerVideo
                    ? "border-destructive/70 focus:ring-destructive/70"
                    : "border-border focus:ring-primary"
                }`}
                value={pricePerVideo}
                onChange={(e) => {
                  setPricePerVideo(e.target.value);
                  if (errors.pricePerVideo) {
                    setErrors((prev) => ({ ...prev, pricePerVideo: false }));
                  }
                }}
              />
              {errors.pricePerVideo && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Заполни это поле
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block font-body">
                Какой твой ежемесячный доход?<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              {renderChoice(
                incomeMonth,
                setIncomeMonth,
                [
                  "Не зарабатываю",
                  "До 30 000 руб.",
                  "30 000 - 50 000 руб.",
                  "50 000 - 100 000 руб.",
                  "100 000 - 150 000 руб.",
                  "150 000 - 250 000 руб.",
                  "От 250 000 руб.",
                ],
                {
                  hasError: errors.incomeMonth,
                  onSelect: () =>
                    setErrors((prev) => ({ ...prev, incomeMonth: false })),
                }
              )}
              {errors.incomeMonth && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Выбери один вариант
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block font-body">
                Что сейчас больше всего мешает тебе расти в монтаже?<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              <textarea
                placeholder="Опиши основные затыки: время, клиенты, навык, хаос в обучении и т.п."
                className={`w-full bg-background border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-dim focus:outline-none focus:ring-1 min-h-[100px] ${
                  errors.problem
                    ? "border-destructive/70 focus:ring-destructive/70"
                    : "border-border focus:ring-primary"
                }`}
                value={problem}
                onChange={(e) => {
                  setProblem(e.target.value);
                  if (errors.problem) {
                    setErrors((prev) => ({ ...prev, problem: false }));
                  }
                }}
              />
              {errors.problem && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Заполни это поле
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block font-body">
                Какой у тебя главный запрос на обучение?<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              <textarea
                placeholder="Например: усилить визуал, перейти на другие проекты, выстроить систему, прокачать Fusion"
                className={`w-full bg-background border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-dim focus:outline-none focus:ring-1 min-h-[100px] ${
                  errors.request
                    ? "border-destructive/70 focus:ring-destructive/70"
                    : "border-border focus:ring-primary"
                }`}
                value={requestText}
                onChange={(e) => {
                  setRequestText(e.target.value);
                  if (errors.request) {
                    setErrors((prev) => ({ ...prev, request: false }));
                  }
                }}
              />
              {errors.request && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Заполни это поле
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block font-body">
                Собираешься ли ты идти на мое обучение?<span className="text-destructive/80 ml-0.5">*</span>
              </label>
              {renderChoice(
                readiness,
                setReadiness,
                [
                  "Да, иду точно, без разницы сколько оно стоит",
                  "Скорее да, чем нет",
                  "Хочу узнать подробнее про формат",
                ],
                {
                  hasError: errors.readiness,
                  onSelect: () =>
                    setErrors((prev) => ({ ...prev, readiness: false })),
                }
              )}
              {errors.readiness && (
                <p className="text-xs text-destructive/80 font-body mt-1">
                  Выбери один вариант
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary w-full text-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? "Отправляем..." : "Отправить анкету"}
            </button>
            {status === "error" && (
              <p className="text-xs font-body text-center text-destructive/80 mt-2">
                Что-то пошло не так. Попробуй ещё раз.
              </p>
            )}
          </form>
        )}
      </FadeUp>
    </Section>

    {/* Footer */}
    <footer className="py-8 px-4 text-center">
      <p className="text-xs text-dim font-body">
        © 2026 Антон Киселёв — Чёрная магия Fusion. Все права защищены.
      </p>
    </footer>
  </>
  );
};

export default FinalSection;
