Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (){
    cy.get('#firstName').type('REINALDO')
        cy.get('#lastName').type('FERNANDES')
        cy.get('#email').type('reinaldo.fernandes@gmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button','Enviar').click()
        cy.get('.success').should('be.visible')


})