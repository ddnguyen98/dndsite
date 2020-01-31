const { Spells, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

// Gets all spellsed based on character id from params
exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const spells = await Spells.findAll({ where: { characterId } });
    res.status(200).json(spells || []);
  } catch (e) {
    SendError(res, e);
  }
};

// Creates spell with prebuilt data to be edited later
exports.createSpell = async (req, res) => {
  const { id, characterId } = req.body;
  try {
    const spell = await Spells.create({
      id,
      spellName: '',
      spellComponents: '',
      spellCastingTime: '',
      spellRange: '',
      spellTarget: '',
      spellDuration: '',
      spellSavingThrow: '',
      spellDescription: '',
      characterId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(201).json(spell);
  } catch (e) {
    SendError(res, e);
  }
};

// Updates spell based on content
exports.updateSpell = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedSpell]] = await Spells.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(200).json(updatedSpell);
  } catch (e) {
    SendError(res, e);
  }
};

// Removes spell from database
exports.removeSpell = async (req, res) => {
  try {
    const { id } = req.params;
    await Spells.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    SendError(res, e);
  }
};
