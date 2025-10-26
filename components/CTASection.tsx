"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-5 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Transforme seu negócio hoje</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Pronto Para Expandir Sua Presença Digital?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Não perca mais clientes para a concorrência. Tenha uma landing page profissional que trabalha para você 24 horas por dia, 7 dias por semana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="https://wa.me/5521976878566?text=Olá,%20gostaria%20de%20impulsionar%20meu%20negócio%20adquirindo%20uma%20Landing%20Page.%20Poderia%20me%20dar%20mais%20informações?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Começar Agora
                <ArrowRight className="group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
          </div>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Orçamento gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
