import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2025 <span className="text-gradient-gold font-semibold">HR Webdeveloper</span>. All rights reserved.
      </p>
      <a href="tel:8817830829" className="flex items-center gap-2 text-primary text-sm font-medium">
        <Phone size={14} /> 8817830829
      </a>
    </div>
  </footer>
);

export default Footer;
