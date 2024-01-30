describe('spec to launch the lambda test website', () => {
  it('passes', () => {

    cy.visit('https://www.lambdatest.com/');
    cy.title().should('eq','LAMBDATEST');

  

  })
})