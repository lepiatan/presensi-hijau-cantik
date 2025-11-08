import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import Features from "@/components/Features";
import UserPersonas from "@/components/UserPersonas";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <Features />
      <UserPersonas />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
