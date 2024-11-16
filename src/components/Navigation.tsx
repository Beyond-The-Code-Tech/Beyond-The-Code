import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, toggleMenu }) => {
  const menuItems = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed top-0 w-full p-6 z-20 bg-space-black/50 backdrop-blur-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-2"
        >
          <Rocket className="w-8 h-8 text-cosmic-blue" />
          <span className="text-xl font-bold cosmic-text">Beyond The Code</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-space-white hover:text-cosmic-blue transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Beyond-The-Code-Tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-space-white hover:text-cosmic-blue transition-colors duration-300 cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com" // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-space-white hover:text-cosmic-blue transition-colors duration-300 cursor-pointer" />
            </a>
            <a
              href="mailto:beyondthecode0@gmail.com"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-space-white hover:text-cosmic-blue transition-colors duration-300 cursor-pointer" />
            </a>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-space-white hover:text-cosmic-blue transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-nebula-dark/95 backdrop-blur-lg"
      >
        <div className="container mx-auto py-4 px-6">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-space-white hover:text-cosmic-blue transition-colors duration-300 py-2"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-6 py-4">
              <a
                href="https://github.com/Beyond-The-Code-Tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-space-white hover:text-cosmic-blue transition-colors duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/beyond-the-code-960721338/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-space-white hover:text-cosmic-blue transition-colors duration-300 cursor-pointer" />
              </a>
              <a
                href="mailto:beyondthecode0@gmail.com"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-space-white hover:text-cosmic-blue transition-colors duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navigation;
