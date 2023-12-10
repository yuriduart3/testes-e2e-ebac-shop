/// <reference types="cypress" />
import enderecoPage from "../support/page_objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProdutos('M', 'Green', '3')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutosDois('M', 'Red', '3')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutosTres('M', 'Green', '3')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutosQuatro('34', 'Gray', '3')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
       
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
        )
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})
