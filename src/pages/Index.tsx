import ParticleBackground from "@/components/landing/ParticleBackground";
import ScrollProgressBar from "@/components/landing/ScrollProgressBar";
import FloatingCtaButton from "@/components/landing/FloatingCtaButton";
import HeroSection from "@/components/landing/HeroSection";
import ValuePropsSection from "@/components/landing/ValuePropsSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import ModuleShowcaseSection from "@/components/landing/ModuleShowcaseSection";
import ExpertSection from "@/components/landing/ExpertSection";
import CasesSection from "@/components/landing/CasesSection";
import TestimonialsFusionSection from "@/components/landing/TestimonialsFusionSection";
import ProgramSection from "@/components/landing/ProgramSection";
import BonusModulesSection from "@/components/landing/BonusModulesSection";
import ProgramWaitlistCTA from "@/components/landing/ProgramWaitlistCTA";
import BonusesSection from "@/components/landing/BonusesSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalSection from "@/components/landing/FinalSection";
import { SectionDivider } from "@/components/landing/SectionWrapper";
import MidPageWaitlistCTA from "@/components/landing/MidPageWaitlistCTA";
import ProofWaitlistCTA from "@/components/landing/ProofWaitlistCTA";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
    <ScrollProgressBar />
    <FloatingCtaButton />
    <ParticleBackground />
    <div className="relative z-10">
      <HeroSection />
    <SectionDivider />
    <ValuePropsSection />
    <SectionDivider />
    <PainPointsSection />
    <SectionDivider />
    <ResultsSection />
    <MidPageWaitlistCTA />
    <SectionDivider />
    <ModuleShowcaseSection />
    <SectionDivider />
    <ExpertSection />
    <SectionDivider />
    <CasesSection />
    <SectionDivider />
    <TestimonialsFusionSection />
    <ProofWaitlistCTA />
    <SectionDivider />
    <ProgramSection />
    <SectionDivider />
    <BonusModulesSection />
    <SectionDivider />
    <ProgramWaitlistCTA />
    <SectionDivider />
    <BonusesSection />
    <SectionDivider />
    <PricingSection />
    <SectionDivider />
    <FAQSection />
    <SectionDivider />
    <FinalSection />
    </div>
  </div>
);

export default Index;
