import { motion } from "framer-motion";
import { Check, Star, CreditCard, Smartphone, Wallet, Building2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹5,000",
    desc: "Simple landing page",
    features: ["Single Page Website", "Mobile Responsive", "Contact Form", "1 Revision", "Delivery in 3 Days"],
    featured: false,
  },
  {
    name: "Business",
    price: "₹25,000",
    desc: "Multi-page business site",
    features: ["Up to 10 Pages", "Custom Design", "SEO Optimized", "Admin Panel", "3 Revisions", "Delivery in 7 Days"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "₹50,00,000",
    desc: "Full-scale web application",
    features: ["Unlimited Pages", "E-Commerce / App", "Custom Backend", "Payment Integration", "Unlimited Revisions", "Priority Support"],
    featured: false,
  },
];

const ChargesSection = () => (
  <section id="charges" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Our <span className="text-gradient-gold">Charges</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Minimum ₹5,000 to Maximum ₹50 Lakhs — it depends on your project requirements.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-2xl p-8 border relative ${
              p.featured
                ? "border-primary bg-card glow-gold"
                : "border-border bg-card"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                <Star size={12} /> POPULAR
              </div>
            )}
            <h3 className="text-foreground font-bold text-xl mb-1">{p.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
            <p className="text-4xl font-bold text-gradient-gold mb-1">{p.price}</p>
            <p className="text-muted-foreground text-xs mb-6">starting from</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check size={16} className="text-primary flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="tel:8817830829"
              className={`block text-center py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 ${
                p.featured
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ChargesSection;
