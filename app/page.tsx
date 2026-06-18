import { Header } from "@/components/Header";
import { DockNav } from "@/components/DockNav";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-canvas min-h-screen overflow-x-hidden">
      <Header />
      <DockNav />
      <main className="bg-canvas dock-pb">
        <HeroSection />
        <IntegrationsSection />
        <ServicesSection />
        <ProductSection />
        <WorkflowSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
