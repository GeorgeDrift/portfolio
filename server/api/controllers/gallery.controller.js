
let { galleryImagesData } = require('../../data');

exports.getGallery = (req, res) => {
  res.status(200).json(galleryImagesData);
};

exports.addImage = (req, res) => {
  const newImage = req.body;
  newImage.id = Date.now().toString();
  galleryImagesData.push(newImage);
  res.status(201).json(newImage);
};

exports.deleteImage = (req, res) => {
  const { id } = req.params;
  const initialLength = galleryImagesData.length;
  galleryImagesData = galleryImagesData.filter(img => img.id !== id);
  
  if (galleryImagesData.length === initialLength) {
    return res.status(404).send({ message: 'Image not found' });
  }

  res.status(204).send();
};
