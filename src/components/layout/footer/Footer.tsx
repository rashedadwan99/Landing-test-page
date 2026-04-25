import React from "react";
import FooterLinks from "./FooterLinks";
import {
  quickLinks,
  resources,
} from "@/components/layout/footer/data/footer.data";
import FooterFirstSection from "./FooterFirstSection";
import NewsLetter from "../../../features/newsletter/NewsLetter";

function Footer() {
  return (
    <footer className="bg-dark mt-8 py-12">
      <div className="app-container gap-4 sm:gap-2 sm:gap-y-10  grid grid-cols-1 sm:grid-cols-3 text-light">
        <FooterFirstSection />
        <FooterLinks title="explore" links={quickLinks} />
        <FooterLinks title="Resources" links={resources} />
        <NewsLetter />
      </div>
    </footer>
  );
}

export default Footer;
