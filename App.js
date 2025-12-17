import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Mail, Download, Code, Palette, Database, Smartphone, Server, Globe, ExternalLink } from "lucide-react";
import "./styles.css";

// Components
const Navbar = ({ scrollToSection, isMobileMenuOpen, toggleMobileMenu }) => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="navbar glass"
  >
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="font-gradient text-xl font-bold"
      >
        <a href="#" className="flex items-center">
          <Code className="mr-2" />
          VibePortfolio
        </a>
      </motion.div>
      
      <div className="hidden md:flex space-x-8">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <motion.a
            key={section}
            whileHover={{ y: -2 }}
            className="nav-link cursor-pointer"
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.a>
        ))}
      </div>
      
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="md:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </motion.button>
    </div>
    
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 space-y-4"
        >
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <motion.a
              key={section}
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="block nav-link cursor-pointer"
              onClick={() => {
                scrollToSection(section);
                toggleMobileMenu();
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.nav>
);

const HeroSection = () => (
  <section id="home" className="section hero-section min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fade-in"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-gradient">
          Hi, I'm Alex
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Full Stack Developer & UI/UX Designer creating digital experiences that inspire and perform.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative w-80 h-80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-purple-500/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-pink-500/20"
          />
          <div className="absolute inset-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Code className="text-white" size={32} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 font-gradient">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My journey in the digital world
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8"
        >
          <h3 className="text-2xl font-bold mb-6 font-gradient">My Story</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            With over 5 years of experience in web development, I've had the privilege of working with startups and established companies alike. My passion lies in creating seamless digital experiences that bridge the gap between design and functionality.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I specialize in building responsive, accessible, and performant web applications using modern technologies. When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#" className="btn-primary flex items-center">
              <Download className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass p-8"
        >
          <h3 className="text-2xl font-bold mb-6 font-gradient">What I Do</h3>
          <div className="space-y-4">
            {[
              { icon: <Code />, title: "Web Development", description: "Full stack applications with React, Node.js, and modern frameworks" },
              { icon: <Palette />, title: "UI/UX Design", description: "User-centered designs with Figma and design systems" },
              { icon: <Database />, title: "Database Design", description: "Optimized data structures and API integrations" },
              { icon: <Smartphone />, title: "Mobile Apps", description: "Cross-platform solutions with React Native" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="mr-4 text-purple-400">{service.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 88 }
  ];

  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-gradient">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8"
          >
            <h3 className="text-2xl font-bold mb-8 font-gradient">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="skill-item"
                >
                  <span className="w-24 font-medium">{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="ml-4 text-gray-400">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8"
          >
            <h3 className="text-2xl font-bold mb-8 font-gradient">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "GitHub", icon: <Github /> },
                { name: "Figma", icon: <Palette /> },
                { name: "AWS", icon: <Server /> },
                { name: "Vercel", icon: <Globe /> },
                { name: "Firebase", icon: <Database /> },
                { name: "Docker", icon: <Server /> }
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="text-3xl mb-2 text-purple-400">{tool.icon}</div>
                  <span className="font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and admin dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "Real-time social platform with chat and content sharing features",
      technologies: ["React Native", "Firebase", "GraphQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex business data",
      technologies: ["D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts and nutrition with AI recommendations",
      technologies: ["React Native", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-gradient">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected works that showcase my capabilities
          </p>
        </motion.div>
        
        <div className="grid-portfolio">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card glass overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-gradient">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <ExternalLink className="mr-2" />
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-gradient">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8"
          >
            <h3 className="text-2xl font-bold mb-6 font-gradient">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: <Mail />, title: "Email", value: "alex@example.com", link: "mailto:alex@example.com" },
                { icon: <Github />, title: "GitHub", value: "@alexdev", link: "https://github.com/alexdev" },
                { icon: <Linkedin />, title: "LinkedIn", value: "Alex Developer", link: "https://linkedin.com/in/alexdev" },
                { icon: <Twitter />, title: "Twitter", value: "@alexdev", link: "https://twitter.com/alexdev" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="mr-4 text-purple-400">{contact.icon}</div>
                  <div>
                    <h4 className="font-semibold">{contact.title}</h4>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8"
          >
            <h3 className="text-2xl font-bold mb-6 font-gradient">Send Me A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="form-input"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="footer"
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-gradient text-xl font-bold mb-4"
        >
          <a href="#" className="flex items-center">
            <Code className="mr-2" />
            VibePortfolio
          </a>
        </motion.div>
        <p className="text-gray-400 mb-4">© {new Date().getFullYear()} Alex Developer. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Twitter />
          </a>
          <a href="mailto:alex@example.com" className="social-link">
            <Mail />
          </a>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
          </motion.div>
        )}

        {activeSection === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutSection />
          </motion.div>
        )}

        {activeSection === 'skills' && (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SkillsSection />
          </motion.div>
        )}

        {activeSection === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectsSection />
          </motion.div>
        )}

        {activeSection === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
