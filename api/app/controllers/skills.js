const { Skills, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const skills = await Skills.findAll({ where: { characterId } });
    res.status(200).json(skills || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createSkill = async (req, res) => {
  const { id, characterId } = req.body;
  try {
    const skill = await Skills.create({
      id,
      skillName: '',
      skillModType: '',
      skillTotal: '',
      skillAbilityMod: '',
      skillRank: '',
      characterId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(201).json(skill);
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
    res.status(200).json(updatedSkill);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await Skills.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    SendError(res, e);
  }
};
