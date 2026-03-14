import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    custom={delay}
    variants={fadeUp}
    className={className}
  >
    {children}
  </motion.div>
);

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: (i?: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: i ?? 0,
    },
  }),
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const StaggerReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={staggerContainer}
    custom={delay}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerRevealItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);

export const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 md:py-40 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export const SectionDivider = () => <div className="max-w-7xl mx-auto py-6 md:py-10"><div className="divider w-full" /></div>;
