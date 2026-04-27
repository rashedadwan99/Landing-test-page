import AiBenefits from "@/features/benefits/AiBenefits";
import AiTypes from "@/components/sections/AiTypes";
import Contact from "@/features/contact/Contact";
import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/header/NavBar";
import HeroSection from "@/components/sections/HeroSection";

function Home() {
  return (
    <>
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
