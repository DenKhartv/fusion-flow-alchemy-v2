import HeroSection from "@/components/landing/HeroSection";
import ValuePropsSection from "@/components/landing/ValuePropsSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import ModuleShowcaseSection from "@/components/landing/ModuleShowcaseSection";
import ExpertSection from "@/components/landing/ExpertSection";
import CasesSection from "@/components/landing/CasesSection";
import TestimonialsFusionSection from "@/components/landing/TestimonialsFusionSection";
import ProgramSection from "@/components/landing/ProgramSection";
import BonusesSection from "@/components/landing/BonusesSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalSection from "@/components/landing/FinalSection";
import { SectionDivider } from "@/components/landing/SectionWrapper";
import MidPageWaitlistCTA from "@/components/landing/MidPageWaitlistCTA";
import ProofWaitlistCTA from "@/components/landing/ProofWaitlistCTA";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
    <BonusesSection />
    <SectionDivider />
    <FAQSection />
    <SectionDivider />
    <FinalSection />
  </div>
);

export default Index;
