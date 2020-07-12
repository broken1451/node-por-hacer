const optCrear = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer",
  },
};

const optBorrar= {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer",
  },
};

const optActualizar = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer",
  },
  completado: {
    demand: true,
    alias: "c",
    default: true,
    desc: "Marca como completado de la tarea por hacer",
  },
};

const optListar = {
  completado: {
    demand: true,
    alias: "c",
    desc: "Listar como completado de la tarea por hacer",
  },
};

const yargsargv = require("yargs")
  .command("crear", "Crear un elemento por hacer", optCrear)
  .command("listarCompletado", "listar un elementos", optListar)
  .command(
    "actualizar",
    "Actualiza el estado completado de una tarea",
    optActualizar
  ).command(
    "borrar",
    "Borrar una tarea",
    optBorrar
  )
  .help().argv;

module.exports = {
  yargsargv: yargsargv,
};
