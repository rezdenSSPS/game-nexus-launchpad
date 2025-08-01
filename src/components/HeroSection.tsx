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

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            GAME SERVER HOSTING
          </h1>
          <div className="text-3xl md:text-4xl font-bold mb-8 text-white">
            FOR 80+ TOP ONLINE GAMES
          </div>
          
          {/* Feature List */}
          <div className="text-left max-w-2xl mx-auto mb-8 space-y-3">
            <div className="flex items-center text-primary">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>Server hosting for 80+ games</span>
            </div>
            <div className="flex items-center text-primary">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>Pre-install 2,000+ Minecraft modpacks automatically</span>
            </div>
            <div className="flex items-center text-primary">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>24/7/365 support troubleshooting your server and mods</span>
            </div>
            <div className="flex items-center text-primary">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>Full file access</span>
            </div>
            <div className="flex items-center text-primary">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>20 Locations across the globe</span>
            </div>
            <div className="flex items-center text-primary">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>Advanced DDOS protection</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6"
          >
            CREATE SERVER
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