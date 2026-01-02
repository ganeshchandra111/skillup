import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HorizontalProjectsScroller from "@/components/HorizontalProjectsScroller";
import PricingSection from "@/components/PricingSection";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HorizontalProjectsScroller />
      <PricingSection />
      <FAQAccordion />
      <ContactSection />
    </main>
  );
}
