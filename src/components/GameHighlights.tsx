import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const games = [
  { name: "Minecraft Java", icon: "🧱", players: "Unlimited" },
  { name: "Minecraft Bedrock", icon: "📱", players: "Cross-Platform" },
  { name: "FiveM", icon: "🚗", players: "Up to 1024" },
  { name: "Arma 3", icon: "🪖", players: "Military Sim" },
  { name: "Rust", icon: "⚔️", players: "Survival" },
  { name: "CS:GO", icon: "🎯", players: "Competitive" },
  { name: "Valheim", icon: "🛡️", players: "Viking Co-op" },
  { name: "Palworld", icon: "🐾", players: "Creature Survival" },
];

const services = [
  {
    id: "game-hosting",
    title: "Game Hosting",
    description: "High-performance servers for 20+ popular games with instant setup and mod support."
  },
  {
    id: "vps",
    title: "VPS Hosting",
    description: "Powerful virtual private servers with full root access and SSD storage."
  },
  {
    id: "discord-bots",
    title: "Discord Bots",
    description: "24/7 Discord bot hosting with easy deployment and reliable uptime."
  }
];

export const GameHighlights = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">20+ Supported Games</h2>
          <p className="text-xl text-muted-foreground">From Minecraft to military simulators - we host them all</p>
        </div>

        {/* Game Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {games.map((game, index) => (
            <Card key={index} className="hover:shadow-glow-primary transition-all duration-300 cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{game.icon}</div>
                <h3 className="font-medium text-sm mb-1">{game.name}</h3>
                <Badge variant="outline" className="text-xs">{game.players}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Tabs */}
        <Tabs defaultValue="game-hosting" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="text-sm">
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};