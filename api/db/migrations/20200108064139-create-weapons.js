
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Weapons', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    weaponName: {
      type: Sequelize.STRING,
    },
    weaponAttackBonus: {
      type: Sequelize.STRING,
    },
    weaponDamage: {
      type: Sequelize.STRING,
    },
    weaponCritical: {
      type: Sequelize.STRING,
    },
    weaponRange: {
      type: Sequelize.STRING,
    },
    weaponSpecial: {
      type: Sequelize.STRING,
    },
    weaponAmmunition: {
      type: Sequelize.STRING,
    },
    weaponWeight: {
      type: Sequelize.STRING,
    },
    weaponSize: {
      type: Sequelize.STRING,
    },
    weaponType: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Weapons'),
};
