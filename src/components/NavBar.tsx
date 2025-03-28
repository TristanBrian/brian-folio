import { useState, useEffect } from 'react';
import { Code, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };
  const navItems = [{
    id: 'home',
    label: 'Home',
    icon: <Code size={18} />
  }, {
    id: 'about',
    label: 'About',
    icon: <User size={18} />
  }, {
    id: 'projects',
    label: 'Projects',
    icon: <Briefcase size={18} />
  }, {
    id: 'contact',
    label: 'Contact',
    icon: <Mail size={18} />
  }];
  return <header className="fixed w-full z-50 bg-cyber-darker/80 backdrop-blur-sm border-b border-cyber-blue/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
            <span className="text-cyber-blue font-bold">BK</span>
          </div>
          <span className="font-bold text-lg text-white">
            Cyber<span className="text-cyber-blue">Dev</span>
          </span>
        </div>
        
        {isMobile ? <>
            <button onClick={() => setIsOpen(!isOpen)} className="text-cyber-blue">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isOpen && <div className="absolute top-16 left-0 w-full bg-cyber-darker border-b border-cyber-blue/20 py-4 animate-fade-in">
                <nav className="container mx-auto px-4">
                  <ul className="flex flex-col gap-4">
                    {navItems.map(item => <li key={item.id}>
                        <button onClick={() => scrollToSection(item.id)} className={`flex items-center gap-2 text-base ${activeSection === item.id ? 'text-cyber-blue font-medium' : 'text-gray-400 hover:text-cyber-blue'}`}>
                          {item.icon}
                          {item.label}
                        </button>
                      </li>)}
                  </ul>
                </nav>
              </div>}
          </> : <nav>
            <ul className="flex items-center gap-8">
              {navItems.map(item => <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className={`flex items-center gap-2 ${activeSection === item.id ? 'text-cyber-blue font-medium' : 'text-gray-400 hover:text-cyber-blue'}`}>
                    {item.icon}
                    {item.label}
                  </button>
                </li>)}
            </ul>
          </nav>}
      </div>
    </header>;
};
export default NavBar;