
let { projectsData } = require('../../data');

exports.getProjects = (req, res) => {
  res.status(200).json(projectsData);
};

exports.addProject = (req, res) => {
  const newProject = req.body;
  // Simple ID generation for this mock DB
  newProject.id = Date.now().toString(); 
  projectsData.push(newProject);
  res.status(201).json(newProject);
};

exports.deleteProject = (req, res) => {
  const { id } = req.params;
  const initialLength = projectsData.length;
  projectsData = projectsData.filter(p => p.id !== id);

  if (projectsData.length === initialLength) {
    return res.status(404).send({ message: 'Project not found' });
  }
  
  res.status(204).send(); // No content
};
