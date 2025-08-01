import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, LogIn, Globe } from "lucide-react";
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

const currencies = {
  USD: { symbol: "$", rate: 1.1 },
  EUR: { symbol: "€", rate: 1 },
  GBP: { symbol: "£", rate: 0.85 },
  CAD: { symbol: "C$", rate: 1.35 },
  AUD: { symbol: "A$", rate: 1.45 },
  JPY: { symbol: "¥", rate: 110 },
  CHF: { symbol: "CHF", rate: 0.92 },
  SEK: { symbol: "kr", rate: 10.5 }
};

const languages = {
  EN: "English",
  DE: "Deutsch",
  FR: "Français",
  ES: "Español",
  IT: "Italiano",
  NL: "Nederlands",
  PL: "Polski",
  CS: "Čeština"
};

const gameHostings = [
  { name: "Minecraft", price: "€2.00", slug: "minecraft" },
  { name: "FiveM", price: "€6.00", slug: "fivem" },
  { name: "Rust", price: "€4.00", slug: "rust" },
];

const otherGames = [
  { name: "Arma 3", price: "€5.00", slug: "arma3" },
  { name: "DayZ", price: "€4.50", slug: "dayz" },
  { name: "Palworld", price: "€3.50", slug: "palworld" },
  { name: "Valheim", price: "€3.00", slug: "valheim" },
  { name: "Terraria", price: "€2.50", slug: "terraria" },
  { name: "ARK", price: "€5.50", slug: "ark" },
  { name: "Team Fortress 2", price: "€3.00", slug: "tf2" },
  { name: "7 Days to Die", price: "€4.00", slug: "7days" },
  { name: "Sons of the Forest", price: "€4.50", slug: "forest" },
  { name: "SA:MP", price: "€2.00", slug: "samp" },
  { name: "Counter-Strike 2", price: "€3.50", slug: "cs2" },
  { name: "Garry's Mod", price: "€3.00", slug: "gmod" },
];

const otherHostings = [
  { name: "TeamSpeak", price: "€1.50", slug: "teamspeak" },
  { name: "Discord Bot", price: "€2.00", slug: "discord" },
  { name: "VPS", price: "€8.00", slug: "vps" },
];

export const Navigation = () => {
  const [currency, setCurrency] = useState<keyof typeof currencies>("EUR");
  const [language, setLanguage] = useState<keyof typeof languages>("EN");
  const navigate = useNavigate();

  const handleGameClick = (slug: string) => {
    navigate(`/game/${slug}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-card/95 to-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e941b86f-eb27-4baa-bdaf-7d47a53819b5.png" 
            alt="Stingerhost"
            className="h-8 w-auto"
          />
        </div>

        {/* Main Navigation */}
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
                        <span className="text-primary font-bold">{game.price}/month</span>
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
                        <span className="text-accent font-bold text-sm">{game.price}/mo</span>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Other Hostings
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[400px] bg-gradient-to-br from-card to-muted/50">
                  {gameHostings.map((game, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-3 hover:bg-primary/10 rounded-lg cursor-pointer transition-all duration-300 border border-primary/20 mb-2"
                      onClick={() => handleGameClick(game.slug)}
                    >
                      <span className="font-medium text-foreground">{game.name}</span>
                      <span className="text-primary font-bold">{game.price}/mo</span>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Info
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <p className="text-sm text-muted-foreground">Coming soon...</p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Support
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <p className="text-sm text-muted-foreground">Coming soon...</p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Currency & Auth */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center space-x-2 border-primary/30 hover:border-primary">
                <Globe className="h-4 w-4" />
                <span>{language}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-primary/30">
              {Object.entries(languages).map(([code, name]) => (
                <DropdownMenuItem
                  key={code}
                  onClick={() => setLanguage(code as keyof typeof languages)}
                  className="hover:bg-primary/10"
                >
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Currency Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center space-x-2 border-primary/30 hover:border-primary">
                <span>{currency}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-primary/30">
              {Object.entries(currencies).map(([curr, data]) => (
                <DropdownMenuItem
                  key={curr}
                  onClick={() => setCurrency(curr as keyof typeof currencies)}
                  className="hover:bg-primary/10"
                >
                  {curr} ({data.symbol})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
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