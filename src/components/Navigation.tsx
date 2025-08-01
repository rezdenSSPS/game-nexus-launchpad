import { Button } from "@/components/ui/button";
import { ChevronDown, User, LogIn, ArrowRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "@/context/CurrencyContext";

// --- NOVÁ A SPRÁVNÁ DATA PRO HRY ---

// Tři hlavní hry pro zobrazení nahoře
const mainGameHostings = [
    { name: "Minecraft", price: 2.00, slug: "minecraft", logoUrl: "/fotky/minecraft.webp" },
    { name: "DayZ", price: 4.50, slug: "dayz", logoUrl: "/fotky/dayz.webp" },
    { name: "Arma 3", price: 5.00, slug: "arma-3", logoUrl: "/fotky/arma-3.webp" },
];

// Sedm dalších her pro zobrazení v mřížce pod nimi
const featuredOtherGames = [
    { name: "FiveM", price: 6.00, slug: "fivem", logoUrl: "/fotky/fivem.webp" },
    { name: "Rust", price: 4.00, slug: "rust", logoUrl: "/fotky/rust.webp" },
    { name: "Palworld", price: 3.50, slug: "palworld", logoUrl: "/fotky/palworld.webp" },
    { name: "Valheim", price: 3.00, slug: "valheim", logoUrl: "/fotky/valheim.webp" },
    { name: "Terraria", price: 2.50, slug: "terraria", logoUrl: "/fotky/terraria.webp" },
    { name: "Sons of the Forest", price: 4.50, slug: "sons-of-the-forest", logoUrl: "/fotky/sons-of-the-forest.webp" },
    { name: "Team Fortress 2", price: 3.00, slug: "team-fortress-2", logoUrl: "/fotky/team-fortress-2.webp" },
];

const otherHostings = [
    { name: "TeamSpeak", price: 1.50, slug: "teamspeak", logoUrl: "/fotky/ts.webp" },
    { name: "Discord Bot", price: 2.00, slug: "discord", logoUrl: "/fotky/discord.webp" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const { selectedCurrency, setSelectedCurrency, availableCurrencies } = useCurrency();

  const handleLinkClick = (path: string) => {
    navigate(path);
  };
  
  const getConvertedPrice = (basePrice: number) => {
    return (basePrice * selectedCurrency.rate).toFixed(2);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-card/95 to-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e941b86f-eb27-4baa-bdaf-7d47a53819b5.png" 
            alt="Stingerhost"
            className="h-8 w-auto cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Game Hostings Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Game Hostings
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-6 w-[800px] bg-gradient-to-br from-card to-muted/50">
                  {/* Tři hlavní hry nahoře */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {mainGameHostings.map((game) => (
                      <div key={game.slug} className="flex items-center p-3 hover:bg-primary/10 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border border-primary/20" onClick={() => handleLinkClick(`/game/${game.slug}`)}>
                        <img src={game.logoUrl} alt={`${game.name} logo`} className="h-10 w-10 mr-4 rounded-md" />
                        <div>
                          <span className="font-semibold text-foreground">{game.name}</span>
                          <p className="text-primary font-bold text-sm">from {selectedCurrency.symbol}{getConvertedPrice(game.price)}/month</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Oddělovač */}
                  <div className="w-full h-px bg-border/50 my-4"></div>

                  {/* Další hry a tlačítko */}
                  <div className="grid grid-cols-4 gap-3">
                    {featuredOtherGames.map((game) => (
                       <div key={game.slug} className="flex items-center p-2 hover:bg-accent/10 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border border-accent/20" onClick={() => handleLinkClick(`/game/${game.slug}`)}>
                        <img src={game.logoUrl} alt={`${game.name} logo`} className="h-6 w-6 mr-3 rounded-md" />
                        <div>
                          <span className="text-sm font-medium text-foreground">{game.name}</span>
                          <p className="text-accent font-bold text-xs">from {selectedCurrency.symbol}{getConvertedPrice(game.price)}/mo</p>
                        </div>
                      </div>
                    ))}
                    {/* Tlačítko pro zobrazení všech her */}
                    <div 
                        className="flex items-center justify-center p-2 bg-primary/10 hover:bg-primary/20 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border border-primary/20 text-primary font-semibold text-sm" 
                        onClick={() => handleLinkClick('/games')}>
                        View All <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Other Hostings Dropdown */}
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">Other Hostings</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="p-4 w-[250px] grid gap-2 bg-gradient-to-br from-card to-muted/50">
                        {otherHostings.map((hosting) => (
                            <div key={hosting.slug} className="flex items-center p-3 hover:bg-primary/10 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border border-primary/20" onClick={() => handleLinkClick(`/game/${hosting.slug}`)}>
                                <img src={hosting.logoUrl} alt={`${hosting.name} logo`} className="h-8 w-8 mr-4 rounded-md" />
                                <div>
                                    <span className="font-semibold text-foreground">{hosting.name}</span>
                                    <p className="text-primary font-bold text-sm">from {selectedCurrency.symbol}{getConvertedPrice(hosting.price)}/month</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">Info</NavigationMenuTrigger>
                <NavigationMenuContent><div className="p-4 w-[200px]"><p className="text-sm text-muted-foreground">Coming soon...</p></div></NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">Support</NavigationMenuTrigger>
                <NavigationMenuContent><div className="p-4 w-[200px]"><p className="text-sm text-muted-foreground">Coming soon...</p></div></NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline" size="sm" className="flex items-center space-x-2 border-primary/30 hover:border-primary"><span>{selectedCurrency.code}</span><ChevronDown className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-primary/30">
              {Object.values(availableCurrencies).map((currency) => (
                <DropdownMenuItem key={currency.code} onClick={() => setSelectedCurrency(currency.code)} className="hover:bg-primary/10">{currency.code} ({currency.symbol})</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:bg-primary/10 hover:text-primary" onClick={() => window.open('https://stingerhost.eu/auth/login', '_blank')}><LogIn className="h-4 w-4" /><span>Login</span></Button>
            <Button size="sm" className="flex items-center space-x-2 bg-gradient-primary hover:shadow-glow-primary" onClick={() => window.open('https://stingerhost.eu/auth/register', '_blank')}><User className="h-4 w-4" /><span>Sign Up</span></Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
