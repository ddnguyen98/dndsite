
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Characters', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
    },
    player: {
      type: Sequelize.STRING,
    },
    alignment: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.STRING,
    },
    userClass: {
      type: Sequelize.STRING,
    },
    race: {
      type: Sequelize.STRING,
    },
    campaign: {
      type: Sequelize.STRING,
    },
    diety: {
      type: Sequelize.STRING,
    },
    size: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    hair: {
      type: Sequelize.STRING,
    },
    height: {
      type: Sequelize.STRING,
    },
    characterWeight: {
      type: Sequelize.STRING,
    },
    eyes: {
      type: Sequelize.STRING,
    },
    currency: {
      type: Sequelize.STRING,
    },
    languages: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    personality: {
      type: Sequelize.STRING,
    },
    traits: {
      type: Sequelize.STRING,
    },
    flaws: {
      type: Sequelize.STRING,
    },
    contacts: {
      type: Sequelize.STRING,
    },
    enemies: {
      type: Sequelize.STRING,
    },
    notes: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    stat: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    statMod: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    hp: {
      type: Sequelize.STRING,
    },
    hpWounds: {
      type: Sequelize.STRING,
    },
    hpDice: {
      type: Sequelize.STRING,
    },
    dmgReduction: {
      type: Sequelize.STRING,
    },
    ac: {
      type: Sequelize.STRING,
    },
    acArmor: {
      type: Sequelize.STRING,
    },
    acShield: {
      type: Sequelize.STRING,
    },
    acDex: {
      type: Sequelize.STRING,
    },
    acNatural: {
      type: Sequelize.STRING,
    },
    acMisc: {
      type: Sequelize.STRING,
    },
    acTouch: {
      type: Sequelize.STRING,
    },
    acFlat: {
      type: Sequelize.STRING,
    },
    init: {
      type: Sequelize.STRING,
    },
    initDex: {
      type: Sequelize.STRING,
    },
    initMisc: {
      type: Sequelize.STRING,
    },
    speed: {
      type: Sequelize.STRING,
    },
    attackTotal: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    attackBase: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    attackMod: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    attackMisc: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    spellsKnown: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    spellsPerDay: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    spellDC: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    savingThrow: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    savingThrowBase: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    savingThrowMod: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    weight: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Characters'),
};
