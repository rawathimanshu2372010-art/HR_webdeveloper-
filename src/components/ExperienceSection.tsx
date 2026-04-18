import { motion } from "framer-motion";
import { Briefcase, Users, Globe, Award } from "lucide-react";
import expDeveloper from "@/assets/exp-developer.jpg";
import expTeam from "@/assets/exp-team.jpg";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Globe, value: "100+", label: "Websites" },
  { icon: Award, value: "99%", label: "Satisfaction" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 px-6 bg-card/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="text-gradient-gold">Expertise</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Crafting world-class websites with proven results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          { src: expDeveloper, alt: "Web developer working on code" },
          { src: expTeam, alt: "Design team collaborating on a project" },
        ].map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden border border-border bg-card aspect-[5/4]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1000}
              height={800}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-5 rounded-xl border border-border bg-card"
          >
            <s.icon size={24} className="text-primary mx-auto mb-2" />
            <p className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{s.value}</p>
            <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
