describe('Login test', function () {
  const email = 'test'
  const password = 'test'

  beforeEach(() => {
    // cy.intercept('GET', "api/auth/login", {fixture: })
    cy.visit('http://localhost:3000/profile/')
    cy.get('[name=email]').type(`${email}{enter}`)
    cy.get('[name=password]').type(`${password}{enter}`)
  })

  it('should login and show profile info', function () {
    cy.get('[name=email]').should('have.value', email)
  })

  it('should logout', function () {
    cy.get('button').click()
    cy.get('.auth__form').should('exist')
  })
})
