describe('ci-test general', () => {
    before(() => {
        cy.visit('/')
    })
    it('general test', () => {
        cy.get('[class="test-button"]').click()
        cy.get('[class="test-div"')
            .expect(text()).to.eq("Fired")
    })
})