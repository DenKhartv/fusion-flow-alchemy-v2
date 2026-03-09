import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } }),
};

export const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    custom={delay}
    variants={fadeUp}
    className={className}
  >
    {children}
  </motion.div>
);

export const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 md:py-32 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export const SectionDivider = () => <div className="divider max-w-7xl mx-auto" />;
