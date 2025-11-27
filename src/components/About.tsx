import React from 'react';
import { Code, Server, Database } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">
              Passionate Fullstack Developer
            </h3>
            <p className="text-slate-600 leading-relaxed">
              I'm a dedicated fullstack developer with expertise in building
              robust and scalable web applications. With a strong foundation in
              both frontend and backend technologies, I create seamless user
              experiences backed by solid architecture.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My approach combines technical excellence with creative
              problem-solving to deliver solutions that not only meet but exceed
              client expectations. I'm constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Code className="mx-auto text-blue-600 mb-2" size={24} />
                <h4 className="font-medium">Frontend</h4>
                <p className="text-sm text-slate-500">React & Next.js</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Server className="mx-auto text-blue-600 mb-2" size={24} />
                <h4 className="font-medium">Backend</h4>
                <p className="text-sm text-slate-500">Laravel & Node.js</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center">
                <Database className="mx-auto text-blue-600 mb-2" size={24} />
                <h4 className="font-medium">Databases</h4>
                <p className="text-sm text-slate-500">MySQL & PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional developer" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="font-bold text-lg">5+ Years</p>
              <p className="text-sm opacity-80">Professional Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}