import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const TrustpilotSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Trusted by Thousands</h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-lg font-semibold ml-2">4.8/5</span>
          </div>
          <p className="text-muted-foreground mb-8">
            See what our customers say about our reliable hosting services
          </p>
          <Button 
            onClick={() => window.open('#', '_blank')}
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
          >
            View on Trustpilot
          </Button>
        </div>
      </div>
    </section>
  );
};