module.exports = (sequelize, DataTypes) => {
  const Feats = sequelize.define('Feats', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes,
    },
    featName: DataTypes.STRING,
    featDescription: DataTypes.STRING,
  }, {});
  Feats.associate = (models) => {
    // associations can be defined here
  };
  return Feats;
};
