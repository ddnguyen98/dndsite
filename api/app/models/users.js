
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    reset_password: { type: DataTypes.STRING, allowNull: true },
    reset_expires: { type: DataTypes.DATE, allowNull: true },
  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Characters, { foreignKey: 'userId' });
  };
  return Users;
};
