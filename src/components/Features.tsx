import { Shield, Search, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find exactly what you need with our advanced filtering system. Search by rarity, condition, game, and more.",
  },
  {
    icon: Shield,
    title: "Secure Trading",
    description: "Trade with confidence using our verified user system and built-in transaction protection.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Connect with passionate collectors worldwide. Share strategies, discuss values, and build friendships.",
  },
  {
    icon: Zap,
    title: "Instant Matching",
    description: "Get matched with traders instantly. Our algorithm finds the perfect trading partners for your collection.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Trade
          </h2>
          <p className="text-lg text-muted-foreground">
            Built by collectors, for collectors. Every feature designed to make trading seamless and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
