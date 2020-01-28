
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Feats', [{
    id: '1421ed80-3ed7-11ea-a1d6-6bfe258ce555',
    characterId: '59f8a9b0-3df2-11ea-ba54-ab58c1fd0974',
    featName: 'Feat Name',
    featDescription: 'Feat Description',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Feats', null, {}),
};
