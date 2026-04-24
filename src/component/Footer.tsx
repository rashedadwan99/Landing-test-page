import React from "react";
import FooterLinks from "./FooterLinks";
import FooterFirstSection from "./FooterFirstSection";
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
      <div className="app-container gap-4 sm:gap-2 sm:gap-y-10  grid grid-cols-1 sm:grid-cols-3 text-light">
        <FooterFirstSection />
        <FooterLinks title="explore" links={quickLinks} />
        <FooterLinks title="Resources" links={resources} />
        <div className="footer-newsletter">
          <h3 className="footer-title ">stay updated</h3>
          <div className="flex flex-col gap-4">
            <p className="footer-p">
              Subscribe to our newsletter for the latest AI insights and company
              news.
            </p>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Email"
                className="ring-2 outline-0 px-4 py-2 rounded-md hover:ring-primary/80 ring-primary/10 bg-white/10"
              />
              <button className="footer-newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
