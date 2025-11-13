
const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery.controller');
const { verifyToken } = require('../middleware/authJwt');

router.get('/', galleryController.getGallery);
router.post('/', verifyToken, galleryController.addImage);
router.delete('/:id', verifyToken, galleryController.deleteImage);

module.exports = router;
