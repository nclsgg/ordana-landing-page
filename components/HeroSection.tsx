"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Logo from "../public/logo.png";
import LandingImage from "../public/madeireira.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 opacity-10 bg-cover bg-center"/>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Transforme sua presença digital</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Expanda Seu Negócio com uma Landing Page Profissional
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Atraia mais clientes e fortaleça sua credibilidade online com landing pages modernas e eficientes, criadas especialmente para prestadores de serviços como você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="cta" size="xl" className="group w-full sm:w-auto" asChild>
                <a href="https://wa.me/5521976878566?text=Olá,%20gostaria%20de%20impulsionar%20meu%20negócio%20adquirindo%20uma%20Landing%20Page.%20Poderia%20me%20dar%20mais%20informações?" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span className="hidden sm:inline">Quero Expandir Meu Negócio</span>
                  <span className="sm:hidden">Expandir Meu Negócio</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
              
              <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black w-full sm:w-auto" asChild>
                <a href="#how-it-works" className="flex items-center justify-center">
                  Ver Como Funciona
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">✓</span>
                </div>
                <span className="text-white/80">Setup rápido</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">✓</span>
                </div>
                <span className="text-white/80">Resultados comprovados</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative xl:block hidden">
            <Image
              src={LandingImage}
              alt="Imagem de destaque"
              layout="responsive"
              className="relative rounded-2xl overflow-hidden shadow-elegant"
            />
            {/* Floating card */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-elegant animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">+150%</p>
                  <p className="text-sm text-muted-foreground">Mais clientes em 3 meses</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
