module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Weapons', [{
    id: '5e836f4a-5f86-4a9a-a27b-17e71b60317d',
    characterId: '59f8a9b0-3df2-11ea-ba54-ab58c1fd0974',
    weaponName: 'Kill Death',
    weaponAttackBonus: '3',
    weaponDamage: 'd20',
    weaponCritical: '15-20',
    weaponRange: '10ft',
    weaponSpecial: 'Its awesome',
    weaponAmmunition: 'None',
    weaponWeight: '5 pounds',
    weaponSize: 'Large',
    weaponType: 'Slashing',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Weapons', null, {}),
};
