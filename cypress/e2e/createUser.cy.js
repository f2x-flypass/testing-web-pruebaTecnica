describe("Pruebas de lectura de archivos", () => {

  it("debería leer el contenido de un archivo CSV", () => {
    cy.readCsvFile('./cypress/support/utils/registerData.csv').then((csvEntries) => {
      // Procesar el contenido del archivo CSV y realizar aserciones
    });
  });

  it("debería leer el contenido de un archivo JSON", () => {
   // return cy.readJsonFile('cypress/support/utils/resgisterData.json').then((jsonData) => {
      // Procesar el contenido del archivo JSON y realizar aserciones
  //  });
  });
});
