import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "@/context/CurrencyContext";

// Zde vložíme kompletní seznam všech vašich her
const allGamesList = [
    // Tyto slugy a logoUrl musí odpovídat vašim souborům!
    { name: "Minecraft", price: 2.00, slug: "minecraft", logoUrl: "/fotky/minecraft.webp" },
    { name: "FiveM", price: 6.00, slug: "fivem", logoUrl: "/fotky/fivem.webp" },
    { name: "Rust", price: 4.00, slug: "rust", logoUrl: "/fotky/rust.webp" },
    { name: "Arma 3", price: 5.00, slug: "arma-3", logoUrl: "/fotky/arma-3.webp" },
    { name: "DayZ", price: 4.50, slug: "dayz", logoUrl: "/fotky/dayz.webp" },
    { name: "Palworld", price: 3.50, slug: "palworld", logoUrl: "/fotky/palworld.webp" },
    { name: "Valheim", price: 3.00, slug: "valheim", logoUrl: "/fotky/valheim.webp" },
    { name: "Terraria", price: 2.50, slug: "terraria", logoUrl: "/fotky/terraria.webp" },
    { name: "ARK", price: 5.50, slug: "ark", logoUrl: "/fotky/ark.webp" },
    { name: "Team Fortress 2", price: 3.00, slug: "team-fortress-2", logoUrl: "/fotky/team-fortress-2.webp" },
    { name: "Insurgency: Sandstorm", price: 4.00, slug: "insurgency-sandstorm", logoUrl: "/fotky/insurgency-sandstorm.webp" },
    { name: "Left 4 Dead 2", price: 3.50, slug: "left-4-dead-2", logoUrl: "/fotky/left-4-dead-2.webp" },
    { name: "SA:MP", price: 2.00, slug: "samp", logoUrl: "/fotky/samp.webp" },
    { name: "American Truck Sim", price: 4.00, slug: "american-truck-simulator", logoUrl: "/fotky/american-truck-simulator.webp" },
    { name: "Euro Truck Sim 2", price: 4.00, slug: "euro-truck-simulator-2", logoUrl: "/fotky/euro-truck-simulator-2.webp" },
    { name: "V Rising", price: 4.50, slug: "v-rising", logoUrl: "/fotky/v-rising.webp" },
    { name: "The Forest", price: 4.00, slug: "the-forest", logoUrl: "/fotky/the-forest.webp" },
    { name: "Sons of the Forest", price: 4.50, slug: "sons-of-the-forest", logoUrl: "/fotky/sons-of-the-forest.webp" },
    { name: "Project Zomboid", price: 3.50, slug: "project-zomboid", logoUrl: "/fotky/project-zomboid.webp" },
    { name: "Enshrouded", price: 5.00, slug: "enshrouded", logoUrl: "/fotky/enshrouded.webp" },
    { name: "Minecraft Bedrock", price: 2.00, slug: "minecraft-bedrock-edition", logoUrl: "/fotky/minecraft-bedrock-edition.webp" },
];

const AllGamesPage = () => {
    const navigate = useNavigate();
    const { selectedCurrency } = useCurrency();

    const getConvertedPrice = (basePrice: number) => {
        return (basePrice * selectedCurrency.rate).toFixed(2);
    };

    const handleGameClick = (slug: string) => {
        navigate(`/game/${slug}`);
    };

    return (
        <div className="min-h-screen bg-gradient-hero">
            <Navigation />
            <div className="pt-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        All Available Games
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                        {allGamesList.map((game) => (
                            <Card 
                                key={game.slug}
                                className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-primary/20 hover:border-primary/50 bg-card"
                                onClick={() => handleGameClick(game.slug)}
                            >
                                <div className="flex flex-col items-center p-6 text-center">
                                    <img 
                                        src={game.logoUrl} 
                                        alt={`${game.name} logo`}
                                        className="w-24 h-24 mb-4 rounded-lg object-cover"
                                    />
                                    <h3 className="text-lg font-bold text-white mb-2">{game.name}</h3>
                                    <p className="text-primary font-bold">
                                        from {selectedCurrency.symbol}{getConvertedPrice(game.price)}/month
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllGamesPage;