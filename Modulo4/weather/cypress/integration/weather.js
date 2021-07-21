import cy from 'cypress';

describe('Exeplo Cypress', () => {
  beforeEach(() => {
    // visitar a pagina
    cy.visit('localhost:3000');
  });

  it('Mostra a App', () => {
    cy.contains('SeM DadOs', { matchCase: false });
  });

  it('Mostra a info de sem dados se a cidade estiver digitada errado', () => {
    cy.get('input').eq(1).type('zzz').get('span').should('not.exist'); // '[id=='']' ou '[name=='']'
  });

  it('Mostra spans com Belo Horizonte', () => {
    cy.get('input')
      .eq(1)
      .type('Belo Horizonte')
      .get('span')
      .contains('Belo Horizonte');
  });

  it('Mostra 5 cidades quando digito Belo Horizonte', () => {
    cy.get('input')
      .eq(1)
      .type('Belo Horizonte')
      .get('span')
      .should('have.length', 5);
  });

  it('Mostra a temperatura de Belo Horizonte', () => {
    cy.get('input')
      .eq(1)
      .type('Belo Horizonte')
      .get('.sc-dlnjwi')
      .first()
      .click();
  });
});
