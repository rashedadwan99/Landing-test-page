import AiBenefits from "@/features/benefits/AiBenefits";
import AiTypes from "@/components/sections/AiTypes";
import Contact from "@/features/contact/Contact";
import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/header/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import { useCallback, useContext, useEffect, useReducer } from "react";
import ReducerHook from "@/ReducerHook";
import useTheme from "@/hooks/useTheme";
import Timer from "@/components/Timer";
import Litral from "@/components/ui/list/Litral";

function Home() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hi");
  }, []);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* <div
        className="dark:text-yellow-500 text-blue-600"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        asasasa
      </div> */}
      {/* <Input />
      <Button variant="primary" label="submit" handleClick={handleClick} /> */}
      <NavBar />
      {/* <Litral position=/> */}
      {/* <ReducerHook />
      <Timer /> */}

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
