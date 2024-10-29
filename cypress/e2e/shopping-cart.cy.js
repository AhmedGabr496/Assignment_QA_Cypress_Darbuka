import LoginPage from '../support/pages/LoginPage'
import InventoryPage from '../support/pages/InventoryPage'
import CartPage from '../support/pages/CartPage'
import CheckoutPage from '../support/pages/CheckoutPage'

describe('Shopping Cart Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
  })

  it('should add items to cart', () => {
    InventoryPage.addToCart('Sauce Labs Backpack')
    InventoryPage.getCartCount().should('have.text', '1')
    
    InventoryPage.addToCart('Sauce Labs Bike Light')
    InventoryPage.getCartCount().should('have.text', '2')
  })

  it('should complete checkout process', () => {
    InventoryPage.addToCart('Sauce Labs Backpack')
    InventoryPage.goToCart()
    CartPage.proceedToCheckout()
    
    CheckoutPage.fillShippingInfo('John', 'Doe', '12345')
    CheckoutPage.continue()
    CheckoutPage.finish()
    
    CheckoutPage.getOrderConfirmation()
      .should('contain', 'Thank you')
  })
})
