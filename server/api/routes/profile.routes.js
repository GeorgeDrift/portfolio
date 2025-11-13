
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const { verifyToken } = require('../middleware/authJwt');

router.get('/', profileController.getProfile);
router.put('/', verifyToken, profileController.updateProfile);

module.exports = router;
