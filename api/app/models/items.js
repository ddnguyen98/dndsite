
module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes,
    },
    itemName: DataTypes.STRING,
    itemDescription: DataTypes.STRING,
    itemWeight: DataTypes.STRING,
  }, {});
  Items.associate = (models) => {
    // associations can be defined here
  };
  return Items;
};
