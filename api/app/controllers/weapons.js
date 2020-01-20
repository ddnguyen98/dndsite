const { Weapons, Sequelize } = require('../models');
const { SendError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  const { characterId } = req.query;
  try {
    const weapons = await Weapons.findAll({ where: { characterId } });
    res.json(weapons || []);
  } catch (e) {
    SendError(res, e);
  }
};

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
    res.status(200).json(weapon);
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
    res.json(updatedWeapon);
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
