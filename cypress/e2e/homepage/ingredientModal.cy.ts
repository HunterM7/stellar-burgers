describe('Test on open ingredient modal', function () {
  beforeEach(function () {
    // Visit Homepage
    cy.visit('http://localhost:3000/')

    // Get ingredients
    cy.get('li[class^=IngredientCard_wrapper]').as('ingredients')
    cy.get('@ingredients').first().as('ingredient')

    // Get Drop zone
    cy.get('[class^=ConstructorBody_wrapper]').as('dropTarget')
  })

  it('should find ingredients on the page', function () {
    cy.get('@ingredients').should('have.length.at.least', 3)
  })

  it('should open modal, check content and then close it', function () {
    // Open ingredient details modal
    cy.get('@ingredients').first().click()

    // Check existing of ingredient info
    cy.get('h2[class^=Modal_title]').should('exist')
    cy.get('h3[class^=IngredientInfoCard_title]').should(
      'have.text',
      'Краторная булка N-200i',
    )
    cy.get('p[class^=IngredientInfoCard_nutrients__quantity]').as('nutrients')
    cy.get('@nutrients').first().should('contain', 420)
    cy.get('@nutrients').last().should('contain', 53)
    cy.get('[class^=Modal_closeBtn__]').click()
  })

  it('should test dnd and order functionality', function () {
    cy.get('@ingredient')
    // ('@dropTarget')
  })
})

// 420 53
