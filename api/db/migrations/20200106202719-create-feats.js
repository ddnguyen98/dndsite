
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Feats', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    characterId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Characters',
        key: 'id',
      },
    },
    featName: {
      type: Sequelize.STRING,
    },
    featDescription: {
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
  down: (queryInterface) => queryInterface.dropTable('Feats'),
};
