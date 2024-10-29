import BasePage from './BasePage'

class CartPage extends BasePage {
  constructor() {
    super()
    this.url = '/cart.html'
    this.selectors = {
      checkoutButton: '[data-test="checkout"]',
      cartItem: '.cart_item',
      removeButton: '[data-test="remove-sauce-labs-backpack"]'
    }
  }

  proceedToCheckout() {
    this.clickElement(this.selectors.checkoutButton)
  }

  getCartItems() {
    return this.getElement(this.selectors.cartItem)
  }

  removeItem(itemName) {
    cy.contains(this.selectors.cartItem, itemName)
      .find('button')
      .click()
  }
}

export default new CartPage()
