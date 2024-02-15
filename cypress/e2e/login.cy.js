/// <reference types="cypress"/>

//feature
describe('Login', () => {
    //cenarios
    it('Login com sucesso', () => {
        // 1- Acessar site na tela de login
        cy.visit('/login')
        // 2- escrever email e senha
        cy.get('#user').type('gustavo@email.com')

        cy.get('#password').type('123456')

        // 3- clicar em login
        cy.get('#btnLogin').click()

        // 4- verificar se login foi sucesso
        cy.url().should('include','/my-account')
    });


    it.only('Login com sucesso', () => {
        
        // 1- acessar site root
        cy.visit('/')

        cy.get('.form-control').type('gustavo@email.com{enter}')
        
    });
});


