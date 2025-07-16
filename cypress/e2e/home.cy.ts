describe('Test homepage', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })

  context('hero section', ()=>{
    it('check h1 heading', () => {
      cy
        .getByData("hero-heading")
        .contains("Testing Next.js Applications with Cypress")
      })
    it('check test features list items', ()=> {
      cy
        .get('dt')
        .eq(0)
        .contains("4 Courses")
      cy
        .get('dt')
        .eq(1)
        .contains('25+ Lessons')
        cy
        .get('dt')
        .eq(2)
        .contains('Free and Open Source')
    })
  })

  context('Course section',()=>{
    it.only('Course: Testing your first NextJS application',()=>{
      cy
      .getByData('course-0')
      .find('a')
      // .eq(-1) //Make it as brittle test if the order of the a elements changed that cause failed to find the element
      .contains('Get started')
      .click()
      cy
      .location('pathname')
      .should('eq','/testing-your-first-application')
    })
    it.only('Course: Testing Foundations',()=>{
      cy
      .getByData('course-1')
      .find('a')
      .contains('Get started')
      .click()
      cy
      .location('pathname')
      .should('eq','/testing-foundations')
    })
    it.only('Course: Cypress Fundamentals',()=>{
      cy
      .getByData('course-2')
      .find('a')
      .contains('Get started')
      .click()
      cy
      .location('pathname')
      .should('eq','/cypress-fundamentals')
    })
  })
})