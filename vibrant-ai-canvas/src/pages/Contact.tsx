import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveRobot from "@/components/InteractiveRobot";
import { products } from "@/data/products";

const Contact = () => {
  const [form, setForm] = useState({ 
    product: "", 
    name: "", 
    email: "", 
    company: "", 
    phone: "", 
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbysJbZnPNYcDMTkOf7NnhkV2iJqlUcZFVKqC9lGyOto4IWgYlVCm0Q6dKeMCk4LrO6r/exec";

    try {
      // Sending data to Google Sheets via Apps Script
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Essential for Google Apps Script redirects
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Because 'no-cors' doesn't return a readable response body, 
      // we proceed to the success state if the fetch completes.
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 grid-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground max-w-lg">
                Ready to transform your business with AI? Let's start a conversation.
              </motion.p>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64"><InteractiveRobot /></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-xl p-6 border border-border neo-brutal">
                <Mail className="w-8 h-8 text-electric mb-3" />
                <h3 className="font-display font-bold mb-1">Email Us</h3>
                <a href="mailto:vignesh.loharkar123@gmail.com" className="text-electric hover:underline text-sm">
                  vignesh.loharkar123@gmail.com
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6 border border-border neo-brutal">
                <Phone className="w-8 h-8 text-magenta mb-3" />
                <h3 className="font-display font-bold mb-1">Call Us</h3>
                <a href="tel:9119556042" className="text-magenta hover:underline text-sm">
                  +91 9119556042
                </a>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-12 text-center border border-acid-green/30">
                  <CheckCircle className="w-16 h-16 text-acid-green mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-8 border border-border space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Product Interest</label>
                    <select
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-electric focus:outline-none transition"
                    >
                      <option value="">Select a product</option>
                      {products.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Client Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-electric focus:outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-electric focus:outline-none transition"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-electric focus:outline-none transition"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-electric focus:outline-none transition"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-electric focus:outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-electric to-magenta text-primary-foreground font-display font-bold btn-glow disabled:opacity-60"
                  >
                    {loading ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;