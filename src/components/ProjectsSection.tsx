import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Stellar Dashboard",
    description: "A modern analytics dashboard with real-time data visualization and interactive charts.",
    tech: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    image: "https://i.ibb.co/pLNp7Ln/demohero.png",
    liveUrl: "https://stellar-dashboard-ten.vercel.app/",
    githubUrl: "https://github.com/Beyond-The-Code-Tech/Stellar-Dashboard",
  },
  {
    title: "Nebula Chat",
    description: "Real-time messaging application with end-to-end encryption and file sharing.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "TailwindCSS"],
    image: "https://i.ibb.co/4Sm2Skk/nebula-chat-vercel-app.png",
    liveUrl: "https://nebula-chat.vercel.app/",
    githubUrl: "https://github.com/Beyond-The-Code-Tech/Nebula-Chat",
  },
  {
    title: "Quantum Tasks",
    description: "Task management system with AI-powered prioritization and team collaboration.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1740",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = React.memo(({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative rounded-xl overflow-hidden bg-nebula-dark/50 backdrop-blur-sm shadow-lg"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 cosmic-text">{project.title}</h3>
        <p className="text-space-white/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-cosmic-blue/10 text-cosmic-blue"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cosmic-blue hover:text-cosmic-purple transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cosmic-blue hover:text-cosmic-purple transition-colors"
            >
              <Github size={20} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">
            <Rocket className="inline-block mr-2 mb-1" />
            Project Constellation
          </h2>
          <p className="text-lg text-space-white/80 max-w-2xl mx-auto">
            Explore the digital galaxies I've created, each project a unique star in my development universe.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
