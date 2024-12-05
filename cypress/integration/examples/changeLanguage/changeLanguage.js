/// <reference types= "cypress" />

import changeLanguage from "../../pom/changeLanguage"

describe('Web Tests', function () {
  
  // before(function () {
  //   cy.fixture("userData").then(function (item) {
  //     this.item = item;
  //   });
  // });

  it('Visit webpage', function() {
    cy.visit("https://www.wtwco.com/ICT")

    new changeLanguage().getDropDwnBtn();
    cy.wait(5000)
    new changeLanguage().getAmericaRow();
    cy.wait(2000)
    new changeLanguage().getUnitedEnglish()
  })
})

  
  
   
      
    