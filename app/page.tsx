import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
