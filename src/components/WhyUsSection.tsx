import { Shield, Clock, HardDrive, Cpu, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "UPTIME GUARANTEE",
    description: "We guarantee reliable performance with minimal downtime thanks to server components so you can enjoy uninterrupted gaming. Rely on a professional infrastructure that's built for maximum stability."
  },
  {
    icon: Clock,
    title: "24/7 SUPPORT",
    description: "Whether it's day or night, our dedicated support team stands ready to assist you with any inquiries or issues you may encounter."
  },
  {
    icon: Shield,
    title: "PREMIUM DDOS PROTECTION",
    description: "Protect your gaming environment from malicious attacks with our robust DDoS protection from a trusted vendor, which with a capacity of over 17 Tbit/s ensures safe and stable gaming without downtime."
  },
  {
    icon: HardDrive,
    title: "NVME STORAGE",
    description: "Immerse yourself in lightning-fast load times and seamless performance with NVMe storage technology, providing unparalleled speed and responsiveness."
  },
  {
    icon: Cpu,
    title: "LATEST GENERATION PROCESSORS",
    description: "Elevate your gaming sessions with a high-performance processor Ryzen 7 9700x that effortlessly handles even the most demanding games, delivering an unrivaled level of performance."
  },
  {
    icon: Settings,
    title: "UNIQUE PANEL",
    description: "Control your server easily and efficiently with our intuitive dashboard that offers a plugin, mod and server version installer, server importer and many other features for maximum customization and convenience."
  }
];

export const WhyUsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground">Premium hosting with unmatched performance and support</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
