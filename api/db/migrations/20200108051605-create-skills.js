
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Skills', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    skillName: {
      type: Sequelize.STRING,
    },
    skillModType: {
      type: Sequelize.STRING,
    },
    skillTotal: {
      type: Sequelize.STRING,
    },
    skillAbilityMod: {
      type: Sequelize.STRING,
    },
    skillRank: {
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
  down: (queryInterface) => queryInterface.dropTable('Skills'),
};
