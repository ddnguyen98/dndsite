module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
    email: 'test@test.com',
    username: 'dommminic',
    password: '32f421',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
