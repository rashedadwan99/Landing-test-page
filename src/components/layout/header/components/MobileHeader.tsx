import React from "react";
import { links } from "../data/NavBar.data";
import { MobileHeaderProps } from "../types/NavBar.types";

function MobileHeader({ showMobile, setShowMobile }: MobileHeaderProps) {
  return (
    <>
      <button
        onClick={() => setShowMobile()}
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
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {showMobile && (
        <div className="md:hidden bg-white flex flex-col gap-4 px-4 py-4 rounded-b-lg">
          {links.map((link) => (
            <a href={link.href} key={link.href} className="mobile-nav-item">
              {link.name}
            </a>
          ))}
          <button className="mobile-nav-btn">Get Started</button>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
