const fs = require("fs/promises");
const { obtenerTareas } = require("../helpers.js");

const deleteFunction = async ({ id }) => {
  try {
    const arrayTareas = await obtenerTareas();

    if (!arrayTareas.some((tarea) => tarea.id === id))
      throw new Error(`La tarea con el id ${id} no existe`);

    const nuevasTareas = arrayTareas.filter((tarea) => tarea.id !== id);
    await fs.writeFile("tareas.txt", JSON.stringify(nuevasTareas, null, 2));
    console.log("Se ha eliminado la tarea ID " + id);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { deleteFunction };
