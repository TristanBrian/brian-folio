import { Shield, Code, Server, Globe, Award, GraduationCap } from 'lucide-react';
import { useEffect } from 'react';

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

const certificates = [
  {
    title: "Certified Ethical Hacker (CEH)",
    badgeId: "e3896304-9bf0-4f74-acfb-be7fb8d38268"
  },
  {
    title: "Cloud Security",
    badgeId: "f6cc76ee-e1c4-43c9-8e1e-33b7825f32b4"
  },
  {
    title: "Cybersecurity Certification",
    badgeId: "49fd1e8a-be97-4aa6-b0bd-cba11b2082da"
  },
  {
    title: "Incident Response",
    badgeId: "166c7ebb-47a0-4b2a-8305-68a908781eb3"
  },
  {
    title: "Security Operation",
    badgeId: "6f2ba771-6e93-4822-914c-546c67fa7453"
  },
  {
    title: "Vulnerability Management",
    badgeId: "c7d3fac8-480f-4750-9acc-d879c37c63a4"
  }
];

const AboutSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Based in Nairobi, Kenya, I'm passionate about bridging the gap between software development and cybersecurity. 
            I build secure applications and protect systems from evolving threats.
          </p>
          <style>{`
            /* Override styles for embedded badges */
            .credly-badge,
            .credly-badge *,
            .credly-badge .credly-badge-title,
            .credly-badge .credly-badge-issuer,
            .credly-badge .credly-badge-date {
              color: white !important;
            }
            .badge-container iframe {
              filter: invert(1) !important;
            }
          `}</style>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap size={22} className="mr-2 text-cyber-blue" />
              Education & Experience
            </h3>

            <div className="space-y-6">
              {/* Education Section */}
              <div className="cyberpanel p-6 animate-fade-in">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <GraduationCap size={20} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">
                      Bachelor of Science in Business and Information Technology
                    </h4>
                    <p className="text-gray-400 mb-2">Mount Kenya University • 2022 – 2025</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                      <li>Specialized in cybersecurity and software development</li>
                      <li>Completed multiple research projects focused on network security</li>
                      <li>Served as Tech Lead in class projects integrating ICT solutions for enterprise workflows</li>
                      <li>Built strong expertise in aligning business strategy with IT architecture</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Freelance Experience */}
              <div className="cyberpanel p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Code size={20} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Freelance Software Developer</h4>
                    <p className="text-gray-400 mb-2">Smartech Ventures • Freelance</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                      <li>Developed secure applications and implemented cybersecurity protocols for enterprise systems</li>
                      <li>Designed and enforced access control mechanisms including JWT/OAuth authentication systems</li>
                      <li>Built and deployed RESTful APIs, authentication systems, and analytics dashboards</li>
                      <li>Ensured secure user provisioning and role-based data access for client applications</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Internship Experience */}
              <div className="cyberpanel p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Code size={20} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Software Developer Intern</h4>
                    <p className="text-gray-400 mb-2">Sensys Limited • July 2025 - Nov 2025</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                      <li>Gained hands-on experience in Banking Technology and secure coding practices</li>
                      <li>Contributed to regulatory compliance and data integrity within a core banking environment (Temenos T24)</li>
                      <li>Developed scripts that enhanced security controls and ensured accurate transaction processing</li>
                      <li>Worked with financial standards and secure development lifecycle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center">
              <Award size={22} className="mr-2 text-cyber-blue" />
              Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certificates.map((cert, index) => cert.badgeId ? (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                  <div
                    className="badge-container"
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id={cert.badgeId}
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                </div>
              ) : null)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Code size={22} className="mr-2 text-cyber-blue" />
              Technical Skills
            </h3>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-cyber-blue mr-2">{skill.icon}</span>
                      <h4 className="text-white font-medium">{skill.name}</h4>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-cyber-darker rounded-full overflow-hidden cyberborder">
                    <div
                      className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                      style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center">
              <Code size={22} className="mr-2 text-cyber-blue" />
              Technologies
            </h3>

            <div className="cyberpanel p-6">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {[
                  'React',
                  'Node.js',
                  'Python',
                  'JavaScript',
                  'HTML/CSS',
                  'AWS',
                  'Docker',
                  'Linux',
                  'Git',
                  'PostgreSQL',
                  'MongoDB',
                  'Express',
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="text-center py-2 px-1 border border-cyber-blue/20 rounded bg-cyber-darker hover:bg-cyber-blue/10 hover:border-cyber-blue/40 transition-colors duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05 + 0.5}s` }}
                  >
                    <span className="text-sm text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
