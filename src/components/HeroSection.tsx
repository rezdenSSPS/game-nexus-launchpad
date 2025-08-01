import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Clock, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const currencies = {
  USD: { symbol: "$", rate: 1.1 },
  EUR: { symbol: "€", rate: 1 },
  GBP: { symbol: "£", rate: 0.85 }
};

export const HeroSection = () => {
  const [currency, setCurrency] = useState<keyof typeof currencies>("EUR");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Currency Switcher */}
        <div className="absolute top-8 right-8">
          <div className="flex bg-card border border-border rounded-lg p-1">
            {Object.keys(currencies).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr as keyof typeof currencies)}
                className={`px-3 py-1 rounded text-sm transition-all ${
                  currency === curr
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Ultimate Game Hosting
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Minecraft, FiveM, Arma & More!
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Instant setup, 24/7 support, and lag-free performance. Pick your plan and play!
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6"
          >
            View Plans ({currencies[currency].symbol})
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <Shield className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="text-sm">99.9% Uptime</Badge>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Zap className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="text-sm">1-Click Modpacks</Badge>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Shield className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="text-sm">DDoS Protected</Badge>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="text-sm">Live Chat Support</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};