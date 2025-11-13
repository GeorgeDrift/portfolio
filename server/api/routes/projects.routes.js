
const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects.controller');
const { verifyToken } = require('../middleware/authJwt');

router.get('/', projectsController.getProjects);
router.post('/', verifyToken, projectsController.addProject);
router.delete('/:id', verifyToken, projectsController.deleteProject);

module.exports = router;
