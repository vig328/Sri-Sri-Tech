import { motion } from "framer-motion";
import { MapPin, Target, Lightbulb, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveRobot from "@/components/InteractiveRobot";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-20 grid-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold mb-4">
              About <span className="gradient-text">Sri Sri Tech</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground max-w-lg">
              Mumbai's vibrant AI innovation hub, building tomorrow's intelligent solutions today.
            </motion.p>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64"><InteractiveRobot /></div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Sri Sri Tech was born from a bold vision: to make enterprise-grade artificial intelligence accessible, practical, and transformative for organizations of every scale. Based in the heart of Mumbai—India's commercial capital and a thriving tech ecosystem—we combine deep technical expertise with an intimate understanding of the challenges facing modern businesses.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our team of AI researchers, engineers, and industry specialists has built a comprehensive product suite that addresses real-world problems across hospitality, finance, healthcare, manufacturing, and more. Every solution we create is designed to integrate seamlessly with existing operations, delivering measurable ROI from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { icon: Target, title: "Our Mission", desc: "Democratize AI by building products that solve real problems for real businesses, with a focus on the Indian and South Asian markets.", color: "electric" },
            { icon: Lightbulb, title: "Our Vision", desc: "A world where every organization, regardless of size, can harness the power of AI to create better experiences and outcomes.", color: "magenta" },
            { icon: MapPin, title: "Mumbai Roots", desc: "Headquartered in Mumbai, we draw energy from the city's relentless pace of innovation and its diverse, dynamic business ecosystem.", color: "acid-green" },
            { icon: Rocket, title: "Innovation First", desc: "We invest heavily in R&D, staying at the frontier of AI research while maintaining a laser focus on practical, deployable solutions.", color: "electric" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 border border-border"
              >
                <Icon className={`w-8 h-8 mb-4 text-${item.color}`} />
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
