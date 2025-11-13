
let { profileData } = require('../../data');

exports.getProfile = (req, res) => {
  res.status(200).json(profileData);
};

exports.updateProfile = (req, res) => {
  const { name, bio, imageUrl } = req.body;
  if (!name || !bio || !imageUrl) {
    return res.status(400).send({ message: 'All profile fields are required.' });
  }
  
  profileData = { name, bio, imageUrl };
  res.status(200).json(profileData);
};
