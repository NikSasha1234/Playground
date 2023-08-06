
context('Проверка Mouse Over', function () {

    beforeEach(function () {
            })

    it('клик и двойное нажатие в Mouse Over', () =>{

    cy.visit('/mouseover')

    cy.get('#clickCount').should('have.text', '0')
    cy.get('.text-primary').click()
    cy.get('#clickCount').should('have.text', '1')
        cy.get('.text-warning').dblclick()
            cy.get('#clickCount').should('have.text', '3')
    })

    })