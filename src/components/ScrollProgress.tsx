import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-pink z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgress;