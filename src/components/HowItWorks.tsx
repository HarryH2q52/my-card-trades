import { Upload, Search, Handshake } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "List Your Cards",
    description: "Upload photos and details of cards you want to trade. Set your preferences and desired trades.",
    step: "01",
  },
  {
    icon: Search,
    title: "Find Matches",
    description: "Browse collections or let our smart matching system find perfect trading opportunities for you.",
    step: "02",
  },
  {
    icon: Handshake,
    title: "Complete Trades",
    description: "Connect with traders, finalize details, and complete your trade securely through our platform.",
    step: "03",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Start trading in three simple steps. No complicated setup, just pure trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number background */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl font-bold text-primary/5">
                {step.step}
              </div>
              
              <div className="relative text-center space-y-4">
                <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-primary items-center justify-center mx-auto shadow-premium animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
