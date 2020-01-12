module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Items', [{
    itemName: 'John Doe',
    itemDescription: 'It work oh so well',
    itemWeight: '3',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Items', null, {}),
};
