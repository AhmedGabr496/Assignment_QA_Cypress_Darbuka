import BasePage from './BasePage'

class LoginPage extends BasePage {
  constructor() {
    super()
    this.url = '/'
    this.selectors = {
      usernameInput: '[data-test="username"]',
      passwordInput: '[data-test="password"]',
      loginButton: '[data-test="login-button"]',
      errorMessage: '[data-test="error"]'
    }
  }

  login(username, password) {
    this.typeText(this.selectors.usernameInput, username)
    this.typeText(this.selectors.passwordInput, password)
    this.clickElement(this.selectors.loginButton)
  }

  getErrorMessage() {
    return this.getElement(this.selectors.errorMessage)
  }
}

export default new LoginPage()
