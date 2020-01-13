
module.exports = (sequelize, DataTypes) => {
  const Weapons = sequelize.define('Weapons', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes,
    },
    weaponName: DataTypes.STRING,
    weaponAttackBonus: DataTypes.STRING,
    weaponDamage: DataTypes.STRING,
    weaponCritical: DataTypes.STRING,
    weaponRange: DataTypes.STRING,
    weaponSpecial: DataTypes.STRING,
    weaponAmmunition: DataTypes.STRING,
    weaponWeight: DataTypes.STRING,
    weaponSize: DataTypes.STRING,
    weaponType: DataTypes.STRING,
  }, {});
  Weapons.associate = (models) => {
    Weapons.belongsTo(models.Characters, { foreignKey: 'characterId' });
  };
  return Weapons;
};
