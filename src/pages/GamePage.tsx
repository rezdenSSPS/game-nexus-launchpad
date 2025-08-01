import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Server, Users, Shield, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const gameData = {
  minecraft: {
    name: "Minecraft",
    description: "The ultimate sandbox game where creativity knows no bounds. Build, explore, and survive in infinite worlds.",
    features: [
      "Java & Bedrock Edition Support",
      "1-Click Modpack Installation",
      "Unlimited Player Slots",
      "Full FTP Access",
      "Custom JAR Support",
      "Automatic Backups"
    ],
    plans: [
      { name: "Dirt", price: 2, ram: "1 GB", cpu: "1 vCPU", storage: "10 GB" },
      { name: "Stone", price: 4, ram: "2 GB", cpu: "1 vCPU", storage: "20 GB" },
      { name: "Iron", price: 8, ram: "4 GB", cpu: "2 vCPU", storage: "30 GB", popular: true },
      { name: "Gold", price: 12, ram: "6 GB", cpu: "3 vCPU", storage: "60 GB" },
      { name: "Diamond", price: 16, ram: "8 GB", cpu: "4 vCPU", storage: "70 GB" },
      { name: "Emerald", price: 24, ram: "12 GB", cpu: "5 vCPU", storage: "80 GB" }
    ],
    color: "from-green-500 to-emerald-600"
  },
  fivem: {
    name: "FiveM",
    description: "Experience GTA V like never before with custom roleplay servers and unlimited modifications.",
    features: [
      "Up to 1024 Players",
      "Custom Resource Support",
      "OneSync Infinity",
      "Full Database Access",
      "Custom Scripts Support",
      "Anti-Cheat Protection"
    ],
    plans: [
      { name: "Starter", price: 6, ram: "2 GB", cpu: "2 vCPU", storage: "20 GB", slots: "32" },
      { name: "Standard", price: 12, ram: "4 GB", cpu: "3 vCPU", storage: "40 GB", slots: "64", popular: true },
      { name: "Premium", price: 20, ram: "8 GB", cpu: "4 vCPU", storage: "80 GB", slots: "128" },
      { name: "Ultimate", price: 35, ram: "16 GB", cpu: "6 vCPU", storage: "160 GB", slots: "256" }
    ],
    color: "from-purple-500 to-pink-600"
  },
  rust: {
    name: "Rust",
    description: "Survive in a harsh post-apocalyptic world where every decision matters and trust is rare.",
    features: [
      "Instant Server Setup",
      "Custom Map Support",
      "Oxide Plugin Support",
      "Wipe Scheduling",
      "RCON Access",
      "Performance Monitoring"
    ],
    plans: [
      { name: "Small", price: 4, ram: "2 GB", cpu: "2 vCPU", storage: "15 GB", slots: "50" },
      { name: "Medium", price: 8, ram: "4 GB", cpu: "3 vCPU", storage: "30 GB", slots: "100", popular: true },
      { name: "Large", price: 16, ram: "8 GB", cpu: "4 vCPU", storage: "60 GB", slots: "200" },
      { name: "Mega", price: 28, ram: "16 GB", cpu: "6 vCPU", storage: "120 GB", slots: "300" }
    ],
    color: "from-orange-500 to-red-600"
  },
  arma3: {
    name: "Arma 3",
    description: "Military tactical simulation with realistic combat scenarios and extensive modding support.",
    features: [
      "Military Simulation",
      "Mod Support",
      "Mission Editor",
      "Dedicated Server",
      "Custom Scenarios",
      "Team Operations"
    ],
    plans: [
      { name: "Squad", price: 5, ram: "2 GB", cpu: "2 vCPU", storage: "20 GB", slots: "20" },
      { name: "Platoon", price: 10, ram: "4 GB", cpu: "3 vCPU", storage: "40 GB", slots: "40", popular: true },
      { name: "Company", price: 18, ram: "8 GB", cpu: "4 vCPU", storage: "80 GB", slots: "80" }
    ],
    color: "from-green-600 to-olive-700"
  },
  palworld: {
    name: "Palworld",
    description: "Catch, train, and battle with mysterious creatures called Pals in this survival adventure.",
    features: [
      "Co-op Multiplayer",
      "Creature Collection",
      "Base Building",
      "Survival Elements",
      "Combat System",
      "Crafting & Trading"
    ],
    plans: [
      { name: "Basic", price: 3.5, ram: "2 GB", cpu: "2 vCPU", storage: "15 GB", slots: "8" },
      { name: "Standard", price: 7, ram: "4 GB", cpu: "3 vCPU", storage: "30 GB", slots: "16", popular: true },
      { name: "Premium", price: 14, ram: "8 GB", cpu: "4 vCPU", storage: "60 GB", slots: "32" }
    ],
    color: "from-blue-500 to-cyan-600"
  },
  valheim: {
    name: "Valheim",
    description: "Viking survival game where you explore a mystical world inspired by Norse mythology.",
    features: [
      "Viking Co-op",
      "Norse Mythology",
      "Exploration & Building",
      "Boss Battles",
      "Crafting System",
      "Dedicated Servers"
    ],
    plans: [
      { name: "Longboat", price: 3, ram: "2 GB", cpu: "2 vCPU", storage: "10 GB", slots: "10" },
      { name: "Drakkars", price: 6, ram: "4 GB", cpu: "3 vCPU", storage: "20 GB", slots: "20", popular: true },
      { name: "Warship", price: 12, ram: "8 GB", cpu: "4 vCPU", storage: "40 GB", slots: "40" }
    ],
    color: "from-amber-500 to-orange-600"
  },
  terraria: {
    name: "Terraria",
    description: "2D sandbox adventure game with endless possibilities for building, crafting, and exploration.",
    features: [
      "2D Adventure",
      "Dig, Fight, Build",
      "Boss Battles",
      "Multiplayer Co-op",
      "Extensive Crafting",
      "Mod Support"
    ],
    plans: [
      { name: "Small World", price: 2.5, ram: "1 GB", cpu: "1 vCPU", storage: "5 GB", slots: "8" },
      { name: "Medium World", price: 4, ram: "2 GB", cpu: "2 vCPU", storage: "10 GB", slots: "16", popular: true },
      { name: "Large World", price: 7, ram: "4 GB", cpu: "3 vCPU", storage: "20 GB", slots: "32" }
    ],
    color: "from-green-500 to-blue-600"
  },
  ark: {
    name: "ARK: Survival Evolved",
    description: "Survive in a world filled with dinosaurs and other prehistoric creatures.",
    features: [
      "Dinosaur Taming",
      "Prehistoric World",
      "Tribe System",
      "Base Building",
      "PvP & PvE",
      "Mod Support"
    ],
    plans: [
      { name: "Survivor", price: 5.5, ram: "4 GB", cpu: "2 vCPU", storage: "25 GB", slots: "20" },
      { name: "Tribe Leader", price: 11, ram: "8 GB", cpu: "3 vCPU", storage: "50 GB", slots: "40", popular: true },
      { name: "Alpha", price: 22, ram: "16 GB", cpu: "4 vCPU", storage: "100 GB", slots: "80" }
    ],
    color: "from-red-500 to-yellow-600"
  }
};

const GamePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const game = gameData[slug as keyof typeof gameData];
  
  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className={`py-20 bg-gradient-to-r ${game.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 relative z-10">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold text-white mb-6">{game.name}</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">{game.description}</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <Server className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Instant Setup</h3>
                  <p className="text-white/80">Server ready in under 60 seconds</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <Shield className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">DDoS Protection</h3>
                  <p className="text-white/80">Enterprise-grade security included</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <Zap className="h-8 w-8 text-white mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">High Performance</h3>
                  <p className="text-white/80">Latest Ryzen processors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Game Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {game.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-primary/20">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {game.plans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                      Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      €{plan.price.toFixed(2)}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        Ryzen 7 9700X {plan.cpu}
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {plan.ram} RAM
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {plan.storage} NVMe SSD
                      </div>
                      {plan.slots && (
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 text-primary mr-2" />
                          Up to {plan.slots} Players
                        </div>
                      )}
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        DDoS Protection
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        24/7 Support
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow-accent">
                      Get {plan.name} Server
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GamePage;