const scrollToForm = () => {
  const el = document.getElementById("pre-register");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FloatingCtaButton = () => (
  <button
    type="button"
    onClick={scrollToForm}
    className="fixed bottom-6 right-6 z-[90] inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_hsl(var(--primary)/0.4),0_0_48px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:shadow-[0_0_32px_hsl(var(--primary)/0.5),0_0_56px_hsl(var(--primary)/0.2)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    style={{
      background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(30 100% 55%) 100%)",
    }}
    aria-label="Перейти к анкете предзаписи"
  >
    Анкета предзаписи
  </button>
);

export default FloatingCtaButton;
