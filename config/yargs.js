const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer.'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente'
}

const argv = require('yargs')

.command('crear', 'crea una tarea', {
    descripcion
})
.command('actualizar','actualiza el estado de una tarea', {
    descripcion,
    completado
})
.command('borrar','elimina un elemento del archivo',{
    descripcion
})
.help()
.argv;
    
module.exports = {
    argv
}