class changeLanguagePage{
  getWait() {
    cy.wait(10000);
  }

  getDropDwnBtn() {
    const dropdownBtn = cy.get('[aria-label="Location Selector"] > .font-p')
    dropdownBtn.click();
  }

  getAmericaRow() {
    const americaRow = cy.get('#region-0 > .row')
    americaRow.click();
  }

  getUnitedEnglish() {
    const unitedEnglish = cy.get('#region0 > .row > .col > tbody > :nth-child(15) > :nth-child(2) > .text-left > .d-inline-block > .country-selector__languages')
    unitedEnglish.click();
  }
}

export default changeLanguagePage;