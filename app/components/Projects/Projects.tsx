import React from 'react';

type Project = {
  name: string;
  description: string;
};

const projects: Project[] = [
  { name: 'Project Alpha', description: 'A modern web app for tracking productivity.' },
  { name: 'Project Beta', description: 'An e-commerce platform with rich features.' },
  { name: 'Project Gamma', description: 'A landing page for a growing startup.' },
];

const Projects: React.FC = () => {
  return (
    <section className='bg-primary text-secondary py-16 px-8'>
      <h2 className='text-4xl font-semibold mb-10 text-center'>Our Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-secondary text-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <h3 className='text-2xl font-semibold mb-3'>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
