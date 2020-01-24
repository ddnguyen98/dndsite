
module.exports = (sequelize, DataTypes) => {
  const Characters = sequelize.define('Characters', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: { args: [1, 500], msg: 'Make sure your character has a name before you save' },
      },
    },
    player: DataTypes.STRING,
    alignment: DataTypes.STRING,
    level: DataTypes.STRING,
    userClass: DataTypes.STRING,
    race: DataTypes.STRING,
    campaign: {
      type: DataTypes.STRING,
      validate: {
        len: { args: [1, 500], msg: 'Make sure your character has a campaign before you save' },
      },
    },
    diety: DataTypes.STRING,
    size: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    hair: DataTypes.STRING,
    height: DataTypes.STRING,
    characterWeight: DataTypes.STRING,
    eyes: DataTypes.STRING,
    currency: DataTypes.STRING,
    languages: DataTypes.STRING,
    description: DataTypes.STRING,
    personality: DataTypes.STRING,
    traits: DataTypes.STRING,
    flaws: DataTypes.STRING,
    contacts: DataTypes.STRING,
    enemies: DataTypes.STRING,
    notes: DataTypes.STRING,
    image: DataTypes.STRING,
    stat: DataTypes.ARRAY(DataTypes.STRING),
    statMod: DataTypes.ARRAY(DataTypes.STRING),
    hp: DataTypes.STRING,
    hpWounds: DataTypes.STRING,
    hpDice: DataTypes.STRING,
    dmgReduction: DataTypes.STRING,
    ac: DataTypes.STRING,
    acArmor: DataTypes.STRING,
    acShield: DataTypes.STRING,
    acDex: DataTypes.STRING,
    acNatural: DataTypes.STRING,
    acMisc: DataTypes.STRING,
    acTouch: DataTypes.STRING,
    acFlat: DataTypes.STRING,
    init: DataTypes.STRING,
    initDex: DataTypes.STRING,
    initMisc: DataTypes.STRING,
    speed: DataTypes.STRING,
    attackTotal: DataTypes.ARRAY(DataTypes.STRING),
    attackBase: DataTypes.ARRAY(DataTypes.STRING),
    attackMod: DataTypes.ARRAY(DataTypes.STRING),
    attackMisc: DataTypes.ARRAY(DataTypes.STRING),
    spellsKnown: DataTypes.ARRAY(DataTypes.STRING),
    spellsPerDay: DataTypes.ARRAY(DataTypes.STRING),
    spellDC: DataTypes.ARRAY(DataTypes.STRING),
    savingThrow: DataTypes.ARRAY(DataTypes.STRING),
    savingThrowBase: DataTypes.ARRAY(DataTypes.STRING),
    savingThrowMod: DataTypes.ARRAY(DataTypes.STRING),
    weight: DataTypes.ARRAY(DataTypes.STRING),
  }, {});
  Characters.associate = (models) => {
    Characters.hasMany(models.Feats, { foreignKey: 'characterId' });
    Characters.hasMany(models.Items, { foreignKey: 'characterId' });
    Characters.hasMany(models.Skills, { foreignKey: 'characterId' });
    Characters.hasMany(models.Spells, { foreignKey: 'characterId' });
    Characters.hasMany(models.Weapons, { foreignKey: 'characterId' });
    Characters.belongsTo(models.Users, { foreignKey: 'userId' });
  };
  return Characters;
};
