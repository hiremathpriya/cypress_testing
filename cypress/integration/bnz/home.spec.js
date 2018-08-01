describe('my first test', () => {
    it('does not do much', () => {
        expect(true).to.equal(true)
    })
})
describe('bnz home page', () => {
    it('takes me to bnz website', () => {
        cy.visit('bnz.co.nz')
    })
})
describe('it will find the content on the page' , () => {
    it('finds the content on the page,"Register"', () => {
        cy.visit('bnz.co.nz')
        cy.contains('Register')
    })
})