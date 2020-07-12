// const {argv} = require('yargs')
// const yargsargv = require("yargs").argv;
const yargsargv = require("./config/yagrs").yargsargv;
const porHacer = require("./todo/todo");
const colors = require("colors");

let comandos = yargsargv._[0];

switch (comandos) {
  case "crear":
    let tarea = porHacer.crear(yargsargv.descripcion);
    // console.log("crear por hacer");
    console.log("crear tarea por hacer: ", tarea);
    break;

  case "listar":
    let listado = porHacer.getListado();
    console.log("mostrar todas las tareas por hacer");
    for (const tarea of listado) {
      console.log("====Por Hacer====".green);
      console.log(tarea.descripcion);
      console.log(tarea.completado);
      console.log("=================".green);
    }

    break;
  case "listarCompletado":
    let listadoCompletado = porHacer.listarPorCompletado(yargsargv.completado);
    console.log("mostrar todas las tareas por hacer",  listadoCompletado);
    // for (const tarea of listadoCompletado) {
    //   console.log("====Por Hacer====".green);
    //   console.log(tarea.descripcion);
    //   console.log(tarea.completado);
    //   console.log("=================".green);
    // }

    break;
  case "actualizar":
    let actualiza = porHacer.ActualizarListado(
      yargsargv.descripcion,
      yargsargv.completado
    );
    console.log("Actualizar una tarea por hacer:  ", actualiza);
    break;

    case "borrar":
      let tareaborrada = porHacer.borrar(yargsargv.descripcion);
      console.log("tareaborrada tarea por hacer: ", tareaborrada);
      break;

  default:
    console.log("No es un comando reconocido");
    break;
}

console.log(yargsargv);
