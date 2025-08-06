import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import minecraftArtwork from "@/assets/minecraft-artwork.jpg";
import rustArtwork from "@/assets/rust-artwork.jpg";
import armaArtwork from "@/assets/arma-artwork.jpg";
import fivemArtwork from "@/assets/fivem-artwork.jpg";
import palworldArtwork from "@/assets/palworld-artwork.jpg";
import valheimArtwork from "@/assets/valheim-artwork.jpg";
import terrariaArtwork from "@/assets/terraria-artwork.jpg";
import arkArtwork from "@/assets/ark-artwork.jpg";

const mainGames = [
  { 
    name: "Minecraft", 
    image: minecraftArtwork,
    description: "Java & Bedrock Edition Support",
    slug: "minecraft"
  },
  { 
    name: "FiveM", 
    image: fivemArtwork,
    description: "GTA V Roleplay Experience",
    slug: "fivem"
  },
  { 
    name: "Rust", 
    image: rustArtwork,
    description: "Hardcore Survival PvP",
    slug: "rust"
  },
  { 
    name: "Arma 3", 
    image: armaArtwork,
    description: "Military Simulation Gaming",
    slug: "arma3"
  },
  { 
    name: "Palworld", 
    image: palworldArtwork,
    description: "Creature Survival Adventure",
    slug: "palworld"
  },
  { 
    name: "Valheim", 
    image: valheimArtwork,
    description: "Viking Co-op Adventure",
    slug: "valheim"
  },
  { 
    name: "Terraria", 
    image: terrariaArtwork,
    description: "2D Adventure Building",
    slug: "terraria"
  },
  { 
    name: "ARK", 
    image: arkArtwork,
    description: "Dinosaur Survival World",
    slug: "ark"
  },
];

export const MainGamesSection = () => {
  const navigate = useNavigate();

  const handleGameClick = (slug: string) => {
    navigate(`/game/${slug}`);
  };

  return (
    <section id="main-games-section" className="py-20 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Main Games
          </h2>
          <p className="text-xl text-muted-foreground">Popular server hosting for top gaming experiences</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainGames.map((game, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow-primary transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden border-primary/20 hover:border-primary/50 bg-gradient-to-br from-card to-muted/30"
              onClick={() => handleGameClick(game.slug)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-primary/10 to-transparent" />
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
            className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-4 hover:scale-105"
            onClick={() => navigate('/games')}
          >
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};
