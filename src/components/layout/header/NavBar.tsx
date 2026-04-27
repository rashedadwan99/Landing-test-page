import { useEffect, useState } from "react";
import RightSideHeader from "./components/RightSideHeader";
import MobileHeader from "./components/MobileHeader";

function NavBar() {
  const [showMobile, setShowMobile] = useState(false);
  const [AlphaWhiteHeader, setAlphaWhiteHeader] = useState(false);
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY >= 20) {
        setAlphaWhiteHeader(true);
      } else {
        setAlphaWhiteHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${!AlphaWhiteHeader ? "bg-white/90" : "bg-white/80 backdrop-blur-md"} shadow-sm sticky top-0 w-full z-50`}
    >
      <div className="app-container flex justify-between items-center h-16">
        <h1 className="gradient-text text-2xl font-bold">AI Revolution</h1>
        <RightSideHeader AlphaWhiteHeader={AlphaWhiteHeader} />
      </div>
      <MobileHeader
        showMobile={showMobile}
        setShowMobile={() => setShowMobile((prev) => !prev)}
      />
    </nav>
  );
}

export default NavBar;
