import BasePage from './BasePage'

class InventoryPage extends BasePage {
  constructor() {
    super()
    this.url = '/inventory.html'
    this.selectors = {
      inventoryItem: '.inventory_item',
      sortDropdown: '[data-test="product-sort-container"]',
      cartBadge: '.shopping_cart_badge',
      cartLink: '.shopping_cart_link',
      burgerMenu: '#react-burger-menu-btn',
      logoutLink: '#logout_sidebar_link'
    }
  }

  addToCart(itemName) {
    cy.contains(this.selectors.inventoryItem, itemName)
      .find('button')
      .click()
  }

  getCartCount() {
    return this.getElement(this.selectors.cartBadge)
  }

  sortProducts(option) {
    cy.get(this.selectors.sortDropdown)
      .should('exist')
      .and('not.be.disabled')
      .wait(500)
      .select(option)
  }

  logout() {
    this.clickElement(this.selectors.burgerMenu)
    this.clickElement(this.selectors.logoutLink)
  }

  goToCart() {
    this.clickElement(this.selectors.cartLink)
  }
}

export default new InventoryPage()
