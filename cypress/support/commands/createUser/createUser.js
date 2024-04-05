Cypress.Commands.add('createUser', (csvEntries) => {
  csvEntries.forEach((entry) => {
    cy.escribir(entry.Nombres, ui.SELECTOR_NOMBRE);
    cy.escribir(entry.Apellidos, ui.SELECTOR_APELLIDO);
    cy.realizarClic(ui.SELECTOR_TIPODOCUMENTO);
    cy.escribir(entry.Numero_documento, ui.SELECTOR_DOCUMENTO);
    cy.escribir(entry.Celular, ui.SELECTOR_CELULAR);
    cy.realizarClic(ui.SELECTOR_DEPARTAMENTO);
    cy.realizarClic(ui.SELECTOR_MUNICIPIO);
    cy.escribir(entry.Direccion, ui.SELECTOR_DIRECCION);
    cy.escribir(entry.Correo_electronico, ui.SELECTOR_EMAIL);
    cy.escribir(entry.Contraseña, ui.SELECTOR_CONTRASENA);
    cy.esperarCargaPagina();
  });
});
