describe('Testing the sample website with the cypress', ()=> {
    it('Launching the website with the URL', ()=> {
        cy.visit("www.google.com")
    })
})