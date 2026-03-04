import { motion } from "framer-motion";
import type { Product } from "@/data/products";

const colorMap = {
  blue: "from-electric/10 to-electric/5 hover:glow-blue border-electric/20",
  magenta: "from-magenta/10 to-magenta/5 hover:glow-magenta border-magenta/20",
  green: "from-acid-green/10 to-acid-green/5 hover:glow-green border-acid-green/20",
};

const iconColorMap = {
  blue: "text-electric",
  magenta: "text-magenta",
  green: "text-acid-green",
};

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

const ProductCard = ({ product, index, onClick }: ProductCardProps) => {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={onClick}
      className={`glass-card rounded-xl p-6 cursor-pointer border bg-gradient-to-br ${colorMap[product.color]} transition-all duration-300 hover:-translate-y-2 group`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color === "blue" ? "from-electric to-electric/60" : product.color === "magenta" ? "from-magenta to-magenta/60" : "from-acid-green to-acid-green/60"} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="font-display font-bold text-lg mb-2 text-foreground group-hover:gradient-text transition-all">
        {product.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{product.shortDesc}</p>
      <div className={`mt-4 text-sm font-medium ${iconColorMap[product.color]} flex items-center gap-1`}>
        Explore →
      </div>
    </motion.div>
  );
};

export default ProductCard;
