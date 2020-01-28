describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
    cy.server()
      .route('GET', 'http://private-c2d64-projects28.apiary-mock.com/**')
      .as('getDataFirst');
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  it('Test initial data', () => {
    cy.visit('http://localhost:3000');
    cy.wait('@getDataFirst');
    cy.get('.card').should('have.length', 1);
    cy.get('input[name="search"]')
      .type('test')
      .should('have.value', 'test');
    cy.get('.card').should('have.length', 0);
  });

  it('Test create form', function() {
    cy.visit('http://localhost:3000');
    cy.wait(['@getDataFirst']);

    cy.get('input[name="title"]')
      .type('Title 1')
      .should('have.value', 'Title 1');

    cy.get('input[name="location"]')
      .type('Orlando, FL')
      .should('have.value', 'Orlando, FL');

    cy.get('input[name="progress"]')
      .type('12')
      .should('have.value', '12');

    cy.get('input[name="status"]')
      .type('Finished')
      .should('have.value', 'Finished');

    cy.get('input[name="description"]')
      .type('This is a short description of a project')
      .should('have.value', 'This is a short description of a project');

    cy.get('button[type="submit"]').click();

    cy.contains('Finished')
      .invoke('attr', 'class')
      .should('contain', 'badge-finished');

    cy.get('.card').should('have.length', 2);
  });

  it.only('Test Store', () => {
    cy.visit('http://localhost:3000');
    cy.wait(['@getDataFirst']);
    cy.window()
      .its('store')
      .invoke('getState')
      .its('project.allIds')
      .as('projectIds');
    const getProjects = win => win.store.getState().project;

    cy.window()
      .pipe(getProjects)
      .then(data => {
        expect(data).to.have.property('byId');
        expect(data.allIds).to.have.length(1);
        expect(data.byId).to.have.property(data.allIds[0]);
        expect(data.byId[data.allIds[0]]).to.have.property('data');
        expect(data.by)
      });
  });
});
