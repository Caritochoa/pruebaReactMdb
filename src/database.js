//configuracion de la base de datos.
const mongoose = require("mongoose");
const URI = "mongodb://localhost/tareas";

mongoose
  .connect(URI)
  .then(db => console.log("Db is connected"))
  .catch(error => console.error(error));

module.exports = mongoose;
