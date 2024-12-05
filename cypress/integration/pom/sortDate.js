class sortDatePage{
    getWait() {
        cy.wait(10000);
      }

    getSortDate() {
        const sortDate = cy.get('#coveo9de96e90')
        sortDate.click()
    }

    getArticleCheckBox() {
        const articleBx = cy.get('[data-value="Article"] > .coveo-facet-value-label > .coveo-facet-value-label-wrapper > .coveo-facet-value-checkbox')
        articleBx.click()
    }
}
export default sortDatePage