 const fs = require('fs');

 // Función para leer archivos CSV
 function readCsvFile(filePath) {
   return cy.readFilefilePath(filePath).then((csvData) => {
     const csvRows = csvData.split('\n');
     const headers = csvRows[0].split(',');
     const csvEntries = [];
     for (let i = 1; i < csvRows.length; i++) {
       const row = csvRows[i].split(',');
       const entry = {};
       for (let j = 0; j < headers.length; j++) {
         entry[headers[j]] = row[j];
       }
       csvEntries.push(entry);
     }
     return csvEntries;
   });
 }

 // Función para leer archivos JSON
 function readJsonFile(filePath) {
   return cy.readFile(filePath);
 }

 module.exports = {
   readCsvFile,
   readJsonFile
 };
