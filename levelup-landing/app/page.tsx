import Navbar from "@/components/Navbar";
import HeroSplit from "@/components/HeroSplit"; 
import Ecosystem from "@/components/Ecosystem";
import ProductCards from "@/components/ProductCards";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-levelup-black">
      <Navbar />
      <HeroSplit />
      <Ecosystem />
      <ProductCards />
      <FeaturesGrid />
      <HowItWorks />
      <Reviews />
      <Team />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
