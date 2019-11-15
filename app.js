const { argv } = require('./config/yargs')
const colors = require('colors')
const { mostrarArchivo, guardarArchivo } = require('./buscador/buscar');

let comando = argv._[0]

switch (comando) {
    case 'mostrar':
        mostrarArchivo(argv.archivo, argv.pais, argv.anio)
    case 'guardar':
        guardarArchivo(argv.archivo, argv.pais, argv.anio)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e.red));
        break;
    default:
        console.log("Comando no válido!");
}
