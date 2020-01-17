module.exports = (sequelize, DataTypes) => {
  const Feats = sequelize.define('Feats', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    featName: DataTypes.STRING,
    featDescription: DataTypes.STRING,
  }, {});
  Feats.associate = (models) => {
    Feats.belongsTo(models.Characters, { foreignKey: 'characterId' });
  };
  return Feats;
};
