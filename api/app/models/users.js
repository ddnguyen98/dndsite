
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes,
    },
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    access_token: DataTypes.STRING,
  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Characters, { foreignKey: 'userId' });
  };
  return Users;
};
