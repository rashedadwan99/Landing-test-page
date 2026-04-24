import React from "react";
import FooterLinks from "./FooterLinks";
interface Links {
  text: string;
  href: string;
}
const quickLinks: Links[] = [
  { text: "About Us", href: "#" },
  { text: "AI Technologies", href: "#types" },
  { text: "Case Studies", href: "#benefits" },
  { text: "Contact Us", href: "#contact" },
  { text: "Careers", href: "#" },
];

const resources: Links[] = [
  { text: "Documentation", href: "#" },
  { text: "API Reference", href: "#" },
  { text: "Community Forum", href: "#" },
  { text: "Blog & News", href: "#" },
  { text: "Help Center", href: "#" },
];
function Footer() {
  return (
    <footer className="bg-dark mt-8 py-12">
      <div className="app-container grid grid-cols-1 sm:grid-cols-3 text-light">
        <div className="flex flex-col gap-4">
          <h1 className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent text-2xl font-bold">
            AI Revolution
          </h1>
        </div>
        <FooterLinks title="explore" links={quickLinks} />
        <FooterLinks title="Resources" links={resources} />
      </div>
    </footer>
  );
}

export default Footer;
