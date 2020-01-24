module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Spells', [{
    id: '62136f45-5f86-229a-a27b-17e71b60317d',
    characterId: '59f8a9b0-3df2-11ea-ba54-ab58c1fd0974',
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
