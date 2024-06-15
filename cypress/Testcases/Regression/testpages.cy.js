
/**
 * Testing of the website with the URL: https://www.zoho.com/in/books/accounting-software-demo/#/home/dashboard
 */

describe('Testing the Testpages website', () => {

    it('Launching the website with the URL', () => {

        cy.visit("https://www.zoho.com/in/books/accounting-software-demo/#/home/dashboard", {headers: {"Accept-Encoding": "gzip, deflate"}});
        //cy.visit(".font-xlarge text-medium mt-3").should('be.a', 'Hello,Demo User');

        //scrolling the sidebar 

        //cy.scrollTo('center');
        //cy.get('.sidebar').scrollTo('bottom');

        cy.get("li[id='ember99']").click();
        cy.get("li[id='ember103']").click();

    })

})

