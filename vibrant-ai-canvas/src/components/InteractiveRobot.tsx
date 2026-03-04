import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const InteractiveRobot = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const eyeX = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), springConfig);
  const eyeY = useSpring(useTransform(mouseY, [-1, 1], [-5, 5]), springConfig);
  const headRotateY = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig);
  const headRotateX = useSpring(useTransform(mouseY, [-1, 1], [10, -10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normalizedX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normalizedY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      {/* Glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric to-magenta opacity-20 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-magenta to-acid-green opacity-10 blur-2xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10"
        style={{
          rotateY: headRotateY,
          rotateX: headRotateX,
        }}
      >
        {/* Antenna */}
        <motion.line x1="100" y1="25" x2="100" y2="10" stroke="hsl(212, 100%, 48%)" strokeWidth="3" strokeLinecap="round" />
        <motion.circle cx="100" cy="8" r="4" fill="hsl(130, 100%, 55%)" className="animate-pulse-glow" />

        {/* Head - main shape */}
        <rect x="45" y="30" width="110" height="95" rx="20" ry="20"
          fill="url(#headGradient)" stroke="hsl(212, 100%, 48%)" strokeWidth="2.5" />

        {/* Visor */}
        <rect x="55" y="50" width="90" height="40" rx="12" ry="12"
          fill="hsl(220, 20%, 10%)" opacity="0.9" />

        {/* Left eye */}
        <motion.g style={{ x: eyeX, y: eyeY }}>
          <circle cx="78" cy="70" r="10" fill="hsl(212, 100%, 48%)" />
          <circle cx="78" cy="70" r="5" fill="hsl(0, 0%, 100%)" />
          <circle cx="80" cy="68" r="2" fill="hsl(212, 100%, 48%)" opacity="0.6" />
        </motion.g>

        {/* Right eye */}
        <motion.g style={{ x: eyeX, y: eyeY }}>
          <circle cx="122" cy="70" r="10" fill="hsl(330, 100%, 50%)" />
          <circle cx="122" cy="70" r="5" fill="hsl(0, 0%, 100%)" />
          <circle cx="124" cy="68" r="2" fill="hsl(330, 100%, 50%)" opacity="0.6" />
        </motion.g>

        {/* Mouth */}
        <rect x="80" y="95" width="40" height="6" rx="3" fill="hsl(130, 100%, 55%)" opacity="0.8" />

        {/* Ears */}
        <rect x="35" y="55" width="12" height="30" rx="4" fill="url(#headGradient)" stroke="hsl(212, 100%, 48%)" strokeWidth="1.5" />
        <rect x="153" y="55" width="12" height="30" rx="4" fill="url(#headGradient)" stroke="hsl(212, 100%, 48%)" strokeWidth="1.5" />

        {/* Neck */}
        <rect x="85" y="125" width="30" height="15" rx="3" fill="hsl(220, 15%, 85%)" stroke="hsl(212, 100%, 48%)" strokeWidth="1" />

        {/* Body top */}
        <rect x="55" y="140" width="90" height="45" rx="12" fill="url(#bodyGradient)" stroke="hsl(212, 100%, 48%)" strokeWidth="2" />

        {/* Chest light */}
        <circle cx="100" cy="160" r="8" fill="hsl(130, 100%, 55%)" opacity="0.6" className="animate-pulse-glow" />
        <circle cx="100" cy="160" r="4" fill="hsl(130, 100%, 55%)" />

        {/* Decorative lines on body */}
        <line x1="70" y1="150" x2="85" y2="150" stroke="hsl(212, 100%, 48%)" strokeWidth="1" opacity="0.5" />
        <line x1="115" y1="150" x2="130" y2="150" stroke="hsl(330, 100%, 50%)" strokeWidth="1" opacity="0.5" />
        <line x1="70" y1="170" x2="85" y2="170" stroke="hsl(212, 100%, 48%)" strokeWidth="1" opacity="0.5" />
        <line x1="115" y1="170" x2="130" y2="170" stroke="hsl(330, 100%, 50%)" strokeWidth="1" opacity="0.5" />

        <defs>
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 15%, 92%)" />
            <stop offset="100%" stopColor="hsl(220, 15%, 82%)" />
          </linearGradient>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 15%, 90%)" />
            <stop offset="100%" stopColor="hsl(220, 15%, 80%)" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default InteractiveRobot;
