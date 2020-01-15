
module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define('Skills', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes,
    },
    skillName: DataTypes.STRING,
    skillModType: DataTypes.STRING,
    skillTotal: DataTypes.STRING,
    skillAbilityMod: DataTypes.STRING,
    skillRank: DataTypes.STRING,
  }, {});
  Skills.associate = (models) => {
    Skills.belongsTo(models.Characters, { foreignKey: 'characterId' });
  };
  return Skills;
};
