import React, { useState } from 'react';
import Navigation from './components/Navigation';
import StarField from './components/StarField';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <StarField />
      <CustomCursor />
      <ScrollProgress />
      
      <div className="min-h-screen relative z-10">
        <Navigation isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        <main className="container mx-auto">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}

export default App;