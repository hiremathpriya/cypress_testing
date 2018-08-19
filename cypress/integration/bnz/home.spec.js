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
        // cy.visit('bnz.co.nz')
        cy.contains('Register').click()
    })
})
describe('it finds the login on the register page and clicks it', () => {
    it('find a Go to Login and click', () => {
        cy.contains('Go to Login').click()
    })
})
describe('input access number and password and login', () => {
    it('adds the access and password and click on the login', () => {
        cy.get('#accessId').type('12345')
        cy.get('#password').type('bomaby')
        cy.get("#login").click()
        cy.find("h3").contains('There were two errors on the page')
        
        
        
    })
})
