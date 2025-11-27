import React from 'react';
export function Skills() {
  const frontendSkills = [{
    name: 'React',
    level: 90
  }, {
    name: 'Next.js',
    level: 85
  }, {
    name: 'TypeScript',
    level: 80
  }, {
    name: 'HTML/CSS',
    level: 95
  }, {
    name: 'Tailwind CSS',
    level: 90
  }];
  const backendSkills = [{
    name: 'Laravel',
    level: 85
  }, {
    name: 'Node.js',
    level: 75
  }, {
    name: 'MySQL',
    level: 80
  }, {
    name: 'PostgreSQL',
    level: 75
  }, {
    name: 'API Design',
    level: 85
  }];
  const devOpsSkills = [{
    name: 'Git/GitHub',
    level: 90
  }, {
    name: 'Docker',
    level: 80
  }, {
    name: 'CI/CD',
    level: 70
  }, {
    name: 'AWS',
    level: 65
  }, {
    name: 'Linux',
    level: 75
  }];
  return <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            I've developed expertise across the full stack, focusing on creating
            robust and scalable applications
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-slate-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-slate-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">
              DevOps & Tools
            </h3>
            <div className="space-y-6">
              {devOpsSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-slate-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Laravel', 'MySQL', 'PostgreSQL', 'Docker', 'Git', 'Tailwind CSS', 'Node.js', 'RESTful APIs', 'GraphQL', 'Jest', 'Redux', 'AWS'].map(tech => <span key={tech} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm">
                {tech}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
}