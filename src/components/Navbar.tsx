import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hrLogo from "@/assets/hr-logo.png";
import SignInDialog from "./SignInDialog";

const navLinks = ["Home", "About", "Experience", "Services", "Charges", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <span className="hidden md:block text-lg font-bold font-[var(--font-display)] justify-self-start">
          <span className="text-gradient-gold">HR</span>{" "}
          <span className="text-foreground">Webdeveloper</span>
        </span>

        <button onClick={() => scrollTo("home")} className="flex items-center justify-center md:col-start-2">
          <img src={hrLogo} alt="HR Logo" className="w-10 h-10" />
        </button>

        <div className="hidden md:flex items-center gap-8 justify-self-end">
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

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground justify-self-end">
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
