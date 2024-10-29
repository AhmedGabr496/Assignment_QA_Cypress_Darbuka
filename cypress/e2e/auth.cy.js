import LoginPage from '../support/pages/LoginPage'
import InventoryPage from '../support/pages/InventoryPage'

describe('Authentication Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should login successfully with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('should show error with invalid credentials', () => {
    LoginPage.login('invalid_user', 'wrong_password')
    LoginPage.getErrorMessage().should('be.visible')
  })

  it('should logout successfully', () => {
    LoginPage.login('standard_user', 'secret_sauce')
    InventoryPage.logout()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })

  it('should block locked out user', () => {
    LoginPage.login('locked_out_user', 'secret_sauce')
    LoginPage.getErrorMessage().should('contain', 'locked out')
  })
})
