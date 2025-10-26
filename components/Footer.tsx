import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../public/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Image 
                  src={Logo} 
                  alt="Logo da Empresa" 
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">Ordana</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Especializados em criar landing pages profissionais para prestadores de serviços que querem expandir seus negócios online.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:contato@ordana.tech" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>contato@ordana.tech</span>
              </a>
              <a 
                href="https://wa.me/5521976878566?text=Olá,%20gostaria%20de%20impulsionar%20meu%20negócio%20adquirindo%20uma%20Landing%20Page.%20Poderia%20me%20dar%20mais%20informações?" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>(21) 97687-8566</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Úteis</h4>
            <div className="space-y-2 text-sm">
              <a href="#hero" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Início
              </a>
              <a href="#solutions" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Soluções
              </a>
              <a href="#how-it-works" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Como Funciona
              </a>
              <a href="#benefits" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Benefícios
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ordana. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
