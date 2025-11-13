
const { skillsData } = require('../../data');

exports.getSkills = (req, res) => {
  res.status(200).json(skillsData);
};
