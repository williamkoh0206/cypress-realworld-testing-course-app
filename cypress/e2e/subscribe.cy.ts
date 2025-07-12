describe('NewsLetter Subscribe Form', ()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })

    it("happy flow of users entering the valid email address", () => {
        cy
        .getByData('email-input')
        .type('abc@gmail.com')
        cy
        .getByData('submit-button')
        .click()
        cy
        .getByData('success-message')
        .should('exist')
        .contains('abc@gmail.com')
    })

    it.only("Negative case that users enter the invalid email address format", () =>{
        cy
        .getByData('email-input')
        .type('abc')
        cy
        .getByData('submit-button')
        .click()
        cy
        .getByData('success-message')
        .should('not.exist')
    })
})