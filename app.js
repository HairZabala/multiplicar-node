const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log(`Archivo Creado: ` + colors.blue(`${resp} ha sido creado!`)))
            .catch(e => console.log(e));
        break;
    case "listar":
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log(`El comando ${comando} no es valido.`);
}