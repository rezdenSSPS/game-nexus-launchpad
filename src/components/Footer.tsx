import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Final CTA */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Gaming?</h3>
          <p className="text-muted-foreground mb-6">Join thousands of satisfied customers hosting with us</p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
            Start Your Server Now
          </Button>
        </div>

        <Separator className="mb-8" />

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Minecraft Hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FiveM Hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VPS Servers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord Bots</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ticket System</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Server Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GameNexus Hosting. All rights reserved. Lag-free raids. Zero downtime. Just play.</p>
        </div>
      </div>
    </footer>
  );
};