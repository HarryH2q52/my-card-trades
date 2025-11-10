import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cards.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Trading cards collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Join thousands of traders</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Trade Your Cards,
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Build Your Collection
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The premier marketplace for trading card collectors. List, discover, and trade cards with enthusiasts worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-primary text-lg px-8 group shadow-premium hover:shadow-xl transition-all">
                Start Trading
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-sm">
              Browse Collections
            </Button>
          </div>

          <div className="pt-12 flex justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">50K+</div>
              <div className="text-sm text-muted-foreground">Active Traders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">2M+</div>
              <div className="text-sm text-muted-foreground">Cards Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100K+</div>
              <div className="text-sm text-muted-foreground">Trades Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
