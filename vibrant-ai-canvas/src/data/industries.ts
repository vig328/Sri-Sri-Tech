import { Sparkles, Heart, GraduationCap, Building2, Banknote, BarChart3, Home, Scale, Factory, ShoppingCart, Truck, Sprout, Cloud, Brain, ClipboardCheck, BookOpen } from "lucide-react";

export interface Industry {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  icon: any;
  color: "blue" | "magenta" | "green";
}

export const industryCategories = [
  {
    name: "Hospitality & Services",
    industries: [
      { id: "guest-experience", title: "Guest Experience", shortDesc: "AI-driven personalization for hospitality guest journeys.", icon: Sparkles, color: "blue" as const },
      { id: "wellness-systems", title: "Wellness Systems", shortDesc: "Intelligent health and wellness management platforms.", icon: Heart, color: "magenta" as const },
      { id: "learning-solutions", title: "Learning Solutions", shortDesc: "Adaptive AI-powered education and training systems.", icon: GraduationCap, color: "green" as const },
      { id: "flexible-workspace", title: "Flexible Workspace", shortDesc: "Smart workspace optimization and management.", icon: Building2, color: "blue" as const },
    ]
  },
  {
    name: "Finance & Professional",
    industries: [
      { id: "neo-banking", title: "Neo-Banking", shortDesc: "Next-gen digital banking with AI-first architecture.", icon: Banknote, color: "magenta" as const },
      { id: "yield-optimization", title: "Yield Optimization", shortDesc: "AI-driven investment and returns maximization.", icon: BarChart3, color: "green" as const },
      { id: "smart-property", title: "Smart Property", shortDesc: "Intelligent real estate management and analytics.", icon: Home, color: "blue" as const },
      { id: "lawtech", title: "LawTech", shortDesc: "AI-powered legal research, analysis, and automation.", icon: Scale, color: "magenta" as const },
    ]
  },
  {
    name: "Industrial & Tech",
    industries: [
      { id: "industrial-iot", title: "Industrial IoT", shortDesc: "Connected factory intelligence and predictive maintenance.", icon: Factory, color: "green" as const },
      { id: "omni-channel", title: "Omni-channel Commerce", shortDesc: "Unified AI commerce across all customer touchpoints.", icon: ShoppingCart, color: "blue" as const },
      { id: "supply-chain", title: "Supply Chain Tech", shortDesc: "End-to-end supply chain visibility and optimization.", icon: Truck, color: "magenta" as const },
      { id: "smart-farming", title: "Smart Farming", shortDesc: "Precision agriculture with AI and IoT integration.", icon: Sprout, color: "green" as const },
      { id: "cloud-infra", title: "Cloud Infrastructure", shortDesc: "AI-optimized cloud operations and infrastructure management.", icon: Cloud, color: "blue" as const },
    ]
  }
];

export const services = [
  { id: "ai-solutions", title: "AI Solutions", shortDesc: "Custom AI development and integration consulting.", icon: Brain, color: "magenta" as const },
  { id: "ai-audit", title: "AI Audit", shortDesc: "Comprehensive AI system evaluation and optimization.", icon: ClipboardCheck, color: "green" as const },
  { id: "case-studies", title: "Case Studies", shortDesc: "Real-world AI transformation success stories.", icon: BookOpen, color: "blue" as const },
];
