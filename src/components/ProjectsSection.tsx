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
    title: 'Cyberfolio Interactive',
    description: 'Interactive cybersecurity-themed portfolio website built with React and Tailwind CSS showcasing projects and skills.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    tags: ['React', 'Tailwind CSS', 'Portfolio', 'TypeScript'],
    links: {
      github: 'https://github.com/TristanBrian/brian-folio',
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
    title: 'Car Rental System',
    description: 'It is a web application designed to facilitate the rental of vehicles. It allows users to browse available cars, make bookings, and manage their reservations. The application is built using PHP, providing a robust backend for handling user requests and database interactions.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
    tags: ['DevOps', 'CI/CD', 'Security', 'Docker','PHP','MySQL'],
    links: {
      github: 'https://github.com/TristanBrian/JoyDek-Rentals',
    },
    icon: <Server />,
  },
  {
    id: 4,
    title: 'Drone Shooter',
    description: 'Drone shooter game built with OpenGL and Python, showcasing advanced graphics and physics simulations.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    tags: ['Development', 'OpenGl', 'Python', 'Game', '3D Graphics', 'Physics'],
    links: {
      github: 'https://github.com/TristanBrian/opengl-drone-shooter',
    },
    icon: <Shield />,
  },
  {
    id: 5,
    title: 'Ethical Hacking Tools',
    description: 'Collection of ethical hacking tools and scripts for penetration testing and security assessments.',
    category: 'cybersecurity',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42',
    tags: ['Ethical Hacking', 'Penetration Testing', 'Python', 'Security'],
    links: {
      github: 'https://github.com/TristanBrian/ethical-hacking-tools',
    },
    icon: <Lock />,
  },
  {
    id: 6,
    title: 'AI Security Assistant',
    description: 'AI-powered security assistant that helps identify and mitigate potential security threats in real-time.',
    category: 'research',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    tags: ['AI', 'Machine Learning', 'Security', 'Python'],
    links: {
      github: 'https://github.com/TristanBrian/ai-security-assistant',
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
