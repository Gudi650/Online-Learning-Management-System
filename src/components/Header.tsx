import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          <span className="text-blue-600">Dev</span>Portfolio
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a href="#about" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#skills" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <div className="flex items-center space-x-4 py-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
        </div>}
    </header>;
}