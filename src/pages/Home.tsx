import AiBenefits from "../component/AiBenefits";
import AiTypes from "../component/AiTypes";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import NavBar from "../component/NavBar";

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
