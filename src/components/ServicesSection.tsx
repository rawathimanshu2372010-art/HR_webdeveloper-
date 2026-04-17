import { motion } from "framer-motion";

const videos = [
  { title: "E-Commerce Website", tag: "Online Store", src: "/videos/demo1.mp4" },
  { title: "Business Portfolio", tag: "Portfolio", src: "/videos/demo2.mp4" },
  { title: "Restaurant Website", tag: "Food & Dining", src: "/videos/demo3.mp4" },
  { title: "Startup Landing Page", tag: "Startup", src: "/videos/demo4.mp4" },
  { title: "Mobile App Showcase", tag: "Mobile App", src: "/videos/demo5.mp4" },
  { title: "Travel Booking Site", tag: "Travel", src: "/videos/demo6.mp4" },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6">
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
          Watch our latest website builds — auto-playing for your convenience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="rounded-xl overflow-hidden border border-border bg-card group"
          >
            <div className="aspect-video relative overflow-hidden">
              <video
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                {v.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-foreground font-semibold">{v.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">Auto-playing demo</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
