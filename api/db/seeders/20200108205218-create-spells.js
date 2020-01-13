module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Spells', [{
    id: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
    characterId: '3e836f45-5f86-4a9a-a27b-17e71b60317d',
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
