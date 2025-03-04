
import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { LLCInfoSection } from "@/components/sections/llc-info-section";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LLCInfoSection />
    </Layout>
  );
};

export default Index;
