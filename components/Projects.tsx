import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';
import { fetchProjects } from '../services/apiService';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="text-shadow-dark flex flex-col">
      <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      </div>
      <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sky-500 text-sm font-medium mb-3">
              {project.technologies.join(' · ')}
          </p>
          <p className="text-sm leading-relaxed text-gray-300 flex-grow">{project.description}</p>
          <div className="mt-4 flex space-x-4">
              <a href={project.repoUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors"><GithubIcon className="w-6 h-6" /></a>
              <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors"><ExternalLinkIcon className="w-6 h-6" /></a>
          </div>
      </div>
    </div>
  );
};

const ProjectSkeleton: React.FC = () => (
  <div className="flex flex-col animate-pulse">
    <div className="bg-gray-700 rounded-lg h-56 mb-4"></div>
    <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
    <div className="h-12 bg-gray-700 rounded flex-grow"></div>
  </div>
);

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch projects.');
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);


  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-shadow-dark">My Projects</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded"></div>
      </div>
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading 
          ? Array.from({ length: 3 }).map((_, index) => <ProjectSkeleton key={index} />)
          : projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
        }
      </div>
    </section>
  );
};

export default Projects;