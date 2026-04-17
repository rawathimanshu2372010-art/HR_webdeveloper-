import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      toast.error("Please fill all fields");
      return;
    }
    const text = `Hi, I'm ${name} (${phone}). ${message}`;
    window.open(`https://wa.me/918817830829?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Opening WhatsApp to send your message...");
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <a href="tel:8817830829" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold">Phone</p>
                <p className="text-muted-foreground">8817830829</p>
              </div>
            </a>
            <a href="https://wa.me/918817830829" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold">WhatsApp</p>
                <p className="text-muted-foreground">Chat with us</p>
              </div>
            </a>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            />
            <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Send Message via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
