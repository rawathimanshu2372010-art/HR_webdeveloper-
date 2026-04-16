import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Experience", "Services", "Charges", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("home")} className="text-2xl font-bold font-[var(--font-display)]">
          <span className="text-gradient-gold">HR</span>{" "}
          <span className="text-foreground">Webdeveloper</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden md:hidden bg-card border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="text-left text-foreground text-lg">
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
