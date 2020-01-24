let user;

before(function fetchUser () {
    cy.request('POST', 'http://localhost:4000/api/signup', {
      username: 'test',
      password: 'test',
    })
    .its('body')
    .then((res) => {
      user = res
    })
  })
  
  // but set the user before visiting the page
  // so the app thinks it is already authenticated
  beforeEach(function setUser () {
    cy.visit('/', {
      onBeforeLoad (win) {
        // and before the page finishes loading
        // set the user object in local storage
        win.localStorage.setItem({'loggedIn': true});
      },
    })
    // the page should be opened and the user should be logged in
  })

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
})

