/// <reference types= "cypress" />

import searchFunctionPage from "../../pom/searchFunction"
import sortDatePage from "../../pom/sortDate";

describe('Web Tests', function () {
  
    // before(function () {
    //   cy.fixture("userData").then(function (item) {
    //     this.item = item;
    //   });
    // });
  
    it('Visit webpage', function() {
      cy.visit("https://www.wtwco.com/ICT")
   
      new searchFunctionPage().getSearchbar();
      new searchFunctionPage().getSearchInputField()
      cy.wait(5000)
      new searchFunctionPage().getClickIcon()
      cy.wait(5000)
      new sortDatePage().getSortDate()
      cy.wait(5000)
      new sortDatePage().getArticleCheckBox()
    });
  });
  