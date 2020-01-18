const { Spells, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const spells = await Spells.findAll({ where: { characterId } });
    res.json(spells || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createSpell = async (req, res) => {
  const { id, characterId } = req.body;
  try {
    const spell = await Spells.create({
      id,
      spellName: ' ',
      spellComponents: ' ',
      spellCastingTime: ' ',
      spellRange: ' ',
      spellTarget: ' ',
      spellDuration: ' ',
      spellSavingThrow: ' ',
      spellDescription: ' ',
      characterId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json(spell);
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateSpell = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedSpell]] = await Spells.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json(updatedSpell);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeSpell = async (req, res) => {
  try {
    const { id } = req.params;
    await Spells.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    SendError(res, e);
  }
};
