// Login command
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

// Add item to cart
Cypress.Commands.add('addToCart', (itemName) => {
  cy.contains('.inventory_item', itemName)
    .find('button')
    .click()
})

// Verify cart count
Cypress.Commands.add('verifyCartCount', (count) => {
  cy.get('.shopping_cart_badge').should('have.text', count.toString())
})

// Any additional custom commands that don't fit in page objects
Cypress.Commands.overwrite('clearLocalStorage', () => {
  cy.clearLocalStorage()
})

Cypress.Commands.overwrite('clearCookies', () => {
  cy.clearCookies()
})
