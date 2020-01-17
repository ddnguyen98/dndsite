const { Characters, Sequelize } = require('../models');
const { SendError, throwError, throwIf } = require('../utils/errorHandling');

exports.getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Characters.findByPk(id).then(
      // success
      throwIf((row) => !row, 404, 'Project not found'),
      // fail
      throwError(500, 'Sequelize Error'),
    );
    res.json(character);
  } catch (e) {
    SendError(res, e);
  }
};
exports.getAll = async (req, res) => {
  try {
    const characters = await Characters.findAll({ where: { userId: req.userId } });
    res.json(characters || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createCharacter = async (req, res) => {
  try {
    const character = await Characters.create({
      id: req.body.id,
      stat: [' ', ' ', ' ', ' ', ' ', ' '],
      statMod: [' ', ' ', ' ', ' ', ' ', ' '],
      attackTotal: [' ', ' '],
      attackBase: [' ', ' '],
      attackMod: [' ', ' '],
      attackMisc: [' ', ' '],
      spellsKnown: [' ', ' ', ' ', ' ', ' ', ' ', '', ' ', ' ', ' '],
      spellsPerDay: [' ', ' ', ' ', ' ', ' ', ' ', '', ' ', ' ', ' '],
      spellDC: [' ', ' ', ' ', ' ', ' ', ' ', '', ' ', ' ', ' '],
      savingThrow: [' ', ' ', ' '],
      savingThrowBase: [' ', ' ', ' '],
      savingThrowMod: [' ', ' ', ' '],
      weight: [' ', ' ', ' ', ' ', ' '],
      name: 'Character Name',
      player: ' ',
      alignment: ' ',
      level: ' ',
      userClass: ' ',
      race: ' ',
      campaign: 'Character campaign',
      diety: ' ',
      size: ' ',
      age: ' ',
      gender: ' ',
      hair: ' ',
      height: ' ',
      characterWeight: ' ',
      eyes: ' ',
      currency: ' ',
      languages: ' ',
      description: ' ',
      personality: ' ',
      traits: ' ',
      flaws: ' ',
      contacts: ' ',
      enemies: ' ',
      notes: ' ',
      image: 'henry.jpg',
      hp: ' ',
      hpWounds: ' ',
      hpDice: ' ',
      dmgReduction: ' ',
      ac: ' ',
      acArmor: ' ',
      acShield: ' ',
      acDex: ' ',
      acNatural: ' ',
      acMisc: ' ',
      acTouch: ' ',
      acFlat: ' ',
      init: ' ',
      initDex: ' ',
      initMisc: ' ',
      speed: ' ',
      userId: req.userId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.json(character);
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedCharacter]] = await Characters.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json({ data: { updatedCharacter } });
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    await Characters.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    SendError(res, e);
  }
};
