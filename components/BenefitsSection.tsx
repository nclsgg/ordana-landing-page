import { Globe, Shield, Clock, TrendingUp, Star, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais Clientes",
    description: "Aumente significativamente o número de leads qualificados e conversões para seu negócio.",
    stat: "+55%",
  },
  {
    icon: Shield,
    title: "Credibilidade Profissional",
    description: "Transmita confiança e autoridade com uma presença digital moderna e profissional.",
    stat: "5 ⭐",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Capture clientes a qualquer hora, mesmo quando você está dormindo ou ocupado.",
    stat: "24/7",
  },
  {
    icon: Globe,
    title: "Alcance Ampliado",
    description: "Seja encontrado por clientes em toda sua região, não apenas no boca a boca.",
    stat: "100%",
  },
  {
    icon: Star,
    title: "Diferenciação no Mercado",
    description: "Destaque-se dos concorrentes com um site que mostra seu profissionalismo.",
    stat: "TOP 1",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Design responsivo que funciona perfeitamente em todos os dispositivos.",
    stat: "100%",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Os Resultados Que Você Vai Alcançar
          </h2>
          <p className="text-lg text-muted-foreground">
            Investir em uma landing page profissional traz benefícios concretos e mensuráveis para o seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-smooth border border-border hover:border-primary/30 relative overflow-hidden"
              >
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {benefit.stat}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
