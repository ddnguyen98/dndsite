
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Feats', [{
    featName: 'John Doe',
    featDescription: 'It work oh so well',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Feats', null, {}),
};
