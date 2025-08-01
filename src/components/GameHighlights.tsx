import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import minecraftArtwork from "@/assets/minecraft-artwork.jpg";
import fivemArtwork from "@/assets/fivem-artwork.jpg";
import armaArtwork from "@/assets/arma-artwork.jpg";
import palworldArtwork from "@/assets/palworld-artwork.jpg";
import rustArtwork from "@/assets/rust-artwork.jpg";
import valheimArtwork from "@/assets/valheim-artwork.jpg";
import terrariaArtwork from "@/assets/terraria-artwork.jpg";
import arkArtwork from "@/assets/ark-artwork.jpg";

const games = [
  { 
    name: "MINECRAFT", 
    image: minecraftArtwork,
    description: "Java & Bedrock Editions",
    players: "Unlimited Players"
  },
  { 
    name: "FIVEM", 
    image: fivemArtwork,
    description: "GTA V Roleplay",
    players: "Up to 1024 Players"
  },
  { 
    name: "ARMA 3", 
    image: armaArtwork,
    description: "Military Simulation",
    players: "Tactical Combat"
  },
  { 
    name: "PALWORLD", 
    image: palworldArtwork,
    description: "Creature Survival",
    players: "Co-op Adventure"
  },
  { 
    name: "RUST", 
    image: rustArtwork,
    description: "Survival PvP",
    players: "Hardcore Survival"
  },
  { 
    name: "VALHEIM", 
    image: valheimArtwork,
    description: "Viking Co-op",
    players: "Norse Adventure"
  },
  { 
    name: "TERRARIA", 
    image: terrariaArtwork,
    description: "2D Adventure",
    players: "Dig, Fight, Build"
  },
  { 
    name: "ARK: SURVIVAL EVOLVED", 
    image: arkArtwork,
    description: "Dinosaur Survival",
    players: "Prehistoric World"
  },
];

export const GameHighlights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            GAME SERVER
          </h2>
          <p className="text-xl text-muted-foreground">Choose from 80+ supported games with instant setup</p>
        </div>

        {/* Game Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
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
                  <p className="text-sm text-gray-300 mb-2">{game.description}</p>
                  <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                    {game.players}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-4"
          >
            SEE ALL 80+ GAMES
          </Button>
        </div>
      </div>
    </section>
  );
};