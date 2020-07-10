const argv = require('./config/yargs').argv;
const porHacer = require('./ToDo/ToDo.js');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log('===========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        if (actualizado){
            console.log('Se actualizo el registro');
        }else{
            console.log('No se actualizo el registro');
        }
        
        break;
    case 'borrar':
        let eliminado = porHacer.borrar(argv.descripcion);
        console.log(eliminado);
        break;

    default:
        console.log('el comando no existe');
}