describe('spec to launch the lambda test website', () => {
  it('passes', () => {

    //locators
    const allowCookies = "span[class*='bg-black text-white cursor-pointer hover:underline']";


    cy.visit('https://www.lambdatest.com/');
    cy.title().should('eq','LAMBDATEST');

    cy.get(allowCookies).click();

  })
})