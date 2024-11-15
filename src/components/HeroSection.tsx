import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="cosmic-sphere" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cosmic-text">
          Welcome to My Universe
        </h1>
        <p className="text-lg md:text-xl text-space-white/80 max-w-2xl mx-auto mb-8">
          Embark on an interstellar journey through my digital cosmos, where code meets creativity
          and innovation knows no bounds.
        </p>
        <motion.button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full cosmic-gradient text-space-white font-semibold
                   shadow-lg hover:shadow-cosmic-blue/50 transition-shadow duration-300"
        >
          Begin Exploration
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToProjects}
      >
        <ChevronDown className="w-8 h-8 text-cosmic-blue" />
      </motion.div>
    </section>
  );
};

export default HeroSection;