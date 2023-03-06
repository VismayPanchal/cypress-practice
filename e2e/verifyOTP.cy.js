
describe("this will try to read OTP from mail", ()=>{
    it("should visit gmail", ()=>{
        cy.visit( 'https://www.google.com/intl/en-GB/gmail/about/')        
        cy.wait(10000)
        cy.get('.header__aside__buttons > .button--medium').click()
    })
})