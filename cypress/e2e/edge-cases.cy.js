import LoginPage from '../support/pages/LoginPage'
import InventoryPage from '../support/pages/InventoryPage'
import CartPage from '../support/pages/CartPage'
import CheckoutPage from '../support/pages/CheckoutPage'

describe('Edge Cases and Form Validation', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
  })

  it('should validate required fields during checkout', () => {
    InventoryPage.addToCart('Sauce Labs Backpack')
    InventoryPage.goToCart()
    CartPage.proceedToCheckout()
    
    // Try to continue without filling required fields
    CheckoutPage.continue()
    CheckoutPage.getErrorMessage().should('be.visible')
    
    // Fill only first name
    CheckoutPage.fillShippingInfo('John', '', '')
    CheckoutPage.continue()
    CheckoutPage.getErrorMessage().should('be.visible')
  })

  it('should handle sorting products', () => {
    InventoryPage.sortProducts('za')
    cy.get('.inventory_item_name')
      .first()
      .should('contain', 'Test.allTheThings()')
  })
})
