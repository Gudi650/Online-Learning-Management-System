import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold">
              <span className="text-blue-500">Dev</span>Portfolio
            </a>
            <p className="mt-2 text-slate-400 max-w-md">
              Fullstack developer specializing in React, Next.js, Laravel and
              database solutions.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@example.com" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors text-sm">
              Skills
            </a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>;
}