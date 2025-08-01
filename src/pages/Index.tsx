import { HeroSection } from "@/components/HeroSection";
import { GameHighlights } from "@/components/GameHighlights";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { PricingTable } from "@/components/PricingTable";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <HeroSection />
      <GameHighlights />
      <FeaturesGrid />
      <PricingTable />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
