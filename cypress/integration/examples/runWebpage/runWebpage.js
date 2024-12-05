/// <reference types= "cypress" />
describe('Web Tests', () => {
    it('Visit webpage', () => {
      cy.visit("https://www.wtwco.com/ICT")
    });
  
    it('Should show error with invalid credentials', () => {
      // Test steps
    });
  });