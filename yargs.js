let opt = {
    archivo: {
        demand: true,
        alias: 'f',
        description: 'Path del archivo'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        description: 'pais'
    },
    anio: {
        alias: 'y',
        default: 1960,
        description: 'anio'
    }
};

const argv = require('yargs')
    .command('mostrar', 'Muestra un archivo de acuerdo a los parametros', opt)
    .command('guardar', 'Guarda el archivo', opt)
    .help()
    .argv;

module.exports = {
    argv
};