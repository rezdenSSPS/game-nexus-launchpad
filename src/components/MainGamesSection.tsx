import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import minecraftArtwork from "@/assets/minecraft-artwork.jpg";
import rustArtwork from "@/assets/rust-artwork.jpg";
import armaArtwork from "@/assets/arma-artwork.jpg";

const mainGames = [
  { 
    name: "Minecraft", 
    image: minecraftArtwork,
    description: "Java & Bedrock Edition Support"
  },
  { 
    name: "DayZ", 
    image: "/placeholder-game.png",
    description: "Survival Gaming Experience"
  },
  { 
    name: "Rust", 
    image: rustArtwork,
    description: "Hardcore Survival PvP"
  },
  { 
    name: "Arma 3", 
    image: armaArtwork,
    description: "Military Simulation Gaming"
  },
];

export const MainGamesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Main Games
          </h2>
          <p className="text-xl text-muted-foreground">Popular server hosting for top gaming experiences</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainGames.map((game, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden border-border/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1">{game.name}</h3>
                  <p className="text-sm text-gray-300">{game.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-4"
          >
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};