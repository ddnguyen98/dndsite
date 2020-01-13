
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Spells', {
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
    spellName: {
      type: Sequelize.STRING,
    },
    spellComponents: {
      type: Sequelize.STRING,
    },
    spellCastingTime: {
      type: Sequelize.STRING,
    },
    spellRange: {
      type: Sequelize.STRING,
    },
    spellTarget: {
      type: Sequelize.STRING,
    },
    spellDuration: {
      type: Sequelize.STRING,
    },
    spellSavingThrow: {
      type: Sequelize.STRING,
    },
    spellDescription: {
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
  down: (queryInterface) => queryInterface.dropTable('Spells'),
};
