describe('Home Page Tests', () => {
  it('Test connecting to home', () =>{
      cy.visit('http://localhost:3000');
  })
  it('Test Login', () =>{
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="username"]')
        .type('test')
        .should('have.value', 'test');
      cy.get('input[name="password"]')
        .type('test')
        .should('have.value', 'test');
      cy.get('button[name="submit"]').click();
  })
  it('Navigate to sheets', () =>{
    cy.get('li a[href="/sheets"]').click();
    cy.get('.card').should('have.length', 1);
  })
  it('Add Character', () =>{
    cy.get('button[name="add"]').click();
    cy.get('.card').should('have.length', 2);
  })
  it('Navigate to character & Skill Length', () =>{
    cy.get('a[href="/character/59f8a9b0-3df2-11ea-ba54-ab58c1fd0974"]').click();
    cy.get('tr[name="skills"]').should('have.length', 1);
  })
  it('Feat Length', () =>{
    cy.get('a[name="featsTab"]').click();
    cy.get('div[name="feats"]').should('have.length', 1);
  })
  it('Item Length', () =>{
    cy.get('a[name="itemsTab"]').click();
    cy.get('tr[name="items"]').should('have.length', 1);
  })
  it('Spell Length', () =>{
    cy.get('a[name="spellsTab"]').click();
    cy.get('div[name="spells"]').should('have.length', 1);
  })
  it('Weapon Length', () =>{
    cy.get('a[name="weaponsTab"]').click();
    cy.get('div[name="weapons"]').should('have.length', 1);
    cy.get('a[name="characterDetails"]').click();
  })
  it('Skill inputs + CRUD test', () =>{
    cy.get('input[name="skillName0"]')
      .type('a')
      .should('have.value', 'Runa');
    cy.get('input[name="skillModType0"]')
      .type('a')
      .should('have.value', 'Dexa');
    cy.get('input[name="skillTotal0"]')
      .type('a')
      .should('have.value', '6a');
    cy.get('input[name="skillAbilityMod0"]')
      .type('a')
      .should('have.value', '3a');
    cy.get('input[name="skillRank0"]')
      .type('a')
      .should('have.value', '3a');
    cy.get('button[name="addSkill"]').click();
    cy.get('tr[name="skills"]').should('have.length', 2);
    cy.get('svg[name="5421ed80-3ed7-11ea-a1d6-6bfe258ce555"]').click();
    cy.get('tr[name="skills"]').should('have.length', 1);
  })
  it('Feats inputs + CRUD test', () =>{
    cy.get('a[name="featsTab"]').click();
    cy.get('input[name="featName0"]')
      .type('a')
      .should('have.value', 'Feat Namea');
    cy.get('input[name="featDescription0"]')
      .type('a')
      .should('have.value', 'Feat Descriptiona');
    cy.get('button[name="addFeat"]').click();
    cy.get('div[name="feats"]').should('have.length', 2);
    cy.get('svg[name="4421ed80-3ed7-11ea-a1d6-6bfe258ce555"]').click();
    cy.get('div[name="feats"]').should('have.length', 1);
  })
  it('Items inputs + CRUD test', () =>{
    cy.get('a[name="itemsTab"]').click();
    cy.get('input[name="itemName0"]')
      .type('a')
      .should('have.value', 'John Doea');
    cy.get('input[name="itemDescription0"]')
      .type('a')
      .should('have.value', 'It work oh so wella');
    cy.get('input[name="itemWeight0"]')
      .type('a')
      .should('have.value', '3a');      
    cy.get('button[name="addItem"]').click();
    cy.get('tr[name="items"]').should('have.length', 2);
    cy.get('svg[name="5421ed80-3ed7-11ea-a1d6-6bfe258ce555"]').click();
    cy.get('tr[name="items"]').should('have.length', 1);  
  })
  it('Spells inputs + CRUD test', () =>{
    cy.get('a[name="spellsTab"]').click();
    cy.get('input[name="spellName0"]')
      .type('a')
      .should('have.value', 'Fireballa');
    cy.get('input[name="spellComponents0"]')
      .type('a')
      .should('have.value', 'Nonea');       
    cy.get('input[name="spellCastingTime0"]')
      .type('a')
      .should('have.value', '3 secondsa');
    cy.get('input[name="spellRange0"]')
      .type('a')
      .should('have.value', '30fta');    
    cy.get('input[name="spellTarget0"]')
      .type('a')
      .should('have.value', 'AOEa');      
    cy.get('input[name="spellDuration0"]')
      .type('a')
      .should('have.value', 'instanta');
    cy.get('input[name="spellSavingThrow0"]')
      .type('a')
      .should('have.value', 'Cona');
    cy.get('textarea[name="spellDescription0"]')
      .type('a')
      .should('have.value', 'Big booma kaboomaa');
    cy.get('button[name="addSpell"]').click();
    cy.get('div[name="spells"]').should('have.length', 2);
    cy.get('svg[name="5421ed80-3ed7-11ea-a1d6-6bfe258ce555"]').click();
    cy.get('div[name="spells"]').should('have.length', 1);  
  })
  it('Weapons Tab inputs + CRUD test', () =>{
    cy.get('a[name="weaponsTab"]').click();
    cy.get('input[name="weaponName0"]')
      .type('a')
      .should('have.value', 'Kill Deatha');
    cy.get('input[name="weaponAttackBonus0"]')
      .type('a')
      .should('have.value', '3a');
    cy.get('input[name="weaponDamage0"]')
      .type('a')
      .should('have.value', 'd20a');
    cy.get('input[name="weaponCritical0"]')
      .type('a')
      .should('have.value', '15-20a');
    cy.get('input[name="weaponRange0"]')
      .type('a')
      .should('have.value', '10fta');
    cy.get('textarea[name="weaponSpecial0"]')
      .type('a')
      .should('have.value', 'Its awesomea');
    cy.get('textarea[name="weaponAmmunition0"]')
      .type('a')
      .should('have.value', 'Nonea');
    cy.get('input[name="weaponWeight0"]')
      .type('a')
      .should('have.value', '5 poundsa');
    cy.get('input[name="weaponSize0"]')
      .type('a')
      .should('have.value', 'Largea');
    cy.get('input[name="weaponType0"]')
      .type('a')
      .should('have.value', 'Slashinga');
    cy.get('button[name="addWeapon"]').click();
    cy.get('div[name="weapons"]').should('have.length', 2);
    cy.get('svg[name="5421ed80-3ed7-11ea-a1d6-6bfe258ce555"]').click();
    cy.get('div[name="weapons"]').should('have.length', 1);  
  })
  it('Save test + Character CRUD', () =>{
    cy.get('input[name="name"]')
      .type('a')
      .should('have.value', 'Jimmya');
    cy.get('input[name="campaign"]')
      .type('a')
      .should('have.value', 'Curse of doga');
    cy.get('button[name="save"]').click();
    cy.get('li a[href="/sheets"]').click();
    cy.get('div[name="title0"]')
      .contains('Jimmya')
    cy.get('div[name="subtitle0"]')
      .contains('Curse of doga')
    cy.get('svg[name="delete0"]').click();
    cy.get('.card').should('have.length', 1);

  })

  it('Logout test', () =>{
    cy.get('a[name="logout"]').click();
  })
})

