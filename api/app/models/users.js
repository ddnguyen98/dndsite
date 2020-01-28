
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      unique: { args: true, msg: 'Email is already in use' },
      allowNull: { args: false, msg: 'Email is required' },
      validate: {
        isEmail: { args: true, msg: 'Correct email format is required' },
      },
    },
    username: {
      type: DataTypes.STRING,
      unique: { args: true, msg: 'Username is already in use' },
      allowNull: { args: false, msg: 'Username is required' },
      validate: {
        len: { args: [3, 500], msg: 'Username is required to be at least 3 characters' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Password is required' },
      validate: {
        len: { args: [3, 500], msg: 'Password is required to be at least 3 characters' },
      },
    },
    reset_password: { type: DataTypes.STRING, allowNull: true },
    reset_expires: { type: DataTypes.DATE, allowNull: true },
  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Characters, { foreignKey: 'userId' });
  };
  return Users;
};
