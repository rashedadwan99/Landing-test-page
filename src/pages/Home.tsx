import AiBenefits from "@/features/benefits/AiBenefits";
import AiTypes from "@/components/sections/AiTypes";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/header/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

function Home() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };
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
