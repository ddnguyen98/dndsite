
module.exports = (sequelize, DataTypes) => {
  const Spells = sequelize.define('Spells', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes,
    },
    spellName: DataTypes.STRING,
    spellComponents: DataTypes.STRING,
    spellCastingTime: DataTypes.STRING,
    spellRange: DataTypes.STRING,
    spellTarget: DataTypes.STRING,
    spellDuration: DataTypes.STRING,
    spellSavingThrow: DataTypes.STRING,
    spellDescription: DataTypes.STRING,
  }, {});
  Spells.associate = (models) => {
    // associations can be defined here
  };
  return Spells;
};
