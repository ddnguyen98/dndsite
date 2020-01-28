module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Items', [{
    id: 'ae835445-5f86-4a9a-a27b-17e71b60317d',
    characterId: '59f8a9b0-3df2-11ea-ba54-ab58c1fd0974',
    itemName: 'John Doe',
    itemDescription: 'It work oh so well',
    itemWeight: '3',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Items', null, {}),
};
