export default class BasePage {
  constructor() {
    this.url = '/'
  }

  visit() {
    cy.visit(this.url)
  }

  getElement(selector) {
    return cy.get(selector)
  }

  clickElement(selector) {
    this.getElement(selector).click()
  }

  typeText(selector, text) {
    this.getElement(selector).type(text)
  }
}
