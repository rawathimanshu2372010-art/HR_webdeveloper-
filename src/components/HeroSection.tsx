import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import hrLogo from "@/assets/hr-logo.png";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-dark opacity-60" />

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary uppercase tracking-[0.3em] text-sm mb-6"
      >
        Professional Web Development
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
      >
        <span className="text-gradient-gold">HR</span>{" "}
        <span className="text-foreground">Webdeveloper</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Stunning websites that grow your business. From simple landing pages to complex web applications — we bring your vision to life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="tel:8817830829"
          className="flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-gold hover:opacity-90 transition-opacity"
        >
          <Phone size={20} /> Call Now: 8817830829
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-16"
      >
        <ArrowDown size={28} className="mx-auto text-primary animate-bounce" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
