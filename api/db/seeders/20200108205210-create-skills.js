module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Skills', [{
    id: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
    characterId: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
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
