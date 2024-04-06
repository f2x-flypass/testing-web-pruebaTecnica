import * as ui from '../support/ui/createUser.js'

describe("Create a new user", () => {
    beforeEach(() => {
        // Eliminar cookies antes de cada prueba
        cy.clearCookies();
        cy.visit("https://cert-clientes.flypass.com.co/#!/register/person");
    });
  it("debería leer el contenido de un archivo CSV", () => {
   // cy.readCsvFile('./cypress/support/utils/registerData.csv').then((csvEntries) => {
      // Procesar el contenido del archivo CSV y realizar aserciones
 //   });
  });

  it("debería leer el contenido de un archivo JSON", () => {
        cy.fixture('./createUser/data.json').then((usuario) =>{
            cy.createUser(usuario)
        })
  });
});
