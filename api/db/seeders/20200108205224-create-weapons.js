module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Weapons', [{
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
