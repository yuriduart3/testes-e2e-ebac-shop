class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, pais, endereco, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').click().type(endereco)
        cy.get('#billing_city').click().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').click().type(cep)
        cy.get('#billing_phone').click().type(telefone)
        cy.get('#billing_email').click().type(email)
        cy.get('#terms').check()
        cy.get('#place_order').click()
    }

}

export default new EnderecoPage()