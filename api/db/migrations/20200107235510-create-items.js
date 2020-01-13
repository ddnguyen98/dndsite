
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Items', {
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
    itemName: {
      type: Sequelize.STRING,
    },
    itemDescription: {
      type: Sequelize.STRING,
    },
    itemWeight: {
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
  down: (queryInterface) => queryInterface.dropTable('Items'),
};
