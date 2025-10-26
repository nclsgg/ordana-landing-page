import { AlertCircle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Dificuldade em Atrair Novos Clientes",
    description: "Sem presença digital forte, você perde oportunidades para concorrentes que estão online.",
  },
  {
    icon: TrendingDown,
    title: "Baixa Visibilidade Online",
    description: "Seus potenciais clientes não conseguem encontrar seus serviços quando procuram na internet.",
  },
  {
    icon: Clock,
    title: "Falta de Disponibilidade 24/7",
    description: "Você só pode captar clientes durante horário comercial, perdendo leads fora do expediente.",
  },
  {
    icon: AlertCircle,
    title: "Credibilidade Limitada",
    description: "Sem um site profissional, é difícil transmitir confiança e autoridade no seu mercado.",
  },
];

const ProblemsSection = () => {
  return (
    <section id="problems" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Você Enfrenta Esses Desafios?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entendemos as dificuldades que prestadores de serviços enfrentam sem uma presença digital adequada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-smooth border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
