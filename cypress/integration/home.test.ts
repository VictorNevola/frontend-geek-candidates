describe('Renderiza a Home', () => {
    it('Verifica se a Home foi renderizada', () => {
      cy.visit('/')
    });

    it('Verifica existe a info de como renderizar os cards', () => {
      cy.get('.styles__Em-sc-115rjvp-3').contains("Para filtrar os candidatos conforme sua escolha, selecione os filtros abaixo")
    });

    it('Verifica se existe o component de filtros', () => {
      cy.get('.styles__Aside-sc-1mb3uxy-2')
    });

    it('Verifica se ao clicar em algum filtro de tecnologia o botao de filtrar renderiza e ao clicar no botao ele trás 5 cards com os candidatos', () => {
      cy.get(':nth-child(3) > .styles__Ul-sc-1mb3uxy-6 > :nth-child(1) > .styles__Label-sc-1mb3uxy-8').click({force: true})
      cy.get('.styles__BtnActionFilter-sc-1mb3uxy-11').contains('Filtrar');
      cy.get('.styles__BtnActionFilter-sc-1mb3uxy-11').click({force: true});
      cy.get('.styles__Section-sc-1ln7tar-0').children('div').should('have.length', 5);
      cy.get(':nth-child(3) > .styles__Ul-sc-1mb3uxy-6 > :nth-child(1) > .styles__Label-sc-1mb3uxy-8').click({force: true})
    });

    it('Tenho uma vaga para Florianópolis, para trabalhar com Ruby, e quero 2 anos ou mais de experiência', () => {
      //Set Ruby
      cy.get(':nth-child(112) > .styles__Label-sc-1mb3uxy-8').click({force: true});
      //Set Experience 2-3 anos ou mais
      cy.get('#checkbox_experiences > :nth-child(3) > :nth-child(2)').click({force: true});
      //Set Localizarion Florianopolis-SC
      cy.get(':nth-child(5) > .styles__Ul-sc-1mb3uxy-6 > :nth-child(18) > .styles__Label-sc-1mb3uxy-8').click({force: true});
      //Click In Filter
      cy.get('.styles__BtnActionFilter-sc-1mb3uxy-11').click({force: true});
      //Return Cards
      cy.get('.styles__Section-sc-1ln7tar-0').children('div').its('length').should('be.gte', 1)
    })


});

export {};