const { Characters, Sequelize } = require('../models');
const { SendError, throwError, throwIf } = require('../utils/errorHandling');

exports.getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Characters.findByPk(id).then(
      throwIf((row) => !row, 404, 'Project not found'),
      throwError(500, 'Sequelize Error'),
    );
    res.status(200).json(character);
  } catch (e) {
    SendError(res, e);
  }
};
exports.getAll = async (req, res) => {
  try {
    const characters = await Characters.findAll({ where: { userId: req.userId } });
    res.status(200).json(characters || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createCharacter = async (req, res) => {
  const { id } = req.body;
  try {
    const character = await Characters.create({
      id,
      stat: ['', '', '', '', '', ''],
      statMod: ['', '', '', '', '', ''],
      attackTotal: ['', ''],
      attackBase: ['', ''],
      attackMod: ['', ''],
      attackMisc: ['', ''],
      spellsKnown: ['', '', '', '', '', '', '', '', '', ''],
      spellsPerDay: ['', '', '', '', '', '', '', '', '', ''],
      spellDC: ['', '', '', '', '', '', '', '', '', ''],
      savingThrow: ['', '', ''],
      savingThrowBase: ['', '', ''],
      savingThrowMod: ['', '', ''],
      weight: ['', '', '', '', ''],
      name: 'Character Name',
      player: '',
      alignment: '',
      level: '',
      userClass: '',
      race: '',
      campaign: 'Character campaign',
      diety: '',
      size: '',
      age: '',
      gender: '',
      hair: '',
      height: '',
      characterWeight: '',
      eyes: '',
      currency: '',
      languages: '',
      description: '',
      personality: '',
      traits: '',
      flaws: '',
      contacts: '',
      enemies: '',
      notes: '',
      image: 'henry.jpg',
      hp: '',
      hpWounds: '',
      hpDice: '',
      dmgReduction: '',
      ac: '',
      acArmor: '',
      acShield: '',
      acDex: '',
      acNatural: '',
      acMisc: '',
      acTouch: '',
      acFlat: '',
      init: '',
      initDex: '',
      initMisc: '',
      speed: '',
      userId: req.userId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(201).json(character);
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateCharacter = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const [, [updatedCharacter]] = await Characters.update(req.body, {
      where: { id },
      returning: true,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json(updatedCharacter);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    await Characters.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    SendError(res, e);
  }
};
