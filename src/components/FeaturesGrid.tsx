import { Card, CardContent } from "@/components/ui/card";
import { Globe, HardDrive, ShieldCheck, Bot } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Free Subdomain",
    description: "Get a free subdomain with every server for easy access and sharing."
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Lightning-fast NVMe SSD storage for optimal performance and quick load times."
  },
  {
    icon: ShieldCheck,
    title: "Auto Backups",
    description: "Automated daily backups to keep your server data safe and secure."
  },
  {
    icon: Bot,
    title: "Discord Bot Slots",
    description: "Host your Discord bots with reliable 24/7 uptime and easy management."
  }
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Premium Features Included</h2>
          <p className="text-xl text-muted-foreground">Everything you need for professional game hosting</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};