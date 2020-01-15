
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Feats', [{
    id: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
    characterId: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
    featName: 'John Doe',
    featDescription: 'It work oh so well',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Feats', null, {}),
};
