import { useState } from "react";
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

const currencies = {
  USD: { symbol: "$", rate: 1.1 },
  EUR: { symbol: "€", rate: 1 },
  GBP: { symbol: "£", rate: 0.85 }
};

const gameHostings = [
  { name: "Minecraft", image: "/placeholder-game.png" },
  { name: "FiveM", image: "/placeholder-game.png" },
  { name: "Team Fortress 2", image: "/placeholder-game.png" },
  { name: "DayZ", image: "/placeholder-game.png" },
  { name: "Arma 3", image: "/placeholder-game.png" },
  { name: "American Truck Simulator", image: "/placeholder-game.png" },
  { name: "American Truck Simulator 2", image: "/placeholder-game.png" },
  { name: "Sons of the Forest", image: "/placeholder-game.png" },
  { name: "7 Days to Die", image: "/placeholder-game.png" },
  { name: "Terraria", image: "/placeholder-game.png" },
  { name: "Palworld", image: "/placeholder-game.png" },
  { name: "SA:MP", image: "/placeholder-game.png" },
  { name: "Rust", image: "/placeholder-game.png" },
];

const otherHostings = [
  { name: "TeamSpeak", image: "/placeholder-service.png" },
  { name: "Discord", image: "/placeholder-service.png" },
];

export const Navigation = () => {
  const [currency, setCurrency] = useState<keyof typeof currencies>("EUR");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
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
              <NavigationMenuTrigger className="text-foreground">
                Game Hostings
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-3 gap-4 p-6 w-[600px]">
                  {gameHostings.map((game, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-accent rounded-lg cursor-pointer">
                      <img 
                        src={game.image} 
                        alt={game.name}
                        className="w-8 h-8 rounded"
                      />
                      <span className="text-sm">{game.name}</span>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground">
                Other Hostings
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-[200px]">
                  {otherHostings.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-accent rounded-lg cursor-pointer">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-6 h-6 rounded"
                      />
                      <span className="text-sm">{service.name}</span>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground">
                Info
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <p className="text-sm text-muted-foreground">Coming soon...</p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground">
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
          {/* Currency Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <span>{currency}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.keys(currencies).map((curr) => (
                <DropdownMenuItem
                  key={curr}
                  onClick={() => setCurrency(curr as keyof typeof currencies)}
                >
                  {curr}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center space-x-2"
              onClick={() => window.open('https://stingerhost.eu/auth/login', '_blank')}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button 
              size="sm"
              className="flex items-center space-x-2"
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