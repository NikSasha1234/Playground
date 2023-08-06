context('Проверка Sample App негативная', function () {

    beforeEach(function () {
            })

    it('проверка негативного сценария (поля имени и пароля не заполнены) авторизации в Sample App', () =>{
        cy.visit('/sampleapp')

        cy.get('#loginstatus').should('contain', 'User logged out.')

        cy.get('#login').click()

        cy.get('#loginstatus').should('have.text', 'Invalid username/password')

    })


    it('проверка негативного сценария (неправильный пароль) авторизации в Sample App', () =>{
        cy.visit('/sampleapp')

        cy.get('#loginstatus').should('contain', 'User logged out.')

        cy.get('input[name="UserName"]').type('Ivan')
        cy.get('input[name="Password"]').type('efwefew')

        cy.get('#login').click()

        cy.get('#loginstatus').should('have.text', 'Invalid username/password')

    })

    })