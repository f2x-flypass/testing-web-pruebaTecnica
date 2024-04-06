import * as ui from '../../ui/createUser.js'
Cypress.Commands.add('createUser', (userData) => {
    cy.escribir(userData.Nombres, ui.SELECTOR_NOMBRE);
    cy.escribir(userData.Apellidos, ui.SELECTOR_APELLIDO);
    cy.realizarClic(ui.SELECTOR_TIPODOCUMENTO);
   // cy.realizarClicCc(ui.SELECTOR_TIPODOCUMENTOCEDULA);
    cy.seleccionar(userData.Tipo ,ui.SELECTOR_TIPODOCUMENTOCEDULA);
    cy.escribir(userData.Numero, ui.SELECTOR_DOCUMENTO);
    cy.escribir(userData.Celular, ui.SELECTOR_CELULAR);
    //cy.realizarClic(ui.SELECTOR_DEPARTAMENTO);
    //cy.realizarClic(ui.SELECTOR_MUNICIPIO);
    cy.escribir(userData.Direccion, ui.SELECTOR_DIRECCION);
    cy.escribir(userData.CorreoElectronico, ui.SELECTOR_EMAIL);
    cy.escribir(userData.Contraseña, ui.SELECTOR_CONTRASENA);
    cy.realizarClic(ui.SELECTOR_TERMINOS);
    cy.esperarCargaPagina();

});