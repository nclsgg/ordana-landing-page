"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import LandingImage from "../public/madeireira.png";

const benefits = [
  "Landing page profissional e responsiva",
  "Otimizada para conversão de clientes",
  "Design moderno e atrativo",
  "Integração com WhatsApp e redes sociais",
  "Destaque dos seus diferenciais",
  "Suporte técnico completo",
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-success/10 text-success px-4 py-1 rounded-full text-sm font-medium">
              Nossa Solução
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Landing Pages que Transformam Visitantes em Clientes
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Criamos landing pages estratégicas e de alta conversão para profissionais que querem expandir seus negócios online. Design profissional, tecnologia moderna e foco em resultados.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Button variant="cta" size="lg" className="group" asChild>
                <a href="https://wa.me/5521976878566?text=Olá,%20gostaria%20de%20impulsionar%20meu%20negócio%20adquirindo%20uma%20Landing%20Page.%20Poderia%20me%20dar%20mais%20informações?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Solicitar Orçamento
                  <ArrowRight className="group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-elegant p-8 border border-border">
              <div className="aspect-video bg-primary/5 rounded-lg mb-6 flex items-center justify-center">
                <Image
                  src={LandingImage}
                  alt="Imagem de destaque"
                  layout="responsive"
                  className="relative rounded-2xl overflow-hidden shadow-elegant"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-foreground">Taxa de Conversão</span>
                  <span className="text-success font-semibold">+20%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-foreground">Novos Leads</span>
                  <span className="text-success font-semibold">+55%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-foreground">Credibilidade</span>
                  <span className="text-success font-semibold">+100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
