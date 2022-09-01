// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Vue3 Testing Practice!')
  })
})
