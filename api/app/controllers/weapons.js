const { Weapons, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

// Gets all weapons based on character id from params
exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const weapons = await Weapons.findAll({ where: { characterId } });
    res.status(200).json(weapons || []);
  } catch (e) {
    SendError(res, e);
  }
};

// Creates weapon with prebuilt data to be edited later
exports.createWeapon = async (req, res) => {
  const { id, characterId } = req.body;
  try {
    const weapon = await Weapons.create({
      id,
      weaponName: '',
      weaponAttackBonus: '',
      weaponDamage: '',
      weaponCritical: '',
      weaponRange: '',
      weaponSpecial: '',
      weaponAmmunition: '',
      weaponWeight: '',
      weaponSize: '',
      weaponType: '',
      characterId,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(201).json(weapon);
  } catch (e) {
    SendError(res, e);
  }
};

// Updates weapon based on content
exports.updateWeapon = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedWeapon]] = await Weapons.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(200).json(updatedWeapon);
  } catch (e) {
    SendError(res, e);
  }
};

// Removes weapon from database
exports.removeWeapon = async (req, res) => {
  try {
    const { id } = req.params;
    await Weapons.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    SendError(res, e);
  }
};
