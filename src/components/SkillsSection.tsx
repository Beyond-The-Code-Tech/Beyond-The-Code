import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Settings, Star } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const skills: Record<string, Skill[]> = {
  "Frontend Development": [
    { name: "React", icon: <Code />, level: 80, category: "Frontend" },
    { name: "TypeScript", icon: <Code />, level: 80, category: "Frontend" },
    { name: "Next.js", icon: <Code />, level: 70, category: "Frontend" },
    { name: "Tailwind CSS", icon: <Layout />, level: 85, category: "Frontend" }
  ],
  "Tools & Others": [
    { name: "Git", icon: <Settings />, level: 90, category: "Tools" },
    { name: "Docker", icon: <Settings />, level: 70, category: "Tools" },
    { name: "AWS", icon: <Server />, level: 65, category: "Tools" },
    { name: "Testing", icon: <Settings />, level: 75, category: "Tools" }
  ]
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-nebula-dark/50 backdrop-blur-sm p-4 rounded-xl"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-cosmic-blue">
          {React.cloneElement(skill.icon as React.ReactElement, { size: 24 })}
        </span>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      <div className="w-full h-2 bg-space-black/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full cosmic-gradient"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
            <Star className="inline-block mr-2 mb-1" />
            Skill Constellation
          </h2>
          <p className="text-lg text-space-white/80 max-w-2xl mx-auto">
            Navigate through my technical expertise, each skill a star in my development constellation.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 cosmic-text">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;