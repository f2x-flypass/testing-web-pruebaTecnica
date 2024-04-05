const fs = require('fs');

// Función para generar un número aleatorio entre min (incluido) y max (excluido)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Generar un número de identificación aleatorio entre 10000 y 999999999
const numeroIdentificacion = getRandomNumber(10000, 9999999999);

// Datos para el JSON
const datos = {
  informacionRegistro: {
    Nombres: 'Examen',
    Apellidos: 'QA',
    CodigoReferencia: '',
    Identificacion: {
      Tipo: 'CC',
      Numero: numeroIdentificacion
    },
    Celular: '3001234567',
    Departamento: 'Antioquia',
    Municipio: 'Medellin',
    InformacionPersonal: {
      Hogar: {
        Direccion: 'Crra 18 #12-15'
      },
      CorreoElectronico: 'prueba@prueba.com'
    },
    Contraseña: 'prueba1234'
  }
};

// Convertir el objeto a JSON
const json = JSON.stringify(datos, null, 2);

// Guardar el JSON en un archivo
fs.writeFileSync('resgisterData.json', json);

console.log('Archivo JSON creado exitosamente.');