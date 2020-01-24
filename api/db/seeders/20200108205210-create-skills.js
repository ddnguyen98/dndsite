module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Skills', [{
    id: '3e836f45-6f21-4a9a-a27b-17e71b60317d',
    characterId: '59f8a9b0-3df2-11ea-ba54-ab58c1fd0974',
    skillName: 'Run',
    skillModType: 'Dex',
    skillTotal: '6',
    skillAbilityMod: '3',
    skillRank: '3',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Skills', null, {}),
};
