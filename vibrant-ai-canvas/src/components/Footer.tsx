import { Link } from "react-router-dom";
import { Zap, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/30 py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-magenta flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold gradient-text">Sri Sri Tech</span>
          </Link>
          <p className="text-sm text-muted-foreground">Vibrant AI Solutions Hub, Mumbai. Powering the future with intelligent automation.</p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3 text-foreground">Products</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/products" className="hover:text-electric transition-colors">AI Hotel Manager</Link>
            <Link to="/products" className="hover:text-electric transition-colors">Voice Xperience</Link>
            <Link to="/products" className="hover:text-electric transition-colors">AI Stocks Agent</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3 text-foreground">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-electric transition-colors">About</Link>
            <Link to="/services" className="hover:text-electric transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-electric transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3 text-foreground">Get in Touch</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:vignesh.loharkar123@gmail.com" className="flex items-center gap-2 hover:text-electric transition-colors">
              <Mail className="w-4 h-4" /> vignesh.loharkar123@gmail.com
            </a>
            <a href="tel:9119556042" className="flex items-center gap-2 hover:text-magenta transition-colors">
              <Phone className="w-4 h-4" /> 9119556042
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sri Sri Tech. All rights reserved. Mumbai, India.
      </div>
    </div>
  </footer>
);

export default Footer;
