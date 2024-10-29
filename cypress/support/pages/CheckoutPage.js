import BasePage from './BasePage'

class CheckoutPage extends BasePage {
  constructor() {
    super()
    this.selectors = {
      firstNameInput: '[data-test="firstName"]',
      lastNameInput: '[data-test="lastName"]',
      postalCodeInput: '[data-test="postalCode"]',
      continueButton: '[data-test="continue"]',
      finishButton: '[data-test="finish"]',
      errorMessage: '[data-test="error"]',
      totalLabel: '.summary_total_label',
      completeHeader: '.complete-header'
    }
  }

  fillShippingInfo(firstName, lastName, postalCode) {
    if (firstName) this.typeText(this.selectors.firstNameInput, firstName)
    if (lastName) this.typeText(this.selectors.lastNameInput, lastName)
    if (postalCode) this.typeText(this.selectors.postalCodeInput, postalCode)
  }

  continue() {
    this.clickElement(this.selectors.continueButton)
  }

  finish() {
    this.clickElement(this.selectors.finishButton)
  }

  getErrorMessage() {
    return this.getElement(this.selectors.errorMessage)
  }

  getOrderConfirmation() {
    return this.getElement(this.selectors.completeHeader)
  }
}

export default new CheckoutPage()
