module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Spells', [{
    spellName: 'Fireball',
    spellComponents: 'None',
    spellCastingTime: '3 seconds',
    spellRange: '30ft',
    spellTarget: 'AOE',
    spellDuration: 'instant',
    spellSavingThrow: 'Con',
    spellDescription: 'Big booma kabooma',
    createdAt: Sequelize.literal('NOW()'),
    updatedAt: Sequelize.literal('NOW()'),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Spells', null, {}),
};
