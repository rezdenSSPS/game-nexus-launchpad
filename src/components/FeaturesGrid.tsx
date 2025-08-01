import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Globe, Shield, Zap, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "24/7/365 SUPPORT",
    description: "Get the best customer support of any Minecraft server host. Our average support ticket reply time is under 15 minutes. Our passionate specialists will help get your server up and running.",
    color: "text-cyan-400"
  },
  {
    icon: Globe,
    title: "SERVERS WORLDWIDE FOR LOWER LATENCY", 
    description: "We offer game server hosting at 20 locations worldwide so that you can have a low latency wherever you're located.",
    color: "text-green-400"
  },
  {
    icon: Zap,
    title: "AUTOMATED MODPACK INSTALLATION",
    description: "Our Minecraft server hosting plans include automatic installation, making modpack server hosting a breeze with hundreds of mods and modpacks just a few clicks away.",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    title: "DDOS PROTECTION", 
    description: "All of our gaming servers are outfitted with DDoS protection to help you avoid downtime, including intentional DDoS attacks.",
    color: "text-purple-400"
  },
  {
    icon: Globe,
    title: "FREE DEDICATED SERVER IP",
    description: "When you choose our premium Minecraft server hosting option, your server is on port 25565 by default, so there's no need to enter extra port numbers after your server IP.",
    color: "text-pink-400"
  },
  {
    icon: Zap,
    title: "GAME SWAPPING",
    description: "Want to shake things up? You can swap your server to any of our 80+ covered games anytime, at no extra charge!",
    color: "text-orange-400"
  }
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            OUR FEATURES
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need for professional game hosting</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className={`mx-auto w-20 h-20 rounded-full bg-background/50 flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            See more features ↓
          </button>
        </div>
      </div>
    </section>
  );
};