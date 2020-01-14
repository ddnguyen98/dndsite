const { Skills, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const skills = await Skills.findAll({ where: { characterId } });
    res.json(skills || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createSkill = async (req, res) => {
  const {
    skillName,
    skillModType,
    skillTotal,
    skillAbilityMod,
    skillRank,
  } = '';
  try {
    const skill = await Skills.create({
      skillName,
      skillModType,
      skillTotal,
      skillAbilityMod,
      skillRank,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json(skill);
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedSkill]] = await Skills.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json(updatedSkill);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await Skills.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    SendError(res, e);
  }
};
