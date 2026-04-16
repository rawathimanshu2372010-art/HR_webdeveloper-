import { motion } from "framer-motion";
import { Code2, Globe, Palette, Zap } from "lucide-react";

const skills = [
  { icon: Code2, title: "Clean Code", desc: "Modern, fast, and maintainable codebases" },
  { icon: Globe, title: "Responsive Design", desc: "Pixel-perfect on every device" },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful interfaces users love" },
  { icon: Zap, title: "Performance", desc: "Lightning-fast load times" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          We Build <span className="text-gradient-gold">Digital Experiences</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          HR Webdeveloper is a professional web development service dedicated to creating high-quality, modern websites. We turn your ideas into stunning digital realities with cutting-edge technology and creative design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
          >
            <s.icon size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-foreground font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
