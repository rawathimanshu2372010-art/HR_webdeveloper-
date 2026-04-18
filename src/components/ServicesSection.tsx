import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import demoVideo from "@/assets/website-demo.mp4.asset.json";
import siteEcommerce from "@/assets/site-ecommerce.jpg";
import sitePortfolio from "@/assets/site-portfolio.jpg";
import siteRestaurant from "@/assets/site-restaurant.jpg";
import siteStartup from "@/assets/site-startup.jpg";
import siteMobileApp from "@/assets/site-mobileapp.jpg";
import siteTravel from "@/assets/site-travel.jpg";

const screenshots = [
  { title: "E-Commerce Store", tag: "Online Shop", img: siteEcommerce },
  { title: "Business Portfolio", tag: "Portfolio", img: sitePortfolio },
  { title: "Restaurant Website", tag: "Food & Dining", img: siteRestaurant },
  { title: "Startup Landing Page", tag: "Startup", img: siteStartup },
  { title: "Mobile App Showcase", tag: "Mobile App", img: siteMobileApp },
  { title: "Travel Booking Site", tag: "Travel", img: siteTravel },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Our Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Website <span className="text-gradient-gold">Showcase</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Watch our featured demo and browse the websites we've crafted for our clients.
        </p>
      </motion.div>

      {/* Featured Demo Video */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 rounded-2xl overflow-hidden border border-border bg-card glow-gold"
      >
        <div className="aspect-video relative overflow-hidden bg-muted">
          <video
            src={demoVideo.url}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            Featured Demo
          </span>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-foreground text-xl md:text-2xl font-bold mb-1">
            Live Website Walkthrough
          </h3>
          <p className="text-muted-foreground text-sm">
            A glimpse of how we design and build modern, premium websites.
          </p>
        </div>
      </motion.div>

      {/* Screenshot Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Recent <span className="text-gradient-gold">Projects</span>
        </h3>
        <p className="text-muted-foreground text-sm mt-2">Swipe to explore our portfolio</p>
      </motion.div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full px-2">
        <CarouselContent className="-ml-4">
          {screenshots.map((s) => (
            <CarouselItem key={s.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="rounded-xl overflow-hidden border border-border bg-card group h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.title} website design`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                    {s.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-foreground font-semibold">{s.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">Custom designed & developed</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  </section>
);

export default ServicesSection;
