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
    const characters = await Characters.findAll();
    res.json(characters || []);
  } catch (e) {
    SendError(res, e);
  }
};

exports.createCharacter = async (req, res) => {
  const {
    name,
    player,
    alignment,
    level,
    userClass,
    race,
    campaign,
    diety,
    size,
    age,
    gender,
    hair,
    height,
    characterWeight,
    eyes,
    currency,
    languages,
    description,
    personality,
    traits,
    flaws,
    contacts,
    enemies,
    notes,
    image,
    hp,
    hpWounds,
    hpDice,
    dmgReduction,
    ac,
    acArmor,
    acShield,
    acDex,
    acNatural,
    acMisc,
    acTouch,
    acFlat,
    init,
    initDex,
    initMisc,
    speed,
  } = '';
  const { stat, statMod } = ['', '', '', '', '', ''];
  const {
    attackTotal,
    attackBase,
    attackMod,
    attackMisc,
  } = ['', ''];
  const {
    spellsKnown,
    spellsPerDay,
    spellDC,
  } = ['', '', '', '', '', '', '', '', '', ''];
  const {
    savingThrow,
    savingThrowBase,
    savingThrowMod,
  } = ['', '', ''];
  const { weight } = ['', '', '', '', ''];
  try {
    const feat = await Characters.create({
      stat,
      statMod,
      attackTotal,
      attackBase,
      attackMod,
      attackMisc,
      spellsKnown,
      spellsPerDay,
      spellDC,
      savingThrow,
      savingThrowBase,
      savingThrowMod,
      weight,
      name,
      player,
      alignment,
      level,
      userClass,
      race,
      campaign,
      diety,
      size,
      age,
      gender,
      hair,
      height,
      characterWeight,
      eyes,
      currency,
      languages,
      description,
      personality,
      traits,
      flaws,
      contacts,
      enemies,
      notes,
      image,
      hp,
      hpWounds,
      hpDice,
      dmgReduction,
      ac,
      acArmor,
      acShield,
      acDex,
      acNatural,
      acMisc,
      acTouch,
      acFlat,
      init,
      initDex,
      initMisc,
      speed,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json(feat);
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateFeat = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedFeat]] = await Characters.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json(updatedFeat);
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeFeat = async (req, res) => {
  try {
    const { id } = req.params;
    await Characters.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    SendError(res, e);
  }
};
