import React from "react";
import { RightSideProps } from "../types/NavBar.types";
import { links } from "../data/NavBar.data";

function RightSideHeader({ AlphaWhiteHeader }: RightSideProps) {
  return (
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
  );
}

export default RightSideHeader;
