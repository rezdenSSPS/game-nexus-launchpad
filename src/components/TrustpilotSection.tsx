import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

// SVG pro logo Trustpilotu
const TrustpilotLogo = () => (
  <svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
    <path fill="#00B67A" d="M31.623 11.875H19.876L16.002.502.5 11.875h11.75l-3.873 11.373L16.002 32l7.625-8.75L19.75 11.875h11.873z"></path>
  </svg>
);

export const TrustpilotSection = () => {
  
  // Funkce pro plynulé odscrollování k sekci s hrami
  const scrollToGames = () => {
    document.getElementById('main-games-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          
          <div className="flex justify-center mb-4">
            <a href="https://www.trustpilot.com/review/example.com" target="_blank" rel="noopener noreferrer" aria-label="Read our reviews on Trustpilot">
              <TrustpilotLogo />
            </a>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Rated <span className="text-green-400">Excellent</span> by Over
          </h2>
          <p className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            1000+ Happy Customers
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-xl font-semibold text-foreground">4.8 / 5.0</span>
            <div className="flex">
              {/* 4 plné hvězdy */}
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-green-400 fill-green-400" />
              ))}
              {/* Pátá hvězda, z 80% plná (pro hodnocení 4.8) */}
              <div className="relative h-6 w-6">
                 <Star className="absolute h-6 w-6 text-green-400/30 fill-green-400/30" />
                 <Star className="absolute h-6 w-6 text-green-400 fill-green-400" style={{ clipPath: 'inset(0 20% 0 0)' }} />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Zde jsme změnili "Happy Customers" na něco jiného */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/30 transform transition-transform hover:scale-105 hover:shadow-glow-primary">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Hosted Servers</div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg border border-accent/30 transform transition-transform hover:scale-105 hover:shadow-glow-accent">
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime Guarantee</div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/30 transform transition-transform hover:scale-105 hover:shadow-glow-primary">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Expert Support</div>
            </div>
          </div>
          
          {/* Tlačítko teď scrolluje na sekci her */}
          <Button 
            size="lg"
            onClick={scrollToGames}
            className="bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-glow-primary hover:scale-105 transition-all duration-300"
          >
            Explore Our Games
          </Button>
        </div>
      </div>
    </section>
  );
};```

### Shrnutí změn:

1.  **Odstraněno "Happy Customers":** V první kartě se statistikou jsem změnil text `Happy Customers` na `Hosted Servers`. Nyní to dává větší smysl a neopakuje se to.
2.  **Doplněn text "Expert Support":** U karty `24/7` jsem doplnil text na `Expert Support`, aby bylo jasné, čeho se to týká.
3.  **Vylepšené zobrazení hvězdiček:** Upravil jsem kód pro zobrazení hvězdiček, aby lépe a přesněji reprezentoval hodnocení 4.8 z 5.
4.  **Funkce tlačítka zachována:** Tlačítko stále odkazuje na sekci s hrami.

Po uložení a nahrání změn bude sekce vypadat přesně tak, jak jste si přál.
