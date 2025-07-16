describe('User Journey',()=>{
    it('A user pick up a course from the homepage and complete the whole lesson',()=>{
        cy.visit('http://localhost:3000/')
        cy
        .getByData("course-0")
        .find('a')
        .contains('Get started')
        .click()
        cy
        .location('pathname')
        .should('eq','/testing-your-first-application')
        cy
        .getByData('next-lesson-button')
        .should('exist')
        .contains('Start Course')
        .click()
        cy //include explict wait for updating the route
        .url({
            timeout:6000
        })
        .should('include', '/testing-your-first-application/app-install-and-overview');
        cy //finish the quiz by selecting the checkbox
        .getByData('challenge-answer-0')
        .should('exist')
        .click()
        cy //click the next lesson button
        .getByData('next-lesson-button')
        .should('exist')
        .contains('Next Lesson')
        .click()
        cy
        .location("pathname")
        .should('eq','/testing-your-first-application/installing-cypress-and-writing-our-first-test')
        cy //finish the quiz by selecting the checkbox
        .getByData('challenge-answer-0')
        .should('exist')
        .click()
        cy
        .getByData('next-lesson-button')
        .should('exist')
        .contains('Next Lesson')
        .click()
        cy
        .url()
        .should('include','/testing-your-first-application/setting-up-data-before-each-test')
        cy //finish the quiz by selecting the checkbox
        .getByData('challenge-answer-0')
        .should('exist')
        .click()
        cy
        .getByData('next-lesson-button')
        .should('exist')
        .contains('Complete Course')
        .click()
        cy
        .location("pathname")
        .should('eq','/')
    })
})