import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "E-Commerce Website", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", tag: "Online Store" },
  { title: "Business Portfolio", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", tag: "Portfolio" },
  { title: "Restaurant Website", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", tag: "Food & Dining" },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6 bg-card/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Our Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Website <span className="text-gradient-gold">Showcase</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Watch videos of websites we've built for our clients. Quality that speaks for itself.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-xl overflow-hidden border border-border bg-card group"
          >
            <div className="aspect-video relative bg-muted flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Play size={28} className="text-primary ml-1" />
              </div>
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                {v.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-foreground font-semibold text-lg">{v.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">Click to watch the full walkthrough</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
