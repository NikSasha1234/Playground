context('Проверка Visibility', function () {

    beforeEach(function () {
            })

    it('проверка видимости кнопок', () =>{
        cy.visit('/visibility')

        cy.get('#hideButton').click()

        cy.get('#hideButton').should('be.visible')

        cy.get('#removedButton').should('not.exist')

        cy.get('#zeroWidthButton').should('not.visible')

        cy.get('#overlappedButton').should('be.visible')

        cy.get('#transparentButton').should('not.visible')
        cy.get('#invisibleButton').should('not.visible')
        cy.get('#notdisplayedButton').should('not.visible')

        cy.get('#offscreenButton').should('be.visible')
    })

    })