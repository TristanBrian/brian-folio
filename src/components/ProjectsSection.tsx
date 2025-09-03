import { useState } from 'react';
import { ExternalLink, Github, Shield, Code, Server, Lock, Star, Database, Bot } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  category: 'cybersecurity' | 'development' | 'research';
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  icon: JSX.Element;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Kiddy Class Hub',
    description: 'A comprehensive management system for kindergartens and schools, designed to streamline administrative tasks and enhance communication between teachers, parents, and students.',
    category: 'development',
    image: 'https://media.istockphoto.com/id/2196132488/photo/back-view-of-school-kids-having-a-class-in-the-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=SUkvIWztpUsKxXCy_xYk7subpvfzwrZ6zxvWY-7aP7A=',
    tags: ['React', 'Tailwind CSS', 'MySql', 'TypeScript'],
    links: {
      github: 'https://github.com/TristanBrian/kiddy-class',
    },
    icon: <Code />,
  },
  {
    id: 2,
    title: 'Linux-Based Smart Home Automation System',
    description: 'A professional, scalable, and modular smart home automation system built using Raspberry Pi, Python, Flask, and MQTT. This project includes a custom Linux kernel module, real-time sensor data collection, and a web-based dashboard.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
    tags: ['React', 'Linux', 'Python', 'Flask', 'MQTT', 'Raspberry Pi'],
    links: {
      github: 'https://github.com/TristanBrian/linux-based-_home_automation',
    },
    icon: <Database />,
  },
  {
    id: 3,
    title: 'Civic Hero',
    description: 'CivicHero is a web platform designed to empower Kenyan citizens through civic education, community engagement, and gamified rewards.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1603668406695-0ccbce58bc05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l2aWMlMjBoZXJvfGVufDB8fDB8fHww',
    tags: ['DevOps', 'CI/CD', 'Vite', 'Docker','Typescript','MySQL'],
    links: {
      github: 'https://github.com/TristanBrian/civic-heroo',
    },
    icon: <Server />,
  },
  {
    id: 4,
    title: 'Drone Shooter',
    description: 'Drone shooter game built with OpenGL and Python, showcasing advanced graphics and physics simulations.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1662348316911-d6aef85f8560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJvbmUlMjBzaG9vdGVyfGVufDB8fDB8fHww',
    tags: ['Game Development', 'OpenGL', 'Python', 'Game', '3D Graphics', 'Physics'],
    links: {
      github: 'https://github.com/TristanBrian/opengl-drone-shooter',
    },
    icon: <Shield />,
  },
  {
    id: 5,
    title: 'MamaCare Health Platform',
    description: 'MamaCare is a full-stack maternal health platform that provides: 📚 Medically verified pregnancy education (English/Swahili), 🏥 Health monitoring tools, and 💬 Community support.',
    category: 'development',
    image: 'https://media.istockphoto.com/id/2164378834/photo/bonding-with-baby.webp?a=1&b=1&s=612x612&w=0&k=20&c=xd-XFPDmAvv7xQRNwJPVE6OqaAnPo8j8NHXgJzoBjPA=',
    tags: ['AI', 'Health Monitoring', 'TypeScript', 'React'],
    links: {
      github: 'https://github.com/TristanBrian/MamaCare',
    },
    icon: <Lock />,
  },
  {
    id: 6,
    title: 'BusCar Management system',
    description: 'AI-powered BusCar system with real-time booking and M-Pesa payment integration',
    category: 'research',
    image: 'https://images.unsplash.com/photo-1645500357226-9f344e7e8133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['AI', 'Daraja API', 'React', 'TypeScript'],
    links: {
      github: 'https://github.com/TristanBrian/buscar',
    },
    icon: <Bot />,
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Research</h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects spanning cybersecurity implementations, 
            secure application development, and security research.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 space-x-2">
          {['all', 'cybersecurity', 'development', 'research'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-sm uppercase text-sm tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/40'
                  : 'bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-gray-300'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cyberpanel overflow-hidden animate-fade-in"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-cyber-dark/70 group-hover:bg-cyber-dark/50 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 z-10 bg-cyber-darker/80 p-2 rounded">
                  <span className="text-cyber-blue">
                    {project.icon}
                  </span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-button !py-1.5 !px-3 !text-xs"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-button !py-1.5 !px-3 !text-xs"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block text-xs py-1 px-2 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {hoveredId === project.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
