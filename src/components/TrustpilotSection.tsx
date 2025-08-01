import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const TrustpilotSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
            ))}
            <span className="text-2xl font-bold ml-2 text-primary">4.8/5</span>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            See what our customers say about our reliable hosting services
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-lg border border-primary/30">
              <div className="text-2xl font-bold text-primary">50,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 rounded-lg border border-accent/30">
              <div className="text-2xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-lg border border-primary/30">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
          <Button 
            onClick={() => window.open('#', '_blank')}
            className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
          >
            View on Trustpilot
          </Button>
        </div>
      </div>
    </section>
  );
};