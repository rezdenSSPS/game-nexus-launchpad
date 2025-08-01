import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "./context/CurrencyContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GamePage from "./pages/GamePage";
import AllGamesPage from "./pages/AllGamesPage"; // Import nové stránky

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/games" element={<AllGamesPage />} /> {/* Přidána cesta pro stránku se všemi hrami */}
            <Route path="/game/:slug" element={<GamePage />} />
            {/* VŠECHNY VLASTNÍ CESTY PŘIDÁVEJTE NAD TENTO ŘÁDEK */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;