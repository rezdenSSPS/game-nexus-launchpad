import { Button } from "@/components/ui/button";
import { ChevronDown, User, LogIn } from "lucide-react";
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

const gameHostings = [
    { name: "Minecraft", price: 2.00, slug: "minecraft" },
    { name: "FiveM", price: 6.00, slug: "fivem" },
    { name: "Rust", price: 4.00, slug: "rust" },
];
  
const otherGames = [
    { name: "Arma 3", price: 5.00, slug: "arma3" },
    { name: "DayZ", price: 4.50, slug: "dayz" },
    { name: "Palworld", price: 3.50, slug: "palworld" },
    { name: "Valheim", price: 3.00, slug: "valheim" },
    { name: "Terraria", price: 2.50, slug: "terraria" },
    { name: "ARK", price: 5.50, slug: "ark" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const { selectedCurrency, setSelectedCurrency, availableCurrencies } = useCurrency();

  const handleGameClick = (slug: string) => {
    navigate(`/game/${slug}`);
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
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Game Hostings
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-6 w-[800px] bg-gradient-to-br from-card to-muted/50">
                  <h3 className="text-lg font-bold text-primary mb-4">Popular Games</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {gameHostings.map((game, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col p-4 hover:bg-primary/10 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border border-primary/20"
                        onClick={() => handleGameClick(game.slug)}
                      >
                        <span className="font-semibold text-foreground">{game.name}</span>
                        <span className="text-primary font-bold">from {selectedCurrency.symbol}{getConvertedPrice(game.price)}/month</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-accent mb-4">Other Games</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {otherGames.map((game, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col p-3 hover:bg-accent/10 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 border border-accent/20"
                        onClick={() => handleGameClick(game.slug)}
                      >
                        <span className="text-sm font-medium text-foreground">{game.name}</span>
                        <span className="text-accent font-bold text-sm">from {selectedCurrency.symbol}{getConvertedPrice(game.price)}/mo</span>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">Other Hostings</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                        <p className="text-sm text-muted-foreground">Coming soon...</p>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">Info</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                        <p className="text-sm text-muted-foreground">Coming soon...</p>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">Support</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                        <p className="text-sm text-muted-foreground">Coming soon...</p>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center space-x-2 border-primary/30 hover:border-primary">
                <span>{selectedCurrency.code}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-primary/30">
              {Object.values(availableCurrencies).map((currency) => (
                <DropdownMenuItem
                  key={currency.code}
                  onClick={() => setSelectedCurrency(currency.code)}
                  className="hover:bg-primary/10"
                >
                  {currency.code} ({currency.symbol})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center space-x-2 hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open('https://stingerhost.eu/auth/login', '_blank')}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button 
              size="sm"
              className="flex items-center space-x-2 bg-gradient-primary hover:shadow-glow-primary"
              onClick={() => window.open('https://stingerhost.eu/auth/register', '_blank')}
            >
              <User className="h-4 w-4" />
              <span>Sign Up</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};