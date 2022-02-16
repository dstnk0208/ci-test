describe('ci-test general', () => {
    before(() => {
        cy.visit('/')
    })
    it('general test', () => {
        cy.get('[class="test-button"]').click()
        cy.get('[class="test-div"]')
            .should('have.text', 'Fired')
    })
})