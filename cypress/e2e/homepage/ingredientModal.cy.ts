describe('Test on open ingredient modal', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000/')
    // Get ingredients
    cy.get('li[draggable=true]').as('ingredients')
  })

  it('should find ingredients on the page', function () {
    cy.get('@ingredients').should('have.length.at.least', 3)
  })

  it('should open modal window', function () {
    cy.get('@ingredients').first().click()
    cy.get('h2').contains('Детали ингредиента').should('exist')
  })

  it('should close modal window', function () {
    cy.get('@ingredients').first().click()
    cy.get('button').contains('')
  })
})
