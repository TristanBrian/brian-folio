
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TextTypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return (
    <div className="font-mono text-cyber-blue">
      <span>{displayText}</span>
      <span className="inline-block w-2 h-5 bg-cyber-blue ml-1 animate-terminal-cursor"></span>
    </div>
  );
};

const BinaryRain = () => {
  const [columns, setColumns] = useState<string[]>([]);
  
  useEffect(() => {
    // Create binary columns based on screen width
    const createColumns = () => {
      const width = window.innerWidth;
      const columnCount = Math.floor(width / 20); // 20px per column
      console.log('Creating binary rain with columns:', columnCount);
      
      const newColumns = Array.from({ length: columnCount }, () => {
        const length = 15 + Math.floor(Math.random() * 15); // Random length between 15-30 characters
        return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
      });
      
      setColumns(newColumns);
      console.log('Binary columns created:', newColumns.length);
    };
    
    createColumns();
    window.addEventListener('resize', createColumns);
    
    return () => window.removeEventListener('resize', createColumns);
  }, []);
  
  console.log('Rendering binary rain with columns:', columns.length);
  
  return (
    <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      {columns.map((col, colIndex) => (
        <div 
          key={colIndex} 
          className="binary-column absolute top-0 text-cyber-blue font-mono text-sm"
          style={{
            left: `${colIndex * 20}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        >
          {col}
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  console.log('Rendering HeroSection');
  
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Binary rain effect */}
      <BinaryRain />
      
      {/* Animated cyber grid in background */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
      <div className="absolute inset-0 noise-overlay z-0"></div>
      
      {/* Scanning line animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-1 bg-cyber-blue/20 animate-network-scan"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block py-1 px-3 bg-cyber-blue/10 border border-cyber-blue/30 rounded-md">
            <TextTypingEffect text="Cybersecurity Specialist & Software Engineer" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
            Brian <span className="text-cyber-blue cyberglow">Kioko</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Dedicated security professional and full-stack developer based in Nairobi, Kenya. Specializing in developing secure applications and implementing robust cybersecurity solutions to protect critical digital assets.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                console.log('View My Work button clicked');
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cyber-button animate-pulse-glow"
            >
              View My Work
              <ArrowRight size={16} className="ml-2" />
            </button>
            
            <button
              onClick={() => {
                console.log('Contact Me button clicked');
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border border-gray-500 text-gray-300 hover:border-gray-300 hover:text-white py-2 px-6 rounded-sm transition-all duration-300 uppercase tracking-wider font-medium text-sm"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="mt-16 terminal">
          <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <span>bash ~ portfolio</span>
          </div>
          <div className="text-green-400">
            <p>$ <span className="text-cyber-blue">whoami</span></p>
            <p className="ml-2">Brian Kioko - Cybersecurity Specialist & Software Engineer</p>
            <p>$ <span className="text-cyber-blue">skills --list</span></p>
            <p className="ml-2">['React', 'Python', 'JavaScript', 'Penetration Testing', 'Network Security', 'DevOps']</p>
            <p>$ <span className="text-cyber-blue">./start_tour.sh</span></p>
            <p className="ml-2 text-cyber-blue animate-pulse">Initiating portfolio tour...</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cyber-dark to-transparent z-10"></div>
      <div className="absolute bottom-10 right-10 text-xs text-cyber-blue/60 font-mono hidden md:block">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-2">
            <span>{Math.random().toString(16).substring(2, 10)}</span>
            <span>{Math.random().toString(16).substring(2, 10)}</span>
            <span>{Math.random().toString(16).substring(2, 10)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
