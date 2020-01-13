module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Items', [{
    skillName: 'Run',
    skillModType: 'Dex',
    skillTotal: '6',
    skillAbilityMod: '3',
    skillRank: '3',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Items', null, {}),
};
