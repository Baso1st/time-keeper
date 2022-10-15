describe('authenticate through Okta', () => {
  it('passes', () => {
    cy.visit('https://karauctionservices.okta.com/')
    cy.get('#okta-signin-username').type(Cypress.env('okta_user_name'))
    cy.get('#okta-signin-password').type(Cypress.env('okta_password'), {log: false})
    cy.get('#okta-signin-submit').click()
    cy.get('input').get('.password-with-toggle').type(Cypress.env('okta_mfa_answer'), {log: false})
    cy.get('.button').get('[value="Verify"]').click()
  })
})