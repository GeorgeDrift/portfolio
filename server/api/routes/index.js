
const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const profileRoutes = require('./profile.routes');
const skillsRoutes = require('./skills.routes');
const projectsRoutes = require('./projects.routes');
const galleryRoutes = require('./gallery.routes');

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/skills', skillsRoutes);
router.use('/projects', projectsRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;
