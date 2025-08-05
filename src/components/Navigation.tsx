import { Button } from "@/components/ui/button";
import { ChevronDown, User, LogIn, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "@/context/CurrencyContext";
import { useAuth } from "@/context/AuthContext";
import { ArrowRight } from "lucide-react";

// Datové struktury pro hry (zůstávají stejné)
const mainGameHostings = [
    { name: "Minecraft", price: 2.00, slug: "minecraft", logoUrl: "/fotky/minecraft.webp" },
    { name: "DayZ", price: 4.50, slug: "dayz", logoUrl: "/fotky/dayz.webp" },
    { name: "Arma 3", price: 5.00, slug: "arma-3", logoUrl: "/fotky/arma-3.webp" },
];
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
    { name: "TeamSpeak", price: 1.50, slug: "teamspeak", logoUrl: "/fotky/teamspeak.webp" },
    { name: "Discord Bot", price: 2.00, slug: "discord", logoUrl: "/fotky/discord.webp" },
];


export const Navigation = () => {
  const navigate = useNavigate();
  const { selectedCurrency, setSelectedCurrency, availableCurrencies } = useCurrency();
  const { user, signInWithGoogle, signOut, isLoading } = useAuth();

  const handleLinkClick = (path: string) => {
    navigate(path);
  };
  
  const getConvertedPrice = (basePrice: number) => {
    return (basePrice * selectedCurrency.rate).toFixed(2);
  };

  // SVG pro Google ikonu
  const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.988,35.617,44,29.972,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-card/95 to-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex-1 flex items-center">{/* Logo a hlavní navigace */}</div>

        <div className="flex-1 flex items-center justify-center">
             {/* Navigace zde */}
        </div>

        <div className="flex-1 flex items-center justify-end space-x-4">
          <DropdownMenu>
            {/* ... Currency Switcher ... */}
          </DropdownMenu>

          {/* DYNAMICKÁ SEKCE PRO PŘIHLÁŠENÍ */}
          <div className="flex items-center">
            {isLoading ? (
              <div className="h-10 w-48 bg-muted rounded-md animate-pulse"></div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name} />
                      <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.user_metadata?.full_name || user.email}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={signInWithGoogle} className="bg-white text-gray-800 hover:bg-gray-200">
                <GoogleIcon className="mr-2 h-5 w-5" />
                Sign in with Google
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

