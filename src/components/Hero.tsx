import React from 'react';
import { ArrowDown } from 'lucide-react';
export function Hero() {
  return <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-blue-600">Fullstack Developer</span>
            <span className="block mt-2">Building Modern Web Applications</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Specialized in React, Next.js, Laravel, and database solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="bg-white hover:bg-slate-100 text-slate-800 font-medium px-8 py-3 rounded-lg border border-slate-200 transition-colors">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>;
}