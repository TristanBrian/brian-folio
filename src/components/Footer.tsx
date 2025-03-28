
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative py-8 border-t border-cyber-blue/20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-bold text-lg text-white">
              Brian<span className="text-cyber-blue">Kioko</span>
            </span>
            <p className="text-gray-400 text-sm mt-2">
              Cybersecurity Specialist & Software Engineer<br />
              Nairobi, Kenya
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/TristanBrian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tristan-bryan-0986372b9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:lessusbrian7@gmail.com"
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Brian Kioko. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-cyber-blue transition-colors duration-300"
            >
              <span className="mr-2 text-sm">Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
