context('Проверка AJAX', function () {

    beforeEach(function () {

       cy.intercept('GET', '**/ajaxdata').as('ajaxdata')
            })

    it('проверка загрузки сообщения с AJAX без мока', () =>{
        cy.visit('/ajax')

        cy.get('#ajaxButton').click()
        cy.wait('@ajaxdata')
        cy.get('.bg-success').should('have.text', 'Data loaded with AJAX get request.')
    })


    it('проверка загрузки сообщения с AJAX с моком', () =>{

        cy.intercept('GET', '/ajaxdata', {
        statusCode: 200,
        body: "Data loaded with AJAX get request."
        }).as('ajaxdata')

            cy.visit('/ajax')

            cy.get('#ajaxButton').click()
            cy.wait('@ajaxdata')
            cy.get('.bg-success').should('have.text', 'Data loaded with AJAX get request.')
        })

    })