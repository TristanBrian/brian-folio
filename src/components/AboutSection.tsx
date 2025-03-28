import { Shield, Code, Server, Globe, Award, GraduationCap } from 'lucide-react';
const skills = [{
  icon: <Shield size={22} />,
  name: 'Cybersecurity',
  description: 'Penetration testing, vulnerability assessment, and security consulting',
  level: 92
}, {
  icon: <Code size={22} />,
  name: 'Software Development',
  description: 'Building secure applications with modern frameworks',
  level: 88
}, {
  icon: <Server size={22} />,
  name: 'DevOps',
  description: 'Secure CI/CD pipelines and infrastructure automation',
  level: 85
}, {
  icon: <Globe size={22} />,
  name: 'Network Security',
  description: 'Implementing Zero Trust architectures and security protocols',
  level: 90
}];
const certificates = [{
  title: "Certified Ethical Hacker (CEH)",
  issuer: "EC-Council",
  date: "2023",
  icon: <Shield size={20} className="text-cyber-blue" />
}, {
  title: "CompTIA Security+",
  issuer: "CompTIA",
  date: "2022",
  icon: <Award size={20} className="text-cyber-blue" />
}, {
  title: "AWS Security Specialist",
  issuer: "Amazon Web Services",
  date: "2022",
  icon: <Server size={20} className="text-cyber-blue" />
}];
const AboutSection = () => {
  return <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Based in Nairobi, Kenya, I'm passionate about bridging the gap between software development and cybersecurity. 
            I build secure applications and protect systems from evolving threats.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap size={22} className="mr-2 text-cyber-blue" />
              Education & Experience
            </h3>
            
            <div className="space-y-6">
              <div className="cyberpanel p-6 animate-fade-in">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <GraduationCap size={20} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Bachelor of Science Business and Information Technology</h4>
                    <p className="text-gray-400 mb-2">Mount Kenya University • 2022-2025</p>
                    <p className="text-sm text-gray-300">
                      Specialized in cybersecurity and software development. Completed multiple research projects on network security.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="cyberpanel p-6 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Code size={20} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">FreeLance Software Developer</h4>
                    <p className="text-gray-400 mb-2">Smartech Ventures• 2023-Date</p>
                    <p className="text-sm text-gray-300">
                      Developing secure applications and implementing cybersecurity protocols for enterprise systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center">
              <Award size={22} className="mr-2 text-cyber-blue" />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => <div key={index} className="cyberpanel p-4 animate-fade-in" style={{
              animationDelay: `${index * 0.1 + 0.3}s`
            }}>
                  <div className="flex items-center">
                    <div className="mr-3">{cert.icon}</div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{cert.title}</h4>
                      <p className="text-xs text-gray-400">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Code size={22} className="mr-2 text-cyber-blue" />
              Technical Skills
            </h3>
            
            <div className="space-y-8">
              {skills.map((skill, index) => <div key={index} className="animate-fade-in" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-cyber-blue mr-2">{skill.icon}</span>
                      <h4 className="text-white font-medium">{skill.name}</h4>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-cyber-darker rounded-full overflow-hidden cyberborder">
                    <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" style={{
                  width: `${skill.level}%`,
                  transition: 'width 1s ease-in-out'
                }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
                </div>)}
            </div>
            
            <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center">
              <Code size={22} className="mr-2 text-cyber-blue" />
              Technologies
            </h3>
            
            <div className="cyberpanel p-6">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {['React', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS', 'AWS', 'Docker', 'Linux', 'Git', 'PostgreSQL', 'MongoDB', 'Express'].map((tech, index) => <div key={index} className="text-center py-2 px-1 border border-cyber-blue/20 rounded bg-cyber-darker hover:bg-cyber-blue/10 hover:border-cyber-blue/40 transition-colors duration-300 animate-fade-in" style={{
                animationDelay: `${index * 0.05 + 0.5}s`
              }}>
                    <span className="text-sm text-gray-300">{tech}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;