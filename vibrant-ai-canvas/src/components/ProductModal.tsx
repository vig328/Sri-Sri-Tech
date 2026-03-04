import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "@/data/products";
import { useEffect, useMemo, useRef } from "react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  const sections = useMemo(() => {
    if (!product) return [];
    return product.content.split("\n\n### ").map((section, i) => {
      if (i === 0) {
        const parts = section.split("\n\n");
        const title = parts[0].replace(/^##\s*/, "");
        return { title, content: parts.slice(1).join("\n\n") };
      }
      const lines = section.split("\n\n");
      return { title: lines[0], content: lines.slice(1).join("\n\n") };
    });
  }, [product]);

  const toc = sections.map(s => s.title);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full bg-background flex flex-col md:flex-row overflow-hidden"
          >
            {/* Sticky header (mobile) */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border bg-background md:hidden">
              <h2 className="font-display font-bold text-lg gradient-text">{product.title}</h2>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar TOC (desktop) */}
            <div className="hidden md:flex flex-col w-72 border-r border-border bg-muted/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-lg gradient-text">{product.title}</h2>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {toc.map((title, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const el = document.getElementById(`section-${i}`);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-colors font-medium"
                  >
                    {title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main content */}
            <div ref={contentRef} className="flex-1 overflow-y-auto p-6 md:p-12">
              <div className="max-w-3xl mx-auto">
                {sections.map((section, i) => (
                  <div key={i} id={`section-${i}`} className="mb-10">
                    <h3 className={`font-display font-bold ${i === 0 ? "text-3xl md:text-4xl gradient-text" : "text-xl md:text-2xl text-foreground"} mb-4`}>
                      {section.title}
                    </h3>
                    {section.content.split("\n\n").map((paragraph, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed mb-4 text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
