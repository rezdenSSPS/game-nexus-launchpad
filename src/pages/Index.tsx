import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TrustpilotSection } from "@/components/TrustpilotSection";
import { MainGamesSection } from "@/components/MainGamesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <TrustpilotSection />
        <MainGamesSection />
        <WhyUsSection />
        <FeaturesGrid />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
