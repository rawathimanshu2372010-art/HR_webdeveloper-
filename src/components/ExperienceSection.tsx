import { motion } from "framer-motion";
import { Briefcase, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Globe, value: "350+", label: "Websites Delivered" },
  { icon: Award, value: "99%", label: "Client Satisfaction" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 bg-card/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Our <span className="text-gradient-gold">Expertise</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Years of dedication in web development — delivering world-class digital solutions for businesses of all sizes.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-xl border border-border bg-card"
          >
            <s.icon size={28} className="text-primary mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">{s.value}</p>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "Frontend Development", skills: ["React", "HTML/CSS", "JavaScript", "Tailwind CSS"], pct: 95 },
          { title: "Backend Development", skills: ["Node.js", "PHP", "Python", "Database"], pct: 90 },
          { title: "UI/UX Design", skills: ["Figma", "Adobe XD", "Responsive", "Animations"], pct: 88 },
          { title: "SEO & Marketing", skills: ["Google SEO", "Speed Optimization", "Analytics"], pct: 85 },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-foreground font-semibold">{item.title}</h3>
              <span className="text-primary font-bold text-sm">{item.pct}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-muted mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-gold)" }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((sk) => (
                <span key={sk} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                  {sk}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
