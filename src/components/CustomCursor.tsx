import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        rotate: isPointer ? 45 : 0,
        scale: isPointer ? 1.2 : 1
      }}
      transition={{
        type: "spring",
        mass: 0.5,
        stiffness: 100,
        damping: 10
      }}
    >
      <Rocket 
        className="w-8 h-8 text-cosmic-blue"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.5))'
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;