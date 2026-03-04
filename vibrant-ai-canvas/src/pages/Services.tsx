import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveRobot from "@/components/InteractiveRobot";
import { services } from "@/data/industries";

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-20 grid-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground max-w-lg">
              Comprehensive AI consulting, audit, and implementation services.
            </motion.p>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64"><InteractiveRobot /></div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-border hover:-translate-y-2 transition-all duration-300 neo-brutal"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color === "blue" ? "bg-electric/10" : service.color === "magenta" ? "bg-magenta/10" : "bg-acid-green/10"}`}>
                  <Icon className={`w-7 h-7 ${service.color === "blue" ? "text-electric" : service.color === "magenta" ? "text-magenta" : "text-acid-green"}`} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.shortDesc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
