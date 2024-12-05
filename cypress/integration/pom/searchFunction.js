class searchFunctionPage {
    getWait() {
        cy.wait(10000);
      }

      getSearchbar() {
        const searchBar = cy.get('.site-nav__btn--search-menu')
        searchBar.click()
      }

      getSearchInputField() {
        const searchInputfield = cy.get('form > input').click()
        searchInputfield.type("IFRS 17")
      }

      getClickIcon() {
        const clickIcon = cy.xpath("//body/div[2]/div[2]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/form[1]/a[1]")
        clickIcon.type('{Enter}')
      }
}
export default searchFunctionPage;