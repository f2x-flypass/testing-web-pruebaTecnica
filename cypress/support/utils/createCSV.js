const fs = require('fs');

// Función para generar un número aleatorio entre min y max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Datos para la fila del CSV
const data = {
  Nombres: 'Examen',
  Apellidos: 'QA',
  Codigo_referido: '',
  Tipo_documento: 'CC',
  Numero_documento: getRandomNumber(10000, 9999999999), // Genera un número aleatorio entre 10000 y 99999999999
  Celular: '3001234567',
  Departamento: 'Antioquia',
  Municipio: 'Medellin',
  Direccion: 'Crra 18 #12-15',
  Correo_electronico: 'prueba@prueba.com',
  Contraseña: 'prueba1234'
};

// Encabezados del CSV
const headers = Object.keys(data);

// Contenido de la fila
const row = headers.map(key => data[key]);

// Convertir los datos a una fila CSV
const csvRow = row.join(',');

// Crear el archivo CSV
const csvContent = `${headers.join(',')}\n${csvRow}\n`;

// Guardar el archivo CSV
fs.writeFileSync('registerData.csv', csvContent, 'utf8');

console.log('Archivo CSV generado exitosamente.');