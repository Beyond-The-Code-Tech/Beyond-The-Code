import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StarField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      return star;
    };
    
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    
    for (let i = 0; i < starCount; i++) {
      container.appendChild(createStar());
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default StarField;