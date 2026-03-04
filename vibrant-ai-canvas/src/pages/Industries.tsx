import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveRobot from "@/components/InteractiveRobot";
import { industryCategories } from "@/data/industries";

const Industries = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-20 grid-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className="gradient-text-green">Industries</span> We Serve
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground max-w-lg">
              Deep AI expertise across hospitality, finance, industrial, and technology sectors.
            </motion.p>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64"><InteractiveRobot /></div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 space-y-16">
        {industryCategories.map((category) => (
          <div key={category.name}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-display font-bold mb-6 gradient-text">
              {category.name}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card rounded-xl p-6 border border-border hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${ind.color === "blue" ? "bg-electric/10" : ind.color === "magenta" ? "bg-magenta/10" : "bg-acid-green/10"}`}>
                      <Icon className={`w-6 h-6 ${ind.color === "blue" ? "text-electric" : ind.color === "magenta" ? "text-magenta" : "text-acid-green"}`} />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{ind.title}</h3>
                    <p className="text-sm text-muted-foreground">{ind.shortDesc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Industries;
