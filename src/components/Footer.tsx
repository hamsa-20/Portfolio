import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      id: 'github', 
      icon: <Github size={20} />, 
      url: 'https://github.com/hamsadixit' 
    },
    { 
      id: 'linkedin', 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/hamsadixit' 
    },
    { 
      id: 'twitter', 
      icon: <Twitter size={20} />, 
      url: 'https://twitter.com/hamsadixit' 
    },
    { 
      id: 'instagram', 
      icon: <Instagram size={20} />, 
      url: 'https://instagram.com/hamsadixit' 
    }
  ];

  return (
    <footer className="bg-slate-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              Hamsa<span className="text-blue-400">.dev</span>
            </h3>
            <p className="text-slate-400 mt-2">
              Creating exceptional digital experiences
            </p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label={`Connect on ${link.id}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div>
            <ul className="flex gap-6 mb-6 md:mb-0">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} Hamsa Dixit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;