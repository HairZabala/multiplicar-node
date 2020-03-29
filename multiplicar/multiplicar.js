//requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida ${base} no es número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es número.`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject();
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

let listarTabla = (base, limite = 10) => {

    if (!Number(base)) {
        throw new Error(`La base introducida ${base} no es número.`);
    }

    if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} no es número.`);
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    console.log(data.green);

}

module.exports = {
    crearArchivo,
    listarTabla
}