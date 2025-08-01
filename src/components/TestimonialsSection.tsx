import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex_Gaming",
    rating: 5,
    text: "Incredible performance! My Minecraft server runs flawlessly with zero lag. The 1-click modpack installation saved me hours.",
    game: "Minecraft Java"
  },
  {
    name: "FiveM_Master",
    rating: 5,
    text: "Best FiveM hosting I've used. Great support team and the server handles 200+ players without any issues.",
    game: "FiveM"
  },
  {
    name: "ArmaCommander",
    rating: 5,
    text: "Military-grade reliability for our Arma 3 operations. The DDoS protection is excellent and support is always there.",
    game: "Arma 3"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Gamers Worldwide</h2>
          <p className="text-xl text-muted-foreground">See what our community says about us</p>
          
          {/* Trustpilot Badge */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <span className="text-muted-foreground">Rated</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">on Trustpilot</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-sm text-primary">{testimonial.game}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};