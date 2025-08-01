import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const currencies = {
  USD: { symbol: "$", rate: 1.1 },
  EUR: { symbol: "€", rate: 1 },
  GBP: { symbol: "£", rate: 0.85 }
};

const minecraftPlans = [
  {
    name: "Dirt",
    basePrice: 2,
    cpu: "1 vCPU Ryzen 7 9700X",
    ram: "1 GB",
    storage: "10 GB NVMe SSD",
    slots: "5",
    databases: "5 DB (5 GB per DB)",
    popular: false
  },
  {
    name: "Stone",
    basePrice: 4,
    cpu: "1 vCPU Ryzen 7 9700X",
    ram: "2 GB",
    storage: "20 GB NVMe SSD",
    slots: "5",
    databases: "5 DB (5 GB per DB)",
    popular: false
  },
  {
    name: "Iron",
    basePrice: 8,
    cpu: "2 vCPU Ryzen 7 9700X",
    ram: "4 GB",
    storage: "30 GB NVMe SSD",
    slots: "5",
    databases: "5 DB (5 GB per DB)",
    popular: true
  },
  {
    name: "Gold",
    basePrice: 12,
    cpu: "3 vCPU Ryzen 7 9700X",
    ram: "6 GB",
    storage: "60 GB NVMe SSD",
    slots: "5",
    databases: "5 DB (5 GB per DB)",
    popular: false
  },
  {
    name: "Diamond",
    basePrice: 16,
    cpu: "4 vCPU Ryzen 7 9700X",
    ram: "8 GB",
    storage: "70 GB NVMe SSD",
    slots: "5",
    databases: "5 DB (5 GB per DB)",
    popular: false
  },
  {
    name: "Emerald",
    basePrice: 24,
    cpu: "5 vCPU Ryzen 7 9700X",
    ram: "12 GB",
    storage: "80 GB NVMe SSD",
    slots: "5",
    databases: "5 DB (5 GB per DB)",
    popular: false
  }
];

export const PricingTable = () => {
  const [currency, setCurrency] = useState<keyof typeof currencies>("EUR");

  const formatPrice = (price: number) => {
    const convertedPrice = (price * currencies[currency].rate).toFixed(2);
    return `${currencies[currency].symbol}${convertedPrice}`;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground">Transparent pricing with no hidden fees</p>
          
          {/* Currency Switcher */}
          <div className="flex justify-center mt-6">
            <div className="flex bg-card border border-border rounded-lg p-1">
              {Object.keys(currencies).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr as keyof typeof currencies)}
                  className={`px-4 py-2 rounded text-sm transition-all ${
                    currency === curr
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="minecraft" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="minecraft">Minecraft Java</TabsTrigger>
            <TabsTrigger value="fivem">FiveM Hosting</TabsTrigger>
            <TabsTrigger value="vps">VPS Servers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="minecraft">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {minecraftPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                      Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      {formatPrice(plan.basePrice)}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {plan.cpu}
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {plan.ram} RAM
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {plan.storage}
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        Player Slots: {plan.slots}
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {plan.databases}
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        Free Subdomain
                      </div>
                      <div className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        DDoS Protection
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow-accent">
                      Get {plan.name} Server
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fivem">
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">FiveM Hosting Plans</h3>
              <p className="text-muted-foreground">Custom FiveM server configurations coming soon!</p>
            </div>
          </TabsContent>
          
          <TabsContent value="vps">
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">VPS Server Plans</h3>
              <p className="text-muted-foreground">Powerful VPS solutions coming soon!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};