const fs = require('fs');
const csv = require('csv-parser');
let mostrarArchivo = (archivo, pais, anio) => {

    var data = '';

    var readStream = fs.createReadStream(`${archivo}.csv`, 'utf8');

    readStream.on('data', function(chunk) {
        data += chunk;
    }).on('end', function() {
        console.log(data);
    });
}


let guardarArchivo = (archivo, pais, anio) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`resultados/${pais}-${anio}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`${pais}-${anio}.txt`);
        });
    });
}

module.exports = {
    mostrarArchivo,
    guardarArchivo
};
