import { email, password } from '../../fixtures/auth/loginRequest.json'

describe('Login test', function () {
  beforeEach(function () {
    // Interception of requests
    cy.intercept('POST', 'api/auth/login', {
      fixture: 'auth/userResponse.json',
    }).as('loginRequest')
    cy.intercept('GET', 'api/auth/user', { fixture: 'auth/loginResponse.json' })

    // Go to Profile page
    cy.visit('http://localhost:3000/profile/')

    // Filling the form
    cy.get('[name=email]').type(`${email}{enter}`)
    cy.get('[name=password]').type(`${password}{enter}`)
  })

  it('should login and show profile info', function () {
    cy.wait('@loginRequest')
      .its('request.body')
      .should('deep.equal', { email, password })
    cy.get('[name=email]').should('have.value', email)
  })

  it('should logout', function () {
    cy.get('button').contains('Выход').click()
    cy.get('.auth__form').should('exist')
  })
})
