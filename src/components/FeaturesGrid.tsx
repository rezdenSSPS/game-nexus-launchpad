import { MessageSquare, Shield, Zap, HardDrive, Cpu, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "UPTIME GUARANTEE",
    description: "Enjoy uninterrupted gaming with our reliable performance and professional infrastructure, built for maximum stability.",
    color: "text-cyan-400"
  },
  {
    icon: MessageSquare,
    title: "24/7 SUPPORT",
    description: "Day or night, our dedicated support team is ready to assist you with any questions or issues you may encounter.",
    color: "text-green-400"
  },
  {
    icon: Shield,
    title: "PREMIUM DDOS PROTECTION",
    description: "Our robust 17 Tbit/s DDoS protection ensures your gaming environment is safe from malicious attacks and downtime.",
    color: "text-purple-400"
  },
  {
    icon: HardDrive,
    title: "NVME STORAGE",
    description: "Experience lightning-fast load times and seamless performance with our cutting-edge NVMe storage technology.",
    color: "text-pink-400"
  },
  {
    icon: Cpu,
    title: "LATEST GENERATION PROCESSORS",
    description: "Handle even the most demanding games effortlessly with the unrivaled performance of our Ryzen 7 9700X processors.",
    color: "text-blue-400"
  },
  {
    icon: Settings,
    title: "UNIQUE PANEL",
    description: "Easily control your server with our intuitive panel, featuring installers for plugins, mods, and server versions.",
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
