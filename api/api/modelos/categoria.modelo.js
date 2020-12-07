const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CategoriaSchema = new Schema({
    nombre : String,
    precio : Number
});

module.exports = mongoose.model("Categoria", CategoriaSchema, "categoria");