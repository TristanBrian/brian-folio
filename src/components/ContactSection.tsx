import { useState } from 'react';
import { Mail, Github, Linkedin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                toast({
                    title: "Message Sent",
                    description: "Thank you for your message! I'll get back to you soon.",
                    variant: "default"
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }

    } else {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive"
      });
    }
  };
  return <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? 
            Feel free to reach out and let's talk about your ideas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="cyberpanel p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Send size={20} className="mr-2 text-cyber-blue" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2 text-sm" htmlFor="name">
                  Your Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full bg-cyber-black border rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-cyber-blue/50 ${errors.name ? 'border-red-500' : 'border-cyber-blue/30'}`} placeholder="John Doe" />
                {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.name}
                  </p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-300 mb-2 text-sm" htmlFor="email">
                  Your Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-cyber-black border rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-cyber-blue/50 ${errors.email ? 'border-red-500' : 'border-cyber-blue/30'}`} placeholder="johndoe@example.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.email}
                  </p>}
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 text-sm" htmlFor="message">
                  Your Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full bg-cyber-black border rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-cyber-blue/50 ${errors.message ? 'border-red-500' : 'border-cyber-blue/30'}`} placeholder="Your message here..."></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.message}
                  </p>}
              </div>
              
              <button type="submit" disabled={isSubmitting} className={`cyber-button w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? <>
                    <span className="mr-2">Sending...</span>
                    <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-cyber-blue animate-spin"></div>
                  </> : <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>}
              </button>
            </form>
          </div>
          
          <div>
            <div className="cyberpanel p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Mail size={20} className="mr-2 text-cyber-blue" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Mail size={18} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:lessusbrian7@gmail.com" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">lessusbrian7@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Linkedin size={18} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Phone Number</h4>
                <p className="text-gray-400">+254712046110</p>
                <h4 className="text-white font-medium">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/brian-kioko-0986372b9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">https://www.linkedin.com/in/tristan-bryan-0986372b9/</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex-shrink-0 flex items-center justify-center">
                    <Github size={18} className="text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a href="https://github.com.TristanBrian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">https://github.com/TristanBrian</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cyberpanel p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle size={20} className="mr-2 text-cyber-blue" />
                Available For
              </h3>
              
              <ul className="space-y-3">
                {['Freelance Projects', 'Security Consulting', 'Full-time Positions', 'Speaking Engagements', 'Security Assessments'].map((item, index) => <li key={index} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-2"></span>
                    {item}
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
