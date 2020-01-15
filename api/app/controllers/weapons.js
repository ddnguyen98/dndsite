const { Weapons, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const weapons = await Weapons.findAll({ where: { characterId } });
    res.json({ data: [weapons] });
  } catch (e) {
    SendError(res, e);
  }
};

exports.createWeapon = async (req, res) => {
  const { id } = req.body;
  const {
    weaponName,
    weaponAttackBonus,
    weaponDamage,
    weaponCritical,
    weaponRange,
    weaponSpecial,
    weaponAmmunition,
    weaponWeight,
    weaponSize,
    weaponType,
  } = '';
  try {
    const weapon = await Weapons.create({
      weaponName,
      weaponAttackBonus,
      weaponDamage,
      weaponCritical,
      weaponRange,
      weaponSpecial,
      weaponAmmunition,
      weaponWeight,
      weaponSize,
      weaponType,
      characterId: id,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json({ data: { weapon } });
  } catch (e) {
    SendError(res, e);
  }
};

exports.updateWeapon = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedWeapon]] = await Weapons.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json({ data: { updatedWeapon } });
  } catch (e) {
    SendError(res, e);
  }
};

exports.removeWeapon = async (req, res) => {
  try {
    const { id } = req.params;
    await Weapons.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    SendError(res, e);
  }
};
