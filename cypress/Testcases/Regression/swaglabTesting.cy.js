/// <reference types="Cypress" />

describe('Testing the website with the cypress', () => {

    it('Launching the website with the URL', () => {

        cy.visit("https://www.saucedemo.com/");

    })

    it('Logging in the Swag labs with incorrect login credentials', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('input[placeholder="Username"]').type('standard_user{enter}');
        //assertion of the user id field
        cy.get('input[placeholder="Username"]').should('be.visible', 'standard_user');
        cy.get('input[placeholder="Password"]').type('secret_sauc');
        //assertion of the password field
        cy.get('input[placeholder="Password"]').should('be.visible', 'secret_sauce');
        //Click action on the login button
        cy.get('input[type="submit"]').click();
    })

    it('Logging in the Swag labs with correct login credentials', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('input[placeholder="Username"]').type('standard_user');
        //assertion of the User id
        cy.get('input[placeholder="Username"]').should('be.visible', 'standard_user');
        cy.get('input[placeholder="Password"]').type('secret_sauce');
        //assertion of the password field
        cy.get('input[placeholder="Password"]').should('be.visible', 'secret_sauce');
        //Click action on the login button
        cy.get('input[type="submit"]').click();

        //aaertion the title of the product page
        cy.get('span.title').should('have.text', 'Products');

        //cy.get('span.select_container').click();

        //Selecting the option from the drop down
        cy.get("span[class='select_container'] > select[class='product_sort_container']").select('Price (low to high)');

        cy.get("span[class='select_container'] > select[class='product_sort_container']").select(1);

        //cy.wait(5000);
        cy.get('button[class="btn btn_primary btn_small btn_inventory "]').eq(3).click();

        //assertions on the number of list items
        //cy.get('button[class="btn btn_primary btn_small btn_inventory "]').should('have.length',6);
        //mouse action - scrolling action
        //cy.get('.draggable-element').trigger('mousedown', { which: 1 }); // Simulates mouse down event
        //cy.get('.droppable-element').trigger('mousemove').trigger('mouseup', { force: true }); // Simulates mouse move and mouse up events

        //selecting the Cart to checkout the items added
        cy.get('a.shopping_cart_link').click();

        //Clicking on Continue shopping
        cy.get("button[class='btn btn_secondary back btn_medium']").click();

        //Try to add new element to the cart and then checkout the items added in the cart
        cy.get('button[class="btn btn_primary btn_small btn_inventory "]').eq(2).click();

        //Go to cart
        cy.get('a.shopping_cart_link').click();

        //priceValueLocator = "div[class='inventory_item_price']";
        /*cy.get(priceValueLocator).invoke('text').then((text) => {
            textValue = cy.log(text);
            cy.get(priceValueLocator).eq(1).should('contain', '$9.99');
            if (textValue == '$9.99')
        //try to remove the item/s from the cart
            */
        //cy.get("div[class='inventory_item_price']").eq(1).should('contain', '$45.99');
        cy.get("button[class='btn btn_secondary btn_small cart_button']").eq(1).click();

        //Checkout for the bill payments
        cy.get("button[id='checkout']").click();

        //Click on the continue button
        cy.get("input[type='submit']").click();

        //name, lastname, postal details of the customer
        cy.get('input[id="first-name"]').type('Qwert');
        cy.get('input[id="last-name"]').type('ijhgfcx');
        cy.get('input[id="postal-code"]').type(987654);

        //Click on the continue button
        cy.get("input[type='submit']").click();

        //Finish the purchase process
        cy.get('button[id="finish"]').click();

        //Click on the go to home button
        //cy.request('#back-to-products').click();
        cy.get('#back-to-products').click();

        //click on the more options button(three horizontal lines)
        cy.get('#react-burger-menu-btn').click();

        //Click on the close button
        cy.get('div.bm-cross-button').click();

        //click on the more options button(three horizontal lines)
        cy.get('#react-burger-menu-btn').click();

        //click on the logout button
        cy.get("nav[class='bm-item-list'] >a#logout_sidebar_link").click();
    })
})