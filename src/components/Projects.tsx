import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment processing, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Laravel', 'MySQL', 'Stripe API'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    title: 'Project Management Tool',
    description: 'A collaborative workspace for teams to plan projects, track progress, and manage resources.',
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    title: 'Healthcare Dashboard',
    description: 'An analytics platform for healthcare providers to monitor patient data and treatment outcomes.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Laravel', 'MySQL', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    title: 'Real Estate Listing App',
    description: 'A property listing platform with advanced search, filtering, and mapping features.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'PostgreSQL', 'Google Maps API', 'Docker'],
    liveUrl: '#',
    githubUrl: '#'
  }];
  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills
            and expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 hover:text-slate-900 transition-colors">
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <span>View more projects on GitHub</span>
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>;
}