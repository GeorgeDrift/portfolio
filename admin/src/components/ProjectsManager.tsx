
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import * as api from '../services/api';

interface ProjectsManagerProps {
  token: string;
}

const ProjectsManager: React.FC<ProjectsManagerProps> = ({ token }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', technologies: '', imageUrl: '', liveUrl: '', repoUrl: '' });

  const refreshProjects = () => api.fetchProjects().then(setProjects);

  useEffect(() => {
    refreshProjects();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
        ...newProject,
        technologies: newProject.technologies.split(',').map(t => t.trim())
    };
    await api.addProject(projectData, token);
    setNewProject({ title: '', description: '', technologies: '', imageUrl: '', liveUrl: '', repoUrl: '' });
    refreshProjects();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await api.deleteProject(id, token);
      refreshProjects();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Manage Projects</h2>
      {/* Add Project Form */}
      <form onSubmit={handleAdd} className="mb-6 p-4 border rounded space-y-3">
        <h3 className="font-medium">Add New Project</h3>
        <input value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} placeholder="Title" className="w-full p-2 border rounded" required />
        <textarea value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} placeholder="Description" className="w-full p-2 border rounded" required />
        <input value={newProject.technologies} onChange={e => setNewProject({...newProject, technologies: e.target.value})} placeholder="Technologies (comma-separated)" className="w-full p-2 border rounded" required />
        <input value={newProject.imageUrl} onChange={e => setNewProject({...newProject, imageUrl: e.target.value})} placeholder="Image URL" className="w-full p-2 border rounded" required />
        <input value={newProject.liveUrl} onChange={e => setNewProject({...newProject, liveUrl: e.target.value})} placeholder="Live URL" className="w-full p-2 border rounded" />
        <input value={newProject.repoUrl} onChange={e => setNewProject({...newProject, repoUrl: e.target.value})} placeholder="Repo URL" className="w-full p-2 border rounded" />
        <button type="submit" className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md">Add Project</button>
      </form>
      {/* Projects List */}
      <div className="space-y-2">
        {projects.map(p => (
          <div key={p.id} className="flex items-center justify-between p-2 border rounded">
            <span>{p.title}</span>
            <button onClick={() => handleDelete(p.id)} className="px-3 py-1 text-sm text-white bg-red-600 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsManager;
