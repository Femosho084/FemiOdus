// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('SelectProductAndAddToCart', (SelectProductAndAddToCart) => {
    cy.get("h2[class='product-title']").each(($el, index, $list) => {
        if($el.text().includes(SelectProductAndAddToCart)) {
            cy.get("button[class='button-2 product-box-add-to-cart-button']").eq(index).click()
        }
    })  
})

//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })