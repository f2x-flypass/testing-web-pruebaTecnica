import { Given, When, Then } from 'cypress-cucumber';

Given('que estoy en la página de registro de Flypass', () => {
  cy.visit('https://cert-clientes.flypass.com.co/#!/register/person');
});

When('lleno el formulario de registro con los datos del archivo JSON', () => {
  // Leer los datos del archivo JSON y llenar el formulario de registro
  cy.fixture('registerData.json').then((datos) => {
    cy.get('#nombres').type(datos.informacionRegistro.Nombres);
    cy.get('#apellidos').type(datos.informacionRegistro.Apellidos);
    // Llenar los demás campos del formulario con los datos del JSON
  });
});

Then('debería ver un mensaje de confirmación de registro exitoso', () => {
  cy.get('.success-message').should('be.visible');
});
