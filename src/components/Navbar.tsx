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
    setOpen(false);
    const target = id.toLowerCase();
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (target === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
    <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
          <img src={hrLogo} alt="HR Webdeveloper Logo" className="w-14 h-14 md:w-16 md:h-16" />
          <span className="text-lg md:text-2xl font-bold font-[var(--font-display)] text-foreground">
            Webdeveloper
          </span>
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
            onClick={() => setSignInOpen(true)}
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
              <button
                onClick={() => { setSignInOpen(true); setOpen(false); }}
                className="mt-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
};

export default Navbar;
