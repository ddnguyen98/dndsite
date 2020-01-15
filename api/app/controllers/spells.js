const { Spells, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const spells = await Spells.findAll({ where: { characterId } });
    res.json({ data: [spells] });
  } catch (e) {
    SendError(res, e);
  }
};

exports.createSpell = async (req, res) => {
  const { id } = req.body;
  const {
    spellName,
    spellComponents,
    spellCastingTime,
    spellRange,
    spellTarget,
    spellDuration,
    spellSavingThrow,
    spellDescription,
  } = '';
  try {
    const spell = await Spells.create({
      spellName,
      spellComponents,
      spellCastingTime,
      spellRange,
      spellTarget,
      spellDuration,
      spellSavingThrow,
      spellDescription,
      characterId: id,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json({ data: { spell } });
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
    res.json({ data: { updatedSpell } });
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
