/// <reference types= "cypress" />

import searchFunctionPage from "../../pom/searchFunction"

describe('Web Tests', function () {
  
    // before(function () {
    //   cy.fixture("userData").then(function (item) {
    //     this.item = item;
    //   });
    // });
  
    it('Visit webpage', function() {
      cy.visit("https://www.wtwco.com/ICT")
   
      new searchFunctionPage().getSearchbar();
      cy.wait(3000)
      new searchFunctionPage().getSearchInputField()
      cy.wait(5000)
      new searchFunctionPage().getClickIcon()
    });
  });
  