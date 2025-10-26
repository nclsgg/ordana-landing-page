"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "../public/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-card" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome da Empresa */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <Image 
                src={Logo} 
                alt="Logo da Empresa" 
                width={48}
                height={48}
                className={`w-full h-full object-contain transition-smooth ${
                  isScrolled 
                    ? "brightness-0 saturate-100 filter-[invert(80%)_sepia(24%)_saturate(1478%)_hue-rotate(174deg)_brightness(96%)_contrast(92%)]" 
                    : "brightness-0 invert"
                }`}
                priority
              />
            </div>
            <span className={`text-2xl font-bold transition-smooth ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              Ordana
            </span>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#problems" 
              className={`text-sm font-medium transition-smooth hover:opacity-100 ${
                isScrolled 
                  ? "text-foreground/80 hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Desafios
            </a>
            <a 
              href="#solutions" 
              className={`text-sm font-medium transition-smooth hover:opacity-100 ${
                isScrolled 
                  ? "text-foreground/80 hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Soluções
            </a>
            <a 
              href="#how-it-works" 
              className={`text-sm font-medium transition-smooth hover:opacity-100 ${
                isScrolled 
                  ? "text-foreground/80 hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Como Funciona
            </a>
            <a 
              href="#benefits" 
              className={`text-sm font-medium transition-smooth hover:opacity-100 ${
                isScrolled 
                  ? "text-foreground/80 hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Benefícios
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant={isScrolled ? "cta" : "default"}
            size="lg" 
            className={`group ${
              isScrolled 
                ? "" 
                : "bg-white text-primary hover:bg-white/90"
            }`}
            asChild
          >
            <a 
              href="https://wa.me/5521976878566?text=Olá,%20gostaria%20de%20impulsionar%20meu%20negócio%20adquirindo%20uma%20Landing%20Page.%20Poderia%20me%20dar%20mais%20informações?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Fale Conosco</span>
              <span className="sm:hidden">Contato</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
