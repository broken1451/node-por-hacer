const path = require("path");

const fyleSystem = require("fs");

let listadoPorHacer = [];

const crear = (descripcion) => {
  let porHacer = {
    descripcion: descripcion,
    completado: false,
  };
  cargarBD();
  listadoPorHacer.push(porHacer);
  guardarData();
  return porHacer;
};

const guardarData = () => {
  let data = JSON.stringify(listadoPorHacer);
  var pathJson = path.resolve(__dirname, "../bd/data.json");
  //   console.log("pathJson: ", pathJson);
  fyleSystem.writeFile(pathJson, data, (err) => {
    if (err) {
      throw new Error("error no se pudo grabar");
    } else {
      //   return console.log(`la data ${data}.json ha sido guardada`);
    }
  });
  return data;
};

const cargarBD = () => {
  try {
    listadoPorHacer = require("../bd/data.json"); // cargar el archivo
    console.log("listadoPorHacer: ", listadoPorHacer);
  } catch (error) {
    listadoPorHacer = [];
    // console.log("listadoPorHacer err: ", listadoPorHacer);
  }
};

const getListado = () => {
  listadoPorHacer = require("../bd/data.json");
  //   console.log("funicona");
  console.log("listadoPorHacer: ", listadoPorHacer);
  return listadoPorHacer;
};

const ActualizarListado = (descripcion, completado = true) => {
  cargarBD();
  let index = listadoPorHacer.findIndex((tarea) => {
    console.log("tarea: ", tarea);
    return tarea.descripcion === descripcion;
  });
  console.log("index: ", index);

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarData();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  //   cargarBD();
  listadoPorHacer = require("../bd/data.json");
  console.log("descripcion: ", descripcion);
  let nuevoData = [];
  nuevoData = listadoPorHacer.filter((elementos) => {
    return elementos.descripcion != descripcion;
  });
  console.log("nuevoData: ", nuevoData);
  if (nuevoData.length === listadoPorHacer.length) {
    return false;
  } else {
    console.log("aca");
    listadoPorHacer = nuevoData;
    guardarData();
    return true;
  }
};

const listarPorCompletado = (completado) => {
   //   cargarBD();
   listadoPorHacer = require("../bd/data.json");
   console.log("completado: ", completado);
   let nuevoDataFalse = [];
   nuevoDataFalse = listadoPorHacer.filter((elementos) => {
     return elementos.completado != completado;
   });
   
    console.log('nuevoDataFalse: ', nuevoDataFalse);
    return nuevoDataFalse;
//    console.log("nuevoData: ", nuevoData);
//    if (nuevoData.length === listadoPorHacer.length) {
//      return false;
//    } else {
//      console.log("aca");
//      listadoPorHacer = nuevoData;
//      guardarData();
//    }
 
};

module.exports = {
  crear: crear,
  getListado: getListado,
  ActualizarListado: ActualizarListado,
  borrar: borrar,
  listarPorCompletado: listarPorCompletado,
};
