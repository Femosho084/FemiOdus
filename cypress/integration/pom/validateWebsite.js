class validateWebsitePage {
  getWait() {
    cy.wait(10000)
  }

  getValidateLink() {
    cy.get('ul li a').each(($el) => {
        const link = $el.attr('href');
        expect(link.toLowerCase()).to.startWith('https://www.wtwco.com/en-us/');
      });         
  }
}
export default validateWebsitePage;