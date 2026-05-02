import AiBenefits from "@/features/benefits/AiBenefits";
import AiTypes from "@/components/sections/AiTypes";
import Contact from "@/features/contact/Contact";
import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/header/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import PolypormicComponent from "@/components/ui/PolypormicText";

function Home() {
  return (
    <>
      <PolypormicComponent as="h2" size="sm">
        hi
      </PolypormicComponent>
      <PolypormicComponent as="p" size="lg">
        hi
      </PolypormicComponent>
      <NavBar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
