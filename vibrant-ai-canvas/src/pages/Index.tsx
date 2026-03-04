import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, Globe } from "lucide-react";
import InteractiveRobot from "@/components/InteractiveRobot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products, type Product } from "@/data/products";
import { industryCategories } from "@/data/industries";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden grid-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric text-sm font-medium mb-6 neo-brutal">
                <Sparkles className="w-4 h-4" /> Mumbai's AI Innovation Hub
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                <span className="gradient-text">Vibrant AI</span>
                <br />
                Solutions for
                <br />
                <span className="gradient-text-green">Tomorrow</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Sri Sri Tech delivers cutting-edge artificial intelligence solutions that transform industries across hospitality, finance, healthcare, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-electric to-magenta text-primary-foreground font-display font-bold btn-glow"
                >
                  Explore Products <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-foreground font-display font-bold neo-brutal bg-background"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <InteractiveRobot />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "AI Products" },
              { value: "15+", label: "Industries Served" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "Mumbai", label: "HQ" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-magenta mb-3">
              <Layers className="w-4 h-4" /> Our Products
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              AI-Powered <span className="gradient-text">Product Suite</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Enterprise-grade AI solutions designed for real-world impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} onClick={() => setSelectedProduct(product)} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-electric font-display font-medium hover:gap-4 transition-all">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-acid-green mb-3">
              <Globe className="w-4 h-4" /> Industries
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Transforming <span className="gradient-text-green">Every Sector</span>
            </h2>
          </motion.div>

          <div className="space-y-10">
            {industryCategories.map((category) => (
              <div key={category.name}>
                <h3 className="font-display font-bold text-xl mb-4 text-foreground">{category.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.industries.map((ind, i) => {
                    const Icon = ind.icon;
                    return (
                      <motion.div
                        key={ind.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="glass-card rounded-xl p-5 border border-border hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                      >
                        <Icon className={`w-8 h-8 mb-3 ${ind.color === "blue" ? "text-electric" : ind.color === "magenta" ? "text-magenta" : "text-acid-green"}`} />
                        <h4 className="font-display font-bold text-sm mb-1">{ind.title}</h4>
                        <p className="text-xs text-muted-foreground">{ind.shortDesc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/industries" className="inline-flex items-center gap-2 text-acid-green font-display font-medium hover:gap-4 transition-all">
              Explore All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-electric via-magenta to-acid-green p-[3px]">
            <div className="bg-background rounded-2xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how Sri Sri Tech's AI solutions can accelerate your digital transformation journey.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-electric to-magenta text-primary-foreground font-display font-bold btn-glow text-lg"
              >
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Index;
