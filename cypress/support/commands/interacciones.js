Cypress.Commands.add("realizarClic", (selector) => {
  cy.get(selector).as("elemento");
  cy.get("@elemento")
  .should("be.visible")
  .click({force: true});
});

Cypress.Commands.add("realizarClicCc", (selector) => {
  cy.get(selector).as("elemento");
  cy.get("@elemento")
  .should("be.enable")
  .click({force: true});
});

Cypress.Commands.add("seleccionar", (valor, selector) => {
  cy.get(selector).as("elemento");
  cy.get("@elemento")
  .should('have.text', 'CC')
});

Cypress.Commands.add("escribir", (texto, selector) => {
    if(texto === null){
      return ; // no ejecuta la acción
    }
    cy.get(selector).as("elemento");
    cy.get("@elemento")
    .should("be.visible")
    .should("be.enabled")
    .type(texto);
  });

  Cypress.Commands.add("esperarCargaPagina", () => {
    cy.document().should("exist");
  });
