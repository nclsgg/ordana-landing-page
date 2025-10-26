import { MessageSquare, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conversamos sobre seu negócio",
    description: "Entendemos suas necessidades, objetivos e o que torna seu serviço único no mercado.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Criamos sua landing page",
    description: "Desenvolvemos um design profissional e estratégico focado em converter visitantes em clientes.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lançamos e acompanhamos",
    description: "Colocamos sua página no ar e fornecemos suporte para garantir os melhores resultados.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo simples e eficiente para levar seu negócio ao próximo nível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative h-full">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-primary to-primary-light opacity-30" />
                )}
                
                <div className="relative bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-smooth border border-border h-full flex flex-col">
                  <div className="absolute -top-6 left-8 bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg shadow-card">
                    {step.number}
                  </div>
                  
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed grow">
                    {step.description}
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

export default HowItWorksSection;
