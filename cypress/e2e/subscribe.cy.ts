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

    it("Negative case that users enter the invalid email address format", () =>{
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
    it.only("unhappy flow to prevent users using same email address", ()=>{
        cy
        .getByData('email-input')
        .type('john@example.com')
        cy
        .getByData('submit-button')
        .click()
        cy
        .getByData('server-error-message')
        .contains("already exists. Please use a different email address.")
        .should('exist')
    })
})