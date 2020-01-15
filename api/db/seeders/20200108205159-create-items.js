module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Items', [{
    id: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
    characterId: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
    itemName: 'John Doe',
    itemDescription: 'It work oh so well',
    itemWeight: '3',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Items', null, {}),
};
