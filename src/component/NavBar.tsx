import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];
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
        <div className="hidden md:flex justify-between gap-4">
          {links.map((link) => {
            return (
              <a
                href={link.href}
                key={link.href}
                className={`nav-item${AlphaWhiteHeader ? " text-dark" : ""}`}
              >
                {link.name}
              </a>
            );
          })}
          <button className="nav-btn">Get Started</button>
        </div>
        <button
          onClick={() => setShowMobile((prev) => !prev)}
          className="px-4 py-1 block rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showMobile && (
        <div className="md:hidden bg-white flex flex-col gap-4 px-4 py-4 rounded-b-lg ">
          {links.map((link) => {
            return (
              <a href={link.href} key={link.href} className="mobile-nav-item">
                {link.name}
              </a>
            );
          })}
          <button className="mobile-nav-btn">Get Started</button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
